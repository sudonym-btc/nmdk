---
title: "Variable: payments"
description: "Variable: payments in nostr-tools/marketplace."
full: true
---

# Variable: payments

> `const` **payments**: `object`

Defined in: [nostr-tools/marketplace/payment-group.ts:598](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-group.ts#L598)

## Type Declaration

### group

> **group**: (`sources`, `options`) => [`MarketplacePaymentGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentGroupStream) = `groupPaymentStreams`

#### Parameters

##### sources

[`PaymentGroupStreamSources`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroupStreamSources)

##### options?

[`PaymentGroupStreamOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroupStreamOptions) = `{}`

#### Returns

[`MarketplacePaymentGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentGroupStream)

### reducer

> **reducer**: *typeof* `PaymentGroupReducer` = `PaymentGroupReducer`

### validateGroup

> **validateGroup**: (`group`, `options`) => [`PaymentValidation`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentValidation) = `validatePaymentGroup`

#### Parameters

##### group

[`PaymentGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroup)

##### options?

[`PaymentGroupValidationOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroupValidationOptions) = `{}`

#### Returns

[`PaymentValidation`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentValidation)

### validateGroups

> **validateGroups**: (`groups`, `options`) => [`MarketplacePaymentValidationStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationStream) = `validatePaymentGroupStream`

#### Parameters

##### groups

[`MarketplacePaymentGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentGroupStream)

##### options?

[`PaymentGroupValidationStreamOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroupValidationStreamOptions) = `{}`

#### Returns

[`MarketplacePaymentValidationStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationStream)
