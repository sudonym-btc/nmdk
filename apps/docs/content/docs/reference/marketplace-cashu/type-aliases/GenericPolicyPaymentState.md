---
title: "Type Alias: GenericPolicyPaymentState"
description: "Type Alias: GenericPolicyPaymentState in Marketplace Cashu Driver."
full: true
---

# Type Alias: GenericPolicyPaymentState

> **GenericPolicyPaymentState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: [`GenericPaymentProof`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentProof) \| `null`; `request`: [`GenericBolt11PaymentRequest`](/docs/reference/marketplace-cashu/type-aliases/GenericBolt11PaymentRequest); `type`: `"payment_required"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: [`GenericPaymentProof`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentProof) \| `null`; `status`: `string`; `type`: `"payment_progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof`: [`GenericPaymentProof`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentProof); `type`: `"paid"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: [`GenericPaymentProof`](/docs/reference/marketplace-cashu/type-aliases/GenericPaymentProof) \| `null`; `type`: `"completed"`; \}

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:146](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L146)
