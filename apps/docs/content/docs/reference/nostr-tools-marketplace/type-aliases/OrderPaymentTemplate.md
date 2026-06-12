---
title: "Type Alias: OrderPaymentTemplate"
description: "Type Alias: OrderPaymentTemplate in nostr-tools/marketplace."
full: true
---

# Type Alias: OrderPaymentTemplate

> **OrderPaymentTemplate** = [`OrderLinkedEventTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderLinkedEventTemplate) & `object`

Defined in: [order-lifecycle.ts:77](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-lifecycle.ts#L77)

## Type Declaration

### paymentProofKeys?

> `optional` **paymentProofKeys?**: [`PaymentProofKeyTag`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofKeyTag)[]

### proof

> **proof**: [`PaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProof) \| [`SealedPaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentProof)

### purpose?

> `optional` **purpose?**: `string`
