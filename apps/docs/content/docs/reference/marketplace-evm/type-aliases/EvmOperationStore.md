---
title: "Type Alias: EvmOperationStore"
description: "Type Alias: EvmOperationStore in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmOperationStore

> **EvmOperationStore** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:132](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/types.ts#L132)

## Methods

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:136](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/types.ts#L136)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord) \| `null`\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:133](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/types.ts#L133)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord) \| `null`\>

***

### list()

> **list**(`query?`): `Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:135](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/types.ts#L135)

#### Parameters

##### query?

[`EvmOperationQuery`](/docs/reference/marketplace-evm/type-aliases/EvmOperationQuery)

#### Returns

`Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

***

### put()

> **put**(`record`): `Promise`\<`void`\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:134](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/types.ts#L134)

#### Parameters

##### record

[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)

#### Returns

`Promise`\<`void`\>
