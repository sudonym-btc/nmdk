---
title: "Interface: MarketplaceSession"
description: "Interface: MarketplaceSession in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceSession

Defined in: runtime-types.ts:981

## Extends

- [`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient)

## Properties

### auctions

> **auctions**: [`MarketplaceAuctionsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionsApi)

Defined in: runtime-types.ts:953

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`auctions`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#auctions)

***

### escrow

> **escrow**: [`MarketplaceEscrowApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceEscrowApi)

Defined in: runtime-types.ts:955

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`escrow`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#escrow)

***

### escrowServices

> **escrowServices**: [`MarketplaceEscrowServicesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceEscrowServicesApi)

Defined in: runtime-types.ts:947

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`escrowServices`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#escrowservices)

***

### escrowServiceSelections

> **escrowServiceSelections**: [`MarketplaceEscrowServiceSelectionsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceEscrowServiceSelectionsApi)

Defined in: runtime-types.ts:948

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`escrowServiceSelections`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#escrowserviceselections)

***

### identity

> **identity**: `object`

Defined in: runtime-types.ts:982

#### pubkey

> **pubkey**: `string`

***

### listings

> **listings**: [`MarketplaceListingsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceListingsApi)

Defined in: runtime-types.ts:945

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`listings`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#listings)

***

### orders

> **orders**: [`MarketplaceOrdersApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceOrdersApi)

Defined in: runtime-types.ts:949

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`orders`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#orders)

***

### paymentMethod

> **paymentMethod**: [`MarketplaceSessionPaymentMethodApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceSessionPaymentMethodApi)

Defined in: runtime-types.ts:986

#### Overrides

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`paymentMethod`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#paymentmethod)

***

### paymentRoutes

> **paymentRoutes**: [`MarketplacePaymentRoutesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentRoutesApi)

Defined in: runtime-types.ts:952

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`paymentRoutes`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#paymentroutes)

***

### payments

> **payments**: [`MarketplacePaymentsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentsApi)

Defined in: runtime-types.ts:954

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`payments`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#payments)

***

### reviews

> **reviews**: [`MarketplaceReviewsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceReviewsApi)

Defined in: runtime-types.ts:950

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`reviews`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#reviews)

***

### seed

> **seed**: [`MarketplaceSessionSeedApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceSessionSeedApi)

Defined in: runtime-types.ts:985

***

### structuredMessages

> **structuredMessages**: [`MarketplaceStructuredMessagesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceStructuredMessagesApi)

Defined in: runtime-types.ts:951

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`structuredMessages`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#structuredmessages)

## Methods

### discoverHighWatermark()

> **discoverHighWatermark**(`options?`): `Promise`\<[`MarketplaceHighWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkDiscovery)\>

Defined in: runtime-types.ts:956

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<[`MarketplaceHighWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkDiscovery)\>

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`discoverHighWatermark`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#discoverhighwatermark)

***

### getNextAccountIndex()

> **getNextAccountIndex**(`options?`): `Promise`\<`number`\>

Defined in: runtime-types.ts:987

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<`number`\>

#### Overrides

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`getNextAccountIndex`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#getnextaccountindex)

***

### pay()

> **pay**(`listing`, `order`, `options?`): `AsyncIterable`\<[`MarketplacePaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentState)\>

Defined in: runtime-types.ts:959

#### Parameters

##### listing

`NostrEvent` \| [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

##### order

[`MarketplaceOrderCreateParams`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderCreateParams)

##### options?

[`MarketplacePayOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePayOptions)

#### Returns

`AsyncIterable`\<[`MarketplacePaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentState)\>

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`pay`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#pay)

***

### start()

> **start**(`options?`): `Promise`\<[`MarketplaceStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStartResult)\>

Defined in: runtime-types.ts:988

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<[`MarketplaceStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStartResult)\>

#### Overrides

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`start`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#start)
