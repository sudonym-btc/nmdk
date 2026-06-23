---
title: "Type Alias: PaymentGroupValidationOptions"
description: "Type Alias: PaymentGroupValidationOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: PaymentGroupValidationOptions

> **PaymentGroupValidationOptions** = `object`

Defined in: [nostr-tools/marketplace/payment-group.ts:127](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-group.ts#L127)

## Properties

### arbiterPubkeys?

> `optional` **arbiterPubkeys?**: `Iterable`\<`string` \| `undefined`\>

Defined in: [nostr-tools/marketplace/payment-group.ts:129](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-group.ts#L129)

***

### forceDriverValidation?

> `optional` **forceDriverValidation?**: (`group`) => `boolean`

Defined in: [nostr-tools/marketplace/payment-group.ts:132](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-group.ts#L132)

#### Parameters

##### group

[`ParsedPaymentGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentGroup)

#### Returns

`boolean`

***

### isTrustedAck?

> `optional` **isTrustedAck?**: (`ack`, `group`) => `boolean`

Defined in: [nostr-tools/marketplace/payment-group.ts:130](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-group.ts#L130)

#### Parameters

##### ack

[`ParsedPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentAck)

##### group

[`ParsedPaymentGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentGroup)

#### Returns

`boolean`

***

### isTrustedNack?

> `optional` **isTrustedNack?**: (`nack`, `group`) => `boolean`

Defined in: [nostr-tools/marketplace/payment-group.ts:131](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-group.ts#L131)

#### Parameters

##### nack

[`ParsedPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentNack)

##### group

[`ParsedPaymentGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentGroup)

#### Returns

`boolean`

***

### sellerPubkeys?

> `optional` **sellerPubkeys?**: `Iterable`\<`string` \| `undefined`\>

Defined in: [nostr-tools/marketplace/payment-group.ts:128](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-group.ts#L128)
