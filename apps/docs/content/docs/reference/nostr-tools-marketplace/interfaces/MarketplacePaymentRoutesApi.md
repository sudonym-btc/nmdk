---
title: "Interface: MarketplacePaymentRoutesApi"
description: "Interface: MarketplacePaymentRoutesApi in nostr-tools/marketplace."
full: true
---

# Interface: MarketplacePaymentRoutesApi

Defined in: [runtime-types.ts:833](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L833)

## Methods

### forListing()

> **forListing**(`listing`, `order?`): `Promise`\<[`MarketplacePaymentRoute`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRoute)[]\>

Defined in: [runtime-types.ts:834](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/runtime-types.ts#L834)

#### Parameters

##### listing

`NostrEvent` \| [`MarketplaceListing`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceListing)

##### order?

[`OrderTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderTemplate) \| `null`

#### Returns

`Promise`\<[`MarketplacePaymentRoute`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplacePaymentRoute)[]\>
