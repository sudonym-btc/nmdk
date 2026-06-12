---
title: "Type Alias: Nip44DecryptSigner"
description: "Type Alias: Nip44DecryptSigner in nostr-tools/marketplace."
full: true
---

# Type Alias: Nip44DecryptSigner

> **Nip44DecryptSigner** = `object`

Defined in: [order-group-types.ts:39](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L39)

## Properties

### getPublicKey?

> `optional` **getPublicKey?**: () => `Promise`\<`string`\>

Defined in: [order-group-types.ts:40](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L40)

#### Returns

`Promise`\<`string`\>

***

### nip44Decrypt

> **nip44Decrypt**: (`pubkey`, `ciphertext`) => `Promise`\<`string`\>

Defined in: [order-group-types.ts:41](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L41)

#### Parameters

##### pubkey

`string`

##### ciphertext

`string`

#### Returns

`Promise`\<`string`\>
