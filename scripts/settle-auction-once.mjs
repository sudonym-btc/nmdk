#!/usr/bin/env node

import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { createCashuAuctionPolicy } from '@sudonym-btc/marketplace-cashu'
import { createEvmAuctionPolicy } from '@sudonym-btc/marketplace-evm'
import {
  MarketplaceAuctionComplete,
  MarketplaceOrder,
  MarketplacePayment,
  MarketplacePaymentAck,
  MarketplacePaymentSettlement,
} from 'nostr-tools/kinds'
import { decrypt as nip44Decrypt, encrypt as nip44Encrypt, getConversationKey } from 'nostr-tools/nip44'
import { SimplePool } from 'nostr-tools/pool'
import { finalizeEvent, getPublicKey } from 'nostr-tools/pure'

import { MemoryCashuEscrowStore } from '../dependencies/marketplace-cashu-ts/dist/storage.js'
import { MemoryOperationStore } from '../dependencies/marketplace-evm-ts/dist/utils/store.js'
import { settleMarketplaceAuction } from '../dependencies/nostr-tools/marketplace/runtime-auction-settlement.ts'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const root = resolve(scriptDir, '..')
const defaultManifestPath = resolve(root, 'data/seed/marketplace-seed.json')
const zeroAddress = '0x0000000000000000000000000000000000000000'
const devCaBundle = resolve(root, 'docker/tls/ca/ca-bundle.crt')
const caReexecFlag = 'MARKETPLACE_SETTLE_AUCTION_CA_REEXEC'

if (
  globalThis.Bun &&
  !process.env[caReexecFlag] &&
  !process.env.NODE_EXTRA_CA_CERTS &&
  !process.env.SSL_CERT_FILE &&
  existsSync(devCaBundle)
) {
  const proc = Bun.spawn({
    cmd: [process.execPath, ...process.argv.slice(1)],
    env: {
      ...process.env,
      [caReexecFlag]: '1',
      NODE_EXTRA_CA_CERTS: devCaBundle,
      SSL_CERT_FILE: devCaBundle,
    },
    stdin: 'inherit',
    stdout: 'inherit',
    stderr: 'inherit',
  })
  process.exit(await proc.exited)
}

function usage() {
  return `
Usage:
  scripts/settle-auction-once.mjs --method evm --account arbiterEvm --auction-anchor <addr>
  scripts/settle-auction-once.mjs --method cashu --account arbiterCashu --auction-anchor <addr>

Options:
  --method <evm|cashu>       Auction policy to use.
  --account <id>             Account id from data/seed/marketplace-seed.json.
  --auction-anchor <addr>    Auction address, e.g. 30421:<pubkey>:<d>.
  --relay <url>              Relay URL. Defaults to VITE_RELAYS or ws://127.0.0.1:18080.
  --manifest <path>          Seed manifest path.
  --seed-source <name>       marketplaceSeed or privateKey. Defaults to marketplaceSeed.
  --now <unix-seconds>       Timestamp for emitted settlement events.
  --wait-until-ended         Query the auction and wait until its end_at before settling.
`.trim()
}

function parseArgs(argv) {
  const args = { relays: [] }
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    const [key, inlineValue] = arg.startsWith('--') ? arg.split('=', 2) : [arg, undefined]
    const nextValue = () => inlineValue ?? argv[++index]
    if (key === '--help') args.help = true
    else if (key === '--method') args.method = nextValue()
    else if (key === '--account') args.account = nextValue()
    else if (key === '--auction-anchor') args.auctionAnchor = nextValue()
    else if (key === '--relay') args.relays.push(nextValue())
    else if (key === '--manifest') args.manifest = nextValue()
    else if (key === '--seed-source') args.seedSource = nextValue()
    else if (key === '--now') args.now = Number.parseInt(nextValue(), 10)
    else if (key === '--wait-until-ended') args.waitUntilEnded = true
    else throw new Error(`Unknown argument: ${arg}`)
  }
  if (args.help) return args
  if (args.method !== 'evm' && args.method !== 'cashu') throw new Error('--method must be evm or cashu')
  if (!args.account) throw new Error('--account is required')
  if (!args.auctionAnchor) throw new Error('--auction-anchor is required')
  if (args.seedSource && args.seedSource !== 'marketplaceSeed' && args.seedSource !== 'privateKey') {
    throw new Error('--seed-source must be marketplaceSeed or privateKey')
  }
  if (args.now !== undefined && !Number.isFinite(args.now)) throw new Error('--now must be a unix timestamp')
  return args
}

