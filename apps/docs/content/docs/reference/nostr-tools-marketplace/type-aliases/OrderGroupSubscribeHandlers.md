---
title: "Type Alias: OrderGroupSubscribeHandlers"
description: "Type Alias: OrderGroupSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: OrderGroupSubscribeHandlers

> **OrderGroupSubscribeHandlers** = `object`

Defined in: [order-group-types.ts:119](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L119)

## Properties

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: [order-group-types.ts:125](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L125)

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: [order-group-types.ts:124](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L124)

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`event`) => `void`

Defined in: [order-group-types.ts:120](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L120)

#### Parameters

##### event

[`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)

#### Returns

`void`

***

### ongroup?

> `optional` **ongroup?**: (`group`) => `void`

Defined in: [order-group-types.ts:121](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L121)

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

#### Returns

`void`

***

### ongroups?

> `optional` **ongroups?**: (`groups`) => `void`

Defined in: [order-group-types.ts:122](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L122)

#### Parameters

##### groups

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: [order-group-types.ts:123](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L123)

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
