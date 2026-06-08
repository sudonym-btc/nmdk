---
title: "Interface: MarketplaceOrdersApi"
description: "Interface: MarketplaceOrdersApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceOrdersApi

Defined in: runtime-types.ts:826

## Properties

### commitHash

> **commitHash**: (`content`) => `string`

Defined in: runtime-types.ts:835

#### Parameters

##### content

[`OrderContent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderContent)

#### Returns

`string`

***

### filters

> **filters**: (`query`) => `Filter`[]

Defined in: runtime-types.ts:836

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery) = `{}`

#### Returns

`Filter`[]

***

### groups

> **groups**: [`MarketplaceOrderGroupsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceOrderGroupsApi)

Defined in: runtime-types.ts:852

***

### parse

> **parse**: (`event`) => [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

Defined in: runtime-types.ts:832

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

***

### template

> **template**: (`order`) => `EventTemplate`

Defined in: runtime-types.ts:834

#### Parameters

##### order

[`OrderTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: runtime-types.ts:833

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### create()

> **create**(`listing`, `order`, `options?`): `AsyncIterable`\<[`MarketplacePaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentState)\>

Defined in: runtime-types.ts:827

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

### mine()

> **mine**(`query?`, `options?`): `Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\>

Defined in: runtime-types.ts:843

#### Parameters

##### query?

`Omit`\<[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery), `"identity"`\> & `object`

##### options?

[`OrderSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSearchOptions)

#### Returns

`Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\>

***

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\>

Defined in: runtime-types.ts:837

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### options?

[`OrderSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSearchOptions)

#### Returns

`Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\>

***

### subscribe()

> **subscribe**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: runtime-types.ts:838

#### Parameters

##### query

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### handlers

[`OrderSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeHandlers)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions)

#### Returns

`SubCloser`

***

### subscribeMine()

> **subscribeMine**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: runtime-types.ts:847

#### Parameters

##### query

`Omit`\<[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery), `"identity"`\> & `object`

##### handlers

[`OrderSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeHandlers)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions)

#### Returns

`SubCloser`
