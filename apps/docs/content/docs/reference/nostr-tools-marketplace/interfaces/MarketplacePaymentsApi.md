---
title: "Interface: MarketplacePaymentsApi"
description: "Interface: MarketplacePaymentsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplacePaymentsApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1254](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1254)

## Properties

### group

> **group**: (`sources`, `options`) => [`MarketplacePaymentGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentGroupStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1255](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1255)

#### Parameters

##### sources

[`PaymentGroupStreamSources`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroupStreamSources)

##### options?

[`PaymentGroupStreamOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroupStreamOptions) = `{}`

#### Returns

[`MarketplacePaymentGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentGroupStream)

***

### validateGroup

> **validateGroup**: (`group`, `options`) => [`PaymentValidation`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentValidation)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1256](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1256)

#### Parameters

##### group

[`PaymentGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroup)

##### options?

[`PaymentGroupValidationOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroupValidationOptions) = `{}`

#### Returns

[`PaymentValidation`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentValidation)

***

### validateGroups

> **validateGroups**: (`groups`, `options`) => [`MarketplacePaymentValidationStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1257](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1257)

#### Parameters

##### groups

[`MarketplacePaymentGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentGroupStream)

##### options?

[`PaymentGroupValidationStreamOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentGroupValidationStreamOptions) = `{}`

#### Returns

[`MarketplacePaymentValidationStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationStream)

## Methods

### validate()

> **validate**(`payment`): `Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1258](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1258)

#### Parameters

##### payment

[`MarketplacePaymentValidationItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationItem)

#### Returns

`Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>
