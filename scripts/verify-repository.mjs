import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const errors = []

const packageDirs = [
  'dependencies/nostr-tools',
  'dependencies/marketplace-driver-interface-ts',
  'dependencies/marketplace-location-interface-ts',
  'dependencies/marketplace-location-h3-ts',
  'dependencies/marketplace-cashu-ts',
  'dependencies/marketplace-evm-contracts',
  'dependencies/marketplace-evm-ts',
]

for (const directory of packageDirs) {
  const packagePath = path.join(root, directory, 'package.json')
  const manifest = JSON.parse(readFileSync(packagePath, 'utf8'))
  for (const field of ['dependencies', 'optionalDependencies', 'peerDependencies']) {
    for (const [name, value] of Object.entries(manifest[field] ?? {})) {
      if (String(value).startsWith('file:')) {
        errors.push(`${directory}/package.json: ${field}.${name} uses non-publishable ${value}`)
      }
    }
  }
  if (!manifest.private && !existsSync(path.join(root, directory, 'LICENSE'))) {
    errors.push(`${directory}: publishable package has no LICENSE file`)
  }
  if (!manifest.private && !['prepack', 'prepare'].some(script => manifest.scripts?.[script])) {
    errors.push(`${directory}: publishable package has no prepack/prepare build`)
  }
}

const requiredFiles = [
  'LICENSE',
  'SECURITY.md',
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  '.github/CODEOWNERS',
  'docs/architecture.md',
  'docs/demo.md',
  'docs/security-model.md',
  'docs/state-and-recovery.md',
  'docs/operations.md',
  'docs/release-process.md',
  'docs/compatibility.md',
]
for (const file of requiredFiles) {
  if (!existsSync(path.join(root, file))) errors.push(`missing required repository file: ${file}`)
}

const moduleFiles = execFileSync('find', ['.', '-name', '.gitmodules', '-not', '-path', '*/node_modules/*'], {
  cwd: root,
  encoding: 'utf8',
}).trim().split('\n').filter(Boolean)
for (const file of moduleFiles) {
  const modules = readFileSync(path.join(root, file), 'utf8')
  if (/url\s*=\s*git@/.test(modules)) errors.push(`${file}: contains SSH-only URLs`)
}

for (const stack of ['dependencies/marketplace-evm-stack', 'dependencies/marketplace-evm-ts/test/stack']) {
  const compose = readFileSync(path.join(root, stack, 'compose.yaml'), 'utf8')
  if (!compose.includes('${MARKETPLACE_EVM_CONTRACTS_DIR:?') || compose.includes('./dependencies/marketplace-evm-contracts:/contracts')) {
    errors.push(`${stack}: deployment must mount the canonical contract package`)
  }
  if (existsSync(path.join(root, stack, 'dependencies/marketplace-evm-contracts'))) {
    errors.push(`${stack}: duplicated contract checkout must not be restored`)
  }
}
for (const directory of packageDirs.concat('dependencies/marketplace-app-ts')) {
  if (existsSync(path.join(root, directory, 'package-lock.json'))) {
    errors.push(`${directory}: use the aggregate package-lock.json instead of a second dependency graph`)
  }
}

const workflowFiles = readdirSync(path.join(root, '.github/workflows'))
  .filter(file => /\.ya?ml$/.test(file))
  .map(file => `.github/workflows/${file}`)
for (const file of workflowFiles) {
  const source = readFileSync(path.join(root, file), 'utf8')
  for (const match of source.matchAll(/uses:\s*([^\s#]+)/g)) {
    const ref = match[1].split('@')[1]
    if (!ref || !/^[0-9a-f]{40}$/.test(ref)) errors.push(`${file}: action is not pinned to a commit: ${match[1]}`)
  }
}

const infraFiles = [
  'compose.yaml',
  'compose.arbiters.yaml',
  'compose.marketplace-development.yaml',
  'compose.marketplace-lightning.yaml',
  'dependencies/marketplace-cashu-stack/compose.yaml',
  'dependencies/marketplace-cashu-stack/.env',
  'dependencies/marketplace-evm-stack/compose.yaml',
  'dependencies/marketplace-evm-stack/.env',
  'dependencies/marketplace-evm-ts/test/stack/compose.yaml',
  'dependencies/marketplace-evm-ts/test/stack/.env',
]
for (const file of infraFiles) {
  const source = readFileSync(path.join(root, file), 'utf8')
  const floating = source.split('\n').find(line => /(?:image:\s*|_IMAGE=).*:(?:latest|main|master)(?:\s|$|})/.test(line) && !line.includes('@sha256:'))
  if (floating) errors.push(`${file}: floating container input: ${floating.trim()}`)
}

if (errors.length > 0) {
  console.error(errors.map(error => `- ${error}`).join('\n'))
  process.exit(1)
}

console.log('Repository policy checks passed')
