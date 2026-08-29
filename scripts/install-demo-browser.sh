#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PLAYWRIGHT="$ROOT/node_modules/.bin/playwright"

if [ ! -x "$PLAYWRIGHT" ]; then
  echo "Playwright is not installed. Run ./scripts/bootstrap.sh first." >&2
  exit 1
fi

case "$(uname -s)" in
  Linux)
    "$PLAYWRIGHT" install --with-deps chromium
    ;;
  Darwin)
    "$PLAYWRIGHT" install chromium
    ;;
  *)
    echo "Automated demo capture supports macOS and Linux; found $(uname -s)." >&2
    exit 1
    ;;
esac
