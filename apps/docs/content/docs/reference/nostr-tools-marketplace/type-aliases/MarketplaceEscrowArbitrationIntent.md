---
title: "Type Alias: MarketplaceEscrowArbitrationIntent"
description: "Type Alias: MarketplaceEscrowArbitrationIntent in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceEscrowArbitrationIntent

> **MarketplaceEscrowArbitrationIntent** = `object`

Defined in: runtime-types.ts:350

## Properties

### action

> **action**: [`PaymentSettlementAction`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentSettlementAction)

Defined in: runtime-types.ts:356

***

### data?

> `optional` **data?**: `Record`\<`string`, `unknown`\>

Defined in: runtime-types.ts:359

***

### expected

> **expected**: [`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest)\[`"expected"`\]

Defined in: runtime-types.ts:355

***

### group

> **group**: [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

Defined in: runtime-types.ts:352

***

### outputs?

> `optional` **outputs?**: [`OrderPaymentSettlementOutput`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentSettlementOutput)[]

Defined in: runtime-types.ts:357

***

### payment

> **payment**: [`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment)

Defined in: runtime-types.ts:353

***

### proof

> **proof**: [`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence)

Defined in: runtime-types.ts:354

***

### reason?

> `optional` **reason?**: `string`

Defined in: runtime-types.ts:358

***

### subject

> **subject**: `"order"`

Defined in: runtime-types.ts:351
