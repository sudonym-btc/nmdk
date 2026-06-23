---
title: "Type Alias: SwapOutRequest"
description: "Type Alias: SwapOutRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapOutRequest

> **SwapOutRequest** = [`SwapAttemptRequest`](/docs/reference/marketplace-evm/type-aliases/SwapAttemptRequest) & `object`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:31](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/types.ts#L31)

## Type Declaration

### amount?

> `optional` **amount?**: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount)

### assetAddress?

> `optional` **assetAddress?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### boltzCurrency

> **boltzCurrency**: `string`

### chainId

> **chainId**: `number`

### invoice?

> `optional` **invoice?**: `string`

### invoiceDescription?

> `optional` **invoiceDescription?**: `string`

### lightningCurrency?

> `optional` **lightningCurrency?**: `string`

### preLockCalls?

> `optional` **preLockCalls?**: [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]
