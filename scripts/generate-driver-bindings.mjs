import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'
import { boltzSchemaPath, generateBoltzTypes } from '../dependencies/marketplace-evm-ts/scripts/generate-boltz-openapi.mjs'
import { generateBoltzAbi, readBoltzArtifact } from '../dependencies/marketplace-evm-ts/scripts/generate-boltz-abi.mjs'
import { generateSigning, dartSigningSource } from '../dependencies/marketplace-evm-contracts/scripts/generate-signing.mjs'
import { generateAmountBindings } from './generate-amount-bindings.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(new URL('../dependencies/marketplace-evm-contracts/package.json', import.meta.url))
export const dartPackage = resolve(root, 'packages/marketplace_evm')

export function sharedContractAbis() {
  const openzeppelin = name => JSON.parse(readFileSync(require.resolve(`@openzeppelin/contracts/build/contracts/${name}.json`), 'utf8')).abi
  return [
    {
      path: 'escrow/MultiEscrow',
      abi: JSON.parse(readFileSync(resolve(root, 'dependencies/marketplace-evm-contracts/artifacts/MultiEscrow.json'), 'utf8')).abi,
    },
    ...['ERC20Swap', 'EtherSwap', 'TestERC20'].map(name => ({ path: `boltz/${name}`, abi: readBoltzArtifact(name).abi })),
    ...['IERC20', 'IERC20Metadata'].map(name => ({ path: `boltz/${name}`, abi: openzeppelin(name) })),
  ]
}

export async function syncDriverBindings({ check = false, dart = false } = {}) {
  function emit(path, contents) {
    if (check) {
      if (readFileSync(path, 'utf8') !== contents) {
        throw new Error(`Stale generated input ${path}; run npm run generate:drivers`)
      }
    } else {
      mkdirSync(dirname(path), { recursive: true })
      writeFileSync(path, contents)
    }
  }

  generateAmountBindings({ check })
  await generateBoltzTypes({ check })
  generateBoltzAbi({ check })
  emit(resolve(dartPackage, 'lib/src/datasources/contracts/escrow/signing.generated.dart'), dartSigningSource(generateSigning({ check })))
  emit(resolve(dartPackage, 'lib/src/datasources/swagger/boltz.json'), readFileSync(boltzSchemaPath, 'utf8'))
  for (const { path, abi } of sharedContractAbis()) {
    emit(resolve(dartPackage, `lib/src/datasources/contracts/${path}.abi.json`), `${JSON.stringify({ abi }, null, 2)}\n`)
  }

  if (dart) {
    if (check) throw new Error('--dart regenerates files; use it without --check')
    execFileSync('dart', ['run', 'build_runner', 'build'], { cwd: dartPackage, stdio: 'inherit' })
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await syncDriverBindings({ check: process.argv.includes('--check'), dart: process.argv.includes('--dart') })
}
