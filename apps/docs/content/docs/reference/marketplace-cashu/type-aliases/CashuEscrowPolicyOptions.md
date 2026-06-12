---
title: "Type Alias: CashuEscrowPolicyOptions"
description: "Type Alias: CashuEscrowPolicyOptions in Marketplace Cashu Driver."
full: true
---

# Type Alias: CashuEscrowPolicyOptions

> **CashuEscrowPolicyOptions** = `object`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:51](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L51)

## Properties

### appId?

> `optional` **appId?**: `string`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:54](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L54)

***

### logger?

> `optional` **logger?**: `MarketplaceDriverLogger`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:59](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L59)

***

### mints

> **mints**: [`CashuMintConfig`](/docs/reference/marketplace-cashu/type-aliases/CashuMintConfig)[]

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:52](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L52)

***

### now?

> `optional` **now?**: () => `number`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:58](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L58)

#### Returns

`number`

***

### quotePaymentTimeoutMs?

> `optional` **quotePaymentTimeoutMs?**: `number`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:56](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L56)

***

### quotePollIntervalMs?

> `optional` **quotePollIntervalMs?**: `number`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:55](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L55)

***

### storage

> **storage**: [`CashuEscrowStorage`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowStorage)

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:53](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L53)

***

### walletFactory?

> `optional` **walletFactory?**: (`mint`) => `Wallet`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:57](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/11af907cbdd93ca36b6b25f68fcccd38b5d889df/src/marketplace/escrowPolicy.ts#L57)

#### Parameters

##### mint

[`CashuMintConfig`](/docs/reference/marketplace-cashu/type-aliases/CashuMintConfig)

#### Returns

`Wallet`
