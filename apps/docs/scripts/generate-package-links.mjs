import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(appDir, '../..');
const outputFile = path.join(appDir, 'content/docs/packages.mdx');

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

function githubPagesUrl(remote) {
  const baseUrl = githubBaseUrl(remote);
  const match = baseUrl.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)$/);

  if (!match) return null;

  return `https://${match[1]}.github.io/${match[2]}/`;
}

function packageDocUrl(pkg) {
  const cwd = path.join(repoRoot, pkg.path);
  const remote = git(['remote', 'get-url', 'origin'], cwd);
  const pagesUrl = githubPagesUrl(remote);

  if (pagesUrl) return pagesUrl;

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
description: Links to package-owned GitHub Pages documentation sites.
---

# Package Docs

NMDK owns the integration guide and local development workflow. Individual
packages own their getting-started docs and API references in their own
repositories. These links point to the rendered GitHub Pages docs for each
package.

<Cards>
${cards}
</Cards>
`;

mkdirSync(path.dirname(outputFile), { recursive: true });
writeFileSync(outputFile, body);
