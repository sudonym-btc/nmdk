import { createMDX } from 'fumadocs-mdx/next';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const withMDX = createMDX();
const appDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(appDir, '../..');

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  turbopack: {
    root: repoRoot,
  },
};

export default withMDX(config);
