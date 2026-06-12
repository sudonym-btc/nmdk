---
title: "Type Alias: MarketplaceSeedSigner"
description: "Type Alias: MarketplaceSeedSigner in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceSeedSigner

> **MarketplaceSeedSigner** = `object`

Defined in: [seed.ts:70](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L70)

## Properties

### getPublicKey?

> `optional` **getPublicKey?**: () => `string` \| `Promise`\<`string`\>

Defined in: [seed.ts:71](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L71)

#### Returns

`string` \| `Promise`\<`string`\>

***

### nip44Decrypt

> **nip44Decrypt**: (`pubkey`, `ciphertext`) => `string` \| `Promise`\<`string`\>

Defined in: [seed.ts:73](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L73)

#### Parameters

##### pubkey

`string`

##### ciphertext

`string`

#### Returns

`string` \| `Promise`\<`string`\>

***

### nip44Encrypt

> **nip44Encrypt**: (`pubkey`, `plaintext`) => `string` \| `Promise`\<`string`\>

Defined in: [seed.ts:72](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L72)

#### Parameters

##### pubkey

`string`

##### plaintext

`string`

#### Returns

`string` \| `Promise`\<`string`\>

***

### signEvent

> **signEvent**: (`event`) => `Event` \| `VerifiedEvent` \| `Promise`\<`Event` \| `VerifiedEvent`\>

Defined in: [seed.ts:74](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L74)

#### Parameters

##### event

`EventTemplate`

#### Returns

`Event` \| `VerifiedEvent` \| `Promise`\<`Event` \| `VerifiedEvent`\>
