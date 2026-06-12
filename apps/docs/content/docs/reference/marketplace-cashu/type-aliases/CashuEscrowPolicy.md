---
title: "Type Alias: CashuEscrowPolicy"
description: "Type Alias: CashuEscrowPolicy in Marketplace Cashu Driver."
full: true
---

# Type Alias: CashuEscrowPolicy

> **CashuEscrowPolicy** = `MarketplaceDriverOrderPolicy`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-cashu/type-aliases/GenericPolicyPaymentState), [`CashuEscrowPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPaymentPolicy), [`CashuPaymentAsset`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAsset), [`GenericPaymentIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIntent), [`GenericPaymentValidationRequest`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationRequest), [`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult), [`GenericPaymentRecoveryItem`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryItem), [`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState)\> & `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:129](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/types.ts#L129)

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

### recover()

> **recover**(`payment`): `AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState)\>

#### Parameters

##### payment

[`GenericPaymentRecoveryItem`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState)\>

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

### validatePayment()

> **validatePayment**(`request`): `Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult)\>

#### Parameters

##### request

`MarketplaceDriverValidationRequest`

#### Returns

`Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult)\>
