---
title: "Variable: marketplaceEventDecoder"
description: "Variable: marketplaceEventDecoder in nostr-tools/marketplace."
full: true
---

# Variable: marketplaceEventDecoder

> `const` **marketplaceEventDecoder**: `object`

Defined in: nostr-tools/marketplace/event-decoder.ts:45

## Type Declaration

### decode

> **decode**: \<`T`\>(`event`, `parse`, `options`) => [`MarketplaceEventParseResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceEventParseResult)\<`T`\> = `decodeMarketplaceEvent`

#### Type Parameters

##### T

`T`

#### Parameters

##### event

`NostrEvent`

##### parse

(`event`) => `T`

##### options

[`MarketplaceEventDecodeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceEventDecodeOptions)

#### Returns

[`MarketplaceEventParseResult`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceEventParseResult)\<`T`\>
