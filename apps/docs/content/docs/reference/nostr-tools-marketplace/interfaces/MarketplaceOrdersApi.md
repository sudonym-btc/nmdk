---
title: "Interface: MarketplaceOrdersApi"
description: "Interface: MarketplaceOrdersApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceOrdersApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:963](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L963)

## Properties

### commitHash

> **commitHash**: (`content`) => `string`

Defined in: [nostr-tools/marketplace/runtime-types.ts:972](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L972)

#### Parameters

##### content

[`OrderContent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderContent)

#### Returns

`string`

***

### filters

> **filters**: (`query`) => `Filter`[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:973](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L973)

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery) = `{}`

#### Returns

`Filter`[]

***

### groups

> **groups**: [`MarketplaceOrderGroupsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceOrderGroupsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:981](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L981)

***

### parse

> **parse**: (`event`) => [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

Defined in: [nostr-tools/marketplace/runtime-types.ts:969](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L969)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

***

### template

> **template**: (`order`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:971](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L971)

#### Parameters

##### order

[`OrderTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:970](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L970)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### create()

> **create**(`listing`, `order`, `options?`): `AsyncIterable`\<[`MarketplacePaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentState)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:964](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L964)

#### Parameters

##### listing

`NostrEvent` \| [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

##### order

[`MarketplaceOrderCreateParams`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderCreateParams)

##### options?

[`MarketplacePayOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePayOptions)

#### Returns

`AsyncIterable`\<[`MarketplacePaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentState)\>

***

### negotiate()

> **negotiate**(`listing`, `order`): `Promise`\<`MarketplaceOrderNegotiationResult`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:982](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L982)

#### Parameters

##### listing

`NostrEvent` \| [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

##### order

`MarketplaceOrderNegotiationOptions`

#### Returns

`Promise`\<`MarketplaceOrderNegotiationResult`\>

***

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:974](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L974)

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### options?

[`OrderSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSearchOptions)

#### Returns

`Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\>

***

### stream()

> **stream**(`query?`, `options?`): [`MarketplaceOrderStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:980](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L980)

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions)

#### Returns

[`MarketplaceOrderStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderStream)

***

### subscribe()

> **subscribe**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: [nostr-tools/marketplace/runtime-types.ts:975](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L975)

#### Parameters

##### query

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### handlers

[`OrderSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeHandlers)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions)

#### Returns

`SubCloser`
