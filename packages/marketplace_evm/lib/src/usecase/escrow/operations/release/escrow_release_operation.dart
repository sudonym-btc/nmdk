import 'package:injectable/injectable.dart' hide Order;
import 'package:marketplace_models/main.dart';

import '../../../../util/custom_logger.dart';
import 'package:marketplace_evm/ports.dart';
import '../../../evm/main.dart';
import '../../../trade_account_allocator/trade_account_allocator.dart';
import '../../supported_escrow_contract/supported_escrow_contract.dart';
import '../escrow_call.dart';
import 'escrow_release_models.dart';

@injectable
class EscrowReleaseOperation extends EscrowCall {
  final EscrowReleaseParams params;

  EscrowReleaseOperation(
    EvmAuth auth,
    TradeAccountAllocator tradeAccountAllocator,
    Evm evm,
    CustomLogger logger,
    @factoryParam this.params,
  ) : super(auth, tradeAccountAllocator, evm, logger) {
    configuredChain = evm.getChainForEscrowService(params.escrowService!);
    contract = configuredChain.escrow.getSupportedEscrowContract(
      params.escrowService!,
    );
  }

  @override
  EscrowService get escrowService => params.escrowService!;

  @override
  String get tradeId => params.tradeId;

  @override
  Map<String, Call> buildCalls() => {
    'releaseToCounterparty': contract.release(
      ReleaseArgs(tradeId: params.tradeId, ethKey: signer),
    ),
  };
}
