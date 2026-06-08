---
title: "Type Alias: MarketplacePaymentIntent"
description: "Type Alias: MarketplacePaymentIntent in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentIntent

> **MarketplacePaymentIntent** = `object`

Defined in: runtime-types.ts:315

## Properties

### accountIndex

> **accountIndex**: `number`

Defined in: runtime-types.ts:320

***

### amount

> **amount**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

Defined in: runtime-types.ts:322

***

### asset

> **asset**: [`MarketplacePaymentAsset`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentAsset)

Defined in: runtime-types.ts:324

***

### contract

> **contract**: [`MarketplacePaymentContract`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentContract)

Defined in: runtime-types.ts:326

***

### fee

> **fee**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

Defined in: runtime-types.ts:323

***

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `unknown`\>

Defined in: runtime-types.ts:333

***

### method

> **method**: [`PaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethod)

Defined in: runtime-types.ts:316

***

### participants

> **participants**: `object`

Defined in: runtime-types.ts:327

#### buyer?

> `optional` **buyer?**: [`MarketplacePaymentIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentIdentity)

#### escrow

> **escrow**: [`MarketplacePaymentIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentIdentity)

#### seller

> **seller**: [`MarketplacePaymentIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentIdentity)

***

### policy

> **policy**: [`MarketplacePaymentPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentPolicy)

Defined in: runtime-types.ts:325

***

### seed?

> `optional` **seed?**: `string`

Defined in: runtime-types.ts:321

***

### settlementId

> **settlementId**: `string`

Defined in: runtime-types.ts:319

***

### subject

> **subject**: `"order"` \| `"bid"`

Defined in: runtime-types.ts:317

***

### tradeId

> **tradeId**: `string`

Defined in: runtime-types.ts:318

***

### unlockAt

> **unlockAt**: `number`

Defined in: runtime-types.ts:332
