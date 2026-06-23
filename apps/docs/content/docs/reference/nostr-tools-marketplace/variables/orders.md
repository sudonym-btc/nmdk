---
title: "Variable: orders"
description: "Variable: orders in nostr-tools/marketplace."
full: true
---

# Variable: orders

> `const` **orders**: `object`

Defined in: [nostr-tools/marketplace/order.ts:376](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order.ts#L376)

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

[`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions) & `object` = `{}`

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

`Iterable`\<[`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag) \| [`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)\>

##### Returns

`string`

#### groups.idForEvent

> **idForEvent**: (`event`) => `string` = `participantGroupIdForEvent`

##### Parameters

###### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

##### Returns

`string`

#### groups.idForOrder

> **idForOrder**: (`order`) => `string` = `orderGroupIdForOrder`

##### Parameters

###### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder) \| [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

##### Returns

`string`

#### groups.parseEvent

> **parseEvent**: (`event`) => [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent) = `parseOrderGroupEvent`

##### Parameters

###### event

`NostrEvent` \| [`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)

##### Returns

[`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)

#### groups.parseParticipantEvent

> **parseParticipantEvent**: (`event`) => [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent) = `parseParticipantGroupEvent`

##### Parameters

###### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

##### Returns

[`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

#### groups.participantEntries

> **participantEntries**: (`event`) => [`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)[] = `participantGroupRoleParticipants`

##### Parameters

###### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

##### Returns

[`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)[]

#### groups.participantPubkeys

> **participantPubkeys**: (`event`) => `string`[] = `participantGroupParticipantPubkeys`

##### Parameters

###### event

`NostrEvent` \| [`ParticipantGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantGroupEvent)

##### Returns

`string`[]

#### groups.participants

> **participants**: (`order`) => `string`[] = `orderGroupParticipantPubkeys`

##### Parameters

###### order

`NostrEvent` \| [`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder) \| [`ParsedMarketplaceAuctionBid`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedMarketplaceAuctionBid)

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

#### groups.roles

> **roles**: (`groups`, `identity`) => [`OrderGroupRoles`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupRoles) = `roleOrderGroups`

##### Parameters

###### groups

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

###### identity

[`MarketplaceOrderIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderIdentity)

##### Returns

[`OrderGroupRoles`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupRoles)

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

#### groups.validateOrder

> **validateOrder**: (`request`) => [`MarketplaceOrderValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderValidationResult) = `validateMarketplaceOrder`

##### Parameters

###### request

[`MarketplaceOrderValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderValidationRequest)

##### Returns

[`MarketplaceOrderValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderValidationResult)

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

> **identityPubkeys**: (`identity`, `fallbackRoles`) => `string`[] = `orderQueries.identityPubkeys`

#### Parameters

##### identity?

[`MarketplaceOrderIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderIdentity) = `{}`

##### fallbackRoles?

[`MarketplaceParticipantGroupRole`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantGroupRole)[] = `...`

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

### parseParticipantProofKeyTag

> **parseParticipantProofKeyTag**: (`tag`) => `ProofDisclosureKeyTag` \| `null`

#### Parameters

##### tag

`string`[]

#### Returns

`ProofDisclosureKeyTag` \| `null`

### parseParticipantProofTag

> **parseParticipantProofTag**: (`tag`) => [`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag) \| `null`

#### Parameters

##### tag

`string`[]

#### Returns

[`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag) \| `null`

### parsePayment

> **parsePayment**: (`event`) => [`ParsedPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPayment) = `parsePaymentEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedPayment`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPayment)

### parsePaymentAck

> **parsePaymentAck**: (`event`) => [`ParsedPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentAck) = `parsePaymentAckEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedPaymentAck`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentAck)

### parsePaymentNack

> **parsePaymentNack**: (`event`) => [`ParsedPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentNack) = `parsePaymentNackEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedPaymentNack`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentNack)

### parsePaymentSettlement

> **parsePaymentSettlement**: (`event`) => [`ParsedPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentSettlement) = `parsePaymentSettlementEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedPaymentSettlement`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentSettlement)

### participantProofKeyTag

> **participantProofKeyTag**: (`key`) => `string`[]

#### Parameters

##### key

`ProofDisclosureKeyTag`

#### Returns

`string`[]

### participantProofTag

> **participantProofTag**: (`proof`) => `string`[]

#### Parameters

##### proof

[`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag)

#### Returns

`string`[]

### paymentAckTemplate

> **paymentAckTemplate**: (`ack`) => `EventTemplate` = `generatePaymentAckEventTemplate`

#### Parameters

##### ack

[`PaymentAckTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentAckTemplate)

#### Returns

`EventTemplate`

### paymentNackTemplate

> **paymentNackTemplate**: (`nack`) => `EventTemplate` = `generatePaymentNackEventTemplate`

#### Parameters

##### nack

[`PaymentNackTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentNackTemplate)

#### Returns

`EventTemplate`

### paymentSettlementTemplate

> **paymentSettlementTemplate**: (`settlement`) => `EventTemplate` = `generatePaymentSettlementEventTemplate`

#### Parameters

##### settlement

[`PaymentSettlementTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentSettlementTemplate)

#### Returns

`EventTemplate`

### paymentTemplate

> **paymentTemplate**: (`payment`) => `EventTemplate` = `generatePaymentEventTemplate`

#### Parameters

##### payment

[`PaymentTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentTemplate)

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
