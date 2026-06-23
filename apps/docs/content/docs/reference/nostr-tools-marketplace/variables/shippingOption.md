---
title: "Variable: shippingOption"
description: "Variable: shippingOption in nostr-tools/marketplace."
full: true
---

# Variable: shippingOption

> `const` **shippingOption**: `object`

Defined in: [nostr-tools/marketplace/shipping-option.ts:274](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/shipping-option.ts#L274)

## Type Declaration

### address

> **address**: (`option`) => `string` = `shippingOptionAddress`

#### Parameters

##### option

`NostrEvent` \| [`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption)

#### Returns

`string`

### filter

> **filter**: (`query`) => `Filter` = `shippingOptionSearchFilter`

#### Parameters

##### query?

[`ShippingOptionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ShippingOptionSearchQuery) = `{}`

#### Returns

`Filter`

### filters

> **filters**: `object`

#### filters.search

> **search**: (`query`) => `Filter` = `shippingOptionSearchFilter`

##### Parameters

###### query?

[`ShippingOptionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ShippingOptionSearchQuery) = `{}`

##### Returns

`Filter`

### kind

> **kind**: `number` = `MarketplaceShippingOption`

### parse

> **parse**: (`event`) => [`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption) = `parseShippingOptionEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption)

### search

> **search**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption)[]\> = `searchShippingOptions`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`ShippingOptionSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ShippingOptionSearchQuery) = `{}`

##### options?

[`ShippingOptionSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ShippingOptionSearchOptions) = `{}`

#### Returns

`Promise`\<[`ParsedMarketplaceShippingOption`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceShippingOption)[]\>

### template

> **template**: (`option`) => `EventTemplate` = `generateShippingOptionEventTemplate`

#### Parameters

##### option

[`MarketplaceShippingOptionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceShippingOptionTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateShippingOptionEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
