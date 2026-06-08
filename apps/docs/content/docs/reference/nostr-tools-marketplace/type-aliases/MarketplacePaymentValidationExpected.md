---
title: "Type Alias: MarketplacePaymentValidationExpected"
description: "Type Alias: MarketplacePaymentValidationExpected in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentValidationExpected

> **MarketplacePaymentValidationExpected** = `object`

Defined in: [payment-validation.ts:5](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L5)

## Properties

### amount?

> `optional` **amount?**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

Defined in: [payment-validation.ts:9](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L9)

***

### asset?

> `optional` **asset?**: `object`

Defined in: [payment-validation.ts:10](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L10)

#### assetId?

> `optional` **assetId?**: `string`

#### decimals?

> `optional` **decimals?**: `number`

#### denomination?

> `optional` **denomination?**: `string`

***

### contract?

> `optional` **contract?**: `object`

Defined in: [payment-validation.ts:15](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L15)

#### address?

> `optional` **address?**: `string`

#### bytecodeHash?

> `optional` **bytecodeHash?**: `string`

#### chainId?

> `optional` **chainId?**: `number`

#### params?

> `optional` **params?**: `Record`\<`string`, `unknown`\>

#### type?

> `optional` **type?**: `string`

***

### fee?

> `optional` **fee?**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

Defined in: [payment-validation.ts:27](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L27)

***

### listingAnchor

> **listingAnchor**: `string`

Defined in: [payment-validation.ts:8](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L8)

***

### participants?

> `optional` **participants?**: `object`

Defined in: [payment-validation.ts:22](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L22)

#### buyer?

> `optional` **buyer?**: `object`

##### buyer.address?

> `optional` **address?**: `string`

##### buyer.pubkey?

> `optional` **pubkey?**: `string`

#### escrow?

> `optional` **escrow?**: `object`

##### escrow.address?

> `optional` **address?**: `string`

##### escrow.pubkey?

> `optional` **pubkey?**: `string`

#### seller?

> `optional` **seller?**: `object`

##### seller.address?

> `optional` **address?**: `string`

##### seller.pubkey?

> `optional` **pubkey?**: `string`

***

### settlementId

> **settlementId**: `string`

Defined in: [payment-validation.ts:6](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L6)

***

### tradeId

> **tradeId**: `string`

Defined in: [payment-validation.ts:7](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/payment-validation.ts#L7)
