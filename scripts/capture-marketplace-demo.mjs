#!/usr/bin/env node

import { execFile, execFileSync, spawn } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, copyFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { promisify } from 'node:util'
import { fileURLToPath } from 'node:url'

import { chromium } from 'playwright'
import { SimplePool } from 'nostr-tools/pool'

const execFileAsync = promisify(execFile)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const defaultBaseUrl = process.env.NMDK_DEMO_CAPTURE_BASE_URL ?? 'http://localhost:5178'
const defaultDocsUrl = process.env.NMDK_DEMO_CAPTURE_DOCS_URL ?? 'http://127.0.0.1:15179'
const defaultRelay = process.env.NMDK_DEMO_CAPTURE_RELAY ?? 'ws://127.0.0.1:18080'
const defaultOutRoot = resolve(root, 'artifacts/marketplace-demo')
const defaultIntroOutRoot = resolve(root, 'artifacts/intro-video')
const paymentAckKind = 32124
const ackTimeoutMs = Number.parseInt(process.env.NMDK_DEMO_CAPTURE_ACK_TIMEOUT_MS ?? '', 10) || 240_000
const appleVoice = process.env.NMDK_DEMO_CAPTURE_VOICE ?? 'Samantha'
const appleVoiceRate = Number.parseInt(process.env.NMDK_DEMO_CAPTURE_VOICE_RATE ?? '', 10) || 200

const targets = {
  evmUsdOrder: { d: 'nmdk-sellerEvm-usd', title: '2014 Toyota Hilux - USD' },
  btcOrder: { d: 'nmdk-sellerCashu-btc', title: 'Second-hand Cargo Bike - BTC' },
  evmUsdBid: { d: 'nmdk-sellerEvm-usd', title: '2014 Toyota Hilux - USD', bidAmount: '50' },
  evmBtcBid: { d: 'nmdk-sellerEvm-btc', title: 'EVM Escrow Loft - BTC', bidAmount: '0.0006' },
  cashuBtcBid: { d: 'nmdk-sellerCashu-btc', title: 'Second-hand Cargo Bike - BTC', bidAmount: '0.0006' },
}

function usage() {
  return `
Usage:
  npm run demo:capture

Options:
  --base-url <url>      Marketplace app URL. Defaults to ${defaultBaseUrl}.
  --relay <url>         Local relay URL used for ACK verification. Defaults to ${defaultRelay}.
  --out <dir>           Output directory. Defaults to artifacts/marketplace-demo/<run-id>.
  --headed              Show the Playwright browser while recording.
  --intro               Record the developer introduction with an Apple voice-over.
  --docs-url <url>      Documentation URL for --intro. Defaults to ${defaultDocsUrl}.
  --voice-only <dir>    Regenerate Apple audio for an existing intro artifact directory.
  --skip-stack-check    Skip Docker arbiter container checks.
  --help                Print this help.

The full local NMDK stack must be running. If the Vite demo is not running,
this script starts it and stops it before exiting.

The capture finishes at /escrow as the seeded EVM arbiter and fails unless at
least one participating record has an attached, enabled driver-backed action.

During capture, code preview widgets fade on a 6-second loop: roughly 3 seconds
visible and 3 seconds transparent. Stills temporarily hide those previews so the
underlying marketplace widget is visible in each screenshot.
`.trim()
}

function parseArgs(argv) {
  const options = {
    baseUrl: defaultBaseUrl,
    relay: defaultRelay,
    docsUrl: defaultDocsUrl,
    outDir: undefined,
    headed: false,
    intro: false,
    voiceOnly: undefined,
    skipStackCheck: false,
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
        options.baseUrl = value.replace(/\/+$/, '')
        if (consume) i += 1
        break
      case '--relay':
        if (!value) throw new Error('--relay requires a value')
        options.relay = value
        if (consume) i += 1
        break
      case '--out':
        if (!value) throw new Error('--out requires a value')
        options.outDir = resolve(root, value)
        if (consume) i += 1
        break
      case '--headed':
        options.headed = true
        break
      case '--intro':
        options.intro = true
        break
      case '--docs-url':
        if (!value) throw new Error('--docs-url requires a value')
        options.docsUrl = value.replace(/\/+$/, '')
        if (consume) i += 1
        break
      case '--voice-only':
        if (!value) throw new Error('--voice-only requires an artifact directory')
        options.voiceOnly = resolve(root, value)
        if (consume) i += 1
        break
      case '--skip-stack-check':
        options.skipStackCheck = true
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

function readSeedManifest() {
  const path = resolve(root, 'data/seed/marketplace-seed.json')
  if (!existsSync(path)) throw new Error(`Missing ${path}. Run \`npm run up\` first.`)
  return JSON.parse(readFileSync(path, 'utf8'))
}

function listingByD(manifest, d) {
  const listing = manifest.eventSummary?.listings?.find(item => item.d === d)
  if (!listing?.id) throw new Error(`Seed manifest does not contain listing ${d}`)
  return listing
}

function runId() {
  return new Date().toISOString().replaceAll(/[:.]/g, '-')
}

function serializeError(error) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    }
  }
  return {
    name: 'Error',
    message: String(error),
  }
}

async function canFetch(url) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(2_000) })
    return response.ok
  } catch {
    return false
  }
}

async function waitForApp(baseUrl) {
  const deadline = Date.now() + 60_000
  while (Date.now() < deadline) {
    if (await canFetch(baseUrl)) return
    await new Promise(resolveTimeout => setTimeout(resolveTimeout, 1_000))
  }
  throw new Error(`Timed out waiting for ${baseUrl}`)
}

async function ensureDemoServer(baseUrl) {
  if (await canFetch(baseUrl)) {
    if (process.env.NMDK_DEMO_CAPTURE_REQUIRE_OWN_SERVER === '1') {
      throw new Error(`${baseUrl} is already serving content; the fresh capture must own its demo server`)
    }
    return undefined
  }

  const parsedBaseUrl = new URL(baseUrl)
  const hostname = parsedBaseUrl.hostname === '[::1]' ? '::1' : parsedBaseUrl.hostname
  if (!['localhost', '127.0.0.1', '::1'].includes(hostname)) {
    throw new Error(`Cannot start the local demo for non-loopback URL ${baseUrl}`)
  }
  const port = parsedBaseUrl.port || (parsedBaseUrl.protocol === 'https:' ? '443' : '80')

  const child = spawn('npm', ['run', 'demo', '--', '--host', hostname, '--port', port, '--strictPort'], {
    cwd: root,
    env: { ...process.env, BROWSER: 'none' },
    stdio: 'inherit',
    detached: process.platform !== 'win32',
  })
  const exitedBeforeReady = new Promise((_, reject) => {
    child.once('exit', (code, signal) => {
      reject(new Error(`Demo server exited before becoming ready (code ${code ?? 'none'}, signal ${signal ?? 'none'})`))
    })
  })
  const spawnFailed = new Promise((_, reject) => {
    child.once('error', error => reject(new Error(`Unable to start demo server: ${error.message}`, { cause: error })))
  })
  try {
    await Promise.race([waitForApp(baseUrl), exitedBeforeReady, spawnFailed])
  } catch (error) {
    await stopDemoServer(child)
    throw error
  }
  return child
}

