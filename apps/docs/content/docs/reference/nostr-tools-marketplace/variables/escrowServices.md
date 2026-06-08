---
title: "Variable: escrowServices"
description: "Variable: escrowServices in nostr-tools/marketplace."
full: true
---

# Variable: escrowServices

> `const` **escrowServices**: `object`

Defined in: [escrowservice.ts:231](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/escrowservice.ts#L231)

## Type Declaration

### calculateFee

> **calculateFee**: (`fee`, `amount`, `asset`) => `bigint` = `calculateEscrowFee`

#### Parameters

##### fee

[`EscrowFee`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowFee)

##### amount

`bigint`

##### asset?

`string` = `'native'`

#### Returns

`bigint`

### filter

> **filter**: (`query`) => `Filter` = `escrowServiceFilter`

#### Parameters

##### query?

[`EscrowServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceFindQuery) = `{}`

#### Returns

`Filter`

### findOne

> **findOne**: (`pool`, `relays`, `query`) => `Promise`\<[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService) \| `null`\> = `findEscrowService`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`EscrowServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceFindQuery) = `{}`

#### Returns

`Promise`\<[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService) \| `null`\>

### parse

> **parse**: (`event`) => [`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService) = `parseEscrowServiceEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService)

### search

> **search**: (`pool`, `relays`, `query`) => `Promise`\<[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService)[]\> = `searchEscrowServices`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`EscrowServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceFindQuery) = `{}`

#### Returns

`Promise`\<[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService)[]\>

### template

> **template**: (`service`) => `EventTemplate` = `generateEscrowServiceEventTemplate`

#### Parameters

##### service

[`EscrowServiceTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateEscrowServiceEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
