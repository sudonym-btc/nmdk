---
title: "Type Alias: MarketplacePaymentValidationPolicy"
description: "Type Alias: MarketplacePaymentValidationPolicy in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentValidationPolicy

> **MarketplacePaymentValidationPolicy** = `MarketplaceDriverValidationPolicy`\<[`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest), [`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\> & `object`

Defined in: [nostr-tools/marketplace/payment-validation.ts:63](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-validation.ts#L63)

## Type Declaration

### canValidate?

> `optional` **canValidate?**: (`request`) => `boolean` \| `Promise`\<`boolean`\>

#### Parameters

##### request

[`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest)

#### Returns

`boolean` \| `Promise`\<`boolean`\>

### driver?

> `optional` **driver?**: `string` \| `"*"`

### id?

> `optional` **id?**: `string`

### method?

> `optional` **method?**: `string`

### validatePayment

> **validatePayment**: (`request`) => `Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>

#### Parameters

##### request

[`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest)

#### Returns

`Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>
