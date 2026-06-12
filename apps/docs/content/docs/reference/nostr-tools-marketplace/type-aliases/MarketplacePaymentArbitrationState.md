---
title: "Type Alias: MarketplacePaymentArbitrationState"
description: "Type Alias: MarketplacePaymentArbitrationState in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentArbitrationState

> **MarketplacePaymentArbitrationState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`OrderPaymentSettlementOutput`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentSettlementOutput)[]; `proof`: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence); `type`: `"settlement_ready"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `inputs?`: `Record`\<`string`, `unknown`\>[]; `outputs?`: [`OrderPaymentSettlementOutput`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentSettlementOutput)[]; `proof?`: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence); `type`: `"completed"`; \}

Defined in: [runtime-types.ts:342](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L342)
