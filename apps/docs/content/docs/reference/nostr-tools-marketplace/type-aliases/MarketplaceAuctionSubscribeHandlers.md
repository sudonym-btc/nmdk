---
title: "Type Alias: MarketplaceAuctionSubscribeHandlers"
description: "Type Alias: MarketplaceAuctionSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAuctionSubscribeHandlers

> **MarketplaceAuctionSubscribeHandlers** = `object`

Defined in: [nostr-tools/marketplace/auction-query.ts:31](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L31)

## Properties

### onauction?

> `optional` **onauction?**: (`auction`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:33](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L33)

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`void`

***

### onauctions?

> `optional` **onauctions?**: (`auctions`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:34](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L34)

#### Parameters

##### auctions

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)[]

#### Returns

`void`

***

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:37](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L37)

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:36](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L36)

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`auction`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:32](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L32)

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: [nostr-tools/marketplace/auction-query.ts:35](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction-query.ts#L35)

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
