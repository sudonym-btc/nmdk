#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

npm run test:unit
(cd dependencies/marketplace-driver-interface-ts && npm run check && npm run build)
(cd dependencies/marketplace-location-interface-ts && npm run check && npm run build)
(cd dependencies/marketplace-location-h3-ts && npm run check && npm test)
(cd dependencies/nostr-tools && bun test marketplace.test.ts marketplace/*.test.ts)
(cd dependencies/marketplace-cashu-ts && npm test)
(cd dependencies/marketplace-evm-contracts && npm run build:artifacts && git diff --exit-code -- artifacts src && npm run check && npm run build && npm test)
(cd dependencies/marketplace-evm-ts && npm run build && npm test)
npm run build:nostr-tools
(cd dependencies/marketplace-app-ts && npm run build)
npm run docs:check
node scripts/verify-repository.mjs
