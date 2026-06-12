---
title: "Interface: MarketplaceOrderGroupsApi"
description: "Interface: MarketplaceOrderGroupsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceOrderGroupsApi

Defined in: [runtime-types.ts:754](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L754)

## Properties

### filter

> **filter**: (`query`) => `Filter`

Defined in: [runtime-types.ts:761](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L761)

#### Parameters

##### query?

[`OrderGroupFilterQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupFilterQuery) = `{}`

#### Returns

`Filter`

***

### group

> **group**: (`events`, `options`) => [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

Defined in: [runtime-types.ts:764](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L764)

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

Defined in: [runtime-types.ts:755](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L755)

#### Parameters

##### tradeId

`string`

##### participants

`Iterable`\<[`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag) \| [`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)\>

#### Returns

`string`

***

### idForEvent

> **idForEvent**: (`event`) => `string`

Defined in: [runtime-types.ts:757](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L757)

#### Parameters

##### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

#### Returns

`string`

***

### idForOrder

> **idForOrder**: (`order`) => `string`

Defined in: [runtime-types.ts:756](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L756)

#### Parameters

##### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder) \| [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

#### Returns

`string`

***

### parseParticipantEvent

> **parseParticipantEvent**: (`event`) => [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

Defined in: [runtime-types.ts:762](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L762)

#### Parameters

##### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

#### Returns

[`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

***

### participantEntries

> **participantEntries**: (`event`) => [`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)[]

Defined in: [runtime-types.ts:760](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L760)

#### Parameters

##### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

#### Returns

[`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)[]

***

### participantPubkeys

> **participantPubkeys**: (`event`) => `string`[]

Defined in: [runtime-types.ts:759](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L759)

#### Parameters

##### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

#### Returns

`string`[]

***

### participants

> **participants**: (`order`) => `string`[]

Defined in: [runtime-types.ts:758](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L758)

#### Parameters

##### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder) \| [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

#### Returns

`string`[]

***

### reduce

> **reduce**: (`events`, `options`) => [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

Defined in: [runtime-types.ts:763](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L763)

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

Defined in: [runtime-types.ts:765](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L765)

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

Defined in: [runtime-types.ts:771](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L771)

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

Defined in: [runtime-types.ts:778](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L778)

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

Defined in: [runtime-types.ts:767](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L767)

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

Defined in: [runtime-types.ts:772](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L772)

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

Defined in: [runtime-types.ts:773](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L773)

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

Defined in: [runtime-types.ts:782](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L782)

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

Defined in: [runtime-types.ts:766](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L766)

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

##### options?

[`ResolveAndValidateOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveAndValidateOrderGroupOptions)

#### Returns

`Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>
