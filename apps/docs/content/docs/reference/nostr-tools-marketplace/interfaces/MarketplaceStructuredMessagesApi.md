---
title: "Interface: MarketplaceStructuredMessagesApi"
description: "Interface: MarketplaceStructuredMessagesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceStructuredMessagesApi

Defined in: [runtime-types.ts:827](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L827)

## Properties

### template

> **template**: (`message`) => `EventTemplate`

Defined in: [runtime-types.ts:830](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L830)

#### Parameters

##### message

[`StructuredMessageTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/StructuredMessageTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [runtime-types.ts:829](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L829)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### parse()

> **parse**(`event`): [`ParsedStructuredMessage`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedStructuredMessage)

Defined in: [runtime-types.ts:828](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L828)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedStructuredMessage`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedStructuredMessage)
