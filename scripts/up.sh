#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Starting NMDK Cashu stack, including local relay..."
(cd "$ROOT/dependencies/marketplace-cashu-stack" && ./scripts/up.sh && ./scripts/wait.sh)

echo "Starting NMDK EVM stack..."
(cd "$ROOT/dependencies/marketplace-evm-stack" && ./scripts/up.sh && ./scripts/wait.sh)

node "$ROOT/scripts/write-local-env.mjs"

echo "Seeding deterministic marketplace fixtures..."
node "$ROOT/scripts/seed-local-relay.mjs"

echo "Starting NMDK Signet remote signer..."
(cd "$ROOT" && docker compose up -d --remove-orphans signet signet-ui)
node "$ROOT/scripts/seed-signet-keys.mjs"

cat <<EOF

NMDK local stack is ready.

Relay:        ws://127.0.0.1:18080
Cashu sat:    http://127.0.0.1:19338
Cashu usd:    http://127.0.0.1:19339
Arbitrum RPC: http://127.0.0.1:18546
Boltz API:    http://127.0.0.1:19001/v2
Bundler:      http://127.0.0.1:4337
Paymaster:    http://127.0.0.1:3010
Signet UI:    http://127.0.0.1:13047
Signet API:   http://127.0.0.1:13046
Seed manifest: $ROOT/data/seed/marketplace-seed.json
Signet keys:  $ROOT/data/seed/signet-keys.json

Run the demo client with:
  npm run demo

Refresh deterministic relay fixtures with:
  npm run seed

Refresh deterministic Signet keys with:
  npm run seed:signet

Run stack-backed marketplace driver tests with:
  npm run test:e2e
EOF
