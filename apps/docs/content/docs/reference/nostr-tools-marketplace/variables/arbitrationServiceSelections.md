---
title: "Variable: arbitrationServiceSelections"
description: "Variable: arbitrationServiceSelections in nostr-tools/marketplace."
full: true
---

# Variable: arbitrationServiceSelections

> `const` **arbitrationServiceSelections**: `object`

Defined in: arbitrationservice.ts:241

## Type Declaration

### parse

> **parse**: (`event`) => [`ParsedArbitrationServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationServiceSelection) = `parseArbitrationServiceSelectionEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedArbitrationServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationServiceSelection)

### template

> **template**: (`selection`) => `EventTemplate` = `generateArbitrationServiceSelectionEventTemplate`

#### Parameters

##### selection

[`ArbitrationServiceSelectionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceSelectionTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateArbitrationServiceSelectionEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
