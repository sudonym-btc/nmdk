import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import { test } from 'node:test'

const root = resolve(import.meta.dirname, '..')
const canonical = resolve(root, 'dependencies/marketplace-evm-contracts')

for (const stack of ['dependencies/marketplace-evm-stack', 'dependencies/marketplace-evm-ts/test/stack']) {
  test(`${stack} mounts the one canonical compiled escrow artifact`, () => {
    const env = { ...process.env }
    delete env.MARKETPLACE_EVM_CONTRACTS_DIR
    const config = JSON.parse(execFileSync('./scripts/compose.sh', ['config', '--format', 'json'], {
      cwd: resolve(root, stack), env, encoding: 'utf8',
    }))
    const contracts = config.services['multi-escrow-deploy'].volumes.find(volume => volume.target === '/contracts')
    assert.equal(contracts.source, canonical)
    assert.equal(contracts.type, 'bind')
    assert.equal(contracts.read_only, true)
    const mounted = JSON.parse(readFileSync(resolve(contracts.source, 'artifacts/MultiEscrow.json'), 'utf8'))
    assert.ok(mounted.bytecode.startsWith('0x'))
    assert.ok(mounted.abi.some(entry => entry.name === 'createTradeWithTerms'))
  })
}

// Exercise the actual initialization shell script without touching any chain.
// The RPC fixture records encoding inputs and exposes a chosen deployed domain.
for (const stack of ['dependencies/marketplace-evm-stack', 'dependencies/marketplace-evm-ts/test/stack']) {
  for (const stale of [false, true]) {
    test(`${stack} ${stale ? 'rejects stale' : 'accepts current'} escrow before publishing trust`, () => {
      const directory = mkdtempSync(resolve(tmpdir(), 'nmdk-escrow-domain-'))
      const config = resolve(directory, 'config')
      const cast = resolve(directory, 'cast')
      const log = resolve(directory, 'cast.log')
      writeFileSync(cast, String.raw`#!${process.execPath}
const fs = require('node:fs')
const args = process.argv.slice(2)
fs.appendFileSync(process.env.CAST_LOG, JSON.stringify(args) + '\n')
switch (args[0]) {
  case 'chain-id': console.log('412346'); break
  case 'code': console.log('0x60006000'); break
  case 'abi-encode': console.log('0xcurrentdomain'); break
  case 'call': console.log(process.env.DEPLOYED_DOMAIN); break
  default: throw new Error('Unexpected cast command: ' + args[0])
}
`, { mode: 0o755 })
      try {
        const result = spawnSync('sh', ['scripts/deploy-multi-escrow.sh'], {
          cwd: resolve(root, stack),
          timeout: 10000,
          encoding: 'utf8',
          env: {
            ...process.env,
            PATH: `${directory}:${process.env.PATH}`,
            CONFIG_DIR: config,
            CONTRACTS_DIR: canonical,
            ASSET_MANIFEST: resolve(directory, 'absent.json'),
            CAST_LOG: log,
            DEPLOYED_DOMAIN: stale ? '0xolddomain' : '0xcurrentdomain',
          },
        })
        assert.equal(result.status, stale ? 1 : 0, result.stderr)
        assert.equal(existsSync(resolve(config, 'marketplace-evm-stack.json')), !stale)
        assert.equal(existsSync(resolve(config, 'contract-addresses.json')), !stale)
        const calls = readFileSync(log, 'utf8').trim().split('\n').map(line => JSON.parse(line))
        const encoded = calls.find(args => args[0] === 'abi-encode')
        const source = readFileSync(resolve(canonical, 'contracts/MultiEscrow.sol'), 'utf8')
        const [, name, version] = source.match(/constructor\(\)\s+EIP712\("([^"]+)",\s*"([^"]+)"\)/)
        assert.equal(encoded[3], name)
        assert.equal(encoded[4], version)
        assert.equal(encoded[5], '412346')
        assert.equal(calls.some(args => args[0] === 'send'), false)
        if (stale) assert.match(result.stderr, /Reset this disposable development stack/)
      } finally {
        rmSync(directory, { recursive: true, force: true })
      }
    })
  }
}