function parseDotEnv(content) {
  const values = {}
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const index = line.indexOf('=')
    if (index < 0) continue
    const key = line.slice(0, index).trim()
    let value = line.slice(index + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    values[key] = value
  }
  return values
}

function loadEnv() {
  const merged = {}
  for (const path of [
    resolve(root, 'dependencies/marketplace-app-ts/.env.development'),
    resolve(root, 'dependencies/marketplace-app-ts/.env.local'),
    resolve(root, '.nmdk.local.env'),
  ]) {
    if (existsSync(path)) Object.assign(merged, parseDotEnv(readFileSync(path, 'utf8')))
  }
  for (const [key, value] of Object.entries(process.env)) {
    if (typeof value === 'string') merged[key] = value
  }
  return merged
}

function envValue(env, name) {
  const value = env[name]
  return value && value.length > 0 ? value : undefined
}

function parseJson(value, fallback) {
  if (!value) return fallback
  return JSON.parse(value)
}

function relaysFrom(env, explicit) {
  if (explicit.length > 0) return explicit
  const configured = envValue(env, 'VITE_RELAYS') ?? envValue(env, 'MARKETPLACE_RELAYS')
  if (!configured) return ['ws://127.0.0.1:18080']
  return configured.split(',').map(value => value.trim()).filter(Boolean)
}

function hexToBytes(hex) {
  const normalized = hex.trim().replace(/^0x/, '')
  if (!/^[0-9a-fA-F]{64}$/.test(normalized)) throw new Error('Expected a 32-byte hex secret key')
  return new Uint8Array(normalized.match(/../g).map(byte => Number.parseInt(byte, 16)))
}

function readAccount(manifestPath, accountId) {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  const account = manifest.accounts?.[accountId]
  if (!account?.privateKey || !account?.marketplaceSeed) {
    throw new Error(`Manifest account ${accountId} must include privateKey and marketplaceSeed`)
  }
  return account
}

class LocalSigner {
  constructor(secretKey) {
    this.secretKey = secretKey
    this.pubkey = getPublicKey(secretKey)
  }

  getPublicKey() {
    return this.pubkey
  }

  signEvent(template) {
    return finalizeEvent(template, this.secretKey)
  }

  nip44Encrypt(pubkey, plaintext) {
    return nip44Encrypt(plaintext, getConversationKey(this.secretKey, pubkey))
  }

  nip44Decrypt(pubkey, ciphertext) {
    return nip44Decrypt(ciphertext, getConversationKey(this.secretKey, pubkey))
  }
}

