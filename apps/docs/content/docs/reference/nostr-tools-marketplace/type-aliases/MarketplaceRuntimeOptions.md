---
title: "Type Alias: MarketplaceRuntimeOptions"
description: "Type Alias: MarketplaceRuntimeOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceRuntimeOptions

> **MarketplaceRuntimeOptions** = `object`

Defined in: [nostr-tools/marketplace/runtime-types.ts:754](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L754)

## Properties

### autoTrustArbiter?

> `optional` **autoTrustArbiter?**: `string` \| `string`[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:764](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L764)

***

### bidPolicies?

> `optional` **bidPolicies?**: [`MarketplaceBidPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceBidPolicy)[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:762](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L762)

***

### driverRuntime?

> `optional` **driverRuntime?**: `MarketplaceDriverRuntimeReporter`

Defined in: [nostr-tools/marketplace/runtime-types.ts:763](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L763)

***

### identity?

> `optional` **identity?**: [`MarketplaceRuntimeIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceRuntimeIdentity)

Defined in: [nostr-tools/marketplace/runtime-types.ts:758](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L758)

***

### locationProvider?

> `optional` **locationProvider?**: [`MarketplaceLocationProvider`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceLocationProvider)

Defined in: [nostr-tools/marketplace/runtime-types.ts:766](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L766)

***

### logger?

> `optional` **logger?**: [`MarketplaceLogger`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLogger)

Defined in: [nostr-tools/marketplace/runtime-types.ts:767](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L767)

***

### onInvalidEvent?

> `optional` **onInvalidEvent?**: [`MarketplaceInvalidEventHandler`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInvalidEventHandler)

Defined in: [nostr-tools/marketplace/runtime-types.ts:768](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L768)

***

### orderPolicies?

> `optional` **orderPolicies?**: [`MarketplaceOrderPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderPolicy)[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:761](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L761)

***

### paymentMethod?

> `optional` **paymentMethod?**: [`MarketplacePaymentMethodDefaults`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodDefaults)

Defined in: [nostr-tools/marketplace/runtime-types.ts:765](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L765)

***

### pool

> **pool**: [`MarketplaceRuntimePool`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceRuntimePool)

Defined in: [nostr-tools/marketplace/runtime-types.ts:755](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L755)

***

### publish?

> `optional` **publish?**: (`event`) => `unknown` \| `Promise`\<`unknown`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:760](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L760)

#### Parameters

##### event

`Event`

#### Returns

`unknown` \| `Promise`\<`unknown`\>

***

### relays

> **relays**: `string`[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:756](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L756)

***

### seed?

> `optional` **seed?**: `string`

Defined in: [nostr-tools/marketplace/runtime-types.ts:757](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L757)

***

### signer?

> `optional` **signer?**: [`MarketplaceSeedSigner`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedSigner)

Defined in: [nostr-tools/marketplace/runtime-types.ts:759](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L759)
