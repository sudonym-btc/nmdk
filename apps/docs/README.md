# NMDK Docs

Fumadocs/Next.js site for generated NMDK API references.

## Commands

Run from the repository root:

```bash
npm run docs:api
npm run docs:dev
npm run docs:build
npm run docs:check
```

Run from this workspace:

```bash
npm run api:generate
npm run dev
npm run build
npm run types:check
```

## Generated References

`scripts/generate-api.mjs` uses TypeDoc and `typedoc-plugin-markdown` to regenerate:

- `content/docs/reference/nostr-tools-marketplace` from `dependencies/nostr-tools/marketplace.ts`
- `content/docs/reference/marketplace-evm` from `dependencies/marketplace-evm-ts/src/index.ts`
- `content/docs/reference/marketplace-cashu` from `dependencies/marketplace-cashu-ts/src/index.ts`

The generator adds Fumadocs frontmatter and `meta.json` files after TypeDoc runs.
