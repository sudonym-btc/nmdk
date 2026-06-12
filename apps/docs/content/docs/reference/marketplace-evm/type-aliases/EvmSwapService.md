---
title: "Type Alias: EvmSwapService"
description: "Type Alias: EvmSwapService in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmSwapService

> **EvmSwapService** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:105](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/swaps/types.ts#L105)

## Methods

### listActive()

> **listActive**(): `Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:109](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/swaps/types.ts#L109)

#### Returns

`Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

***

### resume()

> **resume**(`id`): `Promise`\<[`SwapResumeResult`](/docs/reference/marketplace-evm/type-aliases/SwapResumeResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:108](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/swaps/types.ts#L108)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`SwapResumeResult`](/docs/reference/marketplace-evm/type-aliases/SwapResumeResult)\>

***

### swapIn()

> **swapIn**(`request`): `Promise`\<[`SwapInResult`](/docs/reference/marketplace-evm/type-aliases/SwapInResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:106](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/swaps/types.ts#L106)

#### Parameters

##### request

[`SwapInRequest`](/docs/reference/marketplace-evm/type-aliases/SwapInRequest)

#### Returns

`Promise`\<[`SwapInResult`](/docs/reference/marketplace-evm/type-aliases/SwapInResult)\>

***

### swapOut()

> **swapOut**(`request`): `Promise`\<[`SwapOutResult`](/docs/reference/marketplace-evm/type-aliases/SwapOutResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:107](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/swaps/types.ts#L107)

#### Parameters

##### request

[`SwapOutRequest`](/docs/reference/marketplace-evm/type-aliases/SwapOutRequest)

#### Returns

`Promise`\<[`SwapOutResult`](/docs/reference/marketplace-evm/type-aliases/SwapOutResult)\>
