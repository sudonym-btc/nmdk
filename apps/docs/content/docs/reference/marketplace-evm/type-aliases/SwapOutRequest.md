---
title: "Type Alias: SwapOutRequest"
description: "Type Alias: SwapOutRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapOutRequest

> **SwapOutRequest** = [`SwapAttemptRequest`](/docs/reference/marketplace-evm/type-aliases/SwapAttemptRequest) & `object`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:24](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/swaps/types.ts#L24)

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
