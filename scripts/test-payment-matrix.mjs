#!/usr/bin/env node

import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFile } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'

import {
  createCashuAuctionPolicy,
  createCashuEscrowPolicy,
} from '@sudonym-btc/marketplace-cashu'
import {
  createEvmAuctionPolicy,
  createEvmEscrowPolicy,
} from '@sudonym-btc/marketplace-evm'
import * as marketplace from 'nostr-tools/marketplace'
import { finalizeEvent, generateSecretKey, getPublicKey } from 'nostr-tools/pure'

import { MemoryCashuEscrowStore } from '../dependencies/marketplace-cashu-ts/dist/storage.js'
import { deriveCashuEscrowKey } from '../dependencies/marketplace-cashu-ts/dist/seed.js'
import { MemoryOperationStore } from '../dependencies/marketplace-evm-ts/dist/utils/store.js'
import {
  createClients,
  randomTradeId,
} from '../dependencies/marketplace-evm-ts/test/integration/support/evm.mjs'
import {
  arbitrumAaConfig,
  readStackConfig as readEvmStackConfig,
} from '../dependencies/marketplace-evm-ts/test/integration/support/stack.mjs'

const execFileAsync = promisify(execFile)
const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const cashuStackDir = resolve(root, 'dependencies/marketplace-cashu-stack')
const cashuConfigPath = resolve(cashuStackDir, 'data/config/marketplace-cashu-stack.json')
const relays = ['ws://127.0.0.1:18080']
const createdAt = 1_712_678_400
const zeroAddress = '0x0000000000000000000000000000000000000000'
const runId = Date.now().toString(36)

function seedFor(label) {
  return createHash('sha256').update(`${label}:${runId}`).digest('hex')
}

function sign(template, secretKey = generateSecretKey()) {
  return finalizeEvent(template, secretKey)
}

function listingAnchor(listing) {
  return `${listing.kind}:${listing.pubkey}:${listing.tags.find(tag => tag[0] === 'd')?.[1]}`
}

function listingEvent(secretKey = generateSecretKey(), overrides = {}) {
  return sign(
    marketplace.accommodationListings.template({
      d: `matrix-listing-${runId}-${Math.random().toString(16).slice(2)}`,
      title: `NMDK Matrix ${overrides.currency ?? 'USD'} Listing`,
      summary: 'Marketplace payment matrix smoke listing',
      description: 'A local-only listing used by scripts/test-payment-matrix.mjs.',
      createdAt,
      publishedAt: createdAt,
      location: 'Regtest',
      status: 'active',
      prices: [{
        amount: overrides.amount ?? '100.00',
        currency: overrides.currency ?? 'USD',
        frequency: 'day',
      }],
      quantity: 1,
      active: true,
      autoAccept: true,
      negotiable: false,
      minDuration: 'P1D',
      securityDeposit: { value: '0', denomination: overrides.currency ?? 'USD', decimals: 2 },
      minPaymentAmount: { value: '1', denomination: overrides.currency ?? 'USD', decimals: 2 },
      maxDisputePeriod: 1209600,
      cancellationPolicies: [{ refundFraction: 1, secondsAfterOrder: 3600 }],
      images: [{ url: 'https://example.com/matrix.jpg', dimensions: '1200x800' }],
      accommodation: {
        type: 'villa',
        checkIn: '15:00',
        checkOut: '11:00',
        h3: ['8c2ab34567fffff'],
        specs: {
          wireless_internet: true,
          bedrooms: 1,
          bathrooms: 1,
          max_guests: 2,
        },
      },
    }),
    secretKey,
  )
}

function poolFor(method, service) {
  return {
    async querySync(_relays, filter) {
      const kinds = filter.kinds ?? []
      if (kinds.includes(method.kind)) return [method]
      if (kinds.includes(service.kind)) return [service]
      return []
    },
    async get() {
      return null
    },
  }
}

function evmChainConfig(config) {
  const arbitrum = config.chains.arbitrumRegtest
  const { publicClient } = createClients(config)
  const tbtcAsset = Object.values(arbitrum.assets).find(asset => asset.boltzCurrency?.toUpperCase() === 'TBTC')
  return {
    id: 'arbitrum-regtest',
    chainId: arbitrum.chainId,
    boltzCurrency: arbitrum.boltzCurrency,
    rpcUrl: arbitrum.rpcUrl,
    ...(arbitrum.blockExplorerUrl ? { blockExplorerUrl: arbitrum.blockExplorerUrl } : {}),
    publicClient,
    nativeAsset: {
      chainId: arbitrum.chainId,
      address: zeroAddress,
      denomination: arbitrum.nativeAsset.denomination,
      decimals: arbitrum.nativeAsset.decimals,
    },
    assets: Object.values(arbitrum.assets).map(asset => ({
      chainId: arbitrum.chainId,
      address: asset.address,
      denomination: asset.denomination,
      decimals: asset.decimals,
      ...(asset.boltzCurrency ? { boltzCurrency: asset.boltzCurrency } : {}),
      ...(asset.boltzCurrency?.toUpperCase() === 'USDT' && tbtcAsset && arbitrum.boltzCurrency
        ? {
            boltzRouteVia: {
              boltzCurrency: tbtcAsset.boltzCurrency,
              assetAddress: tbtcAsset.address,
              decimals: tbtcAsset.decimals,
              quoteCurrency: arbitrum.boltzCurrency,
            },
          }
        : {}),
    })),
    accountAbstraction: arbitrumAaConfig(config),
    multiEscrowAddress: arbitrum.multiEscrow.address,
    multiEscrowBytecodeHash: arbitrum.multiEscrow.runtimeBytecodeHash,
    boltz: {
      apiUrl: config.boltz.apiUrl,
    },
  }
}

