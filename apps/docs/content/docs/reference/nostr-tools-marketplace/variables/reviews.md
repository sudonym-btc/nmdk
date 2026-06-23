---
title: "Variable: reviews"
description: "Variable: reviews in nostr-tools/marketplace."
full: true
---

# Variable: reviews

> `const` **reviews**: `object`

Defined in: [nostr-tools/marketplace/review.ts:183](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/review.ts#L183)

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
