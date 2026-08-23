# Changelog

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Package releases retain their own changelogs; this file describes aggregate
snapshot compatibility and operational changes.

## Unreleased

### Security

- Harden payment-proof trust boundaries and proof confidentiality.
- Define minimal persisted-state and crash-recovery requirements.
- Remove persistent browser signing secrets.
- Bind relayed EVM withdrawals to a beneficiary nonce and move the
  `MultiEscrow` EIP-712 domain to version 7.
- Replace metadata-only Cashu auction refunds with buyer-preauthorized,
  idempotent refund swaps and NUT-09 response-loss recovery.

### Changed

- Standardize seed selection on the newest valid seed event.
- Make local and CI verification deterministic and fail closed.
- Pin external build, action, and container inputs.
- Consolidate production, protocol, recovery, and release documentation.

### Known limitations

- The intentionally deferred `MultiEscrow` settled-trade-ID replay hardening is
  documented in `KNOWN_LIMITATIONS.md` and remains a mainnet release blocker.
