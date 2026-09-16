/// Serialization helpers for named EVM contract calls.
///
/// The application uses `Map<String, Call>` — keys are human-readable method
/// names (for logging / debugging), values are `permissionless.Call`s.
///
/// [Call] is re-exported so downstream files can simply
/// `import 'evm_call.dart'` instead of importing permissionless directly.
library;

import 'package:convert/convert.dart';
import 'package:permissionless/permissionless.dart' show Call;
import 'package:wallet/wallet.dart';

export 'package:permissionless/permissionless.dart' show Call;

/// Serialize a named-calls map to a JSON-compatible list.
List<Map<String, dynamic>> serializeNamedCalls(Map<String, Call> calls) => calls
    .entries
    .map(
      (e) => {
        'methodName': e.key,
        'to': e.value.to.eip55With0x,
        'data': e.value.data,
        'valueWei': e.value.value.toString(),
      },
    )
    .toList();

/// Deserialize named calls from JSON.
Map<String, Call> deserializeNamedCalls(List<dynamic> json) => Map.fromEntries(
  json.map((e) {
    final map = e as Map<String, dynamic>;
    final data = map['data'] as String;
    if (!RegExp(r'^0x(?:[0-9a-fA-F]{2})*$').hasMatch(data)) {
      throw const FormatException('Call data must be 0x-prefixed bytes');
    }
    return MapEntry(
      map['methodName'] as String,
      Call(
        to: EthereumAddress.fromHex(map['to'] as String),
        value: BigInt.parse(map['valueWei'] as String),
        data: data,
      ),
    );
  }),
);

/// Build a [Call] from ABI-encoded function output.
///
/// Convenience used by intent builders to avoid duplicating hex-encoding.
Call callFromEncoded({
  required EthereumAddress to,
  required List<int> data,
  BigInt? value,
}) => Call(to: to, value: value ?? BigInt.zero, data: '0x${hex.encode(data)}');
