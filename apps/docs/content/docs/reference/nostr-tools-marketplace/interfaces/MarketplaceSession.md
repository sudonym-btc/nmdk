---
title: "Interface: MarketplaceSession"
description: "Interface: MarketplaceSession in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceSession

Defined in: [nostr-tools/marketplace/runtime-types.ts:1314](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1314)

## Extends

- `Omit`\<[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient), `"orders"` \| `"auctions"`\>

## Properties

### arbitration

> **arbitration**: [`MarketplaceArbitrationApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceArbitrationApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1280](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1280)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`arbitration`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#arbitration)

***

### arbitrationServices

> **arbitrationServices**: [`MarketplaceArbitrationServicesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceArbitrationServicesApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1272](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1272)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`arbitrationServices`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#arbitrationservices)

***

### arbitrationServiceSelections

> **arbitrationServiceSelections**: [`MarketplaceArbitrationServiceSelectionsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceArbitrationServiceSelectionsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1273](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1273)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`arbitrationServiceSelections`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#arbitrationserviceselections)

***

### auctions

> **auctions**: `MarketplaceSessionAuctionsApi`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1319](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1319)

***

### drivers

> **drivers**: [`MarketplaceSessionDriversApi`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionDriversApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1322](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1322)

***

### identity

> **identity**: `object`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1315](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1315)

#### pubkey

> **pubkey**: `string`

***

### listings

> **listings**: [`MarketplaceListingsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceListingsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1268](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1268)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`listings`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#listings)

***

### locations

> **locations**: [`MarketplaceLocationsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceLocationsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1270](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1270)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`locations`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#locations)

***

### me

> **me**: [`MarketplaceMeApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceMeApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1277](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1277)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`me`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#me)

***

### nextTradeIndex

> `readonly` **nextTradeIndex**: [`MarketplaceValue`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceValue)\<`number` \| `undefined`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1267](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1267)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`nextTradeIndex`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#nexttradeindex)

***

### orders

> **orders**: `MarketplaceSessionOrdersApi`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1318](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1318)

***

### paymentMethod

> **paymentMethod**: [`MarketplaceSessionPaymentMethodApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceSessionPaymentMethodApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1321](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1321)

#### Overrides

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`paymentMethod`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#paymentmethod)

***

### payments

> **payments**: [`MarketplacePaymentsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplacePaymentsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1279](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1279)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`payments`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#payments)

***

### reviews

> **reviews**: [`MarketplaceReviewsApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceReviewsApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1275](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1275)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`reviews`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#reviews)

***

### seed

> **seed**: [`MarketplaceSessionSeedApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceSessionSeedApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1320](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1320)

***

### shippingOption

> **shippingOption**: [`MarketplaceShippingOptionApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceShippingOptionApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1269](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1269)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`shippingOption`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#shippingoption)

***

### structuredMessages

> **structuredMessages**: [`MarketplaceStructuredMessagesApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceStructuredMessagesApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1276](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1276)

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`structuredMessages`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#structuredmessages)

## Methods

### discoverHighWatermark()

> **discoverHighWatermark**(`options?`): `Promise`\<[`MarketplaceHighWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkDiscovery)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1281](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1281)

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

Defined in: [nostr-tools/marketplace/runtime-types.ts:1282](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1282)

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`getNextAccountIndex`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#getnextaccountindex)

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

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`pay`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#pay)

***

### session()

> **session**(`signer`, `options?`): `Promise`\<`MarketplaceSession`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1284](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1284)

#### Parameters

##### signer

[`MarketplaceSeedSigner`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedSigner)

##### options?

[`MarketplaceSessionOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionOptions)

#### Returns

`Promise`\<`MarketplaceSession`\>

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`session`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#session)

***

### start()

> **start**(`options?`): `Promise`\<[`MarketplaceStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStartResult)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1283](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1283)

#### Parameters

##### options?

[`MarketplaceHighWatermarkOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceHighWatermarkOptions)

#### Returns

`Promise`\<[`MarketplaceStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStartResult)\>

#### Inherited from

[`MarketplaceClient`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient).[`start`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceClient#start)
