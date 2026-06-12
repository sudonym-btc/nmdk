---
title: "Type Alias: MarketplacePaymentValidationExpected"
description: "Type Alias: MarketplacePaymentValidationExpected in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentValidationExpected

> **MarketplacePaymentValidationExpected** = `MarketplaceDriverValidationExpected` & `object`

Defined in: [payment-validation.ts:12](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/payment-validation.ts#L12)

## Type Declaration

### amount?

> `optional` **amount?**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

### asset?

> `optional` **asset?**: `object`

#### asset.assetId?

> `optional` **assetId?**: `string`

#### asset.decimals?

> `optional` **decimals?**: `number`

#### asset.denomination?

> `optional` **denomination?**: `string`

### contract?

> `optional` **contract?**: `object`

#### contract.address?

> `optional` **address?**: `string`

#### contract.bytecodeHash?

> `optional` **bytecodeHash?**: `string`

#### contract.chainId?

> `optional` **chainId?**: `number`

#### contract.params?

> `optional` **params?**: `Record`\<`string`, `unknown`\>

#### contract.type?

> `optional` **type?**: `string`

### fee?

> `optional` **fee?**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

### listingAnchor

> **listingAnchor**: `string`

### participants?

> `optional` **participants?**: `object`

#### participants.arbiter?

> `optional` **arbiter?**: `object`

#### participants.arbiter.address?

> `optional` **address?**: `string`

#### participants.arbiter.pubkey?

> `optional` **pubkey?**: `string`

#### participants.buyer?

> `optional` **buyer?**: `object`

#### participants.buyer.address?

> `optional` **address?**: `string`

#### participants.buyer.pubkey?

> `optional` **pubkey?**: `string`

#### participants.seller?

> `optional` **seller?**: `object`

#### participants.seller.address?

> `optional` **address?**: `string`

#### participants.seller.pubkey?

> `optional` **pubkey?**: `string`

### settlementId

> **settlementId**: `string`

### tradeId

> **tradeId**: `string`
