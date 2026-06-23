---
title: "Interface: MarketplaceMeInboxApi"
description: "Interface: MarketplaceMeInboxApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceMeInboxApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1080](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1080)

## Properties

### filter

> **filter**: (`query`) => `Filter`

Defined in: [nostr-tools/marketplace/runtime-types.ts:1081](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1081)

#### Parameters

##### query

[`MarketplaceInboxQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxQuery) & `object`

#### Returns

`Filter`

## Methods

### list()

> **list**(`query?`, `options?`): `Promise`\<[`MarketplaceInboxItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxItem)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1082](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1082)

#### Parameters

##### query?

[`MarketplaceInboxQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxQuery)

##### options?

[`MarketplaceInboxFetchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxFetchOptions)

#### Returns

`Promise`\<[`MarketplaceInboxItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxItem)[]\>

***

### watch()

> **watch**(`query?`, `options?`): [`MarketplaceInboxStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1086](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1086)

#### Parameters

##### query?

[`MarketplaceInboxQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxQuery)

##### options?

[`MarketplaceInboxSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxSubscribeOptions)

#### Returns

[`MarketplaceInboxStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxStream)
