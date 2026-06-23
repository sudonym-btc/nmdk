---
title: "Type Alias: EnsureMarketplaceSeedOptions"
description: "Type Alias: EnsureMarketplaceSeedOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: EnsureMarketplaceSeedOptions

> **EnsureMarketplaceSeedOptions** = `object`

Defined in: [nostr-tools/marketplace/seed.ts:50](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L50)

## Properties

### pool

> **pool**: `Pick`\<`AbstractSimplePool`, `"querySync"`\>

Defined in: [nostr-tools/marketplace/seed.ts:51](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L51)

***

### pubkey

> **pubkey**: `string`

Defined in: [nostr-tools/marketplace/seed.ts:53](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L53)

***

### relays

> **relays**: `string`[]

Defined in: [nostr-tools/marketplace/seed.ts:52](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L52)

## Methods

### create()

> **create**(): \{ `event`: `Event`; `payload`: [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload); \} \| `Promise`\<\{ `event`: `Event`; `payload`: [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload); \}\>

Defined in: [nostr-tools/marketplace/seed.ts:55](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L55)

#### Returns

\{ `event`: `Event`; `payload`: [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload); \} \| `Promise`\<\{ `event`: `Event`; `payload`: [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload); \}\>

***

### decrypt()

> **decrypt**(`event`): [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload) \| `Promise`\<[`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload)\>

Defined in: [nostr-tools/marketplace/seed.ts:54](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L54)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload) \| `Promise`\<[`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload)\>

***

### publish()?

> `optional` **publish**(`event`): `unknown`

Defined in: [nostr-tools/marketplace/seed.ts:58](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L58)

#### Parameters

##### event

`NostrEvent`

#### Returns

`unknown`
