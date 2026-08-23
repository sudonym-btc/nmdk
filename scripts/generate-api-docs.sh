#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

packages=(
  "dependencies/marketplace-driver-interface-ts"
  "dependencies/marketplace-location-interface-ts"
  "dependencies/marketplace-location-h3-ts"
  "dependencies/marketplace-evm-contracts"
  "dependencies/marketplace-cashu-ts"
  "dependencies/marketplace-evm-ts"
  "dependencies/nostr-tools"
)

for package_dir in "${packages[@]}"; do
  npm --prefix "$ROOT/$package_dir" run docs:api
done
