---
title: "Variable: participants"
description: "Variable: participants in nostr-tools/marketplace."
full: true
---

# Variable: participants

> `const` **participants**: `object`

Defined in: [nostr-tools/marketplace/participant.ts:91](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/participant.ts#L91)

## Type Declaration

### entries

> **entries**: (`participants`) => [`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)[] = `marketplaceParticipantEntries`

#### Parameters

##### participants

`Iterable`\<[`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag) \| [`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)\>

#### Returns

[`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)[]

### groupId

> **groupId**: (`tradeId`, `participants`) => `string` = `participantGroupIdForParticipants`

#### Parameters

##### tradeId

`string`

##### participants

`Iterable`\<[`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag) \| [`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)\>

#### Returns

`string`

### groupIdForRecord

> **groupIdForRecord**: (`record`) => `string` = `participantGroupIdForRecord`

#### Parameters

##### record

[`MarketplaceParticipantRecord`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantRecord)

#### Returns

`string`

### isGroupRole

> **isGroupRole**: (`role`) => `role is MarketplaceParticipantGroupRole` = `isMarketplaceParticipantGroupRole`

#### Parameters

##### role

`string` \| `undefined`

#### Returns

`role is MarketplaceParticipantGroupRole`

### parseTag

> **parseTag**: (`tag`) => [`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag) \| `null` = `parseParticipantTag`

#### Parameters

##### tag

`string`[]

#### Returns

[`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag) \| `null`

### pubkeys

> **pubkeys**: (`participants`) => `string`[] = `marketplaceParticipantPubkeys`

#### Parameters

##### participants

`Iterable`\<[`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag) \| [`MarketplaceParticipantEntry`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantEntry)\>

#### Returns

`string`[]

### tag

> **tag**: (`participant`) => `string`[] = `participantTag`

#### Parameters

##### participant

[`MarketplaceParticipantTag`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceParticipantTag)

#### Returns

`string`[]
