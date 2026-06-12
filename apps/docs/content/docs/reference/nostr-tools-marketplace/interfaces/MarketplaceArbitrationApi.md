---
title: "Interface: MarketplaceArbitrationApi"
description: "Interface: MarketplaceArbitrationApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplaceArbitrationApi

Defined in: [runtime-types.ts:910](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L910)

## Methods

### arbitrate()

> **arbitrate**(`request`): `AsyncIterable`\<[`MarketplacePaymentArbitrationRuntimeState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentArbitrationRuntimeState)\>

Defined in: [runtime-types.ts:912](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L912)

#### Parameters

##### request

[`MarketplacePaymentArbitrationRequest`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentArbitrationRequest)

#### Returns

`AsyncIterable`\<[`MarketplacePaymentArbitrationRuntimeState`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentArbitrationRuntimeState)\>

***

### start()

> **start**(`options?`): [`MarketplaceArbitrationRuntime`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceArbitrationRuntime)

Defined in: [runtime-types.ts:911](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L911)

#### Parameters

##### options?

[`MarketplaceArbitrationStartOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceArbitrationStartOptions)

#### Returns

[`MarketplaceArbitrationRuntime`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceArbitrationRuntime)
