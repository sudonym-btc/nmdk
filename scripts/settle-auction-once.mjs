#!/usr/bin/env node

import { createHash } from 'node:crypto'
import {
  closeSync,
  existsSync,
  fsyncSync,
  mkdirSync,
  openSync,
  readdirSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs'
import { homedir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { createCashuAuctionPolicy } from '@sudonym-btc/marketplace-cashu'
import { createEvmAuctionPolicy } from '@sudonym-btc/marketplace-evm'
import {
  MarketplaceAuction,
  MarketplaceAuctionComplete,
  MarketplaceOrder,
  MarketplacePayment,
  MarketplacePaymentAck,
  MarketplacePaymentSettlement,
} from 'nostr-tools/kinds'
import { decrypt as nip44Decrypt, encrypt as nip44Encrypt, getConversationKey } from 'nostr-tools/nip44'
import { SimplePool } from 'nostr-tools/pool'
import { finalizeEvent, getPublicKey, verifyEvent } from 'nostr-tools/pure'
import { privateKeyToAccount } from 'viem/accounts'

import { MemoryCashuEscrowStore } from '../dependencies/marketplace-cashu-ts/dist/storage.js'
import { parseAuctionEvent, validateAuctionEvent } from '../dependencies/nostr-tools/marketplace/auction.ts'
import { settleMarketplaceAuction } from '../dependencies/nostr-tools/marketplace/runtime-auction-settlement.ts'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const root = resolve(scriptDir, '..')
const defaultManifestPath = resolve(root, 'data/seed/marketplace-seed.json')
const defaultEvmConfigPath = resolve(root, 'dependencies/marketplace-evm-stack/data/config/marketplace-evm-stack.json')
const zeroAddress = '0x0000000000000000000000000000000000000000'
const devCaBundle = resolve(root, 'docker/tls/ca/ca-bundle.crt')
const caReexecFlag = 'MARKETPLACE_SETTLE_AUCTION_CA_REEXEC'

async function reexecWithDevCaIfNeeded() {
  if (
    !globalThis.Bun ||
    process.env[caReexecFlag] ||
    process.env.NODE_EXTRA_CA_CERTS ||
    process.env.SSL_CERT_FILE ||
    !existsSync(devCaBundle)
  ) {
    return
  }
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
  scripts/settle-auction-once.mjs --method evm --account arbiterEvm --auction-anchor <addr> --now <unix-seconds>
  scripts/settle-auction-once.mjs --method cashu --account arbiterCashu --auction-anchor <addr> --now <unix-seconds>

Options:
  --method <evm|cashu>       Auction policy to use.
  --account <id>             Account id from data/seed/marketplace-seed.json.
  --auction-anchor <addr>    Auction address, e.g. 30421:<pubkey>:<d>.
  --relay <url>              Relay URL. Defaults to VITE_RELAYS or ws://127.0.0.1:18080.
  --manifest <path>          Seed manifest path.
  --seed-source <name>       marketplaceSeed or privateKey. Defaults to marketplaceSeed.
  --now <unix-seconds>       Required deterministic timestamp for emitted settlement events.
  --wait-until-ended         Wait instead of failing if the auction has not ended. The end check is always enforced.
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
  if (args.now === undefined || !Number.isSafeInteger(args.now) || args.now < 0) {
    throw new Error('--now is required and must be a non-negative unix timestamp')
  }
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

function parseOptionalJson(value) {
  if (!value) return undefined
  try {
    return JSON.parse(value)
  } catch {
    return undefined
  }
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
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

class FileSettlementJournal {
  constructor(directory) {
    this.directory = directory
  }

  path(id) {
    if (!/^auction:[a-f0-9]{64}$/.test(id)) throw new Error(`Invalid settlement journal id: ${id}`)
    return resolve(this.directory, `${id.replace(':', '-')}.json`)
  }

  async get(id) {
    const path = this.path(id)
    if (!existsSync(path)) return null
    const record = JSON.parse(readFileSync(path, 'utf8'))
    if (record?.version !== 1 || record.id !== id) {
      throw new Error(`Invalid settlement journal record: ${path}`)
    }
    return record
  }

  async put(record) {
    const path = this.path(record.id)
    mkdirSync(this.directory, { recursive: true, mode: 0o700 })
    const temporary = `${path}.${process.pid}.tmp`
    const fd = openSync(temporary, 'w', 0o600)
    try {
      writeFileSync(fd, `${JSON.stringify(record)}\n`)
      fsyncSync(fd)
    } catch (error) {
      try { unlinkSync(temporary) } catch {}
      throw error
    } finally {
      closeSync(fd)
    }
    renameSync(temporary, path)
    const directoryFd = openSync(this.directory, 'r')
    try {
      fsyncSync(directoryFd)
    } finally {
      closeSync(directoryFd)
    }
  }
}

function settlementJournalDirectory(env) {
  const configured = envValue(env, 'MARKETPLACE_SETTLEMENT_JOURNAL_DIR')
  if (configured) return resolve(configured)
  const stateHome = envValue(env, 'XDG_STATE_HOME') ?? resolve(homedir(), '.local/state')
  return resolve(stateHome, 'nmdk', 'auction-settlements')
}

const bigintMarker = '__nmdkEvmOperationBigIntV1'
let temporaryFileSequence = 0

function encodeState(_key, value) {
  return typeof value === 'bigint' ? { [bigintMarker]: value.toString() } : value
}

function decodeState(_key, value) {
  if (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    Object.keys(value).length === 1 &&
    typeof value[bigintMarker] === 'string' &&
    /^-?\d+$/.test(value[bigintMarker])
  ) {
    return BigInt(value[bigintMarker])
  }
  return value
}

function fsyncDirectory(directory) {
  const directoryFd = openSync(directory, 'r')
  try {
    fsyncSync(directoryFd)
  } finally {
    closeSync(directoryFd)
  }
}

function operationStatusMatches(record, status) {
  if (!status) return true
  return Array.isArray(status) ? status.includes(record.status) : record.status === status
}

function operationMatches(record, query = {}) {
  return (
    (query.kind === undefined || record.kind === query.kind) &&
    operationStatusMatches(record, query.status) &&
    (query.chainId === undefined || record.chainId === query.chainId) &&
    (query.tradeId === undefined || record.tradeId === query.tradeId) &&
    (query.swapId === undefined || record.swapId === query.swapId)
  )
}

/**
 * Durable operation storage for settlement-side EVM transactions and swaps.
 * Each record is independently replaced and fsynced so a process restart can
 * reconcile a transaction submitted before the prior invocation exited.
 */
export class FileEvmOperationStore {
  constructor(directory) {
    this.directory = resolve(directory)
  }

  path(id) {
    if (typeof id !== 'string' || id.length === 0) throw new Error('EVM operation id is required')
    const digest = createHash('sha256').update(id).digest('hex')
    return resolve(this.directory, `${digest}.json`)
  }

  readPath(path) {
    const envelope = JSON.parse(readFileSync(path, 'utf8'), decodeState)
    if (
      envelope?.version !== 1 ||
      !envelope.record ||
      typeof envelope.record !== 'object' ||
      typeof envelope.record.id !== 'string' ||
      this.path(envelope.record.id) !== path
    ) {
      throw new Error(`Invalid EVM operation record: ${path}`)
    }
    return envelope.record
  }

  payload(record) {
    if (!record || typeof record !== 'object' || typeof record.id !== 'string' || record.id.length === 0) {
      throw new Error('Invalid EVM operation record')
    }
    return `${JSON.stringify({ version: 1, record }, encodeState)}\n`
  }

  async get(id) {
    const path = this.path(id)
    if (!existsSync(path)) return null
    return this.readPath(path)
  }

  async put(record) {
    const path = this.path(record?.id)
    mkdirSync(this.directory, { recursive: true, mode: 0o700 })
    const temporary = `${path}.${process.pid}.${temporaryFileSequence += 1}.tmp`
    const fd = openSync(temporary, 'wx', 0o600)
    try {
      writeFileSync(fd, this.payload(record))
      fsyncSync(fd)
    } catch (error) {
      try { unlinkSync(temporary) } catch {}
      throw error
    } finally {
      closeSync(fd)
    }
    renameSync(temporary, path)
    fsyncDirectory(this.directory)
  }

  async putIfAbsent(record) {
    const path = this.path(record?.id)
    mkdirSync(this.directory, { recursive: true, mode: 0o700 })
    let fd
    try {
      fd = openSync(path, 'wx', 0o600)
    } catch (error) {
      if (error?.code === 'EEXIST') return false
      throw error
    }
    try {
      writeFileSync(fd, this.payload(record))
      fsyncSync(fd)
    } catch (error) {
      try { unlinkSync(path) } catch {}
      throw error
    } finally {
      closeSync(fd)
    }
    fsyncDirectory(this.directory)
    return true
  }

  async list(query = {}) {
    if (!existsSync(this.directory)) return []
    return readdirSync(this.directory)
      .filter(name => /^[a-f0-9]{64}\.json$/.test(name))
      .sort()
      .map(name => this.readPath(resolve(this.directory, name)))
      .filter(record => operationMatches(record, query))
  }

  async delete(id) {
    const path = this.path(id)
    try {
      unlinkSync(path)
    } catch (error) {
      if (error?.code === 'ENOENT') return
      throw error
    }
    fsyncDirectory(this.directory)
  }
}

function evmOperationStoreDirectory(env) {
  const configured = envValue(env, 'MARKETPLACE_EVM_OPERATION_STORE_DIR')
  if (configured) return resolve(configured)
  const stateHome = envValue(env, 'XDG_STATE_HOME') ?? resolve(homedir(), '.local/state')
  return resolve(stateHome, 'nmdk', 'evm-operations')
}

function buildEvmAuctionPolicy(env, operationStore) {
  const evmConfig = readJson(defaultEvmConfigPath)
  const chainId = Number.parseInt(envValue(env, 'VITE_EVM_CHAIN_ID') ?? '0', 10)
  if (!Number.isFinite(chainId) || chainId <= 0) throw new Error('Missing VITE_EVM_CHAIN_ID')
  const assets = parseJson(envValue(env, 'VITE_EVM_ASSETS'), [])
  const boltzApiUrl = envValue(env, 'VITE_EVM_BOLTZ_API_URL')
  const boltzTrust = parseOptionalJson(envValue(env, 'VITE_EVM_BOLTZ_TRUST'))
  if (boltzApiUrl && !boltzTrust?.erc20Swap?.address) {
    console.warn('[settle-auction-once] Lightning-to-EVM swaps disabled: VITE_EVM_BOLTZ_TRUST is missing or invalid')
  }
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
    boltz: boltzApiUrl && boltzTrust?.erc20Swap?.address
      ? { apiUrl: boltzApiUrl, trustByChainId: { [chainId]: boltzTrust } }
      : undefined,
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
    operationStore,
    settlementAccount: privateKeyToAccount(evmConfig.accounts.arbiter.privateKey),
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
      ...(mint.auctionKeysetPolicies ? { auctionKeysetPolicies: mint.auctionKeysetPolicies } : {}),
    })),
    storage: new MemoryCashuEscrowStore(),
    appId: 'marketplace',
  })
}

