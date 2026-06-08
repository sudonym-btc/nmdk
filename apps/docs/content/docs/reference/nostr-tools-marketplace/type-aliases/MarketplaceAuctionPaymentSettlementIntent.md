---
title: "Type Alias: MarketplaceAuctionPaymentSettlementIntent"
description: "Type Alias: MarketplaceAuctionPaymentSettlementIntent in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAuctionPaymentSettlementIntent

> **MarketplaceAuctionPaymentSettlementIntent** = `object`

Defined in: runtime-types.ts:423

## Properties

### action

> **action**: `"auction_refund"` \| `"auction_promote"`

Defined in: runtime-types.ts:425

***

### bid

> **bid**: [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

Defined in: runtime-types.ts:426

***

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

Defined in: runtime-types.ts:437

***

### expected

> **expected**: [`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest)\[`"expected"`\]

Defined in: runtime-types.ts:429

***

### payment

> **payment**: [`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment)

Defined in: runtime-types.ts:427

***

### proof

> **proof**: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence)

Defined in: runtime-types.ts:428

***

### recycleArgs?

> `optional` **recycleArgs?**: `unknown`

Defined in: runtime-types.ts:436

***

### refundPercent?

> `optional` **refundPercent?**: `number`

Defined in: runtime-types.ts:431

***

### subject

> **subject**: `"bid"`

Defined in: runtime-types.ts:424

***

### targetOrderGroupId?

> `optional` **targetOrderGroupId?**: `string`

Defined in: runtime-types.ts:434

***

### targetTradeId?

> `optional` **targetTradeId?**: `string`

Defined in: runtime-types.ts:433

***

### targetUnlockAt?

> `optional` **targetUnlockAt?**: `number`

Defined in: runtime-types.ts:435

***

### validation

> **validation**: [`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)

Defined in: runtime-types.ts:430

***

### winner?

> `optional` **winner?**: [`MarketplaceAuctionBidValidation`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionBidValidation)

Defined in: runtime-types.ts:432
