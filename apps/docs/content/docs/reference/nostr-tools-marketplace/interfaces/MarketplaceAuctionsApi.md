---
title: "Interface: MarketplaceAuctionsApi"
description: "Interface: MarketplaceAuctionsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceAuctionsApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1159](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1159)

## Properties

### address

> **address**: (`auction`) => `string`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1162](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1162)

#### Parameters

##### auction

`NostrEvent` \| [`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`string`

***

### bidChainId

> **bidChainId**: (`seed`, `auctionAnchor`) => `string`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1163](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1163)

#### Parameters

##### seed

`string`

##### auctionAnchor

`string`

#### Returns

`string`

***

### bidGroups

> **bidGroups**: [`MarketplaceAuctionBidGroupsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionBidGroupsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1181](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1181)

***

### bidTemplate

> **bidTemplate**: (`bid`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1174](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1174)

#### Parameters

##### bid

[`MarketplaceAuctionBidTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidTemplate)

#### Returns

`EventTemplate`

***

### completes

> **completes**: [`MarketplaceAuctionCompletesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionCompletesApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1180](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1180)

***

### completeTemplate

> **completeTemplate**: (`complete`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1177](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1177)

#### Parameters

##### complete

[`MarketplaceAuctionCompleteTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteTemplate)

#### Returns

`EventTemplate`

***

### filters

> **filters**: (`query`) => `Filter`[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:1165](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1165)

#### Parameters

##### query?

[`MarketplaceAuctionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSearchQuery) = `{}`

#### Returns

`Filter`[]

***

### parse

> **parse**: (`event`) => [`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1160](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1160)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

***

### parseBid

> **parseBid**: (`event`) => [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1175](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1175)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

***

### parseComplete

> **parseComplete**: (`event`) => [`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1178](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1178)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

***

### template

> **template**: (`auction`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1164](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1164)

#### Parameters

##### auction

[`MarketplaceAuctionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1161](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1161)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

***

### validateBid

> **validateBid**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1176](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1176)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

***

### validateComplete

> **validateComplete**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1179](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1179)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### bid()

> **bid**(`listing`, `bid`, `options?`): `AsyncIterable`\<[`MarketplaceAuctionBidState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidState)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1182](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1182)

#### Parameters

##### listing

`NostrEvent` \| [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

##### bid

`Partial`\<[`MarketplaceAuctionBidTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidTemplate)\> & `object`

##### options?

[`MarketplacePayOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePayOptions) & `object`

#### Returns

`AsyncIterable`\<[`MarketplaceAuctionBidState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidState)\>

***

### get()

> **get**(`query`, `options?`): `Promise`\<[`MarketplaceAuctionScopesSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopesSnapshot)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1166](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1166)

#### Parameters

##### query

[`MarketplaceAuctionScopeQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeQuery)

##### options?

[`MarketplaceAuctionScopeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeOptions)

#### Returns

`Promise`\<[`MarketplaceAuctionScopesSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopesSnapshot)\>

***

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1168](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1168)

#### Parameters

##### query?

[`MarketplaceAuctionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSearchQuery)

##### options?

[`MarketplaceAuctionSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSearchOptions)

#### Returns

`Promise`\<[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)[]\>

***

### settle()

> **settle**(`request`): `AsyncIterable`\<[`MarketplaceAuctionSettlementState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSettlementState)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1192](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1192)

#### Parameters

##### request

[`MarketplaceAuctionSettlementRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSettlementRequest)

#### Returns

`AsyncIterable`\<[`MarketplaceAuctionSettlementState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSettlementState)\>

***

### subscribe()

> **subscribe**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1169](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1169)

#### Parameters

##### query

[`MarketplaceAuctionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSearchQuery)

##### handlers

[`MarketplaceAuctionSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSubscribeHandlers)

##### options?

[`MarketplaceAuctionSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSubscribeOptions)

#### Returns

`SubCloser`

***

### watch()

> **watch**(`query`, `options?`): [`MarketplaceAuctionScopeStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1167](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1167)

#### Parameters

##### query

[`MarketplaceAuctionScopeQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeQuery)

##### options?

[`MarketplaceAuctionScopeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeOptions)

#### Returns

[`MarketplaceAuctionScopeStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeStream)
