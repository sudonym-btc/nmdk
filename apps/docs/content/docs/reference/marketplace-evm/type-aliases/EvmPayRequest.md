---
title: "Type Alias: EvmPayRequest"
description: "Type Alias: EvmPayRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmPayRequest

> **EvmPayRequest** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:203](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/marketplace/types.ts#L203)

## Properties

### chains

> **chains**: [`ResolvedEvmMarketplaceChainConfig`](/docs/reference/marketplace-evm/type-aliases/ResolvedEvmMarketplaceChainConfig)[]

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:204](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/marketplace/types.ts#L204)

***

### intent

> **intent**: [`GenericPaymentIntent`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIntent)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:206](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/marketplace/types.ts#L206)

***

### logger?

> `optional` **logger?**: `MarketplaceDriverLogger`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:209](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/marketplace/types.ts#L209)

***

### operationStore

> **operationStore**: [`EvmOperationStore`](/docs/reference/marketplace-evm/type-aliases/EvmOperationStore)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:205](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/marketplace/types.ts#L205)

***

### state

> **state**: [`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:207](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/marketplace/types.ts#L207)

## Methods

### setState()

> **setState**(`state`): `void`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:208](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/marketplace/types.ts#L208)

#### Parameters

##### state

[`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

#### Returns

`void`
