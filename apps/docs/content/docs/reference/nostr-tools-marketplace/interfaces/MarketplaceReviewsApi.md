---
title: "Interface: MarketplaceReviewsApi"
description: "Interface: MarketplaceReviewsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceReviewsApi

Defined in: [runtime-types.ts:818](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L818)

## Properties

### parse

> **parse**: (`event`) => [`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

Defined in: [runtime-types.ts:819](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L819)

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

***

### resolveProof

> **resolveProof**: (`review`) => [`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution)

Defined in: [runtime-types.ts:822](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L822)

#### Parameters

##### review

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

#### Returns

[`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution)

***

### revealedBuyerPubkey

> **revealedBuyerPubkey**: (`review`) => `string` \| `undefined`

Defined in: [runtime-types.ts:823](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L823)

#### Parameters

##### review

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

#### Returns

`string` \| `undefined`

***

### template

> **template**: (`review`) => `EventTemplate`

Defined in: [runtime-types.ts:821](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L821)

#### Parameters

##### review

[`ReviewTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: [runtime-types.ts:820](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L820)

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`

## Methods

### search()

> **search**(`query?`, `options?`): `Promise`\<[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)[]\>

Defined in: [runtime-types.ts:824](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L824)

#### Parameters

##### query?

[`ReviewSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewSearchQuery)

##### options?

[`ReviewSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewSearchOptions)

#### Returns

`Promise`\<[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)[]\>
