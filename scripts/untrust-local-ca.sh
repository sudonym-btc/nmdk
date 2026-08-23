#!/usr/bin/env bash
set -euo pipefail

CA_NAME="NMDK Marketplace Development CA"

if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "Automatic trust removal is implemented for macOS only."
  echo "Remove '$CA_NAME' from the OS or browser trust store you used."
  exit 0
fi

if ! security find-certificate -c "$CA_NAME" /Library/Keychains/System.keychain >/dev/null 2>&1; then
  echo "NMDK development CA is not present in the macOS System keychain."
  exit 0
fi

cat <<EOF
NMDK is about to ask for sudo to remove '$CA_NAME' from the macOS System keychain.
EOF
sudo security delete-certificate -c "$CA_NAME" /Library/Keychains/System.keychain
echo "NMDK development CA removed. Fully restart browsers that cached its trust."
