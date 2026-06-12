---
title: "Type Alias: EvmAuctionPolicy"
description: "Type Alias: EvmAuctionPolicy in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmAuctionPolicy

> **EvmAuctionPolicy** = `MarketplaceDriverAuctionPolicy`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-evm/type-aliases/GenericPolicyPaymentState), [`EvmAuctionPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentPolicy), [`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset), [`GenericPaymentIntent`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIntent), [`GenericPaymentValidationRequest`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationRequest), [`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult), [`GenericPaymentRecoveryItem`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryItem), [`GenericPaymentRecoveryState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryState), [`GenericAuctionSettlementIntent`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementIntent), [`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:142](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L142)

## Type Declaration

### id

> **id**: `"evm:multi-escrow-auction-v1"`

### method

> **method**: `"evm"`

### assets()

> **assets**(): [`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)[]

#### Returns

[`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)[]

### discoverHighWatermark()

> **discoverHighWatermark**(`context`): `Promise`\<`MarketplaceDriverWatermarkDiscovery` & `object`\>

#### Parameters

##### context

`MarketplaceDriverWatermarkContext`

#### Returns

`Promise`\<`MarketplaceDriverWatermarkDiscovery` & `object`\>

### pay()

> **pay**(`intent`): `AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-evm/type-aliases/GenericPolicyPaymentState)\>

#### Parameters

##### intent

`MarketplaceDriverPaymentIntent`

#### Returns

`AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-evm/type-aliases/GenericPolicyPaymentState)\>

### policies()

> **policies**(): [`EvmAuctionPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentPolicy)[]

#### Returns

[`EvmAuctionPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentPolicy)[]

### recover()

> **recover**(`payment`): `AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryState)\>

#### Parameters

##### payment

[`GenericPaymentRecoveryItem`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryState)\>

### recyclePayment()

> **recyclePayment**(`intent`): `Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\>

#### Parameters

##### intent

[`GenericAuctionSettlementIntent`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementIntent) & `object`

#### Returns

`Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\>

### refundPayment()

> **refundPayment**(`intent`): `Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\>

#### Parameters

##### intent

[`GenericAuctionSettlementIntent`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementIntent) & `object`

#### Returns

`Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\>

### startup()

> **startup**(`context`): `Promise`\<`MarketplaceDriverStartResult` & `object`\>

#### Parameters

##### context

`MarketplaceDriverStartContext`

#### Returns

`Promise`\<`MarketplaceDriverStartResult` & `object`\>

### state()

> **state**(): [`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

#### Returns

[`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

### validatePayment()

> **validatePayment**(`request`): `Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult)\>

#### Parameters

##### request

`MarketplaceDriverValidationRequest`

#### Returns

`Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult)\>
