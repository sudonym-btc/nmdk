import 'dart:convert';

import 'package:marketplace_evm/usecase/escrow/operations/onchain_operation.dart';
import 'package:marketplace_evm/usecase/evm/config/evm_config.dart';
import 'package:marketplace_evm/usecase/evm/evm_call.dart';
import 'package:marketplace_evm/usecase/evm/operations/swap_in/swap_in_state.dart';
import 'package:marketplace_evm/usecase/evm/operations/swap_out/swap_out_state.dart';
import 'package:test/test.dart';
import 'package:wallet/wallet.dart';

const _address = '0x1111111111111111111111111111111111111111';

Map<String, dynamic> _callJson() => {
  'methodName': 'withdraw',
  'to': _address,
  'data': '0x1234ab',
  'valueWei': '9007199254740993',
};

Map<String, dynamic> _onchainJson() => {
  'operationId': 'trade-1',
  'accountIndex': 2,
  'contractAddress': _address,
  'chainId': 31337,
  'calls': [_callJson()],
};

Map<String, dynamic> _swapJson() => {
  'boltzId': 'swap-1',
  'invoice': 'invoice',
  'invoicePreimageHashHex': '01'.padLeft(64, '0'),
  'claimAddress': _address,
  'lockedAmountWeiHex': '20000000000001',
  'lockerAddress': _address,
  'timeoutBlockHeight': 100,
  'chainId': 31337,
  'accountIndex': 2,
};

void main() {
  group('current on-chain recovery format', () {
    test('roundtrips ordered calls with lossless large integer values', () {
      final data = OnchainCallData(
        operationIdValue: 'trade-1',
        contractAddress: _address,
        chainId: 31337,
        accountIndex: 2,
        calls: {
          'withdraw': Call(
            to: EthereumAddress.fromHex(_address),
            data: '0x1234ab',
            value: BigInt.parse('9007199254740993'),
          ),
          'approve': Call(
            to: EthereumAddress.fromHex(_address),
            data: '0x',
            value: BigInt.zero,
          ),
        },
      );
      final encoded =
          jsonDecode(jsonEncode(data.toJson())) as Map<String, dynamic>;
      expect(encoded, isNot(contains('callIntents')));
      expect((encoded['calls'] as List).first['valueWei'], '9007199254740993');
      final restored = OnchainCallData.fromJson(encoded);
      expect(restored.toJson(), data.toJson());
      expect(restored.calls.keys, ['withdraw', 'approve']);
      expect(
        restored.calls['withdraw']!.value,
        BigInt.parse('9007199254740993'),
      );
      expect(restored.calls['approve']!.data, '0x');
    });

    for (final field in [
      'operationId',
      'contractAddress',
      'chainId',
      'accountIndex',
    ]) {
      test('requires $field instead of defaulting missing recovery data', () {
        final json = _onchainJson()..remove(field);
        expect(() => OnchainCallData.fromJson(json), throwsA(isA<TypeError>()));
      });
    }

    for (final alias in ['tradeId', 'id']) {
      test('does not accept $alias in place of operationId', () {
        final json = _onchainJson()..remove('operationId');
        json[alias] = 'trade-1';
        expect(() => OnchainCallData.fromJson(json), throwsA(isA<TypeError>()));
      });
    }

    for (final field in ['methodName', 'to', 'data', 'valueWei']) {
      test('requires call field $field', () {
        final json = _callJson()..remove(field);
        expect(() => deserializeNamedCalls([json]), throwsA(isA<TypeError>()));
      });
    }

    for (final invalidData in ['1234ab', '0x1', '0xzz']) {
      test('rejects malformed calldata $invalidData', () {
        final json = _callJson()..['data'] = invalidData;
        expect(() => deserializeNamedCalls([json]), throwsFormatException);
      });
    }

    test('requires integer amounts as decimal strings', () {
      final json = _callJson()..['valueWei'] = 9007199254740993;
      expect(() => deserializeNamedCalls([json]), throwsA(isA<TypeError>()));
    });
  });

  test('swap-in requires accountIndex instead of selecting account zero', () {
    final json = const SwapInData(
      boltzId: 'swap-in-1',
      preimageHex: '01',
      preimageHash: '02',
      onchainAmountSat: 1000,
      timeoutBlockHeight: 100,
      chainId: 31337,
      accountIndex: 2,
    ).toJson();
    expect(SwapInData.fromJson(json).accountIndex, 2);
    json.remove('accountIndex');
    expect(() => SwapInData.fromJson(json), throwsA(isA<TypeError>()));
  });

  group('current swap-out recovery format', () {
    test('roundtrips only current transaction field names', () {
      final json = _swapJson()
        ..['lockTxHash'] = '0xlock'
        ..['resolutionTxHash'] = '0xresolution'
        ..['preLockCalls'] = [_callJson()];
      final restored = SwapOutData.fromJson(
        jsonDecode(jsonEncode(json)) as Map<String, dynamic>,
      );
      expect(restored.toJson(), json);
      expect(restored.lockTxHash, '0xlock');
      expect(restored.resolutionTxHash, '0xresolution');
      expect(
        restored.preLockCalls!['withdraw']!.value,
        BigInt.parse('9007199254740993'),
      );
      expect(restored.toJson().keys, isNot(contains('fundTxHash')));
      expect(restored.toJson().keys, isNot(contains('claimTxHash')));
      expect(restored.toJson().keys, isNot(contains('refundTxHash')));
    });

    test('removed transaction aliases cannot restore transaction progress', () {
      final json = _swapJson()
        ..['fundTxHash'] = '0xold-lock'
        ..['claimTxHash'] = '0xold-claim'
        ..['refundTxHash'] = '0xold-refund';
      final restored = SwapOutData.fromJson(json);
      expect(restored.lockTxHash, isNull);
      expect(restored.resolutionTxHash, isNull);
      expect(restored.toJson(), _swapJson());
    });
  });

  group('current chain configuration format', () {
    Map<String, dynamic> config() => {
      'id': 'test',
      'chainId': 31337,
      'nativeDenomination': 'ETH',
      'rpcUrls': ['https://one.example', 'https://two.example'],
    };

    test('roundtrips the rpcUrls array', () {
      expect(EvmChainConfig.fromJson(config()).toJson(), config());
    });

    test('rejects the removed singular rpcUrl field', () {
      final json = config()..remove('rpcUrls');
      json['rpcUrl'] = 'https://one.example';
      expect(() => EvmChainConfig.fromJson(json), throwsA(isA<TypeError>()));
    });

    test('rejects a string in place of the rpcUrls array', () {
      final json = config()..['rpcUrls'] = 'https://one.example';
      expect(() => EvmChainConfig.fromJson(json), throwsA(isA<TypeError>()));
    });

    test('requires URL array elements to be strings', () {
      final json = config()..['rpcUrls'] = [1];
      expect(() => EvmChainConfig.fromJson(json), throwsA(isA<TypeError>()));
    });
  });
}
