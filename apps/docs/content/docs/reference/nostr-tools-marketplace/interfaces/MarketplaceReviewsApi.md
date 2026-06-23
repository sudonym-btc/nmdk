---
title: "Interface: MarketplaceReviewsApi"
description: "Interface: MarketplaceReviewsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceReviewsApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:988](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L988)

## Properties

### parse

> **parse**: (`event`) => [`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

Defined in: [nostr-tools/marketplace/runtime-types.ts:989](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L989)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

***

### resolveProof

> **resolveProof**: (`review`) => [`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution)

Defined in: [nostr-tools/marketplace/runtime-types.ts:992](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L992)

#### Parameters

##### review

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

#### Returns

[`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution)

***

### revealedBuyerPubkey

> **revealedBuyerPubkey**: (`review`) => `string` \| `undefined`

Defined in: [nostr-tools/marketplace/runtime-types.ts:993](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L993)

#### Parameters

##### review

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

#### Returns

`string` \| `undefined`

***

### template

> **template**: (`review`) => `EventTemplate`

Defined in: [nostr-tools/marketplace/runtime-types.ts:991](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L991)

#### Parameters

##### review

[`ReviewTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [nostr-tools/marketplace/runtime-types.ts:990](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L990)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:994](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L994)

#### Parameters

##### query?

[`ReviewSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewSearchQuery)

##### options?

[`ReviewSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewSearchOptions)

#### Returns

`Promise`\<[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)[]\>
