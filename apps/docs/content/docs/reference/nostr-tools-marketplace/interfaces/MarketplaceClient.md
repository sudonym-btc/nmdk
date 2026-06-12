---
title: "Interface: MarketplaceClient"
description: "Interface: MarketplaceClient in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceClient

Defined in: [runtime-types.ts:915](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L915)

## Extended by

- [`MarketplaceSession`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceSession)

## Properties

### arbitration

> **arbitration**: [`MarketplaceArbitrationApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceArbitrationApi)

Defined in: [runtime-types.ts:926](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L926)

***

### arbitrationServices

> **arbitrationServices**: [`MarketplaceArbitrationServicesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceArbitrationServicesApi)

Defined in: [runtime-types.ts:918](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L918)

***

### arbitrationServiceSelections

> **arbitrationServiceSelections**: [`MarketplaceArbitrationServiceSelectionsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceArbitrationServiceSelectionsApi)

Defined in: [runtime-types.ts:919](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L919)

***

### auctions

> **auctions**: [`MarketplaceAuctionsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionsApi)

Defined in: [runtime-types.ts:924](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L924)

***

### listings

> **listings**: [`MarketplaceListingsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceListingsApi)

Defined in: [runtime-types.ts:916](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L916)

***

### orders

> **orders**: [`MarketplaceOrdersApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceOrdersApi)

Defined in: [runtime-types.ts:920](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L920)

***

### paymentMethod

> **paymentMethod**: [`MarketplacePaymentMethodApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentMethodApi)

Defined in: [runtime-types.ts:917](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L917)

***

### paymentRoutes

> **paymentRoutes**: [`MarketplacePaymentRoutesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentRoutesApi)

Defined in: [runtime-types.ts:923](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L923)

***

### payments

> **payments**: [`MarketplacePaymentsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentsApi)

Defined in: [runtime-types.ts:925](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L925)

***

### reviews

> **reviews**: [`MarketplaceReviewsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceReviewsApi)

Defined in: [runtime-types.ts:921](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L921)

***

### structuredMessages

> **structuredMessages**: [`MarketplaceStructuredMessagesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceStructuredMessagesApi)

Defined in: [runtime-types.ts:922](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L922)

## Methods

### discoverHighWatermark()

> **discoverHighWatermark**(`options?`): `Promise`\<[`MarketplaceHighWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkDiscovery)\>

Defined in: [runtime-types.ts:927](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L927)

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<[`MarketplaceHighWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkDiscovery)\>

***

### getNextAccountIndex()

> **getNextAccountIndex**(`options?`): `Promise`\<`number`\>

Defined in: [runtime-types.ts:928](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L928)

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<`number`\>

***

### pay()

> **pay**(`listing`, `order`, `options?`): `AsyncIterable`\<[`MarketplacePaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentState)\>

Defined in: [runtime-types.ts:930](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L930)

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

Defined in: [runtime-types.ts:929](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L929)

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<[`MarketplaceStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStartResult)\>
