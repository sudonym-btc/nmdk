# Security and minimal-state model

## Data classes

| Class | Examples | Relay | Durable local storage | Logs |
| --- | --- | --- | --- | --- |
| Public | event IDs, chain ID, transaction hash, mint URL | Allowed | Allowed | Allowed |
| Confidential | identities or terms sealed to participants | Ciphertext only | Only when recovery requires it | Redacted |
| Bearer | Cashu proofs, claim packets | Never plaintext | Only during the shortest required transition; erase on terminal state | Never |
| Secret | `nsec`, seed, private key, preimage, macaroon | Never | Long-term secrets never; NIP-46 client authorization may be session-scoped for at most eight hours | Never |
| Derivable | deterministic keys and addresses | Public result only | Store derivation version/index, not secret result | Public result only |

Drivers declare proof sensitivity. The runtime may make a public proof public,
must encrypt a confidential proof, and must deliver a secret/bearer proof only
through the explicitly authorized sealed channel. Missing recipients or
encryption is an error, never a reason to fall back to public publication.

Every persisted operation record uses an allowlisted, versioned schema. Opaque
provider responses and arbitrary `Record<string, unknown>` payloads are not a
durable-state contract. Terminal transitions remove bearer and secret fields.
The browser never persists a local `nsec`; a short-lived NIP-46 client key and
bunker authorization may live in `sessionStorage` for up to eight hours and are
purged on logout or expiry.

## Fund-safety invariants

1. A payment proof binds exact participants, asset, amount, fee, timeout,
   context, policy, and approved implementation.
2. A retry with the same operation ID and request fingerprint resumes or
   returns the existing operation; it does not create a second financial
   action.
3. External IDs and transaction hashes are journaled before waiting for or
   initiating the next effect.
4. Publication follows a durable financial receipt. A publication failure is
   recovered from the outbox without repeating the financial effect.
5. Recovery is safe after process termination at every network/storage
   boundary.
6. Cashu P2PK value is accepted only from a mint advertising NUT-11; auction
   value additionally requires NUT-09 and an exact active-keyset operator
   horizon covering the settlement deadline.

See `SECURITY.md` for private reporting and `KNOWN_LIMITATIONS.md` for the
intentionally deferred contract issue.
