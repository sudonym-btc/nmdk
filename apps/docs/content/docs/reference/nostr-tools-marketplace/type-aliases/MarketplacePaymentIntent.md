---
title: "Type Alias: MarketplacePaymentIntent"
description: "Type Alias: MarketplacePaymentIntent in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentIntent

> **MarketplacePaymentIntent** = `MarketplaceDriverPaymentIntent` & `object`

Defined in: [nostr-tools/marketplace/runtime-types.ts:367](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L367)

## Type Declaration

### amount

> **amount**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

### asset

> **asset**: [`MarketplacePaymentAsset`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentAsset)

### contract

> **contract**: [`MarketplacePaymentContract`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentContract)

### fee

> **fee**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

### method

> **method**: [`PaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethod)

### participants

> **participants**: `object`

#### participants.arbiter

> **arbiter**: [`MarketplacePaymentIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentIdentity)

#### participants.buyer?

> `optional` **buyer?**: [`MarketplacePaymentIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentIdentity)

#### participants.seller

> **seller**: [`MarketplacePaymentIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentIdentity)

### policy

> **policy**: [`MarketplacePaymentPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentPolicy)
