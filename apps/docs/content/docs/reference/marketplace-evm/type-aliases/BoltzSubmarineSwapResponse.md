---
title: "Type Alias: BoltzSubmarineSwapResponse"
description: "Type Alias: BoltzSubmarineSwapResponse in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzSubmarineSwapResponse

> **BoltzSubmarineSwapResponse** = `Omit`\<`OpenApiSubmarineResponse`, `"address"` \| `"expectedAmount"` \| `"timeoutBlockHeight"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:58](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/boltz/types.ts#L58)

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
