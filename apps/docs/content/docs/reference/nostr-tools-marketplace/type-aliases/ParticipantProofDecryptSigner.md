---
title: "Type Alias: ParticipantProofDecryptSigner"
description: "Type Alias: ParticipantProofDecryptSigner in nostr-tools/marketplace."
full: true
---

# Type Alias: ParticipantProofDecryptSigner

> **ParticipantProofDecryptSigner** = `object`

Defined in: [nostr-tools/marketplace/participant-proof.ts:71](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/participant-proof.ts#L71)

## Properties

### getPublicKey?

> `optional` **getPublicKey?**: () => `Promise`\<`string`\> \| `string`

Defined in: [nostr-tools/marketplace/participant-proof.ts:72](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/participant-proof.ts#L72)

#### Returns

`Promise`\<`string`\> \| `string`

***

### nip44Decrypt

> **nip44Decrypt**: (`pubkey`, `ciphertext`) => `Promise`\<`string`\> \| `string`

Defined in: [nostr-tools/marketplace/participant-proof.ts:73](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/participant-proof.ts#L73)

#### Parameters

##### pubkey

`string`

##### ciphertext

`string`

#### Returns

`Promise`\<`string`\> \| `string`
