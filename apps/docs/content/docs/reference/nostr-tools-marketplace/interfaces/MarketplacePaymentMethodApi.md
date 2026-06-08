---
title: "Interface: MarketplacePaymentMethodApi"
description: "Interface: MarketplacePaymentMethodApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplacePaymentMethodApi

Defined in: runtime-types.ts:770

## Properties

### canonicalAssetId

> **canonicalAssetId**: (`assetId`) => `string`

Defined in: runtime-types.ts:776

#### Parameters

##### assetId

`string`

#### Returns

`string`

***

### filter

> **filter**: (`query`) => `Filter`

Defined in: runtime-types.ts:774

#### Parameters

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery) = `{}`

#### Returns

`Filter`

***

### parse

> **parse**: (`event`) => [`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod)

Defined in: runtime-types.ts:771

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod)

***

### template

> **template**: (`method`) => `EventTemplate`

Defined in: runtime-types.ts:773

#### Parameters

##### method

[`PaymentMethodTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: runtime-types.ts:772

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### findOne()

> **findOne**(`query?`): `Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>

Defined in: runtime-types.ts:775

#### Parameters

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery)

#### Returns

`Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>
