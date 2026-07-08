# Project instructions for mewpilot-tasks

- Task ids must always be unique — flag any code that could generate
  duplicates (see the `duplicate-task-checker` skill in `.github/skills/`).
- This is a zero-dependency Node.js project — do not suggest adding npm
  packages to `sample-app/` itself. (The `slides/` and `web-app/` tooling
  folders are exempt — they have their own package.json.)
- Tests live in `test/` and use Node's built-in `assert` module.
- Keep the CLI (`src/`) and the web UI (`web-app/`, if present) reading and
  writing the same `tasks.json` file so they stay in sync.
