---
title: "Interface: MarketplaceLocationsApi"
description: "Interface: MarketplaceLocationsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceLocationsApi

Defined in: [nostr-tools/marketplace/location.ts:16](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/location.ts#L16)

## Extends

- [`MarketplaceLocationProvider`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceLocationProvider)

## Methods

### coverArea()

> **coverArea**(`area`): `Promise`\<[`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]\>

Defined in: [marketplace-location-interface-ts/dist/index.d.ts:23](https://github.com/sudonym-btc/marketplace-location-interface-ts/blob/7ba16fbb299f86967d1636387915a696af17abde/dist/index.d.ts#L23)

#### Parameters

##### area

`string`

#### Returns

`Promise`\<[`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]\>

#### Inherited from

[`MarketplaceLocationProvider`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceLocationProvider).[`coverArea`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceLocationProvider#coverarea)

***

### gTags()

> **gTags**(`cells`): [`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]

Defined in: [nostr-tools/marketplace/location.ts:17](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/location.ts#L17)

#### Parameters

##### cells

`Iterable`\<`string`\>

#### Returns

[`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]

***

### hierarchyForAddress()

> **hierarchyForAddress**(`address`): `Promise`\<[`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]\>

Defined in: [marketplace-location-interface-ts/dist/index.d.ts:22](https://github.com/sudonym-btc/marketplace-location-interface-ts/blob/7ba16fbb299f86967d1636387915a696af17abde/dist/index.d.ts#L22)

#### Parameters

##### address

`string`

#### Returns

`Promise`\<[`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]\>

#### Inherited from

[`MarketplaceLocationProvider`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceLocationProvider).[`hierarchyForAddress`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceLocationProvider#hierarchyforaddress)
