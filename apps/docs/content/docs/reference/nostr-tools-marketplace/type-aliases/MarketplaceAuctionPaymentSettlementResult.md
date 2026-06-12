---
title: "Type Alias: MarketplaceAuctionPaymentSettlementResult"
description: "Type Alias: MarketplaceAuctionPaymentSettlementResult in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAuctionPaymentSettlementResult

> **MarketplaceAuctionPaymentSettlementResult** = `Omit`\<`MarketplaceDriverAuctionSettlementResult`\<[`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence)\>, `"outputs"`\> & `object`

Defined in: [runtime-types.ts:420](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L420)

## Type Declaration

### outputs?

> `optional` **outputs?**: [`OrderPaymentSettlementOutput`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentSettlementOutput)[]

### proof

> **proof**: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence)
