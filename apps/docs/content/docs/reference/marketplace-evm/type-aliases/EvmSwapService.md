---
title: "Type Alias: EvmSwapService"
description: "Type Alias: EvmSwapService in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmSwapService

> **EvmSwapService** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:113](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/types.ts#L113)

## Methods

### listActive()

> **listActive**(): `Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:117](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/types.ts#L117)

#### Returns

`Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

***

### resume()

> **resume**(`id`): `Promise`\<[`SwapResumeResult`](/docs/reference/marketplace-evm/type-aliases/SwapResumeResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:116](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/types.ts#L116)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`SwapResumeResult`](/docs/reference/marketplace-evm/type-aliases/SwapResumeResult)\>

***

### swapIn()

> **swapIn**(`request`): `Promise`\<[`SwapInResult`](/docs/reference/marketplace-evm/type-aliases/SwapInResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:114](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/types.ts#L114)

#### Parameters

##### request

[`SwapInRequest`](/docs/reference/marketplace-evm/type-aliases/SwapInRequest)

#### Returns

`Promise`\<[`SwapInResult`](/docs/reference/marketplace-evm/type-aliases/SwapInResult)\>

***

### swapOut()

> **swapOut**(`request`): `Promise`\<[`SwapOutResult`](/docs/reference/marketplace-evm/type-aliases/SwapOutResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:115](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/types.ts#L115)

#### Parameters

##### request

[`SwapOutRequest`](/docs/reference/marketplace-evm/type-aliases/SwapOutRequest)

#### Returns

`Promise`\<[`SwapOutResult`](/docs/reference/marketplace-evm/type-aliases/SwapOutResult)\>
