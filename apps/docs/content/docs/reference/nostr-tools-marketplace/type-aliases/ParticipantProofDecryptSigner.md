---
title: "Type Alias: ParticipantProofDecryptSigner"
description: "Type Alias: ParticipantProofDecryptSigner in nostr-tools/marketplace."
full: true
---

# Type Alias: ParticipantProofDecryptSigner

> **ParticipantProofDecryptSigner** = `object`

Defined in: participant-proof.ts:71

## Properties

### getPublicKey?

> `optional` **getPublicKey?**: () => `Promise`\<`string`\> \| `string`

Defined in: participant-proof.ts:72

#### Returns

`Promise`\<`string`\> \| `string`

***

### nip44Decrypt

> **nip44Decrypt**: (`pubkey`, `ciphertext`) => `Promise`\<`string`\> \| `string`

Defined in: participant-proof.ts:73

#### Parameters

##### pubkey

`string`

##### ciphertext

`string`

#### Returns

`Promise`\<`string`\> \| `string`
