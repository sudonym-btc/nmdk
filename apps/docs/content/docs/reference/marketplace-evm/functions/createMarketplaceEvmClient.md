---
title: "Function: createMarketplaceEvmClient()"
description: "Function: createMarketplaceEvmClient() in Marketplace EVM Driver."
full: true
---

# Function: createMarketplaceEvmClient()

> **createMarketplaceEvmClient**(`options`): `object`

Defined in: [dependencies/marketplace-evm-ts/src/client.ts:15](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/client.ts#L15)

## Parameters

### options

[`MarketplaceEvmClientOptions`](/docs/reference/marketplace-evm/type-aliases/MarketplaceEvmClientOptions)

## Returns

`object`

### accounts?

> `optional` **accounts?**: [`EvmAccountManager`](/docs/reference/marketplace-evm/type-aliases/EvmAccountManager)

### auction

> **auction**: `object`

#### auction.validate

> **validate**: (`request`) => `Promise`\<[`EvmAuctionPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentValidationResult)\> = `auctionValidator.validate`

##### Parameters

###### request

[`EvmAuctionBidValidationRequest`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionBidValidationRequest)

##### Returns

`Promise`\<[`EvmAuctionPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentValidationResult)\>

#### auction.placeBid()

> **placeBid**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

##### Parameters

###### params

[`EvmPlaceBidParams`](/docs/reference/marketplace-evm/type-aliases/EvmPlaceBidParams)

##### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

### chains

> **chains**: [`ResolvedEvmChainConfig`](/docs/reference/marketplace-evm/type-aliases/ResolvedEvmChainConfig)[]

### discoverHighWatermark?

> `optional` **discoverHighWatermark?**: (`options?`) => `Promise`\<[`EvmHighWatermarkDiscovery`](/docs/reference/marketplace-evm/type-aliases/EvmHighWatermarkDiscovery)\> = `discovery.discoverHighWatermark`

#### Parameters

##### options?

[`EvmDiscoverHighWatermarkOptions`](/docs/reference/marketplace-evm/type-aliases/EvmDiscoverHighWatermarkOptions)

#### Returns

`Promise`\<[`EvmHighWatermarkDiscovery`](/docs/reference/marketplace-evm/type-aliases/EvmHighWatermarkDiscovery)\>

### escrow

> **escrow**: `object`

#### escrow.validate

> **validate**: (`request`) => `Promise`\<[`EvmEscrowPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentValidationResult)\> = `escrowValidator.validate`

##### Parameters

###### request

[`EvmEscrowPaymentValidationRequest`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentValidationRequest)

##### Returns

`Promise`\<[`EvmEscrowPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentValidationResult)\>

#### escrow.arbitrate()

> **arbitrate**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

##### Parameters

###### params

[`EvmArbitrateParams`](/docs/reference/marketplace-evm/type-aliases/EvmArbitrateParams)

##### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

#### escrow.claim()

> **claim**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

##### Parameters

###### params

[`EvmSignedEscrowAction`](/docs/reference/marketplace-evm/type-aliases/EvmSignedEscrowAction)

##### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

#### escrow.createTrade()

> **createTrade**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

##### Parameters

###### params

[`EvmCreateTradeParams`](/docs/reference/marketplace-evm/type-aliases/EvmCreateTradeParams)

##### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

#### escrow.recycle()

> **recycle**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

##### Parameters

###### params

`EvmRecycleParams`

##### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

#### escrow.release()

> **release**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

##### Parameters

###### params

[`EvmReleaseParams`](/docs/reference/marketplace-evm/type-aliases/EvmReleaseParams)

##### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

#### escrow.withdraw()

> **withdraw**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

##### Parameters

###### params

[`EvmWithdrawParams`](/docs/reference/marketplace-evm/type-aliases/EvmWithdrawParams)

##### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

### executor?

> `optional` **executor?**: [`EvmExecutor`](/docs/reference/marketplace-evm/type-aliases/EvmExecutor)

### operationStore

> **operationStore**: [`EvmOperationStore`](/docs/reference/marketplace-evm/type-aliases/EvmOperationStore) = `options.operationStore`

### swaps?

> `optional` **swaps?**: [`EvmSwapService`](/docs/reference/marketplace-evm/type-aliases/EvmSwapService)
