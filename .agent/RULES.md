# FIT Docs Lite Dev - Agent Rules

## What this repo is

This is a dev workspace for building the FIT Docs Lite template baseline.
It is not the final org template repo and not a client repo.

## Guardrails

1. Do not rename FIT solution families or tiers in this repo.
2. Do not add client-specific content to baseline starter pages.
3. Keep `web/` + `docs/` root contract stable during this sprint.
4. Record structural changes in draft governance notes before promotion.
5. Never commit secrets or local machine paths in user-facing docs.

## Allowed fast actions

- Add or edit starter pages and nav in `web/src/content/docs/`
- Update theme tokens and CSS for FIT branding
- Improve onboarding docs in `docs/`
- Create template-safe placeholders and examples

## Promotion reminder

Before promotion to template repo:

- Build passes from clean install
- Starter pack docs exist and match real commands
- `.agent/CONTEXT.md` is present and valid
- No scratch files or environment secrets

