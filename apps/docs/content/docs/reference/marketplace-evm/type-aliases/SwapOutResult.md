---
title: "Type Alias: SwapOutResult"
description: "Type Alias: SwapOutResult in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapOutResult

> **SwapOutResult** = \{ `amount?`: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount); `description?`: `string`; `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `type`: `"external_invoice_required"`; \} \| \{ `claimAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `expectedAmount?`: `number`; `limits?`: [`SwapAmountLimits`](/docs/reference/marketplace-evm/type-aliases/SwapAmountLimits); `lockupAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `swapId`: `string`; `timeoutBlockHeight`: `number`; `type`: `"awaiting_resolution"`; \} \| \{ `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `preimage?`: `string`; `type`: `"completed"`; \}

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:67](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/swaps/types.ts#L67)
