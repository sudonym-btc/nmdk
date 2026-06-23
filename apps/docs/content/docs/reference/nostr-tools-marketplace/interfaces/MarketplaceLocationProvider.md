---
title: "Interface: MarketplaceLocationProvider"
description: "Interface: MarketplaceLocationProvider in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceLocationProvider

Defined in: [marketplace-location-interface-ts/dist/index.d.ts:21](https://github.com/sudonym-btc/marketplace-location-interface-ts/blob/7ba16fbb299f86967d1636387915a696af17abde/dist/index.d.ts#L21)

## Extended by

- [`MarketplaceLocationsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceLocationsApi)

## Methods

### coverArea()

> **coverArea**(`area`): `Promise`\<[`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]\>

Defined in: [marketplace-location-interface-ts/dist/index.d.ts:23](https://github.com/sudonym-btc/marketplace-location-interface-ts/blob/7ba16fbb299f86967d1636387915a696af17abde/dist/index.d.ts#L23)

#### Parameters

##### area

`string`

#### Returns

`Promise`\<[`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]\>

***

### hierarchyForAddress()

> **hierarchyForAddress**(`address`): `Promise`\<[`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]\>

Defined in: [marketplace-location-interface-ts/dist/index.d.ts:22](https://github.com/sudonym-btc/marketplace-location-interface-ts/blob/7ba16fbb299f86967d1636387915a696af17abde/dist/index.d.ts#L22)

#### Parameters

##### address

`string`

#### Returns

`Promise`\<[`MarketplaceLocationGTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLocationGTag)[]\>
