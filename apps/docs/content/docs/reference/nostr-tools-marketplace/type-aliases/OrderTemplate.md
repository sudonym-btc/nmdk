---
title: "Type Alias: OrderTemplate"
description: "Type Alias: OrderTemplate in nostr-tools/marketplace."
full: true
---

# Type Alias: OrderTemplate

> **OrderTemplate** = `Omit`\<[`OrderContent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderContent), `"quantity"`\> & `object`

Defined in: [nostr-tools/marketplace/order.ts:91](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order.ts#L91)

## Type Declaration

### createdAt?

> `optional` **createdAt?**: `number`

### extraTags?

> `optional` **extraTags?**: `string`[][]

### listingAnchor

> **listingAnchor**: `string`

### participantProofKeys?

> `optional` **participantProofKeys?**: [`ParticipantProofKeyTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofKeyTag)[]

### participantProofs?

> `optional` **participantProofs?**: [`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag)[]

### participants?

> `optional` **participants?**: [`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag)[]

### publishedAt?

> `optional` **publishedAt?**: `number`

### quantity?

> `optional` **quantity?**: `number`

### tradeId

> **tradeId**: `string`
