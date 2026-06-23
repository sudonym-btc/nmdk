---
title: "Interface: MarketplaceMeBidsApi"
description: "Interface: MarketplaceMeBidsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceMeBidsApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1066](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1066)

## Properties

### arbitrating

> **arbitrating**: [`MarketplaceMeBidRoleApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceMeBidRoleApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1077](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1077)

***

### placed

> **placed**: [`MarketplaceMeBidRoleApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceMeBidRoleApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1075](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1075)

***

### received

> **received**: [`MarketplaceMeBidRoleApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceMeBidRoleApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1076](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1076)

## Methods

### list()

> **list**(`query?`, `options?`): `Promise`\<[`MarketplaceMeBidsSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidsSnapshot)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1067](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1067)

#### Parameters

##### query?

[`MarketplaceMeBidsQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidsQuery)

##### options?

[`AuctionBidGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSearchOptions)

#### Returns

`Promise`\<[`MarketplaceMeBidsSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidsSnapshot)\>

***

### watch()

> **watch**(`query?`, `options?`): [`MarketplaceMeBidsStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidsStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1071](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1071)

#### Parameters

##### query?

[`MarketplaceMeBidsQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidsQuery)

##### options?

[`AuctionBidGroupSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/AuctionBidGroupSubscribeOptions)

#### Returns

[`MarketplaceMeBidsStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeBidsStream)
