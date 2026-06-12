---
title: "Type Alias: OrderGroupSubscribeHandlers"
description: "Type Alias: OrderGroupSubscribeHandlers in nostr-tools/marketplace."
full: true
---

# Type Alias: OrderGroupSubscribeHandlers

> **OrderGroupSubscribeHandlers** = `object`

Defined in: [order-group-types.ts:118](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L118)

## Properties

### onclose?

> `optional` **onclose?**: (`reasons`) => `void`

Defined in: [order-group-types.ts:124](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L124)

#### Parameters

##### reasons

`string`[]

#### Returns

`void`

***

### oneose?

> `optional` **oneose?**: () => `void`

Defined in: [order-group-types.ts:123](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L123)

#### Returns

`void`

***

### onevent?

> `optional` **onevent?**: (`event`) => `void`

Defined in: [order-group-types.ts:119](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L119)

#### Parameters

##### event

[`OrderGroupEvent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupEvent)

#### Returns

`void`

***

### ongroup?

> `optional` **ongroup?**: (`group`) => `void`

Defined in: [order-group-types.ts:120](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L120)

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

#### Returns

`void`

***

### ongroups?

> `optional` **ongroups?**: (`groups`) => `void`

Defined in: [order-group-types.ts:121](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L121)

#### Parameters

##### groups

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]

#### Returns

`void`

***

### oninvalid?

> `optional` **oninvalid?**: (`event`, `error`) => `void`

Defined in: [order-group-types.ts:122](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order-group-types.ts#L122)

#### Parameters

##### event

`Event`

##### error

`Error`

#### Returns

`void`
