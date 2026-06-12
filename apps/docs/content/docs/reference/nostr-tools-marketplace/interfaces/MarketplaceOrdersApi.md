---
title: "Interface: MarketplaceOrdersApi"
description: "Interface: MarketplaceOrdersApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceOrdersApi

Defined in: [runtime-types.ts:789](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L789)

## Properties

### commitHash

> **commitHash**: (`content`) => `string`

Defined in: [runtime-types.ts:798](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L798)

#### Parameters

##### content

[`OrderContent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderContent)

#### Returns

`string`

***

### filters

> **filters**: (`query`) => `Filter`[]

Defined in: [runtime-types.ts:799](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L799)

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery) = `{}`

#### Returns

`Filter`[]

***

### groups

> **groups**: [`MarketplaceOrderGroupsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceOrderGroupsApi)

Defined in: [runtime-types.ts:815](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L815)

***

### parse

> **parse**: (`event`) => [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

Defined in: [runtime-types.ts:795](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L795)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

***

### template

> **template**: (`order`) => `EventTemplate`

Defined in: [runtime-types.ts:797](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L797)

#### Parameters

##### order

[`OrderTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [runtime-types.ts:796](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L796)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### create()

> **create**(`listing`, `order`, `options?`): `AsyncIterable`\<[`MarketplacePaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentState)\>

Defined in: [runtime-types.ts:790](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L790)

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

Defined in: [runtime-types.ts:806](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L806)

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

Defined in: [runtime-types.ts:800](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L800)

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

Defined in: [runtime-types.ts:801](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L801)

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

Defined in: [runtime-types.ts:810](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L810)

#### Parameters

##### query

`Omit`\<[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery), `"identity"`\> & `object`

##### handlers

[`OrderSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeHandlers)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions)

#### Returns

`SubCloser`