function routeEvents({
  listing,
  policy,
  asset,
  serviceType,
  serviceParams,
  sellerSecretKey,
  arbiterSecretKey,
  sellerEvmAddress,
  sellerCashuPubkey,
}) {
  const descriptor = policy.policies()[0]
  const method = sign(
    marketplace.paymentMethod.template({
      trustedArbiterPubkeys: [getPublicKey(arbiterSecretKey)],
      supportedContractBytecodeHashes: descriptor.hash ? [descriptor.hash] : [],
      acceptedPaymentForms: [{
        currency: asset.currency,
        denomination: asset.currency ?? asset.denomination,
        assetId: asset.assetId,
        appId: asset.appId,
      }],
      ...(sellerEvmAddress ? { evmAddress: sellerEvmAddress } : {}),
      ...(sellerCashuPubkey ? { cashuPubkey: sellerCashuPubkey } : {}),
      createdAt,
    }),
    sellerSecretKey,
  )
  const service = sign(
    marketplace.arbitrationServices.template({
      d: `${serviceType.toLowerCase()}-${asset.denomination.toLowerCase()}-${descriptor.type}-${runId}`,
      pubkey: getPublicKey(arbiterSecretKey),
      type: serviceType,
      maxDuration: 1209600,
      fee: { ppm: 0, base: '0', min: '0', max: '0' },
      params: serviceParams,
      createdAt,
    }),
    arbiterSecretKey,
  )
  return { method, service, pool: poolFor(method, service), listing }
}

async function canFetch(url) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(1_000) })
    return response.ok
  } catch {
    return false
  }
}

async function requireEvmStack() {
  const config = await readEvmStackConfig()
  if (!(await canFetch(`${config.boltz.apiUrl}/nodes`))) {
    throw new Error('NMDK EVM stack is not running; run `npm run up` first')
  }
  return config
}

async function requireCashuStack() {
  if (!existsSync(cashuConfigPath)) {
    throw new Error('NMDK Cashu stack config is missing; run `npm run up` first')
  }
  const config = JSON.parse(readFileSync(cashuConfigPath, 'utf8'))
  if (!(await canFetch(`${config.cashu.mints.sat.url}/v1/info`))) {
    throw new Error('NMDK Cashu SAT mint is not running; run `npm run up` first')
  }
  return config
}

async function payBolt11Invoice(bolt11) {
  if (!/^ln/i.test(bolt11)) return
  await execFileAsync('npm', ['run', 'pay:invoice', '--', bolt11], {
    cwd: root,
    env: { ...process.env, NMDK_PAY_INVOICE_TIMEOUT_MS: '240000' },
    timeout: 240_000,
  })
}

async function collectPaymentStates(stream) {
  const states = []
  for await (const state of stream) {
    states.push(state)
    if (state.type === 'payment_required' && state.request?.bolt11) {
      await payBolt11Invoice(state.request.bolt11)
    }
  }
  return states
}

async function runMarketplacePayment(api, listing, order, options) {
  const states = await collectPaymentStates(api.pay(listing, order, options))
  const orderState = states.find(state => state.type === 'order_published')
  const paymentState = states.find(state => state.type === 'payment_published')
  assert.ok(orderState)
  assert.ok(paymentState)
  const group = api.orders.groups.reduce([orderState.event, paymentState.event])
  const validated = await api.orders.groups.resolveAndValidate(group)
  assert.equal(validated.group.stage, 'commit')
  return {
    states,
    orderEvent: orderState.event,
    paymentEvent: paymentState.event,
    group: validated,
  }
}

