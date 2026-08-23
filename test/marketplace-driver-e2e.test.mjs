import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { createHash } from 'node:crypto'
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
import { decrypt as decryptNip44, getConversationKey } from 'nostr-tools/nip44'
import { finalizeEvent, getPublicKey } from 'nostr-tools/pure'

import { MemoryCashuEscrowStore } from '../dependencies/marketplace-cashu-ts/dist/storage.js'
import { deriveCashuEscrowKey } from '../dependencies/marketplace-cashu-ts/dist/seed.js'
import { MemoryOperationStore } from '../dependencies/marketplace-evm-ts/dist/utils/store.js'
import {
  accountFromPrivateKey,
  anvilFunder,
  createClients,
  escrowBalance,
  fundAccount,
  readTrade,
  sendCall,
  signArbitrate,
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
const sellerEvmPrivateKey = '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'
const arbiterEvmPrivateKey = '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'
const testSeed = process.env.NMDK_TEST_SEED ?? 'nmdk-marketplace-driver-e2e-v1'
let testSequence = 0

function nextSequence(label) {
  const value = testSequence
  testSequence += 1
  return `${testSeed}:${label}:${value}`
}

function nextSecretKey(label = 'event') {
  return Uint8Array.from(createHash('sha256').update(nextSequence(label)).digest())
}

function tradeProofSigner(seed, accountIndex) {
  const trade = marketplace.seed.deriveTradeMaterial(seed, { index: accountIndex, role: 'buyer' })
  return {
    getPublicKey: () => trade.tradePubkey,
    nip44Decrypt: (pubkey, ciphertext) =>
      decryptNip44(ciphertext, getConversationKey(trade.tradeSecretKey, pubkey)),
  }
}

function uniqueTestId(prefix) {
  return `${prefix}-${createHash('sha256').update(nextSequence(prefix)).digest('hex').slice(0, 16)}`
}

function uniqueAccountIndex(base) {
  const offset = Number.parseInt(createHash('sha256').update(nextSequence('account')).digest('hex').slice(0, 6), 16)
  return base + offset
}

function sign(template, secretKey = nextSecretKey()) {
  return finalizeEvent(template, secretKey)
}

function displayAmount(value, decimals) {
  const digits = BigInt(value).toString().padStart(decimals + 1, '0')
  if (decimals === 0) return digits
  return `${digits.slice(0, -decimals)}.${digits.slice(-decimals)}`
}

function listingEvent(
  secretKey = nextSecretKey('listing'),
  price = { value: 10_000n, denomination: 'USD', decimals: 2 },
) {
  return sign(
    marketplace.accommodationListings.template({
      d: uniqueTestId('e2e-villa'),
      title: 'NMDK E2E Villa',
      summary: 'Marketplace driver e2e listing',
      description: 'A local-only listing used by marketplace driver tests.',
      createdAt,
      publishedAt: createdAt,
      location: 'Regtest',
      status: 'active',
      prices: [{ amount: displayAmount(price.value, price.decimals), currency: price.denomination, frequency: 'day' }],
      quantity: 1,
      active: true,
      autoAccept: true,
      negotiable: false,
      minDuration: 'P1D',
      securityDeposit: { value: '0', denomination: price.denomination, decimals: price.decimals },
      minPaymentAmount: { value: BigInt(price.value).toString(), denomination: price.denomination, decimals: price.decimals },
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

async function canRpc(url) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_chainId', params: [], id: 1 }),
      signal: AbortSignal.timeout(1_000),
    })
    if (!response.ok) return false
    const payload = await response.json()
    return Boolean(payload.result)
  } catch {
    return false
  }
}

async function requireEvmStack(t) {
  const config = await readEvmStackConfig()
  if (!(await canRpc(config.chains.arbitrumRegtest.rpcUrl))) {
    throw new Error('NMDK EVM stack is required; run `npm run up` first')
  }
  return config
}

async function requireCashuStack(t) {
  if (!existsSync(cashuConfigPath)) {
    throw new Error('NMDK Cashu stack config is required; run `npm run up` first')
  }
  const config = JSON.parse(readFileSync(cashuConfigPath, 'utf8'))
  if (!(await canFetch(`${config.cashu.mints.usd.url}/v1/info`))) {
    throw new Error('NMDK Cashu stack is required; run `npm run up` first')
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

async function resolvedPaymentProof(paymentEvent, signer) {
  const payment = marketplace.orders.parsePayment(paymentEvent)
  const resolution = await marketplace.paymentProofs.resolve(payment, { signer })
  assert.equal(resolution.status, 'resolved', resolution.error)
  assert.ok(resolution.proof?.paymentProof)
  return { payment, proof: resolution.proof.paymentProof }
}

async function runMarketplacePayment(api, listing, order, options, proofSigner) {
  const states = []
  for await (const state of api.pay(listing, order, options)) states.push(state)
  const orderState = states.find(state => state.type === 'order_published')
  const paymentState = states.find(state => state.type === 'payment_published')
  assert.ok(orderState)
  assert.ok(paymentState)
  const orderEvent = orderState.event
  const paymentEvent = paymentState.event
  const { payment, proof } = await resolvedPaymentProof(paymentEvent, proofSigner)
  const group = api.orders.groups.reduce([orderEvent, paymentEvent])
  const validated = await api.orders.groups.resolveAndValidate(group, { signer: proofSigner })
  assert.equal(validated.group.stage, 'commit', JSON.stringify({
    paymentAmount: payment.content.amount,
    proofTerms: proof.terms,
    payment: validated.payment,
    order: validated.order,
  }, null, 2))
  return { states, orderEvent, paymentEvent, group: validated, proof }
}

async function runMarketplaceBid(api, listing, bid, options, proofSigner) {
  const states = []
  for await (const state of api.auctions.bid(listing, bid, options)) states.push(state)
  const bidState = states.find(state => state.type === 'bid_published')
  const paymentState = states.find(state => state.type === 'payment_published')
  assert.ok(bidState)
  assert.ok(paymentState)
  const bidEvent = bidState.event
  const paymentEvent = paymentState.event
  const parsedBid = api.auctions.parseBid(bidEvent)
  const { payment: parsedPayment, proof } = await resolvedPaymentProof(paymentEvent, proofSigner)
  assert.deepEqual(parsedPayment.refs.auctionBids, [bidEvent.id])
  assert.ok(proof.params.recycleArgs)
  return { states, bidEvent, paymentEvent, bid: parsedBid, payment: parsedPayment, proof }
}

async function payCashuInvoice(cashuConfig, bolt11) {
  if (!bolt11.toLowerCase().startsWith('lnbcrt')) return
  const command = cashuConfig.lightning.buyerLnd.payInvoiceCommand.replace('<bolt11>', `'${bolt11.replaceAll("'", "'\\''")}'`)
  await execFileAsync('bash', ['-lc', command], {
    cwd: cashuStackDir,
    timeout: 60_000,
  })
}

async function runCashuMarketplacePayment(api, listing, order, options, cashuConfig, proofSigner, bid = false) {
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
    const { payment: parsedPayment, proof } = await resolvedPaymentProof(paymentState.event, proofSigner)
    assert.deepEqual(parsedPayment.refs.auctionBids, [bidState.event.id])
    assert.ok(proof.params.recycleArgs)
    return { states, bidEvent: bidState.event, paymentEvent: paymentState.event, payment: parsedPayment, proof }
  }
  const orderState = states.find(state => state.type === 'order_published')
  const paymentState = states.find(state => state.type === 'payment_published')
  assert.ok(orderState)
  assert.ok(paymentState)
  const group = api.orders.groups.reduce([orderState.event, paymentState.event])
  const validated = await api.orders.groups.resolveAndValidate(group, { signer: proofSigner })
  assert.equal(validated.group.stage, 'commit')
  const { proof } = await resolvedPaymentProof(paymentState.event, proofSigner)
  return { states, orderEvent: orderState.event, paymentEvent: paymentState.event, group: validated, proof }
}

test('marketplace.pay creates and validates EVM USDT and tBTC escrow payments through real drivers', { timeout: 240_000 }, async t => {
  const config = await requireEvmStack(t)
  if (!config) return
  const chain = evmChainConfig(config)
  const { publicClient } = createClients(config)
  const sellerSecretKey = nextSecretKey('seller')
  const buyerSecretKey = nextSecretKey('buyer')
  const arbiterSecretKey = nextSecretKey('arbiter')
  const seed = '1'.repeat(64)

  for (const [symbol, value, accountIndex] of [
    ['USDT', 1_000_000n, uniqueAccountIndex(31)],
    ['TBTC', 100_000_000_000_000n, uniqueAccountIndex(32)],
  ]) {
    const store = new MemoryOperationStore()
    const policy = createEvmEscrowPolicy({ chains: [chain], operationStore: store, appId: 'marketplace' })
    const asset = policy.assets().find(candidate => candidate.assetAddress.toLowerCase() === config.chains.arbitrumRegtest.assets[symbol].address.toLowerCase())
    assert.ok(asset)
    const listing = listingEvent(sellerSecretKey, {
      value,
      denomination: asset.denomination,
      decimals: asset.decimals,
    })
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
      orderDrivers: [policy],
    })
    await runMarketplacePayment(api, listing, {
      tradeId: uniqueTestId(`evm-${symbol.toLowerCase()}-escrow-e2e`),
      listingAnchor: `${listing.kind}:${listing.pubkey}:${listing.tags.find(tag => tag[0] === 'd')?.[1]}`,
      amount: { value: value.toString(), denomination: asset.denomination, decimals: asset.decimals },
      createdAt,
    }, {
      accountIndex,
    }, tradeProofSigner(seed, accountIndex))
  }
})

