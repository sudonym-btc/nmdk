# Release process

Packages are released in dependency order:

1. driver and location interfaces;
2. EVM contract artifacts;
3. Cashu, EVM, and H3 implementations;
4. `nostr-tools` marketplace runtime;
5. application and aggregate snapshot.

All inter-package dependencies use exact compatible versions in published
manifests. The root workspace links matching local versions during development.
The root lockfile governs the aggregate snapshot; package-local lockfiles govern
standalone package release jobs and must agree on shared dependency versions.

A release candidate requires:

- protocol vectors and compatibility decisions finalized;
- `npm test`, package smoke tests, production audit, and fresh-stack matrix;
- regenerated docs and contract artifacts with no diff;
- CycloneDX SBOM, `THIRD_PARTY_LICENSES.json`, checksums, and npm provenance;
- no unresolved critical/high security finding;
- a clean anonymous recursive clone rehearsal;
- changelog, support matrix, migration, rollback, and secret-purge notes.

The aggregate release records every submodule SHA. Documentation links use
those SHAs, not mutable package Pages sites. A package release does not imply
that the aggregate is approved for real value; `KNOWN_LIMITATIONS.md` remains
authoritative.
