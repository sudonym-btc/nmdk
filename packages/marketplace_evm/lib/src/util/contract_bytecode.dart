import 'package:crypto/crypto.dart';
import 'package:wallet/wallet.dart' show EthereumAddress;
import 'package:web3dart/web3dart.dart';

/// Canonical lowercase SHA-256 identity used by escrow contract advertisements.
String contractBytecodeHash(List<int> runtimeCode) =>
    '0x${sha256.convert(runtimeCode)}';

Future<String> readContractBytecodeHash({
  required Web3Client client,
  required EthereumAddress address,
  bool requireDeployed = false,
}) async {
  final code = await client.getCode(address);
  if (requireDeployed && (code.isEmpty || code.every((byte) => byte == 0))) {
    throw StateError('Escrow contract not deployed at ${address.eip55With0x}');
  }
  return contractBytecodeHash(code);
}
