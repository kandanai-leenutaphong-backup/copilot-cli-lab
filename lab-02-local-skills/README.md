# Day 3 — Rules Just for This Codebase

*"The global cat-pun rule is great," says one teammate, "but Copilot keeps
suggesting patterns that don't fit `mewpilot-tasks`. Good news: someone
already set up project rules for us. Let's see what's there."*

## Objective
Explore the **project-local skill(s)** and **local instructions** already
shipped in `sample-app/`, extend one of them, and see how local rules
interact with the global skill/instructions from Day 2.

## What's Already Set Up
This repo ships real, ready-to-use project-level Copilot configuration —
you don't have to build these from scratch:

```
sample-app/
  .github/
    copilot-instructions.md          # project-wide instructions
    skills/
      duplicate-task-checker/SKILL.md   # flags duplicate task-id bugs
      standup-recap/SKILL.md            # drafts a standup update from tasks.json (no git needed)
```

## Steps

1. **Inspect what's there.**
   ```
   cd ../sample-app
   copilot
   /skills list
   /skills info duplicate-task-checker
   ```
   Read `.github/copilot-instructions.md` and `.github/skills/duplicate-task-checker/SKILL.md`
   directly too — these are plain Markdown, no magic.

2. **See it in action.** Ask Copilot to review the codebase and watch the
   local skill kick in:
   ```
   > Review src/index.js for any bugs related to task ids.
   ```
   Notice how it reasons using the `task-id-guard` rules, not just general
   JavaScript knowledge.

3. **Extend a skill.** Add one more rule to `duplicate-task-checker/SKILL.md`
   (or `copilot-instructions.md`) that reflects something your team actually
   cares about — e.g. "always add a regression test alongside a bug fix."

4. **Compare local vs. global.** Open a Copilot CLI session in a *different*
   scratch folder (outside `copilot-cli-lab/`) and confirm `duplicate-task-checker`
   and `standup-recap` do **not** apply there — only the global
   skill/instructions from Day 2 do.

5. **Combine them.** Back in `sample-app/`, ask Copilot to review `src/index.js`
   and see both the global house rules *and* the local project rules show up
   in its reasoning/suggestions.

## 🎉 Try It: Fun Checkpoint
Ask Copilot: *"Given the duplicate-task-checker rule, do you see any existing
bugs in this codebase?"* — see if it spots the Day 4 mystery early!

## What's Next
Day 4: put these skills to work fixing a real bug — and learn to do it in a
cost-saving way → [`lab-03-cost-saving-workflow`](../lab-03-cost-saving-workflow/README.md)
