---
title: "Type Alias: SwapInResult"
description: "Type Alias: SwapInResult in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapInResult

> **SwapInResult** = \{ `amount?`: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount); `invoice`: `string`; `limits?`: [`SwapAmountLimits`](/docs/reference/marketplace-evm/type-aliases/SwapAmountLimits); `lockupAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `onchainAmount?`: `number`; `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `preimage?`: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex); `preimageHash`: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex); `refundAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `swapId`: `string`; `timeoutBlockHeight`: `number`; `type`: `"external_payment_required"`; \} \| \{ `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `txHash`: `string`; `type`: `"completed"`; \}

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:47](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/swaps/types.ts#L47)
