import 'dart:typed_data';

import 'package:crypto/crypto.dart';
import 'package:marketplace_evm/marketplace_evm.dart';
import 'package:wallet/wallet.dart' show EthereumAddress;
import 'package:web3dart/web3dart.dart';
import 'package:test/test.dart';

import 'support/fake.dart';

final _address = EthereumAddress.fromHex(
  '0x8888888888888888888888888888888888888888',
);
final _code = Uint8List.fromList([0x60, 0x80, 0x40]);

class _Client extends Fake implements Web3Client {
  String domainName = 'Nostr MultiEscrow';
  String domainVersion = '7';
  BigInt nonce = BigInt.zero;
  EthereumAddress? nonceBeneficiary;

  @override
  Future<List<dynamic>> call({
    EthereumAddress? sender,
    required DeployedContract contract,
    required ContractFunction function,
    required List<dynamic> params,
    BlockNum? atBlock,
  }) async => switch (function.name) {
    'eip712Domain' => [
      Uint8List.fromList([15]),
      domainName,
      domainVersion,
      BigInt.from(31),
      _address,
      Uint8List(32),
      <BigInt>[],
    ],
    'withdrawNonces' => [
      (() {
        nonceBeneficiary = params.single;
        return nonce;
      })(),
    ],
    _ => throw StateError('Unexpected contract read ${function.name}'),
  };
}

class _Chain extends Fake implements EvmChain {
  @override
  final _Client client = _Client();
  @override
  final config = const EvmChainConfig(
    id: 'fixture',
    chainId: 31,
    rpcUrls: [],
    nativeDenomination: 'BTC',
  );
  @override
  Future<Uint8List> getCode(
    EthereumAddress address, {
    BlockNum? atBlock,
  }) async => _code;
}

void main() {
  late _Chain chain;
  late MultiEscrowWrapper wrapper;
  setUp(() {
    chain = _Chain();
    wrapper = MultiEscrowWrapper(
      address: _address,
      chain: chain,
      logger: CustomLogger(),
      expectedBytecodeHash: '0x${sha256.convert(_code)}',
    );
  });

  test(
    'accepts only the canonical prefixed lowercase bytecode identity',
    () async {
      final hash = '0x${sha256.convert(_code)}';
      await wrapper.ensureDeployed();
      for (final advertised in [hash.substring(2), hash.toUpperCase()]) {
        final contract = MultiEscrowWrapper(
          address: _address,
          chain: chain,
          logger: CustomLogger(),
          expectedBytecodeHash: advertised,
        );
        await expectLater(contract.ensureDeployed(), throwsStateError);
      }
    },
  );

  test('rejects unsupported signing domains', () async {
    chain.client.domainName = 'Hostr MultiEscrow';
    chain.client.domainVersion = '6';
    await expectLater(wrapper.ensureDeployed(), throwsStateError);
  });

  test(
    'rejects deployment whose code differs from the advertised identity',
    () async {
      wrapper = MultiEscrowWrapper(
        address: _address,
        chain: chain,
        logger: CustomLogger(),
        expectedBytecodeHash: '0' * 64,
      );
      await expectLater(wrapper.ensureDeployed(), throwsStateError);
    },
  );

  test(
    'reads the beneficiary nonce for every new withdrawal signature',
    () async {
      final key = EthPrivateKey.fromHex('01'.padLeft(64, '0'));
      final args = WithdrawArgs(
        token: SupportedEscrowContract.zeroAddress,
        ethKey: key,
        beneficiary: key.address,
        destination: _address,
      );
      final first = await wrapper.withdraw(args);
      chain.client.nonce = BigInt.parse('9007199254740993');
      final second = await wrapper.withdraw(args);
      expect(chain.client.nonceBeneficiary, key.address);
      expect(first.to, _address);
      expect(first.data, isNot(second.data));
      expect(first.data.substring(0, 10), second.data.substring(0, 10));
    },
  );
}
