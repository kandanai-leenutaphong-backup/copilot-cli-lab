# Day 1 — Team Mewpilot Gets Tooled Up

*It's 9am. The team huddles around a laptop. "Everyone said this Copilot CLI
thing would help us ship faster. Let's find out."*

## Objective
Install, authenticate, and run GitHub Copilot CLI for the first time.

## Steps

1. **Install the CLI** (skip if already installed):
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

3. **Verify it works** — from inside `sample-app/`, start the CLI and ask it a
   simple question about the codebase:
   ```
   cd ../sample-app
   copilot
   > What does this project do?
   ```
   Copilot should read the files and summarize `mewpilot-tasks`.

4. **Try your first real prompt** — ask it to run the tests:
   ```
   > Run the test suite and tell me what happens
   ```
   Notice anything? (Hint: keep this failing test in mind — Team Mewpilot will
   come back to it in Day 4.)

## 🎉 Try It: Fun Checkpoint
Ask Copilot CLI: *"If you were a member of Team Mewpilot, what would you do
first on this codebase?"* — see if its answer matches your instincts.

## What's Next
Day 2: the team realizes everyone is asking Copilot slightly different
questions and getting inconsistent answers. Time to set some ground rules →
[`lab-01-global-instructions`](../lab-01-global-instructions/README.md)
