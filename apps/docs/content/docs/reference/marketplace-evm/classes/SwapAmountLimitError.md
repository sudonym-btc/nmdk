---
title: "Class: SwapAmountLimitError"
description: "Class: SwapAmountLimitError in Marketplace EVM Driver."
full: true
---

# Class: SwapAmountLimitError

Defined in: [dependencies/marketplace-evm-ts/src/swaps/service.ts:12](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/service.ts#L12)

## Extends

- `Error`

## Constructors

### Constructor

> **new SwapAmountLimitError**(`reason`, `limits`): `SwapAmountLimitError`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/service.ts:16](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/service.ts#L16)

#### Parameters

##### reason

`LimitReason`

##### limits

[`SwapAmountLimits`](/docs/reference/marketplace-evm/type-aliases/SwapAmountLimits)

#### Returns

`SwapAmountLimitError`

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

Defined in: [dependencies/marketplace-evm-ts/src/swaps/service.ts:14](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/service.ts#L14)

***

### limits

> `readonly` **limits**: [`SwapAmountLimits`](/docs/reference/marketplace-evm/type-aliases/SwapAmountLimits)

Defined in: [dependencies/marketplace-evm-ts/src/swaps/service.ts:18](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/service.ts#L18)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

`Error.message`

***

### name

> `readonly` **name**: `"SwapAmountLimitError"` = `'SwapAmountLimitError'`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/service.ts:13](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/service.ts#L13)

#### Overrides

`Error.name`

***

### reason

> `readonly` **reason**: `LimitReason`

Defined in: [dependencies/marketplace-evm-ts/src/swaps/service.ts:17](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/swaps/service.ts#L17)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.stack`
