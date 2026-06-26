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
const defaultRelay = process.env.NMDK_DEMO_CAPTURE_RELAY ?? 'ws://127.0.0.1:18080'
const defaultOutRoot = resolve(root, 'artifacts/marketplace-demo')
const paymentAckKind = 32124

const targets = {
  evmUsdOrder: { d: 'nmdk-sellerEvm-usd', title: '2014 Toyota Hilux - USD' },
  btcOrder: { d: 'nmdk-sellerCashu-btc', title: 'Second-hand Cargo Bike - BTC' },
  evmUsdBid: { d: 'nmdk-sellerEvm-usd', title: '2014 Toyota Hilux - USD', bidAmount: '50' },
  evmBtcBid: { d: 'nmdk-sellerEvm-btc', title: 'EVM Escrow Loft - BTC', bidAmount: '0.0006' },
  cashuBtcBid: { d: 'nmdk-sellerCashu-btc', title: 'Second-hand Cargo Bike - BTC', bidAmount: '0.0006' },
  negotiation: { d: 'nmdk-sellerBoth-btc', title: '1987 Land Cruiser Project - BTC', amount: '0.016' },
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
  --skip-stack-check    Skip Docker arbiter container checks.
  --help                Print this help.

The full local NMDK stack must be running. If the Vite demo is not running,
this script starts it and stops it before exiting.
`.trim()
}

function parseArgs(argv) {
  const options = {
    baseUrl: defaultBaseUrl,
    relay: defaultRelay,
    outDir: undefined,
    headed: false,
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
  if (await canFetch(baseUrl)) return undefined

  const child = spawn('npm', ['run', 'demo'], {
    cwd: root,
    env: { ...process.env, BROWSER: 'none' },
    stdio: 'inherit',
  })
  await waitForApp(baseUrl)
  return child
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
  const deadline = Date.now() + 120_000
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

async function clickDemoControl(locator, label) {
  await waitUntilEnabled(locator, label)
  await locator.evaluate(element => element.click())
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

async function openSidebarLink(page, name) {
  await waitForMarketplaceReady(page, `open ${name}`)
  await clickDemoControl(page.getByRole('link', { name }).first(), `${name} link`)
  await page.getByRole('heading', { name }).waitFor({ state: 'visible', timeout: 60_000 })
}

async function selectOptionalRentalDates(page, label) {
  const datePicker = page.locator('#checkout-date-range')
  if (await datePicker.count() === 0) return false
  await clickDemoControl(datePicker, `${label} date picker`)
  const calendar = page.locator('[data-slot="calendar"]').first()
  await calendar.waitFor({ state: 'visible', timeout: 30_000 })
  await clickDemoControl(calendar.locator('button[data-day="7/2/2026"]').first(), `${label} start date`)
  await clickDemoControl(calendar.locator('button[data-day="7/5/2026"]').first(), `${label} end date`)
  await page.keyboard.press('Escape')
  await datePicker.filter({ hasText: 'Jul 02, 2026 - Jul 05, 2026' }).waitFor({
    state: 'visible',
    timeout: 30_000,
  })
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
  await page.screenshot({ path, fullPage: true })
  manifest.screenshots.push({ name, note, path })
  return path
}

async function loginAsBuyer(page, baseUrl, outDir, manifest) {
  await page.goto(`${baseUrl}/login`)
  await clickDemoControl(page.getByTestId('demo-login-buyer'), 'buyer demo login')
  await page.getByText('2014 Toyota Hilux - USD').waitFor({ state: 'visible', timeout: 60_000 })
  await waitForMarketplaceReady(page, 'login')
  await screenshot(page, outDir, manifest, '01-login-listings', 'Logged in as the deterministic buyer and loaded seeded listings.')
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
}) {
  await page.goto(`${baseUrl}/listing/${listing.id}`)
  await waitForMarketplaceReady(page, `${label} page`)
  await page.getByTestId('listing-detail').waitFor({ state: 'visible', timeout: 60_000 })
  await page.getByRole('heading', { name: listing.title }).waitFor({ state: 'visible', timeout: 60_000 })
  await selectOptionalRentalDates(page, label)
  await screenshot(page, outDir, manifest, `${label}-listing`, `Opened ${listing.title} before checkout.`)

  await clickDemoControl(page.getByTestId('checkout-button'), `${label} checkout`)
  const continueButton = page.getByTestId('checkout-continue-button')
  await waitUntilEnabledWithRefresh(page, continueButton, `${label} checkout continue`)
  await screenshot(page, outDir, manifest, `${label}-arbiter`, `Selected the seeded arbitration route for ${listing.title}.`)
  await clickDemoControl(continueButton, `${label} checkout continue`)

  const invoiceInput = await waitForInvoiceInput(page, label)
  const invoice = await invoiceInput.inputValue()
  await screenshot(page, outDir, manifest, `${label}-invoice`, `Checkout produced a Bolt11 invoice for ${listing.title}.`)
  await payInvoice(invoice)

  await page.getByTestId('checkout-done-button').waitFor({ state: 'visible', timeout: 180_000 })
  await screenshot(page, outDir, manifest, `${label}-published`, `Order and payment proof published for ${listing.title}.`)
  await clickDemoControl(page.getByTestId('checkout-done-button'), `${label} checkout done`)

  ackState.expected += 1
  const ackEvents = await waitForAckCount(relay, runSince, ackState.expected, label)
  await openSidebarLink(page, 'My Orders')
  await page.getByTestId('order-card').first().waitFor({ state: 'visible', timeout: 60_000 })
  await page.getByTestId('payment-lifecycles').first().waitFor({ state: 'visible', timeout: 60_000 })
  await screenshot(page, outDir, manifest, `${label}-ack`, `My Orders shows payment lifecycle after arbiter ACK for ${listing.title}.`)

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
}) {
  await page.goto(`${baseUrl}/listing/${listing.id}`)
  await waitForMarketplaceReady(page, `${label} page`)
  await page.getByTestId('listing-detail').waitFor({ state: 'visible', timeout: 60_000 })
  await page.getByRole('heading', { name: listing.title }).waitFor({ state: 'visible', timeout: 60_000 })
  await page.getByTestId('place-bid-button').waitFor({ state: 'visible', timeout: 60_000 })
  await selectOptionalRentalDates(page, label)
  await screenshot(page, outDir, manifest, `${label}-listing`, `Opened ${listing.title} before bidding.`)

  await clickDemoControl(page.getByTestId('place-bid-button'), `${label} place bid`)
  if (listing.bidAmount) {
    const amountInput = page.getByTestId('bid-amount-input')
    await amountInput.waitFor({ state: 'visible', timeout: 30_000 })
    await amountInput.fill(listing.bidAmount)
  }
  const bidButton = page.getByTestId('bid-continue-button')
  await waitUntilEnabledWithRefresh(page, bidButton, `${label} bid continue`, 120_000)
  await screenshot(page, outDir, manifest, `${label}-bid-dialog`, `Prepared a funded bid for ${listing.title}.`)
  await clickDemoControl(bidButton, `${label} bid continue`)

  const invoiceInput = await waitForInvoiceInput(page, label)
  const invoice = await invoiceInput.inputValue()
  await screenshot(page, outDir, manifest, `${label}-invoice`, `Bid produced a Bolt11 invoice for ${listing.title}.`)
  await payInvoice(invoice)

  await page.getByTestId('bid-done-button').waitFor({ state: 'visible', timeout: 180_000 })
  await screenshot(page, outDir, manifest, `${label}-published`, `Bid and payment proof published for ${listing.title}.`)
  await clickDemoControl(page.getByTestId('bid-done-button'), `${label} bid done`)

  ackState.expected += 1
  const ackEvents = await waitForAckCount(relay, runSince, ackState.expected, label)
  await page.goto(`${baseUrl}/listing/${listing.id}`)
  await waitForMarketplaceReady(page, `${label} ack page`)
  await page.getByTestId('auction-bid-chain-toggle').first().waitFor({ state: 'visible', timeout: 90_000 })
  await clickDemoControl(page.getByTestId('auction-bid-chain-toggle').first(), `${label} bid chain toggle`)
  await page.getByTestId('payment-lifecycle-toggle').first().waitFor({ state: 'visible', timeout: 60_000 })
  await clickDemoControl(page.getByTestId('payment-lifecycle-toggle').first(), `${label} lifecycle toggle`)
  await page.getByText('Payment ACK').first().waitFor({ state: 'visible', timeout: 60_000 })
  await screenshot(page, outDir, manifest, `${label}-ack`, `Expanded bid chain lifecycle after arbiter ACK for ${listing.title}.`)

  manifest.flows.push({
    label,
    type: 'bid',
    listing: listing.title,
    invoicePrefix: invoice.slice(0, 24),
    ackCountAfter: ackEvents.length,
    latestAckId: ackEvents.at(-1)?.id,
  })
}

async function captureNegotiation({ page, baseUrl, listing, amount, outDir, manifest }) {
  await page.goto(`${baseUrl}/listing/${listing.id}`)
  await waitForMarketplaceReady(page, 'negotiation page')
  await page.getByTestId('listing-detail').waitFor({ state: 'visible', timeout: 60_000 })
  await page.getByRole('heading', { name: listing.title }).waitFor({ state: 'visible', timeout: 60_000 })
  await screenshot(page, outDir, manifest, 'negotiation-listing', `Opened ${listing.title} before sending a negotiation offer.`)

  await clickDemoControl(page.getByTestId('negotiate-button'), 'open negotiation dialog')
  const amountInput = page.getByTestId('negotiation-amount-input')
  await amountInput.waitFor({ state: 'visible', timeout: 30_000 })
  await amountInput.fill(amount)
  await screenshot(page, outDir, manifest, 'negotiation-offer', `Entered a ${amount} offer for ${listing.title}.`)
  await clickDemoControl(page.getByTestId('send-offer-button'), 'send negotiation offer')
  await page.getByTestId('send-offer-button').waitFor({ state: 'hidden', timeout: 60_000 })
  await openSidebarLink(page, 'My Orders')
  await page.getByTestId('order-card').first().waitFor({ state: 'visible', timeout: 60_000 })
  await screenshot(page, outDir, manifest, 'negotiation-my-orders', `My Orders after sending the negotiation offer for ${listing.title}.`)

  manifest.flows.push({
    label: 'negotiation',
    type: 'negotiation',
    listing: listing.title,
    amount,
  })
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage())
    return
  }

  const id = runId()
  const outDir = options.outDir ?? resolve(defaultOutRoot, id)
  mkdirSync(outDir, { recursive: true })

  const stack = options.skipStackCheck ? [] : requireArbitersRunning()
  const appProcess = await ensureDemoServer(options.baseUrl)
  const manifestSeed = readSeedManifest()
  const runSince = Math.floor(Date.now() / 1000) - 5
  const initialAcks = await paymentAckEvents(options.relay, runSince)

  const runManifest = {
    runId: id,
    generatedAt: new Date().toISOString(),
    baseUrl: options.baseUrl,
    relay: options.relay,
    runSince,
    stack,
    screenshots: [],
    flows: [],
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

  const browser = await chromium.launch({ headless: !options.headed })
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
    recordVideo: {
      dir: outDir,
      size: { width: 1440, height: 1000 },
    },
    viewport: { width: 1440, height: 1000 },
  })
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
    await captureNegotiation({
      page,
      baseUrl: options.baseUrl,
      listing: listing('negotiation'),
      amount: targets.negotiation.amount,
      outDir,
      manifest: runManifest,
    })
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
      const finalVideoPath = resolve(outDir, 'marketplace-demo.webm')
      copyFileSync(rawVideoPath, finalVideoPath)
      runManifest.video = finalVideoPath
    }
    await browser.close()
    if (appProcess) appProcess.kill('SIGTERM')
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
  if (runError) {
    throw new Error(runError.message)
  }
}

main().catch(error => {
  console.error(error instanceof Error ? error.stack ?? error.message : String(error))
  process.exit(1)
})
