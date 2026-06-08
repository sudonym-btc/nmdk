---
title: "Variable: reviews"
description: "Variable: reviews in nostr-tools/marketplace."
full: true
---

# Variable: reviews

> `const` **reviews**: `object`

Defined in: [review.ts:75](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/review.ts#L75)

## Type Declaration

### parse

> **parse**: (`event`) => [`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview) = `parseReviewEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

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
