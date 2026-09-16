import { spawnSync } from 'node:child_process'

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

const npmVersion = version('npm')
if (!npmVersion || Number(npmVersion.split('.')[0]) !== 12) {
  errors.push(`npm 12.x is required; found ${npmVersion ?? 'not installed'}`)
}

const bunVersion = version('bun')
if (bunVersion !== '1.4.2') {
  errors.push(`Bun 1.4.2 is required; found ${bunVersion ?? 'not installed'}`)
}

if (!noDocker) {
  const composeVersion = version('docker', ['compose', 'version', '--short'])
  if (!composeVersion) errors.push('Docker Compose v2 or newer is required')
}

if (errors.length > 0) {
  console.error(errors.map(error => `- ${error}`).join('\n'))
  process.exit(1)
}

console.log(`Environment verified: Node ${process.versions.node}, npm ${npmVersion}, Bun ${bunVersion}${noDocker ? '' : ', Docker Compose available'}`)
