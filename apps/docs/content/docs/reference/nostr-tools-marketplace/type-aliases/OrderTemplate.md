---
title: "Type Alias: OrderTemplate"
description: "Type Alias: OrderTemplate in nostr-tools/marketplace."
full: true
---

# Type Alias: OrderTemplate

> **OrderTemplate** = `Omit`\<[`OrderContent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderContent), `"quantity"`\> & `object`

Defined in: [order.ts:69](https://github.com/sudonym-btc/nostr-tools/blob/236524e125b7ac58f1c0f101908f88959eb0a153/marketplace/order.ts#L69)

## Type Declaration

### createdAt?

> `optional` **createdAt?**: `number`

### extraTags?

> `optional` **extraTags?**: `string`[][]

### listingAnchor

> **listingAnchor**: `string`

### participantProofs?

> `optional` **participantProofs?**: [`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag)[]

### participants?

> `optional` **participants?**: [`PTag`](/docs/reference/nostr-tools-marketplace/type-aliases/PTag)[]

### publishedAt?

> `optional` **publishedAt?**: `number`

### quantity?

> `optional` **quantity?**: `number`

### tradeId

> **tradeId**: `string`
