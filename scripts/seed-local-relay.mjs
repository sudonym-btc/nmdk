#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { deriveCashuEscrowKey } from '../dependencies/marketplace-cashu-ts/dist/seed.js'
import {
  canonicalCashuAssetId,
  cashuAuctionPolicyHash,
  cashuAuctionPolicyType,
  cashuEscrowPolicyHash,
  cashuEscrowPolicyType,
} from '../dependencies/marketplace-cashu-ts/dist/marketplace/proof.js'
import { evmPaymentAssets } from '../dependencies/marketplace-evm-ts/dist/marketplace/assets.js'
import {
  evmAuctionPolicies,
  evmEscrowPolicies,
} from '../dependencies/marketplace-evm-ts/dist/marketplace/policies.js'
import {
  ClassifiedListing,
  MarketplaceAuction,
  MarketplaceOrder,
  MarketplacePayment,
  MarketplacePaymentSettlement,
  MarketplaceReview,
  MarketplaceSeed,
} from 'nostr-tools/kinds'
import * as marketplace from 'nostr-tools/marketplace'
import { SimplePool } from 'nostr-tools/pool'
import { finalizeEvent, getPublicKey } from 'nostr-tools/pure'

import { hexToBytes, localDevAccounts } from './local-dev-keys.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const defaultCashuConfigPath = resolve(root, 'dependencies/marketplace-cashu-stack/data/config/marketplace-cashu-stack.json')
const defaultEvmConfigPath = resolve(root, 'dependencies/marketplace-evm-stack/data/config/marketplace-evm-stack.json')
const defaultManifestPath = resolve(root, 'data/seed/marketplace-seed.json')
const zeroAddress = '0x0000000000000000000000000000000000000000'
const seedNow = Math.floor(Date.now() / 1000)
const configuredCreatedAt = Number.parseInt(process.env.NMDK_SEED_CREATED_AT ?? '', 10)
const defaultCreatedAt = Number.isSafeInteger(configuredCreatedAt) && configuredCreatedAt > 0
  ? configuredCreatedAt
  : seedNow - 600
const defaultAuctionStartAt = seedNow - 300
const defaultAuctionEndAt = seedNow + 24 * 60 * 60
const defaultAuctionMaxEndAt = seedNow + 25 * 60 * 60
const maxDuration = 14 * 24 * 60 * 60
const defaultDemoPublicUrl = process.env.NMDK_DEMO_PUBLIC_URL || 'https://ts.client.marketplace.test'
const defaultPublicRelay = process.env.NMDK_PUBLIC_RELAY || 'wss://relay.marketplace.test'
const defaultPublicCashuMintUrl = process.env.NMDK_PUBLIC_CASHU_MINT_URL || 'https://mint.cashu.marketplace.test'
const defaultPublicCashuUsdMintUrl = process.env.NMDK_PUBLIC_CASHU_USD_MINT_URL || 'https://mint-usd.cashu.marketplace.test'
const defaultLnbitsUrl = process.env.NMDK_LNBITS_URL || process.env.LNBITS_BASE_URL || 'http://127.0.0.1:15055'
const defaultPublicLnbitsUrl = process.env.NMDK_PUBLIC_LNBITS_URL || 'https://lnbits.marketplace.test'
const seedLnbitsByDefault = process.env.NMDK_SEED_LNBITS !== '0'

function usage() {
  return `
Usage:
  npm run seed
  node scripts/seed-local-relay.mjs --relay ws://127.0.0.1:18080

Options:
  --relay <url>       Relay to seed. Defaults to NMDK_RELAY or ws://127.0.0.1:18080.
  --public-relay <url> Relay URL to write into the manifest. Defaults to the publish relay.
  --lnbits-url <url>  LNbits API URL for seeded LUD16 accounts. Defaults to NMDK_LNBITS_URL or http://127.0.0.1:15055.
  --public-lnbits-url <url> Public LNbits URL used in LUD16 values. Defaults to https://lnbits.marketplace.test.
  --skip-lnbits      Do not create LNbits users/pay links or add lud16 to profiles.
  --manifest <path>   Manifest path. Defaults to data/seed/marketplace-seed.json.
  --keepalive         Keep the process alive after seeding so a compose container stays up.
  --help              Print this help.
`.trim()
}

function parseArgs(argv) {
  const options = {
    relay: process.env.NMDK_RELAY || 'ws://127.0.0.1:18080',
    publicRelay: defaultPublicRelay,
    lnbitsUrl: defaultLnbitsUrl,
    publicLnbitsUrl: defaultPublicLnbitsUrl,
    seedLnbits: seedLnbitsByDefault,
    manifestPath: process.env.NMDK_SEED_MANIFEST || defaultManifestPath,
    keepalive: false,
    help: false,
  }
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    const [flag, inline] = arg.includes('=') ? arg.split(/=(.*)/s, 2) : [arg, undefined]
    const value = inline ?? argv[i + 1]
    const consume = inline === undefined
    switch (flag) {
      case '--relay':
        if (!value) throw new Error('--relay requires a value')
        options.relay = value
        if (consume) i += 1
        break
      case '--manifest':
        if (!value) throw new Error('--manifest requires a value')
        options.manifestPath = resolve(root, value)
        if (consume) i += 1
        break
      case '--public-relay':
        if (!value) throw new Error('--public-relay requires a value')
        options.publicRelay = value
        if (consume) i += 1
        break
      case '--lnbits-url':
        if (!value) throw new Error('--lnbits-url requires a value')
        options.lnbitsUrl = value
        if (consume) i += 1
        break
      case '--public-lnbits-url':
        if (!value) throw new Error('--public-lnbits-url requires a value')
        options.publicLnbitsUrl = value
        if (consume) i += 1
        break
      case '--skip-lnbits':
        options.seedLnbits = false
        break
      case '--keepalive':
        options.keepalive = true
        break
      case '--help':
      case '-h':
        options.help = true
        break
      default:
        throw new Error(`Unknown argument: ${arg}`)
    }
  }
  return options
}

function readJson(path, label) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'))
  } catch (error) {
    throw new Error(`Could not read ${label} at ${path}. Run \`npm run up\` first. ${error.message}`)
  }
}

function sign(template, account) {
  return finalizeEvent(template, hexToBytes(account.privateKey))
}

function seededAccount(id, privateKeySuffix) {
  const privateKey = privateKeySuffix.padStart(64, '0')
  return {
    id,
    privateKey,
    pubkey: getPublicKey(hexToBytes(privateKey)),
  }
}