function buildEvmAuctionPolicy(env) {
  const chainId = Number.parseInt(envValue(env, 'VITE_EVM_CHAIN_ID') ?? '0', 10)
  if (!Number.isFinite(chainId) || chainId <= 0) throw new Error('Missing VITE_EVM_CHAIN_ID')
  const assets = parseJson(envValue(env, 'VITE_EVM_ASSETS'), [])
  const chain = {
    id: `evm-${chainId}`,
    chainId,
    name: envValue(env, 'VITE_EVM_CHAIN_NAME'),
    boltzCurrency: envValue(env, 'VITE_EVM_BOLTZ_CURRENCY'),
    rpcUrl: envValue(env, 'VITE_EVM_RPC_URL'),
    blockExplorerUrl: envValue(env, 'VITE_EVM_BLOCK_EXPLORER_URL'),
    nativeAsset: {
      chainId,
      address: zeroAddress,
      denomination: 'ETH',
      decimals: 18,
    },
    assets: assets.map(asset => ({
      chainId,
      address: asset.address,
      denomination: asset.denomination,
      decimals: asset.decimals,
      ...(asset.boltzCurrency ? { boltzCurrency: asset.boltzCurrency } : {}),
      ...(asset.boltzRouteVia ? { boltzRouteVia: asset.boltzRouteVia } : {}),
    })),
    boltz: envValue(env, 'VITE_EVM_BOLTZ_API_URL') ? { apiUrl: envValue(env, 'VITE_EVM_BOLTZ_API_URL') } : undefined,
    accountAbstraction: {
      entryPointAddress: envValue(env, 'VITE_EVM_ENTRY_POINT_ADDRESS') ?? zeroAddress,
      entryPointVersion: '0.7',
      factoryAddress: envValue(env, 'VITE_EVM_ACCOUNT_FACTORY_ADDRESS') ?? zeroAddress,
      bundlerUrl: envValue(env, 'VITE_EVM_BUNDLER_URL') ?? '',
      paymasterUrl: envValue(env, 'VITE_EVM_PAYMASTER_URL'),
      paymasterAddress: envValue(env, 'VITE_EVM_PAYMASTER_ADDRESS'),
      userOperationReceiptTimeoutMs: 120_000,
    },
    multiEscrowAddress: envValue(env, 'VITE_EVM_MULTI_ESCROW_ADDRESS') ?? zeroAddress,
    multiEscrowBytecodeHash: envValue(env, 'VITE_EVM_MULTI_ESCROW_BYTECODE_HASH'),
  }
  return createEvmAuctionPolicy({
    chains: [chain],
    operationStore: new MemoryOperationStore(),
    appId: 'marketplace',
  })
}

function buildCashuAuctionPolicy(env) {
  const mints = parseJson(
    envValue(env, 'MARKETPLACE_CASHU_MINTS') ?? envValue(env, 'VITE_CASHU_MINTS'),
    [],
  )
  if (!Array.isArray(mints) || mints.length === 0) throw new Error('Missing MARKETPLACE_CASHU_MINTS/VITE_CASHU_MINTS')
  return createCashuAuctionPolicy({
    mints: mints.map(mint => ({
      mintUrl: mint.mintUrl,
      unit: mint.unit ?? 'sat',
      denomination: mint.denomination ?? 'SAT',
      decimals: mint.decimals ?? 0,
      ...(mint.policyHash ? { policyHash: mint.policyHash } : {}),
    })),
    storage: new MemoryCashuEscrowStore(),
    appId: 'marketplace',
  })
}

function auctionFilter(anchor) {
  const [kind, pubkey, ...rest] = anchor.split(':')
  const d = rest.join(':')
  if (!kind || !pubkey || !d) throw new Error(`Invalid auction anchor: ${anchor}`)
  return { kinds: [Number.parseInt(kind, 10)], authors: [pubkey], '#d': [d] }
}

async function waitUntilAuctionEnded(pool, relays, auctionAnchor) {
  const events = await pool.querySync(relays, auctionFilter(auctionAnchor))
  const auction = events.sort((a, b) => b.created_at - a.created_at)[0]
  if (!auction) throw new Error(`Auction not found: ${auctionAnchor}`)
  const endAt = Number.parseInt(auction.tags.find(tag => tag[0] === 'end_at')?.[1] ?? '0', 10)
  if (!Number.isFinite(endAt) || endAt <= 0) return
  const now = Math.floor(Date.now() / 1000)
  const waitMs = Math.max(0, (endAt - now + 1) * 1000)
  if (waitMs > 0) {
    console.log('[settle-auction-once] waiting for auction end', { auctionAnchor, endAt, waitMs })
    await new Promise(resolveWait => setTimeout(resolveWait, waitMs))
  }
}

