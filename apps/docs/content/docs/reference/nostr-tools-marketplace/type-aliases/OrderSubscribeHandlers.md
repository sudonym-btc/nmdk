---
title: "Type Alias: OrderSubscribeHandlers"
description: "Type Alias: OrderSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: OrderSubscribeHandlers

> **OrderSubscribeHandlers** = `object`

Defined in: [order-query.ts:39](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-query.ts#L39)

## Properties

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: [order-query.ts:43](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-query.ts#L43)

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: [order-query.ts:42](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-query.ts#L42)

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`order`) => `void`

Defined in: [order-query.ts:40](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-query.ts#L40)

#### Parameters

##### order

[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: [order-query.ts:41](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-query.ts#L41)

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
