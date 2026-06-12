---
title: "Class: CashuPaymentAmountLimitError"
description: "Class: CashuPaymentAmountLimitError in Marketplace Cashu Driver."
full: true
---

# Class: CashuPaymentAmountLimitError

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:147](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L147)

## Extends

- `Error`

## Constructors

### Constructor

> **new CashuPaymentAmountLimitError**(`reason`, `limits`): `CashuPaymentAmountLimitError`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:151](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L151)

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

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:149](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L149)

***

### limits

> `readonly` **limits**: [`CashuPaymentAmountLimits`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAmountLimits)

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:153](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L153)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

`Error.message`

***

### name

> `readonly` **name**: `"CashuPaymentAmountLimitError"` = `'CashuPaymentAmountLimitError'`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:148](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L148)

#### Overrides

`Error.name`

***

### reason

> `readonly` **reason**: `LimitReason`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:152](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L152)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.stack`
