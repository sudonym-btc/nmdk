---
title: "Variable: escrowServiceSelections"
description: "Variable: escrowServiceSelections in nostr-tools/marketplace."
full: true
---

# Variable: escrowServiceSelections

> `const` **escrowServiceSelections**: `object`

Defined in: [escrowservice.ts:241](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/escrowservice.ts#L241)

## Type Declaration

### parse

> **parse**: (`event`) => [`ParsedEscrowServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowServiceSelection) = `parseEscrowServiceSelectionEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedEscrowServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedEscrowServiceSelection)

### template

> **template**: (`selection`) => `EventTemplate` = `generateEscrowServiceSelectionEventTemplate`

#### Parameters

##### selection

[`EscrowServiceSelectionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/EscrowServiceSelectionTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateEscrowServiceSelectionEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
