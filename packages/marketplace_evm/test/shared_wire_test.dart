import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:convert/convert.dart';
import 'package:http/http.dart' as http;
import 'package:marketplace_evm/src/datasources/contracts/boltz/ERC20Swap.g.dart';
import 'package:marketplace_evm/src/datasources/contracts/escrow/MultiEscrow.g.dart';
import 'package:marketplace_evm/src/datasources/swagger_generated/boltz.swagger.dart';
import 'package:marketplace_evm/src/usecase/escrow/supported_escrow_contract/escrow_eip712_signer.dart';
import 'package:test/test.dart';
import 'package:wallet/wallet.dart' show EthereumAddress;
import 'package:web3dart/web3dart.dart';

void main() {
  final fixture =
      jsonDecode(
            File('../../test/fixtures/driver-wire.json').readAsStringSync(),
          )
          as Map<String, dynamic>;
  final wire = fixture['boltz'] as Map<String, dynamic>;

  test(
    'Dart signer matches TypeScript EIP712 signatures including withdrawal nonces',
    () async {
      final signing = fixture['signing'] as Map<String, dynamic>;
      final domain = signing['domain'] as Map<String, dynamic>;
      final signer = EscrowEip712Signer(
        chainId: domain['chainId'] as int,
        verifyingContract: EthereumAddress.fromHex(
          domain['verifyingContract'] as String,
        ),
      );
      final key = EthPrivateKey.fromHex(signing['privateKey'] as String);
      for (final item in signing['vectors'] as List) {
        final vector = item as Map<String, dynamic>;
        final message = vector['message'] as Map<String, dynamic>;
        Uint8List bytes(String name) => Uint8List.fromList(
          hex.decode((message[name] as String).substring(2)),
        );
        EthereumAddress address(String name) =>
            EthereumAddress.fromHex(message[name] as String);
        BigInt integer(String name) => BigInt.parse(message[name] as String);
        final signature = switch (vector['primaryType']) {
          'Claim' => signer.signClaim(tradeId: bytes('tradeId'), signer: key),
          'Release' => signer.signRelease(
            tradeId: bytes('tradeId'),
            actor: address('actor'),
            signer: key,
          ),
          'Arbitrate' => signer.signArbitrate(
            tradeId: bytes('tradeId'),
            paymentFactor: integer('paymentFactor'),
            bondFactor: integer('bondFactor'),
            signer: key,
          ),
          'Withdraw' => signer.signWithdraw(
            token: address('token'),
            destination: address('destination'),
            nonce: integer('nonce'),
            signer: key,
          ),
          _ => throw StateError(
            'Unknown fixture type ${vector['primaryType']}',
          ),
        };
        expect(
          '0x${hex.encode(signature)}',
          vector['signature'],
          reason: '${vector['primaryType']} ${message['nonce'] ?? ''}',
        );
      }
    },
  );

  test(
    'generated Dart models preserve the same Boltz wire fields as TypeScript',
    () {
      final factories = <String, dynamic Function(Map<String, dynamic>)>{
        'ReverseRequest': ReverseRequest.fromJson,
        'ReverseResponse': ReverseResponse.fromJson,
        'SubmarineRequest': SubmarineRequest.fromJson,
        'SubmarineResponse': SubmarineResponse.fromJson,
        'ReversePair': ReversePair.fromJson,
        'SubmarinePair': SubmarinePair.fromJson,
        'SwapStatus': SwapStatus.fromJson,
      };
      for (final entry in factories.entries) {
        final input = wire[entry.key] as Map<String, dynamic>;
        // Encoding recursively calls generated toJson for nested schema objects.
        expect(
          jsonDecode(jsonEncode(entry.value(input))),
          input,
          reason: entry.key,
        );
      }
    },
  );

  test(
    'generated Dart contracts match shared TypeScript calldata with large integers',
    () {
      final client = Web3Client('http://fixture.invalid', http.Client());
      addTearDown(client.dispose);
      final address = EthereumAddress.fromHex(
        '0x8888888888888888888888888888888888888888',
      );
      final contracts = {
        'MultiEscrow': MultiEscrow(address: address, client: client).self.abi,
        'ERC20Swap': ERC20Swap(address: address, client: client).self.abi,
      };
      for (final item in fixture['calls'] as List) {
        final vector = item as Map<String, dynamic>;
        final values = vector['args'] as List;
        final types = vector['argumentTypes'] as List;
        final args = <dynamic>[];
        for (var i = 0; i < values.length; i++) {
          final value = values[i] as String;
          final type = types[i] as String;
          args.add(
            type.startsWith('uint')
                ? BigInt.parse(value)
                : type == 'address'
                ? EthereumAddress.fromHex(value)
                : Uint8List.fromList(hex.decode(value.substring(2))),
          );
        }
        final function = contracts[vector['contract']]!.functions.singleWhere(
          (function) =>
              function.name == vector['function'] &&
              function.parameters.length == args.length,
        );
        expect(
          '0x${hex.encode(function.encodeCall(args))}',
          vector['data'],
          reason: '${vector['contract']}.${vector['function']}',
        );
      }
    },
  );
}
