---
title: "Type Alias: SwapOutResult"
description: "Type Alias: SwapOutResult in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapOutResult

> **SwapOutResult** = \{ `amount?`: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount); `description?`: `string`; `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `type`: `"external_invoice_required"`; \} \| \{ `claimAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `expectedAmount?`: `number`; `limits?`: [`SwapAmountLimits`](/docs/reference/marketplace-evm/type-aliases/SwapAmountLimits); `lockupAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `swapId`: `string`; `timeoutBlockHeight`: `number`; `type`: `"awaiting_resolution"`; \} \| \{ `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `preimage?`: `string`; `type`: `"completed"`; \}

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:76](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/types.ts#L76)
