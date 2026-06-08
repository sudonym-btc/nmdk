---
title: "Class: CashuPaymentAmountLimitError"
description: "Class: CashuPaymentAmountLimitError in Marketplace Cashu Driver."
full: true
---

# Class: CashuPaymentAmountLimitError

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:114](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L114)

## Extends

- `Error`

## Constructors

### Constructor

> **new CashuPaymentAmountLimitError**(`reason`, `limits`): `CashuPaymentAmountLimitError`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:118](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L118)

#### Parameters

##### reason

`LimitReason`

##### limits

[`CashuPaymentAmountLimits`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAmountLimits)

#### Returns

`CashuPaymentAmountLimitError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

`Error.cause`

***

### code

> `readonly` **code**: `"PAYMENT_AMOUNT_LIMIT"` = `'PAYMENT_AMOUNT_LIMIT'`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:116](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L116)

***

### limits

> `readonly` **limits**: [`CashuPaymentAmountLimits`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAmountLimits)

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:120](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L120)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

`Error.message`

***

### name

> `readonly` **name**: `"CashuPaymentAmountLimitError"` = `'CashuPaymentAmountLimitError'`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:115](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L115)

#### Overrides

`Error.name`

***

### reason

> `readonly` **reason**: `LimitReason`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:119](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L119)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.stack`
