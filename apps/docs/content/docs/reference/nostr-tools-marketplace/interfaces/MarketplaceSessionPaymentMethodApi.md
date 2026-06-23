---
title: "Interface: MarketplaceSessionPaymentMethodApi"
description: "Interface: MarketplaceSessionPaymentMethodApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceSessionPaymentMethodApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:333](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L333)

## Properties

### canonicalAssetId

> **canonicalAssetId**: (`assetId`) => `string`

Defined in: [nostr-tools/marketplace/runtime-types.ts:339](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L339)

#### Parameters

##### assetId

`string`

#### Returns

`string`

***

### filter

> **filter**: (`query`) => `Filter`

Defined in: [nostr-tools/marketplace/runtime-types.ts:337](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L337)

#### Parameters

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery) = `{}`

#### Returns

`Filter`

***

### parse

> **parse**: (`event`) => [`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod)

Defined in: [nostr-tools/marketplace/runtime-types.ts:334](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L334)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod)

***

### template

> **template**: (`method`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:336](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L336)

#### Parameters

##### method

[`PaymentMethodTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:335](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L335)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### ensureUpToDate()

> **ensureUpToDate**(`options?`): `Promise`\<[`MarketplacePaymentMethodEnsureResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodEnsureResult)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:341](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L341)

#### Parameters

##### options?

[`MarketplacePaymentMethodEnsureOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodEnsureOptions)

#### Returns

`Promise`\<[`MarketplacePaymentMethodEnsureResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentMethodEnsureResult)\>

***

### find()

> **find**(): `Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:340](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L340)

#### Returns

`Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>

***

### findOne()

> **findOne**(`query?`): `Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:338](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L338)

#### Parameters

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery)

#### Returns

`Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>
