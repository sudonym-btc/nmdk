---
title: "Type Alias: Nip44DecryptSigner"
description: "Type Alias: Nip44DecryptSigner in nostr-tools/marketplace."
full: true
---

# Type Alias: Nip44DecryptSigner

> **Nip44DecryptSigner** = `object`

Defined in: [order-group-types.ts:39](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L39)

## Properties

### getPublicKey?

> `optional` **getPublicKey?**: () => `Promise`\<`string`\>

Defined in: [order-group-types.ts:40](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L40)

#### Returns

`Promise`\<`string`\>

***

### nip44Decrypt

> **nip44Decrypt**: (`pubkey`, `ciphertext`) => `Promise`\<`string`\>

Defined in: [order-group-types.ts:41](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L41)

#### Parameters

##### pubkey

`string`

##### ciphertext

`string`

#### Returns

`Promise`\<`string`\>
