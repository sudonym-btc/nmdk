---
title: "Type Alias: GenericPaymentValidationRequest"
description: "Type Alias: GenericPaymentValidationRequest in Marketplace EVM Driver."
full: true
---

# Type Alias: GenericPaymentValidationRequest

> **GenericPaymentValidationRequest** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:124](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L124)

## Properties

### expected

> **expected**: `object`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:127](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L127)

#### amount?

> `optional` **amount?**: [`GenericAmount`](/docs/reference/marketplace-evm/type-aliases/GenericAmount)

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

> `optional` **fee?**: [`GenericAmount`](/docs/reference/marketplace-evm/type-aliases/GenericAmount)

#### participants?

> `optional` **participants?**: `object`

##### participants.buyer?

> `optional` **buyer?**: [`GenericPaymentIdentity`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIdentity)

##### participants.escrow?

> `optional` **escrow?**: [`GenericPaymentIdentity`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIdentity)

##### participants.seller?

> `optional` **seller?**: [`GenericPaymentIdentity`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentIdentity)

#### settlementId

> **settlementId**: `string`

#### tradeId?

> `optional` **tradeId?**: `string`

***

### method

> **method**: `string`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:125](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L125)

***

### now?

> `optional` **now?**: `number`

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:144](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L144)

***

### proof

> **proof**: [`GenericPaymentProof`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentProof)

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:126](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L126)
