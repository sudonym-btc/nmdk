---
title: "Type Alias: ParsedOrderGroup"
description: "Type Alias: ParsedOrderGroup in nostr-tools/marketplace."
full: true
---

# Type Alias: ParsedOrderGroup

> **ParsedOrderGroup** = `object`

Defined in: [nostr-tools/marketplace/order-group-types.ts:153](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L153)

## Properties

### arbiterOrder?

> `optional` **arbiterOrder?**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

Defined in: [nostr-tools/marketplace/order-group-types.ts:174](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L174)

***

### arbiterPubkeys

> **arbiterPubkeys**: `string`[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:159](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L159)

***

### buyerOrder?

> `optional` **buyerOrder?**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

Defined in: [nostr-tools/marketplace/order-group-types.ts:173](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L173)

***

### buyerPaymentAck?

> `optional` **buyerPaymentAck?**: [`ParsedPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentAck)

Defined in: [nostr-tools/marketplace/order-group-types.ts:178](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L178)

***

### cancellation?

> `optional` **cancellation?**: [`ParsedOrderCancel`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderCancel)

Defined in: [nostr-tools/marketplace/order-group-types.ts:182](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L182)

***

### cancellations

> **cancellations**: [`ParsedOrderCancel`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderCancel)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:167](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L167)

***

### confirmedCommitted

> **confirmedCommitted**: `boolean`

Defined in: [nostr-tools/marketplace/order-group-types.ts:184](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L184)

***

### events

> **events**: [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:168](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L168)

***

### id

> **id**: `string`

Defined in: [nostr-tools/marketplace/order-group-types.ts:154](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L154)

***

### ignoredEvents

> **ignoredEvents**: [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:170](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L170)

***

### ignoredOrders

> **ignoredOrders**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:171](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L171)

***

### latestByPubkey

> **latestByPubkey**: `Record`\<`string`, `OrderGroupParticipantOrder`\>

Defined in: [nostr-tools/marketplace/order-group-types.ts:172](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L172)

***

### listingAnchor

> **listingAnchor**: `string`

Defined in: [nostr-tools/marketplace/order-group-types.ts:156](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L156)

***

### listingOwnerPubkey

> **listingOwnerPubkey**: `string`

Defined in: [nostr-tools/marketplace/order-group-types.ts:158](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L158)

***

### orders

> **orders**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:162](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L162)

***

### participantPubkeys

> **participantPubkeys**: `string`[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:161](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L161)

***

### participants

> **participants**: [`PTag`](/docs/reference/nostr-tools-marketplace/type-aliases/PTag)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:160](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L160)

***

### payment?

> `optional` **payment?**: [`ParsedPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPayment)

Defined in: [nostr-tools/marketplace/order-group-types.ts:176](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L176)

***

### paymentAck?

> `optional` **paymentAck?**: [`ParsedPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentAck)

Defined in: [nostr-tools/marketplace/order-group-types.ts:177](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L177)

***

### paymentAcks

> **paymentAcks**: [`ParsedPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentAck)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:164](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L164)

***

### paymentNack?

> `optional` **paymentNack?**: [`ParsedPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentNack)

Defined in: [nostr-tools/marketplace/order-group-types.ts:180](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L180)

***

### paymentNacks

> **paymentNacks**: [`ParsedPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentNack)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:165](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L165)

***

### payments

> **payments**: [`ParsedPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPayment)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:163](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L163)

***

### sellerOrder?

> `optional` **sellerOrder?**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

Defined in: [nostr-tools/marketplace/order-group-types.ts:175](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L175)

***

### sellerPaymentAck?

> `optional` **sellerPaymentAck?**: [`ParsedPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentAck)

Defined in: [nostr-tools/marketplace/order-group-types.ts:179](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L179)

***

### sellerPubkey

> **sellerPubkey**: `string`

Defined in: [nostr-tools/marketplace/order-group-types.ts:157](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L157)

***

### settlement?

> `optional` **settlement?**: [`ParsedPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentSettlement)

Defined in: [nostr-tools/marketplace/order-group-types.ts:181](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L181)

***

### settlements

> **settlements**: [`ParsedPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentSettlement)[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:166](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L166)

***

### stage

> **stage**: [`OrderStage`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderStage)

Defined in: [nostr-tools/marketplace/order-group-types.ts:183](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L183)

***

### tradeId

> **tradeId**: `string`

Defined in: [nostr-tools/marketplace/order-group-types.ts:155](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L155)

***

### validOrders

> **validOrders**: `OrderGroupParticipantOrder`[]

Defined in: [nostr-tools/marketplace/order-group-types.ts:169](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-group-types.ts#L169)
