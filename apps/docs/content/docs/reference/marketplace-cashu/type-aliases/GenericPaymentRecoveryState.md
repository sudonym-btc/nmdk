---
title: "Type Alias: GenericPaymentRecoveryState"
description: "Type Alias: GenericPaymentRecoveryState in Marketplace Cashu Driver."
full: true
---

# Type Alias: GenericPaymentRecoveryState

> **GenericPaymentRecoveryState** = \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"noop"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `data?`: `Record`\<`string`, `unknown`\>; `type`: `"recovered"`; \}

Defined in: [dependencies/marketplace-cashu-ts/src/types.ts:226](https://github.com/sudonym-btc/marketplace-cashu-ts/blob/d549493bcba974136daa096b8ffbd92bdc5e3aa2/src/types.ts#L226)
