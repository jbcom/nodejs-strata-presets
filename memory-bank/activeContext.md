# Active Context

## Current Focus
- Comprehensive preset system overhaul with parameterized templates
- Repository modernization (pnpm, biome, tsup, vitest)
- End-to-end testing with Playwright and image analysis

## Recent Decisions
- Replaced game-specific presets with generic parameterized templates
- Philosophy: Template × Variants × Themes = Unlimited Assets
- Added Vitest unit tests for all new preset modules
- Implemented Playwright E2E infrastructure with a dedicated viewer app
- Using ecosystem AI peer review workflows (/gemini, /q, @copilot)

## Session: 2025-12-29

### Completed
- [x] Fixed CI/CD workflow issues in `ci.yml` and `cd.yml`.
- [x] Migrated `tsup.config.ts` to use dynamic entry points via `globSync`.
- [x] Fixed broken imports from `@strata-game-library/core` across multiple files.
- [x] Updated `src/yuka.d.ts` with missing AI state machine and behavior types.
- [x] Verified build success with `pnpm run build`.
- [x] Refactored presets to be parameterized and generic
- [x] Added equipment presets (weapons, armor, backpacks) migrated from otter-elite-force (#13)
- [x] Added Playwright E2E tests and infrastructure (#18)
  - Created `tests/e2e/viewer` with Vite/React for rendering presets
  - Added `playwright.config.ts` and `tests/e2e/presets.spec.ts`
  - Integrated screenshot-based visual regression testing
- [x] Promoted PR #23 and PR #24 from Draft to Ready for Review
- [x] Requested AI peer reviews on all open PRs using ecosystem commands
- [x] Closed issue #18 (Playwright E2E tests)

### For Next Agent
- [ ] Monitor AI peer reviews on PR #23 and PR #24.
- [ ] Address any feedback from AI reviewers.
- [ ] Add NPC behavior presets (#21)
- [ ] Add environment presets (biomes, weather, time-of-day) (#17)
- [ ] Integrate with `@strata-game-library/model-synth` (#19)
- [ ] Update README.md with comprehensive E2E testing examples

## Key Files

| File | Purpose |
|------|---------|
| `src/creatures/quadruped.ts` | Main creature template |
| `src/equipment/index.ts` | Equipment template |
| `tests/e2e/presets.spec.ts` | E2E tests |
| `tests/e2e/viewer/main.tsx` | E2E viewer app |
| `playwright.config.ts` | Playwright configuration |
| `vite.config.e2e.ts` | E2E viewer Vite config |

## Open PRs

- #23: fix/issue-13 (Equipment presets) - READY
- #24: fix/issue-16 (Vehicle and mount presets) - READY
