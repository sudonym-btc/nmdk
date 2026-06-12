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
STACK_PROJECT="${MARKETPLACE_STACK_PROJECT:-nmdk-marketplace}"

mkdir -p \
  "$STACK_DATA_DIR/bitcoind" \
  "$STACK_DATA_DIR/marketplace-lnd" \
  "$STACK_DATA_DIR/lnbits" \
  "$STACK_DATA_DIR/albyhub"

if [ ! -f "$ROOT/docker/tls/ca/ca.crt" ] || [ ! -f "$ROOT/docker/certs/marketplace.test.crt" ]; then
  docker network inspect nmdk_default >/dev/null 2>&1 || docker network create nmdk_default >/dev/null
  (cd "$ROOT" && docker compose -f compose.marketplace-development.yaml run --rm marketplace-development-tls-init)
fi

export MARKETPLACE_STACK_PROJECT="$STACK_PROJECT"
export MARKETPLACE_STACK_DATA_DIR="$STACK_DATA_DIR"
export MARKETPLACE_SHARED_BITCOIN_HOST="${MARKETPLACE_SHARED_BITCOIN_HOST:-bitcoind}"
export MARKETPLACE_SHARED_BITCOIN_NETWORK="${MARKETPLACE_SHARED_BITCOIN_NETWORK:-${STACK_PROJECT}_default}"
export MARKETPLACE_SHARED_BITCOIN_DATA_DIR="${MARKETPLACE_SHARED_BITCOIN_DATA_DIR:-$STACK_DATA_DIR/bitcoind}"
export COMPOSE_PROJECT_NAME="$STACK_PROJECT"

cd "$ROOT"
docker compose -f compose.marketplace-lightning.yaml up -d --wait --wait-timeout 300 bitcoind marketplace-lnd lnbits albyhub
docker compose -f compose.marketplace-lightning.yaml --profile tools run --rm --no-deps lnbits-init
docker compose -f compose.marketplace-lightning.yaml --profile tools run --rm --no-deps alby-init
