---
title: "Type Alias: EvmResolvedPaymentIntent"
description: "Type Alias: EvmResolvedPaymentIntent in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmResolvedPaymentIntent

> **EvmResolvedPaymentIntent** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:198](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L198)

## Properties

### accountIndex

> **accountIndex**: `number`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:202](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L202)

***

### amount

> **amount**: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:214](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L214)

***

### arbiterAddress

> **arbiterAddress**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:213](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L213)

***

### asset

> **asset**: [`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:205](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L205)

***

### chain

> **chain**: [`ResolvedEvmMarketplaceChainConfig`](/docs/reference/marketplace-evm/type-aliases/ResolvedEvmMarketplaceChainConfig)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:204](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L204)

***

### contractAddress

> **contractAddress**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:206](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L206)

***

### contractBytecodeHash

> **contractBytecodeHash**: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:207](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L207)

***

### description

> **description**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:218](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L218)

***

### fee

> **fee**: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:215](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L215)

***

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `unknown`\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:217](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L217)

***

### policy

> **policy**: `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:208](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L208)

#### id

> **id**: `string`

#### type

> **type**: `string`

***

### seed

> **seed**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:203](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L203)

***

### sellerAddress

> **sellerAddress**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:212](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L212)

***

### settlementId

> **settlementId**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:200](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L200)

***

### subject

> **subject**: `"order"` \| `"bid"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:201](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L201)

***

### tradeId

> **tradeId**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:199](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L199)

***

### unlockAt

> **unlockAt**: `bigint`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:216](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L216)
