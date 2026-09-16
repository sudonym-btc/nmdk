import 'dart:convert';
import 'dart:typed_data';

import 'package:marketplace_evm/util/evm_address_ownership.dart';
import 'package:marketplace_evm/util/evm_signature.dart';
import 'package:marketplace_models/main.dart';
import 'package:test/test.dart';
import 'package:web3dart/web3dart.dart';

void main() {
  final key = EthPrivateKey.fromHex('01'.padLeft(64, '0'));
  final pubkey = 'ab' * 32;

  test('ownership proof recovers the signer from the shared wire message', () {
    final claim = signEvmAddressOwnership(evmKey: key, nostrPubkey: pubkey);
    expect(claim.address, '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf');
    expect(claim.proof, startsWith('0x'));
    expect(claim.proof, hasLength(132));
    expect(_recoverAddress(pubkey, claim), claim.address.toLowerCase());
  });

  test('ownership proof binds the Nostr identity', () {
    final claim = signEvmAddressOwnership(evmKey: key, nostrPubkey: pubkey);
    expect(
      _recoverAddress('cd' * 32, claim),
      isNot(claim.address.toLowerCase()),
    );
  });

  test('repeated signing preserves deterministic evidence', () {
    expect(
      signEvmAddressOwnership(evmKey: key, nostrPubkey: pubkey),
      signEvmAddressOwnership(evmKey: key, nostrPubkey: pubkey),
    );
  });
}

String _recoverAddress(String pubkey, EvmAddressOwnershipClaim claim) {
  final message = utf8.encode(
    evmAddressOwnershipMessage(nostrPubkey: pubkey, evmAddress: claim.address),
  );
  final digest = keccak256(
    Uint8List.fromList([
      ...ascii.encode('\x19Ethereum Signed Message:\n${message.length}'),
      ...message,
    ]),
  );
  final parts = parseEvmSignature(claim.proof);
  final recovered = ecRecover(
    digest,
    MsgSignature(
      bytesToUnsignedInt(parts.r),
      bytesToUnsignedInt(parts.s),
      parts.v.toInt(),
    ),
  );
  final publicKey = Uint8List(64)
    ..setRange(64 - recovered.length, 64, recovered);
  return bytesToHex(
    publicKeyToAddress(publicKey),
    include0x: true,
  ).toLowerCase();
}
