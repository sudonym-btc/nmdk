---
title: "Variable: orderStreams"
description: "Variable: orderStreams in nostr-tools/marketplace."
full: true
---

# Variable: orderStreams

> `const` **orderStreams**: `object`

Defined in: [nostr-tools/marketplace/order-stream.ts:215](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/order-stream.ts#L215)

## Type Declaration

### groups

> **groups**: (`pool`, `relays`, `query`, `options`) => [`MarketplaceOrderGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderGroupStream) = `streamOrderGroups`

#### Parameters

##### pool

`OrderGroupSubscribePool`

##### relays

`string`[]

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery) = `{}`

##### options?

`OrderGroupSubscribeOptions` = `{}`

#### Returns

[`MarketplaceOrderGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderGroupStream)

### mine

> **mine**: (`pool`, `relays`, `query`, `options`) => [`MarketplaceMyOrderGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMyOrderGroupStream) = `streamMyOrderGroups`

#### Parameters

##### pool

`OrderGroupSubscribePool`

##### relays

`string`[]

##### query

[`OrderGroupIdentityQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupIdentityQuery)

##### options?

`OrderGroupSubscribeOptions` = `{}`

#### Returns

[`MarketplaceMyOrderGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMyOrderGroupStream)

### mineOrders

> **mineOrders**: (`pool`, `relays`, `query`, `options`) => [`MarketplaceOrderStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderStream) = `streamMyOrders`

#### Parameters

##### pool

`OrderStreamPool`

##### relays

`string`[]

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery) = `{}`

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions) = `{}`

#### Returns

[`MarketplaceOrderStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderStream)

### orders

> **orders**: (`pool`, `relays`, `query`, `options`) => [`MarketplaceOrderStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderStream) = `streamOrders`

#### Parameters

##### pool

`OrderStreamPool`

##### relays

`string`[]

##### query?

[`OrderQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderQuery) = `{}`

##### options?

[`OrderSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderSubscribeOptions) = `{}`

#### Returns

[`MarketplaceOrderStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderStream)

### queryGroups

> **queryGroups**: (`stream`) => `Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\> = `queryOrderGroupStream`

#### Parameters

##### stream

[`MarketplaceOrderGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderGroupStream)

#### Returns

`Promise`\<[`ParsedOrderGroup`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrderGroup)[]\>

### queryMine

> **queryMine**: (`stream`) => `Promise`\<[`OrderGroupRoles`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupRoles)\> = `queryMyOrderGroupStream`

#### Parameters

##### stream

[`MarketplaceMyOrderGroupStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceMyOrderGroupStream)

#### Returns

`Promise`\<[`OrderGroupRoles`](/docs/reference/nostr-tools-marketplace/type-aliases/OrderGroupRoles)\>

### queryOrders

> **queryOrders**: (`stream`) => `Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\> = `queryOrderStream`

#### Parameters

##### stream

[`MarketplaceOrderStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceOrderStream)

#### Returns

`Promise`\<[`ParsedOrder`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedOrder)[]\>
