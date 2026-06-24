# NMDK Docs

Fumadocs/Next.js site for NMDK integration docs and package-owned documentation
links.

## Commands

Run from the repository root:

```bash
npm run docs:api
npm run docs:links
npm run docs:dev
npm run docs:build
npm run docs:check
```

Run from this workspace:

```bash
npm run api:generate
npm run packages:generate
npm run dev
npm run build
npm run types:check
```

## Package Links

Package docs are generated inside their own submodule repositories. This app
does not generate package API references.

`scripts/generate-package-links.mjs` reads the current submodule commits and
regenerates `content/docs/packages.mdx` with GitHub links to package-owned docs
at those exact commits.
