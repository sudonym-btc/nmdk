---
title: "Type Alias: EvmPayRequest"
description: "Type Alias: EvmPayRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmPayRequest

> **EvmPayRequest** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:189](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L189)

## Properties

### chains

> **chains**: [`ResolvedEvmMarketplaceChainConfig`](/docs/reference/marketplace-evm/type-aliases/ResolvedEvmMarketplaceChainConfig)[]

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:190](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L190)

***

### intent

> **intent**: [`GenericPaymentIntent`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIntent)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:192](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L192)

***

### logger?

> `optional` **logger?**: `MarketplaceDriverLogger`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:195](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L195)

***

### operationStore

> **operationStore**: [`EvmOperationStore`](/docs/reference/marketplace-evm/type-aliases/EvmOperationStore)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:191](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L191)

***

### state

> **state**: [`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:193](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L193)

## Methods

### setState()

> **setState**(`state`): `void`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:194](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/marketplace/types.ts#L194)

#### Parameters

##### state

[`EvmMarketplacePolicyState`](/docs/reference/marketplace-evm/type-aliases/EvmMarketplacePolicyState)

#### Returns

`void`
