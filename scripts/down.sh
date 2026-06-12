#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

"$ROOT/scripts/down-arbiters.sh" || true
(cd "$ROOT" && docker compose -f compose.marketplace-development.yaml down) || true
(cd "$ROOT" && docker compose down --remove-orphans)
(cd "$ROOT/dependencies/marketplace-cashu-stack" && ./scripts/down.sh)
(cd "$ROOT/dependencies/marketplace-evm-stack" && ./scripts/down.sh)
(cd "$ROOT" && docker compose -f compose.marketplace-lightning.yaml down --remove-orphans)
