# NMDK EVM driver for Dart

`marketplace_evm` owns EVM transports, Boltz swaps, escrow contract calls,
quotes, persistent operation recovery and funds monitoring. It has no dependency
on Hostr. Applications import this package directly.

Import `package:marketplace_evm/marketplace_evm.dart`. `MarketplaceEvm` composes the
driver without GetIt or generated application dependency injection. Supply an
`EvmConfig`, `EvmKeyProvider`, current-public-key callback, `EvmNwc`,
`EvmPayments`, `TradeAccountAllocator`, and a SQLite `CommonDatabase`, then call
`init()`. The driver exposes `evm`, `escrow`, operation trackers and the operation
store. The application keeps ownership of its database and key material; call
`dispose()` before closing the database. For multiple processes or isolates,
configure SQLite's `busy_timeout` on each connection as appropriate.

Applications that already own these services can compose the exported classes
directly through `ports.dart`. `funds_monitor_ports.dart` defines the additional
preferences, escrow discovery and settlement-event inputs for funds monitoring.
Use `await fundsItem.swapOutParams()` to prepare a wallet sweep or atomic escrow
withdrawal; applications do not need to construct contract call bundles.

`marketplace_models` owns shared Dart model identities. Boltz wire models,
contract ABIs, escrow signing domain/types, custom errors and settlement factor
scale are generated from NMDK's canonical OpenAPI and Solidity sources. Run
`node scripts/generate-driver-bindings.mjs --dart` from the NMDK repository root
after changing those sources. Do not edit generated outputs.

The driver supports the canonical Nostr MultiEscrow v7 signing domain. It rejects
legacy domains and mismatches between advertised and deployed bytecode before
operations proceed. Withdrawal call construction is asynchronous because each
signature must include the beneficiary's current on-chain replay-protection nonce.

From this package, run `dart analyze lib test` and `dart test`. The suite covers
standalone composition, account isolation, SQLite state transitions, swap refund
paths, escrow proof checks, incompatible deployments, funds monitoring and the
same wire, calldata and EIP-712 vectors consumed by the TypeScript driver.

The workspace uses Dart 3.13 and Flutter 3.47.4. Direct dependencies track current
stable releases, with these constraints imposed by current upstream packages:

- NDK 0.9.3 requires hooks 1 and Equatable 2. SQLite 3.5.2 is the newest release
  that shares that hooks version; SQLite 3.6 requires hooks 2.
- Coinlib 5 declares PointyCastle 3, whereas Web3dart 3 and Wallet 0.0.18 require
  PointyCastle 4. The narrow PointyCastle 4 override is validated by HASH160,
  BIP32 and BIP340 standards vectors in `marketplace_models`.
- Published Web3dart Builders 3.0.1 requires obsolete build/dart_style versions.
  The generator dependency pins its maintained `feat/upgrade-deps` revision
  `8622bd2cd434c6a6cad827265c52ec43457027f5`, which supports current builders.

The latest NDK's ASCII QR dependency and Flutter's QR renderer still require
QR 3. Flutter also pins its test and rendering dependency versions. These
upstream constraints are respected rather than overridden.
