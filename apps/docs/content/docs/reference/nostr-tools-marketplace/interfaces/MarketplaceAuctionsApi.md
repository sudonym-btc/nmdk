---
title: "Interface: MarketplaceAuctionsApi"
description: "Interface: MarketplaceAuctionsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceAuctionsApi

Defined in: runtime-types.ts:871

## Properties

### address

> **address**: (`auction`) => `string`

Defined in: runtime-types.ts:874

#### Parameters

##### auction

`NostrEvent` \| [`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`string`

***

### bidGroups

> **bidGroups**: [`MarketplaceAuctionBidGroupsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionBidGroupsApi)

Defined in: runtime-types.ts:893

***

### bidTemplate

> **bidTemplate**: (`bid`) => `EventTemplate`

Defined in: runtime-types.ts:883

#### Parameters

##### bid

[`MarketplaceAuctionBidTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidTemplate)

#### Returns

`EventTemplate`

***

### completes

> **completes**: [`MarketplaceAuctionCompletesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionCompletesApi)

Defined in: runtime-types.ts:889

***

### completeTemplate

> **completeTemplate**: (`complete`) => `EventTemplate`

Defined in: runtime-types.ts:886

#### Parameters

##### complete

[`MarketplaceAuctionCompleteTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteTemplate)

#### Returns

`EventTemplate`

***

### filters

> **filters**: (`query`) => `Filter`[]

Defined in: runtime-types.ts:876

#### Parameters

##### query?

[`MarketplaceAuctionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSearchQuery) = `{}`

#### Returns

`Filter`[]

***

### parse

> **parse**: (`event`) => [`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

Defined in: runtime-types.ts:872

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

***

### parseBid

> **parseBid**: (`event`) => [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

Defined in: runtime-types.ts:884

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

***

### parseComplete

> **parseComplete**: (`event`) => [`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

Defined in: runtime-types.ts:887

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

***

### paymentRoutes

> **paymentRoutes**: `object`

Defined in: runtime-types.ts:890

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

Defined in: runtime-types.ts:875

#### Parameters

##### auction

[`MarketplaceAuctionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: runtime-types.ts:873

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

***

### validateBid

> **validateBid**: (`event`) => `boolean`

Defined in: runtime-types.ts:885

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

***

### validateComplete

> **validateComplete**: (`event`) => `boolean`

Defined in: runtime-types.ts:888

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### bid()

> **bid**(`listing`, `bid`, `options?`): `AsyncIterable`\<[`MarketplaceAuctionBidState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidState)\>

Defined in: runtime-types.ts:894

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

Defined in: runtime-types.ts:877

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

Defined in: runtime-types.ts:899

#### Parameters

##### request

[`MarketplaceAuctionSettlementRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSettlementRequest)

#### Returns

`AsyncIterable`\<[`MarketplaceAuctionSettlementState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSettlementState)\>

***

### subscribe()

> **subscribe**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: runtime-types.ts:878

#### Parameters

##### query

[`MarketplaceAuctionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSearchQuery)

##### handlers

[`MarketplaceAuctionSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSubscribeHandlers)

##### options?

[`MarketplaceAuctionSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSubscribeOptions)

#### Returns

`SubCloser`
