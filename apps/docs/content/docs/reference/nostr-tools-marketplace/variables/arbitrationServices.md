---
title: "Variable: arbitrationServices"
description: "Variable: arbitrationServices in nostr-tools/marketplace."
full: true
---

# Variable: arbitrationServices

> `const` **arbitrationServices**: `object`

Defined in: [nostr-tools/marketplace/arbitrationservice.ts:246](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/arbitrationservice.ts#L246)

## Type Declaration

### calculateFee

> **calculateFee**: (`fee`, `amount`, `asset`) => `bigint` = `calculateArbitrationFee`

#### Parameters

##### fee

[`ArbitrationFee`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationFee)

##### amount

`bigint`

##### asset?

`string` = `'native'`

#### Returns

`bigint`

### filter

> **filter**: (`query`) => `Filter` = `arbitrationServiceFilter`

#### Parameters

##### query?

[`ArbitrationServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceFindQuery) = `{}`

#### Returns

`Filter`

### findOne

> **findOne**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService) \| `null`\> = `findArbitrationService`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`ArbitrationServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceFindQuery) = `{}`

##### options?

[`ArbitrationServiceSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceSearchOptions) = `{}`

#### Returns

`Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService) \| `null`\>

### parse

> **parse**: (`event`) => [`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService) = `parseArbitrationServiceEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)

### search

> **search**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)[]\> = `searchArbitrationServices`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`ArbitrationServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceFindQuery) = `{}`

##### options?

[`ArbitrationServiceSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceSearchOptions) = `{}`

#### Returns

`Promise`\<[`ParsedArbitrationService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationService)[]\>

### template

> **template**: (`service`) => `EventTemplate` = `generateArbitrationServiceEventTemplate`

#### Parameters

##### service

[`ArbitrationServiceTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateArbitrationServiceEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