export function auctionFilter(anchor) {
  const [kind, pubkey, ...rest] = anchor.split(':')
  const d = rest.join(':')
  if (
    kind !== String(MarketplaceAuction) ||
    !/^[a-f0-9]{64}$/.test(pubkey ?? '') ||
    !d
  ) {
    throw new Error(`Invalid auction anchor: ${anchor}`)
  }
  return { kinds: [MarketplaceAuction], authors: [pubkey], '#d': [d] }
}

function assertCanonicalAuctionTerms(auction) {
  if (!/^[a-f0-9]{64}$/.test(auction.arbiterPubkey)) throw new Error('Auction has an invalid arbiter pubkey')
  if (!/^\d+:[a-f0-9]{64}:.+$/.test(auction.listingAnchor)) throw new Error('Auction has an invalid listing anchor')
  if (!Number.isSafeInteger(auction.decimals) || auction.decimals < 0) throw new Error('Auction has invalid decimals')
  if (auction.startAt !== undefined && (!Number.isSafeInteger(auction.startAt) || auction.startAt < 0)) {
    throw new Error('Auction has an invalid start_at')
  }
  if (!Number.isSafeInteger(auction.endAt) || auction.endAt <= 0) {
    throw new Error('Auction settlement requires a valid end_at')
  }
  if (auction.startAt !== undefined && auction.startAt > auction.endAt) {
    throw new Error('Auction start_at must not be after end_at')
  }
  if (auction.startingBid !== undefined && !/^\d+$/.test(auction.startingBid)) {
    throw new Error('Auction has an invalid starting_bid')
  }
  if (!Number.isSafeInteger(auction.settlementGrace) || auction.settlementGrace <= 0) {
    throw new Error('Auction promotion requires a positive signed settlement_grace')
  }
  if (!Number.isSafeInteger(auction.endAt + auction.settlementGrace)) {
    throw new Error('Auction settlement unlock time exceeds the safe integer range')
  }
}

