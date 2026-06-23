---
title: "Interface: MarketplaceAuctionBidGroupsApi"
description: "Interface: MarketplaceAuctionBidGroupsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceAuctionBidGroupsApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1240](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1240)

## Properties

### chains

> **chains**: (`groups`) => [`ParsedAuctionBidChain`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidChain)[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:1245](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1245)

#### Parameters

##### groups

`Iterable`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)\>

#### Returns

[`ParsedAuctionBidChain`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidChain)[]

***

### filter

> **filter**: (`query`) => `Filter`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1241](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1241)

#### Parameters

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

#### Returns

`Filter`

***

### filters

> **filters**: (`query`) => `Filter`[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:1242](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1242)

#### Parameters

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

#### Returns

`Filter`[]

***

### group

> **group**: (`events`) => [`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:1244](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1244)

#### Parameters

##### events

`Iterable`\<`NostrEvent` \| [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)\>

#### Returns

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]

***

### reduce

> **reduce**: (`events`) => [`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1243](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1243)

#### Parameters

##### events

`Iterable`\<`NostrEvent` \| [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)\>

#### Returns

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)

## Methods

### fetch()

> **fetch**(`query`, `options?`): `Promise`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1246](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1246)

#### Parameters

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

##### options?

[`AuctionBidGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSearchOptions)

#### Returns

`Promise`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]\>

***

### subscribe()

> **subscribe**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1247](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1247)

#### Parameters

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

##### handlers

[`AuctionBidGroupSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSubscribeHandlers)

##### options?

[`AuctionBidGroupSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSubscribeOptions)

#### Returns

`SubCloser`