function eventSummary(event) {
  return {
    id: event.id,
    kind: event.kind,
    pubkey: event.pubkey,
    created_at: event.created_at,
  }
}

async function publishEvent(pool, relays, signer, event) {
  const results = await Promise.allSettled(pool.publish(relays, event, {
    onauth: authEvent => Promise.resolve(signer.signEvent(authEvent)),
  }))
  const failures = results
    .map(result => result.status === 'rejected' ? String(result.reason) : result.value)
    .filter(value =>
      typeof value === 'string' &&
      (value.startsWith('connection failure:') || value.startsWith('connection skipped')),
    )
  if (failures.length === results.length) throw new Error(`Relay publish failed: ${failures.join('; ')}`)
}

async function queryVerification(pool, relays, auctionAnchor) {
  const events = await pool.querySync(relays, {
    kinds: [
      MarketplaceAuctionComplete,
      MarketplacePaymentSettlement,
      MarketplaceOrder,
      MarketplacePayment,
      MarketplacePaymentAck,
    ],
    '#a': [auctionAnchor],
  })
  const byKind = new Map()
  for (const event of events) {
    const list = byKind.get(event.kind) ?? []
    list.push(eventSummary(event))
    byKind.set(event.kind, list)
  }
  return Object.fromEntries([...byKind.entries()].map(([kind, list]) => [kind, list]))
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    console.log(usage())
    return
  }
  const env = loadEnv()
  const relays = relaysFrom(env, args.relays)
  const manifestPath = args.manifest ?? envValue(env, 'MARKETPLACE_ARBITER_MANIFEST') ?? defaultManifestPath
  const account = readAccount(manifestPath, args.account)
  const signer = new LocalSigner(hexToBytes(account.privateKey))
  const pubkey = signer.getPublicKey()
  const pool = new SimplePool({ enableReconnect: false })
  const bidPolicy = args.method === 'evm' ? buildEvmAuctionPolicy(env) : buildCashuAuctionPolicy(env)
  const published = []
  try {
    if (args.waitUntilEnded) await waitUntilAuctionEnded(pool, relays, args.auctionAnchor)
    const states = []
    const opts = {
      pool,
      relays,
      signer,
      identity: { pubkey },
      seed: args.seedSource === 'privateKey' ? account.privateKey : account.marketplaceSeed,
      bidPolicies: [bidPolicy],
      publish: async event => {
        await publishEvent(pool, relays, signer, event)
        published.push(eventSummary(event))
        console.log('[settle-auction-once] published', eventSummary(event))
      },
    }
    const request = {
      auctionAnchor: args.auctionAnchor,
      ...(args.now !== undefined ? { now: args.now } : {}),
    }
    for await (const state of settleMarketplaceAuction(opts, request)) {
      states.push({
        type: state.type,
        action: state.action,
        event: state.event ? eventSummary(state.event) : undefined,
        bid: state.bid?.event ? eventSummary(state.bid.event) : undefined,
        payment: state.payment?.event ? eventSummary(state.payment.event) : undefined,
        winner: state.winner?.bid?.event ? eventSummary(state.winner.bid.event) : undefined,
        bids: state.bids?.length,
        validation: state.validation ? {
          driver: state.validation.driver,
          status: state.validation.status,
          error: state.validation.error,
        } : undefined,
      })
      console.log('[settle-auction-once] state', states.at(-1))
    }
    await new Promise(resolveWait => setTimeout(resolveWait, 750))
    const verification = await queryVerification(pool, relays, args.auctionAnchor)
    console.log(JSON.stringify({
      ok: true,
      method: args.method,
      account: args.account,
      pubkey,
      relays,
      auctionAnchor: args.auctionAnchor,
      states,
      published,
      verification,
    }, null, 2))
  } finally {
    pool.close(relays)
  }
}

main().catch(error => {
  console.error('[settle-auction-once] failed', error)
  process.exit(1)
})