async function ensureDocsServer(baseUrl) {
  if (await canFetch(baseUrl)) {
    if (process.env.NMDK_DEMO_CAPTURE_REQUIRE_OWN_SERVER === '1') {
      throw new Error(`${baseUrl} is already serving content; the fresh intro capture must own its docs server`)
    }
    return undefined
  }

  const parsedBaseUrl = new URL(baseUrl)
  const hostname = parsedBaseUrl.hostname === '[::1]' ? '::1' : parsedBaseUrl.hostname
  if (!['localhost', '127.0.0.1', '::1'].includes(hostname)) {
    throw new Error(`Cannot start local documentation for non-loopback URL ${baseUrl}`)
  }
  const port = parsedBaseUrl.port || '3000'
  const child = spawn(
    'npm',
    ['--workspace', '@sudonym-btc/nmdk-docs', 'run', 'dev', '--', '--hostname', hostname, '--port', port],
    {
      cwd: root,
      env: { ...process.env, BROWSER: 'none' },
      stdio: 'inherit',
      detached: process.platform !== 'win32',
    },
  )
  const exitedBeforeReady = new Promise((_, reject) => {
    child.once('exit', (code, signal) => {
      reject(new Error(`Docs server exited before becoming ready (code ${code ?? 'none'}, signal ${signal ?? 'none'})`))
    })
  })
  const spawnFailed = new Promise((_, reject) => {
    child.once('error', error => reject(new Error(`Unable to start docs server: ${error.message}`, { cause: error })))
  })
  try {
    await Promise.race([waitForApp(baseUrl), exitedBeforeReady, spawnFailed])
  } catch (error) {
    await stopDemoServer(child)
    throw error
  }
  return child
}

async function stopDemoServer(child) {
  if (!child || child.exitCode !== null || child.signalCode !== null) return

  const exited = new Promise(resolveExit => child.once('exit', resolveExit))
  try {
    if (process.platform === 'win32') child.kill('SIGTERM')
    else process.kill(-child.pid, 'SIGTERM')
  } catch {
    child.kill('SIGTERM')
  }
  await Promise.race([
    exited,
    new Promise(resolveTimeout => setTimeout(resolveTimeout, 5_000)),
  ])

  if (child.exitCode === null && child.signalCode === null) {
    try {
      if (process.platform === 'win32') child.kill('SIGKILL')
      else process.kill(-child.pid, 'SIGKILL')
    } catch {
      child.kill('SIGKILL')
    }
    await Promise.race([
      exited,
      new Promise(resolveTimeout => setTimeout(resolveTimeout, 2_000)),
    ])
  }
}

function dockerPs() {
  const output = execFileSync('docker', ['ps', '--format', '{{.Names}}\t{{.Status}}'], { encoding: 'utf8' })
  return output.trim().split('\n').filter(Boolean).map(line => {
    const [name, status] = line.split('\t')
    return { name, status }
  })
}

function requireArbitersRunning() {
  const rows = dockerPs()
  const expected = ['nmdk-arbiter-evm', 'nmdk-arbiter-cashu', 'nmdk-arbiter-both']
  const missing = expected.filter(name => !rows.some(row => row.name === name && row.status.startsWith('Up')))
  if (missing.length > 0) {
    throw new Error(`Arbiter containers are not running: ${missing.join(', ')}. Run \`npm run up:arbiters\`.`)
  }
  return rows.filter(row => expected.includes(row.name))
}

async function paymentAckEvents(relay, since) {
  const pool = new SimplePool()
  try {
    const events = await pool.querySync([relay], {
      kinds: [paymentAckKind],
      since,
    }, { maxWait: 2_500 })
    return [...events].sort((left, right) => left.created_at - right.created_at || left.id.localeCompare(right.id))
  } finally {
    pool.close([relay])
  }
}

async function waitForAckCount(relay, since, expectedCount, label) {
  const deadline = Date.now() + ackTimeoutMs
  let latest = []
  while (Date.now() < deadline) {
    latest = await paymentAckEvents(relay, since)
    if (latest.length >= expectedCount) return latest
    await new Promise(resolveTimeout => setTimeout(resolveTimeout, 2_000))
  }
  throw new Error(`Timed out waiting for arbiter payment ACK after ${label}; saw ${latest.length}, expected ${expectedCount}`)
}

async function payInvoice(invoice) {
  if (!/^ln/i.test(invoice)) throw new Error(`Unexpected invoice value: ${invoice.slice(0, 24)}`)
  await execFileAsync('npm', ['run', 'pay:invoice', '--', invoice], {
    cwd: root,
    env: { ...process.env, NMDK_PAY_INVOICE_TIMEOUT_MS: '480000' },
    timeout: 480_000,
  })
}

async function waitUntilEnabled(locator, label, timeoutMs = 45_000) {
  const deadline = Date.now() + timeoutMs
  await locator.waitFor({ state: 'visible', timeout: timeoutMs })
  while (Date.now() < deadline) {
    if (await locator.isEnabled()) return
    await new Promise(resolveTimeout => setTimeout(resolveTimeout, 250))
  }
  throw new Error(`${label} did not become enabled`)
}

async function waitUntilEnabledWithRefresh(page, locator, label, timeoutMs = 90_000) {
  const deadline = Date.now() + timeoutMs
  let nextRefreshAt = 0
  await locator.waitFor({ state: 'visible', timeout: timeoutMs })
  while (Date.now() < deadline) {
    if (await locator.isEnabled()) return
    const refreshButton = page.getByRole('button', { name: 'Refresh' }).last()
    if (Date.now() >= nextRefreshAt && await refreshButton.count() > 0 && await refreshButton.isVisible() && await refreshButton.isEnabled()) {
      await refreshButton.evaluate(element => element.click())
      nextRefreshAt = Date.now() + 10_000
    }
    await new Promise(resolveTimeout => setTimeout(resolveTimeout, 500))
  }
  throw new Error(`${label} did not become enabled`)
}

function parseMinimumAmount(text) {
  const match = text.match(/^Minimum is\s+([0-9][0-9,]*(?:\.[0-9]+)?)/i)
  return match ? match[1].replaceAll(',', '') : undefined
}

async function visibleMinimumAmount(page) {
  const messages = page.getByText(/^Minimum is /)
  const count = await messages.count()
  for (let index = count - 1; index >= 0; index -= 1) {
    const message = messages.nth(index)
    if (!await message.isVisible()) continue
    const text = await message.textContent()
    const amount = text ? parseMinimumAmount(text.trim()) : undefined
    if (amount) return amount
  }
  return undefined
}

async function fillVisibleMinimumBid(page, lastFilled) {
  const minimum = await visibleMinimumAmount(page)
  if (!minimum || minimum === lastFilled.value) return false
  const amountInput = page.getByTestId('bid-amount-input')
  if (!await amountInput.isVisible()) return false
  await amountInput.fill(minimum)
  lastFilled.value = minimum
  return true
}

