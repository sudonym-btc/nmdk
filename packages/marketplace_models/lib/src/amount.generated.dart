// Generated from dependencies/marketplace-driver-interface-ts/schemas/amount.schema.json. Do not edit.
final _integerUnitsPattern = RegExp(r"^(0|-?[1-9][0-9]*)$");

BigInt parseIntegerUnits(Object? value) {
  if (value is! String || _integerUnitsPattern.stringMatch(value) != value) {
    throw FormatException('Amount value must be a canonical integer-unit string', value);
  }
  return BigInt.parse(value);
}

class MarketplaceAmount {
  final BigInt value;
  final String denomination;
  final int decimals;
  final String? currency;

  const MarketplaceAmount({
    required this.value,
    required this.denomination,
    required this.decimals,
    this.currency,
  });

  factory MarketplaceAmount.fromJson(Map<String, dynamic> json) {
    final value = json['value'];
    final denomination = json['denomination'];
    final decimals = json['decimals'];
    final currency = json['currency'];
    if (denomination is! String || denomination.length < 1) {
      throw FormatException('Invalid amount denomination', denomination);
    }
    if (decimals is! int || decimals < 0 || decimals > 255) {
      throw FormatException('Invalid amount decimals', decimals);
    }
    if (json.containsKey('currency') && (currency is! String || currency.length < 1)) {
      throw FormatException('Invalid amount currency', currency);
    }
    return MarketplaceAmount(
      value: parseIntegerUnits(value),
      denomination: denomination,
      decimals: decimals,
      currency: currency,
    );
  }

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{
      'value': value.toString(),
      'denomination': denomination,
      'decimals': decimals,
      if (currency != null) 'currency': currency,
    };
    MarketplaceAmount.fromJson(json);
    return json;
  }
}
