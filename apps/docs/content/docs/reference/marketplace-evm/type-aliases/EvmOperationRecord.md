---
title: "Type Alias: EvmOperationRecord"
description: "Type Alias: EvmOperationRecord in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmOperationRecord

> **EvmOperationRecord** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:96](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L96)

## Properties

### chainId

> **chainId**: `number`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:100](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L100)

***

### createdAt

> **createdAt**: `number`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:106](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L106)

***

### data

> **data**: `Record`\<`string`, `unknown`\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:105](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L105)

***

### error?

> `optional` **error?**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:104](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L104)

***

### id

> **id**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:97](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L97)

***

### kind

> **kind**: `"swap_in"` \| `"swap_out"` \| `"escrow"`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:98](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L98)

***

### status

> **status**: [`EvmOperationStatus`](/docs/reference/marketplace-evm/type-aliases/EvmOperationStatus)

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:99](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L99)

***

### swapId?

> `optional` **swapId?**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:102](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L102)

***

### tradeId?

> `optional` **tradeId?**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:101](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L101)

***

### txHash?

> `optional` **txHash?**: [`EvmHash`](/docs/reference/marketplace-evm/type-aliases/EvmHash)

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:103](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L103)

***

### updatedAt

> **updatedAt**: `number`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:107](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L107)
