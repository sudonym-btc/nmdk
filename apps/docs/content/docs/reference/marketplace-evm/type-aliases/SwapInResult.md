---
title: "Type Alias: SwapInResult"
description: "Type Alias: SwapInResult in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapInResult

> **SwapInResult** = \{ `amount?`: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount); `invoice`: `string`; `limits?`: [`SwapAmountLimits`](/docs/reference/marketplace-evm/type-aliases/SwapAmountLimits); `lockupAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `onchainAmount?`: `number`; `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `preimage?`: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex); `preimageHash`: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex); `refundAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `swapId`: `string`; `timeoutBlockHeight`: `number`; `type`: `"external_payment_required"`; \} \| \{ `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `txHash`: `string`; `type`: `"completed"`; \}

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:46](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/swaps/types.ts#L46)
