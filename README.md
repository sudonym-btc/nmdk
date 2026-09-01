# NMDK

Nostr Markets Development Kit.

> **Development status:** this snapshot is not approved for public-chain or
> real-value use. Read [KNOWN_LIMITATIONS.md](KNOWN_LIMITATIONS.md), especially
> the intentionally deferred `MultiEscrow` trade-ID replay issue.

This repository pins the marketplace protocol, client runtime, payment drivers,
demo clients, and local development stacks used by Nostr marketplace work. It is
intentionally an aggregate repository: the implementation repos remain nested
submodules so each package can keep its own release cadence while NMDK provides a
single reproducible development snapshot.

## Demo quick start

Install the prerequisites listed below, then use exactly two steps:

```sh
git clone --recurse-submodules https://github.com/sudonym-btc/nmdk.git && cd nmdk
npm run demo:quickstart
```

`demo:quickstart` checks the required command versions, installs the pinned workspace,
cold-starts the disposable Cashu, EVM, Lightning, relay, proxy, and arbiter
services, seeds deterministic demo accounts, and starts the browser client. Open
<http://127.0.0.1:5178> when Vite reports that it is ready. Press `Ctrl-C` to
stop the client and run `npm run down` to stop the stack.

On `/login`, choose **Buyer** to browse, order, bid, negotiate, and inspect **My
Orders**. Choose **Arbiter - EVM**, then select **Escrow → Dashboard** to
monitor every seeded order or auction bid that names that account, together
with the actions the current payment driver says are safe. All accounts, funds,
and chain state are local deterministic fixtures.

## Contents

- `dependencies/nostr-tools` - marketplace runtime and event helpers.
- `dependencies/ndk` - marketplace branch of NDK.
- `dependencies/marketplace-app-ts` - browser demo client.
- `dependencies/marketplace-driver-interface-ts` - shared payment-driver contracts and lifecycle types.
- `dependencies/marketplace-cashu-ts` - Cashu escrow payment policy.
- `dependencies/marketplace-cashu-stack` - Cashu mints, relay, and LND nodes on the shared regtest Lightning stack.
- `dependencies/marketplace-evm-ts` - EVM escrow and auction payment policies.
- `dependencies/marketplace-evm-contracts` - generated marketplace EVM contract artifacts.
- `dependencies/marketplace-evm-stack` - EVM/Boltz regtest stack plus shared Bitcoin and marketplace edge LND.
- `dependencies/marketplace-location-interface-ts` - pluggable marketplace location contract.
- `dependencies/marketplace-location-h3-ts` - H3-backed location implementation.
- `dependencies/nips/*` - marketplace-related protocol drafts.
- `apps/docs` - generated package and protocol documentation site.

## Prerequisites and development setup

Supported local versions are Node.js 24 or 25, npm 11.x, Bun 1.3.14, Git,
Docker Engine, and Docker Compose v2 or newer. The Docker daemon must be
running. CI pins npm 11.6.2 as the reproducible reference.
The full local stack is intended for macOS/Linux and
requires approximately 16 GB RAM and 30 GB free disk. Submodules use anonymous
HTTPS URLs.

```sh
./scripts/bootstrap.sh
```

The quick start runs this bootstrap automatically. Run it directly when you
only need dependencies and hermetic development checks.

## Marketplace API

Applications use one session facade for orders, live escrow records, and
driver-authorized actions:

```ts
for await (const state of session.orders.create(listing, { quantity: 1 })) {
  renderOrderState(state)
}

const records = await session.escrow.records.list()
const liveRecords = session.escrow.records.watch()

const releasable = records.find(record => record.actions.includes('release'))
if (releasable) {
  for await (const state of session.escrow.execute(releasable, 'release')) {
    renderSettlementState(state)
  }
}
```

`execute()` refetches and revalidates the record before invoking a driver, so
stale UI state cannot authorize a financial action. See the
[marketplace getting-started guide](dependencies/nostr-tools/docs/marketplace/getting-started.md)
for session setup, bidding, negotiation, and the complete lifecycle types.

## Checks

```sh
./scripts/test.sh
```

The hermetic test wrapper checks every interface/driver, all marketplace runtime
tests, generated contract artifact drift, the application, docs, and repository
policy. It does not silently probe or skip unavailable local infrastructure.

Verify publishable tarballs and production dependencies separately:

```sh
npm run test:packages
npm run audit:production
```

## Stacks

```sh
./scripts/up.sh
```

`up.sh` launches the fully standalone NMDK development surface on fixed
localhost ports:

- Nostr relay: `ws://127.0.0.1:18080`
- Cashu sat mint: `http://127.0.0.1:19338`
- Cashu USD mint: `http://127.0.0.1:19339`
- Blossom upload: `http://127.0.0.1:13096`, `https://blossom.marketplace.test`
- Arbitrum RPC: `http://127.0.0.1:18546`
- Arbitrum explorer: `http://127.0.0.1:15100`, `https://explorer.arbitrum.evm.marketplace.test`
- Rootstock RPC: `http://127.0.0.1:18545`
- Boltz API: `http://127.0.0.1:19001/v2`
- Marketplace LND REST/RPC: `https://127.0.0.1:28083`, `127.0.0.1:32009`
- LNbits: `http://127.0.0.1:15055`, `https://lnbits.marketplace.test`
- Alby Hub: `http://127.0.0.1:15056`, `https://alby.marketplace.test`
- EVM AA bundler: `http://127.0.0.1:4337`
- EVM AA paymaster: `http://127.0.0.1:3010`

