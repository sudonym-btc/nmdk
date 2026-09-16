// @dart=3.0
// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_local_variable, unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark
// ignore_for_file: no_leading_underscores_for_library_prefixes

import 'package:web3dart/web3dart.dart' as _i1;
import 'package:wallet/wallet.dart' as _i2;
import 'dart:typed_data' as _i3;

final _contractAbi = _i1.ContractAbi.fromJson(
  '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ClaimPeriodNotStarted","type":"error"},{"inputs":[],"name":"ERC20TransferFailed","type":"error"},{"inputs":[],"name":"EscrowFeeTooHigh","type":"error"},{"inputs":[],"name":"InsufficientExcess","type":"error"},{"inputs":[],"name":"InvalidAddress","type":"error"},{"inputs":[],"name":"InvalidFactor","type":"error"},{"inputs":[],"name":"InvalidRecycleAmount","type":"error"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"MustSendFunds","type":"error"},{"inputs":[],"name":"NativeNotExpected","type":"error"},{"inputs":[],"name":"NativeTransferFailed","type":"error"},{"inputs":[],"name":"NoFundsToClaim","type":"error"},{"inputs":[],"name":"NoFundsToRelease","type":"error"},{"inputs":[],"name":"NotAContract","type":"error"},{"inputs":[],"name":"NothingToWithdraw","type":"error"},{"inputs":[],"name":"OnlyBuyerOrSeller","type":"error"},{"inputs":[],"name":"OnlyOwner","type":"error"},{"inputs":[],"name":"RecycleCovenantMismatch","type":"error"},{"inputs":[],"name":"RecycleExpired","type":"error"},{"inputs":[],"name":"RecycleTokenMismatch","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"inputs":[],"name":"TradeAlreadyActive","type":"error"},{"inputs":[],"name":"TradeIdAlreadyExists","type":"error"},{"inputs":[],"name":"TradeNotActive","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"tradeId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"paymentAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paymentFactor","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondFactor","type":"uint256"}],"name":"Arbitrated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"tradeId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"address","name":"timeoutClaimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"paymentAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"sourceTradeId","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"targetTradeId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"address","name":"arbiter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"contextHash","type":"bytes32"}],"name":"FundsRecycled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"tradeId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReleasedToCounterparty","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"tradeId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"address","name":"arbiter","type":"address"},{"indexed":false,"internalType":"uint256","name":"paymentAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockAt","type":"uint256"},{"indexed":false,"internalType":"address","name":"timeoutClaimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"escrowFee","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"contextHash","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"recycleCovenantHash","type":"bytes32"}],"name":"TradeCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"destination","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"FACTOR_SCALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"tradeId","type":"bytes32"}],"name":"activeTrade","outputs":[{"internalType":"bool","name":"isActive","type":"bool"},{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"address","name":"arbiter","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"paymentAmount","type":"uint256"},{"internalType":"uint256","name":"bondAmount","type":"uint256"},{"internalType":"uint256","name":"unlockAt","type":"uint256"},{"internalType":"address","name":"timeoutClaimant","type":"address"},{"internalType":"uint256","name":"escrowFee","type":"uint256"},{"internalType":"bytes32","name":"contextHash","type":"bytes32"},{"internalType":"bytes32","name":"recycleCovenantHash","type":"bytes32"}],"internalType":"struct MultiEscrow.Trade","name":"trade","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activeTradeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"tradeId","type":"bytes32"},{"internalType":"uint256","name":"paymentFactor","type":"uint256"},{"internalType":"uint256","name":"bondFactor","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"arbitrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"tradeId","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"tradeId","type":"bytes32"},{"internalType":"address","name":"_buyer","type":"address"},{"internalType":"address","name":"_seller","type":"address"},{"internalType":"address","name":"_arbiter","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_paymentAmount","type":"uint256"},{"internalType":"uint256","name":"_bondAmount","type":"uint256"},{"internalType":"uint256","name":"_unlockAt","type":"uint256"},{"internalType":"uint256","name":"_escrowFee","type":"uint256"}],"name":"createTrade","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"tradeId","type":"bytes32"},{"internalType":"address","name":"_buyer","type":"address"},{"internalType":"address","name":"_seller","type":"address"},{"internalType":"address","name":"_arbiter","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_paymentAmount","type":"uint256"},{"internalType":"uint256","name":"_bondAmount","type":"uint256"},{"internalType":"uint256","name":"_unlockAt","type":"uint256"},{"internalType":"address","name":"_timeoutClaimant","type":"address"},{"internalType":"uint256","name":"_escrowFee","type":"uint256"},{"internalType":"bytes32","name":"_contextHash","type":"bytes32"},{"internalType":"bytes32","name":"recycleCovenantHash","type":"bytes32"}],"name":"createTradeWithTerms","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActiveTradeIds","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"offset","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"getActiveTradeIdsPage","outputs":[{"internalType":"bytes32[]","name":"ids","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"sourceTradeId","type":"bytes32"},{"internalType":"bytes32","name":"targetTradeId","type":"bytes32"},{"internalType":"address","name":"targetBuyer","type":"address"},{"internalType":"address","name":"targetSeller","type":"address"},{"internalType":"address","name":"targetArbiter","type":"address"},{"internalType":"address","name":"targetToken","type":"address"},{"internalType":"uint256","name":"targetPaymentAmount","type":"uint256"},{"internalType":"uint256","name":"targetBondAmount","type":"uint256"},{"internalType":"uint256","name":"targetUnlockAt","type":"uint256"},{"internalType":"address","name":"targetTimeoutClaimant","type":"address"},{"internalType":"uint256","name":"targetEscrowFee","type":"uint256"},{"internalType":"bytes32","name":"targetContextHash","type":"bytes32"},{"internalType":"bytes32","name":"targetRecycleCovenantHash","type":"bytes32"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"buyerSignature","type":"bytes"},{"internalType":"bytes","name":"arbiterSignature","type":"bytes"}],"name":"recycle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"tradeId","type":"bytes32"},{"internalType":"address","name":"actor","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"releaseToCounterparty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalPending","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"trades","outputs":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"address","name":"arbiter","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"paymentAmount","type":"uint256"},{"internalType":"uint256","name":"bondAmount","type":"uint256"},{"internalType":"uint256","name":"unlockAt","type":"uint256"},{"internalType":"address","name":"timeoutClaimant","type":"address"},{"internalType":"uint256","name":"escrowFee","type":"uint256"},{"internalType":"bytes32","name":"contextHash","type":"bytes32"},{"internalType":"bytes32","name":"recycleCovenantHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"address","name":"destination","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"withdrawNonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]',
  'MultiEscrow',
);

