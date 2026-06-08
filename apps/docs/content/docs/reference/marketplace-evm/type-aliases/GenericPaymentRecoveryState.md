---
title: "Type Alias: GenericPaymentRecoveryState"
description: "Type Alias: GenericPaymentRecoveryState in Marketplace EVM Driver."
full: true
---

# Type Alias: GenericPaymentRecoveryState

> **GenericPaymentRecoveryState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"noop"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"recovered"`; \}

Defined in: [dependencies/marketplace-evm-ts/src/marketplace/types.ts:200](https://github.com/sudonym-btc/marketplace-evm-ts/blob/d5d8e551031feaa7faa270fa18bbf2a3a880df46/src/marketplace/types.ts#L200)
