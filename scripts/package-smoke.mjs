import { execFileSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const workspace = mkdtempSync(path.join(tmpdir(), 'nmdk-package-smoke-'))
const tarballDir = path.join(workspace, 'tarballs')
const consumerDir = path.join(workspace, 'consumer')
mkdirSync(tarballDir)
mkdirSync(consumerDir)

const packageDirs = [
  'dependencies/marketplace-driver-interface-ts',
  'dependencies/marketplace-location-interface-ts',
  'dependencies/marketplace-location-h3-ts',
  'dependencies/marketplace-evm-contracts',
  'dependencies/marketplace-cashu-ts',
  'dependencies/marketplace-evm-ts',
  'dependencies/nostr-tools',
]

function parseTrailingJson(output, label) {
  for (let index = 0; index < output.length; index += 1) {
    if (output[index] !== '[' && output[index] !== '{') continue
    if (index > 0 && output[index - 1] !== '\n') continue
    try {
      return JSON.parse(output.slice(index).trim())
    } catch {
      // Lifecycle scripts may write status lines before npm's JSON payload.
    }
  }
  throw new Error(`${label} did not end with a JSON payload`)
}

try {
  const dependencies = {}
  for (const directory of packageDirs) {
    const cwd = path.join(root, directory)
    const packOutput = execFileSync('npm', [
      'pack',
      '--json',
      '--ignore-scripts=false',
      '--pack-destination',
      tarballDir,
    ], { cwd, encoding: 'utf8' })
    const packed = parseTrailingJson(packOutput, `npm pack for ${directory}`)
    const filename = packed[0]?.filename
    if (!filename) throw new Error(`npm pack produced no tarball for ${directory}`)
    const tarball = path.join(tarballDir, filename)
    const packedManifest = JSON.parse(execFileSync('tar', ['-xOf', tarball, 'package/package.json'], { encoding: 'utf8' }))
    for (const [name, value] of Object.entries(packedManifest.dependencies ?? {})) {
      if (String(value).startsWith('file:')) throw new Error(`${packedManifest.name} tarball contains ${name}: ${value}`)
    }
    dependencies[packedManifest.name] = `file:${tarball}`
  }

  writeFileSync(path.join(consumerDir, 'package.json'), `${JSON.stringify({
    name: 'nmdk-package-smoke-consumer',
    private: true,
    type: 'module',
    dependencies,
  }, null, 2)}\n`)
  execFileSync('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund'], {
    cwd: consumerDir,
    encoding: 'utf8',
    stdio: 'inherit',
  })

  for (const name of Object.keys(dependencies)) {
    execFileSync('node', ['--input-type=module', '--eval', `await import(${JSON.stringify(name)})`], {
      cwd: consumerDir,
      stdio: 'inherit',
    })
  }
  const moduleSubpaths = [
    'nostr-tools/marketplace',
    '@sudonym-btc/marketplace-cashu/marketplace',
    '@sudonym-btc/marketplace-cashu/escrow',
    '@sudonym-btc/marketplace-cashu/auction',
    '@sudonym-btc/marketplace-evm/auction',
    '@sudonym-btc/marketplace-evm/escrow',
    '@sudonym-btc/marketplace-evm/swap',
    '@sudonym-btc/marketplace-evm-contracts/multi-escrow',
    '@sudonym-btc/marketplace-evm-contracts/registry',
  ]
  for (const specifier of moduleSubpaths) {
    execFileSync('node', ['--input-type=module', '--eval', `await import(${JSON.stringify(specifier)})`], {
      cwd: consumerDir,
      stdio: 'inherit',
    })
  }
  for (const specifier of [
    '@sudonym-btc/marketplace-evm-contracts/artifacts/MultiEscrow.json',
    '@sudonym-btc/marketplace-evm-contracts/artifacts/MultiEscrow.abi.json',
  ]) {
    execFileSync('node', [
      '--input-type=module',
      '--eval',
      `const value = await import(${JSON.stringify(specifier)}, { with: { type: 'json' } }); if (!value.default) process.exit(1)`,
    ], { cwd: consumerDir, stdio: 'inherit' })
  }
  execFileSync('node', [
    '--input-type=module',
    '--eval',
    `import { readFileSync } from 'node:fs'; import { fileURLToPath } from 'node:url'; const url = import.meta.resolve('@sudonym-btc/marketplace-evm-contracts/contracts/MultiEscrow.sol'); if (!readFileSync(fileURLToPath(url), 'utf8').includes('contract MultiEscrow')) process.exit(1)`,
  ], { cwd: consumerDir, stdio: 'inherit' })
  const lock = JSON.parse(readFileSync(path.join(consumerDir, 'package-lock.json'), 'utf8'))
  const lockedDependencies = lock.packages?.['']?.dependencies ?? {}
  for (const name of Object.keys(dependencies)) {
    const lockedValues = [lockedDependencies[name], lock.packages?.[`node_modules/${name}`]?.resolved]
    for (const value of lockedValues) {
      if (typeof value !== 'string' || !value.startsWith('file:')) {
        throw new Error(`${name} did not resolve from a package smoke tarball`)
      }
      const resolved = path.resolve(consumerDir, decodeURIComponent(value.slice('file:'.length)))
      if (path.dirname(resolved) !== tarballDir || path.extname(resolved) !== '.tgz') {
        throw new Error(`${name} resolved outside the package smoke tarball directory`)
      }
    }
  }
  console.log(`Package smoke test passed for ${packageDirs.length} tarballs and ${moduleSubpaths.length + 3} public subpaths`)
} finally {
  rmSync(workspace, { recursive: true, force: true })
}
