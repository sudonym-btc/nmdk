---
title: "Type Alias: BoltzStatusUpdate"
description: "Type Alias: BoltzStatusUpdate in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzStatusUpdate

> **BoltzStatusUpdate** = `Omit`\<`OpenApiSwapStatus`, `"status"` \| `"transaction"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:24](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/boltz/types.ts#L24)

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
