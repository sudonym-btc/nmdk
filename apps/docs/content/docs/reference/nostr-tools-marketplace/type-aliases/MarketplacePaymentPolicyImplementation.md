---
title: "Type Alias: MarketplacePaymentPolicyImplementation\\<State\\>"
description: "Type Alias: MarketplacePaymentPolicyImplementation\\<State\\> in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplacePaymentPolicyImplementation\<State\>

> **MarketplacePaymentPolicyImplementation**\<`State`\> = `object`

Defined in: runtime-types.ts:577

## Type Parameters

### State

`State` = [`MarketplacePolicyPaymentState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyPaymentState)

## Properties

### arbitrate?

> `optional` **arbitrate?**: (`intent`) => `AsyncIterable`\<[`MarketplaceEscrowArbitrationState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceEscrowArbitrationState)\> \| `Promise`\<`AsyncIterable`\<[`MarketplaceEscrowArbitrationState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceEscrowArbitrationState)\>\>

Defined in: runtime-types.ts:594

#### Parameters

##### intent

[`MarketplaceEscrowArbitrationIntent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceEscrowArbitrationIntent)

#### Returns

`AsyncIterable`\<[`MarketplaceEscrowArbitrationState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceEscrowArbitrationState)\> \| `Promise`\<`AsyncIterable`\<[`MarketplaceEscrowArbitrationState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceEscrowArbitrationState)\>\>

***

### discoverHighWatermark?

> `optional` **discoverHighWatermark?**: (`context`) => [`MarketplacePolicyWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyWatermarkDiscovery) \| `Promise`\<[`MarketplacePolicyWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyWatermarkDiscovery)\>

Defined in: runtime-types.ts:584

#### Parameters

##### context

[`MarketplacePolicyWatermarkContext`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyWatermarkContext)

#### Returns

[`MarketplacePolicyWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyWatermarkDiscovery) \| `Promise`\<[`MarketplacePolicyWatermarkDiscovery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyWatermarkDiscovery)\>

***

### family

> **family**: `"escrow"` \| `"auction"` \| `string`

Defined in: runtime-types.ts:581

***

### id?

> `optional` **id?**: `string`

Defined in: runtime-types.ts:579

***

### method

> **method**: [`PaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethod)

Defined in: runtime-types.ts:578

***

### recover?

> `optional` **recover?**: (`payment`) => `AsyncIterable`\<[`MarketplacePaymentRecoveryState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryState)\> \| `Promise`\<`AsyncIterable`\<[`MarketplacePaymentRecoveryState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryState)\>\>

Defined in: runtime-types.ts:591

#### Parameters

##### payment

[`MarketplacePaymentRecoveryItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryItem)

#### Returns

`AsyncIterable`\<[`MarketplacePaymentRecoveryState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryState)\> \| `Promise`\<`AsyncIterable`\<[`MarketplacePaymentRecoveryState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRecoveryState)\>\>

***

### recyclePayment?

> `optional` **recyclePayment?**: (`intent`) => `Promise`\<[`MarketplaceAuctionPaymentSettlementResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionPaymentSettlementResult)\>

Defined in: runtime-types.ts:601

#### Parameters

##### intent

[`MarketplaceAuctionPaymentSettlementIntent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionPaymentSettlementIntent) & `object`

#### Returns

`Promise`\<[`MarketplaceAuctionPaymentSettlementResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionPaymentSettlementResult)\>

***

### refundPayment?

> `optional` **refundPayment?**: (`intent`) => `Promise`\<[`MarketplaceAuctionPaymentSettlementResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionPaymentSettlementResult)\>

Defined in: runtime-types.ts:598

#### Parameters

##### intent

[`MarketplaceAuctionPaymentSettlementIntent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionPaymentSettlementIntent) & `object`

#### Returns

`Promise`\<[`MarketplaceAuctionPaymentSettlementResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAuctionPaymentSettlementResult)\>

***

### startup?

> `optional` **startup?**: (`context`) => `void` \| [`MarketplacePolicyStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyStartResult) \| `Promise`\<`void` \| [`MarketplacePolicyStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyStartResult)\>

Defined in: runtime-types.ts:587

#### Parameters

##### context

[`MarketplacePolicyStartContext`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyStartContext)

#### Returns

`void` \| [`MarketplacePolicyStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyStartResult) \| `Promise`\<`void` \| [`MarketplacePolicyStartResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePolicyStartResult)\>

***

### subject

> **subject**: `"order"` \| `"bid"`

Defined in: runtime-types.ts:580

***

### validatePayment?

> `optional` **validatePayment?**: (`request`) => `Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>

Defined in: runtime-types.ts:597

#### Parameters

##### request

[`MarketplacePaymentValidationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationRequest)

#### Returns

`Promise`\<[`MarketplacePaymentValidationResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentValidationResult)\>

## Methods

### assets()

> **assets**(): [`MarketplacePaymentAsset`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentAsset)[]

Defined in: runtime-types.ts:583

#### Returns

[`MarketplacePaymentAsset`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentAsset)[]

***

### pay()

> **pay**(`intent`): `AsyncIterable`\<`State`, `any`, `any`\> \| `Promise`\<`AsyncIterable`\<`State`, `any`, `any`\>\>

Defined in: runtime-types.ts:590

#### Parameters

##### intent

[`MarketplacePaymentIntent`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentIntent)

#### Returns

`AsyncIterable`\<`State`, `any`, `any`\> \| `Promise`\<`AsyncIterable`\<`State`, `any`, `any`\>\>

***

### policies()

> **policies**(): [`MarketplacePaymentPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentPolicy)[]

Defined in: runtime-types.ts:582

#### Returns

[`MarketplacePaymentPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentPolicy)[]