async function waitForBidContinueEnabled(page, scope, locator, label, timeoutMs = 120_000) {
  const deadline = Date.now() + timeoutMs
  const lastFilled = { value: undefined }
  let nextRefreshAt = 0
  await locator.waitFor({ state: 'visible', timeout: timeoutMs })
  while (Date.now() < deadline) {
    if (await locator.isEnabled()) return
    const minimum = await visibleMinimumAmount(scope)
    if (minimum && minimum !== lastFilled.value) {
      const amountInput = scope.getByTestId('bid-amount-input')
      if (await amountInput.isVisible()) {
        await amountInput.fill(minimum)
        lastFilled.value = minimum
      }
    }
    if (await locator.isEnabled()) return
    const refreshButton = page.getByRole('button', { name: 'Refresh' }).last()
    if (Date.now() >= nextRefreshAt && await refreshButton.count() > 0 && await refreshButton.isVisible() && await refreshButton.isEnabled()) {
      await refreshButton.evaluate(element => element.click())
      nextRefreshAt = Date.now() + 10_000
    }
    await new Promise(resolveTimeout => setTimeout(resolveTimeout, 500))
  }
  throw new Error(`${label} did not become enabled`)
}

async function clickDemoControl(locator, label) {
  await waitUntilEnabled(locator, label)
  try {
    await locator.click({ timeout: 10_000 })
  } catch {
    await locator.evaluate(element => element.click())
  }
}

async function waitForInvoiceInput(page, label, timeoutMs = 420_000) {
  const invoiceInput = page.getByTestId('invoice-input')
  const deadline = Date.now() + timeoutMs
  let nextRetryAt = 0
  while (Date.now() < deadline) {
    if (await invoiceInput.count() > 0 && await invoiceInput.isVisible()) return invoiceInput
    const retryButton = page.getByRole('button', { name: 'Retry' }).last()
    if (Date.now() >= nextRetryAt && await retryButton.count() > 0 && await retryButton.isVisible() && await retryButton.isEnabled()) {
      const rateLimited = await page.getByText('429 Too Many Requests').count() > 0
      const retryDelayMs = rateLimited ? 70_000 : 8_000
      await page.waitForTimeout(retryDelayMs)
      await retryButton.evaluate(element => element.click())
      nextRetryAt = Date.now() + (rateLimited ? 70_000 : 15_000)
    }
    await page.waitForTimeout(500)
  }
  throw new Error(`${label} invoice input did not become visible`)
}

async function openSidebarLink(page, name, heading = name) {
  await waitForMarketplaceReady(page, `open ${name}`)
  await clickDemoControl(page.getByRole('link', { name }).first(), `${name} link`)
  await page.getByRole('heading', { name: heading, exact: true }).waitFor({ state: 'visible', timeout: 60_000 })
}

async function openListing(page, listing, label, section = 'Listings') {
  const listingPath = `/listing/${listing.id}`
  if (new URL(page.url()).pathname === listingPath) return

  let listingLink = page.locator(`a[href="${listingPath}"]`).first()
  if (await listingLink.count() === 0 || !await listingLink.isVisible()) {
    await openSidebarLink(page, section)
    listingLink = page.locator(`a[href="${listingPath}"]`).first()
  }

  const deadline = Date.now() + 60_000
  while (Date.now() < deadline && (await listingLink.count() === 0 || !await listingLink.isVisible())) {
    const loadMore = page.getByRole('button', { name: `Load more ${section.toLowerCase()}`, exact: true })
    if (await loadMore.count() > 0 && await loadMore.isVisible() && await loadMore.isEnabled()) {
      // Relay updates can replace the paginated list between Playwright's
      // actionability check and its synthetic click. Dispatch directly on the
      // currently resolved button so a harmless React refresh cannot stall a
      // deterministic capture for the full locator timeout.
      try {
        await loadMore.evaluate(element => element.click())
      } catch {
        // The button may disappear because the same refresh loaded the target.
        // Re-check the listing on the next loop instead of treating that as a
        // capture failure.
      }
    }
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(250)
  }
  await listingLink.waitFor({ state: 'visible', timeout: 60_000 })
  await clickDemoControl(listingLink, `${label} listing link`)
  await page.waitForURL(url => url.pathname === listingPath, { timeout: 60_000 })
}

async function openListingDetail(page, listing, label, section = 'Listings') {
  const detail = page.getByTestId('listing-detail')
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    if (attempt > 1) {
      await openSidebarLink(page, section)
      await page.waitForTimeout(attempt * 500)
    }
    await openListing(page, listing, label, section)
    try {
      await detail.waitFor({ state: 'visible', timeout: 20_000 })
      return
    } catch (error) {
      if (attempt === 3) throw error
    }
  }
}

async function selectOptionalRentalDates(page, label) {
  const datePicker = page.locator('#checkout-date-range')
  if (await datePicker.count() === 0) return false
  await clickDemoControl(datePicker, `${label} date picker`)
  const calendar = page.locator('[data-slot="calendar"]').first()
  await calendar.waitFor({ state: 'visible', timeout: 30_000 })
  const candidateDays = await calendar
    .locator('button[data-day]:not([disabled]):not([data-outside="true"])')
    .evaluateAll(buttons => [...new Set(buttons.map(button => button.getAttribute('data-day')).filter(Boolean))])
  if (candidateDays.length < 4) {
    throw new Error(`${label} calendar did not expose enough selectable dates`)
  }
  const startDay = candidateDays[0]
  const endDay = candidateDays[3]
  await clickDemoControl(calendar.locator(`button[data-day="${startDay}"]`).first(), `${label} start date`)
  await clickDemoControl(calendar.locator(`button[data-day="${endDay}"]`).first(), `${label} end date`)
  await page.keyboard.press('Escape')
  const selectedLabel = await datePicker.locator('span').textContent()
  if (!selectedLabel?.includes(' - ')) {
    throw new Error(`${label} calendar did not commit a date range`)
  }
  return true
}

async function waitForMarketplaceReady(page, label) {
  await page.getByTestId('app-status').filter({ hasText: 'Ready' }).waitFor({
    state: 'visible',
    timeout: 120_000,
  })
  if (label) {
    await page.waitForTimeout(250)
  }
}

async function screenshot(page, outDir, manifest, name, note) {
  const path = resolve(outDir, `${name}.png`)
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-code-hint-capture-screenshot', 'true')
  })
  await page.waitForTimeout(650)
  try {
    await page.screenshot({ path, fullPage: true })
    manifest.screenshots.push({ name, note, path, codeHints: 'transparent' })
    return path
  } finally {
    await page.evaluate(() => {
      document.documentElement.removeAttribute('data-code-hint-capture-screenshot')
    }).catch(() => undefined)
  }
}

