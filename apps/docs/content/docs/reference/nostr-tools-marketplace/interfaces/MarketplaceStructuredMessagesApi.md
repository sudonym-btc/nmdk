---
title: "Interface: MarketplaceStructuredMessagesApi"
description: "Interface: MarketplaceStructuredMessagesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceStructuredMessagesApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:997](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L997)

## Properties

### template

> **template**: (`message`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1000](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1000)

#### Parameters

##### message

[`StructuredMessageTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/StructuredMessageTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:999](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L999)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### parse()

> **parse**(`event`): [`ParsedStructuredMessage`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedStructuredMessage)

Defined in: [nostr-tools/marketplace/runtime-types.ts:998](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L998)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedStructuredMessage`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedStructuredMessage)
