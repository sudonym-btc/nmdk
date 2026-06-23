---
title: "Type Alias: OrderGroupSubscribeHandlers"
description: "Type Alias: OrderGroupSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: OrderGroupSubscribeHandlers

> **OrderGroupSubscribeHandlers** = `object`

Defined in: [nostr-tools/marketplace/order-group-types.ts:128](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L128)

## Properties

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: [nostr-tools/marketplace/order-group-types.ts:134](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L134)

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: [nostr-tools/marketplace/order-group-types.ts:133](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L133)

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`event`) => `void`

Defined in: [nostr-tools/marketplace/order-group-types.ts:129](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L129)

#### Parameters

##### event

[`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)

#### Returns

`void`

***

### ongroup?

> `optional` **ongroup?**: (`group`) => `void`

Defined in: [nostr-tools/marketplace/order-group-types.ts:130](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L130)

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

#### Returns

`void`

***

### ongroups?

> `optional` **ongroups?**: (`groups`) => `void`

Defined in: [nostr-tools/marketplace/order-group-types.ts:131](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L131)

#### Parameters

##### groups

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: [nostr-tools/marketplace/order-group-types.ts:132](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L132)

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
