---
title: "Interface: MarketplaceArbitrationServiceSelectionsApi"
description: "Interface: MarketplaceArbitrationServiceSelectionsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceArbitrationServiceSelectionsApi

Defined in: [runtime-types.ts:748](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L748)

## Properties

### parse

> **parse**: (`event`) => [`ParsedArbitrationServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationServiceSelection)

Defined in: [runtime-types.ts:749](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L749)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedArbitrationServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationServiceSelection)

***

### template

> **template**: (`selection`) => `EventTemplate`

Defined in: [runtime-types.ts:751](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L751)

#### Parameters

##### selection

[`ArbitrationServiceSelectionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceSelectionTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [runtime-types.ts:750](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L750)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
