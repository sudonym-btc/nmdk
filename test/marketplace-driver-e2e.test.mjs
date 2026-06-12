import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'

import {
  createCashuAuctionPolicy,
  createCashuEscrowPolicy,
} from '@sudonym-btc/marketplace-cashu'
import {
  createEvmAuctionPolicy,
  createEvmEscrowPolicy,
  createMarketplaceEvmClient,
} from '@sudonym-btc/marketplace-evm'
import * as marketplace from 'nostr-tools/marketplace'
import { finalizeEvent, generateSecretKey, getPublicKey } from 'nostr-tools/pure'

import { MemoryCashuEscrowStore } from '../dependencies/marketplace-cashu-ts/dist/storage.js'
import { deriveCashuEscrowKey } from '../dependencies/marketplace-cashu-ts/dist/seed.js'
import { MemoryOperationStore } from '../dependencies/marketplace-evm-ts/dist/utils/store.js'
import {
  createClients,
  fundAccount,
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

function sign(template, secretKey = generateSecretKey()) {
  return finalizeEvent(template, secretKey)
}

function listingEvent(secretKey = generateSecretKey()) {
  return sign(
    marketplace.accommodationListings.template({
      d: `e2e-villa-${Math.random().toString(16).slice(2)}`,
      title: 'NMDK E2E Villa',
      summary: 'Marketplace driver e2e listing',
      description: 'A local-only listing used by marketplace driver tests.',
      createdAt,
      publishedAt: createdAt,
      location: 'Regtest',
      status: 'active',
      prices: [{ amount: '100.00', currency: 'USD', frequency: 'day' }],
      quantity: 1,
      active: true,
      autoAccept: true,
      negotiable: false,
      minDuration: 'P1D',
      securityDeposit: { value: '0', denomination: 'USD', decimals: 2 },
      minPaymentAmount: { value: '1', denomination: 'USD', decimals: 2 },
      maxDisputePeriod: 1209600,
      cancellationPolicies: [{ refundFraction: 1, secondsAfterOrder: 3600 }],
      images: [{ url: 'https://example.com/e2e.jpg', dimensions: '1200x800' }],
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

async function canFetch(url) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(1_000) })
    return response.ok
  } catch {
    return false
  }
}

async function requireEvmStack(t) {
  const config = await readEvmStackConfig()
  if (!(await canFetch(`${config.boltz.apiUrl}/nodes`))) {
    t.skip('NMDK EVM stack is not running; run `npm run up` first')
    return null
  }
  return config
}

async function requireCashuStack(t) {
  if (!existsSync(cashuConfigPath)) {
    t.skip('NMDK Cashu stack config is missing; run `npm run up` first')
    return null
  }
  const config = JSON.parse(readFileSync(cashuConfigPath, 'utf8'))
  if (!(await canFetch(`${config.cashu.mints.usd.url}/v1/info`))) {
    t.skip('NMDK Cashu stack is not running; run `npm run up` first')
    return null
  }
  return config
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

function routeEvents({ listing, policy, asset, serviceType, serviceParams, sellerSecretKey, arbiterSecretKey, sellerEvmAddress, sellerCashuPubkey }) {
  const descriptor = policy.policies()[0]
  const method = sign(
    marketplace.paymentMethod.template({
      trustedArbiterPubkeys: [getPublicKey(arbiterSecretKey)],
      supportedContractBytecodeHashes: descriptor.hash ? [descriptor.hash] : [],
      acceptedPaymentForms: [{
        denomination: asset.denomination,
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
      d: `${serviceType.toLowerCase()}-${asset.denomination.toLowerCase()}-${descriptor.type}`,
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

async function runMarketplacePayment(api, listing, order, options) {
  const states = []
  for await (const state of api.pay(listing, order, options)) states.push(state)
  const orderState = states.find(state => state.type === 'order_published')
  const paymentState = states.find(state => state.type === 'payment_published')
  assert.ok(orderState)
  assert.ok(paymentState)
  const orderEvent = orderState.event
  const paymentEvent = paymentState.event
  const group = api.orders.groups.reduce([orderEvent, paymentEvent])
  const validated = await api.orders.groups.resolveAndValidate(group)
  assert.equal(validated.group.stage, 'commit')
  return { states, orderEvent, paymentEvent, group: validated }
}

async function runMarketplaceBid(api, listing, bid, options) {
  const states = []
  for await (const state of api.auctions.bid(listing, bid, options)) states.push(state)
  const bidState = states.find(state => state.type === 'bid_published')
  const paymentState = states.find(state => state.type === 'payment_published')
  assert.ok(bidState)
  assert.ok(paymentState)
  const bidEvent = bidState.event
  const paymentEvent = paymentState.event
  const parsedBid = api.auctions.parseBid(bidEvent)
  const parsedPayment = marketplace.orders.parsePayment(paymentEvent)
  assert.equal(parsedPayment.content.purpose, 'auction_bid')
  assert.deepEqual(parsedPayment.refs.auctionBids, [bidEvent.id])
  assert.ok(parsedPayment.content.proof.paymentProof?.params.recycleArgs)
  return { states, bidEvent, paymentEvent, bid: parsedBid, payment: parsedPayment }
}

async function payCashuInvoice(cashuConfig, bolt11) {
  if (!bolt11.toLowerCase().startsWith('lnbcrt')) return
  const command = cashuConfig.lightning.buyerLnd.payInvoiceCommand.replace('<bolt11>', `'${bolt11.replaceAll("'", "'\\''")}'`)
  await execFileAsync('bash', ['-lc', command], {
    cwd: cashuStackDir,
    timeout: 60_000,
  })
}

async function runCashuMarketplacePayment(api, listing, order, options, cashuConfig, bid = false) {
  const iterator = bid
    ? api.auctions.bid(listing, order, options)[Symbol.asyncIterator]()
    : api.pay(listing, order, options)[Symbol.asyncIterator]()
  const states = []
  const first = await iterator.next()
  assert.equal(first.done, false)
  assert.equal(first.value.type, 'payment_required')
  states.push(first.value)
  await payCashuInvoice(cashuConfig, first.value.request.bolt11)
  for (;;) {
    const next = await iterator.next()
    if (next.done) break
    states.push(next.value)
  }
  if (bid) {
    const bidState = states.find(state => state.type === 'bid_published')
    const paymentState = states.find(state => state.type === 'payment_published')
    assert.ok(bidState)
    assert.ok(paymentState)
    const parsedPayment = marketplace.orders.parsePayment(paymentState.event)
    assert.equal(parsedPayment.content.purpose, 'auction_bid')
    assert.deepEqual(parsedPayment.refs.auctionBids, [bidState.event.id])
    assert.ok(parsedPayment.content.proof.paymentProof?.params.recycleArgs)
    return { states, bidEvent: bidState.event, paymentEvent: paymentState.event, payment: parsedPayment }
  }
  const orderState = states.find(state => state.type === 'order_published')
  const paymentState = states.find(state => state.type === 'payment_published')
  assert.ok(orderState)
  assert.ok(paymentState)
  const group = api.orders.groups.reduce([orderState.event, paymentState.event])
  const validated = await api.orders.groups.resolveAndValidate(group)
  assert.equal(validated.group.stage, 'commit')
  return { states, orderEvent: orderState.event, paymentEvent: paymentState.event, group: validated }
}

test('marketplace.pay creates and validates EVM USDT and tBTC escrow payments through real drivers', { timeout: 240_000 }, async t => {
  const config = await requireEvmStack(t)
  if (!config) return
  const chain = evmChainConfig(config)
  const { publicClient } = createClients(config)
  const sellerSecretKey = generateSecretKey()
  const buyerSecretKey = generateSecretKey()
  const arbiterSecretKey = generateSecretKey()
  const listing = listingEvent(sellerSecretKey)
  const seed = '1'.repeat(64)

  for (const [symbol, value, accountIndex] of [
    ['USDT', 1_000_000n, 31],
    ['TBTC', 100_000_000_000_000n, 32],
  ]) {
    const store = new MemoryOperationStore()
    const policy = createEvmEscrowPolicy({ chains: [chain], operationStore: store, appId: 'marketplace' })
    const asset = policy.assets().find(candidate => candidate.assetAddress.toLowerCase() === config.chains.arbitrumRegtest.assets[symbol].address.toLowerCase())
    assert.ok(asset)
    const client = createMarketplaceEvmClient({ chains: [chain], operationStore: store, seed, tradeIndex: accountIndex })
    const smartAccount = await client.executor.getAddress(chain.chainId)
    await fundAccount(config, publicClient, { address: smartAccount }, {
      [symbol === 'USDT' ? 'usdt' : 'tbtc']: value,
    })
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
    await runMarketplacePayment(api, listing, {
      tradeId: `evm-${symbol.toLowerCase()}-escrow-e2e`,
      listingAnchor: `${listing.kind}:${listing.pubkey}:${listing.tags.find(tag => tag[0] === 'd')?.[1]}`,
      amount: { value: value.toString(), denomination: asset.denomination, decimals: asset.decimals },
      createdAt,
    }, {
      accountIndex,
    })
  }
})

test('marketplace.auctions.bid places an EVM USDT auction bid through the real driver', { timeout: 180_000 }, async t => {
  const config = await requireEvmStack(t)
  if (!config) return
  const chain = evmChainConfig(config)
  const { publicClient } = createClients(config)
  const sellerSecretKey = generateSecretKey()
  const buyerSecretKey = generateSecretKey()
  const arbiterSecretKey = generateSecretKey()
  const listing = listingEvent(sellerSecretKey)
  const seed = '2'.repeat(64)
  const accountIndex = 41
  const value = 1_000_000n
  const store = new MemoryOperationStore()
  const policy = createEvmAuctionPolicy({ chains: [chain], operationStore: store, appId: 'marketplace' })
  const asset = policy.assets().find(candidate => candidate.assetAddress.toLowerCase() === config.chains.arbitrumRegtest.assets.USDT.address.toLowerCase())
  assert.ok(asset)
  const client = createMarketplaceEvmClient({ chains: [chain], operationStore: store, seed, tradeIndex: accountIndex })
  const smartAccount = await client.executor.getAddress(chain.chainId)
  await fundAccount(config, publicClient, { address: smartAccount }, { usdt: value })
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
  const listingAnchor = `${listing.kind}:${listing.pubkey}:${listing.tags.find(tag => tag[0] === 'd')?.[1]}`
  const auction = sign(
    marketplace.auctions.template({
      d: 'evm-usdt-auction-e2e',
      listingAnchor,
      arbiterPubkey: getPublicKey(arbiterSecretKey),
      currency: asset.denomination,
      decimals: asset.decimals,
      createdAt,
    }),
    sellerSecretKey,
  )
  const api = marketplace.bind(pool, relays, {
    seed,
    publish: async () => {},
    bidPolicies: [policy],
  })
  await runMarketplaceBid(api, listing, {
    amount: { value: value.toString(), denomination: asset.denomination, decimals: asset.decimals },
    createdAt,
  }, {
    accountIndex,
    auction,
  })
})

test('marketplace pay and bid create Cashu USD proofs through the real usd mint', { timeout: 180_000 }, async t => {
  const config = await requireCashuStack(t)
  if (!config) return
  const usdMint = config.cashu.mints.usd
  const mint = {
    mintUrl: usdMint.url,
    unit: usdMint.unit,
    denomination: usdMint.denomination,
    decimals: usdMint.decimals,
  }
  const sellerSecretKey = generateSecretKey()
  const buyerSecretKey = generateSecretKey()
  const arbiterSecretKey = generateSecretKey()
  const listing = listingEvent(sellerSecretKey)
  const seed = '3'.repeat(64)
  const sellerCashu = deriveCashuEscrowKey('4'.repeat(64), {
    accountIndex: 0,
    mintUrl: mint.mintUrl,
    unit: mint.unit,
    role: 'settlement',
  })
  const arbiterCashu = deriveCashuEscrowKey('5'.repeat(64), {
    accountIndex: 0,
    mintUrl: mint.mintUrl,
    unit: mint.unit,
    role: 'settlement',
  })

  for (const [policy, bid, accountIndex, tradeId] of [
    [createCashuEscrowPolicy({ mints: [mint], storage: new MemoryCashuEscrowStore(), appId: 'marketplace' }), false, 51, 'cashu-usd-escrow-e2e'],
    [createCashuAuctionPolicy({ mints: [mint], storage: new MemoryCashuEscrowStore(), appId: 'marketplace' }), true, 52, 'cashu-usd-auction-e2e'],
  ]) {
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
      ...(bid ? { bidPolicies: [policy] } : { orderPolicies: [policy] }),
    })
    const listingAnchor = `${listing.kind}:${listing.pubkey}:${listing.tags.find(tag => tag[0] === 'd')?.[1]}`
    const auction = bid
      ? sign(
          marketplace.auctions.template({
            d: tradeId,
            listingAnchor,
            arbiterPubkey: getPublicKey(arbiterSecretKey),
            currency: asset.denomination,
            decimals: asset.decimals,
            createdAt,
          }),
          sellerSecretKey,
        )
      : undefined
    await runCashuMarketplacePayment(api, listing, {
      ...(bid ? {} : { tradeId, listingAnchor }),
      amount: { value: '2500', denomination: 'USD', decimals: 2 },
      createdAt,
    }, {
      accountIndex,
      ...(auction ? { auction } : {}),
    }, config, bid)
  }
})
