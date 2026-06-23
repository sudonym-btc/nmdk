---
title: "Type Alias: ReduceOrderGroupOptions"
description: "Type Alias: ReduceOrderGroupOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: ReduceOrderGroupOptions

> **ReduceOrderGroupOptions** = `object`

Defined in: [nostr-tools/marketplace/order-group-types.ts:35](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L35)

## Properties

### isBuyerPaymentProofValid?

> `optional` **isBuyerPaymentProofValid?**: (`order`, `context`) => `boolean`

Defined in: [nostr-tools/marketplace/order-group-types.ts:37](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L37)

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

Defined in: [nostr-tools/marketplace/order-group-types.ts:38](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L38)

#### Parameters

##### payment

[`ParsedPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPayment)

##### context

[`OrderGroupRoleContext`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupRoleContext)

#### Returns

`boolean`

***

### resolveRole?

> `optional` **resolveRole?**: [`OrderGroupRoleResolver`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupRoleResolver)

Defined in: [nostr-tools/marketplace/order-group-types.ts:36](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L36)
