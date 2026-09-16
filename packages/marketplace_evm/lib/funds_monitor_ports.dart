/// Application data needed by the driver's balance monitor and automatic sweep.
library;

import 'package:marketplace_models/main.dart';
import 'package:ndk/ndk.dart' show Filter;

import 'src/usecase/escrow/supported_escrow_contract/supported_escrow_contract.dart';
import 'src/util/stream_status.dart';

abstract interface class EvmPaymentEvents {
  StreamWithStatus<PaymentEvent> get paymentEvents$;
}

abstract interface class EvmEscrowDirectory {
  Future<List<EscrowService>> list(Filter filter, {String? name});
}

abstract interface class EvmUserPreferences {
  bool get autoWithdrawEnabled;
}

abstract interface class EvmUserPreferencesStore {
  Future<EvmUserPreferences> get state;
}

abstract interface class EvmFundsConfig {
  List<String> get bootstrapEscrowPubkeys;
}
