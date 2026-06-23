---
title: "Type Alias: MarketplaceArbitrationRuntime"
description: "Type Alias: MarketplaceArbitrationRuntime in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceArbitrationRuntime

> **MarketplaceArbitrationRuntime** = `object`

Defined in: [nostr-tools/marketplace/runtime-types.ts:850](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L850)

## Methods

### close()

> **close**(`reason?`): `void`

Defined in: [nostr-tools/marketplace/runtime-types.ts:851](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L851)

#### Parameters

##### reason?

`string`

#### Returns

`void`

***

### processAuction()

> **processAuction**(`auction`): `Promise`\<`void`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:853](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L853)

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`Promise`\<`void`\>

***

### processAuctionBidGroup()

> **processAuctionBidGroup**(`auction`, `group`): `Promise`\<`void`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:854](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L854)

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

##### group

[`ParsedAuctionBidGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedAuctionBidGroup)

#### Returns

`Promise`\<`void`\>

***

### processGroup()

> **processGroup**(`group`): `Promise`\<`void`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:852](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L852)

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

#### Returns

`Promise`\<`void`\>

***

### settleAuction()

> **settleAuction**(`auction`): `Promise`\<`void`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:855](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L855)

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`Promise`\<`void`\>

***

### settleDueAuctions()

> **settleDueAuctions**(): `Promise`\<`void`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:856](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L856)

#### Returns

`Promise`\<`void`\>
