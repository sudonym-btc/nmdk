---
title: "Variable: inbox"
description: "Variable: inbox in nostr-tools/marketplace."
full: true
---

# Variable: inbox

> `const` **inbox**: `object`

Defined in: [nostr-tools/marketplace/inbox.ts:169](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/inbox.ts#L169)

## Type Declaration

### fetch

> **fetch**: (`pool`, `relays`, `signer`, `query`, `options`) => `Promise`\<[`MarketplaceInboxItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxItem)[]\> = `fetchMarketplaceInbox`

#### Parameters

##### pool

`InboxFetchPool`

##### relays

`string`[]

##### signer

[`MarketplaceInboxSigner`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxSigner)

##### query?

[`MarketplaceInboxQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxQuery) = `{}`

##### options?

[`MarketplaceInboxFetchOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxFetchOptions) = `{}`

#### Returns

`Promise`\<[`MarketplaceInboxItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxItem)[]\>

### filter

> **filter**: (`query`) => `Filter` = `marketplaceInboxFilter`

#### Parameters

##### query

[`MarketplaceInboxQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxQuery) & `object`

#### Returns

`Filter`

### query

> **query**: (`stream`) => `Promise`\<[`MarketplaceInboxItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxItem)[]\> = `queryMarketplaceInboxStream`

#### Parameters

##### stream

[`MarketplaceInboxStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxStream)

#### Returns

`Promise`\<[`MarketplaceInboxItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxItem)[]\>

### stream

> **stream**: (`pool`, `relays`, `signer`, `query`, `options`) => [`MarketplaceInboxStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxStream) = `streamMarketplaceInbox`

#### Parameters

##### pool

`InboxSubscribePool`

##### relays

`string`[]

##### signer

[`MarketplaceInboxSigner`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxSigner)

##### query

[`MarketplaceInboxQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxQuery) & `object`

##### options?

[`MarketplaceInboxSubscribeOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxSubscribeOptions) = `{}`

#### Returns

[`MarketplaceInboxStream`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxStream)

### unwrap

> **unwrap**: (`wrap`, `signer`) => `Promise`\<[`MarketplaceInboxItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxItem)\> = `unwrapMarketplaceInboxItem`

#### Parameters

##### wrap

`NostrEvent`

##### signer

[`MarketplaceInboxSigner`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxSigner)

#### Returns

`Promise`\<[`MarketplaceInboxItem`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceInboxItem)\>
