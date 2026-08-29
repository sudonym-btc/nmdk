# Contributing

## Start from the pinned snapshot

1. Install Node 24, npm 11.6.2, Bun 1.3.14, Git, Docker, and Docker Compose.
2. Run `./scripts/bootstrap.sh`.
3. Run `npm test` before editing.

The root `package-lock.json` is authoritative for aggregate development and CI.
A package-local lockfile is authoritative only for that package's standalone
release workflow. When a dependency changes, update both locks in the same
change and verify the root workspace first; never fall back from `npm ci` to an
unlocked install in automation.

Changes belong in the package that owns the behavior. Commit package changes
first, then update the aggregate submodule pointer in a separate NMDK commit.
Never mix unrelated pointer updates.

Protocol-visible behavior requires:

- an updated normative draft;
- fixed-key and fixed-time positive and negative vectors;
- implementation tests in every affected client or driver;
- an explicit compatibility and migration decision.

Fund-moving behavior additionally requires retry, crash, concurrency,
recovery, and secret-erasure tests. Tests must not use wall-clock identifiers,
unseeded randomness, shared persistent volumes, or optional infrastructure
skips.

Run `npm test`, `npm run test:packages`, and `npm run audit:production` for all
pull requests. Run `npm run test:integration` against freshly reset stacks for
changes to drivers, settlement, contracts, or runtime orchestration.

Major changes to the protocol, drivers, stack orchestration, seeded demo, or
marketplace UI must pass `npm run demo:verify:fresh`. This is the destructive,
clean-state acceptance rehearsal: it reinstalls the pinned recursive workspace,
removes disposable volumes, cold-starts all services, runs hermetic and
integration tests, records the complete buyer and arbiter-dashboard flows, and
tears the stack down. Pull-request CI runs the same command from a fresh clone.
