---
title: "Type Alias: EvmOperationStore"
description: "Type Alias: EvmOperationStore in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmOperationStore

> **EvmOperationStore** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:118](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L118)

## Methods

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:122](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L122)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord) \| `null`\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:119](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L119)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord) \| `null`\>

***

### list()

> **list**(`query?`): `Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:121](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L121)

#### Parameters

##### query?

[`EvmOperationQuery`](/docs/reference/marketplace-evm/type-aliases/EvmOperationQuery)

#### Returns

`Promise`\<[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)[]\>

***

### put()

> **put**(`record`): `Promise`\<`void`\>

Defined in: [dependencies/marketplace-evm-ts/src/types.ts:120](https://github.com/sudonym-btc/marketplace-evm-ts/blob/efd7a64865c387ee7d1b6acdbef8115722f177b4/src/types.ts#L120)

#### Parameters

##### record

[`EvmOperationRecord`](/docs/reference/marketplace-evm/type-aliases/EvmOperationRecord)

#### Returns

`Promise`\<`void`\>
