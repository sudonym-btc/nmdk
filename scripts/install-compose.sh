#!/usr/bin/env bash
# Install the same Compose CLI used by local checks and CI.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
version="$(cat "$root/.docker-compose-version")"
case "$(uname -s)" in
  Linux) platform=linux ;;
  Darwin) platform=darwin ;;
  *) echo 'Docker Compose installation requires Linux or macOS.' >&2; exit 1 ;;
esac
case "$(uname -m)" in
  x86_64) architecture=x86_64 ;;
  aarch64|arm64) architecture=aarch64 ;;
  *) echo 'Unsupported Docker Compose architecture.' >&2; exit 1 ;;
esac

asset="docker-compose-$platform-$architecture"
url="https://github.com/docker/compose/releases/download/v$version/$asset"
download_dir="$(mktemp -d)"
trap 'rm -rf "$download_dir"' EXIT
curl --fail --silent --show-error --location "$url" -o "$download_dir/$asset"
curl --fail --silent --show-error --location "$url.sha256" -o "$download_dir/$asset.sha256"
(
  cd "$download_dir"
  if [[ "$platform" == linux ]]; then
    sha256sum --check "$asset.sha256"
  else
    shasum --algorithm 256 --check "$asset.sha256"
  fi
)

plugin_dir="${DOCKER_CONFIG:-$HOME/.docker}/cli-plugins"
mkdir -p "$plugin_dir"
install -m 755 "$download_dir/$asset" "$plugin_dir/docker-compose"
docker compose version
[[ "$(docker compose version --short)" == "$version" ]]
