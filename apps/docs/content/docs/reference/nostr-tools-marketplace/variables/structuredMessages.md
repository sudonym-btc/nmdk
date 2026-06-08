---
title: "Variable: structuredMessages"
description: "Variable: structuredMessages in nostr-tools/marketplace."
full: true
---

# Variable: structuredMessages

> `const` **structuredMessages**: `object`

Defined in: [order.ts:425](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order.ts#L425)

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
