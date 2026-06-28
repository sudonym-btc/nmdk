# NMDK

Nostr Markets Development Kit.

This repository pins the marketplace protocol, client runtime, payment drivers,
demo clients, and local development stacks used by Nostr marketplace work. It is
intentionally an aggregate repository: the implementation repos remain nested
submodules so each package can keep its own release cadence while NMDK provides a
single reproducible development snapshot.

## Contents

- `dependencies/nostr-tools` - marketplace runtime and event helpers.
- `dependencies/ndk` - marketplace branch of NDK.
- `dependencies/marketplace-app-ts` - browser demo client.
- `dependencies/marketplace-cashu-ts` - Cashu escrow payment policy.
- `dependencies/marketplace-cashu-stack` - Cashu mints, relay, and LND nodes on the shared regtest Lightning stack.
- `dependencies/marketplace-evm-ts` - EVM escrow and auction payment policies.
- `dependencies/marketplace-evm-contracts` - generated marketplace EVM contract artifacts.
- `dependencies/marketplace-evm-stack` - EVM/Boltz regtest stack plus shared Bitcoin and marketplace edge LND.
- `dependencies/nips/*` - marketplace-related protocol drafts.

## Bootstrap

```sh
git submodule update --init --recursive
./scripts/bootstrap.sh
```

## Checks

```sh
./scripts/test.sh
```

The test wrapper runs the fast local checks for the marketplace runtime, Cashu
driver, EVM contracts, EVM driver, and demo client typecheck. Integration tests
that require Docker stacks are still run from their owning package or stack.

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
origins to be trusted without warnings. On macOS, run `npm run trust:ca` to add
the generated development CA to the System keychain; the command explains why it
needs `sudo` before it asks.

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
the EVM/Cashu arbiters, launches the Vite client when needed, and writes
screenshots plus a WebM recording under `artifacts/marketplace-demo/<run-id>/`.
The scripted flows place USD and BTC orders, place USD and BTC bids, submit a
Cashu-backed BTC bid, create one negotiation, pay the generated invoices, and
wait for arbiter payment ACK events before finishing. Use `npm run
demo:capture` when the stack and arbiters are already running and you
intentionally want to capture against the current relay history.

Run the stack-backed marketplace driver tests after the stack is ready:

```sh
npm run test:e2e
```

Those tests call `nostr-tools/marketplace` methods initialized with the real EVM
and Cashu drivers. They skip cleanly when the Docker stacks are not running.

The individual stack wrappers are still available:

```sh
./scripts/up-cashu.sh
./scripts/up-evm.sh
```

Each stack keeps its own generated `data/` directory and can also be run
directly from its nested repository.
