import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = 'dependencies/marketplace-driver-interface-ts/schemas/amount.schema.json'
const header = `Generated from ${source}. Do not edit.`

export function generateAmountBindings({ check = false } = {}) {
  const schema = JSON.parse(readFileSync(resolve(root, source), 'utf8'))
  const fields = Object.entries(schema.properties)
  // This generator deliberately supports only the portable scalar wire model.
  // New schema constructs must have explicit semantics in both runtimes.
  if (schema.type !== 'object' || schema.title !== 'MarketplaceAmount' ||
      fields.some(([, field]) => !['string', 'integer'].includes(field.type))) {
    throw new Error('Unsupported marketplace amount schema')
  }
  const required = name => schema.required.includes(name)
  const tsType = field => field.type === 'integer' ? 'number' : 'string'
  const dartType = (name, field) => name === 'value' ? 'BigInt' : field.type === 'integer' ? 'int' : 'String'
  const integerPattern = JSON.stringify(schema.properties.value.pattern)

  const ts = `// ${header}
export type MarketplaceAmount = {
${fields.map(([name, field]) => `  ${name}${required(name) ? '' : '?'}: ${tsType(field)}`).join('\n')}
}

const integerUnitsPattern = new RegExp(${integerPattern})

export function parseIntegerUnits(value: unknown): bigint {
  if (typeof value !== 'string' || integerUnitsPattern.exec(value)?.[0] !== value) {
    throw new TypeError('Amount value must be a canonical integer-unit string')
  }
  return BigInt(value)
}

export function parseMarketplaceAmount(value: unknown): MarketplaceAmount {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new TypeError('Invalid marketplace amount')
  const record = value as Record<string, unknown>
${fields.map(([name, field]) => {
    const v = `record.${name}`
    const conditions = field.type === 'integer'
      ? [`typeof ${v} !== 'number'`, `!Number.isSafeInteger(${v})`, `${v} < ${field.minimum}`, `${v} > ${field.maximum}`]
      : [`typeof ${v} !== 'string'`, ...(field.minLength ? [`${v}.length < ${field.minLength}`] : [])]
    return `  if (${required(name) ? '' : `${v} !== undefined && (`}${conditions.join(' || ')}${required(name) ? '' : ')'}) throw new TypeError('Invalid amount ${name}')`
  }).join('\n')}
  parseIntegerUnits(record.value)
  return {
${fields.map(([name]) => required(name) ? `    ${name}: record.${name},` : `    ...(record.${name} === undefined ? {} : { ${name}: record.${name} }),`).join('\n')}
  }
}
`

  const dart = `// ${header}
final _integerUnitsPattern = RegExp(r${integerPattern});

BigInt parseIntegerUnits(Object? value) {
  if (value is! String || _integerUnitsPattern.stringMatch(value) != value) {
    throw FormatException('Amount value must be a canonical integer-unit string', value);
  }
  return BigInt.parse(value);
}

class MarketplaceAmount {
${fields.map(([name, field]) => `  final ${dartType(name, field)}${required(name) ? '' : '?'} ${name};`).join('\n')}

  const MarketplaceAmount({
${fields.map(([name]) => `    ${required(name) ? 'required ' : ''}this.${name},`).join('\n')}
  });

  factory MarketplaceAmount.fromJson(Map<String, dynamic> json) {
${fields.map(([name]) => `    final ${name} = json['${name}'];`).join('\n')}
${fields.filter(([name]) => name !== 'value').map(([name, field]) => {
    const conditions = [`${name} is! ${dartType(name, field)}`, ...(field.type === 'integer' ? [`${name} < ${field.minimum}`, `${name} > ${field.maximum}`] : field.minLength ? [`${name}.length < ${field.minLength}`] : [])]
    return `    if (${required(name) ? '' : `json.containsKey('${name}') && (`}${conditions.join(' || ')}${required(name) ? '' : ')'}) {\n      throw FormatException('Invalid amount ${name}', ${name});\n    }`
  }).join('\n')}
    return MarketplaceAmount(
${fields.map(([name]) => `      ${name}: ${name === 'value' ? 'parseIntegerUnits(value)' : name},`).join('\n')}
    );
  }

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{
${fields.map(([name]) => `      ${required(name) ? '' : `if (${name} != null) `}'${name}': ${name}${name === 'value' ? '.toString()' : ''},`).join('\n')}
    };
    MarketplaceAmount.fromJson(json);
    return json;
  }
}
`

  for (const [relativePath, contents] of [
    ['dependencies/marketplace-driver-interface-ts/src/amount.generated.ts', ts],
    ['packages/marketplace_models/lib/src/amount.generated.dart', dart],
  ]) {
    const path = resolve(root, relativePath)
    if (check) {
      if (readFileSync(path, 'utf8') !== contents) throw new Error(`Stale generated amount: ${relativePath}`)
    } else {
      mkdirSync(dirname(path), { recursive: true })
      writeFileSync(path, contents)
    }
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateAmountBindings({ check: process.argv.includes('--check') })
}
