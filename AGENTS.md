# Copilot CLI Intermediate Lab

This repository is a one-day, hands-on GitHub Copilot CLI workshop. The
shared application is in `sample-app/`; the numbered directories are guided
lab materials, not application modules.

## Layout

| Path | Purpose |
| --- | --- |
| `sample-app/` | Empty starter for the dependency-free Node.js sports-class booking app built in Lab 02. See its `AGENTS.md` before changing it. |
| `global-setup/` | Templates and ready-to-install global Copilot instructions and skills. |
| `lab-00-setup/` | CLI installation, authentication, and first-run setup. |
| `lab-01-skills-and-instructions/` | Copilot instructions and skills exercises. |
| `lab-02-cost-saving-workflow/` | Cost-saving workflow exercises, including a visible booking feature. |
| `lab-03-daily-automations/` | Scheduled prompt and GitHub Copilot App automation exercises. |
| `lab-04-slides-with-pptx/` | Presentation-building exercise. |
| `lab-05-billing-budgeting/` | Bonus billing and budget optimization material. |
| `slides/`, `raw_slides/` | Workshop presentation sources and assets. |

## Working conventions

- Read the target lab's `README.md` before editing its material. Labs are
  intended to be completed in numeric order.
- Keep each lab self-contained and preserve its instructional scenario.
- Prefer edits within the relevant lab or `sample-app/`; avoid copying
  application code into lab folders.
- `sample-app/` has local instructions in
  `sample-app/.github/copilot-instructions.md` that apply to all changes
  there.
- `sample-app/` is intentionally empty until Lab 02. Keep the app
  dependency-free unless the active lab explicitly changes that constraint.

## Common commands

Run these from `sample-app/`:

```sh
npm test
npm start
npm run web
```
