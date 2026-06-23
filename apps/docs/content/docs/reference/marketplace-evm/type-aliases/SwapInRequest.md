---
title: "Type Alias: SwapInRequest"
description: "Type Alias: SwapInRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapInRequest

> **SwapInRequest** = [`SwapAttemptRequest`](/docs/reference/marketplace-evm/type-aliases/SwapAttemptRequest) & `object`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:14](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/types.ts#L14)

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

### routeVia?

> `optional` **routeVia?**: `object`

#### routeVia.assetAddress

> **assetAddress**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

#### routeVia.boltzCurrency

> **boltzCurrency**: `string`

#### routeVia.decimals

> **decimals**: `number`

#### routeVia.quoteCurrency

> **quoteCurrency**: `string`
