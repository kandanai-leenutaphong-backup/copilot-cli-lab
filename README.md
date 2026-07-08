# Copilot CLI Hands-On Lab: Team Mewpilot's Sprint

Welcome! In this lab you'll play as **Team Mewpilot**, a small dev team racing to
ship a side project (`sample-app/`, a scrappy task-tracker CLI) before their
self-imposed deadline. Each lab is a "day" in the sprint where the team
discovers a new GitHub Copilot CLI capability that helps them move faster.

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

## How This Repo Is Organized
```
copilot-cli-lab/
  sample-app/                    the shared codebase - Team Mewpilot's task tracker
  lab-00-setup/                  Day 1: install & auth the Copilot CLI
  lab-01-global-instructions/    Day 2: global instructions & global skills
  lab-02-local-skills/           Day 3: project-local skills
  lab-03-example-scenarios/      Day 4: /plan, /fleet, /research, /rubberduck, /chronicles
  lab-04-custom-skills/          Day 5: /create-skill and /handoff
  lab-05-daily-automations/      Day 6: GitHub Copilot App - /new, /compact
  lab-06-billing-budgeting/      Bonus: billing & budget optimization
```

Work through the labs **in order** — each one builds on the previous day's
story and on the shared `sample-app/` codebase. Every lab folder has its own
`README.md` with the story beat, the objective, and step-by-step instructions.

## Quick Start
```
cd sample-app
node src/index.js list
cat lab-00-setup/README.md
```

Ready? Head to [`lab-00-setup/README.md`](./lab-00-setup/README.md) to kick off Day 1.
