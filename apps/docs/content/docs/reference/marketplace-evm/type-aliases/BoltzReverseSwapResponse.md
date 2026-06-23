---
title: "Type Alias: BoltzReverseSwapResponse"
description: "Type Alias: BoltzReverseSwapResponse in Marketplace EVM Driver."
full: true
---

# Type Alias: BoltzReverseSwapResponse

> **BoltzReverseSwapResponse** = `Omit`\<`OpenApiReverseResponse`, `"lockupAddress"` \| `"refundAddress"` \| `"timeoutBlockHeight"`\> & `object`

Defined in: [dependencies/marketplace-evm-ts/src/boltz/types.ts:46](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/boltz/types.ts#L46)

## Type Declaration

### lockupAddress?

> `optional` **lockupAddress?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### refundAddress?

> `optional` **refundAddress?**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

### timeoutBlockHeight

> **timeoutBlockHeight**: `number`
