---
title: "Variable: auctionScopes"
description: "Variable: auctionScopes in nostr-tools/marketplace."
full: true
---

# Variable: auctionScopes

> `const` **auctionScopes**: `object`

Defined in: [nostr-tools/marketplace/auction-scope.ts:417](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-scope.ts#L417)

## Type Declaration

### create

> **create**: (`pool`, `relays`, `query`) => [`MarketplaceAuctionScope`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScope) = `createAuctionScope`

#### Parameters

##### pool

`AuctionScopePool`

##### relays

`string`[]

##### query

[`MarketplaceAuctionScopeQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeQuery)

#### Returns

[`MarketplaceAuctionScope`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScope)

### eventKinds

> **eventKinds**: `number`[] = `auctionScopeEventKinds`

### filters

> **filters**: (`query`) => `Filter`[] = `auctionScopeFilters`

#### Parameters

##### query

[`MarketplaceAuctionScopeQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeQuery)

#### Returns

`Filter`[]

### isAuction

> **isAuction**: (`event`) => `event is ParsedMarketplaceAuction` = `isAuctionScopeAuction`

#### Parameters

##### event

[`MarketplaceAuctionScopeEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeEvent)

#### Returns

`event is ParsedMarketplaceAuction`

### isBid

> **isBid**: (`event`) => `event is ParsedMarketplaceAuctionBid` = `isAuctionScopeBid`

#### Parameters

##### event

[`MarketplaceAuctionScopeEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeEvent)

#### Returns

`event is ParsedMarketplaceAuctionBid`

### isComplete

> **isComplete**: (`event`) => `event is ParsedMarketplaceAuctionComplete` = `isAuctionScopeComplete`

#### Parameters

##### event

[`MarketplaceAuctionScopeEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeEvent)

#### Returns

`event is ParsedMarketplaceAuctionComplete`

### isPayment

> **isPayment**: (`event`) => `event is ParsedPayment` = `isAuctionScopePayment`

#### Parameters

##### event

[`MarketplaceAuctionScopeEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeEvent)

#### Returns

`event is ParsedPayment`

### isPaymentAck

> **isPaymentAck**: (`event`) => `event is ParsedPaymentAck` = `isAuctionScopePaymentAck`

#### Parameters

##### event

[`MarketplaceAuctionScopeEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeEvent)

#### Returns

`event is ParsedPaymentAck`

### isPaymentNack

> **isPaymentNack**: (`event`) => `event is ParsedPaymentNack` = `isAuctionScopePaymentNack`

#### Parameters

##### event

[`MarketplaceAuctionScopeEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeEvent)

#### Returns

`event is ParsedPaymentNack`

### isPaymentSettlement

> **isPaymentSettlement**: (`event`) => `event is ParsedPaymentSettlement` = `isAuctionScopePaymentSettlement`

#### Parameters

##### event

[`MarketplaceAuctionScopeEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeEvent)

#### Returns

`event is ParsedPaymentSettlement`

### query

> **query**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`MarketplaceAuctionScopesSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopesSnapshot)\> = `queryAuctionScope`

#### Parameters

##### pool

`AuctionScopePool`

##### relays

`string`[]

##### query

[`MarketplaceAuctionScopeQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeQuery)

##### options?

[`MarketplaceAuctionScopeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeOptions) = `{}`

#### Returns

`Promise`\<[`MarketplaceAuctionScopesSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopesSnapshot)\>

### stream

> **stream**: (`pool`, `relays`, `query`, `options`) => [`MarketplaceAuctionScopeStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeStream) = `streamAuctionScope`

#### Parameters

##### pool

`AuctionScopePool`

##### relays

`string`[]

##### query

[`MarketplaceAuctionScopeQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeQuery)

##### options?

[`MarketplaceAuctionScopeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeOptions) = `{}`

#### Returns

[`MarketplaceAuctionScopeStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionScopeStream)
