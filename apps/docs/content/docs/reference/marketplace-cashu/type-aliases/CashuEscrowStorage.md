---
title: "Type Alias: CashuEscrowStorage"
description: "Type Alias: CashuEscrowStorage in Marketplace Cashu Driver."
full: true
---

# Type Alias: CashuEscrowStorage

> **CashuEscrowStorage** = `object`

Defined in: [dependencies/marketplace-cashu-ts/src/storage.ts:35](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/storage.ts#L35)

## Methods

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [dependencies/marketplace-cashu-ts/src/storage.ts:39](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/storage.ts#L39)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`CashuEscrowOperation`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowOperation) \| `null`\>

Defined in: [dependencies/marketplace-cashu-ts/src/storage.ts:36](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/storage.ts#L36)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`CashuEscrowOperation`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowOperation) \| `null`\>

***

### list()

> **list**(`query?`): `Promise`\<[`CashuEscrowOperation`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowOperation)[]\>

Defined in: [dependencies/marketplace-cashu-ts/src/storage.ts:38](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/storage.ts#L38)

#### Parameters

##### query?

[`CashuEscrowOperationQuery`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowOperationQuery)

#### Returns

`Promise`\<[`CashuEscrowOperation`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowOperation)[]\>

***

### put()

> **put**(`record`): `Promise`\<`void`\>

Defined in: [dependencies/marketplace-cashu-ts/src/storage.ts:37](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/storage.ts#L37)

#### Parameters

##### record

[`CashuEscrowOperation`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowOperation)

#### Returns

`Promise`\<`void`\>
