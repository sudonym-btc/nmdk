---
title: "Variable: auctions"
description: "Variable: auctions in nostr-tools/marketplace."
full: true
---

# Variable: auctions

> `const` **auctions**: `object`

Defined in: [nostr-tools/marketplace/auction.ts:417](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/auction.ts#L417)

## Type Declaration

### address

> **address**: (`auction`) => `string` = `auctionAddress`

#### Parameters

##### auction

`NostrEvent` \| [`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`string`

### bidChainId

> **bidChainId**: (`seed`, `auctionAnchor`) => `string` = `auctionBidChainId`

#### Parameters

##### seed

`string`

##### auctionAnchor

`string`

#### Returns

`string`

### bidTemplate

> **bidTemplate**: (`bid`) => `EventTemplate` = `generateAuctionBidEventTemplate`

#### Parameters

##### bid

[`MarketplaceAuctionBidTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidTemplate)

#### Returns

`EventTemplate`

### completeTemplate

> **completeTemplate**: (`complete`) => `EventTemplate` = `generateAuctionCompleteEventTemplate`

#### Parameters

##### complete

[`MarketplaceAuctionCompleteTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionCompleteTemplate)

#### Returns

`EventTemplate`

### parse

> **parse**: (`event`) => [`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction) = `parseAuctionEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

### parseBid

> **parseBid**: (`event`) => [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid) = `parseAuctionBidEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

### parseComplete

> **parseComplete**: (`event`) => [`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete) = `parseAuctionCompleteEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceAuctionComplete`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionComplete)

### template

> **template**: (`auction`) => `EventTemplate` = `generateAuctionEventTemplate`

#### Parameters

##### auction

[`MarketplaceAuctionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateAuctionEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

### validateBid

> **validateBid**: (`event`) => `boolean` = `validateAuctionBidEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

### validateComplete

> **validateComplete**: (`event`) => `boolean` = `validateAuctionCompleteEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
