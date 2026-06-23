---
title: "Type Alias: EvmEscrowPolicy"
description: "Type Alias: EvmEscrowPolicy in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmEscrowPolicy

> **EvmEscrowPolicy** = `MarketplaceDriverOrderPolicy`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-evm/type-aliases/GenericPolicyPaymentState), [`EvmEscrowPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentPolicy), [`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset), [`GenericPaymentIntent`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIntent), [`GenericPaymentValidationRequest`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationRequest), [`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult), [`GenericPaymentSweepInput`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentSweepInput), [`GenericPaymentSweepState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentSweepState), [`GenericSwapResumeContext`](/docs/reference/marketplace-evm/type-aliases/GenericSwapResumeContext), [`GenericSwapResumeState`](/docs/reference/marketplace-evm/type-aliases/GenericSwapResumeState)\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:113](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/marketplace/types.ts#L113)

## Type Declaration

### id

> **id**: `"evm:multi-escrow"`

### method

> **method**: `"evm"`

### assets()

> **assets**(): [`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)[]

#### Returns

[`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)[]

### client()

> **client**(`seed`, `tradeIndex?`): `object`

#### Parameters

##### seed

`string`

##### tradeIndex?

`number`

#### Returns

`object`

##### accounts?

> `optional` **accounts?**: [`EvmAccountManager`](/docs/reference/marketplace-evm/type-aliases/EvmAccountManager)

##### auction

> **auction**: `object`

###### auction.validate

> **validate**: (`request`) => `Promise`\<[`EvmAuctionPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentValidationResult)\> = `auctionValidator.validate`

###### Parameters

###### request

[`EvmAuctionBidValidationRequest`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionBidValidationRequest)

###### Returns

`Promise`\<[`EvmAuctionPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentValidationResult)\>

###### auction.placeBid()

> **placeBid**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

###### Parameters

###### params

[`EvmPlaceBidParams`](/docs/reference/marketplace-evm/type-aliases/EvmPlaceBidParams)

###### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

##### chains

> **chains**: [`ResolvedEvmChainConfig`](/docs/reference/marketplace-evm/type-aliases/ResolvedEvmChainConfig)[]

##### discoverHighWatermark?

> `optional` **discoverHighWatermark?**: (`options?`) => `Promise`\<[`EvmHighWatermarkDiscovery`](/docs/reference/marketplace-evm/type-aliases/EvmHighWatermarkDiscovery)\> = `discovery.discoverHighWatermark`

###### Parameters

###### options?

[`EvmDiscoverHighWatermarkOptions`](/docs/reference/marketplace-evm/type-aliases/EvmDiscoverHighWatermarkOptions)

###### Returns

`Promise`\<[`EvmHighWatermarkDiscovery`](/docs/reference/marketplace-evm/type-aliases/EvmHighWatermarkDiscovery)\>

##### escrow

> **escrow**: `object`

###### escrow.validate

> **validate**: (`request`) => `Promise`\<[`EvmEscrowPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentValidationResult)\> = `escrowValidator.validate`

###### Parameters

###### request

[`EvmEscrowPaymentValidationRequest`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentValidationRequest)

###### Returns

`Promise`\<[`EvmEscrowPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentValidationResult)\>

###### escrow.arbitrate()

> **arbitrate**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

###### Parameters

###### params

[`EvmArbitrateParams`](/docs/reference/marketplace-evm/type-aliases/EvmArbitrateParams)

###### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

###### escrow.claim()

> **claim**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

###### Parameters

###### params

[`EvmSignedEscrowAction`](/docs/reference/marketplace-evm/type-aliases/EvmSignedEscrowAction)

###### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

###### escrow.createTrade()

> **createTrade**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

###### Parameters

###### params

[`EvmCreateTradeParams`](/docs/reference/marketplace-evm/type-aliases/EvmCreateTradeParams)

###### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

###### escrow.recycle()

> **recycle**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

###### Parameters

###### params

`EvmRecycleParams`

###### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

###### escrow.release()

> **release**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

###### Parameters

###### params

[`EvmReleaseParams`](/docs/reference/marketplace-evm/type-aliases/EvmReleaseParams)

###### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

###### escrow.withdraw()

> **withdraw**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

###### Parameters

###### params

[`EvmWithdrawParams`](/docs/reference/marketplace-evm/type-aliases/EvmWithdrawParams)

###### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

##### executor?

> `optional` **executor?**: [`EvmExecutor`](/docs/reference/marketplace-evm/type-aliases/EvmExecutor)

##### operationStore

> **operationStore**: [`EvmOperationStore`](/docs/reference/marketplace-evm/type-aliases/EvmOperationStore) = `options.operationStore`

##### swaps?

> `optional` **swaps?**: [`EvmSwapService`](/docs/reference/marketplace-evm/type-aliases/EvmSwapService)

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

> **policies**(): [`EvmEscrowPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentPolicy)[]

#### Returns

[`EvmEscrowPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentPolicy)[]

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
