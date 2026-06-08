---
title: "Interface: MarketplaceEscrowServiceSelectionsApi"
description: "Interface: MarketplaceEscrowServiceSelectionsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceEscrowServiceSelectionsApi

Defined in: runtime-types.ts:789

## Properties

### parse

> **parse**: (`event`) => [`ParsedEscrowServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowServiceSelection)

Defined in: runtime-types.ts:790

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedEscrowServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowServiceSelection)

***

### template

> **template**: (`selection`) => `EventTemplate`

Defined in: runtime-types.ts:792

#### Parameters

##### selection

[`EscrowServiceSelectionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceSelectionTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: runtime-types.ts:791

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
