---
title: "Variable: paymentProofs"
description: "Variable: paymentProofs in nostr-tools/marketplace."
full: true
---

# Variable: paymentProofs

> `const` **paymentProofs**: `object`

Defined in: [nostr-tools/marketplace/payment-proof.ts:315](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-proof.ts#L315)

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

### paramsDecryptor

> **paramsDecryptor**: (`options`) => `MarketplaceDriverPaymentProofParamsDecryptor` = `paymentProofParamsDecryptor`

#### Parameters

##### options?

[`ResolvePaymentProofOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvePaymentProofOptions) = `{}`

#### Returns

`MarketplaceDriverPaymentProofParamsDecryptor`

### paramsId

> **paramsId**: (`params`) => `string` = `paymentProofParamsId`

#### Parameters

##### params

`Record`\<`string`, `unknown`\>

#### Returns

`string`

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

### resolveParams

> **resolveParams**: (`proof`, `options`) => `Promise`\<[`PaymentProofParamsResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofParamsResolution)\> = `resolvePaymentProofParams`

#### Parameters

##### proof

[`PaymentProofEvidence`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofEvidence)

##### options?

[`ResolvePaymentProofOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvePaymentProofOptions) = `{}`

#### Returns

`Promise`\<[`PaymentProofParamsResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentProofParamsResolution)\>

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

### sealParams

> **sealParams**: (`params`, `disclosureKey?`) => `object` = `sealPaymentProofParams`

#### Parameters

##### params

`Record`\<`string`, `unknown`\>

##### disclosureKey?

`Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`object`

##### disclosureKey

> **disclosureKey**: `Uint8Array`

##### params

> **params**: `MarketplaceDriverEncryptedPaymentProofParams`
