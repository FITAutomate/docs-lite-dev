# Onboarding

## Branch workflow (operators)

Use the right branch before you change code or content.

1. **Template baseline (default)** — branch **`main`**. Create a short-lived branch `dev/<topic>` from `main`, then open a PR into **`main`**.
2. **Demo / showcase** — branch **`docs-lite-showcase`**. Use for persistent demo content or experiments that must not pollute the template. Do not merge `docs-lite-showcase` into `main` unless that merge is deliberate.
3. **Sync showcase with baseline** — when `main` has moved and the demo should include those changes: check out `docs-lite-showcase`, merge **`main`** into it (or rebase if your team agrees on that flow).

**Live showcase hosting:** GitHub Pages is the default host for demos. Deploy from **`docs-lite-showcase`**, not `main`. Details: `docs/branching-model.md` and `docs/demo-hosting-policy.md`.

## First run

1. Open `web/`
2. Run `npm install`
3. Run `npm run dev`
4. Confirm site at `http://localhost:4701`

## First content edit

1. Edit a page under `web/src/content/docs/`
2. Save file and confirm hot-reload
3. Validate sidebar links and next/previous flow
