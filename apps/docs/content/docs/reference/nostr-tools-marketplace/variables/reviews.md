---
title: "Variable: reviews"
description: "Variable: reviews in nostr-tools/marketplace."
full: true
---

# Variable: reviews

> `const` **reviews**: `object`

Defined in: [review.ts:181](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/review.ts#L181)

## Type Declaration

### filter

> **filter**: (`query`) => `Filter` = `reviewSearchFilter`

#### Parameters

##### query?

[`ReviewSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewSearchQuery) = `{}`

#### Returns

`Filter`

### parse

> **parse**: (`event`) => [`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview) = `parseReviewEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

### resolveProof

> **resolveProof**: (`review`) => [`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution) = `resolveReviewProof`

#### Parameters

##### review

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

#### Returns

[`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution)

### revealedBuyerPubkey

> **revealedBuyerPubkey**: (`review`) => `string` \| `undefined` = `revealedReviewBuyerPubkey`

#### Parameters

##### review

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

#### Returns

`string` \| `undefined`

### search

> **search**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)[]\> = `searchReviews`

#### Parameters

##### pool

`ReviewQueryPool`

##### relays

`string`[]

##### query?

[`ReviewSearchQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewSearchQuery) = `{}`

##### options?

[`ReviewSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewSearchOptions) = `{}`

#### Returns

`Promise`\<[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)[]\>

### template

> **template**: (`review`) => `EventTemplate` = `generateReviewEventTemplate`

#### Parameters

##### review

[`ReviewTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validateReviewEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
