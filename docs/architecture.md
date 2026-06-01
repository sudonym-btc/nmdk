# NMDK Architecture

NMDK is an aggregate development kit for Nostr marketplace work. Host
applications should consume NMDK as one submodule and then reference the nested
packages, demo clients, protocol drafts, and stacks from this repository.

The core boundary is:

- Nostr event semantics live in `nostr-tools/marketplace`.
- Nostr application UX lives in `marketplace-app-ts`.
- Payment-specific behavior lives in payment policy packages such as
  `marketplace-cashu-ts` and `marketplace-evm-ts`.
- Local integration dependencies live in the stack repos.

Payment packages should not create their own Nostr pools for marketplace order
state. They implement the structural marketplace policy interface and receive a
resolved payment intent from the Nostr runtime.
