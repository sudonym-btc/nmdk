#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CA_CERT="$ROOT/docker/tls/ca/ca.crt"
LEAF_CERT="$ROOT/docker/certs/marketplace.test.crt"
CA_NAME="NMDK Marketplace Development CA"

if [[ ! -f "$CA_CERT" || ! -f "$LEAF_CERT" ]]; then
  echo "NMDK local CA has not been generated yet; generating it with Docker..."
  (cd "$ROOT" && docker compose -f compose.marketplace-development.yaml run --rm marketplace-development-tls-init)
fi

if [[ "$(uname -s)" != "Darwin" ]]; then
  cat <<EOF
NMDK local CA generated at:
  $CA_CERT

Automatic trust installation is currently implemented for macOS only.
Install this CA certificate into your OS/browser trust store to avoid HTTPS and WSS warnings for *.marketplace.test.
EOF
  exit 0
fi

if security verify-cert -c "$LEAF_CERT" -p ssl -s marketplace.test >/dev/null 2>&1; then
  echo "NMDK local CA is already trusted by macOS."
  exit 0
fi

cat <<EOF
NMDK is about to ask for sudo to trust its local development CA.

Why sudo is needed:
  macOS stores trusted root CAs in the System keychain, and changing that trust
  store requires administrator privileges. This installs only the public CA cert:

    $CA_CERT

What this fixes:
  Chrome/Safari will trust https://*.marketplace.test and wss://relay.marketplace.test
  instead of showing "Not Secure" or blocking secure WebSocket connections.

The CA private key stays local at:
  $ROOT/docker/tls/ca/ca.key
EOF

sudo security add-trusted-cert \
  -d -r trustRoot \
  -k /Library/Keychains/System.keychain \
  "$CA_CERT"

if security verify-cert -c "$LEAF_CERT" -p ssl -s marketplace.test >/dev/null 2>&1; then
  echo "NMDK local CA is now trusted."
else
  echo "NMDK local CA was installed, but macOS did not verify the marketplace.test certificate yet."
  echo "Fully restart Chrome if it still shows the old trust state."
fi
