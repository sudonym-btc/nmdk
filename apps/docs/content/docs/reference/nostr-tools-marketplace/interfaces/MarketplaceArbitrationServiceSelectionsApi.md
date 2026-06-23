---
title: "Interface: MarketplaceArbitrationServiceSelectionsApi"
description: "Interface: MarketplaceArbitrationServiceSelectionsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceArbitrationServiceSelectionsApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:930](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L930)

## Properties

### parse

> **parse**: (`event`) => [`ParsedArbitrationServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationServiceSelection)

Defined in: [nostr-tools/marketplace/runtime-types.ts:931](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L931)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedArbitrationServiceSelection`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedArbitrationServiceSelection)

***

### template

> **template**: (`selection`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:933](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L933)

#### Parameters

##### selection

[`ArbitrationServiceSelectionTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ArbitrationServiceSelectionTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:932](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L932)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
