# Copilot CLI Hands-On Lab: Team Mewpilot's Sprint

Welcome! In this lab you'll play as **Team Mewpilot**, a small dev team racing to
ship a side project (`sample-app/`, a scrappy task-tracker with both a CLI and a
small web app) before their self-imposed deadline. Each lab is a beat in the
sprint where the team discovers a new GitHub Copilot CLI capability that helps
them move faster. The whole workshop runs in a single day — labs 00-05, back to
back, with a break or two.

You'll use the **real GitHub Copilot CLI** the whole way through — every lab is
hands-on, run in your own terminal against the `sample-app/` codebase.

## The Story So Far
It's Monday morning. Team Mewpilot has a half-finished task tracker, a demo on
Friday, and no idea that GitHub Copilot CLI is about to become their most
valuable teammate. Let's go find out.

## Prerequisites
- A terminal (macOS, Linux, or WSL)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli) installed and
  authenticated (`copilot` on your PATH)
- [Node.js](https://nodejs.org/) 18+ (to run `sample-app/`)
- A GitHub account with an active Copilot subscription
- The [`gh` CLI](https://cli.github.com/), authenticated (`gh auth status`) —
  used by `/delegate` (lab-02) and the GitHub Copilot App automation (lab-03)

## How This Repo Is Organized
```
copilot-cli-lab/
  sample-app/                      the shared codebase - CLI + web app ("Mission Control")
  global-setup/                    ready-to-install global skills & instructions template
  lab-00-setup/                    LAB 00: install & auth the Copilot CLI, run the web app
  lab-01-skills-and-instructions/  LAB 01: global instructions & global skills - concept only
                                    (no hands-on, take-home guide at the end), then HANDS-ON:
                                    explore, extend & create project-local skills using
                                    create-copilot-skills
  lab-02-cost-saving-workflow/     LAB 02: /research, /plan, /fleet, /rubberduck, /context,
                                    /chronicle, /create-skill, /handoff, /delegate, /new, /compact,
                                    grep/glob-over-bash, file-refs-not-pastes - ship a visible
                                    feature + fix a bug, cost-saving focus
  lab-03-daily-automations/        LAB 03: dumb-simple /every token-usage check + app-template automation
  lab-04-slides-with-pptx/         LAB 04: build your own deck with the pptx skill
  lab-05-billing-budgeting/        LAB 05 (bonus): billing & budget optimization
  slides/                          the deck this lab itself ships with
```

Work through the labs **in order** — each one builds on the previous lab's
story and on the shared `sample-app/` codebase. Every lab folder has its own
`README.md` with the story beat, the objective, and step-by-step instructions.

## Quick Start
```
cd sample-app
node src/index.js list
node web-app/server.js &      # then open http://localhost:4173
cat ../lab-00-setup/README.md
```

Ready? Head to [`lab-00-setup/README.md`](./lab-00-setup/README.md) to kick off Lab 00.

## Lab Agenda & Timing
Rough per-lab timing — plan for **~2.5 to 3 hours** solo, or **~3.5 to
4 hours** as a facilitated workshop with discussion between labs.

| Lab | Focus | Time |
|---|---|---|
| `lab-00-setup` | Install, auth, first prompts, run the web app, confirm Auto model | 10–15 min |
| `lab-01-skills-and-instructions` | Global instructions & global skills concept explained (not implemented, no hands-on) — then hands-on: explore, extend, and create project-local skills & instructions, scaffolding a new skill with `create-copilot-skills` | 30–40 min |
| `lab-02-cost-saving-workflow` | Three-terminal research/plan/fleet, visible feature + bug fix, six cost-saving habits + three tool-choice habits | 60–75 min |
| `lab-03-daily-automations` | Minute-level `/every` token-usage check + GitHub Copilot App install & template | 20–25 min |
| `lab-04-slides-with-pptx` | Build your own deck with the pptx skill | 20–30 min |
| `lab-05-billing-budgeting` (bonus) | Billing, layered budgets, & pricing/optimization levers | 15–20 min |

💡 A recurring theme worth calling out live: keep **global** instructions
as lean as possible (see `lab-01`) — they're resent on every turn, in every
project, forever, so every extra line is a permanent token cost. Push
anything project-specific into a local skill instead — the hands-on core of
`lab-01`. Want to actually build global instructions/skills yourself?
`lab-01` ends with a "Do This At Home" section for exactly that.
