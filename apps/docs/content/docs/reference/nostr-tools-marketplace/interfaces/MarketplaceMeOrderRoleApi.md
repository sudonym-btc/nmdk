---
title: "Interface: MarketplaceMeOrderRoleApi"
description: "Interface: MarketplaceMeOrderRoleApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceMeOrderRoleApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1016](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1016)

## Methods

### list()

> **list**(`query?`, `options?`): `Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1017](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1017)

#### Parameters

##### query?

[`MarketplaceMeOrdersQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrdersQuery)

##### options?

[`OrderGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSearchOptions)

#### Returns

`Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

***

### watch()

> **watch**(`query?`, `options?`): [`MarketplaceMeOrderRoleStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrderRoleStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1021](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1021)

#### Parameters

##### query?

[`MarketplaceMeOrdersQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrdersQuery)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions) & [`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions)

#### Returns

[`MarketplaceMeOrderRoleStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrderRoleStream)
