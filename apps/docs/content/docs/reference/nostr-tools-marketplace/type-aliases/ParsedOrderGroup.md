---
title: "Type Alias: ParsedOrderGroup"
description: "Type Alias: ParsedOrderGroup in nostr-tools/marketplace."
full: true
---

# Type Alias: ParsedOrderGroup

> **ParsedOrderGroup** = `object`

Defined in: [order-group-types.ts:143](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L143)

## Properties

### arbiterOrder?

> `optional` **arbiterOrder?**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

Defined in: [order-group-types.ts:164](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L164)

***

### arbiterPubkeys

> **arbiterPubkeys**: `string`[]

Defined in: [order-group-types.ts:149](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L149)

***

### buyerOrder?

> `optional` **buyerOrder?**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

Defined in: [order-group-types.ts:163](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L163)

***

### buyerPaymentAck?

> `optional` **buyerPaymentAck?**: [`ParsedOrderPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentAck)

Defined in: [order-group-types.ts:167](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L167)

***

### cancellation?

> `optional` **cancellation?**: [`ParsedOrderCancel`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderCancel)

Defined in: [order-group-types.ts:171](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L171)

***

### cancellations

> **cancellations**: [`ParsedOrderCancel`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderCancel)[]

Defined in: [order-group-types.ts:157](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L157)

***

### confirmedCommitted

> **confirmedCommitted**: `boolean`

Defined in: [order-group-types.ts:173](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L173)

***

### events

> **events**: [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)[]

Defined in: [order-group-types.ts:158](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L158)

***

### id

> **id**: `string`

Defined in: [order-group-types.ts:144](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L144)

***

### ignoredEvents

> **ignoredEvents**: [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)[]

Defined in: [order-group-types.ts:160](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L160)

***

### ignoredOrders

> **ignoredOrders**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]

Defined in: [order-group-types.ts:161](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L161)

***

### latestByPubkey

> **latestByPubkey**: `Record`\<`string`, `OrderGroupParticipantOrder`\>

Defined in: [order-group-types.ts:162](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L162)

***

### listingAnchor

> **listingAnchor**: `string`

Defined in: [order-group-types.ts:146](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L146)

***

### listingOwnerPubkey

> **listingOwnerPubkey**: `string`

Defined in: [order-group-types.ts:148](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L148)

***

### orders

> **orders**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]

Defined in: [order-group-types.ts:152](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L152)

***

### participantPubkeys

> **participantPubkeys**: `string`[]

Defined in: [order-group-types.ts:151](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L151)

***

### participants

> **participants**: [`PTag`](/docs/reference/nostr-tools-marketplace/type-aliases/PTag)[]

Defined in: [order-group-types.ts:150](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L150)

***

### payment?

> `optional` **payment?**: [`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment)

Defined in: [order-group-types.ts:166](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L166)

***

### paymentAcks

> **paymentAcks**: [`ParsedOrderPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentAck)[]

Defined in: [order-group-types.ts:154](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L154)

***

### paymentNack?

> `optional` **paymentNack?**: [`ParsedOrderPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentNack)

Defined in: [order-group-types.ts:169](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L169)

***

### paymentNacks

> **paymentNacks**: [`ParsedOrderPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentNack)[]

Defined in: [order-group-types.ts:155](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L155)

***

### payments

> **payments**: [`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment)[]

Defined in: [order-group-types.ts:153](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L153)

***

### sellerOrder?

> `optional` **sellerOrder?**: [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

Defined in: [order-group-types.ts:165](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L165)

***

### sellerPaymentAck?

> `optional` **sellerPaymentAck?**: [`ParsedOrderPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentAck)

Defined in: [order-group-types.ts:168](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L168)

***

### sellerPubkey

> **sellerPubkey**: `string`

Defined in: [order-group-types.ts:147](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L147)

***

### settlement?

> `optional` **settlement?**: [`ParsedOrderPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentSettlement)

Defined in: [order-group-types.ts:170](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L170)

***

### settlements

> **settlements**: [`ParsedOrderPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentSettlement)[]

Defined in: [order-group-types.ts:156](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L156)

***

### stage

> **stage**: [`OrderStage`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderStage)

Defined in: [order-group-types.ts:172](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L172)

***

### tradeId

> **tradeId**: `string`

Defined in: [order-group-types.ts:145](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L145)

***

### validOrders

> **validOrders**: `OrderGroupParticipantOrder`[]

Defined in: [order-group-types.ts:159](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L159)
