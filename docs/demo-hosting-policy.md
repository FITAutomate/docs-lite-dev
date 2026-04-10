# Demo Hosting Policy

This policy defines where FIT demo/showcase sites are hosted and why.

## Default policy

- **Demo/showcase sites:** GitHub Pages
- **Production FIT/client sites:** Vercel or Cloudflare (as scoped per project)

## Why GitHub Pages for demos

- keeps demo infrastructure separate from production/client infrastructure
- lower operational overhead for many small demo sites
- straightforward branch-based deployment for repeatable showcases
- easy cleanup/archive when demos are retired

## Branch and deploy standard

- Demo branch: `docs-lite-showcase`
- GitHub Actions workflow: `.github/workflows/deploy-github-pages.yml`
- Deploy trigger: push to `docs-lite-showcase`
- Demo URL pattern: `https://fitautomate.github.io/docs-lite-dev/`

## Guardrails

- Do not point demo deploys at `main`.
- Do not use demo hosting policy for client production environments.
- Keep template baseline work in `main`; keep demo polish in `docs-lite-showcase`.

## Exceptions

Use Vercel/Cloudflare for demos only when a feature cannot be validated on GitHub Pages
(for example, platform-specific behavior that requires edge/runtime features). Document
the exception in the repo before enabling alternate hosting.
