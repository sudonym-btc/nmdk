---
title: "Type Alias: MarketplaceSessionOptions"
description: "Type Alias: MarketplaceSessionOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceSessionOptions

> **MarketplaceSessionOptions** = `Omit`\<[`MarketplaceRuntimeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceRuntimeOptions), `"pool"` \| `"relays"` \| `"identity"` \| `"seed"` \| `"signer"` \| `"publish"` \| `"orderPolicies"` \| `"bidPolicies"`\> & [`MarketplaceDriverOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceDriverOptions) & `object`

Defined in: [nostr-tools/marketplace/runtime-types.ts:872](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L872)

## Type Declaration

### createdAt?

> `optional` **createdAt?**: `number`

### ensurePaymentMethod?

> `optional` **ensurePaymentMethod?**: `boolean`

### paymentMethod?

> `optional` **paymentMethod?**: [`MarketplacePaymentMethodDefaults`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodDefaults)

### pubkey?

> `optional` **pubkey?**: `string`

### seed?

> `optional` **seed?**: `string`

### publish()?

> `optional` **publish**(`event`): `unknown`

#### Parameters

##### event

`NostrEvent`

#### Returns

`unknown`
