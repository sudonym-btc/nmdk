---
title: "Type Alias: MarketplacePaymentRecoveryState"
description: "Type Alias: MarketplacePaymentRecoveryState in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentRecoveryState

> **MarketplacePaymentRecoveryState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"noop"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"recovered"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof`: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence); `type`: `"settlement_ready"`; \}

Defined in: runtime-types.ts:344
