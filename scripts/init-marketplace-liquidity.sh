#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

absolute_path() {
  local value="$1"
  case "$value" in
    /*) printf '%s\n' "$value" ;;
    *) printf '%s\n' "$ROOT/$value" ;;
  esac
}

STACK_DATA_DIR="$(absolute_path "${MARKETPLACE_STACK_DATA_DIR:-data/marketplace}")"
EVM_DATA_DIR="$(absolute_path "${MARKETPLACE_EVM_STACK_DATA_DIR:-dependencies/marketplace-evm-stack/data}")"
CASHU_DATA_DIR="$(absolute_path "${MARKETPLACE_CASHU_STACK_DATA_DIR:-dependencies/marketplace-cashu-stack/data}")"
STACK_PROJECT="${MARKETPLACE_STACK_PROJECT:-nmdk-marketplace}"

export MARKETPLACE_STACK_PROJECT="$STACK_PROJECT"
export MARKETPLACE_STACK_DATA_DIR="$STACK_DATA_DIR"
export MARKETPLACE_EVM_STACK_DATA_DIR="$EVM_DATA_DIR"
export MARKETPLACE_CASHU_STACK_DATA_DIR="$CASHU_DATA_DIR"
export MARKETPLACE_SHARED_BITCOIN_HOST="${MARKETPLACE_SHARED_BITCOIN_HOST:-bitcoind}"
export MARKETPLACE_SHARED_BITCOIN_NETWORK="${MARKETPLACE_SHARED_BITCOIN_NETWORK:-${STACK_PROJECT}_default}"
export MARKETPLACE_SHARED_BITCOIN_DATA_DIR="${MARKETPLACE_SHARED_BITCOIN_DATA_DIR:-$STACK_DATA_DIR/bitcoind}"
export COMPOSE_PROJECT_NAME="$STACK_PROJECT"

cd "$ROOT"
docker compose -f compose.marketplace-lightning.yaml run --rm marketplace-liquidity-init
