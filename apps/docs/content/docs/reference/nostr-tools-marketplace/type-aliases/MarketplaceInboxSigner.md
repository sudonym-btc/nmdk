---
title: "Type Alias: MarketplaceInboxSigner"
description: "Type Alias: MarketplaceInboxSigner in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceInboxSigner

> **MarketplaceInboxSigner** = `object`

Defined in: [nostr-tools/marketplace/inbox.ts:12](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/inbox.ts#L12)

## Properties

### getPublicKey?

> `optional` **getPublicKey?**: () => `string` \| `Promise`\<`string`\>

Defined in: [nostr-tools/marketplace/inbox.ts:13](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/inbox.ts#L13)

#### Returns

`string` \| `Promise`\<`string`\>

***

### nip44Decrypt

> **nip44Decrypt**: (`pubkey`, `ciphertext`) => `string` \| `Promise`\<`string`\>

Defined in: [nostr-tools/marketplace/inbox.ts:14](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/inbox.ts#L14)

#### Parameters

##### pubkey

`string`

##### ciphertext

`string`

#### Returns

`string` \| `Promise`\<`string`\>
