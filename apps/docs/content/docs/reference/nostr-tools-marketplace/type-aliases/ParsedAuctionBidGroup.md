---
title: "Type Alias: ParsedAuctionBidGroup"
description: "Type Alias: ParsedAuctionBidGroup in nostr-tools/marketplace."
full: true
---

# Type Alias: ParsedAuctionBidGroup

> **ParsedAuctionBidGroup** = `object`

Defined in: [auction-bid-group.ts:52](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L52)

## Properties

### amount

> **amount**: [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

Defined in: [auction-bid-group.ts:57](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L57)

***

### auctionAnchor

> **auctionAnchor**: `string`

Defined in: [auction-bid-group.ts:55](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L55)

***

### bid

> **bid**: [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

Defined in: [auction-bid-group.ts:61](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L61)

***

### bids

> **bids**: [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)[]

Defined in: [auction-bid-group.ts:60](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L60)

***

### events

> **events**: [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)[]

Defined in: [auction-bid-group.ts:66](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L66)

***

### id

> **id**: `string`

Defined in: [auction-bid-group.ts:53](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L53)

***

### ignoredEvents

> **ignoredEvents**: [`AuctionBidGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupEvent)[]

Defined in: [auction-bid-group.ts:67](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L67)

***

### listingAnchor

> **listingAnchor**: `string`

Defined in: [auction-bid-group.ts:56](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L56)

***

### participantPubkeys

> **participantPubkeys**: `string`[]

Defined in: [auction-bid-group.ts:59](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L59)

***

### participants

> **participants**: [`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag)[]

Defined in: [auction-bid-group.ts:58](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L58)

***

### payment?

> `optional` **payment?**: [`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment)

Defined in: [auction-bid-group.ts:68](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L68)

***

### paymentAck?

> `optional` **paymentAck?**: [`ParsedOrderPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentAck)

Defined in: [auction-bid-group.ts:69](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L69)

***

### paymentAcks

> **paymentAcks**: [`ParsedOrderPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentAck)[]

Defined in: [auction-bid-group.ts:63](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L63)

***

### paymentNack?

> `optional` **paymentNack?**: [`ParsedOrderPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentNack)

Defined in: [auction-bid-group.ts:70](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L70)

***

### paymentNacks

> **paymentNacks**: [`ParsedOrderPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentNack)[]

Defined in: [auction-bid-group.ts:64](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L64)

***

### payments

> **payments**: [`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment)[]

Defined in: [auction-bid-group.ts:62](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L62)

***

### settlement?

> `optional` **settlement?**: [`ParsedOrderPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentSettlement)

Defined in: [auction-bid-group.ts:71](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L71)

***

### settlements

> **settlements**: [`ParsedOrderPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentSettlement)[]

Defined in: [auction-bid-group.ts:65](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L65)

***

### stage

> **stage**: [`AuctionBidGroupStage`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupStage)

Defined in: [auction-bid-group.ts:72](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L72)

***

### tradeId

> **tradeId**: `string`

Defined in: [auction-bid-group.ts:54](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/auction-bid-group.ts#L54)
