---
title: "Type Alias: BoltzClient"
description: "Type Alias: BoltzClient in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzClient

> **BoltzClient** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:75](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L75)

## Methods

### createReverseSwap()

> **createReverseSwap**(`request`): `Promise`\<[`BoltzReverseSwapResponse`](/docs/reference/marketplace-evm/type-aliases/BoltzReverseSwapResponse)\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:78](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L78)

#### Parameters

##### request

[`BoltzReverseSwapRequest`](/docs/reference/marketplace-evm/type-aliases/BoltzReverseSwapRequest)

#### Returns

`Promise`\<[`BoltzReverseSwapResponse`](/docs/reference/marketplace-evm/type-aliases/BoltzReverseSwapResponse)\>

***

### createSubmarineSwap()

> **createSubmarineSwap**(`request`): `Promise`\<[`BoltzSubmarineSwapResponse`](/docs/reference/marketplace-evm/type-aliases/BoltzSubmarineSwapResponse)\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:79](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L79)

#### Parameters

##### request

[`BoltzSubmarineSwapRequest`](/docs/reference/marketplace-evm/type-aliases/BoltzSubmarineSwapRequest)

#### Returns

`Promise`\<[`BoltzSubmarineSwapResponse`](/docs/reference/marketplace-evm/type-aliases/BoltzSubmarineSwapResponse)\>

***

### getCooperativeRefundSignature()

> **getCooperativeRefundSignature**(`id`): `Promise`\<`` `0x${string}` `` \| `null`\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:83](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L83)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`` `0x${string}` `` \| `null`\>

***

### getReversePairs()

> **getReversePairs**(): `Promise`\<`BoltzPairTable`\<\{ `fees`: \{ `minerFees`: \{ `claim`: `number`; `lockup`: `number`; \}; `percentage`: `number`; \}; `hash`: `string`; `limits`: \{ `maximal`: `number`; `minimal`: `number`; \}; `rate`: `number`; \}\>\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:76](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L76)

#### Returns

`Promise`\<`BoltzPairTable`\<\{ `fees`: \{ `minerFees`: \{ `claim`: `number`; `lockup`: `number`; \}; `percentage`: `number`; \}; `hash`: `string`; `limits`: \{ `maximal`: `number`; `minimal`: `number`; \}; `rate`: `number`; \}\>\>

***

### getSubmarinePairs()

> **getSubmarinePairs**(): `Promise`\<`BoltzPairTable`\<\{ `fees`: \{ `minerFees`: `number`; `percentage`: `number`; \}; `hash`: `string`; `limits`: \{ `maximal`: `number`; `maximalZeroConf`: `number`; `minimal`: `number`; `minimalBatched?`: `number`; \}; `rate`: `number`; \}\>\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:77](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L77)

#### Returns

`Promise`\<`BoltzPairTable`\<\{ `fees`: \{ `minerFees`: `number`; `percentage`: `number`; \}; `hash`: `string`; `limits`: \{ `maximal`: `number`; `maximalZeroConf`: `number`; `minimal`: `number`; `minimalBatched?`: `number`; \}; `rate`: `number`; \}\>\>

***

### getSubmarinePreimage()

> **getSubmarinePreimage**(`id`): `Promise`\<`` `0x${string}` ``\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:82](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L82)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`` `0x${string}` ``\>

***

### getSwap()

> **getSwap**(`id`): `Promise`\<[`BoltzStatusUpdate`](/docs/reference/marketplace-evm/type-aliases/BoltzStatusUpdate)\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:80](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L80)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`BoltzStatusUpdate`](/docs/reference/marketplace-evm/type-aliases/BoltzStatusUpdate)\>

***

### subscribeSwap()

> **subscribeSwap**(`id`): `AsyncIterable`\<[`BoltzStatusUpdate`](/docs/reference/marketplace-evm/type-aliases/BoltzStatusUpdate)\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:81](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L81)

#### Parameters

##### id

`string`

#### Returns

`AsyncIterable`\<[`BoltzStatusUpdate`](/docs/reference/marketplace-evm/type-aliases/BoltzStatusUpdate)\>
