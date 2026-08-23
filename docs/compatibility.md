# Compatibility matrix

The aggregate Git commit and submodule SHAs are the authoritative compatibility
set. Package versions describe API compatibility but do not replace exact
snapshot provenance.

| Component | Current line | Required peers/runtime |
| --- | --- | --- |
| Marketplace driver interface | 0.1.x | Node 20+ for package consumers |
| Location interface | 0.1.x | Node 20+ |
| Cashu driver | 0.1.x | Node 22.4+, driver interface 0.1.x, Cashu TS 4.5.x; NUT-11 for all escrow and NUT-09 plus an active-keyset horizon for auctions |
| EVM contracts | 0.1.x | Solidity 0.8.35 build, EIP-712 domain version 7 |
| EVM driver | 0.1.x | Interface/contracts 0.1.x, viem 2.55.x |
| H3 location provider | 0.1.x | Location interface 0.1.x, H3 4.4.x |
| Marketplace runtime fork | nostr-tools 2.23.5 line | Interfaces 0.1.x |
| Aggregate development | NMDK 0.1.x | Node 24 or 25, npm 11.x (CI: 11.6.2), Bun 1.3.14, Compose v2+ |

Before a release, `artifacts/release/nmdk-snapshot.json` records the exact root
and recursive submodule commits. Breaking protocol or persisted-state changes
require a new versioned encoding and migration plan even if TypeScript APIs are
source-compatible.
