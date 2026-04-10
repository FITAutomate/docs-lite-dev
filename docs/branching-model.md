# Branching model (docs-lite-dev)

This repo splits **template baseline** work from **demo/showcase** work so the two do not contaminate each other.

## Branches

| Branch | Role |
| --- | --- |
| `main` | Locked template baseline. All changes that belong in the promoted template land here first (via PR). |
| `docs-lite-showcase` | Persistent demo/showcase branch. Optional experiments, richer demos, or hosting-specific tweaks that must not flow into `main` unless explicitly merged. |
| `dev/*` | Short-lived implementation branches. Branch from `main`, open a PR back to `main`. |

## Merge direction (rules)

1. **Template-first:** Anything that should ship in the org template goes to `main` first (PR, review, promotion gate as applicable).
2. **Showcase-only:** Enhancements that are demo-only stay on `docs-lite-showcase`. Do not merge `docs-lite-showcase` into `main` by default.
3. **Back to template:** Bring work from showcase to `main` only via intentional cherry-picks or a dedicated merge/review (treat as a normal template change).
4. **Keep showcase current:** After meaningful updates merge to `main`, merge or rebase `main` into `docs-lite-showcase` when you want the demo branch to include the latest baseline plus showcase deltas.

```text
main ◄── PR ── dev/feature-x
  │
  └── merge/rebase into docs-lite-showcase (baseline sync)
```

## Showcase hosting (production branch)

Point **live showcase** deployments at branch **`docs-lite-showcase`**, not `main`.

- **`main`** is the template baseline reference; it should stay suitable for promotion and client generation.
- **`docs-lite-showcase`** is the long-lived branch for a public or internal demo that may diverge.
- **Default demo host is GitHub Pages.** Use Vercel/Cloudflare only by documented exception.

### GitHub Pages (default for demos)

1. Repository Settings -> Pages -> Build and deployment -> Source: **GitHub Actions**.
2. Keep `.github/workflows/deploy-github-pages.yml` enabled.
3. Push to `docs-lite-showcase` to deploy the demo.
4. Expected URL pattern: `https://fitautomate.github.io/docs-lite-dev/`.

### Vercel

1. Project → **Settings** → **Git**.
2. Set **Production Branch** to `docs-lite-showcase`.
3. **Root Directory:** `web`
4. **Build Command:** `npm run build`
5. **Output Directory:** `dist` (Astro/Starlight static output; relative to root `web/`)

Framework preset **Astro** is appropriate if the UI offers it.

### Cloudflare Pages

1. Project → **Builds & deployments** → **Configure production deployments** (or equivalent).
2. **Production branch:** `docs-lite-showcase`.
3. **Build command:** `npm run build`
4. **Build output directory:** `dist`
5. If the UI supports a **root path** / **project subdirectory**, set it to **`web`** so install and build run in the app folder. Otherwise use a build command that runs inside `web` (for example `cd web && npm ci && npm run build`) and set output directory to `web/dist` per Cloudflare’s path rules.

Always confirm the first production deploy is reading from **`docs-lite-showcase`** after setup.

## Operator checklist

- [ ] Default PR target for template work: `main`.
- [ ] Demo-only work: commit on `docs-lite-showcase` or branch from it, then merge to `docs-lite-showcase`.
- [ ] After `main` moves forward: merge `main` into `docs-lite-showcase` when the demo should track the new baseline.
- [ ] Never point the showcase production deploy at `main` unless you intentionally want demo == template (not the default model).

See also: root `README.md` and `docs/onboarding/README.md`.
