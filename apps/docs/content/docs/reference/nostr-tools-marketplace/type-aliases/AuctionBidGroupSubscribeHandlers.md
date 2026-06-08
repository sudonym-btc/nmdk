---
title: "Type Alias: AuctionBidGroupSubscribeHandlers"
description: "Type Alias: AuctionBidGroupSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: AuctionBidGroupSubscribeHandlers

> **AuctionBidGroupSubscribeHandlers** = `object`

Defined in: auction-bid-group.ts:93

## Properties

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: auction-bid-group.ts:99

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: auction-bid-group.ts:98

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`event`) => `void`

Defined in: auction-bid-group.ts:94

#### Parameters

##### event

[`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)

#### Returns

`void`

***

### ongroup?

> `optional` **ongroup?**: (`group`) => `void`

Defined in: auction-bid-group.ts:95

#### Parameters

##### group

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)

#### Returns

`void`

***

### ongroups?

> `optional` **ongroups?**: (`groups`) => `void`

Defined in: auction-bid-group.ts:96

#### Parameters

##### groups

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: auction-bid-group.ts:97

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
