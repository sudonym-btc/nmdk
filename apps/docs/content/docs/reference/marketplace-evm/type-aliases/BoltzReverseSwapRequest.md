---
title: "Type Alias: BoltzReverseSwapRequest"
description: "Type Alias: BoltzReverseSwapRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzReverseSwapRequest

> **BoltzReverseSwapRequest** = `Omit`\<`OpenApiReverseRequest`, `"claimAddress"` \| `"claimCovenant"` \| `"preimageHash"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:35](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/boltz/types.ts#L35)

## Type Declaration

### claimAddress

> **claimAddress**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### claimCovenant?

> `optional` **claimCovenant?**: `boolean`

Boltz 3.12.1's OpenAPI marks this required even though the API defaults it to false.

### preimageHash

> **preimageHash**: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex)
