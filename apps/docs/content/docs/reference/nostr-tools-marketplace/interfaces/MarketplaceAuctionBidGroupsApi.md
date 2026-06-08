---
title: "Interface: MarketplaceAuctionBidGroupsApi"
description: "Interface: MarketplaceAuctionBidGroupsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceAuctionBidGroupsApi

Defined in: runtime-types.ts:915

## Properties

### filter

> **filter**: (`query`) => `Filter`

Defined in: runtime-types.ts:916

#### Parameters

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

#### Returns

`Filter`

***

### group

> **group**: (`events`) => [`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]

Defined in: runtime-types.ts:918

#### Parameters

##### events

`Iterable`\<`NostrEvent` \| [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)\>

#### Returns

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]

***

### reduce

> **reduce**: (`events`) => [`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)

Defined in: runtime-types.ts:917

#### Parameters

##### events

`Iterable`\<`NostrEvent` \| [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)\>

#### Returns

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)

## Methods

### fetch()

> **fetch**(`query`, `options?`): `Promise`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]\>

Defined in: runtime-types.ts:919

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

Defined in: runtime-types.ts:920

#### Parameters

##### query

[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery)

##### handlers

[`AuctionBidGroupSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSubscribeHandlers)

##### options?

[`AuctionBidGroupSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSubscribeOptions)

#### Returns

`SubCloser`
