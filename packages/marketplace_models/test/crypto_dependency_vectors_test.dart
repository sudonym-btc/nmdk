import 'dart:typed_data';

import 'package:coinlib/coinlib.dart';
import 'package:marketplace_models/secp256k1.dart';
import 'package:test/test.dart';

// Standards vectors cover the only PointyCastle API Coinlib uses (HASH160),
// and native key derivation/signatures after dependency upgrades.
void main() {
  setUpAll(loadBundledCoinlibSecp256k1);

  test('HASH160 matches the secp256k1 generator address payload', () {
    expect(
      bytesToHex(
        hash160(
          hexToBytes(
            '0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
          ),
        ),
      ),
      '751e76e8199196d454941c45d1b3a323f1433bd6',
    );
  });

  // https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#test-vector-1
  test('BIP32 vector 1 matches master and hardened child keys', () {
    final master = HDPrivateKey.fromSeed(
      hexToBytes('000102030405060708090a0b0c0d0e0f'),
    );
    expect(
      master.encode(0x0488ade4),
      'xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi',
    );
    expect(
      master.deriveHardened(0).encode(0x0488ade4),
      'xprv9uHRZZhk6KAJC1avXpDAp4MDc3sQKNxDiPvvkX8Br5ngLNv1TxvUxt4cV1rGL5hj6KCesnDYUhd7oWgT11eZG7XnxHrnYeSvkzY7d2bhkJ7',
    );
  });

  // https://github.com/bitcoin/bips/blob/master/bip-0340/test-vectors.csv
  test('BIP340 vector 0 matches Schnorr public key and signature', () {
    final key = ECPrivateKey.fromHex('3'.padLeft(64, '0'));
    expect(
      key.pubkey.xhex,
      'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
    );
    final signature = SchnorrSignature.sign(key, Uint8List(32));
    expect(
      bytesToHex(signature.data),
      'e907831f80848d1069a5371b402410364bdf1c5f8307b0084c55f1ce2dca821525f66a4a85ea8b71e482a74f382d2ce5ebeee8fdb2172f477df4900d310536c0',
    );
    expect(signature.verify(key.pubkey, Uint8List(32)), isTrue);
    expect(signature.verify(key.pubkey, Uint8List(32)..[31] = 1), isFalse);
  });
}
