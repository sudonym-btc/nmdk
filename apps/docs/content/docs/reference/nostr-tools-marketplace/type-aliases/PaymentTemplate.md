---
title: "Type Alias: PaymentTemplate"
description: "Type Alias: PaymentTemplate in nostr-tools/marketplace."
full: true
---

# Type Alias: PaymentTemplate

> **PaymentTemplate** = [`PaymentLifecycleTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentLifecycleTemplate) & `object`

Defined in: nostr-tools/marketplace/payment-lifecycle.ts:100

## Type Declaration

### amount?

> `optional` **amount?**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

### paymentAmountKeys?

> `optional` **paymentAmountKeys?**: [`PaymentAmountKeyTag`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentAmountKeyTag)[]

### paymentProofKeys?

> `optional` **paymentProofKeys?**: [`PaymentProofKeyTag`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofKeyTag)[]

### proof

> **proof**: [`PaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProof) \| [`SealedPaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentProof)

### sealedAmount?

> `optional` **sealedAmount?**: [`SealedPaymentAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentAmount)
