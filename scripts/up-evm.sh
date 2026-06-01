#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT/dependencies/marketplace-evm-stack"

./scripts/up.sh
./scripts/wait.sh
