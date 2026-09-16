import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:http/http.dart' as http;
import 'package:marketplace_evm/eoa_escrow.dart';
import 'package:marketplace_evm/src/datasources/contracts/boltz/IERC20.g.dart';
import 'package:marketplace_evm/src/datasources/contracts/escrow/MultiEscrow.g.dart';
import 'package:test/test.dart';
import 'package:wallet/wallet.dart' show EthereumAddress, EtherAmount;
import 'package:web3dart/web3dart.dart';

class _RecordingClient extends Web3Client {
  Transaction? transaction;
  int? sentChainId;
  Credentials? credentials;
  Uint8List code = Uint8List.fromList([0x60, 0x00]);

  _RecordingClient() : super('http://fixture.invalid', http.Client());

  @override
  Future<String> sendTransaction(
    Credentials cred,
    Transaction transaction, {
    int? chainId = 1,
    bool fetchChainIdFromNetworkId = false,
  }) async {
    this.credentials = cred;
    this.transaction = transaction;
    sentChainId = chainId;
    return '0xfixture';
  }

  @override
  Future<Uint8List> getCode(
    EthereumAddress address, {
    BlockNum? atBlock,
  }) async => code;
}

List<dynamic> _arguments(ContractFunction function, Transaction transaction) {
  final data = transaction.data!;
  expect(data.sublist(0, 4), function.selector);
  return TupleType(
    function.parameters.map((p) => p.type).toList(),
  ).decode(Uint8List.fromList(data.sublist(4)).buffer, 0).data;
}

void main() {
  final fixture =
      jsonDecode(
            File('../../test/fixtures/driver-wire.json').readAsStringSync(),
          )
          as Map<String, dynamic>;
  final signing = fixture['signing'] as Map<String, dynamic>;
  final domain = signing['domain'] as Map<String, dynamic>;
  final address = EthereumAddress.fromHex(
    domain['verifyingContract'] as String,
  );
  final key = EthPrivateKey.fromHex(signing['privateKey'] as String);
  final zero = EthereumAddress.fromHex(
    '0x0000000000000000000000000000000000000000',
  );
  final token = EthereumAddress.fromHex(
    '0x5555555555555555555555555555555555555555',
  );
  final actor = EthereumAddress.fromHex(
    '0x2222222222222222222222222222222222222222',
  );
  final tradeId = '1' * 64;
  late _RecordingClient client;
  late EoaEscrowClient escrow;
  late MultiEscrow generated;
  setUp(() {
    client = _RecordingClient();
    escrow = EoaEscrowClient(
      client: client,
      address: address,
      chainId: domain['chainId'] as int,
    );
    generated = MultiEscrow(address: address, client: client);
  });
  tearDown(() => client.dispose());

  test(
    'EOA funding preserves exact amounts, chain, gas and nonces; only native funding transfers value',
    () async {
      final payment = BigInt.parse('900719925474099312345');
      for (final asset in [zero, token]) {
        await escrow.fund(
          tradeId: tradeId,
          buyer: key.address,
          seller: actor,
          arbiter: actor,
          token: asset,
          paymentAmount: payment,
          bondAmount: BigInt.from(25),
          unlockAt: BigInt.from(2000000000),
          credentials: key,
          transaction: Transaction(
            nonce: 9,
            maxGas: 800000,
            gasPrice: EtherAmount.inWei(BigInt.one),
          ),
        );
        final tx = client.transaction!;
        final args = _arguments(generated.self.function('createTrade'), tx);
        expect(args[5], payment);
        expect(args[6], BigInt.from(25));
        expect(
          tx.value!.getInWei,
          asset == zero ? payment + BigInt.from(25) : BigInt.zero,
        );
        expect(tx.to, address);
        expect(tx.nonce, 9);
        expect(tx.maxGas, 800000);
        expect(client.sentChainId, domain['chainId']);
      }
      await escrow.approveFunding(
        token: token,
        amount: payment,
        credentials: key,
        transaction: Transaction(nonce: 8),
      );
      final approval = _arguments(
        IERC20(address: token, client: client).self.function('approve'),
        client.transaction!,
      );
      expect(approval, [address, payment]);
      expect(client.transaction!.to, token);
      expect(client.sentChainId, domain['chainId']);
    },
  );

  test(
    'EOA settlement sends canonical fixture signatures with a separate transaction sponsor',
    () async {
      final sponsor = EthPrivateKey.fromInt(BigInt.two);
      final base = Transaction(nonce: 10, maxGas: 3000000);
      for (final name in ['Claim', 'Arbitrate']) {
        final vector = (signing['vectors'] as List)
            .cast<Map<String, dynamic>>()
            .firstWhere((v) => v['primaryType'] == name);
        if (name == 'Claim') {
          await escrow.claim(
            tradeId: tradeId,
            signer: key,
            credentials: sponsor,
            transaction: base,
          );
        } else {
          await escrow.arbitrate(
            tradeId: tradeId,
            paymentForward: 1,
            bondForward: 0.5,
            signer: key,
            credentials: sponsor,
            transaction: base,
          );
        }
        final args = _arguments(
          generated.self.function(name.toLowerCase()),
          client.transaction!,
        );
        expect(
          bytesToHex(args.last as Uint8List, include0x: true),
          vector['signature'],
        );
        expect(client.credentials, same(sponsor));
        expect(client.transaction!.nonce, 10);
        expect(client.sentChainId, domain['chainId']);
      }
      expect(
        () => escrow.arbitrate(
          tradeId: tradeId,
          paymentForward: double.nan,
          bondForward: 0,
          signer: key,
          credentials: sponsor,
          transaction: base,
        ),
        throwsArgumentError,
      );
    },
  );

  test(
    'bytecode identity is canonical and empty deployment fails before use',
    () async {
      expect(
        await readContractBytecodeHash(
          client: client,
          address: address,
          requireDeployed: true,
        ),
        fixture['runtimeBytecode']['sha256'] as String,
      );
      expect(
        contractBytecodeHash(client.code),
        fixture['runtimeBytecode']['sha256'],
      );
      client.code = Uint8List(0);
      await expectLater(
        readContractBytecodeHash(
          client: client,
          address: address,
          requireDeployed: true,
        ),
        throwsStateError,
      );
    },
  );
}
