---
title: "Type Alias: BoltzReverseSwapRequest"
description: "Type Alias: BoltzReverseSwapRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzReverseSwapRequest

> **BoltzReverseSwapRequest** = `Omit`\<`OpenApiReverseRequest`, `"claimAddress"` \| `"claimCovenant"` \| `"preimageHash"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:36](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L36)

## Type Declaration

### claimAddress

> **claimAddress**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### claimCovenant?

> `optional` **claimCovenant?**: `boolean`

Boltz 3.12.1's OpenAPI marks this required even though the API defaults it to false.

### preimageHash

> **preimageHash**: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex)
