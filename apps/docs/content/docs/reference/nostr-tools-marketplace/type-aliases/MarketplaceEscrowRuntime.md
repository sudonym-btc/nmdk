---
title: "Type Alias: MarketplaceEscrowRuntime"
description: "Type Alias: MarketplaceEscrowRuntime in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceEscrowRuntime

> **MarketplaceEscrowRuntime** = `object`

Defined in: runtime-types.ts:737

## Methods

### close()

> **close**(`reason?`): `void`

Defined in: runtime-types.ts:738

#### Parameters

##### reason?

`string`

#### Returns

`void`

***

### processAuction()

> **processAuction**(`auction`): `Promise`\<`void`\>

Defined in: runtime-types.ts:740

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`Promise`\<`void`\>

***

### processAuctionBidGroup()

> **processAuctionBidGroup**(`auction`, `group`): `Promise`\<`void`\>

Defined in: runtime-types.ts:741

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

Defined in: runtime-types.ts:739

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

#### Returns

`Promise`\<`void`\>

***

### settleAuction()

> **settleAuction**(`auction`): `Promise`\<`void`\>

Defined in: runtime-types.ts:742

#### Parameters

##### auction

[`ParsedMarketplaceAuction`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuction)

#### Returns

`Promise`\<`void`\>
