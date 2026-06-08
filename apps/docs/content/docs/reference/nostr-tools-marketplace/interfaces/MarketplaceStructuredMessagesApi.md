---
title: "Interface: MarketplaceStructuredMessagesApi"
description: "Interface: MarketplaceStructuredMessagesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceStructuredMessagesApi

Defined in: runtime-types.ts:861

## Properties

### template

> **template**: (`message`) => `EventTemplate`

Defined in: runtime-types.ts:864

#### Parameters

##### message

[`StructuredMessageTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/StructuredMessageTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: runtime-types.ts:863

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### parse()

> **parse**(`event`): [`ParsedStructuredMessage`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedStructuredMessage)

Defined in: runtime-types.ts:862

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedStructuredMessage`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedStructuredMessage)
