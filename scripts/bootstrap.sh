#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

git submodule update --init --recursive
node "$ROOT/scripts/verify-environment.mjs"
npm ci --ignore-scripts

echo "NMDK dependencies installed from the root lockfile."
echo "Run 'npm test' for hermetic checks or 'npm run test:integration' with fresh stacks."
