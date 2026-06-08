---
title: "Type Alias: EvmAuctionPolicy"
description: "Type Alias: EvmAuctionPolicy in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmAuctionPolicy

> **EvmAuctionPolicy** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:268](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L268)

## Properties

### family

> **family**: `"auction"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:272](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L272)

***

### id

> **id**: `"evm:multi-escrow-auction-v1"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:270](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L270)

***

### method

> **method**: `"evm"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:269](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L269)

***

### subject

> **subject**: `"bid"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:271](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L271)

## Methods

### assets()

> **assets**(): [`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)[]

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:274](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L274)

#### Returns

[`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)[]

***

### discoverHighWatermark()

> **discoverHighWatermark**(`context`): `Promise`\<\{ `maxUsedIndex`: `number`; `nextUnusedIndex`: `number`; `policy`: `"evm:multi-escrow-auction-v1"`; `recoveryActions`: `unknown`[]; `scannedFrom`: `number`; `scannedThrough`: `number`; `unusedWindow`: `number`; `usedIndexes`: `number`[]; \}\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:275](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L275)

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

`Promise`\<\{ `maxUsedIndex`: `number`; `nextUnusedIndex`: `number`; `policy`: `"evm:multi-escrow-auction-v1"`; `recoveryActions`: `unknown`[]; `scannedFrom`: `number`; `scannedThrough`: `number`; `unusedWindow`: `number`; `usedIndexes`: `number`[]; \}\>

***

### pay()

> **pay**(`intent`): `AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-evm/type-aliases/GenericPolicyPaymentState)\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:302](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L302)

#### Parameters

##### intent

[`GenericPaymentIntent`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIntent)

#### Returns

`AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-evm/type-aliases/GenericPolicyPaymentState)\>

***

### policies()

> **policies**(): [`EvmAuctionPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentPolicy)[]

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:273](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L273)

#### Returns

[`EvmAuctionPaymentPolicy`](/docs/reference/marketplace-evm/type-aliases/EvmAuctionPaymentPolicy)[]

***

### recover()

> **recover**(`payment`): `AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryState)\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:301](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L301)

#### Parameters

##### payment

[`GenericPaymentRecoveryItem`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentRecoveryState)\>

***

### recyclePayment()

> **recyclePayment**(`intent`): `Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:308](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L308)

#### Parameters

##### intent

[`GenericAuctionSettlementIntent`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementIntent) & `object`

#### Returns

`Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\>

***

### refundPayment()

> **refundPayment**(`intent`): `Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:304](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L304)

#### Parameters

##### intent

[`GenericAuctionSettlementIntent`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementIntent) & `object`

#### Returns

`Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-evm/type-aliases/GenericAuctionSettlementResult)\>

***

### startup()

> **startup**(`context`): `Promise`\<\{ `data`: `Record`\<`string`, `unknown`\>; `policy`: `"evm:multi-escrow-auction-v1"`; \}\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:290](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L290)

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

`Promise`\<\{ `data`: `Record`\<`string`, `unknown`\>; `policy`: `"evm:multi-escrow-auction-v1"`; \}\>

***

### state()

> **state**(): [`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:313](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L313)

#### Returns

[`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

***

### validatePayment()

> **validatePayment**(`request`): `Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:303](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L303)

#### Parameters

##### request

[`GenericPaymentValidationRequest`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationRequest)

#### Returns

`Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentValidationResult)\>
