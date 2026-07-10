# Day 1 — Team Mewpilot Gets Tooled Up

*It's 9am. The team huddles around a laptop. "Everyone said this Copilot CLI
thing would help us ship faster. Let's find out."*

## Objective
Install, authenticate, and run GitHub Copilot CLI for the first time.

## Steps

1. **Update and verify the CLI.** Start every workshop session with:
   ```
   sudo copilot update
   copilot --version
   ```
   If `copilot` is not installed yet, install it first:
   ```
   npm install -g @githubnext/github-copilot-cli
   # or follow the latest instructions at:
   # https://github.com/github/copilot-cli
   ```

2. **Authenticate**:
   ```
   copilot
   ```
   On first run you'll be prompted to sign in with your GitHub account. Follow
   the device-code flow in your browser.

3. **Verify it works** — from inside the empty `sample-app/` starter, start the
   CLI and ask it a simple planning question:
   ```
   cd ../sample-app
   copilot
   > I want to build a small sports-class search and booking app here. What
   > would be a sensible dependency-free Node.js starting point?
   ```
   Copilot should recognize that the folder is intentionally empty and suggest
   a small, practical starting point.

4. **Check your model.** Run `/model` and confirm you're on **Auto**. Auto
   mode picks the right model for the task automatically — a good, lazy
   default while you're still getting oriented today. From Day 2 onward,
   this lab switches you to a fixed model (`claude-sonnet-5`) so results
   stay consistent and repeatable across every remaining lab:
   ```
   /model
   > (leave on auto for today)
   ```

5. **Try your first real prompt** — ask it to inspect the starter:
   ```
   > Inspect this starter and list the first files we should create for the
   > sports-class app. Do not write code yet.
   ```

6. **Save the build for the next lab.** Lab 01 uses skills to generate the
   first working version of the app. Keeping this folder empty now makes that
   build exercise easy to see and reason about.

## 🎉 Try It: Fun Checkpoint
Ask Copilot CLI: *"If you were a member of Team Mewpilot, what would you do
first on this codebase?"* — see if its answer matches your instincts.

## What's Next
Day 2: the team realizes everyone is asking Copilot slightly different
questions and getting inconsistent answers. Time to set some ground rules →
[`lab-01-skills-and-instructions`](../lab-01-skills-and-instructions/README.md)
