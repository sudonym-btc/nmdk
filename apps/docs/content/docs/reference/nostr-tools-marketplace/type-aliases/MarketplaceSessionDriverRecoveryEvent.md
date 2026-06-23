---
title: "Type Alias: MarketplaceSessionDriverRecoveryEvent"
description: "Type Alias: MarketplaceSessionDriverRecoveryEvent in nostr-tools/marketplace."
full: true
---

# Type Alias: MarketplaceSessionDriverRecoveryEvent

> **MarketplaceSessionDriverRecoveryEvent** = \{ `at`: `number`; `data?`: `Record`\<`string`, `unknown`\>; `type`: `"started"`; \} \| \{ `at`: `number`; `data?`: `Record`\<`string`, `unknown`\>; `status`: `string`; `type`: `"progress"`; \} \| \{ `at`: `number`; `data?`: `Record`\<`string`, `unknown`\>; `type`: `"resumed"`; \} \| \{ `at`: `number`; `data?`: `Record`\<`string`, `unknown`\>; `error`: `string`; `type`: `"failed"`; \} \| \{ `at`: `number`; `data?`: `Record`\<`string`, `unknown`\>; `type`: `"complete"`; \}

Defined in: [nostr-tools/marketplace/runtime-types.ts:677](https://github.com/sudonym-btc/nostr-tools/blob/4b3571f936a7136e57a48e4ec021087a540cf28e/marketplace/runtime-types.ts#L677)
