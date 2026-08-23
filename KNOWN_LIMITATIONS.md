# Known limitations

## Deferred contract trade-ID replay hardening

`MultiEscrow` deletes a settled trade record and currently permits the same
trade ID to be created again. Previously signed release, claim, arbitration,
or recycle authorizations may therefore become relevant to a recreated ID.

This item was deliberately excluded from the present implementation scope. It
is a release blocker for public-chain or real-value deployment. Until a
permanent used-ID set or versioned per-trade nonce is implemented and audited:

- deploy only to disposable development chains;
- never reuse a contract deployment for real funds;
- do not advertise NMDK EVM settlement as mainnet-safe;
- keep the demo and CI chains isolated and reset between runs.

No documentation, passing test, or package version overrides this limitation.
