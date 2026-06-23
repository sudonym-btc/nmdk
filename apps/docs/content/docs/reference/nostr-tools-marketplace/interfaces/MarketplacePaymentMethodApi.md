---
title: "Interface: MarketplacePaymentMethodApi"
description: "Interface: MarketplacePaymentMethodApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplacePaymentMethodApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:911](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L911)

## Properties

### canonicalAssetId

> **canonicalAssetId**: (`assetId`) => `string`

Defined in: [nostr-tools/marketplace/runtime-types.ts:917](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L917)

#### Parameters

##### assetId

`string`

#### Returns

`string`

***

### filter

> **filter**: (`query`) => `Filter`

Defined in: [nostr-tools/marketplace/runtime-types.ts:915](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L915)

#### Parameters

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery) = `{}`

#### Returns

`Filter`

***

### parse

> **parse**: (`event`) => [`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod)

Defined in: [nostr-tools/marketplace/runtime-types.ts:912](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L912)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod)

***

### template

> **template**: (`method`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:914](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L914)

#### Parameters

##### method

[`PaymentMethodTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:913](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L913)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### findOne()

> **findOne**(`query?`, `options?`): `Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:916](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L916)

#### Parameters

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery)

##### options?

[`PaymentMethodFindOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindOptions)

#### Returns

`Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>
