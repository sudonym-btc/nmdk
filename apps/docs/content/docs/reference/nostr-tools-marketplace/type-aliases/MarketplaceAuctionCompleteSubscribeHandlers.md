---
title: "Type Alias: MarketplaceAuctionCompleteSubscribeHandlers"
description: "Type Alias: MarketplaceAuctionCompleteSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAuctionCompleteSubscribeHandlers

> **MarketplaceAuctionCompleteSubscribeHandlers** = `object`

Defined in: [nostr-tools/marketplace/auction-query.ts:59](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L59)

## Properties

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:65](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L65)

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oncomplete?

> `optional` **oncomplete?**: (`complete`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:61](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L61)

#### Parameters

##### complete

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

#### Returns

`void`

***

### oncompletes?

> `optional` **oncompletes?**: (`completes`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:62](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L62)

#### Parameters

##### completes

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:64](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L64)

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`complete`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:60](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L60)

#### Parameters

##### complete

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:63](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L63)

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
