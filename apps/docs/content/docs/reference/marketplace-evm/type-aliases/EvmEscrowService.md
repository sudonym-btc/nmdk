---
title: "Type Alias: EvmEscrowService"
description: "Type Alias: EvmEscrowService in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmEscrowService

> **EvmEscrowService** = [`EvmEscrowClient`](/docs/reference/marketplace-evm/type-aliases/EvmEscrowClient) & `object`

Defined in: [dependencies/marketplace-evm-ts/src/escrow/types.ts:96](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/escrow/types.ts#L96)

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
