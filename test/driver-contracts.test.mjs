import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { hashTypedData, sha256 } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { multiEscrowDomain, multiEscrowTypes } from '@sudonym-btc/marketplace-evm-contracts'
import { parseMarketplaceAmount, parseIntegerUnits } from '@sudonym-btc/marketplace-driver-interface'
import { syncDriverBindings, sharedContractAbis, dartPackage } from '../scripts/generate-driver-bindings.mjs'
import { createBoltzRestClient } from '../dependencies/marketplace-evm-ts/dist/boltz/restClient.js'
import { createEvmEscrowCallBuilder } from '../dependencies/marketplace-evm-ts/dist/escrow/callBuilder.js'
import { erc20SwapClaimCall, erc20SwapLockCalls } from '../dependencies/marketplace-evm-ts/dist/swaps/erc20Swap.js'

const fixture = JSON.parse(readFileSync(new URL('./fixtures/driver-wire.json', import.meta.url), 'utf8'))

test('TypeScript amounts consume the same canonical integer-unit JSON as Dart', () => {
  const amounts = JSON.parse(readFileSync(new URL('./fixtures/amount-wire.json', import.meta.url), 'utf8'))
  for (const json of amounts.valid) {
    assert.deepEqual(parseMarketplaceAmount(json), json)
    assert.equal(parseIntegerUnits(json.value), BigInt(json.value))
  }
  for (const json of amounts.invalid) assert.throws(() => parseMarketplaceAmount(json), TypeError)
})

test('runtime bytecode hashes use the shared identity fixture', () => {
  assert.equal(sha256(fixture.runtimeBytecode.code), fixture.runtimeBytecode.sha256)
})

test('both driver generator inputs and TypeScript outputs match the canonical sources', async () => {
  await syncDriverBindings({ check: true })
})

test('Dart production bindings embed the same complete ABI as their canonical artifacts', () => {
  for (const { path, abi } of sharedContractAbis()) {
    const generated = readFileSync(resolve(dartPackage, `lib/src/datasources/contracts/${path}.g.dart`), 'utf8')
    const match = generated.match(/ContractAbi\.fromJson\(\s*'([^\n]+)'/)
    assert.ok(match, `Missing generated ABI in ${path}`)
    assert.deepEqual(JSON.parse(match[1]), abi, `${path} is stale; run npm run generate:drivers -- --dart`)
  }
})

test('TypeScript Boltz client sends and receives the shared Dart wire fixtures', async () => {
  const wire = fixture.boltz
  const client = createBoltzRestClient({
    apiUrl: 'https://fixture.invalid',
    async fetch(request) {
      const path = new URL(request.url).pathname
      if (path === '/v2/swap/reverse' && request.method === 'POST') {
        assert.deepEqual(await request.json(), wire.ReverseRequest)
        return Response.json(wire.ReverseResponse)
      }
      if (path === '/v2/swap/submarine' && request.method === 'POST') {
        assert.deepEqual(await request.json(), wire.SubmarineRequest)
        return Response.json(wire.SubmarineResponse)
      }
      if (path === '/v2/swap/reverse') return Response.json({ BTC: { tBTC: wire.ReversePair } })
      if (path === '/v2/swap/submarine') return Response.json({ tBTC: { BTC: wire.SubmarinePair } })
      if (path === '/v2/swap/reverse-fixture') return Response.json(wire.SwapStatus)
      assert.fail(`Unexpected request ${request.method} ${path}`)
    },
  })
  assert.deepEqual(await client.createReverseSwap({ ...wire.ReverseRequest, preimageHash: `0x${wire.ReverseRequest.preimageHash}` }), wire.ReverseResponse)
  assert.deepEqual(await client.createSubmarineSwap(wire.SubmarineRequest), wire.SubmarineResponse)
  assert.deepEqual(await client.getReversePairs(), { BTC: { tBTC: wire.ReversePair } })
  assert.deepEqual(await client.getSubmarinePairs(), { tBTC: { BTC: wire.SubmarinePair } })
  assert.deepEqual(await client.getSwap('reverse-fixture'), wire.SwapStatus)
})

test('TypeScript escrow and swap builders match the shared Dart calldata vectors without numeric truncation', () => {
  const amount = value => ({ value: BigInt(value), denomination: 'USD', decimals: 6 })
  const contractAddress = '0x8888888888888888888888888888888888888888'
  for (const vector of fixture.calls) {
    const args = vector.args
    let call
    if (vector.contract === 'MultiEscrow') {
      call = createEvmEscrowCallBuilder().createTrade({
        contractAddress,
        tradeId: args[0], buyerAddress: args[1], sellerAddress: args[2], arbiterAddress: args[3], assetAddress: args[4],
        paymentAmount: amount(args[5]), bondAmount: amount(args[6]), unlockAt: BigInt(args[7]),
        timeoutClaimantAddress: args[8], escrowFee: amount(args[9]), contextHash: args[10], recycleCovenantHash: args[11],
      }).at(-1)
    } else if (vector.function === 'lock') {
      call = erc20SwapLockCalls({ contractAddress, preimageHash: args[0], amount: BigInt(args[1]), tokenAddress: args[2], claimAddress: args[3], timelock: BigInt(args[4]) }).at(-1)
    } else {
      call = erc20SwapClaimCall({ contractAddress, preimage: args[0], amount: BigInt(args[1]), tokenAddress: args[2], refundAddress: args[3], timelock: BigInt(args[4]) })
    }
    assert.equal(call.data, vector.data, `${vector.contract}.${vector.function}`)
  }
})

test('Solidity-derived EIP712 types match the shared Dart signature vectors, including withdrawal nonces', async () => {
  const { privateKey, address, domain, vectors } = fixture.signing
  assert.deepEqual({ name: domain.name, version: domain.version }, multiEscrowDomain)
  const account = privateKeyToAccount(privateKey)
  assert.equal(account.address, address)
  for (const { primaryType, message, hash, signature } of vectors) {
    const typedData = { domain, primaryType, message, types: { [primaryType]: multiEscrowTypes[primaryType] } }
    assert.equal(hashTypedData(typedData), hash, primaryType)
    assert.equal(await account.signTypedData(typedData), signature, primaryType)
    assert.notEqual(hashTypedData({ ...typedData, domain: { ...domain, version: '6' } }), hash, 'old domains must not validate')
  }
})
