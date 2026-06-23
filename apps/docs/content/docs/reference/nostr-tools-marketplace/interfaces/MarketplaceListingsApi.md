---
title: "Interface: MarketplaceListingsApi"
description: "Interface: MarketplaceListingsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceListingsApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:882](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L882)

## Properties

### anchor

> **anchor**: (`listing`) => `string`

Defined in: [nostr-tools/marketplace/runtime-types.ts:883](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L883)

#### Parameters

##### listing

`NostrEvent` \| [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

#### Returns

`string`

***

### create

> **create**: (`listing`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:886](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L886)

#### Parameters

##### listing

[`MarketplaceListingTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListingTemplate)

#### Returns

`EventTemplate`

***

### filters

> **filters**: `object`

Defined in: [nostr-tools/marketplace/runtime-types.ts:888](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L888)

#### search

> **search**: (`query`) => `Filter`

##### Parameters

###### query?

[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery) = `{}`

##### Returns

`Filter`

***

### parse

> **parse**: (`event`) => [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

Defined in: [nostr-tools/marketplace/runtime-types.ts:884](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L884)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

***

### price

> **price**: (`listing`, `options`) => [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

Defined in: [nostr-tools/marketplace/runtime-types.ts:889](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L889)

#### Parameters

##### listing

[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

##### options?

[`MarketplaceListingPriceOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListingPriceOptions) = `{}`

#### Returns

[`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

***

### template

> **template**: (`listing`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:887](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L887)

#### Parameters

##### listing

[`MarketplaceListingTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListingTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:885](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L885)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### findByAnchor()

> **findByAnchor**(`anchor`, `options?`): `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:896](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L896)

#### Parameters

##### anchor

`string`

##### options?

[`ListingSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchOptions)

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\>

***

### findById()

> **findById**(`id`, `options?`): `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:895](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L895)

#### Parameters

##### id

`string`

##### options?

[`ListingSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchOptions)

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\>

***

### findOne()

> **findOne**(`pubkey`, `query?`, `options?`): `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:890](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L890)

#### Parameters

##### pubkey

`string`

##### query?

`Omit`\<[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery), `"authors"` \| `"limit"`\>

##### options?

[`ListingSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchOptions)

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\>

***

### search()

> **search**(`query?`, `options?`): `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:897](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L897)

#### Parameters

##### query?

[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery)

##### options?

[`ListingSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchOptions)

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)[]\>
