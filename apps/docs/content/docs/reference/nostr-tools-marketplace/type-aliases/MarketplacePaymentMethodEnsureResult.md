---
title: "Type Alias: MarketplacePaymentMethodEnsureResult"
description: "Type Alias: MarketplacePaymentMethodEnsureResult in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentMethodEnsureResult

> **MarketplacePaymentMethodEnsureResult** = \{ `reason`: `"no_listings"` \| `"no_trusted_arbiters"` \| `"no_policy_contributions"`; `status`: `"skipped"`; \} \| \{ `event`: `Event`; `status`: `"unchanged"`; \} \| \{ `event`: `Event`; `status`: `"created"`; \} \| \{ `event`: `Event`; `previousEvent`: `Event`; `status`: `"updated"`; \}

Defined in: [nostr-tools/marketplace/runtime-types.ts:327](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L327)
