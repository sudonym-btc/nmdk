# Operations runbook

This runbook describes the aggregate development stack. Production operators
must replace the bundled regtest services and development credentials with
independently managed infrastructure and secrets.

## Before deployment

1. Pin the aggregate commit and record every recursive submodule SHA.
2. Run `npm ci --ignore-scripts`, `npm test`, `npm run test:integration`,
   `npm run audit:production`, and `npm run release:bundle` on a clean runner.
3. Review `KNOWN_LIMITATIONS.md`. Do not approve real-value use while a release
   blocker applies.
4. Verify the deployed `MultiEscrow` runtime hash and EIP-712 domain version
   against the release bundle. Verify every Boltz target, runtime hash, function
   selector, decoder, and chain ID before enabling swaps.
5. Verify every Cashu mint advertises NUT-11. Auction mints must also advertise
   NUT-09, and each configured keyset must be active with an operator horizon
   covering the longest accepted bid locktime.
6. Provision long-term Nostr signing, Cashu seed, EVM owner, bundler, and
   provider secrets through the deployment platform. Never place them in images,
   persistent browser storage, Compose files, logs, or the release bundle. A
   client may keep only its short-lived NIP-46 authorization in session storage.
7. Back up only the settlement journal and minimum driver recovery records,
   protected by operator-managed storage encryption and access control. The
   journal's proof payloads are sealed, but its metadata is not encrypted by the
   library. Test restoration before accepting traffic.

## Deployment and health checks

Deploy immutable images by digest. Start dependencies first, then arbiters, then
clients. Confirm:

- Bitcoin/EVM nodes are on the intended network and chain ID;
- configured Cashu mints and Nostr relays are reachable and explicitly trusted;
- the escrow address and runtime bytecode hash match the release record;
- Boltz is disabled when any trust root is absent or mismatched;
- a zero-value/canary order completes through validation and settlement; and
- no seed, proof secret, long-term private key, or full sealed payload is emitted
  to browser storage, public events, metrics, or logs; session-scoped NIP-46
  authorization is the only browser-storage exception.

Publish the auction-complete event only after the durable settlement receipt and
sealed participant payloads exist. Treat a missing receipt as incomplete work,
not as permission to start a second settlement.

## Monitoring

Alert on settlement failures, pending operations older than their chain-specific
timeout, refund failures, provider/chain mismatch, contract hash mismatch,
repeated nonce failures, NUT-09 recovery failures, relay publication failures,
Cashu keyset rotation before its committed horizon, and journal decryption
failures. Track counts and opaque operation IDs; never
label metrics with bearer proofs, invoices, signatures, private keys, seeds, or
participant plaintext.

Reconcile each terminal public event with exactly one durable operation receipt.
For EVM, reconcile submitted transaction or user-operation hashes before retrying.
For Cashu, query the mint's restore/check-state endpoints before reconstructing a
request or allocating new output indices.

## Recovery

1. Stop the affected worker and preserve its access-controlled journal and
   minimal operation records.
2. Classify the operation as prepared, submitted, confirmed, or terminal from
   the durable receipt and authoritative provider/mint state.
3. Resume with the original operation ID. Never mint a replacement identity to
   hide an ambiguous submission.
4. For an EVM submission, persist and query the transaction/user-operation hash
   before resubmitting. For Cashu, reuse the quote and deterministic output
   indices and perform NUT-09 recovery first.
5. Publish any missing terminal event only after the recovered settlement is
   confirmed and the participant payload is sealed.

## Rollback

Disable new orders and swaps before rolling back. A rollback must not downgrade
the escrow EIP-712 domain, settlement schema, recovery journal version, or trust
root validation. If the previous release cannot read the current versioned
records, restore service with the current binary and use a forward repair instead.
Contract deployments are immutable: point clients back only after verifying the
old address, bytecode hash, nonce semantics, balances, and documented limitations.

## Incident response and secret rotation

On suspected secret disclosure, stop affected workers, disable their public
routes, revoke provider credentials, rotate Nostr signers and EVM owners, and move
funds using the documented nonce-bound withdrawal path. A Cashu seed compromise
requires treating every derived proof as exposed and coordinating with the mint;
rotating a seed does not revoke existing bearer proofs.

Preserve sanitized logs, release identifiers, operation IDs, transaction hashes,
and public events. Report vulnerabilities using `SECURITY.md`; do not place
secrets or exploit details in a public issue. After containment, add a deterministic
regression test and document any migration or recovery action in the changelog.
