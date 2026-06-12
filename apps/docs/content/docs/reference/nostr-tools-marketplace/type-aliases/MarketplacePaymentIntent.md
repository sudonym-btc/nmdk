---
title: "Type Alias: MarketplacePaymentIntent"
description: "Type Alias: MarketplacePaymentIntent in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentIntent

> **MarketplacePaymentIntent** = `MarketplaceDriverPaymentIntent` & `object`

Defined in: [runtime-types.ts:304](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L304)

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
