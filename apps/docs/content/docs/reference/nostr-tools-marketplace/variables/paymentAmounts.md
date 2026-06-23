---
title: "Variable: paymentAmounts"
description: "Variable: paymentAmounts in nostr-tools/marketplace."
full: true
---

# Variable: paymentAmounts

> `const` **paymentAmounts**: `object`

Defined in: [nostr-tools/marketplace/payment-amount.ts:195](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/payment-amount.ts#L195)

## Type Declaration

### build

> **build**: (`amount`, `options`) => `PaymentAmountFields` & `object` = `buildPaymentAmountPayload`

#### Parameters

##### amount

[`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

##### options

[`BuildPaymentAmountPayloadOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/BuildPaymentAmountPayloadOptions)

#### Returns

`PaymentAmountFields` & `object`

### id

> **id**: (`amount`) => `string` = `paymentAmountId`

#### Parameters

##### amount

[`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

#### Returns

`string`

### isSealed

> **isSealed**: (`value`) => `value is SealedPaymentAmount` = `isSealedPaymentAmount`

#### Parameters

##### value

`unknown`

#### Returns

`value is SealedPaymentAmount`

### keyTag

> **keyTag**: (`key`) => `string`[] = `paymentAmountKeyTag`

#### Parameters

##### key

`ProofDisclosureKeyTag`

#### Returns

`string`[]

### parseKeyTag

> **parseKeyTag**: (`tag`) => `ProofDisclosureKeyTag` \| `null` = `parsePaymentAmountKeyTag`

#### Parameters

##### tag

`string`[]

#### Returns

`ProofDisclosureKeyTag` \| `null`

### parseSealed

> **parseSealed**: (`value`) => [`SealedPaymentAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentAmount) \| `undefined` = `parseSealedPaymentAmount`

#### Parameters

##### value

`unknown`

#### Returns

[`SealedPaymentAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentAmount) \| `undefined`

### resolve

> **resolve**: (`container`, `options`) => `Promise`\<[`PaymentAmountResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentAmountResolution)\> = `resolvePaymentAmount`

#### Parameters

##### container

[`PaymentAmountContainer`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentAmountContainer)

##### options?

[`ResolvePaymentAmountOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/ResolvePaymentAmountOptions) = `{}`

#### Returns

`Promise`\<[`PaymentAmountResolution`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentAmountResolution)\>

### seal

> **seal**: (`amount`, `disclosureKey?`) => `object` = `sealPaymentAmount`

#### Parameters

##### amount

[`MarketplaceAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/MarketplaceAmount)

##### disclosureKey?

`Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`object`

##### amount

> **amount**: [`SealedPaymentAmount`](/docs/reference/nostr-tools-marketplace/type-aliases/SealedPaymentAmount)

##### disclosureKey

> **disclosureKey**: `Uint8Array`
