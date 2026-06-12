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

MARKETPLACE_STACK_PROJECT="${MARKETPLACE_STACK_PROJECT:-nmdk-marketplace}"
MARKETPLACE_STACK_DATA_DIR="$(absolute_path "${MARKETPLACE_STACK_DATA_DIR:-data/marketplace}")"
MARKETPLACE_SHARED_BITCOIN_NETWORK="${MARKETPLACE_SHARED_BITCOIN_NETWORK:-${MARKETPLACE_STACK_PROJECT}_default}"
MARKETPLACE_SHARED_BITCOIN_DATA_DIR="${MARKETPLACE_SHARED_BITCOIN_DATA_DIR:-$MARKETPLACE_STACK_DATA_DIR/bitcoind}"

export MARKETPLACE_STACK_PROJECT
export MARKETPLACE_STACK_DATA_DIR
export MARKETPLACE_SHARED_BITCOIN_NETWORK
export MARKETPLACE_SHARED_BITCOIN_DATA_DIR
export MARKETPLACE_SHARED_BITCOIN_HOST="${MARKETPLACE_SHARED_BITCOIN_HOST:-bitcoind}"

echo "Starting NMDK shared marketplace Bitcoin and Lightning edge..."
"$ROOT/scripts/up-marketplace-lightning.sh"

echo "Starting NMDK EVM stack..."
(
  export MARKETPLACE_EVM_USE_SHARED_BITCOIN=1
  cd "$ROOT/dependencies/marketplace-evm-stack"
  ./scripts/up.sh
  ./scripts/wait.sh
)

echo "Starting NMDK Cashu stack, including local relay..."
(cd "$ROOT/dependencies/marketplace-cashu-stack" && ./scripts/up.sh && ./scripts/wait.sh)

echo "Preparing shared NMDK Lightning liquidity..."
"$ROOT/scripts/init-marketplace-liquidity.sh"

echo "Starting NMDK Signet remote signer and Blossom server..."
(cd "$ROOT" && docker compose up -d --remove-orphans signet signet-ui blossom)

echo "Starting NMDK development proxy..."
(cd "$ROOT" && docker compose -f compose.marketplace-development.yaml up -d --force-recreate marketplace-development-proxy)

echo "Trusting NMDK local development CA..."
if ! "$ROOT/scripts/trust-local-ca.sh"; then
  echo "Warning: unable to install the NMDK local CA into the host trust store."
  echo "HTTPS will still be served, but browsers may show certificate warnings."
fi

node "$ROOT/scripts/write-local-env.mjs"

echo "Seeding deterministic marketplace fixtures..."
node "$ROOT/scripts/seed-local-relay.mjs"

node "$ROOT/scripts/seed-signet-keys.mjs"

echo "Starting NMDK arbiter daemons..."
"$ROOT/scripts/up-arbiters.sh"

cat <<EOF

NMDK local stack is ready.

Relay:        ws://127.0.0.1:18080
Cashu sat:    http://127.0.0.1:19338
Cashu usd:    http://127.0.0.1:19339
Arbitrum RPC: http://127.0.0.1:18546
Arbitrum explorer: https://explorer.arbitrum.evm.marketplace.test
Boltz API:    http://127.0.0.1:19001/v2
LND edge RPC: 127.0.0.1:32009
LND edge REST: https://127.0.0.1:28083
LNbits:       http://127.0.0.1:15055 / https://lnbits.marketplace.test
Alby Hub:     http://127.0.0.1:15056 / https://alby.marketplace.test
Bundler:      http://127.0.0.1:4337
Paymaster:    http://127.0.0.1:3010
Signet UI:    http://127.0.0.1:13047
Signet API:   http://127.0.0.1:13046
Blossom:      http://127.0.0.1:13096 / https://blossom.marketplace.test
TLS proxy:    https://marketplace.test
TLS CA:       $ROOT/docker/tls/ca/ca.crt
Arbiters:     nmdk-arbiter-evm, nmdk-arbiter-cashu, nmdk-arbiter-both
Seed manifest: $ROOT/data/seed/marketplace-seed.json
Signet keys:  $ROOT/data/seed/signet-keys.json

Run the demo client with:
  npm run demo

Refresh deterministic relay fixtures with:
  npm run seed

Refresh deterministic Signet keys with:
  npm run seed:signet

Restart arbiter daemons with:
  npm run up:arbiters

Run stack-backed marketplace driver tests with:
  npm run test:e2e
EOF
