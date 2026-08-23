import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const expectedImage = 'oven/bun:1.3.14@sha256:e10577f0db68676a7024391c6e5cb4b879ebd17188ab750cf10024a6d700e5c4'
const serviceNames = ['arbiter-evm', 'arbiter-cashu', 'arbiter-both']

function composeConfig() {
  const output = execFileSync(
    'docker',
    ['compose', '-p', 'nmdk-arbiters-test', '-f', 'compose.arbiters.yaml', 'config', '--format', 'json'],
    { cwd: root, encoding: 'utf8' },
  )
  return JSON.parse(output)
}

test('arbiter compose pins its runtime and isolates durable state across force-recreate', () => {
  const config = composeConfig()
  const stateSources = new Set()

  for (const name of serviceNames) {
    const service = config.services[name]
    assert.ok(service, `missing ${name}`)
    assert.equal(service.image, expectedImage)
    assert.equal(service.environment.MARKETPLACE_ARBITER_STATE_DIR, '/var/lib/nmdk-arbiter')
    assert.equal(
      service.environment.MARKETPLACE_EVM_STACK_CONFIG,
      '/workspace/dependencies/marketplace-evm-stack/data/config/marketplace-evm-stack.json',
    )
    const stateMount = service.volumes.find(volume => volume.target === '/var/lib/nmdk-arbiter')
    assert.ok(stateMount, `${name} has no durable state mount`)
    assert.equal(stateMount.type, 'volume')
    stateSources.add(stateMount.source)
    const workspaceMount = service.volumes.find(volume => volume.target === '/workspace')
    assert.equal(workspaceMount?.read_only, true)
  }

  assert.equal(stateSources.size, serviceNames.length, 'arbiter services share writable state')
  const upScript = readFileSync(resolve(root, 'scripts/up-arbiters.sh'), 'utf8')
  const downScript = readFileSync(resolve(root, 'scripts/down-arbiters.sh'), 'utf8')
  assert.match(upScript, /--force-recreate/)
  assert.doesNotMatch(downScript, /(?:--volumes|\s-v(?:\s|$))/)
})
