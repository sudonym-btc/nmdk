#!/usr/bin/env bash
set -euo pipefail

BITCOIN_COOKIE="${BITCOIN_COOKIE:-/bitcoin/regtest/.cookie}"
BITCOIN_RPC_HOST="${BITCOIN_RPC_HOST:-bitcoind}"
CHANNEL_SIZE_SAT="${MARKETPLACE_EDGE_CHANNEL_SIZE_SAT:-8000000}"
CHANNEL_PUSH_SAT="${MARKETPLACE_EDGE_CHANNEL_PUSH_SAT:-4000000}"
FUND_AMOUNT_BTC="${MARKETPLACE_EDGE_FUND_AMOUNT_BTC:-1}"
MIN_WALLET_BALANCE_SAT="${MARKETPLACE_EDGE_MIN_WALLET_BALANCE_SAT:-10000000}"
ENABLE_CASHU="${MARKETPLACE_EDGE_ENABLE_CASHU:-1}"
ENABLE_BOLTZ="${MARKETPLACE_EDGE_ENABLE_BOLTZ:-1}"

btc() {
  bitcoin-cli -regtest -rpcconnect="$BITCOIN_RPC_HOST" -rpccookiefile="$BITCOIN_COOKIE" "$@"
}

btc_wallet() {
  bitcoin-cli -regtest -rpcconnect="$BITCOIN_RPC_HOST" -rpccookiefile="$BITCOIN_COOKIE" -rpcwallet=regtest "$@"
}

ln_node() {
  local node="$1"
  shift

  case "$node" in
    marketplace)
      lncli --network=regtest --rpcserver=marketplace-lnd:10009 --lnddir=/marketplace-lnd "$@"
      ;;
    lnd1)
      lncli --network=regtest --rpcserver=lnd-1:10009 --lnddir=/lnd-1 "$@"
      ;;
    mint)
      lncli --network=regtest --rpcserver=lnd-mint:10009 --lnddir=/lnd-mint "$@"
      ;;
    buyer)
      lncli --network=regtest --rpcserver=lnd-buyer:10009 --lnddir=/lnd-buyer "$@"
      ;;
    *)
      echo "unknown LND node: $node" >&2
      exit 1
      ;;
  esac
}

mine_blocks() {
  local count="$1"
  local address
  address="$(btc_wallet getnewaddress "" bech32)"
  btc generatetoaddress "$count" "$address" >/dev/null
}

ensure_bitcoin_ready() {
  until btc getblockchaininfo >/dev/null 2>&1; do
    echo "waiting for shared bitcoind..."
    sleep 1
  done

  btc createwallet regtest >/dev/null 2>&1 || btc loadwallet regtest >/dev/null 2>&1 || true

  local height
  height="$(btc getblockcount)"
  if [ "$height" -lt 150 ]; then
    echo "mining initial shared regtest blocks..."
    mine_blocks "$((150 - height))"
  fi
}

wait_lnd_synced() {
  local node="$1"
  until [ "$(ln_node "$node" getinfo 2>/dev/null | jq -r '.synced_to_chain // false')" = "true" ]; do
    echo "waiting for $node LND to sync..."
    sleep 1
  done
}

wait_no_pending_channels() {
  local node="$1"
  until [ "$(ln_node "$node" pendingchannels | jq -r '.pending_open_channels | length')" = "0" ]; do
    echo "waiting for $node pending channels..."
    sleep 1
  done
}

fund_lnd_if_needed() {
  local node="$1"
  local balance
  balance="$(ln_node "$node" walletbalance | jq -r '.confirmed_balance // .total_balance // "0"')"
  if [ "$balance" -lt "$MIN_WALLET_BALANCE_SAT" ]; then
    local address
    address="$(ln_node "$node" newaddress p2wkh | jq -r .address)"
    echo "funding $node LND at $address"
    btc_wallet -named sendtoaddress address="$address" amount="$FUND_AMOUNT_BTC" fee_rate=1 >/dev/null
    MARKETPLACE_FUNDED_LND=1
  fi
}

active_channel_count() {
  local source="$1"
  local remote_pubkey="$2"
  ln_node "$source" listchannels |
    jq --arg pub "$remote_pubkey" '[.channels[]? | select(.remote_pubkey == $pub and .active == true)] | length'
}

ensure_channel() {
  local source="$1"
  local target="$2"
  local target_host="$3"
  local target_pubkey
  target_pubkey="$(ln_node "$target" getinfo | jq -r .identity_pubkey)"

  if [ "$(active_channel_count "$source" "$target_pubkey")" != "0" ]; then
    echo "active $source -> $target channel already exists"
    return 0
  fi

  echo "opening $source -> $target channel"
  ln_node "$source" connect "$target_pubkey@$target_host:9735" >/dev/null 2>&1 || true
  ln_node "$source" openchannel "$target_pubkey" "$CHANNEL_SIZE_SAT" "$CHANNEL_PUSH_SAT" >/dev/null
  mine_blocks 6

  wait_no_pending_channels "$source"
  wait_no_pending_channels "$target"
  wait_lnd_synced "$source"
  wait_lnd_synced "$target"

  until [ "$(active_channel_count "$source" "$target_pubkey")" != "0" ]; do
    echo "waiting for active $source -> $target channel..."
    sleep 1
  done
}

ensure_bitcoin_ready

nodes="marketplace"
if [ "$ENABLE_CASHU" = "1" ]; then
  nodes="$nodes mint buyer"
fi
if [ "$ENABLE_BOLTZ" = "1" ]; then
  nodes="$nodes lnd1"
fi

for node in $nodes; do
  wait_lnd_synced "$node"
done

MARKETPLACE_FUNDED_LND=0
for node in $nodes; do
  fund_lnd_if_needed "$node"
done

if [ "$MARKETPLACE_FUNDED_LND" = "1" ]; then
  mine_blocks 6
  for node in $nodes; do
    wait_lnd_synced "$node"
  done
fi

if [ "$ENABLE_CASHU" = "1" ]; then
  ensure_channel marketplace mint lnd-mint
  ensure_channel marketplace buyer lnd-buyer
fi

if [ "$ENABLE_BOLTZ" = "1" ]; then
  ensure_channel marketplace lnd1 lnd-1
fi

echo "marketplace shared Lightning liquidity ready"
