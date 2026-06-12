---
title: "Variable: participantProofs"
description: "Variable: participantProofs in nostr-tools/marketplace."
full: true
---

# Variable: participantProofs

> `const` **participantProofs**: `object`

Defined in: participant-proof.ts:366

## Type Declaration

### disclosureKeyWrap

> **disclosureKeyWrap**: (`opts`) => `ProofDisclosureKeyTag` = `proofDisclosureKeyWrap`

#### Parameters

##### opts

###### disclosureKey

`Uint8Array`

###### proofId

`string`

###### recipientPubkey

`string`

###### senderSecretKey

`Uint8Array`

#### Returns

`ProofDisclosureKeyTag`

### hashPayload

> **hashPayload**: (`payload`) => `string` = `hashParticipantProofPayload`

#### Parameters

##### payload

`string`

#### Returns

`string`

### keyTag

> **keyTag**: (`key`) => `string`[] = `participantProofKeyTag`

#### Parameters

##### key

`ProofDisclosureKeyTag`

#### Returns

`string`[]

### keyWrap

> **keyWrap**: (`opts`) => `ProofDisclosureKeyTag` = `participantProofKeyWrap`

#### Parameters

##### opts

###### disclosureKey

`Uint8Array`

###### proofId

`string`

###### recipientPubkey

`string`

###### senderSecretKey

`Uint8Array`

#### Returns

`ProofDisclosureKeyTag`

### openPayload

> **openPayload**: (`payload`, `disclosureKey`) => `string` = `openSealedProofPayload`

#### Parameters

##### payload

`string`

##### disclosureKey

`Uint8Array`

#### Returns

`string`

### parseKeyTag

> **parseKeyTag**: (`tag`) => `ProofDisclosureKeyTag` \| `null` = `parseParticipantProofKeyTag`

#### Parameters

##### tag

`string`[]

#### Returns

`ProofDisclosureKeyTag` \| `null`

### parseProofTag

> **parseProofTag**: (`tag`) => [`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag) \| `null` = `parseParticipantProofTag`

#### Parameters

##### tag

`string`[]

#### Returns

[`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag) \| `null`

### proofTag

> **proofTag**: (`proof`) => `string`[] = `participantProofTag`

#### Parameters

##### proof

[`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag)

#### Returns

`string`[]

### publicProof

> **publicProof**: (`authorization`) => [`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag) = `publicParticipantProof`

#### Parameters

##### authorization

`string` \| `NostrEvent`

#### Returns

[`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag)

### resolve

> **resolve**: (`proof`, `context`, `options`) => `Promise`\<[`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution)\> = `resolveParticipantProof`

#### Parameters

##### proof

[`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag)

##### context

[`ParticipantProofContext`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofContext)

##### options?

[`ResolveParticipantProofOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveParticipantProofOptions) = `{}`

#### Returns

`Promise`\<[`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution)\>

### resolvePublic

> **resolvePublic**: (`proof`, `context`) => [`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution) = `resolvePublicParticipantProof`

#### Parameters

##### proof

[`ParticipantProofTag`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofTag)

##### context

[`ParticipantProofContext`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofContext)

#### Returns

[`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution)

### sealedProof

> **sealedProof**: (`authorization`, `disclosureKey`) => [`SealedParticipantProof`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedParticipantProof) = `sealedParticipantProof`

#### Parameters

##### authorization

`string` \| `NostrEvent`

##### disclosureKey?

`Uint8Array` = `...`

#### Returns

[`SealedParticipantProof`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedParticipantProof)

### sealPayload

> **sealPayload**: (`payload`, `disclosureKey`) => `SealedProofPayload` = `sealProofPayload`

#### Parameters

##### payload

`string`

##### disclosureKey?

`Uint8Array` = `...`

#### Returns

`SealedProofPayload`

### tradeKeyAuthorizationTemplate

> **tradeKeyAuthorizationTemplate**: (`auth`) => `EventTemplate` = `generateTradeKeyAuthorizationEventTemplate`

#### Parameters

##### auth

[`TradeKeyAuthorizationTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/TradeKeyAuthorizationTemplate)

#### Returns

`EventTemplate`

### unwrapDisclosureKey

> **unwrapDisclosureKey**: (`proofId`, `options`) => `Promise`\<`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`\> = `unwrapProofDisclosureKey`

#### Parameters

##### proofId

`string`

##### options

[`ResolveParticipantProofOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolveParticipantProofOptions)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`\>

### validateAuthorization

> **validateAuthorization**: (`authorization`, `context`) => [`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution) = `validateTradeKeyAuthorization`

#### Parameters

##### authorization

`NostrEvent`

##### context

[`ParticipantProofContext`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofContext)

#### Returns

[`ParticipantProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/ParticipantProofResolution)
