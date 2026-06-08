---
title: "Type Alias: EvmResolvedPaymentIntent"
description: "Type Alias: EvmResolvedPaymentIntent in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmResolvedPaymentIntent

> **EvmResolvedPaymentIntent** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:324](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L324)

## Properties

### accountIndex

> **accountIndex**: `number`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:328](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L328)

***

### amount

> **amount**: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:340](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L340)

***

### arbiterAddress

> **arbiterAddress**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:339](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L339)

***

### asset

> **asset**: [`EvmPaymentAsset`](/docs/reference/marketplace-evm/type-aliases/EvmPaymentAsset)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:331](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L331)

***

### chain

> **chain**: [`ResolvedEvmMarketplaceChainConfig`](/docs/reference/marketplace-evm/type-aliases/ResolvedEvmMarketplaceChainConfig)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:330](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L330)

***

### contractAddress

> **contractAddress**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:332](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L332)

***

### contractBytecodeHash

> **contractBytecodeHash**: [`EvmHex`](/docs/reference/marketplace-evm/type-aliases/EvmHex)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:333](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L333)

***

### description

> **description**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:344](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L344)

***

### fee

> **fee**: [`EvmAmount`](/docs/reference/marketplace-evm/type-aliases/EvmAmount)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:341](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L341)

***

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `unknown`\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:343](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L343)

***

### policy

> **policy**: `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:334](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L334)

#### id

> **id**: `string`

#### type

> **type**: `string`

***

### seed

> **seed**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:329](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L329)

***

### sellerAddress

> **sellerAddress**: [`EvmAddress`](/docs/reference/marketplace-evm/type-aliases/EvmAddress)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:338](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L338)

***

### settlementId

> **settlementId**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:326](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L326)

***

### subject

> **subject**: `"order"` \| `"bid"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:327](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L327)

***

### tradeId

> **tradeId**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:325](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L325)

***

### unlockAt

> **unlockAt**: `bigint`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:342](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L342)
