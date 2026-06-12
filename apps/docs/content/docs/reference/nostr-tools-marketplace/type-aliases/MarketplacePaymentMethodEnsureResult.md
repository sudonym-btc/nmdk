---
title: "Type Alias: MarketplacePaymentMethodEnsureResult"
description: "Type Alias: MarketplacePaymentMethodEnsureResult in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentMethodEnsureResult

> **MarketplacePaymentMethodEnsureResult** = \{ `reason`: `"no_listings"` \| `"no_trusted_arbiters"` \| `"no_policy_contributions"`; `status`: `"skipped"`; \} \| \{ `event`: `Event`; `status`: `"unchanged"`; \} \| \{ `event`: `Event`; `status`: `"created"`; \} \| \{ `event`: `Event`; `previousEvent`: `Event`; `status`: `"updated"`; \}

Defined in: [runtime-types.ts:265](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L265)
