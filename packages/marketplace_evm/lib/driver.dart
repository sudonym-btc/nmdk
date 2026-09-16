import 'package:sqlite3/common.dart';

import 'ports.dart';
import 'src/datasources/boltz/boltz.dart';
import 'src/usecase/escrow/main.dart';
import 'src/usecase/evm/main.dart';
import 'src/usecase/trade_account_allocator/trade_account_allocator.dart';
import 'src/util/custom_logger.dart';

/// Standalone driver composition, with no application dependency container.
///
/// The application owns keys, Lightning payments and the database lifetime.
/// This object owns the chain transports, operation trackers and recovery.
/// [currentPubkey] is read at operation time so account changes remain isolated.
class MarketplaceEvm implements EvmAuth, EvmDriverFactory, EvmDriverConfig {
  @override
  final EvmConfig evmConfig;
  @override
  final EvmKeyProvider hd;
  final String? Function() currentPubkey;
  final EvmNwc nwc;
  final EvmPayments payments;
  final TradeAccountAllocator tradeAccountAllocator;
  final CommonDatabase database;
  final CustomLogger logger;
  @override
  final void Function(String id, String message)? onSwapProgress;

  MarketplaceEvm({
    required this.evmConfig,
    required this.hd,
    required this.currentPubkey,
    required this.nwc,
    required this.payments,
    required this.tradeAccountAllocator,
    required this.database,
    CustomLogger? logger,
    this.onSwapProgress,
  }) : logger = logger ?? CustomLogger();

  @override
  String? get activePubkey => currentPubkey();

  @override
  late final OperationStateStore operationStateStore = OperationStateStore(
    database,
    logger,
    this,
  );
  @override
  late final SwapInTracker swapInTracker = SwapInTracker(logger);
  @override
  late final SwapOutTracker swapOutTracker = SwapOutTracker(logger);
  late final SwapQuoteService quoteService = SwapQuoteService(logger: logger);
  late final Evm evm = Evm(this, this, logger, this);
  late final EscrowUseCase escrow = EscrowUseCase(
    logger: logger,
    evm: evm,
    scope: this,
  );
  @override
  late final SwapRecoverer swapRecoverer = SwapRecoverer(
    operationStateStore,
    this,
    evm,
    logger,
  );

  Future<void> init() => evm.init();

  @override
  EvmChain createChain(EvmChainConfig config, AACapability? aa) => EvmChain(
    config: config,
    auth: this,
    logger: logger,
    quoteService: quoteService,
    nwc: nwc,
    payments: payments,
    aa: aa,
  );

  @override
  EscrowFundPreparer createEscrowFund(EscrowFundParams params) =>
      EscrowFundPreparer(
        this,
        tradeAccountAllocator,
        evm,
        quoteService,
        logger,
        params,
      );

  @override
  EscrowClaimOperation createEscrowClaim(EscrowClaimParams params) =>
      EscrowClaimOperation(this, tradeAccountAllocator, evm, logger, params);

  @override
  EscrowReleaseOperation createEscrowRelease(EscrowReleaseParams params) =>
      EscrowReleaseOperation(this, tradeAccountAllocator, evm, logger, params);

  // Evm already owns the discovered client; external containers may register it.
  @override
  void registerBoltzClient(BoltzClient client) {}

  Future<void> dispose() async {
    await swapInTracker.dispose();
    await swapOutTracker.dispose();
    operationStateStore.dispose();
    await evm.dispose();
  }
}
