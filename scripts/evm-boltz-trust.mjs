const addressPattern = /^0x[0-9a-fA-F]{40}$/
const hashPattern = /^0x[0-9a-fA-F]{64}$/
const selectorPattern = /^0x[0-9a-fA-F]{8}$/
const supportedDecoders = new Set([
  'exact-input-v1',
  'erc20-approve-v1',
  'erc20-transfer-v1',
  'permit2-approve-v1',
  'uniswap-universal-router-v3-exact-in-v1',
])

function record(value, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${label} must be an object`)
  }
  return value
}

function exactKeys(value, allowed, label) {
  const unknown = Object.keys(value).find(key => !allowed.includes(key))
  if (unknown) throw new Error(`${label} has unknown field ${unknown}`)
}

function nonZeroHex(value, pattern, zeroPattern, label) {
  if (typeof value !== 'string' || !pattern.test(value) || zeroPattern.test(value)) {
    throw new Error(`${label} is not a non-zero ${pattern === addressPattern ? 'address' : 'hash'}`)
  }
  return value
}

function trustedContract(value, label) {
  const parsed = record(value, label)
  exactKeys(parsed, ['address', 'runtimeBytecodeHash'], label)
  return {
    address: nonZeroHex(parsed.address, addressPattern, /^0x0{40}$/i, `${label}.address`),
    runtimeBytecodeHash: nonZeroHex(
      parsed.runtimeBytecodeHash,
      hashPattern,
      /^0x0{64}$/i,
      `${label}.runtimeBytecodeHash`,
    ),
  }
}

function trustedTarget(value, label) {
  const parsed = record(value, label)
  exactKeys(parsed, ['address', 'runtimeBytecodeHash', 'functions', 'maxValue'], label)
  if (!Array.isArray(parsed.functions) || parsed.functions.length === 0) {
    throw new Error(`${label}.functions must not be empty`)
  }
  const selectors = new Set()
  const functions = parsed.functions.map((value, index) => {
    const functionLabel = `${label}.functions[${index}]`
    const fn = record(value, functionLabel)
    exactKeys(fn, ['selector', 'decoder'], functionLabel)
    if (typeof fn.selector !== 'string' || !selectorPattern.test(fn.selector)) {
      throw new Error(`${functionLabel}.selector is not an exact four-byte selector`)
    }
    if (typeof fn.decoder !== 'string' || !supportedDecoders.has(fn.decoder)) {
      throw new Error(`${functionLabel}.decoder is unsupported`)
    }
    const selector = fn.selector.toLowerCase()
    if (selectors.has(selector)) throw new Error(`${label} contains duplicate selector ${fn.selector}`)
    selectors.add(selector)
    return { selector: fn.selector, decoder: fn.decoder }
  })
  const contract = trustedContract({
    address: parsed.address,
    runtimeBytecodeHash: parsed.runtimeBytecodeHash,
  }, label)
  let maxValue
  if (parsed.maxValue !== undefined) {
    if (typeof parsed.maxValue !== 'string' || !/^(0|[1-9][0-9]*)$/.test(parsed.maxValue)) {
      throw new Error(`${label}.maxValue must be a non-negative decimal string`)
    }
    maxValue = BigInt(parsed.maxValue)
  }
  return { ...contract, functions, ...(maxValue !== undefined ? { maxValue } : {}) }
}

/** Validate and normalize deployment-generated trust roots. Invalid input fails closed. */
export function requireGeneratedEvmBoltzTrust(value, label = 'EVM stack boltzTrust') {
  const parsed = record(value, label)
  exactKeys(parsed, ['erc20Swap', 'dexCallTargets'], label)
  if (!Array.isArray(parsed.dexCallTargets) || parsed.dexCallTargets.length === 0) {
    throw new Error(`${label}.dexCallTargets must not be empty`)
  }
  const targets = new Set()
  const dexCallTargets = parsed.dexCallTargets.map((target, index) => {
    const normalized = trustedTarget(target, `${label}.dexCallTargets[${index}]`)
    const address = normalized.address.toLowerCase()
    if (targets.has(address)) throw new Error(`${label} contains duplicate target ${normalized.address}`)
    targets.add(address)
    return normalized
  })
  return {
    erc20Swap: trustedContract(parsed.erc20Swap, `${label}.erc20Swap`),
    dexCallTargets,
  }
}
