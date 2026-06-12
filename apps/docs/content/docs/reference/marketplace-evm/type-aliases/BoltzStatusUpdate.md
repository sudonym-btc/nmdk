---
title: "Type Alias: BoltzStatusUpdate"
description: "Type Alias: BoltzStatusUpdate in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzStatusUpdate

> **BoltzStatusUpdate** = `Omit`\<`OpenApiSwapStatus`, `"status"` \| `"transaction"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:24](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L24)

## Type Declaration

### error?

> `optional` **error?**: `string`

### id?

> `optional` **id?**: `string`

### status

> **status**: [`BoltzSwapStatus`](/docs/reference/marketplace-evm/type-aliases/BoltzSwapStatus) \| `string`

### transaction?

> `optional` **transaction?**: `object`

#### transaction.hex?

> `optional` **hex?**: `string`

#### transaction.id?

> `optional` **id?**: [`EvmHash`](/docs/reference/marketplace-evm/type-aliases/EvmHash)

### transactionHash?

> `optional` **transactionHash?**: [`EvmHash`](/docs/reference/marketplace-evm/type-aliases/EvmHash)
