---
title: "Type Alias: MarketplaceAuctionPaymentSettlementIntent"
description: "Type Alias: MarketplaceAuctionPaymentSettlementIntent in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAuctionPaymentSettlementIntent

> **MarketplaceAuctionPaymentSettlementIntent** = `MarketplaceDriverAuctionSettlementIntent`\<[`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence), [`MarketplacePaymentValidationExpected`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationExpected)\> & `object`

Defined in: [nostr-tools/marketplace/runtime-types.ts:468](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L468)

## Type Declaration

### bid

> **bid**: [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

### expected?

> `optional` **expected?**: [`MarketplacePaymentValidationExpected`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationExpected)

### payment

> **payment**: [`ParsedPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPayment)

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
