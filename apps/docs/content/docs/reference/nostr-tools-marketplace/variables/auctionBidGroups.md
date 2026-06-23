---
title: "Variable: auctionBidGroups"
description: "Variable: auctionBidGroups in nostr-tools/marketplace."
full: true
---

# Variable: auctionBidGroups

> `const` **auctionBidGroups**: `object`

Defined in: [nostr-tools/marketplace/auction-bid-group.ts:628](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-bid-group.ts#L628)

## Type Declaration

### chains

> **chains**: (`groups`) => [`ParsedAuctionBidChain`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidChain)[] = `buildAuctionBidChains`

#### Parameters

##### groups

`Iterable`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)\>

#### Returns

[`ParsedAuctionBidChain`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidChain)[]

### eventKinds

> **eventKinds**: `number`[] = `auctionBidGroupEventKinds`

### fetch

> **fetch**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]\> = `fetchAuctionBidGroups`

#### Parameters

##### pool

`AuctionBidGroupQueryPool`

##### relays

`string`[]

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

##### options?

[`AuctionBidGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSearchOptions) = `{}`

#### Returns

`Promise`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]\>

### filter

> **filter**: (`query`) => `Filter` = `auctionBidGroupFilter`

#### Parameters

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

#### Returns

`Filter`

### filterByBuyerIdentity

> **filterByBuyerIdentity**: (`groups`, `identity`) => [`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[] = `filterAuctionBidGroupsByBuyerIdentity`

#### Parameters

##### groups

`Iterable`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)\>

##### identity

[`MarketplaceOrderIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderIdentity)

#### Returns

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]

### filters

> **filters**: (`query`) => `Filter`[] = `auctionBidGroupFilters`

#### Parameters

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

#### Returns

`Filter`[]

### group

> **group**: (`events`) => [`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[] = `groupAuctionBidEvents`

#### Parameters

##### events

`Iterable`\<`NostrEvent` \| [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)\>

#### Returns

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]

### parseEvent

> **parseEvent**: (`event`) => [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent) = `parseAuctionBidGroupEvent`

#### Parameters

##### event

`NostrEvent` \| [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)

#### Returns

[`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)

### reduce

> **reduce**: (`events`) => [`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup) = `reduceAuctionBidGroup`

#### Parameters

##### events

`Iterable`\<`NostrEvent` \| [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)\>

#### Returns

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)

### roles

> **roles**: (`groups`, `identity`) => [`AuctionBidGroupRoles`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupRoles) = `roleAuctionBidGroups`

#### Parameters

##### groups

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]

##### identity

[`MarketplaceOrderIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderIdentity)

#### Returns

[`AuctionBidGroupRoles`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupRoles)

### subscribe

> **subscribe**: (`pool`, `relays`, `query`, `handlers`, `options`) => `SubCloser` = `subscribeAuctionBidGroups`

#### Parameters

##### pool

`AuctionBidGroupSubscribePool`

##### relays

`string`[]

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

##### handlers

[`AuctionBidGroupSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSubscribeHandlers)

##### options?

[`AuctionBidGroupSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSubscribeOptions) = `{}`

#### Returns

`SubCloser`
