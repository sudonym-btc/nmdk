---
title: "Type Alias: MarketplaceAuctionPaymentSettlementIntent"
description: "Type Alias: MarketplaceAuctionPaymentSettlementIntent in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAuctionPaymentSettlementIntent

> **MarketplaceAuctionPaymentSettlementIntent** = `MarketplaceDriverAuctionSettlementIntent`\<[`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence), [`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest)\[`"expected"`\]\> & `object`

Defined in: [runtime-types.ts:402](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L402)

## Type Declaration

### bid

> **bid**: [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

### expected

> **expected**: [`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest)\[`"expected"`\]

### payment

> **payment**: [`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment)

### proof

> **proof**: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence)

### recycleArgs?

> `optional` **recycleArgs?**: `unknown`

### refundPercent?

> `optional` **refundPercent?**: `number`

### targetOrderGroupId?

> `optional` **targetOrderGroupId?**: `string`

### targetTradeId?

> `optional` **targetTradeId?**: `string`

### targetUnlockAt?

> `optional` **targetUnlockAt?**: `number`

### validation

> **validation**: [`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)

### winner?

> `optional` **winner?**: [`MarketplaceAuctionBidValidation`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidValidation)
