---
title: "Type Alias: GenericPolicyPaymentState"
description: "Type Alias: GenericPolicyPaymentState in Marketplace EVM Driver."
full: true
---

# Type Alias: GenericPolicyPaymentState

> **GenericPolicyPaymentState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: [`GenericPaymentProof`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentProof) \| `null`; `request`: [`GenericBolt11PaymentRequest`](/docs/reference/marketplace-evm/type-aliases/GenericBolt11PaymentRequest); `type`: `"payment_required"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: [`GenericPaymentProof`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentProof) \| `null`; `status`: `string`; `type`: `"payment_progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof`: [`GenericPaymentProof`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentProof); `type`: `"paid"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `proof?`: [`GenericPaymentProof`](/docs/reference/marketplace-evm/type-aliases/GenericPaymentProof) \| `null`; `type`: `"completed"`; \}

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:168](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L168)
