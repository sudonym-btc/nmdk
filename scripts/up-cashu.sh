#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Starting shared marketplace Bitcoin and Lightning edge for Cashu..."
"$ROOT/scripts/up-marketplace-lightning.sh"

echo "Starting Cashu stack..."
cd "$ROOT/dependencies/marketplace-cashu-stack"

./scripts/up.sh
./scripts/wait.sh

echo "Preparing Cashu-facing marketplace Lightning liquidity..."
MARKETPLACE_EDGE_ENABLE_BOLTZ=0 "$ROOT/scripts/init-marketplace-liquidity.sh"
