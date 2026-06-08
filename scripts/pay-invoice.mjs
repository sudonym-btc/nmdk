#!/usr/bin/env node
import { execFileSync, spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const defaultTimeoutMs = Number(process.env.NMDK_PAY_INVOICE_TIMEOUT_MS ?? 120_000)

function usage() {
  console.log(`usage: npm run pay:invoice -- [--payer auto|cashu|boltz] <bolt11>

Examples:
  npm run pay:invoice -- "$BOLT11"
  npm run pay:invoice -- --payer cashu "$BOLT11"
  npm run pay:invoice -- --payer boltz "$BOLT11"`)
}

function parseArgs(argv) {
  let payer = 'auto'
  const rest = []

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') return { help: true, payer, invoice: '' }
    if (arg === '--payer') {
      payer = argv[i + 1]
      i += 1
      continue
    }
    if (arg.startsWith('--payer=')) {
      payer = arg.slice('--payer='.length)
      continue
    }
    rest.push(arg)
  }

  if (!['auto', 'cashu', 'boltz'].includes(payer)) {
    throw new Error(`unknown payer "${payer}"; expected auto, cashu, or boltz`)
  }

  return { help: false, payer, invoice: rest[0] ?? '' }
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

function evmLndContainer() {
  if (process.env.MARKETPLACE_EVM_LND_CONTAINER) return process.env.MARKETPLACE_EVM_LND_CONTAINER

  const names = runningDockerContainerNames()
  const project = process.env.MARKETPLACE_EVM_STACK_PROJECT

  if (project) {
    const projectContainer = names.find(name => name.includes(project) && /(^|[-_])lnd-1([-_]|$)/.test(name))
    if (projectContainer) return projectContainer
  }

  return (
    names.find(name => name.includes('marketplace-evm-stack') && /(^|[-_])lnd-1([-_]|$)/.test(name)) ??
    names.find(name => name === 'boltz-lnd-1') ??
    names.find(name => /(^|[-_])lnd-1([-_]|$)/.test(name)) ??
    'boltz-lnd-1'
  )
}

function cashuPayer(invoice) {
  return run(
    'cashu',
    path.join(repoRoot, 'dependencies/marketplace-cashu-stack/scripts/pay-invoice.sh'),
    [invoice],
    { cwd: path.join(repoRoot, 'dependencies/marketplace-cashu-stack') },
  )
}

function boltzPayer(invoice) {
  const container = evmLndContainer()
  return run('boltz', 'docker', [
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

function selectedPayers(payer) {
  if (payer === 'cashu') return [cashuPayer]
  if (payer === 'boltz') return [boltzPayer]
  return [cashuPayer, boltzPayer]
}

function printFailure(attempts) {
  console.error('Unable to settle invoice with any selected local dev payer.')
  for (const attempt of attempts) {
    console.error(`\n[${attempt.label}] failed`)
    if (attempt.error) console.error(attempt.error.message)
    if (attempt.signal) console.error(`signal: ${attempt.signal}`)
    if (attempt.status !== null && attempt.status !== undefined) console.error(`exit: ${attempt.status}`)
    if (attempt.output) console.error(attempt.output)
  }
}

try {
  const { help, payer, invoice } = parseArgs(process.argv.slice(2))
  if (help) {
    usage()
    process.exit(0)
  }
  if (!invoice) {
    usage()
    process.exit(2)
  }

  const attempts = []
  for (const pay of selectedPayers(payer)) {
    const attempt = pay(invoice)
    attempts.push(attempt)
    if (attempt.ok) {
      console.log(`Invoice paid with ${attempt.label} local dev payer.`)
      if (attempt.output) console.log(attempt.output)
      process.exit(0)
    }
  }

  printFailure(attempts)
  process.exit(1)
} catch (err) {
  console.error(err instanceof Error ? err.message : String(err))
  process.exit(1)
}
