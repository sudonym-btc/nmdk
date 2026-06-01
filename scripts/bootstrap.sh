#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

git submodule update --init --recursive

packages=(
  "dependencies/nostr-tools"
  "dependencies/marketplace-cashu-ts"
  "dependencies/marketplace-evm-contracts"
  "dependencies/marketplace-evm-ts"
  "dependencies/marketplace-app-ts"
)

for package_dir in "${packages[@]}"; do
  if [[ -f "$package_dir/package-lock.json" ]]; then
    npm --prefix "$package_dir" ci --ignore-scripts
  elif [[ -f "$package_dir/package.json" ]]; then
    npm --prefix "$package_dir" install --ignore-scripts
  fi
done
