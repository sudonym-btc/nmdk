---
title: "Type Alias: MarketplaceAuctionSubscribeHandlers"
description: "Type Alias: MarketplaceAuctionSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAuctionSubscribeHandlers

> **MarketplaceAuctionSubscribeHandlers** = `object`

Defined in: [auction-query.ts:26](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-query.ts#L26)

## Properties

### onauction?

> `optional` **onauction?**: (`auction`) => `void`

Defined in: [auction-query.ts:28](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-query.ts#L28)

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`void`

***

### onauctions?

> `optional` **onauctions?**: (`auctions`) => `void`

Defined in: [auction-query.ts:29](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-query.ts#L29)

#### Parameters

##### auctions

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)[]

#### Returns

`void`

***

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: [auction-query.ts:32](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-query.ts#L32)

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: [auction-query.ts:31](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-query.ts#L31)

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`auction`) => `void`

Defined in: [auction-query.ts:27](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-query.ts#L27)

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: [auction-query.ts:30](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-query.ts#L30)

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
