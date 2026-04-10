# FIT Docs Lite Dev

Development repository for the FIT Docs Lite template baseline.

## Current objective

Ship a clean, repeatable docs-lite starter template with:

- `web/` Starlight app (theme, nav, starter pages)
- `docs/` support artifacts for onboarding and content operations
- `.agent/` repo context and working rules for AI-assisted delivery

## Folder contract (current sprint)

- `web/` application code and static assets
- `docs/` human support docs and SOPs for template users
- `.agent/` agent context, rules, and planning workspace

## Branching model

| Branch | Purpose |
| --- | --- |
| `main` | Locked **template baseline**. Template and promotion-bound changes land here first (via PR). |
| `docs-lite-showcase` | Persistent **demo/showcase** branch. Does not replace `main` for template work. |
| `dev/*` | Short-lived **implementation** branches from `main`; merge back via PR to `main`. |

### Merge direction

- Template work → **`main`** first.
- Showcase-only enhancements → stay on **`docs-lite-showcase`**.
- Bring showcase work into the template only via **intentional** cherry-picks or reviewed merges into `main`.
- After `main` advances, merge **`main` into `docs-lite-showcase`** when the demo should include the latest baseline.

**Showcase hosting:** Configure production deploys (Vercel or Cloudflare Pages) to use branch **`docs-lite-showcase`**, not `main`. See `docs/branching-model.md` for settings.

Full detail: `docs/branching-model.md`.

## Quick start

```powershell
cd web
npm install
npm run dev
```

Expected local URL: `http://localhost:4701`

## Promotion intent

This repo is the **dev** lane for the FIT Docs Lite template. Promotion to the org template follows the gate in:

`fit-ops/delivery/SOP-agent-bootstrap-and-template-promotion.md` (repo: `FITAutomate/fit-ops`)