function reviewTradeAccount(index) {
  return seededAccount(`reviewTrade${index + 1}`, (0x400 + index).toString(16))
}

function reviewBuyerAccounts() {
  return {
    reviewBuyerAda: seededAccount('reviewBuyerAda', '301'),
    reviewBuyerBen: seededAccount('reviewBuyerBen', '302'),
    reviewBuyerCora: seededAccount('reviewBuyerCora', '303'),
    reviewBuyerDax: seededAccount('reviewBuyerDax', '304'),
    reviewBuyerEli: seededAccount('reviewBuyerEli', '305'),
  }
}

function seedAccounts() {
  return { ...localDevAccounts, ...reviewBuyerAccounts() }
}

function sha256Hex(input) {
  return createHash('sha256').update(input).digest('hex')
}

function sha256Bytes(input) {
  return new Uint8Array(createHash('sha256').update(input).digest())
}

function deterministicMarketplaceSeed(id) {
  return sha256Hex(`nmdk:local-marketplace-seed:v1:${id}`)
}

function marketplaceSeedEvent(id, account) {
  return marketplace.seed.createEvent({
    identitySecretKey: hexToBytes(account.privateKey),
    identityPubkey: account.pubkey,
    seed: deterministicMarketplaceSeed(id),
    createdAt: defaultCreatedAt,
    nonce: sha256Bytes(`nmdk:local-marketplace-seed-nonce:v1:${id}`),
  })
}

function anchor(event) {
  const d = event.tags.find(tag => tag[0] === 'd')?.[1]
  if (!d) throw new Error(`Seeded event ${event.id} has no d tag`)
  return `${event.kind}:${event.pubkey}:${d}`
}

function profile(account, name, about, options = {}) {
  return sign(
    {
      kind: 0,
      created_at: defaultCreatedAt,
      content: JSON.stringify({
        name,
        display_name: name,
        about,
        website: 'http://127.0.0.1:5178/',
        picture: `https://api.dicebear.com/9.x/shapes/svg?seed=nmdk-${account.id}`,
        ...(options.lud16 ? { lud16: options.lud16 } : {}),
      }),
      tags: [['nmdk', 'seed']],
    },
    account,
  )
}