async function recordScene(manifest, id, title, narrationCue, action) {
  const startedAtMs = Date.now() - manifest.captureStartedAtMs
  try {
    return await action()
  } finally {
    manifest.scenes.push({
      id,
      title,
      narrationCue,
      startMs: startedAtMs,
      endMs: Date.now() - manifest.captureStartedAtMs,
    })
  }
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function showTitleCard(page, title, subtitle, durationMs = 3_000) {
  await page.setContent(`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          * { box-sizing: border-box; }
          html, body { width: 100%; height: 100%; margin: 0; }
          body {
            display: grid;
            place-items: center;
            background: #f7f7f5;
            color: #181817;
            font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          main { width: min(1100px, 78vw); }
          .eyebrow { color: #73736e; font-size: 22px; font-weight: 650; letter-spacing: .16em; text-transform: uppercase; }
          h1 { margin: 24px 0 18px; font-size: 84px; letter-spacing: -.055em; line-height: .98; }
          p { margin: 0; color: #5c5c58; font-size: 30px; line-height: 1.4; }
          .rule { width: 92px; height: 8px; margin-top: 42px; border-radius: 99px; background: #181817; }
        </style>
      </head>
      <body>
        <main>
          <div class="eyebrow">Nostr Markets Development Kit</div>
          <h1>${escapeHtml(title)}</h1>
          <p>${escapeHtml(subtitle)}</p>
          <div class="rule"></div>
        </main>
      </body>
    </html>`)
  await page.waitForTimeout(durationMs)
}

async function captureDocsIntroduction(page, docsUrl) {
  await page.goto(`${docsUrl}/docs`)
  await page.getByText('Nostr Markets Development Kit', { exact: true }).first().waitFor({
    state: 'visible',
    timeout: 90_000,
  })
  await page.waitForTimeout(3_500)
  await page.getByRole('link', { name: 'Getting started', exact: true }).first().click()
  await page.getByText('Getting started', { exact: true }).first().waitFor({ state: 'visible', timeout: 60_000 })
  await page.waitForTimeout(3_500)
  await page.evaluate(() => window.scrollTo({ top: Math.min(620, document.body.scrollHeight), behavior: 'smooth' }))
  await page.waitForTimeout(3_500)
  await page.getByRole('link', { name: 'Architecture', exact: true }).first().click()
  await page.getByText('Architecture', { exact: true }).first().waitFor({ state: 'visible', timeout: 60_000 })
  await page.waitForTimeout(4_000)
}

function auctionFixtureByD(manifest, d) {
  const auction = manifest.eventSummary?.auctions?.find(item => item.d === d)
  if (!auction?.anchor || !auction?.endAt) throw new Error(`Seed manifest does not contain auction ${d}`)
  return auction
}

async function settleAuctionFixture(auction, runStateDirectory) {
  const endAt = Number.parseInt(String(auction.endAt), 10)
  if (!Number.isSafeInteger(endAt) || endAt <= 0) throw new Error(`Invalid auction end time for ${auction.d}`)
  const { stdout, stderr } = await execFileAsync(
    'bun',
    [
      'scripts/settle-auction-once.mjs',
      '--method', 'evm',
      '--account', 'arbiterEvm',
      '--auction-anchor', auction.anchor,
      '--now', String(endAt),
      '--wait-until-ended',
    ],
    {
      cwd: root,
      env: {
        ...process.env,
        MARKETPLACE_SETTLEMENT_JOURNAL_DIR: resolve(runStateDirectory, 'settlement-journal'),
        MARKETPLACE_EVM_OPERATION_STORE_DIR: resolve(runStateDirectory, 'evm-operations'),
      },
      timeout: 480_000,
      maxBuffer: 8 * 1024 * 1024,
    },
  )
  if (!stdout.includes('"ok": true')) {
    throw new Error(`Auction settlement did not report success.${stderr ? `\n${stderr}` : ''}`)
  }
  return { endAt, stdout }
}

function timestamp(ms) {
  const seconds = Math.max(0, Math.round(ms / 100) / 10)
  const minutes = Math.floor(seconds / 60)
  return `${minutes}:${(seconds - minutes * 60).toFixed(1).padStart(4, '0')}`
}

function writeNarrationGuide(outDir, manifest) {
  const lines = [
    '# NMDK intro voice-over script',
    '',
    `The bundled placeholder was generated locally with the macOS Apple voice \`${appleVoice}\` at ${appleVoiceRate} words per minute. Read the scene copy below verbatim or adapt it to your own delivery.`,
    '',
    'The silent master is `nmdk-intro-silent.mp4`. To replace the placeholder without re-encoding the picture, put your recording in this directory and run:',
    '',
    '```sh',
    'ffmpeg -y -i nmdk-intro-silent.mp4 -i my-voiceover.wav -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -af apad -shortest -movflags +faststart nmdk-intro-my-voice.mp4',
    '```',
    '',
    ...manifest.scenes.flatMap(scene => [
      `## ${timestamp(scene.startMs)}–${timestamp(scene.endMs)} — ${scene.title}`,
      '',
      scene.narrationCue,
      '',
    ]),
  ]
  const path = resolve(outDir, 'narration-guide.md')
  writeFileSync(path, `${lines.join('\n')}\n`)
  return path
}

async function probeMedia(path) {
  const { stdout } = await execFileAsync(
    'ffprobe',
    ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', path],
    { cwd: root, timeout: 30_000 },
  )
  return JSON.parse(stdout)
}

async function renderIntroVideo(rawVideoPath, outDir) {
  const outputPath = resolve(outDir, 'nmdk-intro-silent.mp4')
  await execFileAsync(
    'ffmpeg',
    [
      '-y',
      '-i', rawVideoPath,
      '-an',
      '-vf', 'fps=30,scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=#f7f7f5',
      '-c:v', 'libx264',
      '-preset', 'medium',
      '-crf', '18',
      '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart',
      outputPath,
    ],
    { cwd: root, timeout: 600_000, maxBuffer: 8 * 1024 * 1024 },
  )
  const probe = await probeMedia(outputPath)
  const video = probe.streams?.find(stream => stream.codec_type === 'video')
  const audioStreams = probe.streams?.filter(stream => stream.codec_type === 'audio') ?? []
  if (video?.width !== 1920 || video?.height !== 1080) {
    throw new Error(`Rendered intro has unexpected dimensions ${video?.width ?? '?'}x${video?.height ?? '?'}`)
  }
  if (audioStreams.length > 0) throw new Error('Rendered intro must not contain an audio stream')
  return {
    path: outputPath,
    width: video.width,
    height: video.height,
    durationSeconds: Number.parseFloat(probe.format?.duration ?? '0'),
    audioStreams: audioStreams.length,
  }
}

async function synthesizeSceneVoice(path, text, rate) {
  await execFileAsync(
    '/usr/bin/say',
    ['-v', appleVoice, '-r', String(rate), '-o', path, text],
    { cwd: root, timeout: 120_000, maxBuffer: 1024 * 1024 },
  )
  const probe = await probeMedia(path)
  return Number.parseFloat(probe.format?.duration ?? '0')
}

async function renderIntroVoiceover(silentVideoPath, outDir, manifest) {
  if (process.platform !== 'darwin' || !existsSync('/usr/bin/say')) {
    throw new Error('The intro voice-over requires the built-in macOS /usr/bin/say generator')
  }
  if (!Number.isSafeInteger(appleVoiceRate) || appleVoiceRate < 80 || appleVoiceRate > 400) {
    throw new Error(`Invalid NMDK_DEMO_CAPTURE_VOICE_RATE: ${appleVoiceRate}`)
  }

  const silentProbe = await probeMedia(silentVideoPath)
  const durationSeconds = Number.parseFloat(silentProbe.format?.duration ?? '0')
  if (!(durationSeconds > 0)) throw new Error('Unable to determine the silent intro duration')

  const sceneAudioDir = resolve(outDir, 'voiceover-scenes')
  mkdirSync(sceneAudioDir, { recursive: true })
  const renderedScenes = []
  for (const [index, scene] of manifest.scenes.entries()) {
    const path = resolve(sceneAudioDir, `${String(index + 1).padStart(2, '0')}-${scene.id}.aiff`)
    const sceneDurationSeconds = Math.max(0.5, (scene.endMs - scene.startMs) / 1000)
    let rate = appleVoiceRate
    let audioDurationSeconds = await synthesizeSceneVoice(path, scene.narrationCue, rate)
    if (audioDurationSeconds > sceneDurationSeconds) {
      rate = Math.min(300, Math.ceil(rate * (audioDurationSeconds / sceneDurationSeconds) * 1.04))
      audioDurationSeconds = await synthesizeSceneVoice(path, scene.narrationCue, rate)
    }
    if (audioDurationSeconds > sceneDurationSeconds + 0.25) {
      throw new Error(`${scene.title} narration is ${audioDurationSeconds.toFixed(1)}s but its scene is ${sceneDurationSeconds.toFixed(1)}s`)
    }
    renderedScenes.push({
      id: scene.id,
      path,
      startMs: scene.startMs,
      durationSeconds: audioDurationSeconds,
      rate,
      text: scene.narrationCue,
    })
  }

  const trackPath = resolve(outDir, 'nmdk-intro-apple-voice.m4a')
  const trackArgs = [
    '-y',
    '-f', 'lavfi',
    '-t', String(durationSeconds),
    '-i', 'anullsrc=channel_layout=stereo:sample_rate=48000',
  ]
  for (const scene of renderedScenes) trackArgs.push('-i', scene.path)
  const filters = renderedScenes.map((scene, index) => (
    `[${index + 1}:a]aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo,adelay=${Math.max(0, Math.round(scene.startMs))}|${Math.max(0, Math.round(scene.startMs))}[scene${index}]`
  ))
  const mixInputs = ['[0:a]', ...renderedScenes.map((_, index) => `[scene${index}]`)].join('')
  filters.push(`${mixInputs}amix=inputs=${renderedScenes.length + 1}:duration=first:dropout_transition=0:normalize=0,alimiter=limit=0.95[audio]`)
  trackArgs.push(
    '-filter_complex', filters.join(';'),
    '-map', '[audio]',
    '-t', String(durationSeconds),
    '-c:a', 'aac',
    '-b:a', '192k',
    trackPath,
  )
  await execFileAsync('ffmpeg', trackArgs, { cwd: root, timeout: 600_000, maxBuffer: 8 * 1024 * 1024 })

  const videoPath = resolve(outDir, 'nmdk-intro-apple-voice.mp4')
  await execFileAsync(
    'ffmpeg',
    [
      '-y',
      '-i', silentVideoPath,
      '-i', trackPath,
      '-map', '0:v:0',
      '-map', '1:a:0',
      '-c:v', 'copy',
      '-c:a', 'copy',
      '-shortest',
      '-movflags', '+faststart',
      videoPath,
    ],
    { cwd: root, timeout: 600_000, maxBuffer: 8 * 1024 * 1024 },
  )
  const outputProbe = await probeMedia(videoPath)
  const video = outputProbe.streams?.find(stream => stream.codec_type === 'video')
  const audioStreams = outputProbe.streams?.filter(stream => stream.codec_type === 'audio') ?? []
  if (video?.width !== 1920 || video?.height !== 1080 || audioStreams.length !== 1) {
    throw new Error(`Voiced intro validation failed: ${video?.width ?? '?'}x${video?.height ?? '?'}, ${audioStreams.length} audio streams`)
  }
  return {
    voice: appleVoice,
    defaultRate: appleVoiceRate,
    trackPath,
    videoPath,
    durationSeconds: Number.parseFloat(outputProbe.format?.duration ?? '0'),
    audioStreams: audioStreams.length,
    scenes: renderedScenes,
  }
}

async function loginAsDemoAccount(page, baseUrl, accountId, accountLabel, outDir, manifest, screenshotName, note) {
  await page.goto(`${baseUrl}/login`)
  await clickDemoControl(page.getByTestId(`demo-login-${accountId}`), `${accountLabel} demo login`)
  await page.getByText('2014 Toyota Hilux - USD').waitFor({ state: 'visible', timeout: 60_000 })
  await waitForMarketplaceReady(page, `${accountLabel} login`)
  if (screenshotName) await screenshot(page, outDir, manifest, screenshotName, note)
}

async function loginAsBuyer(page, baseUrl, outDir, manifest) {
  await loginAsDemoAccount(
    page,
    baseUrl,
    'buyer',
    'buyer',
    outDir,
    manifest,
    '01-login-listings',
    'Logged in as the deterministic buyer and loaded seeded listings.',
  )
}

async function logoutDemoAccount(page, baseUrl, label) {
  await waitForMarketplaceReady(page, `${label} before logout`)
  await clickDemoControl(page.getByRole('button', { name: 'Log out' }).first(), `${label} logout`)
  await page.goto(`${baseUrl}/login`)
  await page.getByTestId('demo-login-buyer').waitFor({ state: 'visible', timeout: 60_000 })
}

async function captureOrder({
  page,
  baseUrl,
  listing,
  label,
  relay,
  runSince,
  ackState,
  outDir,
  manifest,
  paceMs = 0,
}) {
  await openListingDetail(page, listing, label)
  await waitForMarketplaceReady(page, `${label} page`)
  await page.getByRole('heading', { name: listing.title }).waitFor({ state: 'visible', timeout: 60_000 })
  await selectOptionalRentalDates(page, label)
  await screenshot(page, outDir, manifest, `${label}-listing`, `Opened ${listing.title} before checkout.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)

  await clickDemoControl(page.getByTestId('checkout-button'), `${label} checkout`)
  const continueButton = page.getByTestId('checkout-continue-button')
  await waitUntilEnabledWithRefresh(page, continueButton, `${label} checkout continue`)
  await screenshot(page, outDir, manifest, `${label}-arbiter`, `Selected the seeded arbitration route for ${listing.title}.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)
  await clickDemoControl(continueButton, `${label} checkout continue`)

  const invoiceInput = await waitForInvoiceInput(page, label)
  const invoice = await invoiceInput.inputValue()
  await screenshot(page, outDir, manifest, `${label}-invoice`, `Checkout produced a Bolt11 invoice for ${listing.title}.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)
  await payInvoice(invoice)

  await page.getByTestId('checkout-done-button').waitFor({ state: 'visible', timeout: 180_000 })
  await screenshot(page, outDir, manifest, `${label}-published`, `Order and payment proof published for ${listing.title}.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)
  await clickDemoControl(page.getByTestId('checkout-done-button'), `${label} checkout done`)

  ackState.expected += 1
  const ackEvents = await waitForAckCount(relay, runSince, ackState.expected, label)
  await openSidebarLink(page, 'My Orders')
  await page.getByTestId('order-card').first().waitFor({ state: 'visible', timeout: 60_000 })
  await page.getByTestId('payment-lifecycles').first().waitFor({ state: 'visible', timeout: 60_000 })
  await screenshot(page, outDir, manifest, `${label}-ack`, `My Orders shows payment lifecycle after arbiter ACK for ${listing.title}.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)

  manifest.flows.push({
    label,
    type: 'order',
    listing: listing.title,
    invoicePrefix: invoice.slice(0, 24),
    ackCountAfter: ackEvents.length,
    latestAckId: ackEvents.at(-1)?.id,
  })
}

async function captureBid({
  page,
  baseUrl,
  listing,
  label,
  relay,
  runSince,
  ackState,
  outDir,
  manifest,
  paceMs = 0,
}) {
  await openListingDetail(page, listing, label, 'Auctions')
  await waitForMarketplaceReady(page, `${label} page`)
  await page.getByRole('heading', { name: listing.title }).waitFor({ state: 'visible', timeout: 60_000 })
  await page.getByTestId('place-bid-button').waitFor({ state: 'visible', timeout: 60_000 })
  await selectOptionalRentalDates(page, label)
  await screenshot(page, outDir, manifest, `${label}-listing`, `Opened ${listing.title} before bidding.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)

  await clickDemoControl(page.getByTestId('place-bid-button'), `${label} place bid`)
  const bidDialog = page
    .locator('[data-slot="dialog-content"]')
    .filter({ hasText: /Place auction bid|Increase auction bid/ })
    .last()
  await bidDialog.waitFor({ state: 'visible', timeout: 30_000 })
  if (listing.bidAmount) {
    const amountInput = bidDialog.getByTestId('bid-amount-input')
    await amountInput.waitFor({ state: 'visible', timeout: 30_000 })
    await amountInput.fill(listing.bidAmount)
  }
  const bidButton = bidDialog.getByTestId('bid-continue-button')
  await waitForBidContinueEnabled(page, bidDialog, bidButton, `${label} bid continue`, 120_000)
  await screenshot(page, outDir, manifest, `${label}-bid-dialog`, `Prepared a funded bid for ${listing.title}.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)
  await clickDemoControl(bidButton, `${label} bid continue`)

  const invoiceInput = await waitForInvoiceInput(page, label)
  const invoice = await invoiceInput.inputValue()
  await screenshot(page, outDir, manifest, `${label}-invoice`, `Bid produced a Bolt11 invoice for ${listing.title}.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)
  await payInvoice(invoice)

  await page.getByTestId('bid-done-button').waitFor({ state: 'visible', timeout: 180_000 })
  await screenshot(page, outDir, manifest, `${label}-published`, `Bid and payment proof published for ${listing.title}.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)
  await clickDemoControl(page.getByTestId('bid-done-button'), `${label} bid done`)

  ackState.expected += 1
  const ackEvents = await waitForAckCount(relay, runSince, ackState.expected, label)
  await openListing(page, listing, `${label} ack`, 'Auctions')
  await waitForMarketplaceReady(page, `${label} ack page`)
  await page.getByTestId('auction-bid-chain-toggle').first().waitFor({ state: 'visible', timeout: 90_000 })
  await clickDemoControl(page.getByTestId('auction-bid-chain-toggle').first(), `${label} bid chain toggle`)
  await page.getByTestId('payment-lifecycle-toggle').first().waitFor({ state: 'visible', timeout: 60_000 })
  await clickDemoControl(page.getByTestId('payment-lifecycle-toggle').first(), `${label} lifecycle toggle`)
  await page.getByText('Payment ACK').first().waitFor({ state: 'visible', timeout: 60_000 })
  await screenshot(page, outDir, manifest, `${label}-ack`, `Expanded bid chain lifecycle after arbiter ACK for ${listing.title}.`)
  if (paceMs > 0) await page.waitForTimeout(paceMs)

  manifest.flows.push({
    label,
    type: 'bid',
    listing: listing.title,
    invoicePrefix: invoice.slice(0, 24),
    ackCountAfter: ackEvents.length,
    latestAckId: ackEvents.at(-1)?.id,
  })
  return { invoice, ackEvents }
}

async function captureEscrowDashboard({ page, baseUrl, outDir, manifest }) {
  await logoutDemoAccount(page, baseUrl, 'buyer')
  await loginAsDemoAccount(
    page,
    baseUrl,
    'arbiterEvm',
    'EVM arbiter',
    outDir,
    manifest,
  )
  await openSidebarLink(page, 'Dashboard', 'Escrow dashboard')
  await waitForMarketplaceReady(page, 'escrow dashboard')

  const records = page.getByTestId('escrow-record-card')
  await records.first().waitFor({ state: 'visible', timeout: 120_000 })
  const attachedActions = page.getByTestId('escrow-record-actions')
  await attachedActions.first().waitFor({ state: 'visible', timeout: 120_000 })
  const enabledActions = attachedActions.locator('button:not([disabled])')
  await enabledActions.first().waitFor({ state: 'visible', timeout: 120_000 })

  const recordCount = await records.count()
  const actionGroupCount = await attachedActions.count()
  const enabledActionCount = await enabledActions.count()
  if (actionGroupCount !== recordCount) {
    throw new Error(`Escrow dashboard rendered ${recordCount} records but only ${actionGroupCount} attached action groups`)
  }
  const actionLabels = await attachedActions.allInnerTexts()
  await screenshot(
    page,
    outDir,
    manifest,
    'escrow-dashboard',
    `EVM arbiter dashboard shows ${recordCount} participating trade records with current driver-backed actions.`,
  )

  manifest.flows.push({
    label: 'escrow-dashboard',
    type: 'escrow-dashboard',
    account: 'arbiterEvm',
    recordCount,
    actionGroupCount,
    enabledActionCount,
    actionLabels,
  })
}

async function captureOrderRelease({ page, outDir, manifest }) {
  const orderCard = page.getByTestId('escrow-record-card').filter({
    has: page.getByRole('button', { name: 'Release to seller', exact: true }),
  }).first()
  await orderCard.waitFor({ state: 'visible', timeout: 120_000 })
  await screenshot(page, outDir, manifest, 'intro-order-release-ready', 'Validated order with driver-authorized release and refund actions.')
  await page.waitForTimeout(2_500)
  await clickDemoControl(orderCard.getByRole('button', { name: 'Release to seller', exact: true }), 'release order')
  const confirm = page.getByTestId('escrow-confirm-action')
  await confirm.waitFor({ state: 'visible', timeout: 30_000 })
  await page.waitForTimeout(2_000)
  await screenshot(page, outDir, manifest, 'intro-order-release-confirm', 'Escrow release confirmation before driver revalidation.')
  await clickDemoControl(confirm, 'confirm order release')
  const settledOrder = page.getByTestId('escrow-record-card')
    .filter({ hasText: /Order ·/ })
    .filter({ hasText: 'Settled' })
    .first()
  await settledOrder.waitFor({ state: 'visible', timeout: 180_000 })
  await page.waitForTimeout(3_000)
  manifest.flows.push({
    label: 'order-release-evm',
    type: 'escrow-order-settlement',
    action: 'release',
    finalStage: 'settled',
  })
  await showTitleCard(
    page,
    'Order released',
    'The EVM driver revalidated the payment and published the terminal settlement.',
    4_000,
  )
}

async function captureAuctionSettlement({ page, auction, outDir, manifest }) {
  const acceptedBid = page.getByTestId('escrow-record-card')
    .filter({ hasText: /Auction bid ·/ })
    .filter({ hasText: 'Accepted' })
    .first()
  await acceptedBid.waitFor({ state: 'visible', timeout: 120_000 })
  await screenshot(page, outDir, manifest, 'intro-auction-accepted', 'Funded auction bid is accepted and awaiting the signed auction end time.')
  await page.waitForTimeout(2_500)

  const settlement = await settleAuctionFixture(auction, outDir)
  // Settlement events deliberately carry the signed auction-end timestamp.
  // Refresh the records without reloading the page (and losing the in-memory
  // demo identity) so the relay query includes that canonical timestamp.
  await clickDemoControl(
    page.getByRole('button', { name: 'Refresh', exact: true }),
    'escrow dashboard refresh after auction settlement',
  )
  const promotedBid = page.getByTestId('escrow-record-card')
    .filter({ hasText: /Auction bid ·/ })
    .filter({ hasText: 'Promoted' })
    .first()
  await promotedBid.waitFor({ state: 'visible', timeout: 180_000 })
  await page.waitForTimeout(3_500)
  await screenshot(page, outDir, manifest, 'intro-auction-settled', 'Canonical auction settlement promotes the winning payment into an order.')
  manifest.flows.push({
    label: 'auction-settlement-evm',
    type: 'escrow-auction-settlement',
    auctionAnchor: auction.anchor,
    action: 'auction_promote',
    finalStage: 'promoted',
    endAt: settlement.endAt,
  })
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }

  if (options.voiceOnly) {
    const manifestPath = resolve(options.voiceOnly, 'manifest.json')
    if (!existsSync(manifestPath)) throw new Error(`Missing intro manifest: ${manifestPath}`)
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
    const silentVideoPath = manifest.renderedVideo?.path ?? resolve(options.voiceOnly, 'nmdk-intro-silent.mp4')
    if (!existsSync(silentVideoPath)) throw new Error(`Missing silent intro: ${silentVideoPath}`)
    manifest.voiceover = await renderIntroVoiceover(silentVideoPath, options.voiceOnly, manifest)
    delete manifest.error
    writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
    console.log(`Apple-voice intro: ${manifest.voiceover.videoPath}`)
    return
  }

  const id = runId()
  const outDir = options.outDir ?? resolve(options.intro ? defaultIntroOutRoot : defaultOutRoot, id)
  mkdirSync(outDir, { recursive: true })

  const stack = options.skipStackCheck ? [] : requireArbitersRunning()
  const manifestSeed = readSeedManifest()
  const runSince = Math.floor(Date.now() / 1000) - 5
  const initialAcks = await paymentAckEvents(options.relay, runSince)

  const runManifest = {
    runId: id,
    generatedAt: new Date().toISOString(),
    mode: options.intro ? 'intro' : 'acceptance',
    baseUrl: options.baseUrl,
    ...(options.intro ? { docsUrl: options.docsUrl } : {}),
    relay: options.relay,
    runSince,
    ackTimeoutMs,
    stack,
    codeHints: {
      video: 'cycle-3s-visible-3s-transparent',
      screenshots: 'transparent',
    },
    screenshots: [],
    flows: [],
    scenes: [],
    captureStartedAtMs: Date.now(),
    initialAckCount: initialAcks.length,
    finalAckCount: undefined,
    video: undefined,
    console: [],
    pageErrors: [],
    error: undefined,
  }
  const ackState = { expected: initialAcks.length }

  const listing = key => {
    const target = targets[key]
    return {
      ...target,
      ...listingByD(manifestSeed, target.d),
    }
  }
  let appProcess
  let docsProcess
  try {
    appProcess = await ensureDemoServer(options.baseUrl)
    if (options.intro) docsProcess = await ensureDocsServer(options.docsUrl)
  } catch (error) {
    await stopDemoServer(docsProcess)
    await stopDemoServer(appProcess)
    throw error
  }
  const browser = await chromium.launch({ headless: !options.headed })
  const viewport = options.intro ? { width: 1920, height: 1080 } : { width: 1440, height: 1000 }
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
    recordVideo: {
      dir: outDir,
      size: viewport,
    },
    viewport,
  })
  await context.addInitScript(({ intro }) => {
    try {
      window.localStorage.setItem('show_code', 'true')
    } catch {
      // Storage can be unavailable in unusual browser contexts.
    }
    const applyCaptureMode = () => {
      if (!intro) document.documentElement?.setAttribute('data-code-hint-capture', 'cycle')
    }
    if (document.documentElement) {
      applyCaptureMode()
    } else {
      window.addEventListener('DOMContentLoaded', applyCaptureMode, { once: true })
    }
  }, { intro: options.intro })
  const page = await context.newPage()
  page.on('console', message => {
    runManifest.console.push({
      type: message.type(),
      text: message.text(),
    })
  })
  page.on('pageerror', error => {
    runManifest.pageErrors.push(error instanceof Error ? error.stack ?? error.message : String(error))
  })
  page.setDefaultTimeout(60_000)
  page.setDefaultNavigationTimeout(90_000)

  let runError
  try {
    runManifest.captureStartedAtMs = Date.now()
    if (options.intro) {
      const introAuction = auctionFixtureByD(manifestSeed, 'nmdk-auction-evm-usd')
      await recordScene(
        runManifest,
        'opening',
        'Opening',
        'This is NMDK: a local kit for building and settling Nostr marketplaces.',
        () => showTitleCard(page, 'Build and settle a marketplace locally', 'Docs, EVM escrow, auction settlement, and deterministic capture.', 4_000),
      )
      await recordScene(
        runManifest,
        'documentation',
        'Documentation',
        'The docs lead with a two-step start. Clone the repository, run the quick-start command, and you get one pinned package snapshot, protocol references, and a security-first local environment.',
        () => captureDocsIntroduction(page, options.docsUrl),
      )
      await recordScene(
        runManifest,
        'order',
        'Create a funded order',
        'Here I am signed in as the deterministic buyer. I open a dollar-priced listing, choose the E V M escrow route, and pay the invoice using the local Lightning stack. The order and payment proof are published to the local relay, and the arbiter acknowledges the funded trade.',
        async () => {
          await loginAsBuyer(page, options.baseUrl, outDir, runManifest)
          await captureOrder({
            page,
            baseUrl: options.baseUrl,
            listing: listing('evmUsdOrder'),
            label: 'intro-order-usd-evm',
            relay: options.relay,
            runSince,
            ackState,
            outDir,
            manifest: runManifest,
            paceMs: 2_000,
          })
        },
      )
      await recordScene(
        runManifest,
        'auction-bid',
        'Fund an auction bid',
        'Next I place an eighty-dollar bid, above the signed reserve. It follows the same payment-proof flow: the local invoice is paid, the bid is published, and the escrow driver validates and accepts it while the auction is still open.',
        () => captureBid({
          page,
          baseUrl: options.baseUrl,
          listing: { ...listing('evmUsdBid'), bidAmount: '80' },
          label: 'intro-bid-usd-evm',
          relay: options.relay,
          runSince,
          ackState,
          outDir,
          manifest: runManifest,
          paceMs: 2_000,
        }),
      )
      await recordScene(
        runManifest,
        'escrow-dashboard',
        'Escrow operations dashboard',
        'Now I switch to the E V M escrow account. This dashboard only shows trades that name this escrow, and every action comes from the driver\'s latest validation of the live record.',
        async () => {
          await captureEscrowDashboard({ page, baseUrl: options.baseUrl, outDir, manifest: runManifest })
          await page.waitForTimeout(3_000)
        },
      )
      await recordScene(
        runManifest,
        'auction-settlement',
        'Settle the auction',
        'The auction uses one canonical settlement pass. At the signed end time, the driver validates all accepted bids together, selects the highest valid bid above reserve, promotes it into an order, and refreshes the escrow dashboard.',
        () => captureAuctionSettlement({ page, auction: introAuction, outDir, manifest: runManifest }),
      )
      await recordScene(
        runManifest,
        'order-release',
        'Release the order',
        'The order is funded, so release is available. Confirming it calls the real local E V M driver, which refetches the trade before it publishes the settled state.',
        () => captureOrderRelease({ page, outDir, manifest: runManifest }),
      )
      await recordScene(
        runManifest,
        'closing',
        'Closing',
        'Everything here used disposable local funds and can be reproduced from a cold clone.',
        () => showTitleCard(page, 'One reproducible marketplace snapshot', 'Local funds. Real drivers. Fail-closed actions. No public-chain value.', 5_000),
      )
    } else {
      await loginAsBuyer(page, options.baseUrl, outDir, runManifest)

      await captureOrder({
        page,
        baseUrl: options.baseUrl,
        listing: listing('evmUsdOrder'),
        label: 'order-usd-evm',
        relay: options.relay,
        runSince,
        ackState,
        outDir,
        manifest: runManifest,
      })
      await captureOrder({
        page,
        baseUrl: options.baseUrl,
        listing: listing('btcOrder'),
        label: 'order-btc-cashu',
        relay: options.relay,
        runSince,
        ackState,
        outDir,
        manifest: runManifest,
      })
      await captureBid({
        page,
        baseUrl: options.baseUrl,
        listing: listing('evmUsdBid'),
        label: 'bid-usd-evm',
        relay: options.relay,
        runSince,
        ackState,
        outDir,
        manifest: runManifest,
      })
      await captureBid({
        page,
        baseUrl: options.baseUrl,
        listing: listing('evmBtcBid'),
        label: 'bid-btc-evm',
        relay: options.relay,
        runSince,
        ackState,
        outDir,
        manifest: runManifest,
      })
      await captureBid({
        page,
        baseUrl: options.baseUrl,
        listing: listing('cashuBtcBid'),
        label: 'bid-btc-cashu',
        relay: options.relay,
        runSince,
        ackState,
        outDir,
        manifest: runManifest,
      })
      await captureEscrowDashboard({
        page,
        baseUrl: options.baseUrl,
        outDir,
        manifest: runManifest,
      })
    }
  } catch (error) {
    runError = serializeError(error)
    runManifest.error = runError
    try {
      await screenshot(page, outDir, runManifest, 'failure-state', 'Browser state when the demo capture failed.')
    } catch (screenshotError) {
      runManifest.pageErrors.push(`Unable to capture failure screenshot: ${
        screenshotError instanceof Error ? screenshotError.message : String(screenshotError)
      }`)
    }
  } finally {
    const video = page.video()
    await context.close()
    if (video) {
      const rawVideoPath = await video.path()
      const finalVideoPath = resolve(outDir, options.intro ? 'nmdk-intro-raw.webm' : 'marketplace-demo.webm')
      copyFileSync(rawVideoPath, finalVideoPath)
      runManifest.video = finalVideoPath
    }
    await browser.close()
    await stopDemoServer(docsProcess)
    await stopDemoServer(appProcess)
  }

  if (!runError) {
    const consoleFailures = runManifest.console.filter(message => message.type === 'error' || message.type === 'warning')
    const browserFailures = [
      ...runManifest.pageErrors.map(error => `page error: ${error}`),
      ...consoleFailures.map(message => `console.${message.type}: ${message.text}`),
    ]
    if (browserFailures.length > 0) {
      runError = serializeError(new Error(`Browser diagnostics were not clean:\n${browserFailures.join('\n')}`))
      runManifest.error = runError
    }
  }

  if (options.intro && !runError && runManifest.video) {
    try {
      runManifest.renderedVideo = await renderIntroVideo(runManifest.video, outDir)
      runManifest.narrationGuide = writeNarrationGuide(outDir, runManifest)
      runManifest.voiceover = await renderIntroVoiceover(runManifest.renderedVideo.path, outDir, runManifest)
    } catch (error) {
      runError = serializeError(error)
      runManifest.error = runError
    }
  }

  const finalAcks = await paymentAckEvents(options.relay, runSince)
  runManifest.finalAckCount = finalAcks.length
  runManifest.ackEvents = finalAcks.map(event => ({
    id: event.id,
    pubkey: event.pubkey,
    created_at: event.created_at,
  }))
  writeFileSync(resolve(outDir, 'manifest.json'), JSON.stringify(runManifest, null, 2))
  console.log(`Demo capture written to ${outDir}`)
  console.log(`Screenshots: ${runManifest.screenshots.length}`)
  console.log(`Payment ACKs since run start: ${runManifest.finalAckCount}`)
  if (runManifest.video) console.log(`Video: ${runManifest.video}`)
  if (runManifest.renderedVideo) console.log(`Silent intro: ${runManifest.renderedVideo.path}`)
  if (runManifest.voiceover) console.log(`Apple-voice intro: ${runManifest.voiceover.videoPath}`)
  if (runManifest.narrationGuide) console.log(`Narration guide: ${runManifest.narrationGuide}`)
  if (runError) {
    throw new Error(runError.message)
  }
}

export { renderIntroVoiceover }

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch(error => {
    console.error(error instanceof Error ? error.stack ?? error.message : String(error))
    process.exit(1)
  })
}
