/// Application boundaries required by the NMDK EVM driver.
///
/// Implement these small typed contracts in the host application. The driver
/// never imports an application or resolves services through its container.
library;

import 'package:ndk/ndk.dart';
import 'package:wallet/wallet.dart';
import 'package:web3dart/web3dart.dart';

import 'src/datasources/boltz/boltz.dart';
import 'src/usecase/escrow/operations/claim/escrow_claim_models.dart';
import 'src/usecase/escrow/operations/claim/escrow_claim_operation.dart';
import 'src/usecase/escrow/operations/fund/escrow_fund_models.dart';
import 'src/usecase/escrow/operations/fund/escrow_fund_preparer.dart';
import 'src/usecase/escrow/operations/release/escrow_release_models.dart';
import 'src/usecase/escrow/operations/release/escrow_release_operation.dart';
import 'src/usecase/evm/capabilities/aa_capability.dart';
import 'src/usecase/evm/chain/evm_chain.dart';
import 'src/usecase/evm/config/evm_config.dart';
import 'src/usecase/evm/operations/operation_state_store.dart';
import 'src/usecase/evm/operations/swap_in_tracker.dart';
import 'src/usecase/evm/operations/swap_out_tracker.dart';
import 'src/usecase/evm/operations/swap_recoverer.dart';
import 'src/usecase/payments/operations/pay_models.dart';
import 'src/usecase/payments/operations/pay_operation.dart';

abstract interface class EvmKeyProvider {
  Future<EthPrivateKey> getActiveEvmKey({int accountIndex = 0});
  Future<EthereumAddress> getEvmAddress({int accountIndex = 0});
}

abstract interface class EvmAuth {
  EvmKeyProvider get hd;
  String? get activePubkey;
  OperationStateStore get operationStateStore;
  SwapInTracker get swapInTracker;
  SwapOutTracker get swapOutTracker;
  void Function(String id, String message)? get onSwapProgress;
}

abstract interface class EvmDriverConfig {
  EvmConfig get evmConfig;
}

abstract interface class EvmNwc {
  NwcConnection? getActiveConnection();
  Future<PayInvoiceResponse> payInvoice(
    NwcConnection connection,
    String invoice,
  );
}

class CreatedLightningInvoice {
  final String invoice;
  final String source;
  const CreatedLightningInvoice({required this.invoice, required this.source});
}

abstract interface class EvmAutomaticInvoiceDestination {
  bool get canCreateAutomatically;
  String? get label;
  String? get error;
}

abstract interface class EvmPayments {
  Future<EvmAutomaticInvoiceDestination> resolveAutomaticInvoiceDestination({
    bool verifyLightningAddress = true,
  });
  Future<CreatedLightningInvoice?> getMyInvoiceWithSource(
    int amountSats, {
    String? description,
  });
  PayOperation pay(PayParameters params);
}

/// Construction of chains and operations with application-owned dependencies.
abstract interface class EvmDriverFactory {
  EvmChain createChain(EvmChainConfig config, AACapability? aa);
  EscrowFundPreparer createEscrowFund(EscrowFundParams params);
  EscrowClaimOperation createEscrowClaim(EscrowClaimParams params);
  EscrowReleaseOperation createEscrowRelease(EscrowReleaseParams params);
  SwapRecoverer get swapRecoverer;
  void registerBoltzClient(BoltzClient client);
}

/// Progress emitted during recovery; payload is opaque to the driver.
class BackgroundNotification {
  static const String fallbackPayload = 'hostr://root';
  final String operationId;
  final String body;
  final String payload;
  const BackgroundNotification({
    required this.operationId,
    required this.body,
    this.payload = fallbackPayload,
  });
}

typedef OnBackgroundProgress =
    void Function(BackgroundNotification notification);
