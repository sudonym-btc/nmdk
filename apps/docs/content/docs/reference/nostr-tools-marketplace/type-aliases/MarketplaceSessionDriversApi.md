---
title: "Type Alias: MarketplaceSessionDriversApi"
description: "Type Alias: MarketplaceSessionDriversApi in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceSessionDriversApi

> **MarketplaceSessionDriversApi** = `object`

Defined in: [nostr-tools/marketplace/runtime-types.ts:693](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L693)

## Properties

### all

> `readonly` **all**: [`MarketplaceSessionDriver`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionDriver)[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:694](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L694)

***

### auctions

> `readonly` **auctions**: [`MarketplaceSessionDriver`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionDriver)[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:696](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L696)

***

### orders

> `readonly` **orders**: [`MarketplaceSessionDriver`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionDriver)[]

Defined in: [nostr-tools/marketplace/runtime-types.ts:695](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L695)

## Methods

### byId()

> **byId**(`id`): [`MarketplaceSessionDriver`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionDriver) \| `undefined`

Defined in: [nostr-tools/marketplace/runtime-types.ts:697](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L697)

#### Parameters

##### id

`string`

#### Returns

[`MarketplaceSessionDriver`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSessionDriver) \| `undefined`

***

### each()

> **each**(`callback`): `void`

Defined in: [nostr-tools/marketplace/runtime-types.ts:698](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L698)

#### Parameters

##### callback

(`driver`) => `void`

#### Returns

`void`
