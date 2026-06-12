---
title: "Interface: MarketplaceAuctionsApi"
description: "Interface: MarketplaceAuctionsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceAuctionsApi

Defined in: [runtime-types.ts:837](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L837)

## Properties

### address

> **address**: (`auction`) => `string`

Defined in: [runtime-types.ts:840](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L840)

#### Parameters

##### auction

`NostrEvent` \| [`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`string`

***

### bidGroups

> **bidGroups**: [`MarketplaceAuctionBidGroupsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionBidGroupsApi)

Defined in: [runtime-types.ts:859](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L859)

***

### bidTemplate

> **bidTemplate**: (`bid`) => `EventTemplate`

Defined in: [runtime-types.ts:849](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L849)

#### Parameters

##### bid

[`MarketplaceAuctionBidTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidTemplate)

#### Returns

`EventTemplate`

***

### completes

> **completes**: [`MarketplaceAuctionCompletesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionCompletesApi)

Defined in: [runtime-types.ts:855](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L855)

***

### completeTemplate

> **completeTemplate**: (`complete`) => `EventTemplate`

Defined in: [runtime-types.ts:852](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L852)

#### Parameters

##### complete

[`MarketplaceAuctionCompleteTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteTemplate)

#### Returns

`EventTemplate`

***

### filters

> **filters**: (`query`) => `Filter`[]

Defined in: [runtime-types.ts:842](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L842)

#### Parameters

##### query?

[`MarketplaceAuctionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSearchQuery) = `{}`

#### Returns

`Filter`[]

***

### parse

> **parse**: (`event`) => [`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

Defined in: [runtime-types.ts:838](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L838)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

***

### parseBid

> **parseBid**: (`event`) => [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

Defined in: [runtime-types.ts:850](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L850)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

***

### parseComplete

> **parseComplete**: (`event`) => [`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

Defined in: [runtime-types.ts:853](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L853)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

***

### paymentRoutes

> **paymentRoutes**: `object`

Defined in: [runtime-types.ts:856](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L856)

#### forListing()

> **forListing**(`listing`, `bid?`): `Promise`\<[`MarketplacePaymentRoute`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRoute)[]\>

##### Parameters

###### listing

`NostrEvent` \| [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

###### bid?

`Partial`\<[`OrderTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderTemplate)\> \| `null`

##### Returns

`Promise`\<[`MarketplacePaymentRoute`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRoute)[]\>

***

### template

> **template**: (`auction`) => `EventTemplate`

Defined in: [runtime-types.ts:841](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L841)

#### Parameters

##### auction

[`MarketplaceAuctionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [runtime-types.ts:839](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L839)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

***

### validateBid

> **validateBid**: (`event`) => `boolean`

Defined in: [runtime-types.ts:851](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L851)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

***

### validateComplete

> **validateComplete**: (`event`) => `boolean`

Defined in: [runtime-types.ts:854](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L854)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### bid()

> **bid**(`listing`, `bid`, `options?`): `AsyncIterable`\<[`MarketplaceAuctionBidState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidState)\>

Defined in: [runtime-types.ts:860](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L860)

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

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)[]\>

Defined in: [runtime-types.ts:843](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L843)

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

Defined in: [runtime-types.ts:870](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L870)

#### Parameters

##### request

[`MarketplaceAuctionSettlementRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSettlementRequest)

#### Returns

`AsyncIterable`\<[`MarketplaceAuctionSettlementState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSettlementState)\>

***

### subscribe()

> **subscribe**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: [runtime-types.ts:844](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L844)

#### Parameters

##### query

[`MarketplaceAuctionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSearchQuery)

##### handlers

[`MarketplaceAuctionSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSubscribeHandlers)

##### options?

[`MarketplaceAuctionSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSubscribeOptions)

#### Returns

`SubCloser`
