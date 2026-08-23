import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const configurations = [
  ['root', root, []],
  ['development', root, ['-f', 'compose.marketplace-development.yaml']],
  ['lightning', root, ['-f', 'compose.marketplace-lightning.yaml']],
  ['arbiters', root, ['-f', 'compose.arbiters.yaml']],
  ['cashu', path.join(root, 'dependencies/marketplace-cashu-stack'), []],
  ['evm', path.join(root, 'dependencies/marketplace-evm-stack'), []],
]

const errors = []
for (const [name, cwd, args] of configurations) {
  const composeArgs = ['compose', ...args, '--profile', '*']
  execFileSync('docker', [...composeArgs, 'config', '--quiet'], { cwd, stdio: 'inherit' })
  const images = execFileSync('docker', [...composeArgs, 'config', '--images'], {
    cwd,
    encoding: 'utf8',
  }).trim().split('\n').filter(Boolean)
  for (const image of images) {
    const localBuild = /^hostr-signet(?:-ui)?:nmdk-[0-9a-f]+$/.test(image)
    if (!localBuild && !/@sha256:[0-9a-f]{64}$/.test(image)) {
      errors.push(`${name}: effective image is not digest pinned: ${image}`)
    }
  }
}

if (errors.length > 0) {
  console.error(errors.map(error => `- ${error}`).join('\n'))
  process.exit(1)
}
console.log('All effective external Compose images are digest pinned')
