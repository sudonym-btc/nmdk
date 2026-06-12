import { getPublicKey } from 'nostr-tools/pure'

export const localDevPrivateKeys = Object.freeze({
  buyer: '0000000000000000000000000000000000000000000000000000000000000001',
  sellerOpen: '0000000000000000000000000000000000000000000000000000000000000101',
  sellerEvm: '0000000000000000000000000000000000000000000000000000000000000102',
  sellerCashu: '0000000000000000000000000000000000000000000000000000000000000103',
  sellerBoth: '0000000000000000000000000000000000000000000000000000000000000104',
  arbiterEvm: '0000000000000000000000000000000000000000000000000000000000000201',
  arbiterCashu: '0000000000000000000000000000000000000000000000000000000000000202',
  arbiterBoth: '0000000000000000000000000000000000000000000000000000000000000203',
})

export function hexToBytes(hex) {
  const normalized = hex.startsWith('0x') ? hex.slice(2) : hex
  if (!/^[0-9a-fA-F]{64}$/.test(normalized)) throw new Error(`Invalid 32-byte hex value: ${hex}`)
  return new Uint8Array(normalized.match(/../g).map(byte => Number.parseInt(byte, 16)))
}

export function localDevAccount(id) {
  const privateKey = localDevPrivateKeys[id]
  if (!privateKey) throw new Error(`Unknown local dev account: ${id}`)
  return {
    id,
    privateKey,
    pubkey: getPublicKey(hexToBytes(privateKey)),
  }
}

export const localDevAccounts = Object.freeze(
  Object.fromEntries(Object.keys(localDevPrivateKeys).map(id => [id, localDevAccount(id)])),
)
