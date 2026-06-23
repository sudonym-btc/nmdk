---
title: "Interface: MarketplaceSessionSeedApi"
description: "Interface: MarketplaceSessionSeedApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceSessionSeedApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1307](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1307)

## Properties

### created

> **created**: `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1308](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1308)

***

### event?

> `optional` **event?**: `NostrEvent`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1309](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1309)

## Methods

### ensureCreated()

> **ensureCreated**(`options?`): `Promise`\<[`MarketplaceSessionSeedEnsureResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionSeedEnsureResult)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1310](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1310)

#### Parameters

##### options?

[`MarketplaceSessionSeedEnsureOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionSeedEnsureOptions)

#### Returns

`Promise`\<[`MarketplaceSessionSeedEnsureResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionSeedEnsureResult)\>

***

### owns()

> **owns**(`pubkey`, `path?`): `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1311](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1311)

#### Parameters

##### pubkey

`string`

##### path?

[`MarketplaceSessionSeedOwnershipPath`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionSeedOwnershipPath)

#### Returns

`boolean`
