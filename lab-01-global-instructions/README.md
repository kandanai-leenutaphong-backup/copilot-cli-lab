# Day 2 — Standardizing How the Whole Team Works

*Three teammates asked Copilot the same question yesterday and got three
different styles of answer. "We need house rules," says the lead. "Global
ones, so it doesn't matter whose laptop we're on."*

## Objective
Create a **global instructions** file and a **global skill** that apply to
every Copilot CLI session on your machine, regardless of which project
you're in.

## Background
- **Global instructions** live outside any single repo and shape how Copilot
  CLI behaves everywhere (tone, conventions, always-do/never-do rules).
- **Global skills** are reusable capabilities available in every project,
  not just one.

## Steps

1. **Find your global config location.** Ask Copilot CLI directly:
   ```
   copilot
   > Where do you look for global instructions and global skills on this machine?
   ```

2. **Write a global instruction.** Create/edit your global instructions file
   and add a couple of house rules for "Team Mewpilot", e.g.:
   ```
   - Always use conventional commits (feat:, fix:, chore:) in commit messages
   - Prefer small, incremental diffs over large rewrites
   - Never delete tests without explicit approval
   ```

3. **Verify it's picked up.** Open a Copilot CLI session in `sample-app/` and
   ask it to draft a commit message for a hypothetical change. Confirm it
   follows your conventional-commit rule.

4. **Create a global skill.** Add a simple global skill (e.g., a "changelog
   writer" or "commit message helper") following the skill format Copilot CLI
   expects. Ask Copilot itself for the exact folder/file structure if unsure:
   ```
   > How do I create a global skill, and where does it go?
   ```

5. **Test the skill from a different project** (or a scratch folder outside
   `copilot-cli-lab/`) to prove it really is global, not local.

## 🎉 Try It: Fun Checkpoint
Add a house rule that's a little silly (e.g., "always end explanations with
a pun about cats"). Confirm Copilot actually follows it — then decide as a
team whether to keep it!

## What's Next
Day 3: the team realizes some rules only make sense for *this* project, not
every project on the laptop → [`lab-02-local-skills`](../lab-02-local-skills/README.md)