async function runMarketplaceBid(api, listing, bid, options) {
  const states = await collectPaymentStates(api.auctions.bid(listing, bid, options))
  const bidState = states.find(state => state.type === 'bid_published')
  const paymentState = states.find(state => state.type === 'payment_published')
  assert.ok(bidState)
  assert.ok(paymentState)
  const parsedPayment = marketplace.orders.parsePayment(paymentState.event)
  assert.equal(parsedPayment.content.purpose, 'auction_bid')
  assert.deepEqual(parsedPayment.refs.auctionBids, [bidState.event.id])
  assert.ok(parsedPayment.content.proof.paymentProof?.params.recycleArgs)
  return {
    states,
    bidEvent: bidState.event,
    paymentEvent: paymentState.event,
    payment: parsedPayment,
  }
}

async function testEvmUsdOrder() {
  const config = await requireEvmStack()
  const chain = evmChainConfig(config)
  const sellerSecretKey = generateSecretKey()
  const arbiterSecretKey = generateSecretKey()
  const listing = listingEvent(sellerSecretKey, { currency: 'USD', amount: '50.00' })
  const seed = seedFor('evm-usd-order')
  const accountIndex = 771
  const marketplaceValue = 5_000n
  const store = new MemoryOperationStore()
  const policy = createEvmEscrowPolicy({ chains: [chain], operationStore: store, appId: 'marketplace' })
  const asset = policy.assets().find(candidate =>
    candidate.assetAddress.toLowerCase() === config.chains.arbitrumRegtest.assets.USDT.address.toLowerCase()
  )
  assert.ok(asset)
  const { pool } = routeEvents({
    listing,
    policy,
    asset,
    serviceType: 'EVM',
    serviceParams: {
      policyType: 'evm:multi-escrow',
      arbiterAddress: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
      contractAddress: chain.multiEscrowAddress,
      contractBytecodeHash: chain.multiEscrowBytecodeHash,
      chainId: chain.chainId,
    },
    sellerSecretKey,
    arbiterSecretKey,
    sellerEvmAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  })
  const api = marketplace.bind(pool, relays, {
    seed,
    publish: async () => {},
    orderPolicies: [policy],
  })
  const result = await runMarketplacePayment(api, listing, {
    tradeId: randomTradeId(),
    listingAnchor: listingAnchor(listing),
    amount: { value: marketplaceValue.toString(), currency: 'USD', denomination: 'USD', decimals: 2 },
    createdAt,
  }, {
    accountIndex,
  })
  return { order: result.orderEvent.id, payment: result.paymentEvent.id }
}

async function testEvmUsdBid() {
  const config = await requireEvmStack()
  const chain = evmChainConfig(config)
  const sellerSecretKey = generateSecretKey()
  const arbiterSecretKey = generateSecretKey()
  const listing = listingEvent(sellerSecretKey, { currency: 'USD', amount: '60.00' })
  const seed = seedFor('evm-usd-bid')
  const accountIndex = 772
  const marketplaceValue = 6_000n
  const store = new MemoryOperationStore()
  const policy = createEvmAuctionPolicy({ chains: [chain], operationStore: store, appId: 'marketplace' })
  const asset = policy.assets().find(candidate =>
    candidate.assetAddress.toLowerCase() === config.chains.arbitrumRegtest.assets.USDT.address.toLowerCase()
  )
  assert.ok(asset)
  const { pool } = routeEvents({
    listing,
    policy,
    asset,
    serviceType: 'EVM',
    serviceParams: {
      policyType: 'evm:multi-escrow-auction-v1',
      arbiterAddress: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
      contractAddress: chain.multiEscrowAddress,
      contractBytecodeHash: chain.multiEscrowBytecodeHash,
      chainId: chain.chainId,
    },
    sellerSecretKey,
    arbiterSecretKey,
    sellerEvmAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
  })
  const auction = sign(
    marketplace.auctions.template({
      d: `matrix-evm-usd-auction-${runId}`,
      listingAnchor: listingAnchor(listing),
      arbiterPubkey: getPublicKey(arbiterSecretKey),
      currency: 'USD',
      decimals: 2,
      createdAt,
    }),
    sellerSecretKey,
  )
  const api = marketplace.bind(pool, relays, {
    seed,
    publish: async () => {},
    bidPolicies: [policy],
  })
  const result = await runMarketplaceBid(api, listing, {
    amount: { value: marketplaceValue.toString(), currency: 'USD', denomination: 'USD', decimals: 2 },
    createdAt,
  }, {
    accountIndex,
    auction,
  })
  return { bid: result.bidEvent.id, payment: result.paymentEvent.id }
}

