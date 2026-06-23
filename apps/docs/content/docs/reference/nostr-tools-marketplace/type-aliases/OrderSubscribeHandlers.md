---
title: "Type Alias: OrderSubscribeHandlers"
description: "Type Alias: OrderSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: OrderSubscribeHandlers

> **OrderSubscribeHandlers** = `object`

Defined in: [nostr-tools/marketplace/order-query.ts:38](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-query.ts#L38)

## Properties

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: [nostr-tools/marketplace/order-query.ts:42](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-query.ts#L42)

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: [nostr-tools/marketplace/order-query.ts:41](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-query.ts#L41)

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`order`) => `void`

Defined in: [nostr-tools/marketplace/order-query.ts:39](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-query.ts#L39)

#### Parameters

##### order

[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: [nostr-tools/marketplace/order-query.ts:40](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-query.ts#L40)

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