test('marketplace.auctions.bid places an EVM USDT auction bid through the real driver', { timeout: 180_000 }, async t => {
  const config = await requireEvmStack(t)
  if (!config) return
  const chain = evmChainConfig(config)
  const { publicClient } = createClients(config)
  const sellerSecretKey = nextSecretKey('seller')
  const buyerSecretKey = nextSecretKey('buyer')
  const arbiterSecretKey = nextSecretKey('arbiter')
  const seed = '2'.repeat(64)
  const accountIndex = uniqueAccountIndex(41)
  const value = 1_000_000n
  const store = new MemoryOperationStore()
  const policy = createEvmAuctionPolicy({ chains: [chain], operationStore: store, appId: 'marketplace' })
  const asset = policy.assets().find(candidate => candidate.assetAddress.toLowerCase() === config.chains.arbitrumRegtest.assets.USDT.address.toLowerCase())
  assert.ok(asset)
  const listing = listingEvent(sellerSecretKey, {
    value,
    denomination: asset.denomination,
    decimals: asset.decimals,
  })
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
      d: uniqueTestId('evm-usdt-auction-e2e'),
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
    auctionDrivers: [policy],
  })
  await runMarketplaceBid(api, listing, {
    amount: { value: value.toString(), denomination: asset.denomination, decimals: asset.decimals },
    createdAt,
  }, {
    accountIndex,
    auction,
  }, tradeProofSigner(seed, accountIndex))
})

