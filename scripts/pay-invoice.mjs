#!/usr/bin/env node
import { execFileSync, spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const defaultTimeoutMs = Number(process.env.NMDK_PAY_INVOICE_TIMEOUT_MS ?? 120_000)

function usage() {
  console.log(`usage: npm run pay:invoice -- <bolt11>

Examples:
  npm run pay:invoice -- "$BOLT11"`)
}

function parseArgs(argv) {
  const rest = []

  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') return { help: true, invoice: '' }
    if (arg.startsWith('--')) throw new Error(`unknown option "${arg}"`)
    rest.push(arg)
  }

  return { help: false, invoice: rest[0] ?? '' }
}

function formatOutput(result) {
  return [result.stdout, result.stderr].filter(Boolean).join('\n').trim()
}

function run(label, command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? repoRoot,
    encoding: 'utf8',
    timeout: options.timeoutMs ?? defaultTimeoutMs,
  })

  return {
    label,
    ok: result.status === 0,
    status: result.status,
    signal: result.signal,
    error: result.error,
    stdout: result.stdout ?? '',
    stderr: result.stderr ?? '',
    output: formatOutput(result),
  }
}

function runningDockerContainerNames() {
  const names = execFileSync('docker', ['ps', '--format', '{{.Names}}'], { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(Boolean)
  return names
}

function marketplaceLndContainer() {
  if (process.env.MARKETPLACE_LND_CONTAINER) return process.env.MARKETPLACE_LND_CONTAINER

  const names = runningDockerContainerNames()
  const project = process.env.MARKETPLACE_STACK_PROJECT ?? 'nmdk-marketplace'

  return (
    names.find(name => name.includes(project) && /(^|[-_])marketplace-lnd([-_]|$)/.test(name)) ??
    names.find(name => /(^|[-_])marketplace-lnd([-_]|$)/.test(name)) ??
    'nmdk-marketplace-marketplace-lnd-1'
  )
}

function marketplacePayer(invoice) {
  const container = marketplaceLndContainer()
  return run('marketplace', 'docker', [
    'exec',
    container,
    'lncli',
    '--network=regtest',
    '--rpcserver=localhost:10009',
    '--tlscertpath=/app/lnd/tls.cert',
    '--macaroonpath=/app/lnd/data/chain/bitcoin/regtest/admin.macaroon',
    'payinvoice',
    '--force',
    invoice,
  ])
}

function printFailure(attempt) {
  console.error('Unable to settle invoice with marketplace LND.')
  if (attempt.error) console.error(attempt.error.message)
  if (attempt.signal) console.error(`signal: ${attempt.signal}`)
  if (attempt.status !== null && attempt.status !== undefined) console.error(`exit: ${attempt.status}`)
  if (attempt.output) console.error(attempt.output)
}

try {
  const { help, invoice } = parseArgs(process.argv.slice(2))
  if (help) {
    usage()
    process.exit(0)
  }
  if (!invoice) {
    usage()
    process.exit(2)
  }

  const attempt = marketplacePayer(invoice)
  if (attempt.ok) {
    console.log('Invoice paid with marketplace LND.')
    if (attempt.output) console.log(attempt.output)
    process.exit(0)
  }

  printFailure(attempt)
  process.exit(1)
} catch (err) {
  console.error(err instanceof Error ? err.message : String(err))
  process.exit(1)
}
