---
title: "Variable: participants"
description: "Variable: participants in nostr-tools/marketplace."
full: true
---

# Variable: participants

> `const` **participants**: `object`

Defined in: participant.ts:91

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
