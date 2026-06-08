#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

(cd "$ROOT" && docker compose down --remove-orphans)
(cd "$ROOT/dependencies/marketplace-evm-stack" && ./scripts/down.sh)
(cd "$ROOT/dependencies/marketplace-cashu-stack" && ./scripts/down.sh)
