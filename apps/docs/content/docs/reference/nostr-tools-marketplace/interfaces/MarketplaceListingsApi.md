---
title: "Interface: MarketplaceListingsApi"
description: "Interface: MarketplaceListingsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceListingsApi

Defined in: runtime-types.ts:761

## Properties

### create

> **create**: (`listing`) => `EventTemplate`

Defined in: runtime-types.ts:764

#### Parameters

##### listing

[`MarketplaceListingTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListingTemplate)

#### Returns

`EventTemplate`

***

### filters

> **filters**: `object`

Defined in: runtime-types.ts:766

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

Defined in: runtime-types.ts:762

#### Parameters

##### event

`NostrEvent`

#### Returns

[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

***

### template

> **template**: (`listing`) => `EventTemplate`

Defined in: runtime-types.ts:765

#### Parameters

##### listing

[`MarketplaceListingTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListingTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: runtime-types.ts:763

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### search()

> **search**(`query?`): `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)[]\>

Defined in: runtime-types.ts:767

#### Parameters

##### query?

[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery)

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)[]\>