function demoAssetUrl(path) {
  if (/^https?:\/\//.test(path)) return path
  return new URL(path, defaultDemoPublicUrl).toString()
}

function evmChainFromConfig(config) {
  const arbitrum = config.chains.arbitrumRegtest
  const aa = arbitrum.accountAbstraction
  const tbtcAsset = Object.values(arbitrum.assets).find(asset => asset.boltzCurrency?.toUpperCase() === 'TBTC')
  return {
    id: 'arbitrum-regtest',
    chainId: arbitrum.chainId,
    boltzCurrency: arbitrum.boltzCurrency,
    name: arbitrum.name,
    rpcUrl: arbitrum.rpcUrl,
    ...(arbitrum.blockExplorerUrl ? { blockExplorerUrl: arbitrum.blockExplorerUrl } : {}),
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
    accountAbstraction: {
      entryPointAddress: aa.entryPointAddress,
      entryPointVersion: aa.entryPointVersion ?? '0.7',
      factoryAddress: aa.factoryAddress,
      bundlerUrl: aa.bundlerUrl,
      ...(aa.paymasterUrl ? { paymasterUrl: aa.paymasterUrl } : {}),
      ...(aa.paymasterAddress ? { paymasterAddress: aa.paymasterAddress } : {}),
      userOperationReceiptTimeoutMs: aa.userOperationReceiptTimeoutMs ?? 120_000,
    },
    multiEscrowAddress: arbitrum.multiEscrow.address,
    multiEscrowBytecodeHash: arbitrum.multiEscrow.runtimeBytecodeHash,
    boltz: { apiUrl: config.boltz.apiUrl },
  }
}

function cashuMintsFromConfig(config) {
  return Object.entries(config.cashu.mints).map(([key, mint]) => ({
    key,
    mintUrl: key === 'usd' ? defaultPublicCashuUsdMintUrl : defaultPublicCashuMintUrl,
    unit: mint.unit,
    denomination: mint.denomination ?? key.toUpperCase(),
    decimals: mint.decimals ?? (mint.unit === 'usd' ? 2 : 0),
  }))
}

function cashuIdentityPubkey(account, mints) {
  const [mint] = mints
  if (!mint) throw new Error('No Cashu mints configured')
  return deriveCashuEscrowKey(account.privateKey, {
    accountIndex: 0,
    mintUrl: mint.mintUrl,
    unit: mint.unit,
    role: 'settlement',
  }).publicKey
}

function lnbitsEndpoint(baseUrl, path) {
  return new URL(path, baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`).toString()
}

function normalizeLnbitsUsername(value) {
  const normalized = value
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, '-')
    .replaceAll(/^-+|-+$/g, '')
  return normalized.slice(0, 64) || `seed-${sha256Hex(value).slice(0, 12)}`
}

function lnbitsPassword(account) {
  return `nmdk-${sha256Hex(`lnbits:v1:${account.id}:${account.privateKey}`).slice(0, 32)}`
}

function publicLnbitsDomain(publicLnbitsUrl) {
  const url = new URL(publicLnbitsUrl)
  return url.host
}

function lnbitsHeaders({ token, headers = {}, body } = {}) {
  return {
    Accept: 'application/json',
    ...(body === undefined ? {} : { 'Content-Type': 'application/json' }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  }
}

async function lnbitsJson(method, baseUrl, path, options = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), options.timeoutMs ?? 30_000)
  const body = options.body
  try {
    const response = await fetch(lnbitsEndpoint(baseUrl, path), {
      method,
      headers: lnbitsHeaders({ token: options.token, headers: options.headers, body }),
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal,
    })
    const text = await response.text()
    let parsed = {}
    if (text) {
      try {
        parsed = JSON.parse(text)
      } catch {
        parsed = { detail: text }
      }
    }
    if (!response.ok) {
      const error = new Error(`LNbits ${method} ${path} failed with HTTP ${response.status}: ${text}`)
      error.status = response.status
      error.body = parsed
      throw error
    }
    if (options.expectList) return Array.isArray(parsed) ? parsed : [parsed]
    return parsed
  } finally {
    clearTimeout(timer)
  }
}

async function lnbitsLogin(baseUrl, username, password) {
  const body = await lnbitsJson('POST', baseUrl, '/api/v1/auth', {
    body: { username, password },
  })
  const token = body.access_token
  if (!token) throw new Error(`LNbits login for ${username} did not return an access token`)
  return token
}

async function lnbitsLoginOrRegister(baseUrl, account, username) {
  const password = lnbitsPassword(account)
  try {
    return await lnbitsLogin(baseUrl, username, password)
  } catch (loginError) {
    if (![400, 401, 404, 405].includes(loginError.status)) throw loginError
  }

  try {
    const body = await lnbitsJson('POST', baseUrl, '/api/v1/auth/register', {
      body: {
        username,
        password,
        password_repeat: password,
        email: `${username}@marketplace.test`,
      },
    })
    if (body.access_token) return body.access_token
  } catch (registerError) {
    const detail = JSON.stringify(registerError.body ?? {}).toLowerCase()
    if (!detail.includes('already') && !detail.includes('taken') && registerError.status !== 409) {
      throw registerError
    }
  }

  return lnbitsLogin(baseUrl, username, password)
}

async function lnbitsWallet(baseUrl, token, username) {
  const wallets = await lnbitsJson('GET', baseUrl, '/api/v1/wallets', {
    token,
    expectList: true,
  })
  const wallet = wallets[0]
  if (!wallet?.id || !wallet?.adminkey) {
    throw new Error(`LNbits user ${username} has no wallet with an admin key`)
  }
  return wallet
}

async function ensureLnbitsPayLink(baseUrl, token, wallet, username, publicDomain) {
  await lnbitsJson('PUT', baseUrl, '/api/v1/extension/lnurlp/enable', { token })

  const links = await lnbitsJson('GET', baseUrl, '/lnurlp/api/v1/links', {
    token,
    headers: { 'X-Api-Key': wallet.adminkey },
    expectList: true,
  })
  const existing = links.find(link => link?.username === username)
  if (existing) return existing

  try {
    return await lnbitsJson('POST', baseUrl, '/lnurlp/api/v1/links', {
      token,
      headers: {
        'X-Api-Key': wallet.adminkey,
        'X-Forwarded-Host': publicDomain,
        'X-Forwarded-Proto': 'https',
      },
      body: {
        comment_chars: 0,
        description: `NMDK seed profile ${username}`,
        max: 10000000,
        min: 1,
        username,
        wallet: wallet.id,
        zaps: true,
      },
    })
  } catch (error) {
    const detail = JSON.stringify(error.body ?? {}).toLowerCase()
    if (detail.includes('already') || detail.includes('taken') || error.status === 409) {
      return { username }
    }
    throw error
  }
}

async function provisionLnbitsSeedAccounts(accounts, options) {
  if (!options.seedLnbits) return null

  const publicDomain = publicLnbitsDomain(options.publicLnbitsUrl)
  const entries = {}

  for (const [id, account] of Object.entries(accounts)) {
    const username = normalizeLnbitsUsername(id)
    const token = await lnbitsLoginOrRegister(options.lnbitsUrl, account, username)
    const wallet = await lnbitsWallet(options.lnbitsUrl, token, username)
    const link = await ensureLnbitsPayLink(options.lnbitsUrl, token, wallet, username, publicDomain)
    entries[id] = {
      username,
      lud16: `${username}@${publicDomain}`,
      walletId: wallet.id,
      linkId: link?.id,
    }
  }

  return {
    apiUrl: options.lnbitsUrl,
    publicUrl: options.publicLnbitsUrl,
    accounts: entries,
  }
}

function paymentForm(asset) {
  const currency = logicalCurrency(asset.currency ?? asset.denomination)
  return {
    currency,
    denomination: currency,
    assetId: asset.assetId,
    ...(asset.appId ? { appId: asset.appId } : {}),
  }
}

function logicalCurrency(value) {
  const normalized = String(value ?? '').toUpperCase()
  if (normalized === 'SAT' || normalized === 'SATS' || normalized === 'XBT') return 'BTC'
  if (normalized === 'USDT' || normalized === 'USDC') return 'USD'
  return normalized
}

function cashuAsset(mint) {
  return {
    method: 'cashu',
    assetId: canonicalCashuAssetId(mint.mintUrl, mint.unit),
    currency: logicalCurrency(mint.denomination),
    denomination: mint.denomination,
    decimals: mint.decimals,
    appId: 'marketplace',
    data: {
      mintUrl: mint.mintUrl,
      unit: mint.unit,
    },
  }
}

function cashuPolicy(mint, family) {
  const isAuction = family === 'auction'
  return {
    method: 'cashu',
    id: `cashu:${mint.unit}:${family}`,
    type: isAuction ? cashuAuctionPolicyType : cashuEscrowPolicyType,
    hash: isAuction
      ? cashuAuctionPolicyHash({ mintUrl: mint.mintUrl, unit: mint.unit })
      : cashuEscrowPolicyHash({ mintUrl: mint.mintUrl, unit: mint.unit }),
    data: {
      mintUrl: mint.mintUrl,
      unit: mint.unit,
    },
  }
}

function escrowServiceEvent(account, template) {
  return sign(
    marketplace.arbitrationServices.template({
      maxDuration,
      fee: { ppm: 0, base: '0', min: '0', max: '0' },
      createdAt: defaultCreatedAt,
      extraTags: [['nmdk', 'seed']],
      ...template,
      pubkey: account.pubkey,
    }),
    account,
  )
}

function paymentMethodEvent(account, template) {
  return sign(
    marketplace.paymentMethod.template({
      createdAt: defaultCreatedAt,
      extraTags: [['nmdk', 'seed']],
      ...template,
    }),
    account,
  )
}

function listingEvent(account, sellerId, currency, amount, options) {
  const isUsd = currency === 'USD'
  const price = { amount, currency, ...(options.frequency ? { frequency: options.frequency } : {}) }
  const extraTags = [
    ['nmdk', 'seed'],
    ['scenario', sellerId],
    ['currency_matrix', currency],
    ...(options.category ? [['category', options.category]] : []),
  ]
  const base = {
    d: options.d ?? `nmdk-${sellerId}-${currency.toLowerCase()}`,
    title: options.title,
    summary: options.summary,
    description: options.description,
    createdAt: defaultCreatedAt,
    publishedAt: defaultCreatedAt,
    location: options.location,
    status: 'active',
    prices: [price],
    quantity: options.quantity ?? 1,
    active: true,
    autoAccept: false,
    negotiable: options.negotiable ?? true,
    rentOrBuy: options.frequency ? 'rent' : 'buy',
    images: options.imagePath ? [{ url: demoAssetUrl(options.imagePath), dimensions: '1200x800' }] : [],
    profiles: options.profiles ?? (options.category ? [options.category] : []),
    maxDisputePeriod: maxDuration,
    cancellationPolicies: [{ refundFraction: 1, secondsAfterOrder: 3600 }],
    extraTags,
  }
  if (!options.accommodation) {
    return sign(marketplace.listings.template(base), account)
  }
  return sign(
    marketplace.accommodationListings.template({
      ...base,
      minDuration: 'P1D',
      securityDeposit: { value: '0', denomination: currency, decimals: isUsd ? 2 : 8 },
      minPaymentAmount: { value: isUsd ? '100' : '1', denomination: currency, decimals: isUsd ? 2 : 8 },
      accommodation: {
        type: options.type,
        checkIn: '15:00',
        checkOut: '11:00',
        h3: options.h3,
        specs: {
          wireless_internet: true,
          bedrooms: options.bedrooms,
          bathrooms: 1,
          max_guests: options.guests,
        },
      },
    }),
    account,
  )
}

function auctionEvent(account, listing, arbiter, template) {
  return sign(
    marketplace.auctions.template({
      createdAt: defaultCreatedAt,
      listingAnchor: anchor(listing),
      arbiterPubkey: arbiter.pubkey,
      auctionType: 'english',
      startAt: defaultAuctionStartAt,
      endAt: defaultAuctionEndAt,
      maxEndAt: defaultAuctionMaxEndAt,
      settlementGrace: 24 * 60 * 60,
      extraTags: [['nmdk', 'seed']],
      ...template,
      content: {
        seeded: true,
        ...(template.content ?? {}),
      },
    }),
    account,
  )
}

function listingFixtureD(fixture) {
  return fixture.options.d ?? `nmdk-${fixture.sellerId}-${fixture.currency.toLowerCase()}`
}

function parseDecimalAmount(value) {
  const match = value.trim().match(/^(\d+)(?:\.(\d+))?$/)
  if (!match) throw new Error(`Invalid decimal amount: ${value}`)
  const [, whole, fraction = ''] = match
  return {
    units: BigInt(`${whole}${fraction}`),
    decimals: fraction.length,
  }
}

function amountForPrice(value, currency, multiplier = 1n) {
  const parsed = parseDecimalAmount(value)
  return {
    value: (parsed.units * multiplier).toString(),
    denomination: currency,
    decimals: parsed.decimals,
  }
}

function reviewParticipantProof({ buyer, tradeAccount, listingAnchor, tradeId, orderGroupId, createdAt }) {
  const authorization = sign(
    marketplace.orders.tradeKeyAuthorizationTemplate({
      version: 1,
      role: 'buyer',
      participantPubkey: tradeAccount.pubkey,
      listingAnchor,
      tradeId,
      orderGroupId,
      createdAt,
    }),
    buyer,
  )
  return {
    authorization,
    proof: marketplace.participantProofs.publicProof(authorization),
  }
}

function completedReviewFixture(fixture) {
  const listingAnchor = anchor(fixture.listing)
  const tradeId = `seed-review-${fixture.index + 1}`
  const tradeAccount = reviewTradeAccount(fixture.index)
  const participants = [
    { pubkey: fixture.listing.pubkey, role: 'seller' },
    { pubkey: tradeAccount.pubkey, role: 'buyer' },
  ]
  const orderGroupId = marketplace.orders.groups.id(tradeId, participants)
  const createdAt = defaultCreatedAt + 60 + fixture.index
  const isRental = Boolean(fixture.listingFixture.options.frequency)
  const start = isRental ? '2026-06-15T15:00:00.000Z' : undefined
  const end = isRental ? '2026-06-17T11:00:00.000Z' : undefined
  const amount = amountForPrice(fixture.listingFixture.amount, fixture.listingFixture.currency, isRental ? 2n : 1n)
  const sharedTags = [
    ['nmdk', 'seed'],
    ['fixture', 'completed-review-order'],
  ]
  const order = sign(
    marketplace.orders.template({
      tradeId,
      listingAnchor,
      amount,
      start,
      end,
      participants,
      extraTags: sharedTags,
      createdAt,
      publishedAt: createdAt,
    }),
    tradeAccount,
  )
  const payment = sign(
    marketplace.orders.paymentTemplate({
      tradeId,
      listingAnchor,
      amount,
      participants,
      refs: { orders: [order.id] },
      proof: {
        listing: fixture.listing,
        paymentProof: {
          method: 'seed',
          params: {
            status: 'paid',
            fixture: 'completed-review-order',
          },
        },
      },
      purpose: 'order_payment',
      extraTags: sharedTags,
      createdAt: createdAt + 1,
    }),
    tradeAccount,
  )
  const settlement = sign(
    marketplace.orders.paymentSettlementTemplate({
      tradeId,
      listingAnchor,
      participants,
      refs: { payments: [payment.id] },
      method: 'seed',
      action: 'release',
      outputs: [
        {
          role: 'seller',
          pubkey: fixture.listing.pubkey,
          amount: amount.value,
          data: {
            denomination: amount.denomination,
            decimals: amount.decimals,
          },
        },
      ],
      data: {
        fixture: 'completed-review-order',
      },
      extraTags: sharedTags,
      createdAt: createdAt + 2,
    }),
    fixture.listingFixture.account,
  )
  const participantProof = reviewParticipantProof({
    buyer: fixture.buyer,
    tradeAccount,
    listingAnchor,
    tradeId,
    orderGroupId,
    createdAt: createdAt + 3,
  })
  const review = sign(
    marketplace.reviews.template({
      orderGroupId,
      tradeId,
      listingAnchor,
      rating: fixture.rating,
      orderAnchor: anchor(order),
      participantProofs: [participantProof.proof],
      content: fixture.content,
      extraTags: [
        ['nmdk', 'seed'],
        ['fixture', 'completed-order-review'],
      ],
      createdAt: createdAt + 4,
    }),
    fixture.buyer,
  )

  return {
    order,
    payment,
    settlement,
    review,
    authorization: participantProof.authorization,
    tradeAccount,
    events: [order, payment, settlement, review],
    summary: {
      orderId: order.id,
      paymentId: payment.id,
      settlementId: settlement.id,
      reviewId: review.id,
      listingAnchor,
      orderAnchor: anchor(order),
      orderGroupId,
      tradeId,
      buyerPubkey: fixture.buyer.pubkey,
      tradePubkey: tradeAccount.pubkey,
      sellerPubkey: fixture.listing.pubkey,
      rating: fixture.rating,
    },
  }
}

async function publishEvent(pool, relays, event) {
  const results = await Promise.allSettled(pool.publish(relays, event, { maxWait: 5000 }))
  const accepted = results.some(result => result.status === 'fulfilled')
  if (!accepted) {
    const reasons = results.map(result => result.status === 'fulfilled' ? result.value : result.reason).join('; ')
    throw new Error(`Relay rejected event ${event.kind}:${event.id}: ${reasons}`)
  }
  return results
}

async function querySeededCounts(pool, relays, pubkeys) {
  const events = await pool.querySync(
    relays,
    {
      authors: pubkeys,
      kinds: [
        0,
        17388,
        30303,
        ClassifiedListing,
        MarketplaceAuction,
        MarketplaceOrder,
        MarketplacePayment,
        MarketplacePaymentSettlement,
        MarketplaceReview,
        MarketplaceSeed,
      ],
      limit: 1000,
    },
    { maxWait: 1500 },
  )
  return events.reduce((counts, event) => {
    counts[event.kind] = (counts[event.kind] ?? 0) + 1
    return counts
  }, {})
}

function buildSeed(cashuConfig, evmConfig, relay, publicRelay = relay, lnbits = null) {
  const accounts = seedAccounts()
  const evmChain = evmChainFromConfig(evmConfig)
  const evmAssets = evmPaymentAssets([evmChain], 'marketplace')
    .filter(asset => asset.assetAddress.toLowerCase() !== zeroAddress)
  const evmAssetsByDenomination = Object.fromEntries(evmAssets.map(asset => [asset.denomination, asset]))
  const evmEscrowPolicy = evmEscrowPolicies([evmChain])[0]
  const evmAuctionPolicy = evmAuctionPolicies([evmChain])[0]
  const mints = cashuMintsFromConfig(cashuConfig)
  const cashuAssets = mints.map(cashuAsset)
  const cashuPolicies = mints.flatMap(mint => [cashuPolicy(mint, 'escrow'), cashuPolicy(mint, 'auction')])
  const sellerCashuPubkeys = {
    sellerCashu: cashuIdentityPubkey(accounts.sellerCashu, mints),
    sellerBoth: cashuIdentityPubkey(accounts.sellerBoth, mints),
  }
  const arbiterCashuPubkeys = {
    arbiterCashu: cashuIdentityPubkey(accounts.arbiterCashu, mints),
    arbiterBoth: cashuIdentityPubkey(accounts.arbiterBoth, mints),
  }
  const evmSellerAddress = evmConfig.accounts.seller.address
  const evmArbiterAddress = evmConfig.accounts.arbiter.address

  const lud16For = id => lnbits?.accounts?.[id]?.lud16
  const profileOptions = id => ({ lud16: lud16For(id) })
  const profiles = [
    profile(accounts.buyer, 'NMDK Demo Buyer', 'Deterministic local buyer account for marketplace testing.', profileOptions('buyer')),
    profile(accounts.reviewBuyerAda, 'Avery Stone', 'Seed buyer with completed local marketplace orders.', profileOptions('reviewBuyerAda')),
    profile(accounts.reviewBuyerBen, 'Ben Rowan', 'Seed buyer profile used for review fixtures.', profileOptions('reviewBuyerBen')),
    profile(accounts.reviewBuyerCora, 'Cora Vale', 'Seed buyer profile used for public review proof tests.', profileOptions('reviewBuyerCora')),
    profile(accounts.reviewBuyerDax, 'Dax Meyer', 'Seed buyer profile attached to completed orders.', profileOptions('reviewBuyerDax')),
    profile(accounts.reviewBuyerEli, 'Eli Noor', 'Seed buyer profile with deterministic review history.', profileOptions('reviewBuyerEli')),
    profile(accounts.sellerOpen, 'NMDK Seller - No Policies', 'Seed seller with public listings and no payment method event.', profileOptions('sellerOpen')),
    profile(accounts.sellerEvm, 'NMDK Seller - EVM', 'Seed seller that trusts the local EVM marketplace arbiter.', profileOptions('sellerEvm')),
    profile(accounts.sellerCashu, 'NMDK Seller - Cashu', 'Seed seller that trusts local Cashu P2PK arbiters.', profileOptions('sellerCashu')),
    profile(accounts.sellerBoth, 'NMDK Seller - EVM + Cashu', 'Seed seller that advertises both EVM and Cashu payment methods.', profileOptions('sellerBoth')),
    profile(accounts.arbiterEvm, 'NMDK EVM Arbiter', 'Deterministic local EVM arbitration service.', profileOptions('arbiterEvm')),
    profile(accounts.arbiterCashu, 'NMDK Cashu Arbiter', 'Deterministic local Cashu arbitration service.', profileOptions('arbiterCashu')),
    profile(accounts.arbiterBoth, 'NMDK Multi Arbiter', 'Deterministic local arbitration service advertising EVM and Cashu.', profileOptions('arbiterBoth')),
  ]

  const marketplaceSeeds = Object.entries(accounts).map(([id, account]) => marketplaceSeedEvent(id, account))

  const evmServiceParams = {
    policyType: evmEscrowPolicy.type,
    supportedPolicyTypes: [evmEscrowPolicy.type, evmAuctionPolicy.type],
    arbiterAddress: evmArbiterAddress,
    contractAddress: evmChain.multiEscrowAddress,
    contractBytecodeHash: evmEscrowPolicy.hash,
    chainId: evmChain.chainId,
  }
  const services = [
    escrowServiceEvent(accounts.arbiterEvm, {
      d: 'nmdk-arbiter-evm-multi-escrow',
      type: 'EVM',
      params: evmServiceParams,
    }),
    escrowServiceEvent(accounts.arbiterBoth, {
      d: 'nmdk-arbiter-both-evm-multi-escrow',
      type: 'EVM',
      params: evmServiceParams,
    }),
    ...mints.flatMap(mint => {
      const assetPolicies = [cashuPolicy(mint, 'escrow'), cashuPolicy(mint, 'auction')]
      return [accounts.arbiterCashu, accounts.arbiterBoth].flatMap(account => {
        const cashuPubkey = arbiterCashuPubkeys[account.id]
        return assetPolicies.map(policy => escrowServiceEvent(account, {
          d: `nmdk-${account.id}-${mint.unit}-${policy.type}`,
          type: 'CASHU',
          params: {
            policyType: policy.type,
            policyHash: policy.hash,
            mintUrl: mint.mintUrl,
            unit: mint.unit,
            cashuPubkey,
          },
        }))
      })
    }),
  ]

  const evmForms = [evmAssetsByDenomination.USD, evmAssetsByDenomination.BTC].filter(Boolean).map(paymentForm)
  const cashuForms = cashuAssets.map(paymentForm)
  const methods = [
    paymentMethodEvent(accounts.sellerEvm, {
      trustedArbiterPubkeys: [accounts.arbiterEvm.pubkey, accounts.arbiterBoth.pubkey],
      supportedContractBytecodeHashes: [evmEscrowPolicy.hash],
      acceptedPaymentForms: evmForms,
      evmAddress: evmSellerAddress,
    }),
    paymentMethodEvent(accounts.sellerCashu, {
      trustedArbiterPubkeys: [accounts.arbiterCashu.pubkey, accounts.arbiterBoth.pubkey],
      supportedContractBytecodeHashes: cashuPolicies.map(policy => policy.hash),
      acceptedPaymentForms: cashuForms,
      cashuPubkey: sellerCashuPubkeys.sellerCashu,
    }),
    paymentMethodEvent(accounts.sellerBoth, {
      trustedArbiterPubkeys: [accounts.arbiterEvm.pubkey, accounts.arbiterCashu.pubkey, accounts.arbiterBoth.pubkey],
      supportedContractBytecodeHashes: [evmEscrowPolicy.hash, ...cashuPolicies.map(policy => policy.hash)],
      acceptedPaymentForms: [...evmForms, ...cashuForms],
      evmAddress: evmSellerAddress,
      cashuPubkey: sellerCashuPubkeys.sellerBoth,
    }),
  ]

  const listingFixtures = [
    {
      sellerId: 'sellerOpen',
      account: accounts.sellerOpen,
      currency: 'USD',
      amount: '450.00',
      options: {
        title: 'Used Camera Kit - USD',
        summary: 'Second-hand mirrorless camera body with two lenses.',
        description: 'Local deterministic listing for a used camera kit. One-off sale with no escrow policy advertised by the seller.',
        location: 'Regtest Ridge',
        category: 'electronics',
        imagePath: '/seed-images/nmdk-used-camera-kit.jpg',
      },
    },
    {
      sellerId: 'sellerOpen',
      account: accounts.sellerOpen,
      currency: 'BTC',
      amount: '0.0015',
      options: {
        title: 'Weekend Workshop Bench - BTC',
        summary: 'Workbench rental for hardware repairs and small fabrication.',
        description: 'Local deterministic listing for short workshop access, priced in BTC per day.',
        location: 'Regtest Ridge',
        category: 'tools',
        frequency: 'day',
        imagePath: '/seed-images/nmdk-workshop-bench.jpg',
      },
    },
    {
      sellerId: 'sellerEvm',
      account: accounts.sellerEvm,
      currency: 'USD',
      amount: '8500.00',
      options: {
        title: '2014 Toyota Hilux - USD',
        summary: 'Second-hand pickup truck with local EVM escrow support.',
        description: 'Deterministic local vehicle listing for testing a one-off USD purchase through EVM escrow.',
        location: 'Anvil Arcade',
        category: 'vehicles',
        imagePath: '/seed-images/nmdk-toyota-hilux.jpg',
      },
    },
    {
      sellerId: 'sellerEvm',
      account: accounts.sellerEvm,
      currency: 'BTC',
      amount: '0.0075',
      options: {
        accommodation: true,
        type: 'loft',
        h3: ['8c2ab34563fffff'],
        bedrooms: 2,
        guests: 4,
        title: 'EVM Escrow Loft - BTC',
        summary: 'Short-stay loft priced in BTC per day.',
        description: 'Deterministic local accommodation listing priced in BTC with EVM escrow support.',
        location: 'Anvil Arcade',
        category: 'accommodation',
        frequency: 'day',
        imagePath: '/seed-images/nmdk-evm-loft.jpg',
      },
    },
    {
      sellerId: 'sellerCashu',
      account: accounts.sellerCashu,
      currency: 'USD',
      amount: '1200.00',
      options: {
        title: 'Refurbished Espresso Machine - USD',
        summary: 'Commercial espresso machine refurbished for a small cafe.',
        description: 'Deterministic local equipment listing for a one-off USD purchase with Cashu escrow support.',
        location: 'Mint Market',
        category: 'equipment',
        imagePath: '/seed-images/nmdk-espresso-machine.jpg',
      },
    },
    {
      sellerId: 'sellerCashu',
      account: accounts.sellerCashu,
      currency: 'BTC',
      amount: '0.006',
      options: {
        title: 'Second-hand Cargo Bike - BTC',
        summary: 'Used electric cargo bike with fresh brake pads.',
        description: 'Deterministic local vehicle listing for a one-off BTC purchase through Cashu escrow.',
        location: 'Mint Market',
        category: 'vehicles',
        imagePath: '/seed-images/nmdk-cargo-bike.png',
      },
    },
    {
      sellerId: 'sellerBoth',
      account: accounts.sellerBoth,
      currency: 'USD',
      amount: '225.00',
      options: {
        accommodation: true,
        type: 'villa',
        h3: ['8c2ab3456dfffff'],
        bedrooms: 3,
        guests: 6,
        title: 'Dual Method Villa - USD',
        summary: 'Villa listing that supports both EVM and Cashu arbitration.',
        description: 'Deterministic local accommodation listing priced in USD per day with both payment methods advertised.',
        location: 'Relay Road',
        category: 'accommodation',
        frequency: 'day',
        imagePath: '/seed-images/nmdk-dual-villa.jpg',
      },
    },
    {
      sellerId: 'sellerBoth',
      account: accounts.sellerBoth,
      currency: 'BTC',
      amount: '0.018',
      options: {
        title: '1987 Land Cruiser Project - BTC',
        summary: 'Classic second-hand 4x4 project car sold as-is.',
        description: 'Deterministic local vehicle listing for a one-off BTC purchase with both EVM and Cashu policy support.',
        location: 'Relay Road',
        category: 'vehicles',
        imagePath: '/seed-images/nmdk-land-cruiser.jpg',
      },
    },
  ]
  const listings = listingFixtures.map(fixture =>
    listingEvent(fixture.account, fixture.sellerId, fixture.currency, fixture.amount, fixture.options))
  const listingsByD = Object.fromEntries(listings.map(listing => [listing.tags.find(tag => tag[0] === 'd')?.[1], listing]))
  const listingFixturesByD = Object.fromEntries(listingFixtures.map(fixture => [listingFixtureD(fixture), fixture]))
  const auctions = [
    auctionEvent(accounts.sellerEvm, listingsByD['nmdk-sellerEvm-usd'], accounts.arbiterEvm, {
      d: 'nmdk-auction-evm-usd',
      currency: 'USD',
      decimals: 2,
      startingBid: '100',
      minIncrement: '10',
      reserve: '250',
      content: { route: 'evm-usd' },
    }),
    auctionEvent(accounts.sellerEvm, listingsByD['nmdk-sellerEvm-btc'], accounts.arbiterEvm, {
      d: 'nmdk-auction-evm-btc',
      currency: 'BTC',
      decimals: 8,
      startingBid: '60000',
      minIncrement: '5000',
      reserve: '80000',
      content: { route: 'evm-btc' },
    }),
    auctionEvent(accounts.sellerCashu, listingsByD['nmdk-sellerCashu-usd'], accounts.arbiterCashu, {
      d: 'nmdk-auction-cashu-usd',
      currency: 'USD',
      decimals: 2,
      startingBid: '1000',
      minIncrement: '100',
      reserve: '2500',
      content: { route: 'cashu-usd' },
    }),
    auctionEvent(accounts.sellerCashu, listingsByD['nmdk-sellerCashu-btc'], accounts.arbiterCashu, {
      d: 'nmdk-auction-cashu-sat',
      currency: 'BTC',
      decimals: 8,
      startingBid: '10000',
      minIncrement: '1000',
      reserve: '25000',
      content: { route: 'cashu-btc' },
    }),
    auctionEvent(accounts.sellerBoth, listingsByD['nmdk-sellerBoth-usd'], accounts.arbiterBoth, {
      d: 'nmdk-auction-both-usd-cashu',
      currency: 'USD',
      decimals: 2,
      startingBid: '2000',
      minIncrement: '100',
      reserve: '5000',
      content: { route: 'both-cashu-usd' },
    }),
    auctionEvent(accounts.sellerBoth, listingsByD['nmdk-sellerBoth-btc'], accounts.arbiterBoth, {
      d: 'nmdk-auction-both-btc-evm',
      currency: 'BTC',
      decimals: 8,
      startingBid: '70000',
      minIncrement: '5000',
      reserve: '90000',
      content: { route: 'both-evm-btc' },
    }),
  ]

  const reviewFixtureInputs = [
    {
      listingD: 'nmdk-sellerEvm-usd',
      buyer: accounts.reviewBuyerAda,
      rating: 1,
      content: 'Vehicle matched the listing, paperwork was ready, and pickup was painless.',
    },
    {
      listingD: 'nmdk-sellerEvm-usd',
      buyer: accounts.reviewBuyerBen,
      rating: 0.9,
      content: 'Smooth escrow flow and quick handoff. I would buy from this seller again.',
    },
    {
      listingD: 'nmdk-sellerEvm-usd',
      buyer: accounts.reviewBuyerCora,
      rating: 0.8,
      content: 'Good communication and accurate photos. A small pickup delay was resolved quickly.',
    },
    {
      listingD: 'nmdk-sellerEvm-usd',
      buyer: accounts.reviewBuyerDax,
      rating: 0.7,
      content: 'The truck was as described and the trade terms were clear.',
    },
    {
      listingD: 'nmdk-sellerEvm-usd',
      buyer: accounts.reviewBuyerEli,
      rating: 1,
      content: 'Excellent local sale. The seller answered every question before settlement.',
    },
    {
      listingD: 'nmdk-sellerOpen-usd',
      buyer: accounts.reviewBuyerBen,
      rating: 0.8,
      content: 'Camera kit arrived with both lenses and the condition matched the description.',
    },
    {
      listingD: 'nmdk-sellerOpen-btc',
      buyer: accounts.reviewBuyerCora,
      rating: 0.9,
      content: 'Workshop bench was clean and ready for the booked day.',
    },
    {
      listingD: 'nmdk-sellerEvm-btc',
      buyer: accounts.reviewBuyerAda,
      rating: 0.9,
      content: 'Comfortable stay and a clean checkout process.',
    },
    {
      listingD: 'nmdk-sellerCashu-usd',
      buyer: accounts.reviewBuyerDax,
      rating: 0.8,
      content: 'Espresso machine pulled shots immediately after setup.',
    },
    {
      listingD: 'nmdk-sellerCashu-btc',
      buyer: accounts.reviewBuyerEli,
      rating: 0.7,
      content: 'Bike needed a tune-up but the important details were disclosed before purchase.',
    },
    {
      listingD: 'nmdk-sellerBoth-usd',
      buyer: accounts.reviewBuyerCora,
      rating: 1,
      content: 'Villa was exactly where advertised and the host was easy to coordinate with.',
    },
    {
      listingD: 'nmdk-sellerBoth-btc',
      buyer: accounts.reviewBuyerAda,
      rating: 0.8,
      content: 'Project car was sold as-is and the photos were honest.',
    },
  ]
  const completedReviewFixtures = reviewFixtureInputs.map((fixture, index) => {
    const listing = listingsByD[fixture.listingD]
    const listingFixture = listingFixturesByD[fixture.listingD]
    if (!listing || !listingFixture) throw new Error(`Unknown review fixture listing: ${fixture.listingD}`)
    return completedReviewFixture({
      index,
      listing,
      listingFixture,
      buyer: fixture.buyer,
      rating: fixture.rating,
      content: fixture.content,
    })
  })
  const completedReviewEvents = completedReviewFixtures.flatMap(fixture => fixture.events)

  const allEvents = [
    ...marketplaceSeeds,
    ...profiles,
    ...services,
    ...methods,
    ...listings,
    ...auctions,
    ...completedReviewEvents,
  ]
  const eventSummary = {
    marketplaceSeeds: marketplaceSeeds.map(event => ({ id: event.id, pubkey: event.pubkey })),
    profiles: profiles.map(event => event.id),
    escrowServices: services.map(event => ({ id: event.id, d: event.tags.find(tag => tag[0] === 'd')?.[1], pubkey: event.pubkey })),
    paymentMethod: methods.map(event => ({ id: event.id, sellerPubkey: event.pubkey })),
    listings: listings.map(event => ({
      id: event.id,
      d: event.tags.find(tag => tag[0] === 'd')?.[1],
      anchor: anchor(event),
      sellerPubkey: event.pubkey,
      prices: event.tags.filter(tag => tag[0] === 'price').map(tag => tag.slice(1)),
    })),
    auctions: auctions.map(event => ({
      id: event.id,
      d: event.tags.find(tag => tag[0] === 'd')?.[1],
      anchor: anchor(event),
      listingAnchor: event.tags.find(tag => tag[0] === 'a' && tag[3] === 'listing')?.[1],
      arbiterPubkey: event.tags.find(tag => tag[0] === 'p' && tag[3] === 'auction-arbiter')?.[1],
      currency: event.tags.find(tag => tag[0] === 'currency')?.[1],
      decimals: event.tags.find(tag => tag[0] === 'decimals')?.[1],
      startAt: event.tags.find(tag => tag[0] === 'start_at')?.[1],
      endAt: event.tags.find(tag => tag[0] === 'end_at')?.[1],
    })),
    reviewOrders: completedReviewFixtures.map(fixture => fixture.summary),
    reviews: completedReviewFixtures.map(fixture => ({
      id: fixture.review.id,
      orderGroupId: fixture.summary.orderGroupId,
      tradeId: fixture.summary.tradeId,
      listingAnchor: fixture.summary.listingAnchor,
      buyerPubkey: fixture.summary.buyerPubkey,
      tradePubkey: fixture.summary.tradePubkey,
      rating: fixture.summary.rating,
    })),
  }

  return {
    relay,
    events: allEvents,
    manifest: {
      version: 1,
      generatedAt: new Date().toISOString(),
      relay: publicRelay,
      ...(publicRelay !== relay ? { publishRelay: relay } : {}),
      warning: 'Local deterministic development fixture keys only. Do not use outside a local NMDK stack.',
      accounts: Object.fromEntries(Object.entries(accounts).map(([id, account]) => [
        id,
        {
          role: id.startsWith('seller') ? 'seller' : id.startsWith('arbiter') ? 'arbiter' : id,
          privateKey: account.privateKey,
          pubkey: account.pubkey,
          marketplaceSeed: deterministicMarketplaceSeed(id),
          ...(id.startsWith('seller') && id !== 'sellerOpen' ? { evmAddress: evmSellerAddress } : {}),
          ...(id === 'buyer' ? { evmAddress: evmConfig.accounts.buyer.address } : {}),
          ...(id.startsWith('arbiter') ? { evmAddress: evmArbiterAddress } : {}),
          ...(sellerCashuPubkeys[id] ? { cashuPubkey: sellerCashuPubkeys[id] } : {}),
          ...(arbiterCashuPubkeys[id] ? { cashuPubkey: arbiterCashuPubkeys[id] } : {}),
        },
      ])),
      matrix: {
        sellers: [
          { id: 'sellerOpen', methods: [], note: 'No payment method event is published for this seller.' },
          { id: 'sellerEvm', methods: ['evm'], trustedArbiters: ['arbiterEvm', 'arbiterBoth'], assets: evmForms },
          { id: 'sellerCashu', methods: ['cashu'], trustedArbiters: ['arbiterCashu', 'arbiterBoth'], assets: cashuForms },
          { id: 'sellerBoth', methods: ['evm', 'cashu'], trustedArbiters: ['arbiterEvm', 'arbiterCashu', 'arbiterBoth'], assets: [...evmForms, ...cashuForms] },
        ],
        arbiters: [
          { id: 'arbiterEvm', methods: ['evm'], evm: evmServiceParams },
          { id: 'arbiterCashu', methods: ['cashu'], cashuPubkey: arbiterCashuPubkeys.arbiterCashu },
          { id: 'arbiterBoth', methods: ['evm', 'cashu'], evm: evmServiceParams, cashuPubkey: arbiterCashuPubkeys.arbiterBoth },
        ],
      },
      evm: {
        chainId: evmChain.chainId,
        rpcUrl: evmChain.rpcUrl,
        multiEscrowAddress: evmChain.multiEscrowAddress,
        multiEscrowBytecodeHash: evmChain.multiEscrowBytecodeHash,
        assets: evmAssets,
        policies: [evmEscrowPolicy, evmAuctionPolicy],
      },
      cashu: {
        mints,
        assets: cashuAssets,
        policies: cashuPolicies,
      },
      ...(lnbits ? { lnbits } : {}),
      eventSummary,
    },
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }

  const cashuConfig = readJson(defaultCashuConfigPath, 'Cashu stack config')
  const evmConfig = readJson(defaultEvmConfigPath, 'EVM stack config')
  const relays = [options.relay]
  const pool = new SimplePool()
  const accounts = seedAccounts()
  const lnbits = await provisionLnbitsSeedAccounts(accounts, options)
  const seed = buildSeed(cashuConfig, evmConfig, options.relay, options.publicRelay ?? options.relay, lnbits)

  for (const event of seed.events) {
    await publishEvent(pool, relays, event)
  }

  const pubkeys = [...new Set(seed.events.map(event => event.pubkey))]
  const counts = await querySeededCounts(pool, relays, pubkeys)
  const manifest = {
    ...seed.manifest,
    relayCounts: counts,
  }
  mkdirSync(dirname(options.manifestPath), { recursive: true })
  writeFileSync(options.manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

  console.log(`Seeded ${seed.events.length} marketplace fixture events to ${options.relay}`)
  console.log(`Wrote ${options.manifestPath}`)
  console.log(`Profiles: ${seed.manifest.eventSummary.profiles.length}`)
  console.log(`Arbitration services: ${seed.manifest.eventSummary.escrowServices.length}`)
  console.log(`Payment methods: ${seed.manifest.eventSummary.paymentMethod.length}`)
  console.log(`Listings: ${seed.manifest.eventSummary.listings.length}`)
  console.log(`Auctions: ${seed.manifest.eventSummary.auctions.length}`)
  console.log(`Review orders: ${seed.manifest.eventSummary.reviewOrders.length}`)
  console.log(`Reviews: ${seed.manifest.eventSummary.reviews.length}`)
  if (lnbits) {
    console.log(`LNbits LUD16 accounts: ${Object.keys(lnbits.accounts).length}`)
  }

  if (options.keepalive) {
    console.log('Keeping the seed process alive. Stop it with Ctrl-C or `docker compose down`.')
    await new Promise(() => {})
  } else {
    pool.destroy()
  }
}

main().catch(error => {
  console.error(error instanceof Error ? (error.stack ?? error.message) : error)
  process.exit(1)
})
