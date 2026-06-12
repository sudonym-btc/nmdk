---
title: "Interface: MarketplacePaymentsApi"
description: "Interface: MarketplacePaymentsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplacePaymentsApi

Defined in: [runtime-types.ts:898](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L898)

## Properties

### mine

> **mine**: `object`

Defined in: [runtime-types.ts:899](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L899)

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

Defined in: [runtime-types.ts:907](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L907)

#### Parameters

##### payment

[`MarketplacePaymentRecoveryItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryItem)

#### Returns

[`MarketplacePaymentPolicyImplementation`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentPolicyImplementation)\<[`MarketplacePolicyPaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyPaymentState)\> \| `undefined`

***

### recover()

> **recover**(`payment`): `AsyncIterable`\<[`MarketplacePaymentRecoveryState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryState)\>

Defined in: [runtime-types.ts:905](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L905)

#### Parameters

##### payment

[`MarketplacePaymentRecoveryItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`MarketplacePaymentRecoveryState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryState)\>

***

### validate()

> **validate**(`payment`): `Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>

Defined in: [runtime-types.ts:906](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L906)

#### Parameters

##### payment

[`MarketplacePaymentRecoveryItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryItem)

#### Returns

`Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>
