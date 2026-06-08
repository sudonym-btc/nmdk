---
title: "Type Alias: CashuEscrowPolicy"
description: "Type Alias: CashuEscrowPolicy in Marketplace Cashu Driver."
full: true
---

# Type Alias: CashuEscrowPolicy

> **CashuEscrowPolicy** = `object`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:264](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L264)

## Properties

### family

> **family**: `"escrow"`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:268](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L268)

***

### id

> **id**: `"cashu:p2pk-escrow-v1"`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:266](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L266)

***

### method

> **method**: `"cashu"`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:265](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L265)

***

### subject

> **subject**: `"order"`

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:267](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L267)

## Methods

### assets()

> **assets**(): [`CashuPaymentAsset`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAsset)[]

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:270](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L270)

#### Returns

[`CashuPaymentAsset`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAsset)[]

***

### discoverHighWatermark()

> **discoverHighWatermark**(`context`): `Promise`\<\{ `maxUsedIndex`: `number`; `nextUnusedIndex`: `number`; `policy`: `"cashu:p2pk-escrow-v1"`; `recoveryActions`: `unknown`[]; `scannedFrom`: `number`; `scannedThrough`: `number`; `unusedWindow`: `number`; `usedIndexes`: `number`[]; \}\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:271](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L271)

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

`Promise`\<\{ `maxUsedIndex`: `number`; `nextUnusedIndex`: `number`; `policy`: `"cashu:p2pk-escrow-v1"`; `recoveryActions`: `unknown`[]; `scannedFrom`: `number`; `scannedThrough`: `number`; `unusedWindow`: `number`; `usedIndexes`: `number`[]; \}\>

***

### pay()

> **pay**(`intent`): `AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-cashu/type-aliases/GenericPolicyPaymentState)\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:298](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L298)

#### Parameters

##### intent

[`GenericPaymentIntent`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentIntent)

#### Returns

`AsyncIterable`\<[`GenericPolicyPaymentState`](/docs/reference/marketplace-cashu/type-aliases/GenericPolicyPaymentState)\>

***

### policies()

> **policies**(): [`CashuEscrowPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPaymentPolicy)[]

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:269](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L269)

#### Returns

[`CashuEscrowPaymentPolicy`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPaymentPolicy)[]

***

### recover()

> **recover**(`payment`): `AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState)\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:297](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L297)

#### Parameters

##### payment

[`GenericPaymentRecoveryItem`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`GenericPaymentRecoveryState`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentRecoveryState)\>

***

### startup()

> **startup**(`context`): `Promise`\<\{ `data`: `Record`\<`string`, `unknown`\>; `policy`: `"cashu:p2pk-escrow-v1"`; \}\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:286](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L286)

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

`Promise`\<\{ `data`: `Record`\<`string`, `unknown`\>; `policy`: `"cashu:p2pk-escrow-v1"`; \}\>

***

### state()

> **state**(): [`CashuEscrowPolicyState`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPolicyState)

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:300](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L300)

#### Returns

[`CashuEscrowPolicyState`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowPolicyState)

***

### validatePayment()

> **validatePayment**(`request`): `Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult)\>

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:299](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L299)

#### Parameters

##### request

[`GenericPaymentValidationRequest`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationRequest)

#### Returns

`Promise`\<[`GenericPaymentValidationResult`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentValidationResult)\>
