# Qordi Web Instructions

This repo is `weriihq/web`: the user-facing Qordi experience.

## Product Direction

- Qordi is voice-first: capture idea firehose, return clarity and next actions.
- Keep user UX simple, warm, and practical.
- Prefer shipping MVP increments over adding speculative complexity.

## Architecture Boundaries

- This repo owns frontend UX and web routes.
- Business/domain logic belongs in `core`.
- Infrastructure/deployment automation belongs in `infra`.
- API-heavy behavior should call backend services rather than embedding server complexity in UI components.

## Coding Standards

- Use TypeScript.
- Keep components small and focused.
- Handle loading, empty, and error states explicitly.
- Avoid hard-coded secrets and sensitive values.
- Keep dependencies minimal.

## UX Standards

- Mobile-first responsive layouts.
- Fast first paint and simple navigation.
- Accessible controls and readable contrast.
- No unnecessary visual clutter.

## Workflow

- Before major changes, check `LOCKED_DECISIONS_MAR_1_2026.md` in planning context.
- Keep commits small and purpose-specific.
- Prioritize testable slices that can be demoed quickly.
