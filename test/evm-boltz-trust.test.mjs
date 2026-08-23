import assert from 'node:assert/strict'
import { test } from 'node:test'

import { requireGeneratedEvmBoltzTrust } from '../scripts/evm-boltz-trust.mjs'

const valid = {
  erc20Swap: {
    address: '0x1111111111111111111111111111111111111111',
    runtimeBytecodeHash: `0x${'1'.repeat(64)}`,
  },
  dexCallTargets: [{
    address: '0x2222222222222222222222222222222222222222',
    runtimeBytecodeHash: `0x${'2'.repeat(64)}`,
    functions: [{ selector: '0x24856bc3', decoder: 'uniswap-universal-router-v3-exact-in-v1' }],
    maxValue: '0',
  }],
}

test('generated EVM Boltz trust is normalized for the driver', () => {
  const trust = requireGeneratedEvmBoltzTrust(valid)
  assert.equal(trust.erc20Swap.address, valid.erc20Swap.address)
  assert.equal(trust.dexCallTargets[0].maxValue, 0n)
})

test('generated EVM Boltz trust fails closed when incomplete or unsupported', () => {
  assert.throws(() => requireGeneratedEvmBoltzTrust(undefined), /must be an object/)
  assert.throws(
    () => requireGeneratedEvmBoltzTrust({ ...valid, dexCallTargets: [] }),
    /must not be empty/,
  )
  assert.throws(
    () => requireGeneratedEvmBoltzTrust({
      ...valid,
      dexCallTargets: [{
        ...valid.dexCallTargets[0],
        functions: [{ selector: '0x24856bc3', decoder: 'provider-defined' }],
      }],
    }),
    /decoder is unsupported/,
  )
})
