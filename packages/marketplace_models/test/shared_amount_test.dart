import 'dart:convert';
import 'dart:io';

import 'package:marketplace_models/main.dart';
import 'package:test/test.dart';

void main() {
  final fixtures = jsonDecode(
    File('../../test/fixtures/amount-wire.json').readAsStringSync(),
  ) as Map<String, dynamic>;

  test('Dart amounts round-trip the same integer-unit JSON as TypeScript', () {
    for (final value in fixtures['valid'] as List) {
      final json = Map<String, dynamic>.from(value as Map);
      final amount = DenominatedAmount.fromJson(json);
      expect(amount.value, BigInt.parse(json['value'] as String));
      expect(amount.toJson(), json);
    }
  });

  test(
    'amounts reject legacy decimal/numeric values and invalid shared fields',
    () {
      for (final value in fixtures['invalid'] as List) {
        if (value is! Map) continue;
        expect(
          () => DenominatedAmount.fromJson(Map<String, dynamic>.from(value)),
          throwsFormatException,
          reason: jsonEncode(value),
        );
      }
    },
  );

  test(
    'token amounts share exact integer parsing and keep decimals for display',
    () {
      final amount = TokenAmount(
        value: BigInt.parse('9007199254740993'),
        token: Token.native(30),
      );
      final json = amount.toJson();
      expect(json['value'], '9007199254740993');
      expect(TokenAmount.fromJson(json).value, amount.value);
      expect(amount.toDecimalString(), '0.009007199254740993');
      for (final invalid in [1, 1.2, '0.01', '01', '-0', '1e8', '0x10']) {
        expect(
          () => TokenAmount.fromJson({...json, 'value': invalid}),
          throwsFormatException,
        );
      }
    },
  );

  test('denominated arithmetic preserves optional logical currency', () {
    final amount = DenominatedAmount.fromJson({
      'value': '123',
      'denomination': 'USD',
      'decimals': 6,
      'currency': 'USD',
    });
    expect((amount + amount).toJson()['currency'], 'USD');
    expect((amount * 2).toJson()['value'], '246');
    expect(amount.rescale(8).toJson()['value'], '12300');
  });

  test('scale and logical currency participate in equality and arithmetic', () {
    final amount = DenominatedAmount(
      value: BigInt.from(123),
      denomination: 'USD',
      decimals: 6,
    );
    final otherScale = DenominatedAmount(
      value: amount.value,
      denomination: amount.denomination,
      decimals: 8,
    );
    final otherCurrency = DenominatedAmount(
      value: amount.value,
      denomination: amount.denomination,
      decimals: amount.decimals,
      currency: 'USD',
    );
    expect(amount, isNot(otherScale));
    expect(amount, isNot(otherCurrency));
    expect(() => amount + otherScale, throwsArgumentError);
    expect(() => amount + otherCurrency, throwsArgumentError);
    expect((amount - amount * 2).toJson()['value'], '-123');
  });
}
