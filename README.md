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
- `dependencies/marketplace-cashu-stack` - isolated Cashu mints, relay, and regtest Lightning stack.
- `dependencies/marketplace-evm-ts` - EVM escrow and auction payment policies.
- `dependencies/marketplace-evm-contracts` - generated marketplace EVM contract artifacts.
- `dependencies/marketplace-evm-stack` - isolated EVM/Boltz regtest stack.
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
- Arbitrum RPC: `http://127.0.0.1:18546`
- Rootstock RPC: `http://127.0.0.1:18545`
- Boltz API: `http://127.0.0.1:19001/v2`
- EVM AA bundler: `http://127.0.0.1:4337`
- EVM AA paymaster: `http://127.0.0.1:3010`

The command starts the Cashu stack first, which owns the local relay, then the
EVM/Boltz stack. The EVM stack deploys `MultiEscrow` for both normal escrow
payments and auction bid lockups.
It writes `dependencies/marketplace-app-ts/.env.local` for the browser demo and
`.nmdk.local.env` for shell consumers from the generated stack configs. No
custom development DNS or parent application checkout is required.

Run the demo client after the stack is ready:

```sh
npm run demo
```

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
