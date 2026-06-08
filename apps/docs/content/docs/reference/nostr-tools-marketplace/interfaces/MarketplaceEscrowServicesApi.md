---
title: "Interface: MarketplaceEscrowServicesApi"
description: "Interface: MarketplaceEscrowServicesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceEscrowServicesApi

Defined in: runtime-types.ts:779

## Properties

### calculateFee

> **calculateFee**: (`fee`, `amount`, `asset`) => `bigint`

Defined in: runtime-types.ts:786

#### Parameters

##### fee

[`EscrowFee`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowFee)

##### amount

`bigint`

##### asset?

`string` = `'native'`

#### Returns

`bigint`

***

### filter

> **filter**: (`query`) => `Filter`

Defined in: runtime-types.ts:783

#### Parameters

##### query?

[`EscrowServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceFindQuery) = `{}`

#### Returns

`Filter`

***

### parse

> **parse**: (`event`) => [`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService)

Defined in: runtime-types.ts:780

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService)

***

### template

> **template**: (`service`) => `EventTemplate`

Defined in: runtime-types.ts:782

#### Parameters

##### service

[`EscrowServiceTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: runtime-types.ts:781

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### findOne()

> **findOne**(`query?`): `Promise`\<[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService) \| `null`\>

Defined in: runtime-types.ts:785

#### Parameters

##### query?

[`EscrowServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceFindQuery)

#### Returns

`Promise`\<[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService) \| `null`\>

***

### search()

> **search**(`query?`): `Promise`\<[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService)[]\>

Defined in: runtime-types.ts:784

#### Parameters

##### query?

[`EscrowServiceFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceFindQuery)

#### Returns

`Promise`\<[`ParsedEscrowService`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowService)[]\>
