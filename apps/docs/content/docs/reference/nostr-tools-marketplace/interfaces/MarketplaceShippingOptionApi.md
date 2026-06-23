---
title: "Interface: MarketplaceShippingOptionApi"
description: "Interface: MarketplaceShippingOptionApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceShippingOptionApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:900](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L900)

## Properties

### address

> **address**: (`option`) => `string`

Defined in: [nostr-tools/marketplace/runtime-types.ts:904](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L904)

#### Parameters

##### option

`NostrEvent` \| [`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption)

#### Returns

`string`

***

### filter

> **filter**: (`query`) => `Filter`

Defined in: [nostr-tools/marketplace/runtime-types.ts:906](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L906)

#### Parameters

##### query?

[`ShippingOptionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ShippingOptionSearchQuery) = `{}`

#### Returns

`Filter`

***

### filters

> **filters**: `object`

Defined in: [nostr-tools/marketplace/runtime-types.ts:907](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L907)

#### search

> **search**: (`query`) => `Filter`

##### Parameters

###### query?

[`ShippingOptionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ShippingOptionSearchQuery) = `{}`

##### Returns

`Filter`

***

### kind

> **kind**: `30406`

Defined in: [nostr-tools/marketplace/runtime-types.ts:901](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L901)

***

### parse

> **parse**: (`event`) => [`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption)

Defined in: [nostr-tools/marketplace/runtime-types.ts:902](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L902)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption)

***

### template

> **template**: (`option`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:905](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L905)

#### Parameters

##### option

[`MarketplaceShippingOptionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceShippingOptionTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:903](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L903)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:908](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L908)

#### Parameters

##### query?

[`ShippingOptionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ShippingOptionSearchQuery)

##### options?

[`ShippingOptionSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ShippingOptionSearchOptions)

#### Returns

`Promise`\<[`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption)[]\>
