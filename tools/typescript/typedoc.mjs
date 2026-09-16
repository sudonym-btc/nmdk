#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'

const require = createRequire(import.meta.url)
const packagePath = require.resolve('typedoc/package.json')
const { bin } = JSON.parse(readFileSync(packagePath, 'utf8'))
const result = spawnSync(process.execPath, [resolve(dirname(packagePath), bin.typedoc), ...process.argv.slice(2)], {
  stdio: 'inherit',
})
if (result.error) throw result.error
process.exit(result.status ?? 1)
