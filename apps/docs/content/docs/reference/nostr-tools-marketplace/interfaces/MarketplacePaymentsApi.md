---
title: "Interface: MarketplacePaymentsApi"
description: "Interface: MarketplacePaymentsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplacePaymentsApi

Defined in: runtime-types.ts:927

## Properties

### mine

> **mine**: `object`

Defined in: runtime-types.ts:928

#### fetch()

> **fetch**(`query?`, `options?`): `Promise`\<[`MarketplacePaymentRecoveryItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryItem)[]\>

##### Parameters

###### query?

`Omit`\<[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery), `"identity"`\> & `object`

###### options?

[`OrderSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSearchOptions) & [`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions) & `object`

##### Returns

`Promise`\<[`MarketplacePaymentRecoveryItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryItem)[]\>

## Methods

### policyFor()

> **policyFor**(`payment`): [`MarketplacePaymentPolicyImplementation`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentPolicyImplementation)\<[`MarketplacePolicyPaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyPaymentState)\> \| `undefined`

Defined in: runtime-types.ts:936

#### Parameters

##### payment

[`MarketplacePaymentRecoveryItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryItem)

#### Returns

[`MarketplacePaymentPolicyImplementation`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentPolicyImplementation)\<[`MarketplacePolicyPaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyPaymentState)\> \| `undefined`

***

### recover()

> **recover**(`payment`): `AsyncIterable`\<[`MarketplacePaymentRecoveryState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryState)\>

Defined in: runtime-types.ts:934

#### Parameters

##### payment

[`MarketplacePaymentRecoveryItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`MarketplacePaymentRecoveryState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryState)\>

***

### validate()

> **validate**(`payment`): `Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>

Defined in: runtime-types.ts:935

#### Parameters

##### payment

[`MarketplacePaymentRecoveryItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryItem)

#### Returns

`Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>
