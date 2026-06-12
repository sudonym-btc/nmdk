---
title: "Variable: paymentProofs"
description: "Variable: paymentProofs in nostr-tools/marketplace."
full: true
---

# Variable: paymentProofs

> `const` **paymentProofs**: `object`

Defined in: [payment-proof.ts:225](https://github.com/sudonym-btc/nostr-tools/blob/8049e0af7b8f760c118605505fc244388fb10bff/marketplace/payment-proof.ts#L225)

## Type Declaration

### build

> **build**: (`proof`, `options`) => `object` = `buildPaymentProofPayload`

#### Parameters

##### proof

[`PaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProof)

##### options

[`BuildPaymentProofPayloadOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/BuildPaymentProofPayloadOptions)

#### Returns

`object`

##### paymentProofKeys

> **paymentProofKeys**: `ProofDisclosureKeyTag`[]

##### proof

> **proof**: [`PaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProof) \| [`SealedPaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentProof)

### id

> **id**: (`proof`) => `string` = `paymentProofId`

#### Parameters

##### proof

[`PaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProof)

#### Returns

`string`

### isSealed

> **isSealed**: (`value`) => `value is SealedPaymentProof` = `isSealedPaymentProof`

#### Parameters

##### value

`unknown`

#### Returns

`value is SealedPaymentProof`

### keyTag

> **keyTag**: (`key`) => `string`[] = `paymentProofKeyTag`

#### Parameters

##### key

`ProofDisclosureKeyTag`

#### Returns

`string`[]

### parse

> **parse**: (`json`) => [`PaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProof) \| `null` \| `undefined` = `parsePaymentProof`

#### Parameters

##### json

`unknown`

#### Returns

[`PaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProof) \| `null` \| `undefined`

### parseKeyTag

> **parseKeyTag**: (`tag`) => `ProofDisclosureKeyTag` \| `null` = `parsePaymentProofKeyTag`

#### Parameters

##### tag

`string`[]

#### Returns

`ProofDisclosureKeyTag` \| `null`

### parseSealed

> **parseSealed**: (`value`) => [`SealedPaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentProof) \| `undefined` = `parseSealedPaymentProof`

#### Parameters

##### value

`unknown`

#### Returns

[`SealedPaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentProof) \| `undefined`

### resolve

> **resolve**: (`container`, `options`) => `Promise`\<[`PaymentProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofResolution)\> = `resolvePaymentProof`

#### Parameters

##### container

[`PaymentProofContainer`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofContainer)

##### options?

[`ResolvePaymentProofOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvePaymentProofOptions) = `{}`

#### Returns

`Promise`\<[`PaymentProofResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofResolution)\>

### seal

> **seal**: (`proof`, `disclosureKey?`) => `object` = `sealPaymentProof`

#### Parameters

##### proof

[`PaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProof)

##### disclosureKey?

`Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`object`

##### disclosureKey

> **disclosureKey**: `Uint8Array`

##### proof

> **proof**: [`SealedPaymentProof`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentProof)
