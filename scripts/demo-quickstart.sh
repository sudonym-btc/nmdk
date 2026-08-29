#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

./scripts/bootstrap.sh

cat <<'EOF'

Starting the disposable NMDK stack and browser demo.
Open http://127.0.0.1:5178 after Vite reports that it is ready.
Press Ctrl-C to stop the demo server; run `npm run down` to stop the stack.

EOF

exec npm run demo:up
