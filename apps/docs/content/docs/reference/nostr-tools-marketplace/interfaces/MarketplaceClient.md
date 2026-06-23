---
title: "Interface: MarketplaceClient"
description: "Interface: MarketplaceClient in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceClient

Defined in: [nostr-tools/marketplace/runtime-types.ts:1266](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1266)

## Properties

### arbitration

> **arbitration**: [`MarketplaceArbitrationApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceArbitrationApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1280](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1280)

***

### arbitrationServices

> **arbitrationServices**: [`MarketplaceArbitrationServicesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceArbitrationServicesApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1272](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1272)

***

### arbitrationServiceSelections

> **arbitrationServiceSelections**: [`MarketplaceArbitrationServiceSelectionsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceArbitrationServiceSelectionsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1273](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1273)

***

### auctions

> **auctions**: [`MarketplaceAuctionsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceAuctionsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1278](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1278)

***

### listings

> **listings**: [`MarketplaceListingsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceListingsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1268](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1268)

***

### locations

> **locations**: [`MarketplaceLocationsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceLocationsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1270](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1270)

***

### me

> **me**: [`MarketplaceMeApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceMeApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1277](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1277)

***

### nextTradeIndex

> `readonly` **nextTradeIndex**: [`MarketplaceValue`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceValue)\<`number` \| `undefined`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1267](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1267)

***

### orders

> **orders**: [`MarketplaceOrdersApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceOrdersApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1274](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1274)

***

### paymentMethod

> **paymentMethod**: [`MarketplacePaymentMethodApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentMethodApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1271](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1271)

***

### payments

> **payments**: [`MarketplacePaymentsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1279](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1279)

***

### reviews

> **reviews**: [`MarketplaceReviewsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceReviewsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1275](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1275)

***

### shippingOption

> **shippingOption**: [`MarketplaceShippingOptionApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceShippingOptionApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1269](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1269)

***

### structuredMessages

> **structuredMessages**: [`MarketplaceStructuredMessagesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceStructuredMessagesApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1276](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1276)

## Methods

### discoverHighWatermark()

> **discoverHighWatermark**(`options?`): `Promise`\<[`MarketplaceHighWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkDiscovery)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1281](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1281)

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<[`MarketplaceHighWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkDiscovery)\>

***

### getNextAccountIndex()

> **getNextAccountIndex**(`options?`): `Promise`\<`number`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1282](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1282)

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<`number`\>

***

### pay()

> **pay**(`listing`, `order`, `options?`): `AsyncIterable`\<[`MarketplacePaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentState)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1285](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1285)

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

### session()

> **session**(`signer`, `options?`): `Promise`\<[`MarketplaceSession`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceSession)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1284](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1284)

#### Parameters

##### signer

[`MarketplaceSeedSigner`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedSigner)

##### options?

[`MarketplaceSessionOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionOptions)

#### Returns

`Promise`\<[`MarketplaceSession`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceSession)\>

***

### start()

> **start**(`options?`): `Promise`\<[`MarketplaceStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStartResult)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1283](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1283)

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<[`MarketplaceStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStartResult)\>
