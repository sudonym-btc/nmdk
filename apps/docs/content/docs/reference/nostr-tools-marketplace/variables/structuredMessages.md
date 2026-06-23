---
title: "Variable: structuredMessages"
description: "Variable: structuredMessages in nostr-tools/marketplace."
full: true
---

# Variable: structuredMessages

> `const` **structuredMessages**: `object`

Defined in: [nostr-tools/marketplace/order.ts:406](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order.ts#L406)

## Type Declaration

### parse

> **parse**: (`event`) => [`ParsedStructuredMessage`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedStructuredMessage) = `parseStructuredMessageEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedStructuredMessage`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedStructuredMessage)

### template

> **template**: (`message`) => `EventTemplate` = `generateStructuredMessageEventTemplate`

#### Parameters

##### message

[`StructuredMessageTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/StructuredMessageTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateStructuredMessageEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