class MultiEscrow extends _i1.GeneratedContract {
  MultiEscrow({
    required _i2.EthereumAddress address,
    required _i1.Web3Client client,
    int? chainId,
  }) : super(
          _i1.DeployedContract(
            _contractAbi,
            address,
          ),
          client,
          chainId,
        );

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> FACTOR_SCALE({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[1];
    assert(checkSignature(function, 'a1fb6345'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<ActiveTrade> activeTrade(
    ({_i3.Uint8List tradeId}) args, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[2];
    assert(checkSignature(function, '1ca82a93'));
    final params = [args.tradeId];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return ActiveTrade(response);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> activeTradeCount({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[3];
    assert(checkSignature(function, 'cedc4478'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> arbitrate(
    ({
      _i3.Uint8List tradeId,
      BigInt paymentFactor,
      BigInt bondFactor,
      _i3.Uint8List signature
    }) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[4];
    assert(checkSignature(function, '36607958'));
    final params = [
      args.tradeId,
      args.paymentFactor,
      args.bondFactor,
      args.signature,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BalanceOf> balanceOf(
    ({_i2.EthereumAddress user}) args, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[5];
    assert(checkSignature(function, '70a08231'));
    final params = [args.user];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return BalanceOf(response);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> balances(
    ({_i2.EthereumAddress $param6, _i2.EthereumAddress $param7}) args, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[6];
    assert(checkSignature(function, 'c23f001f'));
    final params = [
      args.$param6,
      args.$param7,
    ];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> claim(
    ({_i3.Uint8List tradeId, _i3.Uint8List signature}) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[7];
    assert(checkSignature(function, 'f0331024'));
    final params = [
      args.tradeId,
      args.signature,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> createTrade(
    ({
      _i3.Uint8List tradeId,
      _i2.EthereumAddress buyer,
      _i2.EthereumAddress seller,
      _i2.EthereumAddress arbiter,
      _i2.EthereumAddress token,
      BigInt paymentAmount,
      BigInt bondAmount,
      BigInt unlockAt,
      BigInt escrowFee
    }) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[8];
    assert(checkSignature(function, '49173398'));
    final params = [
      args.tradeId,
      args.buyer,
      args.seller,
      args.arbiter,
      args.token,
      args.paymentAmount,
      args.bondAmount,
      args.unlockAt,
      args.escrowFee,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> createTradeWithTerms(
    ({
      _i3.Uint8List tradeId,
      _i2.EthereumAddress buyer,
      _i2.EthereumAddress seller,
      _i2.EthereumAddress arbiter,
      _i2.EthereumAddress token,
      BigInt paymentAmount,
      BigInt bondAmount,
      BigInt unlockAt,
      _i2.EthereumAddress timeoutClaimant,
      BigInt escrowFee,
      _i3.Uint8List contextHash,
      _i3.Uint8List recycleCovenantHash
    }) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[9];
    assert(checkSignature(function, '341fb34c'));
    final params = [
      args.tradeId,
      args.buyer,
      args.seller,
      args.arbiter,
      args.token,
      args.paymentAmount,
      args.bondAmount,
      args.unlockAt,
      args.timeoutClaimant,
      args.escrowFee,
      args.contextHash,
      args.recycleCovenantHash,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<Eip712Domain> eip712Domain({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[10];
    assert(checkSignature(function, '84b0196e'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return Eip712Domain(response);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<List<_i3.Uint8List>> getActiveTradeIds({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[11];
    assert(checkSignature(function, 'f4298124'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as List<dynamic>).cast<_i3.Uint8List>();
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<List<_i3.Uint8List>> getActiveTradeIdsPage(
    ({BigInt offset, BigInt limit}) args, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[12];
    assert(checkSignature(function, '56c48e83'));
    final params = [
      args.offset,
      args.limit,
    ];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as List<dynamic>).cast<_i3.Uint8List>();
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<_i2.EthereumAddress> owner({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[13];
    assert(checkSignature(function, '8da5cb5b'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as _i2.EthereumAddress);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> recycle(
    ({
      _i3.Uint8List sourceTradeId,
      _i3.Uint8List targetTradeId,
      _i2.EthereumAddress targetBuyer,
      _i2.EthereumAddress targetSeller,
      _i2.EthereumAddress targetArbiter,
      _i2.EthereumAddress targetToken,
      BigInt targetPaymentAmount,
      BigInt targetBondAmount,
      BigInt targetUnlockAt,
      _i2.EthereumAddress targetTimeoutClaimant,
      BigInt targetEscrowFee,
      _i3.Uint8List targetContextHash,
      _i3.Uint8List targetRecycleCovenantHash,
      BigInt deadline,
      _i3.Uint8List buyerSignature,
      _i3.Uint8List arbiterSignature
    }) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[14];
    assert(checkSignature(function, 'daf38b08'));
    final params = [
      args.sourceTradeId,
      args.targetTradeId,
      args.targetBuyer,
      args.targetSeller,
      args.targetArbiter,
      args.targetToken,
      args.targetPaymentAmount,
      args.targetBondAmount,
      args.targetUnlockAt,
      args.targetTimeoutClaimant,
      args.targetEscrowFee,
      args.targetContextHash,
      args.targetRecycleCovenantHash,
      args.deadline,
      args.buyerSignature,
      args.arbiterSignature,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> releaseToCounterparty(
    ({
      _i3.Uint8List tradeId,
      _i2.EthereumAddress actor,
      _i3.Uint8List signature
    }) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[15];
    assert(checkSignature(function, 'b732d9c2'));
    final params = [
      args.tradeId,
      args.actor,
      args.signature,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> rescueERC20(
    ({_i2.EthereumAddress token, _i2.EthereumAddress to, BigInt amount}) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[16];
    assert(checkSignature(function, 'b2118a8d'));
    final params = [
      args.token,
      args.to,
      args.amount,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> rescueNative(
    ({_i2.EthereumAddress to, BigInt amount}) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[17];
    assert(checkSignature(function, '1291f79d'));
    final params = [
      args.to,
      args.amount,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> totalPending(
    ({_i2.EthereumAddress $param57}) args, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[18];
    assert(checkSignature(function, 'c1b64f74'));
    final params = [args.$param57];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<Trades> trades(
    ({_i3.Uint8List $param58}) args, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[19];
    assert(checkSignature(function, '00162420'));
    final params = [args.$param58];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return Trades(response);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> transferOwnership(
    ({_i2.EthereumAddress newOwner}) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[20];
    assert(checkSignature(function, 'f2fde38b'));
    final params = [args.newOwner];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  Future<String> withdraw(
    ({
      _i2.EthereumAddress token,
      _i2.EthereumAddress beneficiary,
      _i2.EthereumAddress destination,
      _i3.Uint8List signature
    }) args, {
    required _i1.Credentials credentials,
    _i1.Transaction? transaction,
  }) async {
    final function = self.abi.functions[21];
    assert(checkSignature(function, '7d075efb'));
    final params = [
      args.token,
      args.beneficiary,
      args.destination,
      args.signature,
    ];
    return write(
      credentials,
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> withdrawNonces(
    ({_i2.EthereumAddress $param64}) args, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[22];
    assert(checkSignature(function, 'f5aa42bb'));
    final params = [args.$param64];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// Returns a live stream of all Arbitrated events emitted by this contract.
  Stream<Arbitrated> arbitratedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('Arbitrated');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return Arbitrated(
        decoded,
        result,
      );
    });
  }

  /// Returns a live stream of all Claimed events emitted by this contract.
  Stream<Claimed> claimedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('Claimed');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return Claimed(
        decoded,
        result,
      );
    });
  }

  /// Returns a live stream of all EIP712DomainChanged events emitted by this contract.
  Stream<EIP712DomainChanged> eIP712DomainChangedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('EIP712DomainChanged');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return EIP712DomainChanged(
        decoded,
        result,
      );
    });
  }

  /// Returns a live stream of all FundsRecycled events emitted by this contract.
  Stream<FundsRecycled> fundsRecycledEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('FundsRecycled');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return FundsRecycled(
        decoded,
        result,
      );
    });
  }

  /// Returns a live stream of all OwnershipTransferred events emitted by this contract.
  Stream<OwnershipTransferred> ownershipTransferredEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('OwnershipTransferred');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return OwnershipTransferred(
        decoded,
        result,
      );
    });
  }

  /// Returns a live stream of all ReleasedToCounterparty events emitted by this contract.
  Stream<ReleasedToCounterparty> releasedToCounterpartyEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('ReleasedToCounterparty');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return ReleasedToCounterparty(
        decoded,
        result,
      );
    });
  }

  /// Returns a live stream of all TradeCreated events emitted by this contract.
  Stream<TradeCreated> tradeCreatedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('TradeCreated');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return TradeCreated(
        decoded,
        result,
      );
    });
  }

  /// Returns a live stream of all Withdrawn events emitted by this contract.
  Stream<Withdrawn> withdrawnEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('Withdrawn');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return Withdrawn(
        decoded,
        result,
      );
    });
  }
}

class ActiveTrade {
  ActiveTrade(List<dynamic> response)
      : isActive = (response[0] as bool),
        trade = (response[1] as dynamic);

  final bool isActive;

  final dynamic trade;
}

class BalanceOf {
  BalanceOf(List<dynamic> response)
      : tokens = (response[0] as List<dynamic>).cast<_i2.EthereumAddress>(),
        amounts = (response[1] as List<dynamic>).cast<BigInt>();

  final List<_i2.EthereumAddress> tokens;

  final List<BigInt> amounts;
}

class Eip712Domain {
  Eip712Domain(List<dynamic> response)
      : fields = (response[0] as _i3.Uint8List),
        name = (response[1] as String),
        version = (response[2] as String),
        chainId = (response[3] as BigInt),
        verifyingContract = (response[4] as _i2.EthereumAddress),
        salt = (response[5] as _i3.Uint8List),
        extensions = (response[6] as List<dynamic>).cast<BigInt>();

  final _i3.Uint8List fields;

  final String name;

  final String version;

  final BigInt chainId;

  final _i2.EthereumAddress verifyingContract;

  final _i3.Uint8List salt;

  final List<BigInt> extensions;
}

class Trades {
  Trades(List<dynamic> response)
      : buyer = (response[0] as _i2.EthereumAddress),
        seller = (response[1] as _i2.EthereumAddress),
        arbiter = (response[2] as _i2.EthereumAddress),
        token = (response[3] as _i2.EthereumAddress),
        paymentAmount = (response[4] as BigInt),
        bondAmount = (response[5] as BigInt),
        unlockAt = (response[6] as BigInt),
        timeoutClaimant = (response[7] as _i2.EthereumAddress),
        escrowFee = (response[8] as BigInt),
        contextHash = (response[9] as _i3.Uint8List),
        recycleCovenantHash = (response[10] as _i3.Uint8List);

  final _i2.EthereumAddress buyer;

  final _i2.EthereumAddress seller;

  final _i2.EthereumAddress arbiter;

  final _i2.EthereumAddress token;

  final BigInt paymentAmount;

  final BigInt bondAmount;

  final BigInt unlockAt;

  final _i2.EthereumAddress timeoutClaimant;

  final BigInt escrowFee;

  final _i3.Uint8List contextHash;

  final _i3.Uint8List recycleCovenantHash;
}

class Arbitrated {
  Arbitrated(
    List<dynamic> response,
    this.event,
  )   : tradeId = (response[0] as _i3.Uint8List),
        token = (response[1] as _i2.EthereumAddress),
        seller = (response[2] as _i2.EthereumAddress),
        buyer = (response[3] as _i2.EthereumAddress),
        paymentAmount = (response[4] as BigInt),
        bondAmount = (response[5] as BigInt),
        paymentFactor = (response[6] as BigInt),
        bondFactor = (response[7] as BigInt);

  final _i3.Uint8List tradeId;

  final _i2.EthereumAddress token;

  final _i2.EthereumAddress seller;

  final _i2.EthereumAddress buyer;

  final BigInt paymentAmount;

  final BigInt bondAmount;

  final BigInt paymentFactor;

  final BigInt bondFactor;

  final _i1.FilterEvent event;
}

class Claimed {
  Claimed(
    List<dynamic> response,
    this.event,
  )   : tradeId = (response[0] as _i3.Uint8List),
        token = (response[1] as _i2.EthereumAddress),
        seller = (response[2] as _i2.EthereumAddress),
        buyer = (response[3] as _i2.EthereumAddress),
        timeoutClaimant = (response[4] as _i2.EthereumAddress),
        paymentAmount = (response[5] as BigInt),
        bondAmount = (response[6] as BigInt);

  final _i3.Uint8List tradeId;

  final _i2.EthereumAddress token;

  final _i2.EthereumAddress seller;

  final _i2.EthereumAddress buyer;

  final _i2.EthereumAddress timeoutClaimant;

  final BigInt paymentAmount;

  final BigInt bondAmount;

  final _i1.FilterEvent event;
}

class EIP712DomainChanged {
  EIP712DomainChanged(
    List<dynamic> response,
    this.event,
  );

  final _i1.FilterEvent event;
}

class FundsRecycled {
  FundsRecycled(
    List<dynamic> response,
    this.event,
  )   : sourceTradeId = (response[0] as _i3.Uint8List),
        targetTradeId = (response[1] as _i3.Uint8List),
        token = (response[2] as _i2.EthereumAddress),
        buyer = (response[3] as _i2.EthereumAddress),
        arbiter = (response[4] as _i2.EthereumAddress),
        amount = (response[5] as BigInt),
        contextHash = (response[6] as _i3.Uint8List);

  final _i3.Uint8List sourceTradeId;

  final _i3.Uint8List targetTradeId;

  final _i2.EthereumAddress token;

  final _i2.EthereumAddress buyer;

  final _i2.EthereumAddress arbiter;

  final BigInt amount;

  final _i3.Uint8List contextHash;

  final _i1.FilterEvent event;
}

class OwnershipTransferred {
  OwnershipTransferred(
    List<dynamic> response,
    this.event,
  )   : previousOwner = (response[0] as _i2.EthereumAddress),
        newOwner = (response[1] as _i2.EthereumAddress);

  final _i2.EthereumAddress previousOwner;

  final _i2.EthereumAddress newOwner;

  final _i1.FilterEvent event;
}

class ReleasedToCounterparty {
  ReleasedToCounterparty(
    List<dynamic> response,
    this.event,
  )   : tradeId = (response[0] as _i3.Uint8List),
        token = (response[1] as _i2.EthereumAddress),
        from = (response[2] as _i2.EthereumAddress),
        to = (response[3] as _i2.EthereumAddress),
        amount = (response[4] as BigInt);

  final _i3.Uint8List tradeId;

  final _i2.EthereumAddress token;

  final _i2.EthereumAddress from;

  final _i2.EthereumAddress to;

  final BigInt amount;

  final _i1.FilterEvent event;
}

class TradeCreated {
  TradeCreated(
    List<dynamic> response,
    this.event,
  )   : tradeId = (response[0] as _i3.Uint8List),
        token = (response[1] as _i2.EthereumAddress),
        seller = (response[2] as _i2.EthereumAddress),
        buyer = (response[3] as _i2.EthereumAddress),
        arbiter = (response[4] as _i2.EthereumAddress),
        paymentAmount = (response[5] as BigInt),
        bondAmount = (response[6] as BigInt),
        unlockAt = (response[7] as BigInt),
        timeoutClaimant = (response[8] as _i2.EthereumAddress),
        escrowFee = (response[9] as BigInt),
        contextHash = (response[10] as _i3.Uint8List),
        recycleCovenantHash = (response[11] as _i3.Uint8List);

  final _i3.Uint8List tradeId;

  final _i2.EthereumAddress token;

  final _i2.EthereumAddress seller;

  final _i2.EthereumAddress buyer;

  final _i2.EthereumAddress arbiter;

  final BigInt paymentAmount;

  final BigInt bondAmount;

  final BigInt unlockAt;

  final _i2.EthereumAddress timeoutClaimant;

  final BigInt escrowFee;

  final _i3.Uint8List contextHash;

  final _i3.Uint8List recycleCovenantHash;

  final _i1.FilterEvent event;
}

class Withdrawn {
  Withdrawn(
    List<dynamic> response,
    this.event,
  )   : beneficiary = (response[0] as _i2.EthereumAddress),
        token = (response[1] as _i2.EthereumAddress),
        destination = (response[2] as _i2.EthereumAddress),
        amount = (response[3] as BigInt);

  final _i2.EthereumAddress beneficiary;

  final _i2.EthereumAddress token;

  final _i2.EthereumAddress destination;

  final BigInt amount;

  final _i1.FilterEvent event;
}
