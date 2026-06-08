---
title: "Variable: accommodationListings"
description: "Variable: accommodationListings in nostr-tools/marketplace."
full: true
---

# Variable: accommodationListings

> `const` **accommodationListings**: `object`

Defined in: [listing/accommodation.ts:157](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/listing/accommodation.ts#L157)

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

> **search**: (`pool`, `relays`, `query`) => `Promise`\<[`AccommodationMarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/AccommodationMarketplaceListing)[]\> = `searchAccommodationListings`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`AccommodationListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/AccommodationListingSearchQuery) = `{}`

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
