---
title: "Type Alias: EvmEscrowCallBuilder"
description: "Type Alias: EvmEscrowCallBuilder in Marketplace EVM Driver."
full: true
---

# Type Alias: EvmEscrowCallBuilder

> **EvmEscrowCallBuilder** = `object`

Defined in: [dependencies/marketplace-evm-ts/src/escrow/types.ts:81](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/escrow/types.ts#L81)

## Methods

### arbitrate()

> **arbitrate**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

Defined in: [dependencies/marketplace-evm-ts/src/escrow/types.ts:86](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/escrow/types.ts#L86)

#### Parameters

##### params

[`EvmArbitrateParams`](/docs/reference/marketplace-evm/type-aliases/EvmArbitrateParams)

#### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

***

### claim()

> **claim**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

Defined in: [dependencies/marketplace-evm-ts/src/escrow/types.ts:84](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/escrow/types.ts#L84)

#### Parameters

##### params

[`EvmSignedEscrowAction`](/docs/reference/marketplace-evm/type-aliases/EvmSignedEscrowAction)

#### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

***

### createTrade()

> **createTrade**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

Defined in: [dependencies/marketplace-evm-ts/src/escrow/types.ts:82](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/escrow/types.ts#L82)

#### Parameters

##### params

[`EvmCreateTradeParams`](/docs/reference/marketplace-evm/type-aliases/EvmCreateTradeParams)

#### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)[]

***

### recycle()

> **recycle**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

Defined in: [dependencies/marketplace-evm-ts/src/escrow/types.ts:83](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/escrow/types.ts#L83)

#### Parameters

##### params

`EvmRecycleParams`

#### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

***

### release()

> **release**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

Defined in: [dependencies/marketplace-evm-ts/src/escrow/types.ts:85](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/escrow/types.ts#L85)

#### Parameters

##### params

[`EvmReleaseParams`](/docs/reference/marketplace-evm/type-aliases/EvmReleaseParams)

#### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

***

### withdraw()

> **withdraw**(`params`): [`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)

Defined in: [dependencies/marketplace-evm-ts/src/escrow/types.ts:87](https://github.com/sudonym-btc/marketplace-evm-ts/blob/8bf3abd83b51006e416f86f320282518e6e611ee/src/escrow/types.ts#L87)

#### Parameters

##### params

[`EvmWithdrawParams`](/docs/reference/marketplace-evm/type-aliases/EvmWithdrawParams)

#### Returns

[`NamedEvmCall`](/docs/reference/marketplace-evm/type-aliases/NamedEvmCall)
