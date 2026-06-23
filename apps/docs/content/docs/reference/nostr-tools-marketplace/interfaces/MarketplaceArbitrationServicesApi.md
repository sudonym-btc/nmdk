---
title: "Interface: MarketplaceArbitrationServicesApi"
description: "Interface: MarketplaceArbitrationServicesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceArbitrationServicesApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:920](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L920)

## Properties

### calculateFee

> **calculateFee**: (`fee`, `amount`, `asset`) => `bigint`

Defined in: [nostr-tools/marketplace/runtime-types.ts:927](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L927)

#### Parameters

##### fee

[`ArbitrationFee`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationFee)

##### amount

`bigint`

##### asset?

`string` = `'native'`

#### Returns

`bigint`

***

### filter

> **filter**: (`query`) => `Filter`

Defined in: [nostr-tools/marketplace/runtime-types.ts:924](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L924)

#### Parameters

##### query?

[`ArbitrationServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceFindQuery) = `{}`

#### Returns

`Filter`

***

### parse

> **parse**: (`event`) => [`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)

Defined in: [nostr-tools/marketplace/runtime-types.ts:921](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L921)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)

***

### template

> **template**: (`service`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:923](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L923)

#### Parameters

##### service

[`ArbitrationServiceTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:922](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L922)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### findOne()

> **findOne**(`query?`, `options?`): `Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService) \| `null`\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:926](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L926)

#### Parameters

##### query?

[`ArbitrationServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceFindQuery)

##### options?

[`ArbitrationServiceSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceSearchOptions)

#### Returns

`Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService) \| `null`\>

***

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:925](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L925)

#### Parameters

##### query?

[`ArbitrationServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceFindQuery)

##### options?

[`ArbitrationServiceSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceSearchOptions)

#### Returns

`Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)[]\>
