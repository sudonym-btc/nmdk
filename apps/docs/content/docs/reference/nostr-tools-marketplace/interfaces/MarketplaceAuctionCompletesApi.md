---
title: "Interface: MarketplaceAuctionCompletesApi"
description: "Interface: MarketplaceAuctionCompletesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceAuctionCompletesApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1227](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1227)

## Properties

### filter

> **filter**: (`query`) => `Filter`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1228](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1228)

#### Parameters

##### query?

[`MarketplaceAuctionCompleteSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSearchQuery) = `{}`

#### Returns

`Filter`

## Methods

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1229](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1229)

#### Parameters

##### query?

[`MarketplaceAuctionCompleteSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSearchQuery)

##### options?

[`MarketplaceAuctionCompleteSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSearchOptions)

#### Returns

`Promise`\<[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)[]\>

***

### subscribe()

> **subscribe**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1233](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1233)

#### Parameters

##### query

[`MarketplaceAuctionCompleteSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSearchQuery)

##### handlers

[`MarketplaceAuctionCompleteSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSubscribeHandlers)

##### options?

[`MarketplaceAuctionCompleteSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSubscribeOptions)

#### Returns

`SubCloser`
