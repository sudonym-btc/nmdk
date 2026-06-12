---
title: "Type Alias: AuctionBidGroupSubscribeHandlers"
description: "Type Alias: AuctionBidGroupSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: AuctionBidGroupSubscribeHandlers

> **AuctionBidGroupSubscribeHandlers** = `object`

Defined in: [auction-bid-group.ts:92](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L92)

## Properties

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: [auction-bid-group.ts:98](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L98)

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: [auction-bid-group.ts:97](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L97)

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`event`) => `void`

Defined in: [auction-bid-group.ts:93](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L93)

#### Parameters

##### event

[`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)

#### Returns

`void`

***

### ongroup?

> `optional` **ongroup?**: (`group`) => `void`

Defined in: [auction-bid-group.ts:94](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L94)

#### Parameters

##### group

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)

#### Returns

`void`

***

### ongroups?

> `optional` **ongroups?**: (`groups`) => `void`

Defined in: [auction-bid-group.ts:95](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L95)

#### Parameters

##### groups

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: [auction-bid-group.ts:96](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L96)

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
