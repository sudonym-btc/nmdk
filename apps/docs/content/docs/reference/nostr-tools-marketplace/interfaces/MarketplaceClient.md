---
title: "Interface: MarketplaceClient"
description: "Interface: MarketplaceClient in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceClient

Defined in: runtime-types.ts:944

## Extended by

- [`MarketplaceSession`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceSession)

## Properties

### auctions

> **auctions**: [`MarketplaceAuctionsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionsApi)

Defined in: runtime-types.ts:953

***

### escrow

> **escrow**: [`MarketplaceEscrowApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceEscrowApi)

Defined in: runtime-types.ts:955

***

### escrowServices

> **escrowServices**: [`MarketplaceEscrowServicesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceEscrowServicesApi)

Defined in: runtime-types.ts:947

***

### escrowServiceSelections

> **escrowServiceSelections**: [`MarketplaceEscrowServiceSelectionsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceEscrowServiceSelectionsApi)

Defined in: runtime-types.ts:948

***

### listings

> **listings**: [`MarketplaceListingsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceListingsApi)

Defined in: runtime-types.ts:945

***

### orders

> **orders**: [`MarketplaceOrdersApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceOrdersApi)

Defined in: runtime-types.ts:949

***

### paymentMethod

> **paymentMethod**: [`MarketplacePaymentMethodApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentMethodApi)

Defined in: runtime-types.ts:946

***

### paymentRoutes

> **paymentRoutes**: [`MarketplacePaymentRoutesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentRoutesApi)

Defined in: runtime-types.ts:952

***

### payments

> **payments**: [`MarketplacePaymentsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentsApi)

Defined in: runtime-types.ts:954

***

### reviews

> **reviews**: [`MarketplaceReviewsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceReviewsApi)

Defined in: runtime-types.ts:950

***

### structuredMessages

> **structuredMessages**: [`MarketplaceStructuredMessagesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceStructuredMessagesApi)

Defined in: runtime-types.ts:951

## Methods

### discoverHighWatermark()

> **discoverHighWatermark**(`options?`): `Promise`\<[`MarketplaceHighWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkDiscovery)\>

Defined in: runtime-types.ts:956

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<[`MarketplaceHighWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkDiscovery)\>

***

### getNextAccountIndex()

> **getNextAccountIndex**(`options?`): `Promise`\<`number`\>

Defined in: runtime-types.ts:957

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<`number`\>

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

***

### start()

> **start**(`options?`): `Promise`\<[`MarketplaceStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStartResult)\>

Defined in: runtime-types.ts:958

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<[`MarketplaceStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStartResult)\>
