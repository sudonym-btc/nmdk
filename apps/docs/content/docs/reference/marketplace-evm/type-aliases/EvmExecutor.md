---
title: "Type Alias: EvmExecutor"
description: "Type Alias: EvmExecutor in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmExecutor

> **EvmExecutor** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:92](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/types.ts#L92)

## Methods

### execute()

> **execute**(`calls`, `options`): `Promise`\<[`EvmExecutionResult`](/docs/reference/marketplace-evm/type-aliases/EvmExecutionResult)\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:94](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/types.ts#L94)

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

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:93](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/types.ts#L93)

#### Parameters

##### chainId

`number`

#### Returns

`Promise`\<`` `0x${string}` ``\>
