---
title: "Variable: orders"
description: "Variable: orders in nostr-tools/marketplace."
full: true
---

# Variable: orders

> `const` **orders**: `object`

Defined in: [order.ts:397](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order.ts#L397)

## Type Declaration

### cancelTemplate

> **cancelTemplate**: (`cancel`) => `EventTemplate` = `generateOrderCancelEventTemplate`

#### Parameters

##### cancel

[`OrderCancelTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderCancelTemplate)

#### Returns

`EventTemplate`

### commitAuthorizationTemplate

> **commitAuthorizationTemplate**: (`auth`) => `EventTemplate` = `generateCommitAuthorizationEventTemplate`

#### Parameters

##### auth

[`CommitAuthorizationTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/CommitAuthorizationTemplate)

#### Returns

`EventTemplate`

### commitHash

> **commitHash**: (`content`) => `string` = `orderCommitHash`

#### Parameters

##### content

[`OrderContent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderContent)

#### Returns

`string`

### committedTerms

> **committedTerms**: (`content`) => `Record`\<`string`, `unknown`\> = `committedOrderTerms`

#### Parameters

##### content

[`OrderContent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderContent)

#### Returns

`Record`\<`string`, `unknown`\>

### filters

> **filters**: (`query`) => `Filter`[] = `orderQueries.filters`

#### Parameters

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery) = `{}`

#### Returns

`Filter`[]

### groups

> **groups**: `object` = `orderGroups`

#### groups.allowed

> **allowed**: (`event`, `anchor`) => `boolean` = `allowedInOrderGroup`

##### Parameters

###### event

`NostrEvent` \| [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)

###### anchor

[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder) \| [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

##### Returns

`boolean`

#### groups.buckets

> **buckets**: (`groups`, `identity`) => [`OrderGroupBuckets`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupBuckets) = `bucketOrderGroups`

##### Parameters

###### groups

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

###### identity

[`MarketplaceOrderIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderIdentity)

##### Returns

[`OrderGroupBuckets`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupBuckets)

#### groups.eventKinds

> **eventKinds**: `number`[] = `orderGroupEventKinds`

#### groups.fetch

> **fetch**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\> = `fetchOrderGroups`

##### Parameters

###### pool

`OrderGroupQueryPool`

###### relays

`string`[]

###### query?

[`OrderGroupFilterQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupFilterQuery) = `{}`

###### options?

[`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions) = `{}`

##### Returns

`Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

#### groups.filter

> **filter**: (`query`) => `Filter` = `orderGroupFilter`

##### Parameters

###### query?

[`OrderGroupFilterQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupFilterQuery) = `{}`

##### Returns

`Filter`

#### groups.group

> **group**: (`events`, `options`) => [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[] = `groupOrderEvents`

##### Parameters

###### events

`Iterable`\<`NostrEvent` \| [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)\>

###### options?

[`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions) = `{}`

##### Returns

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

#### groups.id

> **id**: (`tradeId`, `participants`) => `string` = `orderGroupIdForParticipants`

##### Parameters

###### tradeId

`string`

###### participants

`Iterable`\<[`PTag`](/docs/reference/nostr-tools-marketplace/type-aliases/PTag) \| `OrderGroupParticipantEntry`\>

##### Returns

`string`

#### groups.idForOrder

> **idForOrder**: (`order`) => `string` = `orderGroupIdForOrder`

##### Parameters

###### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

##### Returns

`string`

#### groups.mine

> **mine**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`OrderGroupBuckets`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupBuckets)\> = `searchMyOrderGroups`

##### Parameters

###### pool

`OrderGroupQueryPool`

###### relays

`string`[]

###### query

[`MyOrderGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MyOrderGroupQuery)

###### options?

[`OrderGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSearchOptions) = `{}`

##### Returns

`Promise`\<[`OrderGroupBuckets`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupBuckets)\>

#### groups.parseEvent

> **parseEvent**: (`event`) => [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent) = `parseOrderGroupEvent`

##### Parameters

###### event

`NostrEvent` \| [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)

##### Returns

[`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)

#### groups.participants

> **participants**: (`order`) => `string`[] = `orderGroupParticipantPubkeys`

##### Parameters

###### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

##### Returns

`string`[]

#### groups.pubkeyFromListingAnchor

> **pubkeyFromListingAnchor**: (`listingAnchor`) => `string`

##### Parameters

###### listingAnchor

`string`

##### Returns

`string`

#### groups.reduce

> **reduce**: (`events`, `options`) => [`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup) = `reduceOrderGroup`

##### Parameters

###### events

`Iterable`\<`NostrEvent` \| [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)\>

###### options?

[`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions) = `{}`

##### Returns

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

#### groups.resolveAndValidate

> **resolveAndValidate**: (`group`, `options`) => `Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\> = `resolveAndValidateOrderGroup`

##### Parameters

###### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

###### options?

[`ResolveAndValidateOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveAndValidateOrderGroupOptions) = `{}`

##### Returns

`Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>

#### groups.resolveParticipants

> **resolveParticipants**: (`group`, `options`) => `Promise`\<[`ResolvedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvedOrderGroup)\> = `resolveOrderGroupParticipants`

##### Parameters

###### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

###### options?

[`ResolveOrderGroupParticipantsOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveOrderGroupParticipantsOptions) = `{}`

##### Returns

`Promise`\<[`ResolvedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvedOrderGroup)\>

#### groups.search

> **search**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\> = `searchOrderGroups`

##### Parameters

###### pool

`OrderGroupQueryPool`

###### relays

`string`[]

###### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery) = `{}`

###### options?

[`OrderGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSearchOptions) = `{}`

##### Returns

`Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

#### groups.subscribe

> **subscribe**: (`pool`, `relays`, `query`, `handlers`, `options`) => `SubCloser` = `subscribeOrderGroups`

##### Parameters

###### pool

`OrderGroupSubscribePool`

###### relays

`string`[]

###### query

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

###### handlers

[`OrderGroupSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSubscribeHandlers)

###### options?

`OrderGroupSubscribeOptions` = `{}`

##### Returns

`SubCloser`

#### groups.subscribeMine

> **subscribeMine**: (`pool`, `relays`, `query`, `handlers`, `options`) => `SubCloser` = `subscribeMyOrderGroups`

##### Parameters

###### pool

`OrderGroupSubscribePool`

###### relays

`string`[]

###### query

[`MyOrderGroupQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MyOrderGroupQuery)

###### handlers

[`OrderGroupSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSubscribeHandlers) & `object`

###### options?

`OrderGroupSubscribeOptions` = `{}`

##### Returns

`SubCloser`

#### groups.validatePayments

> **validatePayments**: (`group`, `options`) => `Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\> = `validateOrderGroupPayments`

##### Parameters

###### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

###### options?

[`ValidateOrderGroupPaymentsOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidateOrderGroupPaymentsOptions) = `{}`

##### Returns

`Promise`\<[`ValidatedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ValidatedOrderGroup)\>

### hashParticipantProofPayload

> **hashParticipantProofPayload**: (`payload`) => `string`

#### Parameters

##### payload

`string`

#### Returns

`string`

### identityPubkeys

> **identityPubkeys**: (`identity`) => `string`[] = `orderQueries.identityPubkeys`

#### Parameters

##### identity?

[`MarketplaceOrderIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderIdentity) = `{}`

#### Returns

`string`[]

### parse

> **parse**: (`event`) => [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder) = `parseOrderEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

### parseCancel

> **parseCancel**: (`event`) => [`ParsedOrderCancel`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderCancel) = `parseOrderCancelEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedOrderCancel`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderCancel)

### parseParticipantProofTag

> **parseParticipantProofTag**: (`tag`) => [`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag) \| `null`

