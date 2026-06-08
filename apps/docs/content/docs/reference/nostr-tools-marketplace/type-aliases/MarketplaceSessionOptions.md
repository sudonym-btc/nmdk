---
title: "Type Alias: MarketplaceSessionOptions"
description: "Type Alias: MarketplaceSessionOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceSessionOptions

> **MarketplaceSessionOptions** = `Omit`\<[`MarketplaceRuntimeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceRuntimeOptions), `"pool"` \| `"relays"` \| `"identity"` \| `"seed"` \| `"signer"` \| `"publish"`\> & `object`

Defined in: runtime-types.ts:752

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
