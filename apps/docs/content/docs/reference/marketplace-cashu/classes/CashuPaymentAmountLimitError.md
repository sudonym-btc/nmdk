---
title: "Class: CashuPaymentAmountLimitError"
description: "Class: CashuPaymentAmountLimitError in Marketplace Cashu Driver."
full: true
---

# Class: CashuPaymentAmountLimitError

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:232](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L232)

## Extends

- `Error`

## Constructors

### Constructor

> **new CashuPaymentAmountLimitError**(`reason`, `limits`): `CashuPaymentAmountLimitError`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:236](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L236)

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

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:234](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L234)

***

### limits

> `readonly` **limits**: [`CashuPaymentAmountLimits`](/docs/reference/marketplace-cashu/type-aliases/CashuPaymentAmountLimits)

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:238](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L238)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

`Error.message`

***

### name

> `readonly` **name**: `"CashuPaymentAmountLimitError"` = `'CashuPaymentAmountLimitError'`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:233](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L233)

#### Overrides

`Error.name`

***

### reason

> `readonly` **reason**: `LimitReason`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:237](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L237)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.stack`
