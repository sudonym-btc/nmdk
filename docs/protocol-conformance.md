# Protocol conformance

The five marketplace drafts under `dependencies/nips/` are normative. Their
wire encodings are exercised by shared fixed vectors.

Current canonical decisions:

- seed recovery selects the newest valid signed and decryptable seed event;
  ties are resolved by lexicographically greatest event ID;
- order-group IDs hash UTF-8 JSON containing the trade ID and sorted
  `{ "role", "pubkey" }` participant objects;
- arbitration services expose a machine-readable payment policy identifier;
  human labels are presentation only;
- auction ties use one amount/time/event-ID ordering rule;
- EVM arbitration factors use the deployed contract scale of 1000;
- bearer Cashu proofs are never valid public event content.
- Cashu P2PK escrow requires advertised NUT-11; auctions also require NUT-09
  and a signed, operator-configured exact-keyset active-through horizon.

Any change to these rules requires new vectors and an explicit migration or
version boundary. Relays may return events in any order; query arrival order is
never protocol meaning.
