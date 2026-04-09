# FIT Docs Lite Dev - Agent Context

## Lane

- `repo_role`: dev
- `solution_family`: FIT Docs
- `tier`: Lite
- `template_stage`: baseline

## Purpose

This repository is the working dev lane for the FIT Docs Lite template.
Work here is iterative and may be rough. Promotion to org template only happens
after gate checks pass.

## Enabled skills

```yaml
enabled_skills:
  - prp
  - brand-check
  - repo-spin-up
  - tier-check
  - astro
  - agent-browser
```

## Canonical references

- Governance and ADRs: `D:\fit-automate-org\fit-solutions`
- Bootstrap and promotion SOP: `D:\fit-automate-org\fit-ops\delivery\SOP-agent-bootstrap-and-template-promotion.md`
- Port policy registry: `D:\fit-automate-org\fit-solutions\registry\local-dev-ports.yaml`

## Repo-specific context

- Docs app path: `web/`
- Support docs path: `docs/`
- Local dev port: `4701`
- Keep landing hero image on `/` only.
- Keep starter baseline simple; avoid overfitting to one client.

