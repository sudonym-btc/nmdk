---
title: "Type Alias: EnsureMarketplaceSeedOptions"
description: "Type Alias: EnsureMarketplaceSeedOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: EnsureMarketplaceSeedOptions

> **EnsureMarketplaceSeedOptions** = `object`

Defined in: [seed.ts:51](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L51)

## Properties

### pool

> **pool**: `Pick`\<`AbstractSimplePool`, `"querySync"`\>

Defined in: [seed.ts:52](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L52)

***

### pubkey

> **pubkey**: `string`

Defined in: [seed.ts:54](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L54)

***

### relays

> **relays**: `string`[]

Defined in: [seed.ts:53](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L53)

## Methods

### create()

> **create**(): \{ `event`: `Event`; `payload`: [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload); \} \| `Promise`\<\{ `event`: `Event`; `payload`: [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload); \}\>

Defined in: [seed.ts:56](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L56)

#### Returns

\{ `event`: `Event`; `payload`: [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload); \} \| `Promise`\<\{ `event`: `Event`; `payload`: [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload); \}\>

***

### decrypt()

> **decrypt**(`event`): [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload) \| `Promise`\<[`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload)\>

Defined in: [seed.ts:55](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L55)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload) \| `Promise`\<[`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload)\>

***

### publish()?

> `optional` **publish**(`event`): `unknown`

Defined in: [seed.ts:59](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L59)

#### Parameters

##### event

`NostrEvent`

#### Returns

`unknown`
