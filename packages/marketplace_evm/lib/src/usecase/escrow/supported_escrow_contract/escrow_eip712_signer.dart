import 'dart:typed_data';

import 'package:eip712/eip712.dart' as eip712;
import 'package:wallet/wallet.dart' show EthereumAddress;
import 'package:web3dart/web3dart.dart';
import '../../../datasources/contracts/escrow/signing.generated.dart';

/// Produces EIP-712 signatures for the `MultiEscrow` contract.
///
/// The domain matches the Solidity constructor:
/// ```solidity
/// constructor() EIP712("Nostr MultiEscrow", "7") { … }
/// ```
///
/// Four typed-data actions are supported:
///
/// | Action   | Solidity type hash                                     |
/// |----------|--------------------------------------------------------|
/// | Claim    | `Claim(bytes32 tradeId)`                               |
/// | Release  | `Release(bytes32 tradeId,address actor)`               |
/// | Arbitrate| `Arbitrate(bytes32 tradeId,uint256 paymentFactor,uint256 bondFactor)` |
/// | Withdraw | `Withdraw(address token,address destination,uint256 nonce)`         |
class EscrowEip712Signer {
  final int chainId;
  final EthereumAddress verifyingContract;

  const EscrowEip712Signer({
    required this.chainId,
    required this.verifyingContract,
  });

  // ── Domain definition (shared by all three actions) ──────────────

  List<eip712.MessageTypeProperty> get _domainType => const [
    eip712.MessageTypeProperty(name: 'name', type: 'string'),
    eip712.MessageTypeProperty(name: 'version', type: 'string'),
    eip712.MessageTypeProperty(name: 'chainId', type: 'uint256'),
    eip712.MessageTypeProperty(name: 'verifyingContract', type: 'address'),
  ];

  eip712.EIP712Domain get _domain => eip712.EIP712Domain(
    name: multiEscrowDomainName,
    version: multiEscrowDomainVersion,
    chainId: BigInt.from(chainId),
    verifyingContract: verifyingContract,
    salt: null,
  );

  // ── Claim ────────────────────────────────────────────────────────

  /// Sign a `Claim(bytes32 tradeId)` for the seller.
  Uint8List signClaim({
    required Uint8List tradeId,
    required EthPrivateKey signer,
  }) {
    final typedData = eip712.TypedMessage(
      types: {
        eip712.EIP712Domain.type: _domainType,
        'Claim': _actionType('Claim'),
      },
      primaryType: 'Claim',
      domain: _domain,
      message: {'tradeId': bytesToHex(tradeId, include0x: true)},
    );
    return _sign(typedData, signer);
  }

  // ── Release ──────────────────────────────────────────────────────

  /// Sign a `Release(bytes32 tradeId, address actor)` for buyer or seller.
  Uint8List signRelease({
    required Uint8List tradeId,
    required EthereumAddress actor,
    required EthPrivateKey signer,
  }) {
    final typedData = eip712.TypedMessage(
      types: {
        eip712.EIP712Domain.type: _domainType,
        'Release': _actionType('Release'),
      },
      primaryType: 'Release',
      domain: _domain,
      message: {
        'tradeId': bytesToHex(tradeId, include0x: true),
        'actor': actor.eip55With0x,
      },
    );
    return _sign(typedData, signer);
  }

  // ── Arbitrate ────────────────────────────────────────────────────

  /// Sign an `Arbitrate(bytes32 tradeId, uint256 paymentFactor, uint256 bondFactor)` for the arbiter.
  Uint8List signArbitrate({
    required Uint8List tradeId,
    required BigInt paymentFactor,
    required BigInt bondFactor,
    required EthPrivateKey signer,
  }) {
    final typedData = eip712.TypedMessage(
      types: {
        eip712.EIP712Domain.type: _domainType,
        'Arbitrate': _actionType('Arbitrate'),
      },
      primaryType: 'Arbitrate',
      domain: _domain,
      message: {
        'tradeId': bytesToHex(tradeId, include0x: true),
        'paymentFactor': paymentFactor,
        'bondFactor': bondFactor,
      },
    );
    return _sign(typedData, signer);
  }

  // ── Withdraw ──────────────────────────────────────────────────────

  /// Sign a `Withdraw(address token, address destination, uint256 nonce)` for a beneficiary
  /// to pull settled funds to any destination address.
  Uint8List signWithdraw({
    required EthereumAddress token,
    required EthereumAddress destination,
    required BigInt nonce,
    required EthPrivateKey signer,
  }) {
    final typedData = eip712.TypedMessage(
      types: {
        eip712.EIP712Domain.type: _domainType,
        'Withdraw': _actionType('Withdraw'),
      },
      primaryType: 'Withdraw',
      domain: _domain,
      message: {
        'token': token.eip55With0x,
        'destination': destination.eip55With0x,
        'nonce': nonce,
      },
    );
    return _sign(typedData, signer);
  }

  List<eip712.MessageTypeProperty> _actionType(String name) =>
      multiEscrowTypes[name]!
          .map(
            (field) => eip712.MessageTypeProperty(
              name: field['name']!,
              type: field['type']!,
            ),
          )
          .toList();

  // ── Helpers ──────────────────────────────────────────────────────

  /// Hash and sign without requiring an application-installed native backend.
  Uint8List _sign(eip712.TypedMessage typedData, EthPrivateKey signer) {
    final hash = eip712.hashTypedData(
      typedData: typedData,
      version: eip712.TypedDataVersion.v4,
    );
    final signature = sign(Uint8List.fromList(hash), signer.privateKey);
    return Uint8List.fromList([
      ...padUint8ListTo32(unsignedIntToBytes(signature.r)),
      ...padUint8ListTo32(unsignedIntToBytes(signature.s)),
      signature.v,
    ]);
  }
}
