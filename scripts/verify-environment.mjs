import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const noDocker = process.argv.includes('--no-docker')
const errors = []

const nodeMajor = Number(process.versions.node.split('.')[0])
if (!Number.isInteger(nodeMajor) || nodeMajor !== 26) {
  errors.push(`Node.js 26.x is required; found ${process.versions.node}`)
}

function version(command, args = ['--version']) {
  const result = spawnSync(command, args, { encoding: 'utf8' })
  if (result.status !== 0) return null
  return result.stdout.trim()
}

function atLeast(actual, required) {
  const parts = actual?.match(/^v?(\d+)\.(\d+)\.(\d+)(?:[-+].*)?$/)?.slice(1).map(Number)
  if (!parts) return false
  const minimum = required.split('.').map(Number)
  const difference = parts.findIndex((part, index) => part !== minimum[index])
  return difference === -1 || parts[difference] > minimum[difference]
}

const npmVersion = version('npm')
if (!npmVersion || Number(npmVersion.split('.')[0]) !== 12) {
  errors.push(`npm 12.x is required; found ${npmVersion ?? 'not installed'}`)
}

const bunVersion = version('bun')
if (bunVersion !== '1.4.2') {
  errors.push(`Bun 1.4.2 is required; found ${bunVersion ?? 'not installed'}`)
}

let composeVersion
if (!noDocker) {
  const requiredCompose = readFileSync(new URL('../.docker-compose-version', import.meta.url), 'utf8').trim()
  composeVersion = version('docker', ['compose', 'version', '--short'])
  if (!atLeast(composeVersion, requiredCompose)) {
    errors.push(`Docker Compose ${requiredCompose} or newer is required; found ${composeVersion ?? 'not installed'}. Run ./scripts/install-compose.sh`)
  }
}

if (errors.length > 0) {
  console.error(errors.map(error => `- ${error}`).join('\n'))
  process.exit(1)
}

console.log(`Environment verified: Node ${process.versions.node}, npm ${npmVersion}, Bun ${bunVersion}${noDocker ? '' : `, Docker Compose ${composeVersion}`}`)
