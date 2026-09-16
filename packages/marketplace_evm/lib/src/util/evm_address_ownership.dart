import 'dart:convert';

import 'package:convert/convert.dart';
import 'package:marketplace_models/main.dart';
import 'package:web3dart/web3dart.dart';

/// EIP-191 ownership evidence binding a Nostr identity to an EVM account.
typedef EvmAddressOwnershipClaim = ({String address, String proof});

EvmAddressOwnershipClaim signEvmAddressOwnership({
  required EthPrivateKey evmKey,
  required String nostrPubkey,
}) {
  final address = evmKey.address.eip55With0x;
  final message = evmAddressOwnershipMessage(
    nostrPubkey: nostrPubkey,
    evmAddress: address,
  );
  final signature = evmKey.signPersonalMessageToUint8List(utf8.encode(message));
  return (address: address, proof: '0x${hex.encode(signature)}');
}
