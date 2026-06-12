---
title: "Type Alias: SwapOutRequest"
description: "Type Alias: SwapOutRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapOutRequest

> **SwapOutRequest** = [`SwapAttemptRequest`](/docs/reference/marketplace-evm/type-aliases/SwapAttemptRequest) & `object`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:25](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/swaps/types.ts#L25)

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
