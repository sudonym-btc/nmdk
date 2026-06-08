---
title: "Type Alias: EvmEscrowPolicy"
description: "Type Alias: EvmEscrowPolicy in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmEscrowPolicy

> **EvmEscrowPolicy** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:228](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L228)

## Properties

### family

> **family**: `"escrow"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:232](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L232)

***

### id

> **id**: `"evm:multi-escrow"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:230](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L230)

***

### method

> **method**: `"evm"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:229](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L229)

***

### subject

> **subject**: `"order"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:231](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L231)

## Methods

### assets()

> **assets**(): [`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)[]

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:234](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L234)

#### Returns

[`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)[]

***

### client()

> **client**(`seed`, `tradeIndex?`): `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:264](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L264)

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

***

### discoverHighWatermark()

> **discoverHighWatermark**(`context`): `Promise`\<\{ `maxUsedIndex`: `number`; `nextUnusedIndex`: `number`; `policy`: `"evm:multi-escrow"`; `recoveryActions`: `unknown`[]; `scannedFrom`: `number`; `scannedThrough`: `number`; `unusedWindow`: `number`; `usedIndexes`: `number`[]; \}\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:235](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L235)

#### Parameters

##### context

###### highWaterMark

`number`

###### now?

`number`

###### seed

`string`

###### unusedWindow

`number`

#### Returns

`Promise`\<\{ `maxUsedIndex`: `number`; `nextUnusedIndex`: `number`; `policy`: `"evm:multi-escrow"`; `recoveryActions`: `unknown`[]; `scannedFrom`: `number`; `scannedThrough`: `number`; `unusedWindow`: `number`; `usedIndexes`: `number`[]; \}\>

***

### pay()

> **pay**(`intent`): `AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-evm/type-aliases/GenericPolicyPaymentState)\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:262](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L262)

#### Parameters

##### intent

[`GenericPaymentIntent`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIntent)

#### Returns

`AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-evm/type-aliases/GenericPolicyPaymentState)\>

***

### policies()

> **policies**(): [`EvmEscrowPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentPolicy)[]

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:233](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L233)

#### Returns

[`EvmEscrowPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowPaymentPolicy)[]

***

### recover()

> **recover**(`payment`): `AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryState)\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:261](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L261)

#### Parameters

##### payment

[`GenericPaymentRecoveryItem`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryState)\>

***

### startup()

> **startup**(`context`): `Promise`\<\{ `data`: `Record`\<`string`, `unknown`\>; `policy`: `"evm:multi-escrow"`; \}\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:250](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L250)

#### Parameters

##### context

###### discovery

`unknown`

###### highWaterMark

`number`

###### nextUnusedIndex

`number`

###### now?

`number`

###### seed

`string`

###### unusedWindow

`number`

#### Returns

`Promise`\<\{ `data`: `Record`\<`string`, `unknown`\>; `policy`: `"evm:multi-escrow"`; \}\>

***

### state()

> **state**(): [`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:265](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L265)

#### Returns

[`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

***

### validatePayment()

> **validatePayment**(`request`): `Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:263](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L263)

#### Parameters

##### request

[`GenericPaymentValidationRequest`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationRequest)

#### Returns

`Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult)\>
