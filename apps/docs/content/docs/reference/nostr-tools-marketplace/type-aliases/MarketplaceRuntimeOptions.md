---
title: "Type Alias: MarketplaceRuntimeOptions"
description: "Type Alias: MarketplaceRuntimeOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceRuntimeOptions

> **MarketplaceRuntimeOptions** = `object`

Defined in: [runtime-types.ts:604](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L604)

## Properties

### autoTrustArbiter?

> `optional` **autoTrustArbiter?**: `string` \| `string`[]

Defined in: [runtime-types.ts:613](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L613)

***

### bidPolicies?

> `optional` **bidPolicies?**: [`MarketplaceBidPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceBidPolicy)[]

Defined in: [runtime-types.ts:612](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L612)

***

### identity?

> `optional` **identity?**: [`MarketplaceRuntimeIdentity`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceRuntimeIdentity)

Defined in: [runtime-types.ts:608](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L608)

***

### logger?

> `optional` **logger?**: [`MarketplaceLogger`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceLogger)

Defined in: [runtime-types.ts:615](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L615)

***

### orderPolicies?

> `optional` **orderPolicies?**: [`MarketplaceOrderPolicy`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderPolicy)[]

Defined in: [runtime-types.ts:611](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L611)

***

### paymentMethod?

> `optional` **paymentMethod?**: [`MarketplacePaymentMethodDefaults`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodDefaults)

Defined in: [runtime-types.ts:614](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L614)

***

### pool

> **pool**: [`MarketplaceRuntimePool`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceRuntimePool)

Defined in: [runtime-types.ts:605](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L605)

***

### publish?

> `optional` **publish?**: (`event`) => `unknown` \| `Promise`\<`unknown`\>

Defined in: [runtime-types.ts:610](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L610)

#### Parameters

##### event

`Event`

#### Returns

`unknown` \| `Promise`\<`unknown`\>

***

### relays

> **relays**: `string`[]

Defined in: [runtime-types.ts:606](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L606)

***

### seed?

> `optional` **seed?**: `string`

Defined in: [runtime-types.ts:607](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L607)

***

### signer?

> `optional` **signer?**: [`MarketplaceSeedSigner`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedSigner)

Defined in: [runtime-types.ts:609](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L609)
