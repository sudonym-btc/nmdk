# Local demo and cold-start acceptance

## Start in two steps

After installing Node 24/25, npm 11, Bun 1.3.14, Git, Docker Engine, and Docker
Compose v2, run:

```sh
git clone --recurse-submodules https://github.com/sudonym-btc/nmdk.git && cd nmdk
npm run demo:quickstart
```

Open <http://127.0.0.1:5178>. The command reproduces the root lockfile install,
starts every disposable service and arbiter, writes local-only application
configuration, publishes deterministic fixtures, and starts Vite. It does not
alter the host certificate trust store. Stop Vite with `Ctrl-C`; stop services
with `npm run down`.

## Walkthrough

| Identity | Location | What to verify |
| --- | --- | --- |
| Buyer | Listings and listing detail | Browse seeded assets, check out an order, place an auction bid, or negotiate. |
| Buyer | My Orders | Inspect order, bid, and payment-event lifecycles after arbiter acknowledgement. |
| Arbiter - EVM | Escrow → Dashboard | See only orders and auction bids naming this arbiter, current validation/driver state, and actions the driver currently permits. |

The login choices, balances, mints, chains, invoices, and relay events are local
fixtures. They are not real accounts or funds.

To exercise a real driver-backed dashboard action, the launcher copies the
generated disposable Anvil arbiter key into the ignored, mode-`0600` app
`.env.local`. The browser accepts it only in Vite development mode on loopback
or `*.marketplace.test`, and only for the matching seeded Nostr arbiter. Never
use this mechanism for a production escrow; production settlement keys belong
in a server-side signer.

## Record the deterministic flow

After bootstrap, this command resets disposable state and records representative
buyer payment flows plus the escrow-dashboard walkthrough:

```sh
npm run demo:capture:fresh
```

It installs the Playwright Chromium revision from the root lockfile, starts the
stack and an isolated Vite server on `127.0.0.1:15178`, pays the local invoices,
waits for payment acknowledgements,
opens `/escrow` as `arbiterEvm`, and fails unless a participating record has an
attached enabled driver-backed action. Screenshots, video, console/page errors,
flow results, record/action counts, and ACK IDs are written under
`artifacts/marketplace-demo/<run-id>/`.

The automation covers funded USD/BTC orders, EVM/Cashu auction bids, and the
escrow dashboard. Use the manual walkthrough above for negotiation and broader
navigation checks.

## Record the developer introduction

Generate the narration-ready introduction video with:

```sh
npm run demo:intro:fresh
```

This uses the same real local drivers as the acceptance capture, but records a
shorter story at 1080p: the documentation site, one funded order, one funded
auction bid, an escrow release, and canonical whole-auction settlement. macOS's
built-in `Samantha` voice reads the bundled explanatory script, so producing the
placeholder voice-over is free and does not send text to an external service.
The output directory contains the voiced MP4, a silent 1080p master, the
standalone voice track, per-scene AIFF files, raw WebM recording, screenshots,
scene timestamps, and the complete script under `artifacts/intro-video/<run-id>/`.

To record your own version later, read `narration-guide.md`, save the recording
beside the silent master as `my-voiceover.wav`, and run the one-line `ffmpeg`
replacement command at the top of the guide. It copies the already-rendered
picture without re-encoding it. Set `NMDK_DEMO_CAPTURE_VOICE` or
`NMDK_DEMO_CAPTURE_VOICE_RATE` to audition another installed Apple voice or pace.

## Required gate for major changes

Run `npm run demo:verify:fresh` for changes to protocol behavior, drivers,
settlement, stack orchestration, seeded fixtures, or the demo UI. It performs
bootstrap, `npm test`, a destructive cold reset/start, the complete integration
matrix, and the browser recording in one command. An exit trap stops services
after both success and failure. Pull-request CI runs the same gate from a fresh
recursive checkout and uploads the capture evidence.

Set `NMDK_DEMO_VERIFY_KEEP_STACK=1` only while diagnosing a local failure. A
normal retry should begin with the default cleanup behavior. On Linux,
Playwright may request `sudo` once to install Chromium system libraries.

If startup reports a fixed-port conflict, run `npm run down`, stop any unrelated
process using the port listed in the root README, and retry.