/** Resolve the newest signed, structurally valid replacement for an auction. */
export async function fetchNewestCanonicalAuction(pool, relays, auctionAnchor) {
  const filter = auctionFilter(auctionAnchor)
  const events = await pool.querySync(relays, filter)
  const parsedById = new Map()
  for (const event of events) {
    if (!verifyEvent(event) || !validateAuctionEvent(event)) continue
    try {
      const auction = parseAuctionEvent(event)
      if (auction.auctionAnchor !== auctionAnchor) continue
      assertCanonicalAuctionTerms(auction)
      parsedById.set(event.id, auction)
    } catch {}
  }
  const [auction] = [...parsedById.values()].sort((left, right) =>
    right.event.created_at - left.event.created_at || right.event.id.localeCompare(left.event.id),
  )
  if (!auction) throw new Error(`No valid canonical auction found: ${auctionAnchor}`)
  return auction
}

const settlementTermKeys = [
  'auctionId',
  'auctionAnchor',
  'listingAnchor',
  'arbiterPubkey',
  'currency',
  'decimals',
  'startAt',
  'endAt',
  'startingBid',
  'targetUnlockAt',
]

function expectedSettlementTerms(auction) {
  return {
    auctionId: auction.d,
    auctionAnchor: auction.auctionAnchor,
    listingAnchor: auction.listingAnchor,
    arbiterPubkey: auction.arbiterPubkey,
    currency: auction.currency,
    decimals: auction.decimals,
    ...(auction.startAt !== undefined ? { startAt: auction.startAt } : {}),
    endAt: auction.endAt,
    ...(auction.startingBid !== undefined ? { startingBid: auction.startingBid } : {}),
    // The promoted order must remain locked after the auction has ended. Bind
    // that timeout to seller-signed auction data instead of allowing the
    // settling arbiter to choose an arbitrary value.
    targetUnlockAt: auction.endAt + auction.settlementGrace,
  }
}

