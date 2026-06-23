---
title: "Type Alias: MarketplaceAmount"
description: "Type Alias: MarketplaceAmount in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceAmount

> **MarketplaceAmount** = `object`

Defined in: [nostr-tools/marketplace/helper.ts:93](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/helper.ts#L93)

## Properties

### currency?

> `optional` **currency?**: `string`

Defined in: [nostr-tools/marketplace/helper.ts:100](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/helper.ts#L100)

Logical marketplace currency. Payment routes may settle this through
assets with different denominations/decimals, but marketplace events
should compare and display this currency, not the rail-specific asset.

***

### decimals

> **decimals**: `number`

Defined in: [nostr-tools/marketplace/helper.ts:102](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/helper.ts#L102)

***

### denomination

> **denomination**: `string`

Defined in: [nostr-tools/marketplace/helper.ts:101](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/helper.ts#L101)

***

### value

> **value**: `string`

Defined in: [nostr-tools/marketplace/helper.ts:94](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/helper.ts#L94)
