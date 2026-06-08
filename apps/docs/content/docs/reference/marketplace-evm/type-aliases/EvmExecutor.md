---
title: "Type Alias: EvmExecutor"
description: "Type Alias: EvmExecutor in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmExecutor

> **EvmExecutor** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:77](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/types.ts#L77)

## Methods

### execute()

> **execute**(`calls`, `options`): `Promise`\<[`EvmExecutionResult`](/docs/reference/marketplace-evm/type-aliases/EvmExecutionResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:79](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/types.ts#L79)

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

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:78](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/types.ts#L78)

#### Parameters

##### chainId

`number`

#### Returns

`Promise`\<`` `0x${string}` ``\>
