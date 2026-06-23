---
title: "Type Alias: MarketplacePaymentArbitrationState"
description: "Type Alias: MarketplacePaymentArbitrationState in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentArbitrationState

> **MarketplacePaymentArbitrationState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`PaymentSettlementOutput`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentSettlementOutput)[]; `proof`: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence); `type`: `"settlement_ready"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`PaymentSettlementOutput`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentSettlementOutput)[]; `proof?`: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence); `type`: `"completed"`; \}

Defined in: [nostr-tools/marketplace/runtime-types.ts:408](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L408)
