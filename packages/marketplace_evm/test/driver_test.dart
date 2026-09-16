import 'package:marketplace_evm/marketplace_evm.dart';
import 'package:sqlite3/sqlite3.dart';
import 'package:test/test.dart';

import 'support/fake.dart';

class _Keys extends Fake implements EvmKeyProvider {}

class _Nwc extends Fake implements EvmNwc {}

class _Payments extends Fake implements EvmPayments {}

class _Accounts extends Fake implements TradeAccountAllocator {}

void main() {
  test(
    'standalone driver initializes, isolates accounts, recovers and disposes',
    () async {
      final database = sqlite3.openInMemory();
      var pubkey = 'alice';
      final driver = MarketplaceEvm(
        evmConfig: const EvmConfig(),
        hd: _Keys(),
        currentPubkey: () => pubkey,
        nwc: _Nwc(),
        payments: _Payments(),
        tradeAccountAllocator: _Accounts(),
        database: database,
      );
      addTearDown(database.close);
      addTearDown(driver.dispose);
      await driver.init();
      expect(driver.evm.configuredChains, isEmpty);
      await driver.operationStateStore.write('swap_in', 'done', {
        'id': 'done',
        'state': 'completed',
        'isTerminal': true,
      });
      expect(await driver.operationStateStore.readAll('swap_in'), hasLength(1));
      pubkey = 'bob';
      expect(await driver.operationStateStore.readAll('swap_in'), isEmpty);
      expect(await driver.evm.recoverStaleOperations(), 0);
      pubkey = 'alice';
      expect(await driver.operationStateStore.readAll('swap_in'), hasLength(1));
    },
  );
}
