import 'dart:async';

import 'package:injectable/injectable.dart' hide Order;
import 'package:marketplace_models/main.dart';

import 'package:marketplace_evm/ports.dart';
import '../../util/main.dart';
import '../evm/evm.dart';
import 'operations/claim/escrow_claim_models.dart';
import 'operations/claim/escrow_claim_operation.dart';
import 'operations/fund/escrow_fund_models.dart';
import 'operations/fund/escrow_fund_preparer.dart';
import 'operations/release/escrow_release_models.dart';
import 'operations/release/escrow_release_operation.dart';
import 'supported_escrow_contract/supported_escrow_contract.dart';

@Singleton()
class EscrowUseCase {
  final CustomLogger _logger;
  final Evm _evm;
  final EvmDriverFactory _scope;

  EscrowUseCase({
    required CustomLogger logger,
    required Evm evm,
    required EvmDriverFactory scope,
  }) : _evm = evm,
       _scope = scope,
       _logger = logger.scope('escrow');

  EscrowFundPreparer fund(EscrowFundParams params) =>
      _logger.spanSync('fund', () {
        return _scope.createEscrowFund(params);
      });

  EscrowClaimOperation claim(EscrowClaimParams params) =>
      _logger.spanSync('claim', () {
        return _scope.createEscrowClaim(params);
      });

  EscrowReleaseOperation release(EscrowReleaseParams params) =>
      _logger.spanSync('release', () {
        return _scope.createEscrowRelease(params);
      });

  StreamWithStatus<EscrowEvent> checkEscrowStatus(
    EscrowServiceSelected selectedEscrow,
    String tradeId,
  ) => _logger.spanSync('checkEscrowStatus', () {
    _logger.i('Checking escrow status for order: $tradeId');

    final contract = _evm
        .getChainForEscrowService(selectedEscrow.service)
        .escrow
        .getSupportedEscrowContract(selectedEscrow.service);

    final source = contract.allEvents(
      ContractEventsParams(tradeId: tradeId),
      selectedEscrow,
    );

    // Auto-close after a terminal escrow event so the live EVM WebSocket
    // subscription doesn't run indefinitely in the UserSubscriptions
    // singleton.
    source.stream.listen((event) {
      if (event is EscrowReleasedEvent ||
          event is EscrowClaimedEvent ||
          event is EscrowArbitratedEvent) {
        _logger.d(
          'Terminal escrow event received for $tradeId — closing stream',
        );
        unawaited(source.close());
      }
    });

    return source;
  });
}
