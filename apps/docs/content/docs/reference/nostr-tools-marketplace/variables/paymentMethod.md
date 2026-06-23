---
title: "Variable: paymentMethod"
description: "Variable: paymentMethod in nostr-tools/marketplace."
full: true
---

# Variable: paymentMethod

> `const` **paymentMethod**: `object`

Defined in: [nostr-tools/marketplace/paymentmethod.ts:216](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/paymentmethod.ts#L216)

## Type Declaration

### canonicalAssetId

> **canonicalAssetId**: (`assetId`) => `string`

#### Parameters

##### assetId

`string`

#### Returns

`string`

### cashuPubkeyTag

> **cashuPubkeyTag**: (`pubkey`) => `string`[]

#### Parameters

##### pubkey

`string`

#### Returns

`string`[]

### evmAddressOwnershipMessage

> **evmAddressOwnershipMessage**: (`opts`) => `string`

#### Parameters

##### opts

###### evmAddress

`string`

###### nostrPubkey

`string`

#### Returns

`string`

### evmAddressTag

> **evmAddressTag**: (`address`, `eip191Proof?`) => `string`[]

#### Parameters

##### address

`string`

##### eip191Proof?

`string`

#### Returns

`string`[]

### filter

> **filter**: (`query`) => `Filter` = `paymentMethodFilter`

#### Parameters

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery) = `{}`

#### Returns

`Filter`

### findOne

> **findOne**: (`pool`, `relays`, `query`, `options`) => `Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\> = `findPaymentMethod`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery) = `{}`

##### options?

[`PaymentMethodFindOptions`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindOptions) = `{}`

#### Returns

`Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\>

### parse

> **parse**: (`event`) => [`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) = `parsePaymentMethodEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod)

### template

> **template**: (`method`) => `EventTemplate` = `generatePaymentMethodEventTemplate`

#### Parameters

##### method

[`PaymentMethodTemplate`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodTemplate)

#### Returns

`EventTemplate`

### validate

> **validate**: (`event`) => `boolean` = `validatePaymentMethodEvent`

#### Parameters

##### event

`NostrEvent`

#### Returns

`boolean`
