---
title: "Class: ReplayStream\\<T\\>"
description: "Class: ReplayStream\\<T\\> in nostr-tools/marketplace."
full: true
---

# Class: ReplayStream\<T\>

Defined in: [nostr-tools/marketplace/stream.ts:21](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L21)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new ReplayStream**\<`T`\>(`options?`): `ReplayStream`\<`T`\>

Defined in: [nostr-tools/marketplace/stream.ts:26](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L26)

#### Parameters

##### options?

[`ReplayStreamOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReplayStreamOptions) = `{}`

#### Returns

`ReplayStream`\<`T`\>

## Accessors

### latest

#### Get Signature

> **get** **latest**(): `T` \| `undefined`

Defined in: [nostr-tools/marketplace/stream.ts:35](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L35)

##### Returns

`T` \| `undefined`

***

### value

#### Get Signature

> **get** **value**(): `T` \| `undefined`

Defined in: [nostr-tools/marketplace/stream.ts:39](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L39)

##### Returns

`T` \| `undefined`

***

### values

#### Get Signature

> **get** **values**(): readonly `T`[]

Defined in: [nostr-tools/marketplace/stream.ts:31](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L31)

##### Returns

readonly `T`[]

## Methods

### clear()

> **clear**(): `void`

Defined in: [nostr-tools/marketplace/stream.ts:68](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L68)

#### Returns

`void`

***

### next()

> **next**(`value`): `void`

Defined in: [nostr-tools/marketplace/stream.ts:43](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L43)

#### Parameters

##### value

`T`

#### Returns

`void`

***

### subscribe()

> **subscribe**(`handler`, `options?`): [`ReplayStreamSubscription`](/docs/reference/nostr-tools-marketplace/type-aliases/ReplayStreamSubscription)

Defined in: [nostr-tools/marketplace/stream.ts:53](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L53)

#### Parameters

##### handler

[`ReplayStreamHandler`](/docs/reference/nostr-tools-marketplace/type-aliases/ReplayStreamHandler)\<`T`\>

##### options?

[`ReplayStreamSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReplayStreamSubscribeOptions) = `{}`

#### Returns

[`ReplayStreamSubscription`](/docs/reference/nostr-tools-marketplace/type-aliases/ReplayStreamSubscription)