The development proxy also exposes the `marketplace.test` DNS surface over
HTTPS. `./scripts/up.sh` runs a Docker TLS init job which creates a local NMDK
development CA in `docker/tls/ca/ca.crt` and a SAN certificate in
`docker/certs/marketplace.test.crt` covering the root domain plus the client,
relay, Signet, EVM, Cashu, LND, and Boltz `*.marketplace.test` hosts. Install
that CA into your browser or OS trust store if you want these local HTTPS
origins to be trusted without warnings. Host trust is never modified by
`npm run up`. On macOS, run `npm run trust:ca` explicitly to add
the generated development CA to the System keychain; the command explains why it
needs `sudo` before it asks. Run `npm run untrust:ca` to remove it afterward.

The command starts the top-level marketplace Bitcoin/LND/LNbits stack first.
It then starts EVM/Boltz against that shared Bitcoin network, starts Cashu on
the same Bitcoin network, and runs a one-shot liquidity initializer that
connects the marketplace LND to Cashu and Boltz Lightning nodes. LNbits and
Alby Hub run on that same marketplace LND with self-payments enabled, and `npm run seed`
creates deterministic LNbits users plus zap-enabled LNURL pay links for seeded
marketplace profiles. The profile `lud16` values use the
`lnbits.marketplace.test` domain. The EVM stack deploys `MultiEscrow` for both
normal escrow payments and auction bid lockups. For deterministic one-command
launches, the disposable EVM/Boltz regtest volumes are reset by default before
startup; set `MARKETPLACE_EVM_RESET_ON_UP=0` if you deliberately want to
preserve them.
The liquidity initializer provisions large local-regtest channels by default
and rerunning it repairs drained edges by opening another channel when outbound
liquidity falls below `MARKETPLACE_EDGE_MIN_OUTBOUND_SAT`. Override
`MARKETPLACE_EDGE_CHANNEL_SIZE_SAT`, `MARKETPLACE_EDGE_CHANNEL_PUSH_SAT`,
`MARKETPLACE_EDGE_MIN_OUTBOUND_SAT`, or
`MARKETPLACE_EDGE_MAX_CHANNELS_PER_EDGE` to tune those dev-channel limits.
It writes `dependencies/marketplace-app-ts/.env.local` for the browser demo and
`.nmdk.local.env` for shell consumers from the generated stack configs. No
custom development DNS or parent application checkout is required.

Launch the full stack and demo client in one command:

```sh
npm run demo:up
```

Or run the demo client after the stack is ready:

```sh
npm run demo
```

Regenerate a reproducible browser recording of the demo flows:

```sh
npm run demo:capture:fresh
```

The fresh capture resets disposable stack data, starts the local stack, starts
the EVM/Cashu arbiters, launches its own Vite client on `127.0.0.1:15178`, and
writes screenshots plus a WebM recording under
`artifacts/marketplace-demo/<run-id>/`.
The scripted flows place USD and BTC orders, place USD and BTC bids, submit a
Cashu-backed BTC bid, pay the generated invoices, and wait for arbiter payment
ACK events. It finishes by signing in as the seeded EVM
arbiter and recording `/escrow`, where the participating auctions and orders
must expose current driver-backed actions. Use `npm run demo:capture` when the
stack and arbiters are already running and you intentionally want to capture
against the current relay history.

For a major protocol, driver, orchestration, or demo change, run the complete
clean-state acceptance gate:

```sh
npm run demo:verify:fresh
```

That single command reproduces the lockfile install, installs the pinned
Playwright Chromium, runs the hermetic gate, deletes disposable stack state,
cold-starts every service, runs the integration matrix, runs the full browser
capture including the escrow dashboard, and always tears the stack down.
Pull-request CI runs the same gate from a fresh recursive checkout. Set
`NMDK_DEMO_VERIFY_KEEP_STACK=1` only when debugging a failed local run.
On Linux, Playwright may request `sudo` once to install its Chromium system
libraries; CI runners install those dependencies non-interactively.

If a local cold start is interrupted, run `npm run down` and retry. If startup
still reports an occupied port, stop the process using the fixed localhost port
listed above before rerunning the gate.

Run the stack-backed marketplace driver tests after the stack is ready:

```sh
npm run test:integration
```

Those tests call `nostr-tools/marketplace` methods initialized with the real EVM
and Cashu drivers. They include a real NUT-11 Cashu refund with NUT-09 lost-
response recovery, contract/AA/DEX integration, and the cross-driver matrix.
Missing or unhealthy services fail the suite. CI starts from fresh volumes and
supplies a fixed `NMDK_TEST_SEED`.

Architecture, protocol decisions, persisted-state rules, testing, security,
and releases are documented under [`docs/`](docs/architecture.md). The complete
manual and automated walkthrough is in [`docs/demo.md`](docs/demo.md). The same
material is published through the Fumadocs site under `apps/docs`.

The individual stack wrappers are still available:

```sh
./scripts/up-cashu.sh
./scripts/up-evm.sh
```

Each stack keeps its own generated `data/` directory and can also be run
directly from its nested repository.
