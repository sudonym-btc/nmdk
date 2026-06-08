---
title: "Type Alias: MarketplaceAuctionCompleteSubscribeHandlers"
description: "Type Alias: MarketplaceAuctionCompleteSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAuctionCompleteSubscribeHandlers

> **MarketplaceAuctionCompleteSubscribeHandlers** = `object`

Defined in: auction-query.ts:53

## Properties

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: auction-query.ts:59

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oncomplete?

> `optional` **oncomplete?**: (`complete`) => `void`

Defined in: auction-query.ts:55

#### Parameters

##### complete

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

#### Returns

`void`

***

### oncompletes?

> `optional` **oncompletes?**: (`completes`) => `void`

Defined in: auction-query.ts:56

#### Parameters

##### completes

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: auction-query.ts:58

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`complete`) => `void`

Defined in: auction-query.ts:54

#### Parameters

##### complete

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: auction-query.ts:57

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
