#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT"
docker compose \
  -p nmdk-arbiters \
  -f compose.arbiters.yaml \
  down --remove-orphans
