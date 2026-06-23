---
title: "Type Alias: Nip44DecryptSigner"
description: "Type Alias: Nip44DecryptSigner in nostr-tools/marketplace."
full: true
---

# Type Alias: Nip44DecryptSigner

> **Nip44DecryptSigner** = `object`

Defined in: [nostr-tools/marketplace/order-group-types.ts:41](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L41)

## Properties

### getPublicKey?

> `optional` **getPublicKey?**: () => `Promise`\<`string`\> \| `string`

Defined in: [nostr-tools/marketplace/order-group-types.ts:42](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L42)

#### Returns

`Promise`\<`string`\> \| `string`

***

### nip44Decrypt

> **nip44Decrypt**: (`pubkey`, `ciphertext`) => `Promise`\<`string`\> \| `string`

Defined in: [nostr-tools/marketplace/order-group-types.ts:43](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L43)

#### Parameters

##### pubkey

`string`

##### ciphertext

`string`

#### Returns

`Promise`\<`string`\> \| `string`
