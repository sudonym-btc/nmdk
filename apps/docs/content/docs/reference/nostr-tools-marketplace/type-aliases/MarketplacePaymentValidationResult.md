---
title: "Type Alias: MarketplacePaymentValidationResult"
description: "Type Alias: MarketplacePaymentValidationResult in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentValidationResult

> **MarketplacePaymentValidationResult** = `MarketplaceDriverValidationResult` & `object`

Defined in: [nostr-tools/marketplace/payment-validation.ts:47](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-validation.ts#L47)

## Type Declaration

### amount?

> `optional` **amount?**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

### amountMatched?

> `optional` **amountMatched?**: `boolean`

### arbiterMatched?

> `optional` **arbiterMatched?**: `boolean`

### assetMatched?

> `optional` **assetMatched?**: `boolean`

### confirmations?

> `optional` **confirmations?**: `number`

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

### driver

> **driver**: `string`

### error?

> `optional` **error?**: `string`

### orderEventId?

> `optional` **orderEventId?**: `string`

### proofEventId?

> `optional` **proofEventId?**: `string`

### recipientMatched?

> `optional` **recipientMatched?**: `boolean`

### status

> **status**: [`MarketplacePaymentValidationStatus`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationStatus)

### terms?

> `optional` **terms?**: [`MarketplaceValidatedPaymentTerms`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceValidatedPaymentTerms)
