#!/usr/bin/env bash
set -euo pipefail

BITCOIN_RPC_HOST="${BITCOIN_RPC_HOST:-bitcoind}"
BITCOIN_RPC_USER="${BITCOIN_RPC_USER:-regtest}"
BITCOIN_RPC_PASSWORD="${BITCOIN_RPC_PASSWORD:-regtest}"
MIN_BLOCK_HEIGHT="${MARKETPLACE_BITCOIN_MIN_BLOCK_HEIGHT:-150}"
CLIENT_FUND_AMOUNT_BTC="${MARKETPLACE_BITCOIN_CLIENT_FUND_AMOUNT_BTC:-10}"

btc() {
  bitcoin-cli -regtest -rpcconnect="$BITCOIN_RPC_HOST" -rpcuser="$BITCOIN_RPC_USER" -rpcpassword="$BITCOIN_RPC_PASSWORD" "$@"
}

btc_wallet() {
  bitcoin-cli -regtest -rpcconnect="$BITCOIN_RPC_HOST" -rpcuser="$BITCOIN_RPC_USER" -rpcpassword="$BITCOIN_RPC_PASSWORD" -rpcwallet="$1" "${@:2}"
}

ensure_wallet_loaded() {
  local wallet="$1"
  local i
  for i in $(seq 1 60); do
    if btc listwallets | grep -Fq "\"$wallet\""; then
      return 0
    fi
    btc createwallet "$wallet" >/dev/null 2>&1 ||
      btc loadwallet "$wallet" >/dev/null 2>&1 ||
      true
    if btc listwallets | grep -Fq "\"$wallet\""; then
      return 0
    fi
    sleep 1
  done
  echo "timed out waiting for Bitcoin wallet '$wallet' to load" >&2
  btc listwallets >&2 || true
  return 1
}

mine_blocks() {
  local count="$1"
  local address
  address="$(btc_wallet regtest getnewaddress "" bech32)"
  btc generatetoaddress "$count" "$address" >/dev/null
}

is_initial_block_download() {
  btc getblockchaininfo | tr -d ' ' | grep -q '"initialblockdownload":true'
}

until btc getblockchaininfo >/dev/null 2>&1; do
  echo "waiting for shared bitcoind..."
  sleep 1
done

ensure_wallet_loaded regtest

height="$(btc getblockcount)"
if [ "$height" -lt "$MIN_BLOCK_HEIGHT" ]; then
  echo "mining shared regtest chain to height $MIN_BLOCK_HEIGHT..."
  mine_blocks "$((MIN_BLOCK_HEIGHT - height))"
fi

ensure_wallet_loaded client

client_balance="$(btc_wallet client getbalance | awk '{printf "%.8f", $1}')"
if awk "BEGIN { exit !($client_balance < 1) }"; then
  client_address="$(btc_wallet client getnewaddress "" bech32m)"
  btc_wallet regtest -named sendtoaddress address="$client_address" amount="$CLIENT_FUND_AMOUNT_BTC" fee_rate=1 >/dev/null
  mine_blocks 1
fi

if is_initial_block_download; then
  echo "mining a fresh shared regtest block to leave initial block download..."
  mine_blocks 1
fi

echo "shared marketplace bitcoind ready"
