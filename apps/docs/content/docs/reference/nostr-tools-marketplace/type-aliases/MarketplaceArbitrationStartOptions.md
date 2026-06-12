---
title: "Type Alias: MarketplaceArbitrationStartOptions"
description: "Type Alias: MarketplaceArbitrationStartOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceArbitrationStartOptions

> **MarketplaceArbitrationStartOptions** = `Omit`\<[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery), `"identity"`\> & [`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions) & [`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions) & `object`

Defined in: [runtime-types.ts:679](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L679)

## Type Declaration

### auctionBidQuery?

> `optional` **auctionBidQuery?**: `Omit`\<[`AuctionBidGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupQuery), `"auctionAnchor"` \| `"participantPubkeys"`\>

### auctionQuery?

> `optional` **auctionQuery?**: `Omit`\<[`MarketplaceAuctionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSearchQuery), `"arbiterPubkeys"`\>

### auctions?

> `optional` **auctions?**: `boolean`

### auctionSettlement?

> `optional` **auctionSettlement?**: `Omit`\<[`MarketplaceAuctionSettlementRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionSettlementRequest), `"auctionAnchor"` \| `"auctionId"` \| `"listingAnchor"`\>

### autoAck?

> `optional` **autoAck?**: `boolean`

### autoNack?

> `optional` **autoNack?**: `boolean`

### autoSettleAuctions?

> `optional` **autoSettleAuctions?**: `boolean`

### identity?

> `optional` **identity?**: [`MarketplaceOrderIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderIdentity)

### now?

> `optional` **now?**: `number`

### onstate?

> `optional` **onstate?**: (`event`) => `void` \| `Promise`\<`void`\>

#### Parameters

##### event

[`MarketplaceArbitrationStartEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceArbitrationStartEvent)

#### Returns

`void` \| `Promise`\<`void`\>

### orders?

> `optional` **orders?**: `boolean`
