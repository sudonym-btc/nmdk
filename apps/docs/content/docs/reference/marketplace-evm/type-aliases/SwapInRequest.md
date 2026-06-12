---
title: "Type Alias: SwapInRequest"
description: "Type Alias: SwapInRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapInRequest

> **SwapInRequest** = [`SwapAttemptRequest`](/docs/reference/marketplace-evm/type-aliases/SwapAttemptRequest) & `object`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:14](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/swaps/types.ts#L14)

## Type Declaration

### amount

> **amount**: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount)

### assetAddress?

> `optional` **assetAddress?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### boltzAmountSats?

> `optional` **boltzAmountSats?**: `number`

### boltzCurrency

> **boltzCurrency**: `string`

### chainId

> **chainId**: `number`

### description?

> `optional` **description?**: `string`

### lightningCurrency?

> `optional` **lightningCurrency?**: `string`

### postClaimCalls?

> `optional` **postClaimCalls?**: [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]
