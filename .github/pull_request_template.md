## Summary

<!-- What changes, and which package owns the behavior? -->

## Protocol and compatibility

- [ ] No wire behavior changes, or the normative draft and fixed vectors are updated.
- [ ] Backward compatibility and migration are documented.

## Fund and state safety

- [ ] No fund-moving behavior changes, or retry/crash/recovery/concurrency tests are included.
- [ ] Persisted fields were reviewed against the minimal-state allowlist.
- [ ] No secret or bearer value is added to events, logs, fixtures, or browser storage.

## Verification

- [ ] `npm test`
- [ ] `npm run test:packages`
- [ ] `npm run audit:production`
- [ ] `npm run demo:verify:fresh` for protocol, driver, orchestration, fixture, or demo changes
