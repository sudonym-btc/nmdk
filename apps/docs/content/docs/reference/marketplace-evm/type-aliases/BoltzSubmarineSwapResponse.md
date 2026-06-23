---
title: "Type Alias: BoltzSubmarineSwapResponse"
description: "Type Alias: BoltzSubmarineSwapResponse in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzSubmarineSwapResponse

> **BoltzSubmarineSwapResponse** = `Omit`\<`OpenApiSubmarineResponse`, `"address"` \| `"expectedAmount"` \| `"timeoutBlockHeight"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:59](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L59)

## Type Declaration

### address?

> `optional` **address?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### claimAddress?

> `optional` **claimAddress?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

EVM submarine swaps return this at runtime, but Boltz 3.12.1's OpenAPI schema omits it.

### expectedAmount?

> `optional` **expectedAmount?**: `number`

### timeoutBlockHeight

> **timeoutBlockHeight**: `number`
