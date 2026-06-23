---
title: "Type Alias: CashuEscrowPolicy"
description: "Type Alias: CashuEscrowPolicy in Marketplace Cashu Driver."
full: true
---

# Type Alias: CashuEscrowPolicy

> **CashuEscrowPolicy** = `MarketplaceDriverOrderPolicy`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-cashu/type-aliases/GenericPolicyPaymentState), [`CashuEscrowPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPaymentPolicy), [`CashuPaymentAsset`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAsset), [`GenericPaymentIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIntent), [`GenericPaymentValidationRequest`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationRequest), [`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult), [`GenericPaymentSweepInput`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentSweepInput), [`GenericPaymentSweepState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentSweepState), [`GenericSwapResumeContext`](/docs/reference/marketplace-cashu/type-aliases/GenericSwapResumeContext), [`GenericSwapResumeState`](/docs/reference/marketplace-cashu/type-aliases/GenericSwapResumeState)\> & `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:135](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/types.ts#L135)

## Type Declaration

### id

> **id**: `"cashu:p2pk-escrow-v1"`

### method

> **method**: `"cashu"`

### assets()

> **assets**(): [`CashuPaymentAsset`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAsset)[]

#### Returns

[`CashuPaymentAsset`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAsset)[]

### discoverHighWatermark()

> **discoverHighWatermark**(`context`): `Promise`\<`MarketplaceDriverWatermarkDiscovery` & `object`\>

#### Parameters

##### context

`MarketplaceDriverWatermarkContext`

#### Returns

`Promise`\<`MarketplaceDriverWatermarkDiscovery` & `object`\>

### pay()

> **pay**(`intent`): `AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-cashu/type-aliases/GenericPolicyPaymentState)\>

#### Parameters

##### intent

`MarketplaceDriverPaymentIntent`

#### Returns

`AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-cashu/type-aliases/GenericPolicyPaymentState)\>

### policies()

> **policies**(): [`CashuEscrowPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPaymentPolicy)[]

#### Returns

[`CashuEscrowPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPaymentPolicy)[]

### startup()

> **startup**(`context`): `Promise`\<`MarketplaceDriverStartResult` & `object`\>

#### Parameters

##### context

`MarketplaceDriverStartContext`

#### Returns

`Promise`\<`MarketplaceDriverStartResult` & `object`\>

### state()

> **state**(): [`CashuEscrowPolicyState`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPolicyState)

#### Returns

[`CashuEscrowPolicyState`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPolicyState)

### sweepPayment()

> **sweepPayment**(`payment`): `AsyncIterable`\<[`GenericPaymentSweepState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentSweepState)\>

#### Parameters

##### payment

[`GenericPaymentSweepInput`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentSweepInput)

#### Returns

`AsyncIterable`\<[`GenericPaymentSweepState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentSweepState)\>

### validatePayment()

> **validatePayment**(`request`): `Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult)\>

#### Parameters

##### request

`MarketplaceDriverValidationRequest`

#### Returns

`Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult)\>
