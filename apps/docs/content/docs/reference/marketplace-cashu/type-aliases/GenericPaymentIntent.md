---
title: "Type Alias: GenericPaymentIntent"
description: "Type Alias: GenericPaymentIntent in Marketplace Cashu Driver."
full: true
---

# Type Alias: GenericPaymentIntent

> **GenericPaymentIntent** = `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:62](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L62)

## Properties

### accountIndex

> **accountIndex**: `number`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:67](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L67)

***

### amount

> **amount**: `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:69](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L69)

#### decimals

> **decimals**: `number`

#### denomination

> **denomination**: `string`

#### value

> **value**: `string`

***

### asset

> **asset**: `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:79](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L79)

#### assetId

> **assetId**: `string`

#### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

#### decimals

> **decimals**: `number`

#### denomination

> **denomination**: `string`

#### method

> **method**: `string`

***

### contract

> **contract**: `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:93](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L93)

#### params

> **params**: `Record`\<`string`, `unknown`\>

#### type

> **type**: `string`

***

### fee

> **fee**: `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:74](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L74)

#### decimals

> **decimals**: `number`

#### denomination

> **denomination**: `string`

#### value

> **value**: `string`

***

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `unknown`\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:103](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L103)

***

### method

> **method**: `string`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:63](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L63)

***

### participants

> **participants**: `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:97](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L97)

#### buyer?

> `optional` **buyer?**: [`GenericPaymentIdentity`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIdentity)

#### escrow

> **escrow**: [`GenericPaymentIdentity`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIdentity)

#### seller

> **seller**: [`GenericPaymentIdentity`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIdentity)

***

### policy

> **policy**: `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:86](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L86)

#### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

#### hash?

> `optional` **hash?**: `string`

#### id

> **id**: `string`

#### method

> **method**: `string`

#### type?

> `optional` **type?**: `string`

***

### seed?

> `optional` **seed?**: `string`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:68](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L68)

***

### settlementId

> **settlementId**: `string`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:66](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L66)

***

### subject

> **subject**: `"order"` \| `"bid"`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:64](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L64)

***

### tradeId

> **tradeId**: `string`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:65](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L65)

***

### unlockAt

> **unlockAt**: `number`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:102](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L102)
