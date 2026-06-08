---
title: "Type Alias: EvmSwapService"
description: "Type Alias: EvmSwapService in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmSwapService

> **EvmSwapService** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:103](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/swaps/types.ts#L103)

## Methods

### listActive()

> **listActive**(): `Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:107](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/swaps/types.ts#L107)

#### Returns

`Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

***

### resume()

> **resume**(`id`): `Promise`\<[`SwapResumeResult`](/docs/reference/marketplace-evm/type-aliases/SwapResumeResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:106](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/swaps/types.ts#L106)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`SwapResumeResult`](/docs/reference/marketplace-evm/type-aliases/SwapResumeResult)\>

***

### swapIn()

> **swapIn**(`request`): `Promise`\<[`SwapInResult`](/docs/reference/marketplace-evm/type-aliases/SwapInResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:104](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/swaps/types.ts#L104)

#### Parameters

##### request

[`SwapInRequest`](/docs/reference/marketplace-evm/type-aliases/SwapInRequest)

#### Returns

`Promise`\<[`SwapInResult`](/docs/reference/marketplace-evm/type-aliases/SwapInResult)\>

***

### swapOut()

> **swapOut**(`request`): `Promise`\<[`SwapOutResult`](/docs/reference/marketplace-evm/type-aliases/SwapOutResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:105](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/swaps/types.ts#L105)

#### Parameters

##### request

[`SwapOutRequest`](/docs/reference/marketplace-evm/type-aliases/SwapOutRequest)

#### Returns

`Promise`\<[`SwapOutResult`](/docs/reference/marketplace-evm/type-aliases/SwapOutResult)\>
