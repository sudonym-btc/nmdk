#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

(cd "$ROOT/dependencies/marketplace-cashu-stack" && ./scripts/reset.sh)
(cd "$ROOT/dependencies/marketplace-evm-stack" && ./scripts/reset.sh)
