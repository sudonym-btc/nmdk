---
title: "Type Alias: GenericPaymentValidationRequest"
description: "Type Alias: GenericPaymentValidationRequest in Marketplace Cashu Driver."
full: true
---

# Type Alias: GenericPaymentValidationRequest

> **GenericPaymentValidationRequest** = `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:170](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L170)

## Properties

### expected

> **expected**: `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:173](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L173)

#### amount?

> `optional` **amount?**: `object`

##### amount.decimals

> **decimals**: `number`

##### amount.denomination

> **denomination**: `string`

##### amount.value

> **value**: `string`

#### asset?

> `optional` **asset?**: `object`

##### asset.assetId?

> `optional` **assetId?**: `string`

##### asset.decimals?

> `optional` **decimals?**: `number`

##### asset.denomination?

> `optional` **denomination?**: `string`

#### contract?

> `optional` **contract?**: `object`

##### contract.address?

> `optional` **address?**: `string`

##### contract.bytecodeHash?

> `optional` **bytecodeHash?**: `string`

##### contract.chainId?

> `optional` **chainId?**: `number`

##### contract.params?

> `optional` **params?**: `Record`\<`string`, `unknown`\>

#### fee?

> `optional` **fee?**: `object`

##### fee.decimals

> **decimals**: `number`

##### fee.denomination

> **denomination**: `string`

##### fee.value

> **value**: `string`

#### participants?

> `optional` **participants?**: `object`

##### participants.buyer?

> `optional` **buyer?**: [`GenericPaymentIdentity`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIdentity)

##### participants.escrow?

> `optional` **escrow?**: [`GenericPaymentIdentity`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIdentity)

##### participants.seller?

> `optional` **seller?**: [`GenericPaymentIdentity`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIdentity)

#### settlementId

> **settlementId**: `string`

#### tradeId?

> `optional` **tradeId?**: `string`

***

### method

> **method**: `string`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:171](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L171)

***

### now?

> `optional` **now?**: `number`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:203](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L203)

***

### proof

> **proof**: [`GenericPaymentProof`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentProof)

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:172](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L172)
