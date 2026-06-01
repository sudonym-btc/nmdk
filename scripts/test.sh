#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

(cd dependencies/nostr-tools && bun test marketplace.test.ts)
(cd dependencies/marketplace-cashu-ts && npm test)
(cd dependencies/marketplace-evm-contracts && npm test)
(cd dependencies/marketplace-evm-ts && npm test)
(cd dependencies/marketplace-app-ts && npm run check)
