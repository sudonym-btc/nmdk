---
title: "Variable: listings"
description: "Variable: listings in nostr-tools/marketplace."
full: true
---

# Variable: listings

> `const` **listings**: `object`

Defined in: [nostr-tools/marketplace/listing.ts:375](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/listing.ts#L375)

## Type Declaration

### anchor

> **anchor**: (`listing`) => `string` = `listingAnchor`

#### Parameters

##### listing

`NostrEvent` \| [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

#### Returns

`string`

### filters

> **filters**: `object`

#### filters.search

> **search**: (`query`) => `Filter` = `listingSearchFilter`

##### Parameters

###### query?

[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery) = `{}`

##### Returns

`Filter`

### findByAnchor

> **findByAnchor**: (`pool`, `relays`, `anchor`, `options`) => `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\> = `findListingByAnchor`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### anchor

`string`

##### options?

[`ListingSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchOptions) = `{}`

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\>

### findById

> **findById**: (`pool`, `relays`, `id`, `options`) => `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\> = `findListingById`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### id

`string`

##### options?

[`ListingSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchOptions) = `{}`

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\>

### findOne

> **findOne**: (`pool`, `relays`, `pubkey`, `query`, `options`) => `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\> = `findListing`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### pubkey

`string`

##### query?

`Omit`\<[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery), `"authors"` \| `"limit"`\> = `{}`

##### options?

[`ListingSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchOptions) = `{}`

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) \| `null`\>

### parse

> **parse**: (`event`) => [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing) = `parseListingEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

### price

> **price**: (`listing`, `options`) => [`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount) = `listingPriceAmount`

#### Parameters

##### listing

[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

##### options?

[`MarketplaceListingPriceOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListingPriceOptions) = `{}`

#### Returns

[`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

### search

> **search**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)[]\> = `searchListings`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery) = `{}`

##### options?

[`ListingSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchOptions) = `{}`

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
