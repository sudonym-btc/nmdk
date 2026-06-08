---
title: "Type Alias: MarketplacePaymentValidationPolicy"
description: "Type Alias: MarketplacePaymentValidationPolicy in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentValidationPolicy

> **MarketplacePaymentValidationPolicy** = `object`

Defined in: [payment-validation.ts:51](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L51)

## Properties

### canValidate?

> `optional` **canValidate?**: (`request`) => `boolean` \| `Promise`\<`boolean`\>

Defined in: [payment-validation.ts:53](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L53)

#### Parameters

##### request

[`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest)

#### Returns

`boolean` \| `Promise`\<`boolean`\>

***

### method

> **method**: [`PaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethod) \| `"*"`

Defined in: [payment-validation.ts:52](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L52)

***

### validatePayment

> **validatePayment**: (`request`) => `Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>

Defined in: [payment-validation.ts:54](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L54)

#### Parameters

##### request

[`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest)

#### Returns

`Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>
