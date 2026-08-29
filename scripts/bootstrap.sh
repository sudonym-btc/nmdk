#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

git submodule update --init --recursive
node "$ROOT/scripts/verify-environment.mjs"
npm ci --ignore-scripts

echo "NMDK dependencies installed from the root lockfile."
echo "Run 'npm test' for hermetic checks, 'npm run demo:up' for the demo,"
echo "or 'npm run demo:verify:fresh' for the complete cold-start acceptance gate."
