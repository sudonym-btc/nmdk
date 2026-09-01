import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, test } from 'node:test'
import { fileURLToPath } from 'node:url'

const configPath = fileURLToPath(new URL('../docker/marketplace-development/nginx.conf', import.meta.url))
const config = readFileSync(configPath, 'utf8')

function serverBlock(hostname) {
  const start = config.indexOf(`server_name ${hostname};`)
  assert.notEqual(start, -1, `missing nginx server for ${hostname}`)
  const end = config.indexOf('\n  server {', start)
  return config.slice(start, end === -1 ? undefined : end)
}

describe('development proxy', () => {
  for (const hostname of ['mint.cashu.marketplace.test', 'mint-usd.cashu.marketplace.test']) {
    test(`${hostname} preserves NUT-17 websocket upgrades`, () => {
      const block = serverBlock(hostname)
      assert.match(block, /proxy_set_header Upgrade \$http_upgrade;/)
      assert.match(block, /proxy_set_header Connection \$connection_upgrade;/)
    })
  }
})
