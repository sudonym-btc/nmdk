import 'package:marketplace_evm/ports.dart';
import 'package:marketplace_evm/usecase/evm/chain/evm_chain.dart';
import 'package:marketplace_evm/usecase/evm/models/amount_spec.dart';
import 'package:marketplace_evm/usecase/evm/operations/operation_state_store.dart';
import 'package:marketplace_evm/usecase/evm/operations/swap_in/swap_in_models.dart';
import 'package:marketplace_evm/usecase/evm/operations/swap_in/swap_in_operation.dart';
import 'package:marketplace_evm/usecase/evm/operations/swap_in/swap_in_state.dart';
import 'package:marketplace_evm/usecase/evm/operations/swap_in_tracker.dart';
import 'package:marketplace_evm/util/custom_logger.dart';
import 'package:marketplace_models/main.dart';
import 'package:sqlite3/common.dart';
import 'package:sqlite3/sqlite3.dart';
import 'package:test/test.dart';
import 'package:web3dart/web3dart.dart';

import 'support/fake.dart';

// BOLT11 decoder's fixed 1000-sat fixture; validation checks its amount/hash.
const _invoice =
    'lnbc10u1pdsw4dkpp5mmlhfpcw4rj0scnyqmw02yvwpn4h6d40wyep3yew8l954sfl6ucqdqqcqzysxqrrssaayzylslcav0sr3c7237mwea5k67vk7t3j6pdmvnuuadxy0dsj5zalg6merxgndc74nc753lnuyx7t2sjecfpxp820r9use77n7vyqcpp7dlfy';
const _hash =
    'deff74870ea8e4f8626406dcf5118e0ceb7d36af713218932e3fcb4ac13fd730';

SwapInData _data({
  String? invoice = _invoice,
  String hash = _hash,
  int onchainSats = 900,
}) => SwapInData(
  boltzId: 'external-swap',
  preimageHex: '01'.padLeft(64, '0'),
  preimageHash: hash,
  onchainAmountSat: onchainSats,
  timeoutBlockHeight: 1000,
  chainId: 31337,
  accountIndex: 2,
  invoiceString: invoice,
  parentOperationId: 'trade-1',
);

void main() {
  late CommonDatabase database;
  late _Auth auth;
  late _RacingStore store;
  late List<_Operation> operations;
  final logger = CustomLogger();

  setUp(() {
    database = sqlite3.openInMemory();
    auth = _Auth(SwapInTracker(logger));
    store = _RacingStore(database, logger, auth);
    auth.operationStateStore = store;
    operations = [];
  });

  tearDown(() async {
    for (final operation in operations) {
      await operation.close();
    }
    await auth.swapInTracker.dispose();
    await store.dispose();
    database.close();
  });

  _Operation operation({SwapInData? data, SwapInState? initialState}) {
    final instance = _Operation(auth, data ?? _data(), initialState);
    operations.add(instance);
    return instance;
  }

  test('external invoice handoff is durable before return and resumes without dispatch', () async {
    final original = operation();
    final awaiting = await original.prepareExternalPayment();
    final json = await store.read('swap_in', awaiting.data.boltzId);

    expect(json!['state'], 'awaitingOnChain');
    expect(json['invoiceString'], _invoice);
    expect(original.state, same(awaiting));
    expect(original.createCount, 1);
    expect(original.dispatchCount, 0);
    final recovered = operation(initialState: SwapInState.fromJson(json));
    expect(await recovered.recover(isBackground: true), isTrue);
    expect(recovered.fundingChecks, 1);
    expect(recovered.dispatchCount, 0);
    expect(
      (await store.read('swap_in', awaiting.data.boltzId))!['state'],
      'completed',
    );
  });

  test(
    'concurrent calls and a stale worker reuse the durable handoff',
    () async {
      final original = operation();
      final results = await Future.wait([
        original.prepareExternalPayment(),
        original.prepareExternalPayment(),
      ]);
      final stale = operation(initialState: SwapInRequestCreated(_data()));
      final retried = await stale.prepareExternalPayment();
      expect(results.map((result) => result.data.boltzId).toSet(), {
        'external-swap',
      });
      expect(retried.data.invoiceString, _invoice);
      expect(original.createCount, 1);
      expect(stale.createCount, 0);
      expect(original.dispatchCount + stale.dispatchCount, 0);
      expect((await store.readAll('swap_in')), hasLength(1));
    },
  );

  test('CAS preserves a concurrent internal payment dispatch', () async {
    final current = operation(initialState: SwapInRequestCreated(_data()));
    await store.write('swap_in', 'external-swap', current.state.toJson());
    store.beforeHandoff = () {
      store.atomicClaim(
        namespace: 'swap_in',
        id: 'external-swap',
        allowedStates: {'requestCreated'},
        busyStateName: 'paymentDispatching',
        busyStateJson: SwapInPaymentDispatching(_data()).toJson(),
        staleTimeout: const Duration(minutes: 45),
      );
    };
    await expectLater(current.prepareExternalPayment(), throwsStateError);
    expect(current.state, isA<SwapInPaymentDispatching>());
    expect(
      (await store.read('swap_in', 'external-swap'))!['state'],
      'paymentDispatching',
    );
    expect(current.dispatchCount, 0);
  });

  for (final invalid in [
    (name: 'missing invoice', data: _data(invoice: null)),
    (name: 'mismatched payment hash', data: _data(hash: '00' * 32)),
    (name: 'insufficient invoice amount', data: _data(onchainSats: 1001)),
    (name: 'excessive fees', data: _data(onchainSats: 800)),
  ]) {
    test('rejects ${invalid.name} before enabling external payment', () async {
      final current = operation(data: invalid.data);
      await expectLater(current.prepareExternalPayment(), throwsStateError);
      expect(
        (await store.read('swap_in', 'external-swap'))!['state'],
        'requestCreated',
      );
      expect(current.dispatchCount, 0);
    });
  }
}

