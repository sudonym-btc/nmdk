---
title: "Type Alias: BoltzStatusUpdate"
description: "Type Alias: BoltzStatusUpdate in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzStatusUpdate

> **BoltzStatusUpdate** = `Omit`\<`OpenApiSwapStatus`, `"status"` \| `"transaction"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:25](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L25)

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
