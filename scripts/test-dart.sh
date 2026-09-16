#!/usr/bin/env bash
# Hermetic Dart package checks; no Docker services or Hostr checkout required.
set -euo pipefail
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
for package in marketplace_models marketplace_evm; do
  (
    cd "$root/packages/$package"
    dart pub get --enforce-lockfile
    dart analyze lib test
    dart test --reporter expanded
  )
done
