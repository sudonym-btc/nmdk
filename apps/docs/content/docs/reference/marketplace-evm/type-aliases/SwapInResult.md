---
title: "Type Alias: SwapInResult"
description: "Type Alias: SwapInResult in Marketplace EVM Driver."
full: true
---

# Type Alias: SwapInResult

> **SwapInResult** = \{ `amount?`: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount); `claimAssetAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `invoice`: `string`; `limits?`: [`SwapAmountLimits`](/docs/reference/marketplace-evm/type-aliases/SwapAmountLimits); `lockupAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `onchainAmount?`: `number`; `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `postClaimCalls?`: [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]; `preimage?`: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex); `preimageHash`: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex); `refundAddress?`: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress); `swapId`: `string`; `timeoutBlockHeight`: `number`; `type`: `"external_payment_required"`; \} \| \{ `operation`: [`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord); `txHash`: `string`; `type`: `"completed"`; \}

Defined in: [dependencies/marketplace-evm-ts/src/swaps/types.ts:53](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/types.ts#L53)
