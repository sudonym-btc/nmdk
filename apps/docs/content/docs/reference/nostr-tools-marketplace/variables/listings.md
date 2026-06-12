---
title: "Variable: listings"
description: "Variable: listings in nostr-tools/marketplace."
full: true
---

# Variable: listings

> `const` **listings**: `object`

Defined in: [listing.ts:240](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/listing.ts#L240)

## Type Declaration

### filters

> **filters**: `object`

#### filters.search

> **search**: (`query`) => `Filter` = `listingSearchFilter`

##### Parameters

###### query?

[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery) = `{}`

##### Returns

`Filter`

### parse

> **parse**: (`event`) => [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) = `parseListingEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

### search

> **search**: (`pool`, `relays`, `query`) => `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)[]\> = `searchListings`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery) = `{}`

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)[]\>

### template

> **template**: (`listing`) => `EventTemplate` = `generateListingEventTemplate`

#### Parameters

##### listing

[`MarketplaceListingTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListingTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateListingEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
