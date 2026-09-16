import 'dart:typed_data';

import 'package:wallet/wallet.dart' show EthereumAddress, EtherAmount;
import 'package:web3dart/web3dart.dart';

import '../../datasources/contracts/boltz/IERC20.g.dart';
import '../../datasources/contracts/escrow/MultiEscrow.g.dart';
import '../../datasources/contracts/escrow/signing.generated.dart';
import '../payments/constants.dart';
import 'supported_escrow_contract/escrow_eip712_signer.dart';

/// Sends escrow actions from an EOA while keeping ABI and signing details in
/// the driver. Callers retain nonce, gas, sponsorship and receipt policies.
class EoaEscrowClient {
  final Web3Client client;
  final EthereumAddress address;
  final int chainId;
  final MultiEscrow _contract;
  final EscrowEip712Signer _signer;

  EoaEscrowClient({
    required this.client,
    required this.address,
    required this.chainId,
  }) : _contract = MultiEscrow(
         address: address,
         client: client,
         chainId: chainId,
       ),
       _signer = EscrowEip712Signer(
         chainId: chainId,
         verifyingContract: address,
       );

  Future<String> approveFunding({
    required EthereumAddress token,
    required BigInt amount,
    required EthPrivateKey credentials,
    required Transaction transaction,
  }) => IERC20(address: token, client: client, chainId: chainId).approve(
    (spender: address, value: amount),
    credentials: credentials,
    transaction: transaction,
  );

  Future<String> fund({
    required String tradeId,
    required EthereumAddress buyer,
    required EthereumAddress seller,
    required EthereumAddress arbiter,
    required EthereumAddress token,
    required BigInt paymentAmount,
    required BigInt bondAmount,
    required BigInt unlockAt,
    BigInt? escrowFee,
    required EthPrivateKey credentials,
    required Transaction transaction,
  }) => _contract.createTrade(
    (
      tradeId: getBytes32(tradeId),
      buyer: buyer,
      seller: seller,
      arbiter: arbiter,
      token: token,
      paymentAmount: paymentAmount,
      bondAmount: bondAmount,
      unlockAt: unlockAt,
      escrowFee: escrowFee ?? BigInt.zero,
    ),
    credentials: credentials,
    transaction: transaction.copyWith(
      value: EtherAmount.inWei(
        token ==
                EthereumAddress.fromHex(
                  '0x0000000000000000000000000000000000000000',
                )
            ? paymentAmount + bondAmount
            : BigInt.zero,
      ),
    ),
  );

  Future<String> claim({
    required String tradeId,
    required EthPrivateKey signer,
    required EthPrivateKey credentials,
    required Transaction transaction,
  }) {
    final id = getBytes32(tradeId);
    return _contract.claim(
      (tradeId: id, signature: _signer.signClaim(tradeId: id, signer: signer)),
      credentials: credentials,
      transaction: transaction,
    );
  }

  Future<String> release({
    required String tradeId,
    required EthPrivateKey signer,
    required EthPrivateKey credentials,
    required Transaction transaction,
  }) {
    final id = getBytes32(tradeId);
    return _contract.releaseToCounterparty(
      (
        tradeId: id,
        actor: signer.address,
        signature: _signer.signRelease(
          tradeId: id,
          actor: signer.address,
          signer: signer,
        ),
      ),
      credentials: credentials,
      transaction: transaction,
    );
  }

  Future<String> arbitrate({
    required String tradeId,
    required double paymentForward,
    required double bondForward,
    required EthPrivateKey signer,
    required EthPrivateKey credentials,
    required Transaction transaction,
  }) {
    final id = getBytes32(tradeId);
    if (!paymentForward.isFinite ||
        !bondForward.isFinite ||
        paymentForward < 0 ||
        paymentForward > 1 ||
        bondForward < 0 ||
        bondForward > 1) {
      throw ArgumentError(
        'Escrow allocation fractions must be between 0 and 1',
      );
    }
    final paymentFactor = BigInt.from(
      (paymentForward * multiEscrowFactorScale).round(),
    );
    final bondFactor = BigInt.from(
      (bondForward * multiEscrowFactorScale).round(),
    );
    return _contract.arbitrate(
      (
        tradeId: id,
        paymentFactor: paymentFactor,
        bondFactor: bondFactor,
        signature: _signer.signArbitrate(
          tradeId: id,
          paymentFactor: paymentFactor,
          bondFactor: bondFactor,
          signer: signer,
        ),
      ),
      credentials: credentials,
      transaction: transaction,
    );
  }

  Future<
    ({
      bool isActive,
      EthereumAddress buyer,
      EthereumAddress arbiter,
      BigInt fundedAmount,
    })
  >
  tradeState(String tradeId) async {
    final id = getBytes32(tradeId);
    final active = await _contract.activeTrade((tradeId: id));
    final trade = await _contract.trades(($param58: id));
    return (
      isActive: active.isActive,
      buyer: trade.buyer,
      arbiter: trade.arbiter,
      fundedAmount: trade.paymentAmount + trade.bondAmount,
    );
  }

  Future<({Map<String, String> created, Set<String> settled})> history({
    BlockNum fromBlock = const BlockNum.exact(0),
  }) async {
    final created = <String, String>{};
    final settled = <String>{};
    await Future.wait([
      for (final name in [
        'TradeCreated',
        'Claimed',
        'Arbitrated',
        'ReleasedToCounterparty',
      ])
        () async {
          final event = _contract.self.event(name);
          final logs = await client.getLogs(
            FilterOptions.events(
              contract: _contract.self,
              event: event,
              fromBlock: fromBlock,
            ),
          );
          for (final log in logs) {
            final values = event.decodeResults(log.topics!, log.data!);
            final tradeId = bytesToHex(values[0] as Uint8List);
            if (name == 'TradeCreated') {
              if (log.transactionHash != null)
                created[tradeId] = log.transactionHash!;
            } else {
              settled.add(tradeId);
            }
          }
        }(),
    ]);
    return (created: created, settled: settled);
  }
}
