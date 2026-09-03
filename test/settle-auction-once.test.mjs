import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, test } from 'bun:test'

import { MarketplaceAuction } from 'nostr-tools/kinds'
import { auctions } from 'nostr-tools/marketplace'
import { finalizeEvent, getPublicKey } from 'nostr-tools/pure'

import {
  FileEvmOperationStore,
  assertSettlementRequestMatchesAuction,
  fetchNewestCanonicalAuction,
  publishEvent,
  settlementRequestForAuction,
} from '../scripts/settle-auction-once.mjs'

function secret(byte) {
  return new Uint8Array(32).fill(byte)
}

const sellerSecret = secret(1)
const arbiterSecret = secret(2)
const otherSecret = secret(3)
const sellerPubkey = getPublicKey(sellerSecret)
const arbiterPubkey = getPublicKey(arbiterSecret)
const listingAnchor = `30402:${sellerPubkey}:listing-1`
const auctionAnchor = `${MarketplaceAuction}:${sellerPubkey}:auction-1`

function auctionEvent(createdAt, revision, overrides = {}) {
  return finalizeEvent(auctions.template({
    d: 'auction-1',
    listingAnchor,
    arbiterPubkey,
    currency: 'TOK',
    decimals: 6,
    startAt: 1_700_000_000,
    endAt: 1_700_000_100,
    settlementGrace: 86_400,
    startingBid: '1250000',
    content: { revision },
    createdAt,
    ...overrides,
  }), sellerSecret)
}

describe('settlement auction resolution', () => {
  test('selects the newest signed canonical auction with event-id tie breaking', async () => {
    const older = auctionEvent(10, 'older')
    const tiedA = auctionEvent(20, 'tied-a')
    const tiedB = auctionEvent(20, 'tied-b')
    const expected = [tiedA, tiedB].sort((left, right) => right.id.localeCompare(left.id))[0]
    const unsignedNewer = {
      ...JSON.parse(JSON.stringify(auctionEvent(30, 'invalid-signature'))),
      sig: '0'.repeat(128),
    }
    const noEndNewer = auctionEvent(40, 'missing-end', { endAt: undefined })
    const pool = {
      async querySync(relays, filter) {
        assert.deepEqual(relays, ['wss://relay.example'])
        assert.deepEqual(filter, {
          kinds: [MarketplaceAuction],
          authors: [sellerPubkey],
          '#d': ['auction-1'],
        })
        return [unsignedNewer, tiedA, older, noEndNewer, tiedB]
      },
    }

    const auction = await fetchNewestCanonicalAuction(pool, ['wss://relay.example'], auctionAnchor)

    assert.equal(auction.event.id, expected.id)
    assert.equal(auction.content.revision, auctions.parse(expected).content.revision)
  })

  test('rejects early settlement and a signer other than the configured arbiter', () => {
    const auction = auctions.parse(auctionEvent(10, 'terms'))

    assert.throws(
      () => settlementRequestForAuction(auction, getPublicKey(otherSecret), auction.endAt, auction.endAt),
      /not the configured auction arbiter/,
    )
    assert.throws(
      () => settlementRequestForAuction(auction, arbiterPubkey, auction.endAt - 1, auction.endAt),
      /timestamp must be at or after auction end_at/,
    )
    assert.throws(
      () => settlementRequestForAuction(auction, arbiterPubkey, auction.endAt, auction.endAt - 1),
      /Auction has not ended yet/,
    )
  })

  test('binds every supported runtime settlement term to the canonical auction', () => {
    const auction = auctions.parse(auctionEvent(10, 'terms'))
    const request = settlementRequestForAuction(auction, arbiterPubkey, auction.endAt + 1, auction.endAt)

    assert.deepEqual(request, {
      auctionId: 'auction-1',
      auctionAnchor,
      listingAnchor,
      arbiterPubkey,
      currency: 'TOK',
      decimals: 6,
      startAt: 1_700_000_000,
      endAt: 1_700_000_100,
      startingBid: '1250000',
      targetUnlockAt: 1_700_086_500,
      now: 1_700_000_101,
    })
    assert.throws(
      () => assertSettlementRequestMatchesAuction({ ...request, currency: 'BTC' }, auction),
      /currency does not match canonical auction/,
    )
    assert.throws(
      () => assertSettlementRequestMatchesAuction({ ...request, listingAnchor: `${listingAnchor}-wrong` }, auction),
      /listingAnchor does not match canonical auction/,
    )
    assert.throws(
      () => assertSettlementRequestMatchesAuction({ ...request, targetUnlockAt: request.targetUnlockAt + 1 }, auction),
      /targetUnlockAt does not match canonical auction/,
    )
  })

  test('requires a signed positive settlement grace for promoted-order timeout', () => {
    const missingGrace = auctions.parse(auctionEvent(10, 'missing-grace', { settlementGrace: undefined }))
    const zeroGrace = auctions.parse(auctionEvent(10, 'zero-grace', { settlementGrace: 0 }))

    assert.throws(
      () => settlementRequestForAuction(missingGrace, arbiterPubkey, missingGrace.endAt, missingGrace.endAt),
      /positive signed settlement_grace/,
    )
    assert.throws(
      () => settlementRequestForAuction(zeroGrace, arbiterPubkey, zeroGrace.endAt, zeroGrace.endAt),
      /positive signed settlement_grace/,
    )
  })
})

describe('settlement relay publication', () => {
  const signer = { signEvent: event => event }
  const event = { id: 'f'.repeat(64) }

  test('fails when a relay normally rejects the event', async () => {
    const pool = { publish: () => [Promise.reject(new Error('blocked: policy'))] }

    await assert.rejects(
      publishEvent(pool, ['wss://reject.example'], signer, event),
      /No relay accepted event.*blocked: policy/,
    )
  })

  test('fails when connection results never explicitly accept the event', async () => {
    const pool = { publish: () => [Promise.resolve('connection failure: unavailable')] }

    await assert.rejects(
      publishEvent(pool, ['wss://offline.example'], signer, event),
      /No relay accepted event.*connection failure/,
    )
  })

  test('succeeds once at least one relay explicitly accepts the event', async () => {
    const pool = {
      publish: () => [
        Promise.reject(new Error('blocked: local policy')),
        Promise.resolve('saved'),
      ],
    }

    await publishEvent(pool, ['wss://reject.example', 'wss://accept.example'], signer, event)
  })
})

test('file EVM operation store survives a process-style restart for reconciliation', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'nmdk-evm-operations-'))
  const pending = {
    id: 'auction-action:operation-1',
    kind: 'escrow',
    status: 'settling',
    chainId: 31337,
    tradeId: 'trade-1',
    data: { submittedValue: 42n },
    createdAt: 1,
    updatedAt: 2,
  }
  try {
    const beforeCrash = new FileEvmOperationStore(directory)
    assert.equal(await beforeCrash.putIfAbsent(pending), true)

    const afterRestart = new FileEvmOperationStore(directory)
    assert.deepEqual(await afterRestart.get(pending.id), pending)
    assert.equal(await afterRestart.putIfAbsent({ ...pending, status: 'failed' }), false)
    assert.deepEqual(await afterRestart.list({ status: 'settling', chainId: 31337 }), [pending])

    const reconciled = { ...pending, status: 'settled', updatedAt: 3, data: { transactionId: '0xabc', value: 42n } }
    await afterRestart.put(reconciled)
    const nextRestart = new FileEvmOperationStore(directory)
    assert.deepEqual(await nextRestart.get(pending.id), reconciled)
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})
