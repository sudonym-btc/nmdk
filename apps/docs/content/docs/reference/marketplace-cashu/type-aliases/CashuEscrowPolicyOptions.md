---
title: "Type Alias: CashuEscrowPolicyOptions"
description: "Type Alias: CashuEscrowPolicyOptions in Marketplace Cashu Driver."
full: true
---

# Type Alias: CashuEscrowPolicyOptions

> **CashuEscrowPolicyOptions** = `object`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:47](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L47)

## Properties

### appId?

> `optional` **appId?**: `string`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:50](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L50)

***

### mints

> **mints**: [`CashuMintConfig`](/docs/reference/marketplace-cashu/type-aliases/CashuMintConfig)[]

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:48](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L48)

***

### now?

> `optional` **now?**: () => `number`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:54](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L54)

#### Returns

`number`

***

### quotePaymentTimeoutMs?

> `optional` **quotePaymentTimeoutMs?**: `number`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:52](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L52)

***

### quotePollIntervalMs?

> `optional` **quotePollIntervalMs?**: `number`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:51](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L51)

***

### storage

> **storage**: [`CashuEscrowStorage`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowStorage)

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:49](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L49)

***

### walletFactory?

> `optional` **walletFactory?**: (`mint`) => `Wallet`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:53](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/marketplace/escrowPolicy.ts#L53)

#### Parameters

##### mint

[`CashuMintConfig`](/docs/reference/marketplace-cashu/type-aliases/CashuMintConfig)

#### Returns

`Wallet`
