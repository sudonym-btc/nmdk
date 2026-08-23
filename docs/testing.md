# Testing and reproducibility

`npm test` runs hermetic package builds, type checks, marketplace unit tests,
generated contract-artifact drift checks, documentation checks, and repository
policy checks. It uses a digest-pinned, one-shot Foundry container for Solidity
behavior/fuzz tests, but does not require long-running local services. It must
not probe incidental localhost services or skip tests because a service is
absent.

`npm run test:packages` packs every public package and installs all tarballs in
a blank consumer project. It rejects sibling `file:` dependencies and missing
build output.

`npm run test:integration` requires freshly reset Cashu/EVM/Lightning stacks.
Missing infrastructure is a failure. Fixtures use `NMDK_TEST_SEED`, fixed
protocol timestamps or an explicit test-clock input, isolated volumes, and
deterministic keys/IDs. The Cashu gate pays a real regtest invoice, executes a
NUT-11 refund, deliberately loses the accepted response, and restores the exact
outputs through the mint's NUT-09 endpoint. Focused financial tests cover
post-submission restart recovery, duplicate requests, malformed proofs,
malicious provider responses, held-invoice sequencing, and publication
recovery. New durable boundaries and multi-worker stores require a matching
crash or concurrency regression before release.

Container images and GitHub Actions are pinned by immutable digest/commit.
Updating a pin is a reviewed dependency change with a recorded test run.
