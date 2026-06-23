---
title: "Interface: MarketplaceOrderGroupsApi"
description: "Interface: MarketplaceOrderGroupsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceOrderGroupsApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:936](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L936)

## Properties

### filter

> **filter**: (`query`) => `Filter`

Defined in: [nostr-tools/marketplace/runtime-types.ts:943](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L943)

#### Parameters

##### query?

[`OrderGroupFilterQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupFilterQuery) = `{}`

#### Returns

`Filter`

***

### group

> **group**: (`events`, `options`) => [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:946](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L946)

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

Defined in: [nostr-tools/marketplace/runtime-types.ts:937](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L937)

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

Defined in: [nostr-tools/marketplace/runtime-types.ts:939](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L939)

#### Parameters

##### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

#### Returns

`string`

***

### idForOrder

> **idForOrder**: (`order`) => `string`

Defined in: [nostr-tools/marketplace/runtime-types.ts:938](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L938)

#### Parameters

##### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder) \| [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

#### Returns

`string`

***

### parseParticipantEvent

> **parseParticipantEvent**: (`event`) => [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

Defined in: [nostr-tools/marketplace/runtime-types.ts:944](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L944)

#### Parameters

##### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

#### Returns

[`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

***

### participantEntries

> **participantEntries**: (`event`) => [`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:942](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L942)

#### Parameters

##### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

#### Returns

[`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)[]

***

### participantPubkeys

> **participantPubkeys**: (`event`) => `string`[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:941](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L941)

#### Parameters

##### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

#### Returns

`string`[]

***

### participants

> **participants**: (`order`) => `string`[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:940](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L940)

#### Parameters

##### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder) \| [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

#### Returns

`string`[]

***

### reduce

> **reduce**: (`events`, `options`) => [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

Defined in: [nostr-tools/marketplace/runtime-types.ts:945](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L945)

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

Defined in: [nostr-tools/marketplace/runtime-types.ts:947](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L947)

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

Defined in: [nostr-tools/marketplace/runtime-types.ts:953](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L953)

#### Parameters

##### query?

[`OrderGroupFilterQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupFilterQuery)

##### options?

[`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions)

#### Returns

`Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

***

### resolveAndValidate()

> **resolveAndValidate**(`group`, `options?`): `Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:949](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L949)

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

Defined in: [nostr-tools/marketplace/runtime-types.ts:954](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L954)

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### options?

[`OrderGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSearchOptions)

#### Returns

`Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

***

### stream()

> **stream**(`query?`, `options?`): [`MarketplaceOrderGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderGroupStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:960](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L960)

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions) & [`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions)

#### Returns

[`MarketplaceOrderGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderGroupStream)

***

### subscribe()

> **subscribe**(`query`, `handlers`, `options?`): `SubCloser`

Defined in: [nostr-tools/marketplace/runtime-types.ts:955](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L955)

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

### validatePayments()

> **validatePayments**(`group`, `options?`): `Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:948](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L948)

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

##### options?

[`ResolveAndValidateOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveAndValidateOrderGroupOptions)

#### Returns

`Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>
