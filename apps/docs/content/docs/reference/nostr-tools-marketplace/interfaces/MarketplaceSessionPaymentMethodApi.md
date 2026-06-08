---
title: "Interface: MarketplaceSessionPaymentMethodApi"
description: "Interface: MarketplaceSessionPaymentMethodApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceSessionPaymentMethodApi

Defined in: runtime-types.ts:259

## Properties

### canonicalAssetId

> **canonicalAssetId**: (`assetId`) => `string`

Defined in: runtime-types.ts:265

#### Parameters

##### assetId

`string`

#### Returns

`string`

***

### filter

> **filter**: (`query`) => `Filter`

Defined in: runtime-types.ts:263

#### Parameters

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery) = `{}`

#### Returns

`Filter`

***

### parse

> **parse**: (`event`) => [`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod)

Defined in: runtime-types.ts:260

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod)

***

### template

> **template**: (`method`) => `EventTemplate`

Defined in: runtime-types.ts:262

#### Parameters

##### method

[`PaymentMethodTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: runtime-types.ts:261

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### ensureUpToDate()

> **ensureUpToDate**(`options?`): `Promise`\<[`MarketplacePaymentMethodEnsureResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodEnsureResult)\>

Defined in: runtime-types.ts:267

#### Parameters

##### options?

[`MarketplacePaymentMethodEnsureOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodEnsureOptions)

#### Returns

`Promise`\<[`MarketplacePaymentMethodEnsureResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodEnsureResult)\>

***

### find()

> **find**(): `Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>

Defined in: runtime-types.ts:266

#### Returns

`Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>

***

### findOne()

> **findOne**(`query?`): `Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>

Defined in: runtime-types.ts:264

#### Parameters

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery)

#### Returns

`Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>
