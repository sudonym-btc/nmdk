# NMDK

Nostr Markets Development Kit.

This repository pins the marketplace protocol, client runtime, payment drivers,
demo clients, and local development stacks used by Hostr marketplace work. It is
intentionally an aggregate repository: the implementation repos remain nested
submodules so each package can keep its own release cadence while NMDK provides a
single reproducible development snapshot.

## Contents

- `dependencies/nostr-tools` - marketplace runtime and event helpers.
- `dependencies/ndk` - marketplace branch of NDK.
- `dependencies/marketplace-app-ts` - browser demo client.
- `dependencies/marketplace-cashu-ts` - Cashu escrow payment policy.
- `dependencies/marketplace-cashu-stack` - isolated Cashu mint, relay, and regtest Lightning stack.
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
./scripts/up-cashu.sh
./scripts/up-evm.sh
```

Each stack keeps its own generated `data/` directory and can also be run
directly from its nested repository.
