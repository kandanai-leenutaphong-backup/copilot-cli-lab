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

   **What to expect:** `/skills list` shows `duplicate-task-checker` and
   `standup-recap` tagged as project-local (scoped to `sample-app/`), plus
   `handoff` and `create-copilot-skills` tagged as global (from Day 2) if
   you installed those. `/skills info <name>` prints the skill's
   description and the full `SKILL.md` body — no need to open the file
   yourself to see what it does.

2. **Use a skill directly.** Skills aren't invoked with their own slash
   command — Copilot decides to apply a skill automatically when your
   prompt matches its `description`. Trigger it on purpose:
   ```
   > Use the standup-recap skill to draft today's update from tasks.json.
   ```
   **What to expect:** the response follows the skill's exact structure —
   **Finished / In progress / Blocked** sections, one sentence per bullet,
   no corporate jargon — because that structure lives in the skill file,
   not in your prompt. Ask the same thing in a *different* project (no
   `standup-recap` skill installed) and compare: you'll get a generic,
   differently-shaped answer.

3. **See it in action passively too.** Ask Copilot to review the codebase and
   watch the local skill kick in without being named:
   ```
   > Review src/index.js for any bugs related to task ids.
   ```
   Notice how it reasons using the `duplicate-task-checker` rules, not just
   general JavaScript knowledge. **What to expect:** it should explicitly
   flag the `tasks.length + 1` id-generation pattern as unsafe — that's the
   skill's rule #1 showing up in the reasoning, unprompted.

4. **Extend a skill.** Add one more rule to `duplicate-task-checker/SKILL.md`
   (or `copilot-instructions.md`) that reflects something your team actually
   cares about — e.g. "always add a regression test alongside a bug fix."

5. **Compare local vs. global.** Open a Copilot CLI session in a *different*
   scratch folder (outside `copilot-cli-lab/`) and confirm `duplicate-task-checker`
   and `standup-recap` do **not** apply there — only the global
   skill/instructions from Day 2 do.

6. **Combine them.** Back in `sample-app/`, ask Copilot to review `src/index.js`
   and see both the global house rules *and* the local project rules show up
   in its reasoning/suggestions.

## 🎉 Try It: Fun Checkpoint
Ask Copilot: *"Given the duplicate-task-checker rule, do you see any existing
bugs in this codebase?"* — see if it spots the Day 4 mystery early!

## What's Next
Day 4: put these skills to work shipping a real, visible feature — and
fixing a real bug on the side — in a cost-saving way →
[`lab-03-cost-saving-workflow`](../lab-03-cost-saving-workflow/README.md)
