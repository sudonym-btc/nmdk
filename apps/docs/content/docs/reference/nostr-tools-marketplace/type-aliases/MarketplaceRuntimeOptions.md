---
title: "Type Alias: MarketplaceRuntimeOptions"
description: "Type Alias: MarketplaceRuntimeOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceRuntimeOptions

> **MarketplaceRuntimeOptions** = `object`

Defined in: runtime-types.ts:646

## Properties

### autoTrustEscrow?

> `optional` **autoTrustEscrow?**: `string` \| `string`[]

Defined in: runtime-types.ts:655

***

### bidPolicies?

> `optional` **bidPolicies?**: [`MarketplaceBidPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceBidPolicy)[]

Defined in: runtime-types.ts:654

***

### identity?

> `optional` **identity?**: [`MarketplaceRuntimeIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceRuntimeIdentity)

Defined in: runtime-types.ts:650

***

### orderPolicies?

> `optional` **orderPolicies?**: [`MarketplaceOrderPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderPolicy)[]

Defined in: runtime-types.ts:653

***

### paymentMethod?

> `optional` **paymentMethod?**: [`MarketplacePaymentMethodDefaults`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodDefaults)

Defined in: runtime-types.ts:656

***

### pool

> **pool**: [`MarketplaceRuntimePool`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceRuntimePool)

Defined in: runtime-types.ts:647

***

### publish?

> `optional` **publish?**: (`event`) => `unknown` \| `Promise`\<`unknown`\>

Defined in: runtime-types.ts:652

#### Parameters

##### event

`Event`

#### Returns

`unknown` \| `Promise`\<`unknown`\>

***

### relays

> **relays**: `string`[]

Defined in: runtime-types.ts:648

***

### seed?

> `optional` **seed?**: `string`

Defined in: runtime-types.ts:649

***

### signer?

> `optional` **signer?**: [`MarketplaceSeedSigner`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedSigner)

Defined in: runtime-types.ts:651
