---
title: "Type Alias: CashuAuctionPolicy"
description: "Type Alias: CashuAuctionPolicy in Marketplace Cashu Driver."
full: true
---

# Type Alias: CashuAuctionPolicy

> **CashuAuctionPolicy** = `MarketplaceDriverAuctionPolicy`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-cashu/type-aliases/GenericPolicyPaymentState), [`CashuAuctionPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuAuctionPaymentPolicy), [`CashuPaymentAsset`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAsset), [`GenericPaymentIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIntent), [`GenericPaymentValidationRequest`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationRequest), [`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult), [`GenericPaymentRecoveryItem`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryItem), [`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState), [`GenericAuctionSettlementIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementIntent), [`GenericAuctionSettlementResult`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementResult)\> & `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:165](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/types.ts#L165)

## Type Declaration

### id

> **id**: `"cashu:p2pk-auction-v1"`

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

> **policies**(): [`CashuAuctionPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuAuctionPaymentPolicy)[]

#### Returns

[`CashuAuctionPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuAuctionPaymentPolicy)[]

### recover()

> **recover**(`payment`): `AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState)\>

#### Parameters

##### payment

[`GenericPaymentRecoveryItem`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState)\>

### recyclePayment()

> **recyclePayment**(`intent`): `Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementResult)\>

#### Parameters

##### intent

[`GenericAuctionSettlementIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementIntent) & `object`

#### Returns

`Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementResult)\>

### refundPayment()

> **refundPayment**(`intent`): `Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementResult)\>

#### Parameters

##### intent

[`GenericAuctionSettlementIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementIntent) & `object`

#### Returns

`Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementResult)\>

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
