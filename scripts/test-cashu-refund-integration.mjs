#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const driverDir = path.join(root, 'dependencies/marketplace-cashu-ts')
const configPath = process.env.MARKETPLACE_CASHU_STACK_CONFIG
  ?? path.join(root, 'dependencies/marketplace-cashu-stack/data/config/marketplace-cashu-stack.json')
const config = JSON.parse(readFileSync(configPath, 'utf8'))
const mint = config.cashu?.mints?.sat
if (!mint?.url || !mint?.unit) throw new Error(`Missing Cashu SAT mint in ${configPath}`)

const project = process.env.MARKETPLACE_CASHU_STACK_PROJECT ?? 'marketplace-cashu-stack'
const deterministicNow = process.env.CASHU_TEST_NOW ?? '4102440000'
const result = spawnSync('npm', ['run', 'test:integration'], {
  cwd: driverDir,
  stdio: 'inherit',
  env: {
    ...process.env,
    CASHU_TEST_MINT_URL: mint.url,
    CASHU_TEST_UNIT: mint.unit,
    CASHU_TEST_DENOMINATION: mint.denomination ?? 'SAT',
    CASHU_TEST_DECIMALS: String(mint.decimals ?? 0),
    CASHU_TEST_RUN_ID: process.env.NMDK_TEST_SEED ?? 'nmdk-cashu-refund-integration-v1',
    CASHU_TEST_NOW: deterministicNow,
    CASHU_TEST_PAYER_CONTAINER:
      process.env.CASHU_TEST_PAYER_CONTAINER ?? `${project}-lnd-buyer-1`,
  },
})

if (result.error) throw result.error
process.exit(result.status ?? 1)