class _Operation extends SwapInOperation {
  final SwapInData createdData;
  int createCount = 0;
  int dispatchCount = 0;
  int fundingChecks = 0;

  _Operation(_Auth auth, this.createdData, SwapInState? initialState)
    : super(
        auth: auth,
        logger: CustomLogger(),
        params: SwapInParams(
          evmKey: EthPrivateKey.fromHex('01'.padLeft(64, '0')),
          accountIndex: 2,
          amountSpec: AmountSpec.output(
            TokenAmount.fromInt(TokenUnit.sat, 900, Token.native(31337)),
          ),
        ),
        initialState: initialState,
      );

  @override
  EvmChain get chain =>
      throw UnimplementedError('No chain call during handoff');

  @override
  Future<({DenominatedAmount min, DenominatedAmount max})> getSwapLimits() =>
      throw UnimplementedError('No limit lookup during handoff');

  @override
  Future<SwapInState> executeStep(SwapInStep step) async {
    switch (step) {
      case SwapInStep.createSwap:
        createCount++;
        return SwapInRequestCreated(createdData);
      case SwapInStep.dispatchPayment:
        dispatchCount++;
        throw StateError('External-payment flow must never dispatch Lightning');
      case SwapInStep.ensureFunded:
        fundingChecks++;
        return SwapInCompleted(state.data!);
      default:
        throw StateError('Unexpected step $step');
    }
  }
}

class _Auth extends Fake implements EvmAuth {
  @override
  final SwapInTracker swapInTracker;
  @override
  late OperationStateStore operationStateStore;
  _Auth(this.swapInTracker);
  @override
  String get activePubkey => 'test-user';
  @override
  void Function(String, String)? get onSwapProgress => null;
}

class _RacingStore extends OperationStateStore {
  void Function()? beforeHandoff;
  _RacingStore(super.db, super.logger, super.auth);

  @override
  WriteIfOwnedResult writeIfOwned({
    required String namespace,
    required String id,
    required String expectedState,
    required Map<String, dynamic> json,
  }) {
    if (json['state'] == 'awaitingOnChain') {
      final race = beforeHandoff;
      beforeHandoff = null;
      race?.call();
    }
    return super.writeIfOwned(
      namespace: namespace,
      id: id,
      expectedState: expectedState,
      json: json,
    );
  }
}
