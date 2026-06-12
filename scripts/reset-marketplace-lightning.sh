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

export MARKETPLACE_STACK_PROJECT="$STACK_PROJECT"
export MARKETPLACE_STACK_DATA_DIR="$STACK_DATA_DIR"
export COMPOSE_PROJECT_NAME="$STACK_PROJECT"

(cd "$ROOT" && docker compose -f compose.marketplace-lightning.yaml down --volumes --remove-orphans)

mkdir -p "$STACK_DATA_DIR"
find "$STACK_DATA_DIR" -mindepth 1 -type f ! -name .gitkeep -delete
find "$STACK_DATA_DIR" -mindepth 1 -type d -empty -delete
mkdir -p "$STACK_DATA_DIR/bitcoind" "$STACK_DATA_DIR/marketplace-lnd" "$STACK_DATA_DIR/lnbits" "$STACK_DATA_DIR/albyhub"
touch \
  "$STACK_DATA_DIR/.gitkeep" \
  "$STACK_DATA_DIR/bitcoind/.gitkeep" \
  "$STACK_DATA_DIR/marketplace-lnd/.gitkeep" \
  "$STACK_DATA_DIR/lnbits/.gitkeep" \
  "$STACK_DATA_DIR/albyhub/.gitkeep"
