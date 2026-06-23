---
title: "Variable: arbitrationServiceSelections"
description: "Variable: arbitrationServiceSelections in nostr-tools/marketplace."
full: true
---

# Variable: arbitrationServiceSelections

> `const` **arbitrationServiceSelections**: `object`

Defined in: [nostr-tools/marketplace/arbitrationservice.ts:256](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/arbitrationservice.ts#L256)

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
