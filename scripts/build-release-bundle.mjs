import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const output = path.join(root, 'artifacts', 'release')
rmSync(output, { recursive: true, force: true })
mkdirSync(output, { recursive: true })

const packageDirs = [
  'dependencies/marketplace-driver-interface-ts',
  'dependencies/marketplace-location-interface-ts',
  'dependencies/marketplace-location-h3-ts',
  'dependencies/marketplace-evm-contracts',
  'dependencies/marketplace-cashu-ts',
  'dependencies/marketplace-evm-ts',
  'dependencies/nostr-tools',
]

for (const directory of packageDirs) {
  execFileSync('npm', ['pack', '--ignore-scripts=false', '--pack-destination', output], {
    cwd: path.join(root, directory),
    stdio: 'inherit',
  })
}

const submodules = execFileSync('git', ['submodule', 'status', '--recursive'], {
  cwd: root,
  encoding: 'utf8',
}).trimEnd().split('\n').filter(Boolean).map(line => {
  const match = line.match(/^ ([0-9a-f]{40})\s+(\S+)/)
  if (!match) {
    throw new Error(`Submodule must be initialized at its recorded commit: ${line}`)
  }
  return { commit: match[1], path: match[2] }
})

const manifest = {
  schemaVersion: 1,
  rootCommit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  node: process.version,
  npm: execFileSync('npm', ['--version'], { encoding: 'utf8' }).trim(),
  submodules,
}
writeFileSync(path.join(output, 'nmdk-snapshot.json'), `${JSON.stringify(manifest, null, 2)}\n`)

const sbom = execFileSync('npm', ['sbom', '--workspaces', '--sbom-format', 'cyclonedx'], {
  cwd: root,
  encoding: 'utf8',
  maxBuffer: 50 * 1024 * 1024,
})
const sbomDocument = JSON.parse(sbom)
delete sbomDocument.serialNumber
if (sbomDocument.metadata) delete sbomDocument.metadata.timestamp
writeFileSync(path.join(output, 'nmdk.cdx.json'), `${JSON.stringify(sbomDocument, null, 2)}\n`)

function installedManifestLicenses(component) {
  const manifestPath = path.join(root, 'node_modules', component.name, 'package.json')
  if (!existsSync(manifestPath)) return []
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  if (component.version && manifest.version !== component.version) return []
  const values = [manifest.license, ...(Array.isArray(manifest.licenses) ? manifest.licenses : [])]
  return values.map(value => typeof value === 'string' ? value : value?.type).filter(Boolean).sort()
}

const licenseComponents = (sbomDocument.components ?? []).map(component => {
  const declaredLicenses = (component.licenses ?? []).map(entry =>
    entry.expression ?? entry.license?.id ?? entry.license?.name,
  ).filter(Boolean).sort()
  const licenses = declaredLicenses.length > 0 ? declaredLicenses : installedManifestLicenses(component)
  return {
    name: component.name,
    version: component.version ?? null,
    purl: component.purl ?? null,
    licenses: licenses.length > 0 ? licenses : ['UNKNOWN'],
  }
}).sort((left, right) =>
  `${left.purl ?? ''}\0${left.name}\0${left.version ?? ''}`
    .localeCompare(`${right.purl ?? ''}\0${right.name}\0${right.version ?? ''}`),
)
writeFileSync(path.join(output, 'THIRD_PARTY_LICENSES.json'), `${JSON.stringify({
  schemaVersion: 1,
  source: 'nmdk.cdx.json',
  components: licenseComponents,
}, null, 2)}\n`)

const checksums = readdirSync(output).sort().map(filename => {
  const digest = createHash('sha256').update(readFileSync(path.join(output, filename))).digest('hex')
  return `${digest}  ${filename}`
})
writeFileSync(path.join(output, 'SHA256SUMS'), `${checksums.join('\n')}\n`)
console.log(`Release bundle written to ${output}`)
