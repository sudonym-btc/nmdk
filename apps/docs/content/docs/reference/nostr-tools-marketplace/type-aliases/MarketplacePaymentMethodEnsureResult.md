---
title: "Type Alias: MarketplacePaymentMethodEnsureResult"
description: "Type Alias: MarketplacePaymentMethodEnsureResult in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentMethodEnsureResult

> **MarketplacePaymentMethodEnsureResult** = \{ `reason`: `"no_listings"` \| `"no_trusted_escrows"` \| `"no_policy_contributions"`; `status`: `"skipped"`; \} \| \{ `event`: `Event`; `status`: `"unchanged"`; \} \| \{ `event`: `Event`; `status`: `"created"`; \} \| \{ `event`: `Event`; `previousEvent`: `Event`; `status`: `"updated"`; \}

Defined in: runtime-types.ts:253
