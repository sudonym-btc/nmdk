---
title: "Variable: seed"
description: "Variable: seed in nostr-tools/marketplace."
full: true
---

# Variable: seed

> `const` **seed**: `object`

Defined in: [seed.ts:272](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/seed.ts#L272)

## Type Declaration

### createEvent

> **createEvent**: (`opts`) => `NostrEvent` = `createMarketplaceSeedEvent`

#### Parameters

##### opts

[`CreateMarketplaceSeedEventOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/CreateMarketplaceSeedEventOptions)

#### Returns

`NostrEvent`

### decryptEvent

> **decryptEvent**: (`opts`) => [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload) = `decryptMarketplaceSeedEvent`

#### Parameters

##### opts

[`DecryptMarketplaceSeedEventOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/DecryptMarketplaceSeedEventOptions)

#### Returns

[`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload)

### deriveTradeId

> **deriveTradeId**: (`seed`, `context`) => `string` = `deriveMarketplaceTradeId`

#### Parameters

##### seed

`string`

##### context?

[`MarketplaceSeedDerivationContext`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedDerivationContext) = `{}`

#### Returns

`string`

### deriveTradeMaterial

> **deriveTradeMaterial**: (`seed`, `context`) => [`MarketplaceTradeMaterial`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceTradeMaterial) = `deriveMarketplaceTradeMaterial`

#### Parameters

##### seed

`string`

##### context?

[`MarketplaceSeedDerivationContext`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedDerivationContext) = `{}`

#### Returns

[`MarketplaceTradeMaterial`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceTradeMaterial)

### deriveTradeSecretKey

> **deriveTradeSecretKey**: (`seed`, `context`) => `Uint8Array` = `deriveMarketplaceTradeSecretKey`

#### Parameters

##### seed

`string`

##### context?

[`MarketplaceSeedDerivationContext`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedDerivationContext) = `{}`

#### Returns

`Uint8Array`

### encodePayload

> **encodePayload**: (`seed`) => `string` = `encodeMarketplaceSeedPayload`

#### Parameters

##### seed

`string` \| [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload)

#### Returns

`string`

### ensure

> **ensure**: (`opts`) => `Promise`\<[`MarketplaceSeedResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedResolution)\> = `ensureMarketplaceSeed`

#### Parameters

##### opts

[`EnsureMarketplaceSeedOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/EnsureMarketplaceSeedOptions)

#### Returns

`Promise`\<[`MarketplaceSeedResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedResolution)\>

### fetchEvent

> **fetchEvent**: (`pool`, `relays`, `pubkey`) => `Promise`\<`NostrEvent` \| `null`\> = `fetchMarketplaceSeedEvent`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### pubkey

`string`

#### Returns

`Promise`\<`NostrEvent` \| `null`\>

### filter

> **filter**: (`pubkey`) => `Filter` = `marketplaceSeedFilter`

#### Parameters

##### pubkey

`string`

#### Returns

`Filter`

### fromBytes

> **fromBytes**: (`seed`) => `string` = `marketplaceSeedFromBytes`

#### Parameters

##### seed

`Uint8Array`

#### Returns

`string`

### generate

> **generate**: () => `string` = `generateMarketplaceSeed`

#### Returns

`string`

### getOrCreate

> **getOrCreate**: (`opts`) => `Promise`\<[`MarketplaceSeedResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedResolution)\> = `getOrCreateMarketplaceSeed`

#### Parameters

##### opts

[`GetOrCreateMarketplaceSeedOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/GetOrCreateMarketplaceSeedOptions) \| [`GetOrCreateMarketplaceSeedWithSignerOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/GetOrCreateMarketplaceSeedWithSignerOptions)

#### Returns

`Promise`\<[`MarketplaceSeedResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedResolution)\>

### normalize

> **normalize**: (`seed`) => `string` = `normalizeMarketplaceSeed`

#### Parameters

##### seed

`string`

#### Returns

`string`

### parsePayload

> **parsePayload**: (`content`) => [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload) = `parseMarketplaceSeedPayload`

#### Parameters

##### content

`string`

#### Returns

[`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload)

### payload

> **payload**: (`seed`) => [`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload) = `marketplaceSeedPayload`

#### Parameters

##### seed

`string`

#### Returns

[`MarketplaceSeedPayload`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedPayload)

### template

> **template**: (`seed`) => `EventTemplate` = `generateMarketplaceSeedEventTemplate`

#### Parameters

##### seed

[`MarketplaceSeedTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedTemplate)

#### Returns

`EventTemplate`

### toBytes

> **toBytes**: (`seed`) => `Uint8Array` = `marketplaceSeedToBytes`

#### Parameters

##### seed

`string`

#### Returns

`Uint8Array`

### validate

> **validate**: (`event`) => `boolean` = `validateMarketplaceSeedEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
