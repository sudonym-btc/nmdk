---
title: "Type Alias: EvmAuctionPolicy"
description: "Type Alias: EvmAuctionPolicy in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmAuctionPolicy

> **EvmAuctionPolicy** = `MarketplaceDriverAuctionPolicy`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-evm/type-aliases/GenericPolicyPaymentState), [`EvmAuctionPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentPolicy), [`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset), [`GenericPaymentIntent`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIntent), [`GenericPaymentValidationRequest`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationRequest), [`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult), [`GenericPaymentSweepInput`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentSweepInput), [`GenericPaymentSweepState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentSweepState), [`GenericSwapResumeContext`](/docs/reference/marketplace-evm/type-aliases/GenericSwapResumeContext), [`GenericSwapResumeState`](/docs/reference/marketplace-evm/type-aliases/GenericSwapResumeState), [`GenericAuctionSettlementIntent`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementIntent), [`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:153](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/marketplace/types.ts#L153)

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

### resumeSwapOperations()

> **resumeSwapOperations**(`context`): `AsyncIterable`\<`MarketplaceDriverSwapResumeState`\>

#### Parameters

##### context

[`GenericSwapResumeContext`](/docs/reference/marketplace-evm/type-aliases/GenericSwapResumeContext)

#### Returns

`AsyncIterable`\<`MarketplaceDriverSwapResumeState`\>

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

### sweepPayment()

> **sweepPayment**(`payment`): `AsyncIterable`\<[`GenericPaymentSweepState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentSweepState)\>

#### Parameters

##### payment

[`GenericPaymentSweepInput`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentSweepInput)

#### Returns

`AsyncIterable`\<[`GenericPaymentSweepState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentSweepState)\>

### validatePayment()

> **validatePayment**(`request`): `Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult)\>

#### Parameters

##### request

`MarketplaceDriverValidationRequest`

#### Returns

`Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult)\>
