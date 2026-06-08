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
import { ClassifiedListing, MarketplaceAuction, MarketplaceSeed } from 'nostr-tools/kinds'
import * as marketplace from 'nostr-tools/marketplace'
import { SimplePool } from 'nostr-tools/pool'
import { finalizeEvent } from 'nostr-tools/pure'

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
const defaultDemoPublicUrl = process.env.NMDK_DEMO_PUBLIC_URL || 'http://127.0.0.1:5178'

function usage() {
  return `
Usage:
  npm run seed
  node scripts/seed-local-relay.mjs --relay ws://127.0.0.1:18080

Options:
  --relay <url>       Relay to seed. Defaults to NMDK_RELAY or ws://127.0.0.1:18080.
  --public-relay <url> Relay URL to write into the manifest. Defaults to the publish relay.
  --manifest <path>   Manifest path. Defaults to data/seed/marketplace-seed.json.
  --keepalive         Keep the process alive after seeding so a compose container stays up.
  --help              Print this help.
`.trim()
}

function parseArgs(argv) {
  const options = {
    relay: process.env.NMDK_RELAY || 'ws://127.0.0.1:18080',
    publicRelay: process.env.NMDK_PUBLIC_RELAY || undefined,
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

function profile(account, name, about) {
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
  return {
    id: 'arbitrum-regtest',
    chainId: arbitrum.chainId,
    name: arbitrum.name,
    rpcUrl: arbitrum.rpcUrl,
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
    mintUrl: mint.url,
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

function paymentForm(asset) {
  return {
    denomination: asset.denomination,
    assetId: asset.assetId,
    ...(asset.appId ? { appId: asset.appId } : {}),
  }
}

function cashuAsset(mint) {
  return {
    method: 'cashu',
    assetId: canonicalCashuAssetId(mint.mintUrl, mint.unit),
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
    marketplace.escrowServices.template({
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
    { authors: pubkeys, kinds: [0, 17388, 30303, ClassifiedListing, MarketplaceAuction, MarketplaceSeed], limit: 500 },
    { maxWait: 1500 },
  )
  return events.reduce((counts, event) => {
    counts[event.kind] = (counts[event.kind] ?? 0) + 1
    return counts
  }, {})
}

function buildSeed(cashuConfig, evmConfig, relay, publicRelay = relay) {
  const accounts = localDevAccounts
  const evmChain = evmChainFromConfig(evmConfig)
  const evmAssets = evmPaymentAssets([evmChain], 'marketplace')
    .filter(asset => asset.assetAddress.toLowerCase() !== zeroAddress)
  const evmAssetsByDenomination = Object.fromEntries(evmAssets.map(asset => [asset.denomination, asset]))
  const evmEscrowPolicy = evmEscrowPolicies([evmChain])[0]
  const evmAuctionPolicy = evmAuctionPolicies([evmChain])[0]
  const mints = cashuMintsFromConfig(cashuConfig)
  const cashuAssets = mints.map(cashuAsset)
  const cashuPolicies = mints.flatMap(mint => [cashuPolicy(mint, 'escrow'), cashuPolicy(mint, 'auction')])
  const cashuAssetsByUnit = Object.fromEntries(cashuAssets.map(asset => [asset.data.unit, asset]))
  const sellerCashuPubkeys = {
    sellerCashu: cashuIdentityPubkey(accounts.sellerCashu, mints),
    sellerBoth: cashuIdentityPubkey(accounts.sellerBoth, mints),
  }
  const escrowCashuPubkeys = {
    escrowCashu: cashuIdentityPubkey(accounts.escrowCashu, mints),
    escrowBoth: cashuIdentityPubkey(accounts.escrowBoth, mints),
  }
  const evmSellerAddress = evmConfig.accounts.seller.address
  const evmArbiterAddress = evmConfig.accounts.arbiter.address

  const profiles = [
    profile(accounts.buyer, 'NMDK Demo Buyer', 'Deterministic local buyer account for marketplace testing.'),
    profile(accounts.sellerOpen, 'NMDK Seller - No Policies', 'Seed seller with public listings and no payment method event.'),
    profile(accounts.sellerEvm, 'NMDK Seller - EVM', 'Seed seller that trusts the local EVM marketplace escrow.'),
    profile(accounts.sellerCashu, 'NMDK Seller - Cashu', 'Seed seller that trusts local Cashu P2PK escrows.'),
    profile(accounts.sellerBoth, 'NMDK Seller - EVM + Cashu', 'Seed seller that advertises both EVM and Cashu payment methods.'),
    profile(accounts.escrowEvm, 'NMDK EVM Escrow', 'Deterministic local EVM escrow service.'),
    profile(accounts.escrowCashu, 'NMDK Cashu Escrow', 'Deterministic local Cashu escrow service.'),
    profile(accounts.escrowBoth, 'NMDK Multi Escrow', 'Deterministic local escrow service advertising EVM and Cashu.'),
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
    escrowServiceEvent(accounts.escrowEvm, {
      d: 'nmdk-evm-multi-escrow',
      type: 'EVM',
      params: evmServiceParams,
    }),
    escrowServiceEvent(accounts.escrowBoth, {
      d: 'nmdk-both-evm-multi-escrow',
      type: 'EVM',
      params: evmServiceParams,
    }),
    ...mints.flatMap(mint => {
      const assetPolicies = [cashuPolicy(mint, 'escrow'), cashuPolicy(mint, 'auction')]
      return [accounts.escrowCashu, accounts.escrowBoth].flatMap(account => {
        const cashuPubkey = escrowCashuPubkeys[account.id]
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
      trustedEscrowPubkeys: [accounts.escrowEvm.pubkey, accounts.escrowBoth.pubkey],
      supportedContractBytecodeHashes: [evmEscrowPolicy.hash],
      acceptedPaymentForms: evmForms,
      evmAddress: evmSellerAddress,
    }),
    paymentMethodEvent(accounts.sellerCashu, {
      trustedEscrowPubkeys: [accounts.escrowCashu.pubkey, accounts.escrowBoth.pubkey],
      supportedContractBytecodeHashes: cashuPolicies.map(policy => policy.hash),
      acceptedPaymentForms: cashuForms,
      cashuPubkey: sellerCashuPubkeys.sellerCashu,
    }),
    paymentMethodEvent(accounts.sellerBoth, {
      trustedEscrowPubkeys: [accounts.escrowEvm.pubkey, accounts.escrowCashu.pubkey, accounts.escrowBoth.pubkey],
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
        summary: 'Villa listing that supports both EVM and Cashu escrows.',
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
  const auctions = [
    auctionEvent(accounts.sellerEvm, listingsByD['nmdk-sellerEvm-usd'], accounts.escrowEvm, {
      d: 'nmdk-auction-evm-usd',
      currency: 'USD',
      decimals: evmAssetsByDenomination.USD?.decimals ?? 6,
      startingBid: '1000000',
      minIncrement: '100000',
      reserve: '2500000',
      content: { route: 'evm-usd' },
    }),
    auctionEvent(accounts.sellerEvm, listingsByD['nmdk-sellerEvm-btc'], accounts.escrowEvm, {
      d: 'nmdk-auction-evm-btc',
      currency: 'BTC',
      decimals: evmAssetsByDenomination.BTC?.decimals ?? 18,
      startingBid: '600000000000000',
      minIncrement: '50000000000000',
      reserve: '800000000000000',
      content: { route: 'evm-btc' },
    }),
    auctionEvent(accounts.sellerCashu, listingsByD['nmdk-sellerCashu-usd'], accounts.escrowCashu, {
      d: 'nmdk-auction-cashu-usd',
      currency: 'USD',
      decimals: cashuAssetsByUnit.usd?.decimals ?? 2,
      startingBid: '1000',
      minIncrement: '100',
      reserve: '2500',
      content: { route: 'cashu-usd' },
    }),
    auctionEvent(accounts.sellerCashu, listingsByD['nmdk-sellerCashu-btc'], accounts.escrowCashu, {
      d: 'nmdk-auction-cashu-sat',
      currency: cashuAssetsByUnit.sat?.denomination ?? 'SAT',
      decimals: cashuAssetsByUnit.sat?.decimals ?? 0,
      startingBid: '10000',
      minIncrement: '1000',
      reserve: '25000',
      content: { route: 'cashu-sat' },
    }),
    auctionEvent(accounts.sellerBoth, listingsByD['nmdk-sellerBoth-usd'], accounts.escrowBoth, {
      d: 'nmdk-auction-both-usd-cashu',
      currency: 'USD',
      decimals: cashuAssetsByUnit.usd?.decimals ?? 2,
      startingBid: '2000',
      minIncrement: '100',
      reserve: '5000',
      content: { route: 'both-cashu-usd' },
    }),
    auctionEvent(accounts.sellerBoth, listingsByD['nmdk-sellerBoth-btc'], accounts.escrowBoth, {
      d: 'nmdk-auction-both-btc-evm',
      currency: 'BTC',
      decimals: evmAssetsByDenomination.BTC?.decimals ?? 18,
      startingBid: '700000000000000',
      minIncrement: '50000000000000',
      reserve: '900000000000000',
      content: { route: 'both-evm-btc' },
    }),
  ]

  const allEvents = [...marketplaceSeeds, ...profiles, ...services, ...methods, ...listings, ...auctions]
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
          role: id.startsWith('seller') ? 'seller' : id.startsWith('escrow') ? 'escrow' : id,
          privateKey: account.privateKey,
          pubkey: account.pubkey,
          marketplaceSeed: deterministicMarketplaceSeed(id),
          ...(id.startsWith('seller') && id !== 'sellerOpen' ? { evmAddress: evmSellerAddress } : {}),
          ...(id === 'buyer' ? { evmAddress: evmConfig.accounts.buyer.address } : {}),
          ...(id.startsWith('escrow') ? { evmAddress: evmArbiterAddress } : {}),
          ...(sellerCashuPubkeys[id] ? { cashuPubkey: sellerCashuPubkeys[id] } : {}),
          ...(escrowCashuPubkeys[id] ? { cashuPubkey: escrowCashuPubkeys[id] } : {}),
        },
      ])),
      matrix: {
        sellers: [
          { id: 'sellerOpen', methods: [], note: 'No payment method event is published for this seller.' },
          { id: 'sellerEvm', methods: ['evm'], trustedEscrows: ['escrowEvm', 'escrowBoth'], assets: evmForms },
          { id: 'sellerCashu', methods: ['cashu'], trustedEscrows: ['escrowCashu', 'escrowBoth'], assets: cashuForms },
          { id: 'sellerBoth', methods: ['evm', 'cashu'], trustedEscrows: ['escrowEvm', 'escrowCashu', 'escrowBoth'], assets: [...evmForms, ...cashuForms] },
        ],
        escrows: [
          { id: 'escrowEvm', methods: ['evm'], evm: evmServiceParams },
          { id: 'escrowCashu', methods: ['cashu'], cashuPubkey: escrowCashuPubkeys.escrowCashu },
          { id: 'escrowBoth', methods: ['evm', 'cashu'], evm: evmServiceParams, cashuPubkey: escrowCashuPubkeys.escrowBoth },
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
  const seed = buildSeed(cashuConfig, evmConfig, options.relay, options.publicRelay ?? options.relay)

  for (const event of seed.events) {
    await publishEvent(pool, relays, event)
  }

  const pubkeys = Object.values(localDevAccounts).map(account => account.pubkey)
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
  console.log(`Escrow services: ${seed.manifest.eventSummary.escrowServices.length}`)
  console.log(`Payment methods: ${seed.manifest.eventSummary.paymentMethod.length}`)
  console.log(`Listings: ${seed.manifest.eventSummary.listings.length}`)
  console.log(`Auctions: ${seed.manifest.eventSummary.auctions.length}`)

  if (options.keepalive) {
    console.log('Keeping the seed process alive. Stop it with Ctrl-C or `docker compose down`.')
    await new Promise(() => {})
  } else {
    pool.destroy()
  }
}

main().catch(error => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
