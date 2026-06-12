---
title: "Type Alias: BoltzReverseSwapResponse"
description: "Type Alias: BoltzReverseSwapResponse in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzReverseSwapResponse

> **BoltzReverseSwapResponse** = `Omit`\<`OpenApiReverseResponse`, `"lockupAddress"` \| `"refundAddress"` \| `"timeoutBlockHeight"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:45](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/boltz/types.ts#L45)

## Type Declaration

### lockupAddress?

> `optional` **lockupAddress?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### refundAddress?

> `optional` **refundAddress?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### timeoutBlockHeight

> **timeoutBlockHeight**: `number`
