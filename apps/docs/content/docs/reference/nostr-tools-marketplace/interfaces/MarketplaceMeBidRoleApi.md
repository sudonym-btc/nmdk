---
title: "Interface: MarketplaceMeBidRoleApi"
description: "Interface: MarketplaceMeBidRoleApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceMeBidRoleApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1055](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1055)

## Methods

### list()

> **list**(`query?`, `options?`): `Promise`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1056](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1056)

#### Parameters

##### query?

[`MarketplaceMeBidsQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidsQuery)

##### options?

[`AuctionBidGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSearchOptions)

#### Returns

`Promise`\<[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)[]\>

***

### watch()

> **watch**(`query?`, `options?`): [`MarketplaceMeBidRoleStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidRoleStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1060](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1060)

#### Parameters

##### query?

[`MarketplaceMeBidsQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidsQuery)

##### options?

[`AuctionBidGroupSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSubscribeOptions)

#### Returns

[`MarketplaceMeBidRoleStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidRoleStream)
