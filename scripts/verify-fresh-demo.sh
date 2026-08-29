#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

export NMDK_TEST_SEED="${NMDK_TEST_SEED:-nmdk-fresh-demo-v1}"
export MARKETPLACE_TRUST_LOCAL_CA="${MARKETPLACE_TRUST_LOCAL_CA:-0}"
export MARKETPLACE_EVM_RESET_ON_UP="${MARKETPLACE_EVM_RESET_ON_UP:-1}"
export NMDK_DEMO_CAPTURE_BASE_URL="${NMDK_DEMO_CAPTURE_BASE_URL:-http://127.0.0.1:15178}"
export NMDK_DEMO_CAPTURE_REQUIRE_OWN_SERVER="${NMDK_DEMO_CAPTURE_REQUIRE_OWN_SERVER:-1}"

cleanup() {
  if [ "${NMDK_DEMO_VERIFY_KEEP_STACK:-0}" != "1" ]; then
    npm run down >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

echo "[1/6] Reproducing the pinned install from the recursive checkout..."
./scripts/bootstrap.sh

echo "[2/6] Installing the pinned browser used by the capture smoke test..."
./scripts/install-demo-browser.sh

echo "[3/6] Running the hermetic repository gate..."
npm test

echo "[4/6] Removing all disposable stack state and cold-starting every service..."
npm run down >/dev/null 2>&1 || true
npm run reset:stacks
npm run up

echo "[5/6] Running the required Cashu/EVM/Lightning integration matrix..."
npm run test:integration

echo "[6/6] Exercising and recording the buyer and escrow dashboard flows..."
npm run demo:capture

if [ "${NMDK_DEMO_VERIFY_REQUIRE_CLEAN:-0}" = "1" ]; then
  echo "Verifying that the acceptance run did not change tracked or unignored files..."
  status="$(git status --porcelain --untracked-files=all --ignore-submodules=none)"
  if [ -n "$status" ]; then
    printf '%s\n' "$status" >&2
    echo "Fresh demo verification left repository drift." >&2
    exit 1
  fi
fi

echo
echo "Fresh demo verification passed. Capture artifacts are under artifacts/marketplace-demo/."
