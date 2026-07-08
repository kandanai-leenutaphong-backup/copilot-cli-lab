# Copilot CLI Hands-On Lab: Team Mewpilot's Sprint

Welcome! In this lab you'll play as **Team Mewpilot**, a small dev team racing to
ship a side project (`sample-app/`, a scrappy task-tracker with both a CLI and a
small web app) before their self-imposed deadline. Each lab is a "day" in the
sprint where the team discovers a new GitHub Copilot CLI capability that helps
them move faster.

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
  used by the Day 5 issue-triage automation

## How This Repo Is Organized
```
copilot-cli-lab/
  sample-app/                      the shared codebase - CLI + web app ("Mission Control")
  global-setup/                    ready-to-install global skills & instructions template
  lab-00-setup/                    Day 1: install & auth the Copilot CLI, run the web app
  lab-01-global-instructions/      Day 2: install global instructions & global skills
  lab-02-local-skills/             Day 3: explore the pre-built project-local skills
  lab-03-cost-saving-workflow/     Day 4: /research, /plan, /fleet, /rubberduck,
                                    /chronicle, /create-skill, /handoff, /new, /compact - cost-saving focus
  lab-04-daily-automations/        Day 5: /chronicle cost-tip template + 9am issue triage
  lab-05-slides-with-pptx/         Day 6: build your own deck with the pptx skill
  lab-06-billing-budgeting/        Bonus: billing & budget optimization
  slides/                          the deck this lab itself ships with
```

Work through the labs **in order** — each one builds on the previous day's
story and on the shared `sample-app/` codebase. Every lab folder has its own
`README.md` with the story beat, the objective, and step-by-step instructions.

## Quick Start
```
cd sample-app
node src/index.js list
node web-app/server.js &      # then open http://localhost:4173
cat ../lab-00-setup/README.md
```

Ready? Head to [`lab-00-setup/README.md`](./lab-00-setup/README.md) to kick off Day 1.
