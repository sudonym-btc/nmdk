---
title: "Interface: MarketplaceAuctionCompletesApi"
description: "Interface: MarketplaceAuctionCompletesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceAuctionCompletesApi

Defined in: runtime-types.ts:902

## Properties

### filter

> **filter**: (`query`) => `Filter`

Defined in: runtime-types.ts:903

#### Parameters

##### query?

[`MarketplaceAuctionCompleteSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSearchQuery) = `{}`

#### Returns

`Filter`

## Methods

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)[]\>

Defined in: runtime-types.ts:904

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

Defined in: runtime-types.ts:908

#### Parameters

##### query

[`MarketplaceAuctionCompleteSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSearchQuery)

##### handlers

[`MarketplaceAuctionCompleteSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSubscribeHandlers)

##### options?

[`MarketplaceAuctionCompleteSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSubscribeOptions)

#### Returns

`SubCloser`
