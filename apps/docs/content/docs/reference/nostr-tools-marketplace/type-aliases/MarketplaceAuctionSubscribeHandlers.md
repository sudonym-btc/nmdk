---
title: "Type Alias: MarketplaceAuctionSubscribeHandlers"
description: "Type Alias: MarketplaceAuctionSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAuctionSubscribeHandlers

> **MarketplaceAuctionSubscribeHandlers** = `object`

Defined in: auction-query.ts:26

## Properties

### onauction?

> `optional` **onauction?**: (`auction`) => `void`

Defined in: auction-query.ts:28

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`void`

***

### onauctions?

> `optional` **onauctions?**: (`auctions`) => `void`

Defined in: auction-query.ts:29

#### Parameters

##### auctions

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)[]

#### Returns

`void`

***

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: auction-query.ts:32

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: auction-query.ts:31

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`auction`) => `void`

Defined in: auction-query.ts:27

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: auction-query.ts:30

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
