---
title: "Type Alias: CashuEscrowPolicyOptions"
description: "Type Alias: CashuEscrowPolicyOptions in Marketplace Cashu Driver."
full: true
---

# Type Alias: CashuEscrowPolicyOptions

> **CashuEscrowPolicyOptions** = `object`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:64](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L64)

## Properties

### appId?

> `optional` **appId?**: `string`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:67](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L67)

***

### logger?

> `optional` **logger?**: `MarketplaceDriverLogger`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:72](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L72)

***

### mints

> **mints**: [`CashuMintConfig`](/docs/reference/marketplace-cashu/type-aliases/CashuMintConfig)[]

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:65](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L65)

***

### now?

> `optional` **now?**: () => `number`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:71](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L71)

#### Returns

`number`

***

### quotePaymentTimeoutMs?

> `optional` **quotePaymentTimeoutMs?**: `number`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:69](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L69)

***

### quotePollIntervalMs?

> `optional` **quotePollIntervalMs?**: `number`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:68](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L68)

***

### storage

> **storage**: [`CashuEscrowStorage`](/docs/reference/marketplace-cashu/type-aliases/CashuEscrowStorage)

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:66](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L66)

***

### walletFactory?

> `optional` **walletFactory?**: (`mint`) => `Wallet`

Defined in: [dependencies/marketplace-cashu-ts/src/marketplace/escrowPolicy.ts:70](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/9b0626bc4cb94e77a666457a4e2cbb0b0fb20bcc/src/marketplace/escrowPolicy.ts#L70)

#### Parameters

##### mint

[`CashuMintConfig`](/docs/reference/marketplace-cashu/type-aliases/CashuMintConfig)

#### Returns

`Wallet`
