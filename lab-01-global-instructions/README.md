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

2. **Install the pre-built toolkit.** This repo ships a ready-to-use
   [`global-setup/`](../global-setup/README.md) folder — a global
   instructions template plus two real global skills (`handoff` and
   `create-copilot-skills`), extracted so you don't start from a blank page:
   ```
   cat ../global-setup/global-instructions.template.md   # review, then merge into your global instructions
   cp -r ../global-setup/skills/handoff ~/.copilot/skills/handoff
   cp -r ../global-setup/skills/create-copilot-skills ~/.copilot/skills/create-copilot-skills
   copilot
   /skills reload
   ```

3. **Verify it's picked up.** Open a Copilot CLI session in `sample-app/` and
   ask it to draft a commit message for a hypothetical change. Confirm it
   follows the conventional-commit rule, and that its response ends with
   "by mewpilot" — both come from the template you just installed.

4. **Try the installed skills:**
   ```
   /skills info handoff
   /skills info create-copilot-skills
   ```
   `create-copilot-skills` is the meta-skill Copilot uses to scaffold *new*
   skills correctly — you'll use it again on Day 4.

5. **Test from a different project** (or a scratch folder outside
   `copilot-cli-lab/`) to prove the instructions and skills really are
   global, not local.

## 🎉 Try It: Fun Checkpoint
Add a house rule that's a little silly (e.g., "always end explanations with
a pun about cats"). Confirm Copilot actually follows it — then remove it
again afterwards (see below for why).

## 💡 Why So Few Rules?
Notice the template only has **two** lines. Global instructions are resent
on every single turn, in every project, forever — so keep this file as lean
as possible and push anything project-specific down into a local skill
instead (Day 3). Fewer global rules = less recurring token cost.

## What's Next
Day 3: the team realizes some rules only make sense for *this* project, not
every project on the laptop → [`lab-02-local-skills`](../lab-02-local-skills/README.md)