#### Parameters

##### tag

`string`[]

#### Returns

[`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag) \| `null`

### parsePayment

> **parsePayment**: (`event`) => [`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment) = `parseOrderPaymentEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedOrderPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPayment)

### parsePaymentAck

> **parsePaymentAck**: (`event`) => [`ParsedOrderPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentAck) = `parseOrderPaymentAckEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedOrderPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentAck)

### parsePaymentNack

> **parsePaymentNack**: (`event`) => [`ParsedOrderPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentNack) = `parseOrderPaymentNackEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedOrderPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentNack)

### parsePaymentSettlement

> **parsePaymentSettlement**: (`event`) => [`ParsedOrderPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentSettlement) = `parseOrderPaymentSettlementEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedOrderPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderPaymentSettlement)

### participantProofTag

> **participantProofTag**: (`proof`) => `string`[]

#### Parameters

##### proof

[`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag)

#### Returns

`string`[]

### paymentAckTemplate

> **paymentAckTemplate**: (`ack`) => `EventTemplate` = `generateOrderPaymentAckEventTemplate`

#### Parameters

##### ack

[`OrderPaymentAckTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentAckTemplate)

#### Returns

`EventTemplate`

### paymentNackTemplate

> **paymentNackTemplate**: (`nack`) => `EventTemplate` = `generateOrderPaymentNackEventTemplate`

#### Parameters

##### nack

[`OrderPaymentNackTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentNackTemplate)

#### Returns

`EventTemplate`

### paymentSettlementTemplate

> **paymentSettlementTemplate**: (`settlement`) => `EventTemplate` = `generateOrderPaymentSettlementEventTemplate`

#### Parameters

##### settlement

[`OrderPaymentSettlementTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentSettlementTemplate)

#### Returns

`EventTemplate`

### paymentTemplate

> **paymentTemplate**: (`payment`) => `EventTemplate` = `generateOrderPaymentEventTemplate`

#### Parameters

##### payment

[`OrderPaymentTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderPaymentTemplate)

#### Returns

`EventTemplate`

### search

> **search**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\> = `orderQueries.search`

#### Parameters

##### pool

`OrderQueryPool`

##### relays

`string`[]

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery) = `{}`

##### options?

[`OrderSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSearchOptions) = `{}`

#### Returns

`Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\>

### subscribe

> **subscribe**: (`pool`, `relays`, `query`, `handlers`, `options`) => `SubCloser` = `orderQueries.subscribe`

#### Parameters

##### pool

`OrderSubscribePool`

##### relays

`string`[]

##### query

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery)

##### handlers

[`OrderSubscribeHandlers`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeHandlers)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions) = `{}`

#### Returns

`SubCloser`

### template

> **template**: (`order`) => `EventTemplate` = `generateOrderEventTemplate`

#### Parameters

##### order

[`OrderTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderTemplate)

#### Returns

`EventTemplate`

### tradeKeyAuthorizationTemplate

> **tradeKeyAuthorizationTemplate**: (`auth`) => `EventTemplate` = `generateTradeKeyAuthorizationEventTemplate`

#### Parameters

##### auth

[`TradeKeyAuthorizationTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/TradeKeyAuthorizationTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateOrderEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
