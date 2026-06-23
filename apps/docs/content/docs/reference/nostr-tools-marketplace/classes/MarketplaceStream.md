---
title: "Class: MarketplaceStream\\<TEvent, TSnapshot\\>"
description: "Class: MarketplaceStream\\<TEvent, TSnapshot\\> in nostr-tools/marketplace."
full: true
---

# Class: MarketplaceStream\<TEvent, TSnapshot\>

Defined in: [nostr-tools/marketplace/stream.ts:144](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L144)

## Type Parameters

### TEvent

`TEvent`

### TSnapshot

`TSnapshot` = `never`

## Constructors

### Constructor

> **new MarketplaceStream**\<`TEvent`, `TSnapshot`\>(`options?`): `MarketplaceStream`\<`TEvent`, `TSnapshot`\>

Defined in: [nostr-tools/marketplace/stream.ts:153](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L153)

#### Parameters

##### options?

[`MarketplaceStreamOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStreamOptions)\<`TSnapshot`\> = `{}`

#### Returns

`MarketplaceStream`\<`TEvent`, `TSnapshot`\>

## Properties

### events

> `readonly` **events**: [`ReplayStream`](/docs/reference/nostr-tools-marketplace/classes/ReplayStream)\<`TEvent`\>

Defined in: [nostr-tools/marketplace/stream.ts:146](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L146)

***

### snapshot

> `readonly` **snapshot**: [`ReplayStream`](/docs/reference/nostr-tools-marketplace/classes/ReplayStream)\<`TSnapshot`\>

Defined in: [nostr-tools/marketplace/stream.ts:148](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L148)

***

### status

> `readonly` **status**: [`ReplayStream`](/docs/reference/nostr-tools-marketplace/classes/ReplayStream)\<`StreamState`\>

Defined in: [nostr-tools/marketplace/stream.ts:145](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L145)

***

### stream

> `readonly` **stream**: [`ReplayStream`](/docs/reference/nostr-tools-marketplace/classes/ReplayStream)\<`TEvent`\>

Defined in: [nostr-tools/marketplace/stream.ts:147](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L147)

## Accessors

### currentSnapshot

#### Get Signature

> **get** **currentSnapshot**(): `TSnapshot` \| `undefined`

Defined in: [nostr-tools/marketplace/stream.ts:171](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L171)

##### Returns

`TSnapshot` \| `undefined`

***

### currentStatus

#### Get Signature

> **get** **currentStatus**(): `StreamState` \| `undefined`

Defined in: [nostr-tools/marketplace/stream.ts:167](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L167)

##### Returns

`StreamState` \| `undefined`

## Methods

### close()

> **close**(`reason?`): `void`

Defined in: [nostr-tools/marketplace/stream.ts:252](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L252)

#### Parameters

##### reason?

`string`

#### Returns

`void`

***

### emitEvent()

> **emitEvent**(`event`): `void`

Defined in: [nostr-tools/marketplace/stream.ts:179](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L179)

#### Parameters

##### event

`TEvent`

#### Returns

`void`

***

### emitSnapshot()

> **emitSnapshot**(`snapshot`): `void`

Defined in: [nostr-tools/marketplace/stream.ts:183](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L183)

#### Parameters

##### snapshot

`TSnapshot`

#### Returns

`void`

***

### emitStatus()

> **emitStatus**(`state`): `void`

Defined in: [nostr-tools/marketplace/stream.ts:175](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L175)

#### Parameters

##### state

`StreamState`

#### Returns

`void`

***

### fail()

> **fail**(`error`, `options?`): [`StreamError`](/docs/reference/nostr-tools-marketplace/classes/StreamError)

Defined in: [nostr-tools/marketplace/stream.ts:205](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L205)

#### Parameters

##### error

`Error`

##### options?

###### at?

`number`

#### Returns

[`StreamError`](/docs/reference/nostr-tools-marketplace/classes/StreamError)

***

### filter()

#### Call Signature

> **filter**\<`TNext`\>(`predicate`, `options?`): `MarketplaceStream`\<`TNext`, `TSnapshot`\>

Defined in: [nostr-tools/marketplace/stream.ts:211](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L211)

##### Type Parameters

###### TNext

`TNext`

##### Parameters

###### predicate

(`event`) => `event is TNext`

###### options?

`Pick`\<[`MarketplaceStreamOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStreamOptions)\<`TSnapshot`\>, `"eventReplayLimit"`\>

##### Returns

`MarketplaceStream`\<`TNext`, `TSnapshot`\>

#### Call Signature

> **filter**(`predicate`, `options?`): `MarketplaceStream`\<`TEvent`, `TSnapshot`\>

Defined in: [nostr-tools/marketplace/stream.ts:215](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L215)

##### Parameters

###### predicate

(`event`) => `boolean`

###### options?

`Pick`\<[`MarketplaceStreamOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceStreamOptions)\<`TSnapshot`\>, `"eventReplayLimit"`\>

##### Returns

`MarketplaceStream`\<`TEvent`, `TSnapshot`\>

***

### markEose()

> **markEose**(`options?`): [`StreamEose`](/docs/reference/nostr-tools-marketplace/classes/StreamEose)

Defined in: [nostr-tools/marketplace/stream.ts:193](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L193)

#### Parameters

##### options?

###### at?

`number`

###### eventCount?

`number`

#### Returns

[`StreamEose`](/docs/reference/nostr-tools-marketplace/classes/StreamEose)

***

### markLive()

> **markLive**(`options?`): [`StreamLive`](/docs/reference/nostr-tools-marketplace/classes/StreamLive)

Defined in: [nostr-tools/marketplace/stream.ts:199](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L199)

#### Parameters

##### options?

###### at?

`number`

###### eventCount?

`number`

###### since?

`number`

#### Returns

[`StreamLive`](/docs/reference/nostr-tools-marketplace/classes/StreamLive)

***

### markQuerying()

> **markQuerying**(`options?`): [`StreamQuerying`](/docs/reference/nostr-tools-marketplace/classes/StreamQuerying)

Defined in: [nostr-tools/marketplace/stream.ts:187](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L187)

#### Parameters

##### options?

###### at?

`number`

###### requestCount?

`number`

#### Returns

[`StreamQuerying`](/docs/reference/nostr-tools-marketplace/classes/StreamQuerying)

***

### until()

> **until**\<`TState`\>(`stateType`): `Promise`\<`TState`\>

Defined in: [nostr-tools/marketplace/stream.ts:237](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/stream.ts#L237)

#### Type Parameters

##### TState

`TState` *extends* `StreamState`

#### Parameters

##### stateType

(...`args`) => `TState`

#### Returns

`Promise`\<`TState`\>
