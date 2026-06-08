---
title: "Interface: MarketplaceReviewsApi"
description: "Interface: MarketplaceReviewsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceReviewsApi

Defined in: runtime-types.ts:855

## Properties

### parse

> **parse**: (`event`) => [`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

Defined in: runtime-types.ts:856

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedReview`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedReview)

***

### template

> **template**: (`review`) => `EventTemplate`

Defined in: runtime-types.ts:858

#### Parameters

##### review

[`ReviewTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/ReviewTemplate)

#### Returns

`EventTemplate`

***

### validate

> **validate**: (`event`) => `boolean`

Defined in: runtime-types.ts:857

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
