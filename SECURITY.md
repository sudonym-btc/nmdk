# Security policy

NMDK coordinates code that can control bearer Cashu proofs and EVM funds. Treat
any unexpected proof disclosure, contract-validation bypass, replay,
double-spend, stuck-fund condition, or persisted signing secret as a security
issue.

## Reporting

Do not open a public issue for an undisclosed vulnerability. Use the
[private GitHub security advisory form](https://github.com/sudonym-btc/nmdk/security/advisories/new)
and include the affected pinned commits, reproduction, potential fund impact,
and whether any secret or bearer proof was exposed. Maintainers should
acknowledge a report within three business days and provide a remediation or
coordination update within seven business days.

Never include live seed phrases, private keys, `nsec` values, Cashu proofs,
preimages, macaroons, or production RPC credentials in a report. Replace them
with deterministic regtest fixtures.

## Supported versions

Only the exact submodule commits in the latest signed NMDK release are in
scope. Draft branches, older aggregate commits, and the local demo stack are
development surfaces. See `KNOWN_LIMITATIONS.md` before handling real value.

## Disclosure

Security fixes are coordinated across the aggregate repository and affected
package repositories. Release notes identify affected versions, migration or
key-rotation requirements, and whether historical relay or browser data must
be purged.