export function assertSettlementRequestMatchesAuction(request, auction) {
  const expected = expectedSettlementTerms(auction)
  for (const key of settlementTermKeys) {
    if (request[key] !== expected[key]) {
      throw new Error(`Settlement request ${key} does not match canonical auction`)
    }
  }
}

export function settlementRequestForAuction(auction, signerPubkey, now, wallNow = Math.floor(Date.now() / 1000)) {
  assertCanonicalAuctionTerms(auction)
  if (signerPubkey !== auction.arbiterPubkey) {
    throw new Error('Local signer is not the configured auction arbiter')
  }
  if (!Number.isSafeInteger(now) || now < auction.endAt) {
    throw new Error('Settlement event timestamp must be at or after auction end_at')
  }
  if (!Number.isSafeInteger(wallNow) || wallNow < auction.endAt) {
    throw new Error(`Auction has not ended yet: end_at=${auction.endAt}`)
  }
  const request = { ...expectedSettlementTerms(auction), now }
  assertSettlementRequestMatchesAuction(request, auction)
  return request
}

export async function resolveAuctionForSettlement({
  pool,
  relays,
  auctionAnchor,
  signerPubkey,
  now,
  waitUntilEnded = false,
  secondsNow = () => Math.floor(Date.now() / 1000),
  sleep = waitMs => new Promise(resolveWait => setTimeout(resolveWait, waitMs)),
  onWait,
}) {
  for (;;) {
    const auction = await fetchNewestCanonicalAuction(pool, relays, auctionAnchor)
    assertCanonicalAuctionTerms(auction)
    if (signerPubkey !== auction.arbiterPubkey) {
      throw new Error('Local signer is not the configured auction arbiter')
    }
    if (!Number.isSafeInteger(now) || now < auction.endAt) {
      throw new Error('Settlement event timestamp must be at or after auction end_at')
    }
    const wallNow = secondsNow()
    if (!Number.isSafeInteger(wallNow) || wallNow < 0) throw new Error('Current unix timestamp is invalid')
    if (wallNow >= auction.endAt) {
      return {
        auction,
        request: settlementRequestForAuction(auction, signerPubkey, now, wallNow),
      }
    }
    if (!waitUntilEnded) throw new Error(`Auction has not ended yet: end_at=${auction.endAt}`)
    const waitMs = Math.max(1_000, (auction.endAt - wallNow + 1) * 1_000)
    onWait?.({ auctionAnchor, endAt: auction.endAt, waitMs })
    await sleep(waitMs)
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

function publishFailureReason(result, relay) {
  if (result.status === 'rejected') {
    return `${relay}: ${result.reason instanceof Error ? result.reason.message : String(result.reason)}`
  }
  return `${relay}: ${String(result.value)}`
}

export async function publishEvent(pool, relays, signer, event) {
  const results = await Promise.allSettled(pool.publish(relays, event, {
    onauth: authEvent => Promise.resolve(signer.signEvent(authEvent)),
  }))
  const explicitlyAccepted = results.some(result =>
    result.status === 'fulfilled' &&
    typeof result.value === 'string' &&
    !result.value.startsWith('connection failure:') &&
    !result.value.startsWith('connection skipped'),
  )
  if (!explicitlyAccepted) {
    const failures = results.map((result, index) => publishFailureReason(result, relays[index] ?? `relay-${index}`))
    throw new Error(`No relay accepted event ${event.id}: ${failures.join('; ') || 'no relays configured'}`)
  }
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
  await reexecWithDevCaIfNeeded()
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
  const journalDirectory = settlementJournalDirectory(env)
  const operationStoreDirectory = evmOperationStoreDirectory(env)
  const published = []
  try {
    const { auction, request } = await resolveAuctionForSettlement({
      pool,
      relays,
      auctionAnchor: args.auctionAnchor,
      signerPubkey: pubkey,
      now: args.now,
      waitUntilEnded: args.waitUntilEnded,
      onWait: details => console.log('[settle-auction-once] waiting for auction end', details),
    })
    const bidPolicy = args.method === 'evm'
      ? buildEvmAuctionPolicy(env, new FileEvmOperationStore(operationStoreDirectory))
      : buildCashuAuctionPolicy(env)
    const states = []
    const opts = {
      pool,
      relays,
      signer,
      identity: { pubkey },
      seed: args.seedSource === 'privateKey' ? account.privateKey : account.marketplaceSeed,
      bidPolicies: [bidPolicy],
      settlementJournal: new FileSettlementJournal(journalDirectory),
      publish: async event => {
        await publishEvent(pool, relays, signer, event)
        published.push(eventSummary(event))
        console.log('[settle-auction-once] published', eventSummary(event))
      },
    }
    assertSettlementRequestMatchesAuction(request, auction)
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
      journalDirectory,
      ...(args.method === 'evm' ? { operationStoreDirectory } : {}),
      auctionAnchor: args.auctionAnchor,
      auction: eventSummary(auction.event),
      states,
      published,
      verification,
    }, null, 2))
  } finally {
    pool.close(relays)
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => {
    console.error('[settle-auction-once] failed', error)
    process.exit(1)
  })
}
