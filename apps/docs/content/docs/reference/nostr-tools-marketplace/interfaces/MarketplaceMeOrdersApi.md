---
title: "Interface: MarketplaceMeOrdersApi"
description: "Interface: MarketplaceMeOrdersApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceMeOrdersApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1027](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1027)

## Properties

### arbitrating

> **arbitrating**: [`MarketplaceMeOrderRoleApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceMeOrderRoleApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1038](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1038)

***

### placed

> **placed**: [`MarketplaceMeOrderRoleApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceMeOrderRoleApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1036](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1036)

***

### received

> **received**: [`MarketplaceMeOrderRoleApi`](/docs/reference/nostr-tools-marketplace/interfaces/MarketplaceMeOrderRoleApi)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1037](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1037)

***

### resolveParticipants

> **resolveParticipants**: (`group`, `options`) => `Promise`\<[`ResolvedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvedOrderGroup)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1039](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1039)

#### Parameters

##### group

[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)

##### options?

[`ResolveOrderGroupParticipantsOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveOrderGroupParticipantsOptions) = `{}`

#### Returns

`Promise`\<[`ResolvedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvedOrderGroup)\>

## Methods

### list()

> **list**(`query?`, `options?`): `Promise`\<[`MarketplaceMeOrdersSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrdersSnapshot)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1028](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1028)

#### Parameters

##### query?

[`MarketplaceMeOrdersQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrdersQuery)

##### options?

[`OrderGroupSearchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupSearchOptions)

#### Returns

`Promise`\<[`MarketplaceMeOrdersSnapshot`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrdersSnapshot)\>

***

### watch()

> **watch**(`query?`, `options?`): [`MarketplaceMeOrdersStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrdersStream)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1032](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1032)

#### Parameters

##### query?

[`MarketplaceMeOrdersQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrdersQuery)

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions) & [`ReduceOrderGroupOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ReduceOrderGroupOptions)

#### Returns

[`MarketplaceMeOrdersStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMeOrdersStream)
