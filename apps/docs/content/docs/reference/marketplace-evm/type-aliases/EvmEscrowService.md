---
title: "Type Alias: EvmEscrowService"
description: "Type Alias: EvmEscrowService in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmEscrowService

> **EvmEscrowService** = [`EvmEscrowClient`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowClient) & `object`

Defined in: [dependencies/marketplace-evm-ts/src/escrow/types.ts:96](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/escrow/types.ts#L96)

## Type Declaration

### execute()

> **execute**(`calls`, `chainId`, `operationId?`): `Promise`\<\{ `txHash`: `string`; \}\>

#### Parameters

##### calls

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

##### chainId

`number`

##### operationId?

`string`

#### Returns

`Promise`\<\{ `txHash`: `string`; \}\>
