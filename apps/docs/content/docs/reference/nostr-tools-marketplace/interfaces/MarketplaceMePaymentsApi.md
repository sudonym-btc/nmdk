---
title: "Interface: MarketplaceMePaymentsApi"
description: "Interface: MarketplaceMePaymentsApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceMePaymentsApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1139](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1139)

## Methods

### list()

> **list**(`query?`, `options?`): `Promise`\<[`MarketplaceMePaymentsSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMePaymentsSnapshot)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1140](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1140)

#### Parameters

##### query?

[`MarketplaceMePaymentsQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMePaymentsQuery)

##### options?

[`MarketplaceMePaymentsSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMePaymentsSearchOptions)

#### Returns

`Promise`\<[`MarketplaceMePaymentsSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMePaymentsSnapshot)\>

***

### watch()

> **watch**(`query?`, `options?`): [`MarketplaceMePaymentsStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMePaymentsStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1144](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1144)

#### Parameters

##### query?

[`MarketplaceMePaymentsQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMePaymentsQuery)

##### options?

[`MarketplaceMePaymentsSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMePaymentsSubscribeOptions)

#### Returns

[`MarketplaceMePaymentsStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMePaymentsStream)
