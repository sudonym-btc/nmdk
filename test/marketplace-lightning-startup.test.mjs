import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir, userInfo } from 'node:os'
import { join, resolve } from 'node:path'
import test from 'node:test'

const root = resolve(import.meta.dirname, '..')
const config = JSON.parse(execFileSync('docker', [
  'compose', '-f', 'compose.marketplace-lightning.yaml', 'config', '--format', 'json',
], {
  cwd: root, encoding: 'utf8',
  env: { ...process.env, MARKETPLACE_USER_ID: '1001', MARKETPLACE_GROUP_ID: '1001' },
}))

test('Bitcoin startup finds image-provided binaries and initializes its wallets', () => {
  const directory = mkdtempSync(join(tmpdir(), 'nmdk-bitcoin-path-'))
  const log = join(directory, 'calls.jsonl')
  try {
    for (const binary of ['bitcoind', 'bitcoin-cli']) {
      writeFileSync(join(directory, binary), `#!${process.execPath}
require('node:fs').appendFileSync(process.env.STARTUP_LOG, JSON.stringify([${JSON.stringify(binary)}, ...process.argv.slice(2)]) + '\\n')
`, { mode: 0o755 })
    }
    const service = config.services.bitcoind
    // `compose config` escapes dollars for round-tripping through Compose.
    const entrypoint = service.entrypoint.map(argument => argument.replaceAll('$$', '$'))
    const result = spawnSync(entrypoint[0], [...entrypoint.slice(1), ...service.command], {
      cwd: directory, encoding: 'utf8', timeout: 5000,
      env: { ...process.env, PATH: `${directory}:${process.env.PATH}`, STARTUP_LOG: log },
    })
    assert.equal(result.status, 0, result.stderr || result.error?.message)
    const calls = readFileSync(log, 'utf8').trim().split('\n').map(line => JSON.parse(line))
    assert.ok(calls.some(args => args[0] === 'bitcoind' && args.includes('-datadir=/app/bitcoin')))
    for (const wallet of ['regtest', 'client']) {
      assert.ok(calls.some(args => args.at(-2) === 'createwallet' && args.at(-1) === wallet))
    }
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})

test('shared Lightning startup runs writable services as the host data owner', () => {
  assert.equal(config.services.bitcoind.user, '1001:1001')
  assert.equal(config.services['marketplace-lnd'].user, '1001:1001')
  const directory = mkdtempSync(join(tmpdir(), 'nmdk-lightning-owner-'))
  const log = join(directory, 'owners.jsonl')
  try {
    writeFileSync(join(directory, 'docker'), `#!${process.execPath}
require('node:fs').appendFileSync(process.env.STARTUP_LOG, JSON.stringify([process.env.MARKETPLACE_USER_ID, process.env.MARKETPLACE_GROUP_ID]) + '\\n')
`, { mode: 0o755 })
    const env = {
      ...process.env, PATH: `${directory}:${process.env.PATH}`, STARTUP_LOG: log,
      MARKETPLACE_STACK_DATA_DIR: join(directory, 'data'),
    }
    delete env.MARKETPLACE_USER_ID
    delete env.MARKETPLACE_GROUP_ID
    const result = spawnSync('./scripts/up-marketplace-lightning.sh', [], { cwd: root, env, encoding: 'utf8' })
    assert.equal(result.status, 0, result.stderr)
    const owner = userInfo()
    const calls = readFileSync(log, 'utf8').trim().split('\n').map(line => JSON.parse(line))
    assert.ok(calls.length > 0)
    for (const ids of calls) assert.deepEqual(ids, [String(owner.uid), String(owner.gid)])
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})
