---
title: "Interface: MarketplaceArbitrationServicesApi"
description: "Interface: MarketplaceArbitrationServicesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceArbitrationServicesApi

Defined in: [runtime-types.ts:738](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L738)

## Properties

### calculateFee

> **calculateFee**: (`fee`, `amount`, `asset`) => `bigint`

Defined in: [runtime-types.ts:745](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L745)

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

Defined in: [runtime-types.ts:742](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L742)

#### Parameters

##### query?

[`ArbitrationServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceFindQuery) = `{}`

#### Returns

`Filter`

***

### parse

> **parse**: (`event`) => [`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)

Defined in: [runtime-types.ts:739](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L739)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)

***

### template

> **template**: (`service`) => `EventTemplate`

Defined in: [runtime-types.ts:741](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L741)

#### Parameters

##### service

[`ArbitrationServiceTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [runtime-types.ts:740](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L740)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### findOne()

> **findOne**(`query?`): `Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService) \| `null`\>

Defined in: [runtime-types.ts:744](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L744)

#### Parameters

##### query?

[`ArbitrationServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceFindQuery)

#### Returns

`Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService) \| `null`\>

***

### search()

> **search**(`query?`): `Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)[]\>

Defined in: [runtime-types.ts:743](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L743)

#### Parameters

##### query?

[`ArbitrationServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceFindQuery)

#### Returns

`Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)[]\>
