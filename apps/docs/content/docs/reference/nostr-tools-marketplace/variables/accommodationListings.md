---
title: "Variable: accommodationListings"
description: "Variable: accommodationListings in nostr-tools/marketplace."
full: true
---

# Variable: accommodationListings

> `const` **accommodationListings**: `object`

Defined in: [nostr-tools/marketplace/listing/accommodation.ts:170](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/listing/accommodation.ts#L170)

## Type Declaration

### filters

> **filters**: `object`

#### filters.search

> **search**: (`query`) => `Filter` = `accommodationListingSearchFilter`

##### Parameters

###### query?

[`AccommodationListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AccommodationListingSearchQuery) = `{}`

##### Returns

`Filter`

### parse

> **parse**: (`event`) => [`AccommodationMarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/AccommodationMarketplaceListing) = `parseAccommodationListingEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`AccommodationMarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/AccommodationMarketplaceListing)

### search

> **search**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`AccommodationMarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/AccommodationMarketplaceListing)[]\> = `searchAccommodationListings`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`AccommodationListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AccommodationListingSearchQuery) = `{}`

##### options?

[`ListingSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchOptions) = `{}`

#### Returns

`Promise`\<[`AccommodationMarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/AccommodationMarketplaceListing)[]\>

### template

> **template**: (`listing`) => `EventTemplate` = `generateAccommodationListingEventTemplate`

#### Parameters

##### listing

[`AccommodationListingTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/AccommodationListingTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateAccommodationListingEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
