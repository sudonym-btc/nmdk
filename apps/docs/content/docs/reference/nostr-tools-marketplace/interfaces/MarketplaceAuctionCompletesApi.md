---
title: "Interface: MarketplaceAuctionCompletesApi"
description: "Interface: MarketplaceAuctionCompletesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceAuctionCompletesApi

Defined in: [runtime-types.ts:873](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L873)

## Properties

### filter

> **filter**: (`query`) => `Filter`

Defined in: [runtime-types.ts:874](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L874)

#### Parameters

##### query?

[`MarketplaceAuctionCompleteSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSearchQuery) = `{}`

#### Returns

`Filter`

## Methods

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)[]\>

Defined in: [runtime-types.ts:875](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L875)

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

Defined in: [runtime-types.ts:879](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L879)

#### Parameters

##### query

[`MarketplaceAuctionCompleteSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSearchQuery)

##### handlers

[`MarketplaceAuctionCompleteSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSubscribeHandlers)

##### options?

[`MarketplaceAuctionCompleteSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteSubscribeOptions)

#### Returns

`SubCloser`
