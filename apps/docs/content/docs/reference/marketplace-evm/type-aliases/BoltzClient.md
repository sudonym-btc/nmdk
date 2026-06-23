---
title: "Type Alias: BoltzClient"
description: "Type Alias: BoltzClient in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzClient

> **BoltzClient** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:95](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L95)

## Methods

### createReverseSwap()

> **createReverseSwap**(`request`): `Promise`\<[`BoltzReverseSwapResponse`](/docs/reference/marketplace-evm/type-aliases/BoltzReverseSwapResponse)\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:98](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L98)

#### Parameters

##### request

[`BoltzReverseSwapRequest`](/docs/reference/marketplace-evm/type-aliases/BoltzReverseSwapRequest)

#### Returns

`Promise`\<[`BoltzReverseSwapResponse`](/docs/reference/marketplace-evm/type-aliases/BoltzReverseSwapResponse)\>

***

### createSubmarineSwap()

> **createSubmarineSwap**(`request`): `Promise`\<[`BoltzSubmarineSwapResponse`](/docs/reference/marketplace-evm/type-aliases/BoltzSubmarineSwapResponse)\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:99](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L99)

#### Parameters

##### request

[`BoltzSubmarineSwapRequest`](/docs/reference/marketplace-evm/type-aliases/BoltzSubmarineSwapRequest)

#### Returns

`Promise`\<[`BoltzSubmarineSwapResponse`](/docs/reference/marketplace-evm/type-aliases/BoltzSubmarineSwapResponse)\>

***

### encodeTokenSwap()

> **encodeTokenSwap**(`currency`, `request`): `Promise`\<[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:102](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L102)

#### Parameters

##### currency

`string`

##### request

`BoltzDexEncodeRequest`

#### Returns

`Promise`\<[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]\>

***

### getCooperativeRefundSignature()

> **getCooperativeRefundSignature**(`id`): `Promise`\<`` `0x${string}` `` \| `null`\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:106](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L106)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`` `0x${string}` `` \| `null`\>

***

### getReversePairs()

> **getReversePairs**(): `Promise`\<`BoltzPairTable`\<\{ `fees`: \{ `minerFees`: \{ `claim`: `number`; `lockup`: `number`; \}; `percentage`: `number`; \}; `hash`: `string`; `limits`: \{ `maximal`: `number`; `minimal`: `number`; \}; `rate`: `number`; \}\>\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:96](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L96)

#### Returns

`Promise`\<`BoltzPairTable`\<\{ `fees`: \{ `minerFees`: \{ `claim`: `number`; `lockup`: `number`; \}; `percentage`: `number`; \}; `hash`: `string`; `limits`: \{ `maximal`: `number`; `minimal`: `number`; \}; `rate`: `number`; \}\>\>

***

### getSubmarinePairs()

> **getSubmarinePairs**(): `Promise`\<`BoltzPairTable`\<\{ `fees`: \{ `minerFees`: `number`; `percentage`: `number`; \}; `hash`: `string`; `limits`: \{ `maximal`: `number`; `maximalZeroConf`: `number`; `minimal`: `number`; `minimalBatched?`: `number`; \}; `rate`: `number`; \}\>\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:97](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L97)

#### Returns

`Promise`\<`BoltzPairTable`\<\{ `fees`: \{ `minerFees`: `number`; `percentage`: `number`; \}; `hash`: `string`; `limits`: \{ `maximal`: `number`; `maximalZeroConf`: `number`; `minimal`: `number`; `minimalBatched?`: `number`; \}; `rate`: `number`; \}\>\>

***

### getSubmarinePreimage()

> **getSubmarinePreimage**(`id`): `Promise`\<`` `0x${string}` ``\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:105](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L105)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`` `0x${string}` ``\>

***

### getSwap()

> **getSwap**(`id`): `Promise`\<[`BoltzStatusUpdate`](/docs/reference/marketplace-evm/type-aliases/BoltzStatusUpdate)\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:103](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L103)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`BoltzStatusUpdate`](/docs/reference/marketplace-evm/type-aliases/BoltzStatusUpdate)\>

***

### quoteTokenAmountIn()

> **quoteTokenAmountIn**(`currency`, `request`): `Promise`\<`BoltzDexQuote`\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:100](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L100)

#### Parameters

##### currency

`string`

##### request

`BoltzDexQuoteRequest`

#### Returns

`Promise`\<`BoltzDexQuote`\>

***

### quoteTokenAmountOut()

> **quoteTokenAmountOut**(`currency`, `request`): `Promise`\<`BoltzDexQuote`\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:101](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L101)

#### Parameters

##### currency

`string`

##### request

`BoltzDexQuoteRequest`

#### Returns

`Promise`\<`BoltzDexQuote`\>

***

### subscribeSwap()

> **subscribeSwap**(`id`): `AsyncIterable`\<[`BoltzStatusUpdate`](/docs/reference/marketplace-evm/type-aliases/BoltzStatusUpdate)\>

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:104](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L104)

#### Parameters

##### id

`string`

#### Returns

`AsyncIterable`\<[`BoltzStatusUpdate`](/docs/reference/marketplace-evm/type-aliases/BoltzStatusUpdate)\>
