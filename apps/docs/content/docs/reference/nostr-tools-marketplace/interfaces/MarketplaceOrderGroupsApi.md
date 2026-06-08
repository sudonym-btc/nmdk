---
title: "Interface: MarketplaceOrderGroupsApi"
description: "Interface: MarketplaceOrderGroupsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceOrderGroupsApi

Defined in: runtime-types.ts:795

## Properties

### filter

> **filter**: (`query`) => `Filter`

Defined in: runtime-types.ts:799

#### Parameters

##### query?

[`OrderGroupFilterQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupFilterQuery) = `{}`

#### Returns

`Filter`

***

### group

> **group**: (`events`, `options`) => [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

Defined in: runtime-types.ts:801

#### Parameters

##### events

`Iterable`\<`NostrEvent` \| [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)\>

##### options?

[`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions) = `{}`

#### Returns

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

***

### id

> **id**: (`tradeId`, `participants`) => `string`

Defined in: runtime-types.ts:796

#### Parameters

##### tradeId

`string`

##### participants

`Iterable`\<[`PTag`](/docs/reference/nostr-tools-marketplace/type-aliases/PTag) \| `OrderGroupParticipantEntry`\>

#### Returns

`string`

***

### idForOrder

> **idForOrder**: (`order`) => `string`

Defined in: runtime-types.ts:797

#### Parameters

##### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

#### Returns

`string`

***

### participants

> **participants**: (`order`) => `string`[]

Defined in: runtime-types.ts:798

#### Parameters

##### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

#### Returns

`string`[]

***

### reduce

> **reduce**: (`events`, `options`) => [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

Defined in: runtime-types.ts:800

#### Parameters

##### events

`Iterable`\<`NostrEvent` \| [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)\>

##### options?

[`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions) = `{}`

#### Returns

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

***

### resolveParticipants

> **resolveParticipants**: (`group`, `options`) => `Promise`\<[`ResolvedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvedOrderGroup)\>

Defined in: runtime-types.ts:802

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

##### options?

[`ResolveOrderGroupParticipantsOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveOrderGroupParticipantsOptions) = `{}`

#### Returns

`Promise`\<[`ResolvedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvedOrderGroup)\>

## Methods

### fetch()

> **fetch**(`query?`, `options?`): `Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

Defined in: runtime-types.ts:808

#### Parameters

##### query?

[`OrderGroupFilterQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupFilterQuery)

##### options?

[`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions)

#### Returns

`Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

***

### mine()

> **mine**(`query?`, `options?`): `Promise`\<[`OrderGroupBuckets`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupBuckets)\>

Defined in: runtime-types.ts:815

#### Parameters

##### query?

`Omit`\<[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery), `"identity"`\> & `object`

##### options?

[`OrderGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSearchOptions)

#### Returns

`Promise`\<[`OrderGroupBuckets`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupBuckets)\>

***

### resolveAndValidate()

> **resolveAndValidate**(`group`, `options?`): `Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>

Defined in: runtime-types.ts:804

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

##### options?

[`ResolveAndValidateOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveAndValidateOrderGroupOptions)

#### Returns

`Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>

***

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

Defined in: runtime-types.ts:809

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### options?

[`OrderGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSearchOptions)

#### Returns

`Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

***

### subscribe()

> **subscribe**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: runtime-types.ts:810

#### Parameters

##### query

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### handlers

[`OrderGroupSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSubscribeHandlers)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions) & [`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions)

#### Returns

`SubCloser`

***

### subscribeMine()

> **subscribeMine**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: runtime-types.ts:819

#### Parameters

##### query

`Omit`\<[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery), `"identity"`\> & `object`

##### handlers

[`OrderGroupSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSubscribeHandlers) & `object`

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions) & [`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions)

#### Returns

`SubCloser`

***

### validatePayments()

> **validatePayments**(`group`, `options?`): `Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>

Defined in: runtime-types.ts:803

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

##### options?

[`ResolveAndValidateOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveAndValidateOrderGroupOptions)

#### Returns

`Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>
