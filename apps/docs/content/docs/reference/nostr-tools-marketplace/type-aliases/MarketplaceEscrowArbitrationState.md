---
title: "Type Alias: MarketplaceEscrowArbitrationState"
description: "Type Alias: MarketplaceEscrowArbitrationState in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceEscrowArbitrationState

> **MarketplaceEscrowArbitrationState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`OrderPaymentSettlementOutput`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentSettlementOutput)[]; `proof`: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence); `type`: `"settlement_ready"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`OrderPaymentSettlementOutput`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentSettlementOutput)[]; `proof?`: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence); `type`: `"completed"`; \}

Defined in: runtime-types.ts:362
