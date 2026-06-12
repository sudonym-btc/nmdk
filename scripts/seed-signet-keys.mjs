#!/usr/bin/env node

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { nsecEncode } from 'nostr-tools/nip19'

import { hexToBytes, localDevAccounts } from './local-dev-keys.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const defaultManifestPath = resolve(root, 'data/seed/signet-keys.json')

const keyNames = Object.freeze({
  buyer: 'nmdk-buyer',
  sellerOpen: 'nmdk-seller-open',
  sellerEvm: 'nmdk-seller-evm',
  sellerCashu: 'nmdk-seller-cashu',
  sellerBoth: 'nmdk-seller-both',
  arbiterEvm: 'nmdk-arbiter-evm',
  arbiterCashu: 'nmdk-arbiter-cashu',
  arbiterBoth: 'nmdk-arbiter-both',
})

function usage() {
  return `
Usage:
  npm run seed:signet
  node scripts/seed-signet-keys.mjs --base-url http://127.0.0.1:13046

Options:
  --base-url <url>    Signet daemon URL. Defaults to NMDK_SIGNET_URL or http://127.0.0.1:13046.
  --manifest <path>   Manifest path. Defaults to data/seed/signet-keys.json.
  --help              Print this help.
`.trim()
}

function parseArgs(argv) {
  const options = {
    baseUrl: process.env.NMDK_SIGNET_URL || 'http://127.0.0.1:13046',
    manifestPath: process.env.NMDK_SIGNET_KEYS_MANIFEST || defaultManifestPath,
    help: false,
  }
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    const [flag, inline] = arg.includes('=') ? arg.split(/=(.*)/s, 2) : [arg, undefined]
    const value = inline ?? argv[i + 1]
    const consume = inline === undefined
    switch (flag) {
      case '--base-url':
        if (!value) throw new Error('--base-url requires a value')
        options.baseUrl = value
        if (consume) i += 1
        break
      case '--manifest':
        if (!value) throw new Error('--manifest requires a value')
        options.manifestPath = resolve(root, value)
        if (consume) i += 1
        break
      case '--help':
      case '-h':
        options.help = true
        break
      default:
        throw new Error(`Unknown argument: ${arg}`)
    }
  }
  return options
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

class SignetClient {
  constructor(baseUrl) {
    this.baseUrl = new URL(baseUrl)
    this.cookies = new Map()
    this.csrfToken = undefined
  }

  url(path) {
    return new URL(path, this.baseUrl)
  }

  captureCookies(response) {
    const setCookie = response.headers.get('set-cookie')
    if (!setCookie) return
    for (const part of setCookie.split(/, (?=[^;,]+=)/)) {
      const cookie = part.split(';')[0]
      const separator = cookie.indexOf('=')
      if (separator > 0) this.cookies.set(cookie.slice(0, separator), cookie.slice(separator + 1))
    }
  }

  cookieHeader() {
    return [...this.cookies.entries()].map(([key, value]) => `${key}=${value}`).join('; ')
  }

  async waitForHealth(timeoutMs = 180_000) {
    const deadline = Date.now() + timeoutMs
    let lastError = ''
    while (Date.now() < deadline) {
      try {
        const response = await fetch(this.url('/health'), { signal: AbortSignal.timeout(3_000) })
        if (response.ok) return
        lastError = `HTTP ${response.status}`
      } catch (error) {
        lastError = error instanceof Error ? error.message : String(error)
      }
      await sleep(1_000)
    }
    throw new Error(`Timed out waiting for Signet at ${this.baseUrl}; last error: ${lastError}`)
  }

  async ensureCsrfToken() {
    if (this.csrfToken) return
    const response = await fetch(this.url('/csrf-token'), {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(10_000),
    })
    this.captureCookies(response)
    if (!response.ok) throw new Error(`Signet CSRF failed ${response.status}: ${await response.text()}`)
    const body = await response.json()
    this.csrfToken = body.csrfToken ?? body.token
    if (!this.csrfToken) throw new Error('Signet CSRF response did not include a token')
  }

  async request(method, path, body, { csrf = false, ok404 = false } = {}) {
    if (csrf) await this.ensureCsrfToken()
    const headers = { accept: 'application/json' }
    const cookie = this.cookieHeader()
    if (cookie) headers.cookie = cookie
    if (body !== undefined) headers['content-type'] = 'application/json'
    if (csrf && this.csrfToken) headers['x-csrf-token'] = this.csrfToken
    const response = await fetch(this.url(path), {
      method,
      headers,
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
      signal: AbortSignal.timeout(20_000),
    })
    this.captureCookies(response)
    if (ok404 && response.status === 404) return {}
    if (!response.ok) {
      throw new Error(`Signet ${method} ${path} failed ${response.status}: ${await response.text()}`)
    }
    const text = await response.text()
    return text.trim() ? JSON.parse(text) : {}
  }

  async deleteKey(keyName) {
    await this.request('DELETE', `/keys/${encodeURIComponent(keyName)}`, undefined, { csrf: true, ok404: true })
  }

  async importNsec(keyName, nsec) {
    await this.deleteKey(keyName)
    return this.request('POST', '/keys', {
      keyName,
      nsec,
      encryption: 'none',
    }, { csrf: true })
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }

  const client = new SignetClient(options.baseUrl)
  await client.waitForHealth()

  const imported = []
  for (const [id, account] of Object.entries(localDevAccounts)) {
    const keyName = keyNames[id] ?? `nmdk-${id}`
    const nsec = nsecEncode(hexToBytes(account.privateKey))
    const raw = await client.importNsec(keyName, nsec)
    imported.push({
      id,
      keyName,
      pubkey: account.pubkey,
      bunkerUri: raw.bunkerUri ?? raw.key?.bunkerUri ?? '',
    })
  }

  const manifest = {
    version: 1,
    generatedAt: new Date().toISOString(),
    signetUrl: options.baseUrl,
    warning: 'Local deterministic development Signet keys only. Do not use outside a local NMDK stack.',
    keys: imported,
  }
  mkdirSync(dirname(options.manifestPath), { recursive: true })
  writeFileSync(options.manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

  console.log(`Imported ${imported.length} deterministic keys into Signet at ${options.baseUrl}`)
  console.log(`Wrote ${options.manifestPath}`)
  for (const key of imported) {
    console.log(`${key.keyName}: ${key.pubkey}${key.bunkerUri ? ` (${key.bunkerUri})` : ''}`)
  }
}

main().catch(error => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
