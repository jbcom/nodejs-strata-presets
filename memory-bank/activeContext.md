# Active Context

## Current Focus
- Comprehensive preset system overhaul with parameterized templates
- Repository modernization (pnpm, biome, tsup, vitest)
- End-to-end testing with Playwright and image analysis
- Continuous deployment of documentation and demo viewer

## Recent Decisions
- Replaced game-specific presets with generic parameterized templates
- Philosophy: Template × Variants × Themes = Unlimited Assets
- Added Vitest unit tests for all new preset modules
- Implemented Playwright E2E infrastructure with a dedicated viewer app
- Established automatic GitHub Pages deployment for the E2E viewer
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
- [x] Added vehicle and mount presets (#16)
- [x] Added Playwright E2E tests and infrastructure (#18)
- [x] Created interactive Preset Viewer app for demo and E2E testing
- [x] Established GitHub Pages deployment for the Preset Viewer
- [x] Requested AI peer reviews on all open PRs using ecosystem commands
- [x] Resolved merge conflicts and redundant files (package-lock.json)
- [x] Updated README with new package name, demo link, and usage examples
- [x] Merged PR #23 and PR #24 into main

### For Next Agent
- [ ] Add NPC behavior presets (#21)
- [ ] Add environment presets (biomes, weather, time-of-day) (#17)
- [ ] Integrate with `@strata-game-library/model-synth` (#19)
- [ ] Expand E2E test coverage for all preset types

## Key Files

| File | Purpose |
|------|---------|
| `src/creatures/quadruped.ts` | Main creature template |
| `src/equipment/index.ts` | Equipment template |
| `tests/e2e/presets.spec.ts` | E2E tests |
| `tests/e2e/viewer/main.tsx` | E2E viewer app |
| `.github/workflows/deploy-viewer.yml` | GitHub Pages deployment |
| `playwright.config.ts` | Playwright configuration |

## Open PRs

- None (All feature branches merged)
