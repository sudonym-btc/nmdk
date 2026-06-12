---
title: "Interface: MarketplaceListingsApi"
description: "Interface: MarketplaceListingsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceListingsApi

Defined in: [runtime-types.ts:720](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L720)

## Properties

### create

> **create**: (`listing`) => `EventTemplate`

Defined in: [runtime-types.ts:723](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L723)

#### Parameters

##### listing

[`MarketplaceListingTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListingTemplate)

#### Returns

`EventTemplate`

***

### filters

> **filters**: `object`

Defined in: [runtime-types.ts:725](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L725)

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

Defined in: [runtime-types.ts:721](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L721)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

***

### template

> **template**: (`listing`) => `EventTemplate`

Defined in: [runtime-types.ts:724](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L724)

#### Parameters

##### listing

[`MarketplaceListingTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListingTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [runtime-types.ts:722](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L722)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### search()

> **search**(`query?`): `Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)[]\>

Defined in: [runtime-types.ts:726](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L726)

#### Parameters

##### query?

[`ListingSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ListingSearchQuery)

#### Returns

`Promise`\<[`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)[]\>
