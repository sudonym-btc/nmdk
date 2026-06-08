---
title: "Type Alias: ReduceOrderGroupOptions"
description: "Type Alias: ReduceOrderGroupOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: ReduceOrderGroupOptions

> **ReduceOrderGroupOptions** = `object`

Defined in: [order-group-types.ts:33](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L33)

## Properties

### isBuyerPaymentProofValid?

> `optional` **isBuyerPaymentProofValid?**: (`order`, `context`) => `boolean`

Defined in: [order-group-types.ts:35](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L35)

#### Parameters

##### order

[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

##### context

[`OrderGroupRoleContext`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupRoleContext)

#### Returns

`boolean`

***

### isPaymentValid?

> `optional` **isPaymentValid?**: (`payment`, `context`) => `boolean`

Defined in: [order-group-types.ts:36](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L36)

#### Parameters

##### payment

[`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment)

##### context

[`OrderGroupRoleContext`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupRoleContext)

#### Returns

`boolean`

***

### resolveRole?

> `optional` **resolveRole?**: [`OrderGroupRoleResolver`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupRoleResolver)

Defined in: [order-group-types.ts:34](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order-group-types.ts#L34)
