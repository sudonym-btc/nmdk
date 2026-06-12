---
title: "Type Alias: OrderTemplate"
description: "Type Alias: OrderTemplate in nostr-tools/marketplace."
full: true
---

# Type Alias: OrderTemplate

> **OrderTemplate** = `Omit`\<[`OrderContent`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderContent), `"quantity"`\> & `object`

Defined in: [order.ts:88](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/order.ts#L88)

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
