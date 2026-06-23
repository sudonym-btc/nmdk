---
title: "Interface: MarketplaceArbitrationApi"
description: "Interface: MarketplaceArbitrationApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceArbitrationApi

Defined in: [nostr-tools/marketplace/runtime-types.ts:1261](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1261)

## Methods

### arbitrate()

> **arbitrate**(`request`): `AsyncIterable`\<[`MarketplacePaymentArbitrationRuntimeState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentArbitrationRuntimeState)\>

Defined in: [nostr-tools/marketplace/runtime-types.ts:1263](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1263)

#### Parameters

##### request

[`MarketplacePaymentArbitrationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentArbitrationRequest)

#### Returns

`AsyncIterable`\<[`MarketplacePaymentArbitrationRuntimeState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentArbitrationRuntimeState)\>

***

### start()

> **start**(`options?`): [`MarketplaceArbitrationRuntime`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceArbitrationRuntime)

Defined in: [nostr-tools/marketplace/runtime-types.ts:1262](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L1262)

#### Parameters

##### options?

[`MarketplaceArbitrationStartOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceArbitrationStartOptions)

#### Returns

[`MarketplaceArbitrationRuntime`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceArbitrationRuntime)
