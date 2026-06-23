---
title: "Type Alias: MarketplaceValue\\<T\\>"
description: "Type Alias: MarketplaceValue\\<T\\> in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceValue\<T\>

> **MarketplaceValue**\<`T`\> = `object`

Defined in: [nostr-tools/marketplace/stream.ts:11](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L11)

## Type Parameters

### T

`T`

## Properties

### latest

> `readonly` **latest**: `T` \| `undefined`

Defined in: [nostr-tools/marketplace/stream.ts:13](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L13)

***

### value

> `readonly` **value**: `T` \| `undefined`

Defined in: [nostr-tools/marketplace/stream.ts:12](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L12)

## Methods

### subscribe()

> **subscribe**(`handler`, `options?`): [`ReplayStreamSubscription`](/docs/reference/nostr-tools-marketplace/type-aliases/ReplayStreamSubscription)

Defined in: [nostr-tools/marketplace/stream.ts:14](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L14)

#### Parameters

##### handler

[`ReplayStreamHandler`](/docs/reference/nostr-tools-marketplace/type-aliases/ReplayStreamHandler)\<`T`\>

##### options?

[`ReplayStreamSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReplayStreamSubscribeOptions)

#### Returns

[`ReplayStreamSubscription`](/docs/reference/nostr-tools-marketplace/type-aliases/ReplayStreamSubscription)
