---
title: "Variable: paymentMethod"
description: "Variable: paymentMethod in nostr-tools/marketplace."
full: true
---

# Variable: paymentMethod

> `const` **paymentMethod**: `object`

Defined in: paymentmethod.ts:172

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

> **findOne**: (`pool`, `relays`, `query`) => `Promise`\<[`ParsedPaymentMethod`](/docs/reference/nostr-tools-marketplace/type-aliases/ParsedPaymentMethod) \| `null`\> = `findPaymentMethod`

#### Parameters

##### pool

`Pick`\<`AbstractSimplePool`, `"querySync"`\>

##### relays

`string`[]

##### query?

[`PaymentMethodFindQuery`](/docs/reference/nostr-tools-marketplace/type-aliases/PaymentMethodFindQuery) = `{}`

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
