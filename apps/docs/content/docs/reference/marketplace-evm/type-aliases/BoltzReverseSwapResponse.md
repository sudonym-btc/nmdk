---
title: "Type Alias: BoltzReverseSwapResponse"
description: "Type Alias: BoltzReverseSwapResponse in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzReverseSwapResponse

> **BoltzReverseSwapResponse** = `Omit`\<`OpenApiReverseResponse`, `"lockupAddress"` \| `"refundAddress"` \| `"timeoutBlockHeight"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:45](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/boltz/types.ts#L45)

## Type Declaration

### lockupAddress?

> `optional` **lockupAddress?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### refundAddress?

> `optional` **refundAddress?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### timeoutBlockHeight

> **timeoutBlockHeight**: `number`
