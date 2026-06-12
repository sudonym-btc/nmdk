---
title: "Type Alias: MarketplacePaymentValidationResult"
description: "Type Alias: MarketplacePaymentValidationResult in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentValidationResult

> **MarketplacePaymentValidationResult** = `MarketplaceDriverValidationResult` & `object`

Defined in: [payment-validation.ts:44](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/payment-validation.ts#L44)

## Type Declaration

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

### error?

> `optional` **error?**: `string`

### method

> **method**: [`PaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethod)

### orderEventId?

> `optional` **orderEventId?**: `string`

### proofEventId?

> `optional` **proofEventId?**: `string`

### recipientMatched?

> `optional` **recipientMatched?**: `boolean`

### status

> **status**: [`MarketplacePaymentValidationStatus`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationStatus)
