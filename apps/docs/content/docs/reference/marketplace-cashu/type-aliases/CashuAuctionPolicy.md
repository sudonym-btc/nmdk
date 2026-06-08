---
title: "Type Alias: CashuAuctionPolicy"
description: "Type Alias: CashuAuctionPolicy in Marketplace Cashu Driver."
full: true
---

# Type Alias: CashuAuctionPolicy

> **CashuAuctionPolicy** = `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:303](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L303)

## Properties

### family

> **family**: `"auction"`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:307](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L307)

***

### id

> **id**: `"cashu:p2pk-auction-v1"`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:305](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L305)

***

### method

> **method**: `"cashu"`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:304](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L304)

***

### subject

> **subject**: `"bid"`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:306](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L306)

## Methods

### assets()

> **assets**(): [`CashuPaymentAsset`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAsset)[]

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:309](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L309)

#### Returns

[`CashuPaymentAsset`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAsset)[]

***

### discoverHighWatermark()

> **discoverHighWatermark**(`context`): `Promise`\<\{ `maxUsedIndex`: `number`; `nextUnusedIndex`: `number`; `policy`: `"cashu:p2pk-auction-v1"`; `recoveryActions`: `unknown`[]; `scannedFrom`: `number`; `scannedThrough`: `number`; `unusedWindow`: `number`; `usedIndexes`: `number`[]; \}\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:310](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L310)

#### Parameters

##### context

###### highWaterMark

`number`

###### now?

`number`

###### seed

`string`

###### unusedWindow

`number`

#### Returns

`Promise`\<\{ `maxUsedIndex`: `number`; `nextUnusedIndex`: `number`; `policy`: `"cashu:p2pk-auction-v1"`; `recoveryActions`: `unknown`[]; `scannedFrom`: `number`; `scannedThrough`: `number`; `unusedWindow`: `number`; `usedIndexes`: `number`[]; \}\>

***

### pay()

> **pay**(`intent`): `AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-cashu/type-aliases/GenericPolicyPaymentState)\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:337](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L337)

#### Parameters

##### intent

[`GenericPaymentIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIntent)

#### Returns

`AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-cashu/type-aliases/GenericPolicyPaymentState)\>

***

### policies()

> **policies**(): [`CashuAuctionPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuAuctionPaymentPolicy)[]

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:308](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L308)

#### Returns

[`CashuAuctionPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuAuctionPaymentPolicy)[]

***

### recover()

> **recover**(`payment`): `AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState)\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:336](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L336)

#### Parameters

##### payment

[`GenericPaymentRecoveryItem`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState)\>

***

### recyclePayment()

> **recyclePayment**(`intent`): `Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementResult)\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:343](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L343)

#### Parameters

##### intent

[`GenericAuctionSettlementIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementIntent) & `object`

#### Returns

`Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementResult)\>

***

### refundPayment()

> **refundPayment**(`intent`): `Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementResult)\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:339](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L339)

#### Parameters

##### intent

[`GenericAuctionSettlementIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementIntent) & `object`

#### Returns

`Promise`\<[`GenericAuctionSettlementResult`](/docs/reference/marketplace-cashu/type-aliases/GenericAuctionSettlementResult)\>

***

### startup()

> **startup**(`context`): `Promise`\<\{ `data`: `Record`\<`string`, `unknown`\>; `policy`: `"cashu:p2pk-auction-v1"`; \}\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:325](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L325)

#### Parameters

##### context

###### discovery

`unknown`

###### highWaterMark

`number`

###### nextUnusedIndex

`number`

###### now?

`number`

###### seed

`string`

###### unusedWindow

`number`

#### Returns

`Promise`\<\{ `data`: `Record`\<`string`, `unknown`\>; `policy`: `"cashu:p2pk-auction-v1"`; \}\>

***

### state()

> **state**(): [`CashuEscrowPolicyState`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPolicyState)

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:348](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L348)

#### Returns

[`CashuEscrowPolicyState`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPolicyState)

***

### validatePayment()

> **validatePayment**(`request`): `Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult)\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:338](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L338)

#### Parameters

##### request

[`GenericPaymentValidationRequest`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationRequest)

#### Returns

`Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult)\>