async function testCashuSatOrder() {
  const config = await requireCashuStack()
  const satMint = config.cashu.mints.sat
  const mint = {
    mintUrl: satMint.url,
    unit: satMint.unit,
    denomination: satMint.denomination,
    decimals: satMint.decimals,
  }
  const sellerSecretKey = generateSecretKey()
  const arbiterSecretKey = generateSecretKey()
  const listing = listingEvent(sellerSecretKey, { currency: 'BTC', amount: '0.00012000' })
  const seed = seedFor('cashu-sat-order')
  const sellerCashu = deriveCashuEscrowKey(seedFor('cashu-seller-order'), {
    accountIndex: 0,
    mintUrl: mint.mintUrl,
    unit: mint.unit,
    role: 'settlement',
  })
  const arbiterCashu = deriveCashuEscrowKey(seedFor('cashu-arbiter-order'), {
    accountIndex: 0,
    mintUrl: mint.mintUrl,
    unit: mint.unit,
    role: 'settlement',
  })
  const policy = createCashuEscrowPolicy({
    mints: [mint],
    storage: new MemoryCashuEscrowStore(),
    appId: 'marketplace',
  })
  const asset = policy.assets()[0]
  const { pool } = routeEvents({
    listing,
    policy,
    asset,
    serviceType: 'CASHU',
    serviceParams: {
      policyType: policy.id,
      policyHash: policy.policies()[0].hash,
      mintUrl: mint.mintUrl,
      unit: mint.unit,
      cashuPubkey: arbiterCashu.publicKey,
    },
    sellerSecretKey,
    arbiterSecretKey,
    sellerCashuPubkey: sellerCashu.publicKey,
  })
  const api = marketplace.bind(pool, relays, {
    seed,
    publish: async () => {},
    orderPolicies: [policy],
  })
  const result = await runMarketplacePayment(api, listing, {
    tradeId: `cashu-sat-order-${runId}`,
    listingAnchor: listingAnchor(listing),
    amount: { value: '12000', denomination: 'BTC', decimals: 8 },
    createdAt,
  }, {
    accountIndex: 773,
  })
  return { order: result.orderEvent.id, payment: result.paymentEvent.id }
}

async function testCashuSatBid() {
  const config = await requireCashuStack()
  const satMint = config.cashu.mints.sat
  const mint = {
    mintUrl: satMint.url,
    unit: satMint.unit,
    denomination: satMint.denomination,
    decimals: satMint.decimals,
  }
  const sellerSecretKey = generateSecretKey()
  const arbiterSecretKey = generateSecretKey()
  const listing = listingEvent(sellerSecretKey, { currency: 'BTC', amount: '0.00015000' })
  const seed = seedFor('cashu-sat-bid')
  const sellerCashu = deriveCashuEscrowKey(seedFor('cashu-seller-bid'), {
    accountIndex: 0,
    mintUrl: mint.mintUrl,
    unit: mint.unit,
    role: 'settlement',
  })
  const arbiterCashu = deriveCashuEscrowKey(seedFor('cashu-arbiter-bid'), {
    accountIndex: 0,
    mintUrl: mint.mintUrl,
    unit: mint.unit,
    role: 'settlement',
  })
  const policy = createCashuAuctionPolicy({
    mints: [mint],
    storage: new MemoryCashuEscrowStore(),
    appId: 'marketplace',
  })
  const asset = policy.assets()[0]
  const { pool } = routeEvents({
    listing,
    policy,
    asset,
    serviceType: 'CASHU',
    serviceParams: {
      policyType: policy.id,
      policyHash: policy.policies()[0].hash,
      mintUrl: mint.mintUrl,
      unit: mint.unit,
      cashuPubkey: arbiterCashu.publicKey,
    },
    sellerSecretKey,
    arbiterSecretKey,
    sellerCashuPubkey: sellerCashu.publicKey,
  })
  const auction = sign(
    marketplace.auctions.template({
      d: `matrix-cashu-btc-auction-${runId}`,
      listingAnchor: listingAnchor(listing),
      arbiterPubkey: getPublicKey(arbiterSecretKey),
      currency: 'BTC',
      decimals: 8,
      createdAt,
    }),
    sellerSecretKey,
  )
  const api = marketplace.bind(pool, relays, {
    seed,
    publish: async () => {},
    bidPolicies: [policy],
  })
  const result = await runMarketplaceBid(api, listing, {
    amount: { value: '15000', denomination: 'BTC', decimals: 8 },
    createdAt,
  }, {
    accountIndex: 774,
    auction,
  })
  return { bid: result.bidEvent.id, payment: result.paymentEvent.id }
}

function short(id) {
  return `${id.slice(0, 8)}...${id.slice(-8)}`
}

async function main() {
  const checks = [
    ['EVM USD order', testEvmUsdOrder],
    ['EVM USD auction bid', testEvmUsdBid],
    ['Cashu BTC/SAT order', testCashuSatOrder],
    ['Cashu BTC/SAT auction bid', testCashuSatBid],
  ]
  const summary = []

  for (const [label, test] of checks) {
    const result = await test()
    summary.push({ label, result })
    const ids = Object.entries(result)
      .map(([key, value]) => `${key} ${short(value)}`)
      .join(', ')
    console.log(`PASS ${label}: ${ids}`)
  }

  console.log(JSON.stringify({ runId, summary }, null, 2))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
