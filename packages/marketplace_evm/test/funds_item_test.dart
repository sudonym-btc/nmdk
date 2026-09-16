import 'package:marketplace_evm/marketplace_evm.dart';
import 'package:marketplace_models/main.dart';
import 'package:test/test.dart';
import 'package:wallet/wallet.dart' show EthereumAddress;
import 'package:web3dart/web3dart.dart';

import 'support/fake.dart';

class _Chain extends Fake implements EvmChain {
  final destination = EthereumAddress.fromHex('0x3333333333333333333333333333333333333333');
  @override Future<EthereumAddress> getAccountAddress(EthPrivateKey key) async => destination;
}

class _Escrow extends Fake implements SupportedEscrowContract {
  final List<WithdrawArgs> withdrawals = [];
  @override Future<Call> withdraw(WithdrawArgs args) async {
    withdrawals.add(args);
    return Call(to: args.destination, data: '0x1234', value: BigInt.zero);
  }
}

void main() {
  final key = EthPrivateKey.fromHex('01'.padLeft(64, '0'));
  final token = Token.native(31);
  final balance = TokenAmount(value: BigInt.from(123), token: token);

  FundsItem item(_Chain chain, [_Escrow? contract]) => FundsItem(
    address: key.address, keypair: key, accountIndex: 7, token: token,
    balance: balance, chain: chain, blockNumber: 10, contract: contract);

  test('wallet balance builds a sweep for the selected token and account', () async {
    final params = await item(_Chain()).swapOutParams();
    expect(params.evmKey, same(key));
    expect(params.accountIndex, 7);
    expect(params.amountSpec!.amount, same(balance));
    expect(params.preLockCalls, isNull);
  });

  test('escrow quote and execution refresh the atomic withdrawal call', () async {
    final chain = _Chain();
    final escrow = _Escrow();
    final funds = item(chain, escrow);
    final quoteParams = await funds.swapOutParams();
    final executionParams = await funds.swapOutParams();
    expect(escrow.withdrawals, hasLength(2));
    expect(escrow.withdrawals.first.beneficiary, key.address);
    expect(escrow.withdrawals.first.destination, chain.destination);
    expect(escrow.withdrawals.first.token, SupportedEscrowContract.zeroAddress);
    expect(quoteParams.preLockCalls!.keys, ['withdraw']);
    expect(executionParams.preLockCalls!.keys, ['withdraw']);
    expect(executionParams.amountSpec!.amount, same(balance));
  });
}
