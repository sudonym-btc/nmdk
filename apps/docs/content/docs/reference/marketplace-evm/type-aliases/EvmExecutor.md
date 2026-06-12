---
title: "Type Alias: EvmExecutor"
description: "Type Alias: EvmExecutor in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmExecutor

> **EvmExecutor** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:78](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L78)

## Methods

### execute()

> **execute**(`calls`, `options`): `Promise`\<[`EvmExecutionResult`](/docs/reference/marketplace-evm/type-aliases/EvmExecutionResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:80](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L80)

#### Parameters

##### calls

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

##### options

[`EvmExecutionOptions`](/docs/reference/marketplace-evm/type-aliases/EvmExecutionOptions)

#### Returns

`Promise`\<[`EvmExecutionResult`](/docs/reference/marketplace-evm/type-aliases/EvmExecutionResult)\>

***

### getAddress()

> **getAddress**(`chainId`): `Promise`\<`` `0x${string}` ``\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:79](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L79)

#### Parameters

##### chainId

`number`

#### Returns

`Promise`\<`` `0x${string}` ``\>
