import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(appDir, '../..');
const referenceDir = path.join(appDir, 'content/docs/reference');
const typedocBin = [path.join(appDir, 'node_modules/.bin/typedoc'), path.join(repoRoot, 'node_modules/.bin/typedoc')].find(
  (candidate) => existsSync(candidate),
);

const targets = [
  {
    id: 'nostr-tools-marketplace',
    title: 'nostr-tools/marketplace',
    description: 'Generated API reference for the nostr-tools marketplace export.',
    tsconfig: 'dependencies/nostr-tools/tsconfig.json',
    entryPoints: ['dependencies/nostr-tools/marketplace.ts'],
  },
  {
    id: 'marketplace-evm',
    title: 'Marketplace EVM Driver',
    description: 'Generated API reference for the EVM marketplace driver.',
    tsconfig: 'dependencies/marketplace-evm-ts/tsconfig.json',
    entryPoints: ['dependencies/marketplace-evm-ts/src/index.ts'],
  },
  {
    id: 'marketplace-cashu',
    title: 'Marketplace Cashu Driver',
    description: 'Generated API reference for the Cashu marketplace driver.',
    tsconfig: 'dependencies/marketplace-cashu-ts/tsconfig.json',
    entryPoints: ['dependencies/marketplace-cashu-ts/src/index.ts'],
  },
];

const sectionTitles = new Map([
  ['classes', 'Classes'],
  ['enumerations', 'Enumerations'],
  ['functions', 'Functions'],
  ['interfaces', 'Interfaces'],
  ['type-aliases', 'Type Aliases'],
  ['variables', 'Variables'],
]);

function json(file, data) {
  writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function yamlString(value) {
  return JSON.stringify(value);
}

function walk(dir, predicate) {
  const files = [];

  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...walk(fullPath, predicate));
    } else if (!predicate || predicate(fullPath)) {
      files.push(fullPath);
    }
  }

  return files;
}

function firstHeading(markdown, fallback) {
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return heading || fallback;
}

function withFrontmatter(markdown, title, description) {
  if (markdown.startsWith('---\n')) return markdown;

  return `---\ntitle: ${yamlString(title)}\ndescription: ${yamlString(description)}\nfull: true\n---\n\n${markdown}`;
}

function rewriteLocalMarkdownLinks(markdown, file, outDir, target) {
  return markdown.replace(/\]\((?![a-z][a-z0-9+.-]*:|\/|#)([^)#]+?\.md)(#[^)]+)?\)/gi, (match, href, hash = '') => {
    const resolved = path.resolve(path.dirname(file), href);
    const relative = path.relative(outDir, resolved);

    if (relative.startsWith('..')) return match;

    const route = relative.replace(/\\/g, '/').replace(/\.md$/, '');
    return `](/docs/reference/${target.id}/${route}${hash})`;
  });
}

function normalizeGeneratedMarkdown(outDir, target) {
  const readme = path.join(outDir, 'README.md');
  const index = path.join(outDir, 'index.md');

  if (existsSync(readme)) {
    if (existsSync(index)) rmSync(index);
    renameSync(readme, index);
  }

  for (const file of walk(outDir, (entry) => entry.endsWith('.md'))) {
    const markdown = readFileSync(file, 'utf8');
    const isIndex = file === index;
    const title = isIndex ? target.title : firstHeading(markdown, target.title);
    const description = isIndex ? target.description : `${title} in ${target.title}.`;
    const linked = rewriteLocalMarkdownLinks(markdown, file, outDir, target);

    writeFileSync(file, withFrontmatter(linked, title, description));
  }
}

function sortPages(names) {
  const preferred = ['index', 'classes', 'interfaces', 'type-aliases', 'enumerations', 'functions', 'variables'];
  return names.sort((a, b) => {
    const ai = preferred.indexOf(a);
    const bi = preferred.indexOf(b);

    if (ai !== -1 || bi !== -1) {
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    }

    return a.localeCompare(b);
  });
}

function writeGeneratedMeta(outDir, target) {
  const pages = [];

  for (const entry of readdirSync(outDir)) {
    const fullPath = path.join(outDir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      const childPages = readdirSync(fullPath)
        .filter((file) => file.endsWith('.md'))
        .map((file) => path.basename(file, '.md'))
        .sort((a, b) => a.localeCompare(b));

      json(path.join(fullPath, 'meta.json'), {
        title: sectionTitles.get(entry) || entry,
        pages: childPages,
      });
      pages.push(entry);
    } else if (entry === 'index.md') {
      pages.push('index');
    }
  }

  json(path.join(outDir, 'meta.json'), {
    title: target.title,
    pages: sortPages(pages),
  });
}

function runTypeDoc(target) {
  const outDir = path.join(referenceDir, target.id);

  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  const args = [
    '--plugin',
    'typedoc-plugin-markdown',
    '--tsconfig',
    target.tsconfig,
    '--name',
    target.title,
    '--out',
    outDir,
    '--readme',
    'none',
    '--githubPages',
    'false',
    '--hideBreadcrumbs',
    'true',
    '--hidePageHeader',
    'true',
    ...target.entryPoints,
  ];

  const result = spawnSync(typedocBin, args, {
    cwd: repoRoot,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }

  normalizeGeneratedMarkdown(outDir, target);
  writeGeneratedMeta(outDir, target);
}

if (!typedocBin) {
  console.error('TypeDoc was not found in the docs workspace or repository root. Run npm install from the repository root first.');
  process.exit(1);
}

mkdirSync(referenceDir, { recursive: true });

for (const target of targets) {
  runTypeDoc(target);
}

json(path.join(referenceDir, 'meta.json'), {
  title: 'API Reference',
  pages: ['index', ...targets.map((target) => target.id)],
});
