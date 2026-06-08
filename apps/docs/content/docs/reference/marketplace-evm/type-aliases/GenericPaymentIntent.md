---
title: "Type Alias: GenericPaymentIntent"
description: "Type Alias: GenericPaymentIntent in Marketplace EVM Driver."
full: true
---

# Type Alias: GenericPaymentIntent

> **GenericPaymentIntent** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:76](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L76)

## Properties

### accountIndex

> **accountIndex**: `number`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:81](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L81)

***

### amount

> **amount**: [`GenericAmount`](/docs/reference/marketplace-evm/type-aliases/GenericAmount)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:83](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L83)

***

### asset

> **asset**: `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:85](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L85)

#### assetAddress?

> `optional` **assetAddress?**: `string`

#### assetId

> **assetId**: `string`

#### chainId?

> `optional` **chainId?**: `number`

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

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:103](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L103)

#### address?

> `optional` **address?**: `string`

#### bytecodeHash?

> `optional` **bytecodeHash?**: `string`

#### chainId?

> `optional` **chainId?**: `number`

#### params

> **params**: `Record`\<`string`, `unknown`\>

#### type

> **type**: `string`

***

### fee

> **fee**: [`GenericAmount`](/docs/reference/marketplace-evm/type-aliases/GenericAmount)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:84](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L84)

***

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `unknown`\>

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:116](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L116)

***

### method

> **method**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:77](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L77)

***

### participants

> **participants**: `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:110](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L110)

#### buyer?

> `optional` **buyer?**: [`GenericPaymentIdentity`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIdentity)

#### escrow

> **escrow**: [`GenericPaymentIdentity`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIdentity)

#### seller

> **seller**: [`GenericPaymentIdentity`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIdentity)

***

### policy

> **policy**: `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:94](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L94)

#### chainId?

> `optional` **chainId?**: `number`

#### contractAddress?

> `optional` **contractAddress?**: `string`

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

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:82](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L82)

***

### settlementId

> **settlementId**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:80](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L80)

***

### subject

> **subject**: `"order"` \| `"bid"`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:78](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L78)

***

### tradeId

> **tradeId**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:79](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L79)

***

### unlockAt

> **unlockAt**: `number`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:115](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L115)
