---
title: "Type Alias: GetOrCreateMarketplaceSeedWithSignerOptions"
description: "Type Alias: GetOrCreateMarketplaceSeedWithSignerOptions in nostr-tools/marketplace."
full: true
---

# Type Alias: GetOrCreateMarketplaceSeedWithSignerOptions

> **GetOrCreateMarketplaceSeedWithSignerOptions** = `object`

Defined in: [nostr-tools/marketplace/seed.ts:76](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L76)

## Properties

### createdAt?

> `optional` **createdAt?**: `number`

Defined in: [nostr-tools/marketplace/seed.ts:81](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L81)

***

### pool

> **pool**: `Pick`\<`AbstractSimplePool`, `"querySync"`\>

Defined in: [nostr-tools/marketplace/seed.ts:77](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L77)

***

### pubkey?

> `optional` **pubkey?**: `string`

Defined in: [nostr-tools/marketplace/seed.ts:79](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L79)

***

### relays

> **relays**: `string`[]

Defined in: [nostr-tools/marketplace/seed.ts:78](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L78)

***

### signer

> **signer**: [`MarketplaceSeedSigner`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceSeedSigner)

Defined in: [nostr-tools/marketplace/seed.ts:80](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L80)

## Methods

### publish()?

> `optional` **publish**(`event`): `unknown`

Defined in: [nostr-tools/marketplace/seed.ts:82](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/seed.ts#L82)

#### Parameters

##### event

`NostrEvent`

#### Returns

`unknown`
