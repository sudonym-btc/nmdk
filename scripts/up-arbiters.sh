#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

export MARKETPLACE_STACK_PROJECT="${MARKETPLACE_STACK_PROJECT:-nmdk-marketplace}"
export MARKETPLACE_SHARED_BITCOIN_NETWORK="${MARKETPLACE_SHARED_BITCOIN_NETWORK:-${MARKETPLACE_STACK_PROJECT}_default}"

node "$ROOT/scripts/write-local-env.mjs"

cd "$ROOT"
docker compose \
  -p nmdk-arbiters \
  -f compose.arbiters.yaml \
  up -d --force-recreate --remove-orphans