test('marketplace-created EVM escrow payment settles on real MultiEscrow infrastructure with a real Cashu payment alongside it', { timeout: 240_000 }, async t => {
  const config = await requireEvmStack(t)
  if (!config) return
  const cashuConfig = await requireCashuStack(t)
  if (!cashuConfig) return
  const chain = evmChainConfig(config)
  const { publicClient, walletClient } = createClients(config)
  const sellerEvmAccount = accountFromPrivateKey(sellerEvmPrivateKey)
  const arbiterEvmAccount = accountFromPrivateKey(arbiterEvmPrivateKey)
  const sellerSecretKey = nextSecretKey('seller')
  const buyerSecretKey = nextSecretKey('buyer')
  const arbiterSecretKey = nextSecretKey('arbiter')
  const seed = '6'.repeat(64)
  const accountIndex = uniqueAccountIndex(61)
  const value = 1_250_000n
  const paymentFactor = 700n
  const bondFactor = 0n
  const store = new MemoryOperationStore()
  const policy = createEvmEscrowPolicy({ chains: [chain], operationStore: store, appId: 'marketplace' })
  const asset = policy.assets().find(candidate =>
    candidate.assetAddress.toLowerCase() === config.chains.arbitrumRegtest.assets.USDT.address.toLowerCase()
  )
  assert.ok(asset)
  const listing = listingEvent(sellerSecretKey, {
    value,
    denomination: asset.denomination,
    decimals: asset.decimals,
  })
  const client = createMarketplaceEvmClient({ chains: [chain], operationStore: store, seed, tradeIndex: accountIndex })
  const smartAccount = await client.executor.getAddress(chain.chainId)
  await fundAccount(config, publicClient, { address: smartAccount }, { usdt: value })
  const { pool } = routeEvents({
    listing,
    policy,
    asset,
    serviceType: 'EVM',
    serviceParams: {
      policyType: 'evm:multi-escrow',
      arbiterAddress: arbiterEvmAccount.address,
      contractAddress: chain.multiEscrowAddress,
      contractBytecodeHash: chain.multiEscrowBytecodeHash,
      chainId: chain.chainId,
    },
    sellerSecretKey,
    arbiterSecretKey,
    sellerEvmAddress: sellerEvmAccount.address,
  })
  const published = []
  const api = marketplace.bind(pool, relays, {
    seed,
    publish: event => published.push(event),
    orderDrivers: [policy],
  })
  const listingAnchor = `${listing.kind}:${listing.pubkey}:${listing.tags.find(tag => tag[0] === 'd')?.[1]}`
  const { proof } = await runMarketplacePayment(api, listing, {
    tradeId: uniqueTestId('evm-usdt-settlement-e2e'),
    listingAnchor,
    amount: { value: value.toString(), denomination: asset.denomination, decimals: asset.decimals },
    createdAt,
  }, {
    accountIndex,
  }, tradeProofSigner(seed, accountIndex))
  assert.equal(proof.driver, 'evm:multi-escrow')
  assert.equal(proof.params.policyType, 'evm:multi-escrow')
  assert.equal(proof.params.buyerAddress.toLowerCase(), smartAccount.toLowerCase())
  const evmTradeId = proof.params.tradeId.startsWith('0x') ? proof.params.tradeId : `0x${proof.params.tradeId}`

  const sellerBalanceBefore = await escrowBalance(publicClient, chain.multiEscrowAddress, sellerEvmAccount.address, asset.assetAddress)
  const buyerBalanceBefore = await escrowBalance(publicClient, chain.multiEscrowAddress, smartAccount, asset.assetAddress)
  const signature = await signArbitrate(
    config,
    arbiterEvmAccount,
    chain.multiEscrowAddress,
    evmTradeId,
    paymentFactor,
    bondFactor,
  )
  await sendCall(publicClient, walletClient, accountFromPrivateKey(anvilFunder.privateKey), client.escrow.arbitrate({
    tradeId: evmTradeId,
    contractAddress: chain.multiEscrowAddress,
    paymentFactor,
    bondFactor,
    signature,
  }))

  const sellerBalanceAfter = await escrowBalance(publicClient, chain.multiEscrowAddress, sellerEvmAccount.address, asset.assetAddress)
  const buyerBalanceAfter = await escrowBalance(publicClient, chain.multiEscrowAddress, smartAccount, asset.assetAddress)
  assert.equal(sellerBalanceAfter - sellerBalanceBefore, value * paymentFactor / 1000n)
  assert.equal(buyerBalanceAfter - buyerBalanceBefore, value - (value * paymentFactor / 1000n))
  const trade = await readTrade(publicClient, chain.multiEscrowAddress, evmTradeId)
  assert.equal(trade[0].toLowerCase(), zeroAddress)

  const usdMint = cashuConfig.cashu.mints.usd
  const mint = {
    mintUrl: usdMint.url,
    unit: usdMint.unit,
    denomination: usdMint.denomination,
    decimals: usdMint.decimals,
    auctionKeysetPolicies: usdMint.auctionKeysetPolicies,
  }
  const cashuSeller = deriveCashuEscrowKey('7'.repeat(64), {
    accountIndex: 0,
    mintUrl: mint.mintUrl,
    unit: mint.unit,
    role: 'settlement',
  })
  const cashuArbiter = deriveCashuEscrowKey('8'.repeat(64), {
    accountIndex: 0,
    mintUrl: mint.mintUrl,
    unit: mint.unit,
    role: 'settlement',
  })
  const cashuPolicy = createCashuEscrowPolicy({
    mints: [mint],
    storage: new MemoryCashuEscrowStore(),
    appId: 'marketplace',
  })
  const cashuAsset = cashuPolicy.assets()[0]
  const cashuListing = listingEvent(sellerSecretKey, {
    value: 2_500n,
    denomination: cashuAsset.denomination,
    decimals: cashuAsset.decimals,
  })
  const cashuListingAnchor = `${cashuListing.kind}:${cashuListing.pubkey}:${cashuListing.tags.find(tag => tag[0] === 'd')?.[1]}`
  const { pool: cashuPool } = routeEvents({
    listing: cashuListing,
    policy: cashuPolicy,
    asset: cashuAsset,
    serviceType: 'CASHU',
    serviceParams: {
      policyType: cashuPolicy.id,
      policyHash: cashuPolicy.policies()[0].hash,
      mintUrl: mint.mintUrl,
      unit: mint.unit,
      cashuPubkey: cashuArbiter.publicKey,
    },
    sellerSecretKey,
    arbiterSecretKey,
    sellerCashuPubkey: cashuSeller.publicKey,
  })
  const cashuSeed = '7'.repeat(64)
  const cashuAccountIndex = uniqueAccountIndex(71)
  const cashuApi = marketplace.bind(cashuPool, relays, {
    seed: cashuSeed,
    publish: event => published.push(event),
    orderDrivers: [cashuPolicy],
  })
  const { proof: cashuProof } = await runCashuMarketplacePayment(cashuApi, cashuListing, {
    tradeId: uniqueTestId('cashu-usd-sidecar-e2e'),
    listingAnchor: cashuListingAnchor,
    amount: { value: '2500', denomination: 'USD', decimals: 2 },
    createdAt,
  }, {
    accountIndex: cashuAccountIndex,
  }, cashuConfig, tradeProofSigner(cashuSeed, cashuAccountIndex))
  assert.equal(cashuProof.driver, cashuPolicy.id)
  assert.equal(cashuProof.params.policyType, cashuPolicy.id)
  assert.equal(cashuProof.params.mint, mint.mintUrl)
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
    auctionKeysetPolicies: usdMint.auctionKeysetPolicies,
  }
  const sellerSecretKey = nextSecretKey('seller')
  const buyerSecretKey = nextSecretKey('buyer')
  const arbiterSecretKey = nextSecretKey('arbiter')
  const listing = listingEvent(sellerSecretKey, {
    value: 2_500n,
    denomination: mint.denomination,
    decimals: mint.decimals,
  })
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
    [createCashuEscrowPolicy({ mints: [mint], storage: new MemoryCashuEscrowStore(), appId: 'marketplace' }), false, uniqueAccountIndex(51), uniqueTestId('cashu-usd-escrow-e2e')],
    [createCashuAuctionPolicy({ mints: [mint], storage: new MemoryCashuEscrowStore(), appId: 'marketplace' }), true, uniqueAccountIndex(52), uniqueTestId('cashu-usd-auction-e2e')],
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
      ...(bid ? { auctionDrivers: [policy] } : { orderDrivers: [policy] }),
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
    }, config, tradeProofSigner(seed, accountIndex), bid)
  }
})
