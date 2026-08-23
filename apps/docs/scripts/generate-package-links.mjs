import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(appDir, '../..');
const outputFile = path.join(appDir, 'content/docs/packages.mdx');
const specificationsOutputFile = path.join(appDir, 'content/docs/specifications.mdx');

const packages = [
  {
    title: 'nostr-tools/marketplace',
    path: 'dependencies/nostr-tools',
    docsPath: 'docs/marketplace',
    description: 'Marketplace event builders, parsers, streams, runtime helpers, and session utilities.',
  },
  {
    title: 'Marketplace Driver Interface',
    path: 'dependencies/marketplace-driver-interface-ts',
    docsPath: 'docs',
    description: 'Shared TypeScript contracts for payment driver validation, proof params, and verified terms.',
  },
  {
    title: 'Marketplace EVM Contracts',
    path: 'dependencies/marketplace-evm-contracts',
    docsPath: 'docs',
    description: 'MultiEscrow Solidity source, ABI artifacts, generated TypeScript exports, and bytecode registry.',
  },
  {
    title: 'Marketplace EVM Driver',
    path: 'dependencies/marketplace-evm-ts',
    docsPath: 'docs',
    description: 'EVM escrow validation, account abstraction, Boltz swap orchestration, and recovery helpers.',
  },
  {
    title: 'Marketplace Cashu Driver',
    path: 'dependencies/marketplace-cashu-ts',
    docsPath: 'docs',
    description: 'Cashu escrow policies, proof validation, storage, seed derivation, and recovery helpers.',
  },
  {
    title: 'Marketplace Location Interface',
    path: 'dependencies/marketplace-location-interface-ts',
    docsPath: 'docs',
    description: 'Shared provider contracts for marketplace location and geospatial tag integrations.',
  },
  {
    title: 'Marketplace Location H3',
    path: 'dependencies/marketplace-location-h3-ts',
    docsPath: 'docs',
    description: 'H3-backed provider implementation for marketplace-ready geospatial tags.',
  },
];

function git(args, cwd = repoRoot) {
  return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
}

function githubBaseUrl(remote) {
  const ssh = remote.match(/^git@github\.com:(.+?)(?:\.git)?$/);
  if (ssh) return `https://github.com/${ssh[1]}`;

  const https = remote.match(/^https:\/\/github\.com\/(.+?)(?:\.git)?$/);
  if (https) return `https://github.com/${https[1]}`;

  return remote.replace(/\.git$/, '');
}

function packageDocUrl(pkg) {
  const cwd = path.join(repoRoot, pkg.path);
  const remote = git(['remote', 'get-url', 'origin'], cwd);
  const sha = git(['rev-parse', 'HEAD'], cwd);
  return `${githubBaseUrl(remote)}/tree/${sha}/${pkg.docsPath}`;
}

const cards = packages
  .map((pkg) => {
    const href = packageDocUrl(pkg);

    return `  <Card title="${pkg.title}" href="${href}">
    ${pkg.description}
  </Card>`;
  })
  .join('\n');

const body = `---
title: Package Docs
description: Documentation at the exact package commits pinned by this NMDK snapshot.
---

# Package Docs

NMDK owns the integration guide and local development workflow. Individual
packages own their getting-started docs and API references in their own
repositories. These immutable links point to the exact commits pinned by this
NMDK snapshot, so the documentation cannot silently drift to another release.

<Cards>
${cards}
</Cards>
`;

mkdirSync(path.dirname(outputFile), { recursive: true });
writeFileSync(outputFile, body);

const specifications = [
  ['Marketplace listing extension', 'dependencies/nips/marketplace-listing-nip', 'Listing payment, fulfillment, and marketplace metadata.'],
  ['Orders and settlement', 'dependencies/nips/order-nip', 'Order groups, participants, payment proofs, seed recovery, and settlement.'],
  ['Auctions', 'dependencies/nips/auction-nip', 'Auction creation, bids, deterministic ordering, and settlement.'],
  ['Arbitration services', 'dependencies/nips/arbiter-nip', 'Machine-readable arbitration policies, fees, and evidence.'],
  ['Accommodation profile', 'dependencies/nips/accommodation-nip', 'Accommodation-specific listing fields and constraints.'],
];

const specificationCards = specifications.map(([title, directory, description]) => {
  const cwd = path.join(repoRoot, directory);
  const remote = git(['remote', 'get-url', 'origin'], cwd);
  const sha = git(['rev-parse', 'HEAD'], cwd);
  const href = `${githubBaseUrl(remote)}/blob/${sha}/XX.md`;
  return `  <Card title="${title}" href="${href}">
    ${description}
  </Card>`;
}).join('\n');

const specificationsBody = `---
title: Protocol specifications
description: Normative marketplace drafts at the exact commits pinned by this snapshot.
---

# Protocol specifications

These immutable links expose every normative draft used by this NMDK snapshot.
Implementation behavior is checked against shared conformance vectors; copied
branch README files are not normative.

<Cards>
${specificationCards}
</Cards>
`;

writeFileSync(specificationsOutputFile, specificationsBody);
