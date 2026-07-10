# Day 2 — Rules for the Team, Rules for the Repo

*Three teammates asked Copilot the same question yesterday and got three
different styles of answer. "We need house rules," says the lead. "Global
ones, so it doesn't matter whose laptop we're on — but also rules that only
make sense for `mewpilot-tasks` itself."*

## ✋ Where the Hands-On Work Happens
Today's hands-on work is **entirely project-level (local) instructions and
local skills**, scoped to `sample-app/`. This is where you drive, experiment,
and build something real — including scaffolding a brand-new skill with the
`create-copilot-skills` meta-skill.

Global instructions and global skills are **not** implemented in this lab at
all — no commands to type, nothing installed on your machine. We'll explain
the *concept* briefly below so you know it exists and why it matters, then
save every install/setup detail for the take-home section — see
[**"Do This At Home"**](#-do-this-at-home-build-your-own-global-skill) at the
bottom of this page — for whenever you're back on your own laptop.

## Background
- **Global instructions/skills** live outside any single repo and apply to
  every Copilot CLI session on your machine, in every project, forever.
- **Local instructions/skills** live inside a repo (`.github/copilot-instructions.md`,
  `.github/skills/`) and only apply when that project is open.

### 💡 Cache tokens: why repeated context gets cheaper
Every turn resends your system prompt, tools, prior files, and responses —
that's "1st loop" cost. On the *next* turn, anything unchanged from before
(system prompt, already-read files, earlier responses) can often be served
from a **token cache** instead of being reprocessed from scratch:

```
1st loop:  [system prompt & tools][prompt][file][response]           <- all billed as input/output
2nd loop:  [cached: system prompt, prompt, file, response][new prompt][new file][response]
                └── cache input tokens (not guaranteed, usually cheaper) ──┘
```

This is exactly why lean global instructions (and small, stable local
skills) pay off twice: they're small to begin with, *and* they're prime
candidates for the cache since they rarely change between turns. A global
instructions file that changes every session never gets this benefit.

### 💡 Model choice: auto vs. a fixed model
Day 1 left you on **Auto** mode — a good default while exploring. Starting
now, switch to a fixed model so every remaining lab gives repeatable,
comparable results across the room:
```
/model
> claude-sonnet-5
```
As a rule of thumb for your own work later: reasoning-heavy models (Opus,
GPT-5.5) are worth their extra cost for planning/architecture/debugging;
a mid-tier model like Sonnet is the right default for day-to-day
implementation (which is what the rest of this lab uses); save the
lightest models for small, repetitive tasks. Auto is a fine default when
you're not sure which tier a task needs.

## Part 1 — The Concept: Global Instructions & Global Skills
No commands here, nothing to install — just the idea, so the rest of today
makes sense:

- **Global instructions/skills** live outside any single repo, in your own
  Copilot CLI config on *your* machine (`~/.copilot/...`). Once set, they
  apply to *every* project you open, forever — useful for things you
  personally repeat everywhere (a commit-message style, a sign-off, a
  debugging habit).
- Because they're resent on **every single turn, in every project**, they
  come with a permanent, recurring token cost. The rule of thumb: keep
  global instructions as lean as possible, and push anything project-specific
  down into a local skill instead.
- This repo ships a ready-to-use [`global-setup/`](../global-setup/README.md)
  folder — a global instructions template plus two real global skills
  (`handoff` and `create-copilot-skills`) — but we won't install any of it
  during the lab, since that would follow you into every other project on
  this machine after the workshop ends. Full install/verify steps are in
  [**"Do This At Home"**](#-do-this-at-home-build-your-own-global-skill) at
  the bottom of this page, for when you're back on your own laptop.
- One of those global skills, `handoff`, is used for real in Day 3
  (`lab-02-cost-saving-workflow`) via the `/handoff` command. So you don't
  need it installed globally to use it, it's already pre-installed at the
  project level in `sample-app/.github/skills/handoff` for you.

## 💡 Why So Few Global Rules?
A lean global instructions file (just a line or two) keeps that permanent,
recurring token cost as small as possible. Fewer global rules = less
recurring cost on every future session, in every project. That's exactly why
*all* of today's hands-on practice happens in local instructions and local
skills instead, scoped to `sample-app/` — you can experiment freely there
without leaving residue on your machine.

## Part 2 — Hands-On: Local Instructions & Local Skills
Everything from here on is scoped to `sample-app/`. Nothing you do in this
section touches your machine's global config.

### What's Already Set Up
This repo ships real, ready-to-use project-level Copilot configuration —
you don't have to build these from scratch:

```
sample-app/
  .github/
    copilot-instructions.md          # project-wide instructions
    skills/
      duplicate-task-checker/SKILL.md   # flags duplicate task-id bugs
      standup-recap/SKILL.md            # drafts a standup update from tasks.json (no git needed)
      handoff/SKILL.md                  # compacts a session into a handoff doc (used for real in Day 3)
      create-copilot-skills/SKILL.md    # meta-skill for scaffolding new skills correctly
```

`handoff` and `create-copilot-skills` are normally *global* skills (see Part
1) — they're pre-installed here at the project level so you get the exact
same behavior without touching your machine's global config.

### Steps

1. **Inspect what's there.**
   ```
   cd ../sample-app
   copilot
   /skills list
   /skills info duplicate-task-checker
   ```
   Read `.github/copilot-instructions.md` and `.github/skills/duplicate-task-checker/SKILL.md`
   directly too — these are plain Markdown, no magic.

   **What to expect:** `/skills list` shows all four skills —
   `duplicate-task-checker`, `standup-recap`, `handoff`, and
   `create-copilot-skills` — tagged as project-local (scoped to
   `sample-app/`). Nothing in your own global config has changed. `/skills
   info <name>` prints the skill's description and the full `SKILL.md`
   body — no need to open the file yourself to see what it does.

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

5. **Scoping check.** Open a Copilot CLI session in a *different* scratch
   folder (outside `copilot-cli-lab/`) and confirm `duplicate-task-checker`
   and `standup-recap` do **not** apply there — proof that local skills are
   scoped to `sample-app/` only. A *global* skill, by contrast, would apply
   in that other folder too — that's the whole trade-off explained in Part 1.

6. **Scaffold a new local skill using `create-copilot-skills`.** It's already
   installed at the project level (see "What's Already Set Up" above) — no
   copying needed. Just use it:
   ```
   /skills info create-copilot-skills
   > Use the create-copilot-skills skill to scaffold a new local skill in
     .github/skills/ that flags any task mutation that doesn't also update
     tasks.json atomically.
   ```
   Follow its guidance on skill locations, `SKILL.md` format, and
   frontmatter fields (`name`, `description`, `argument-hint`,
   `disable-model-invocation`). Then verify your new skill actually works:
   ```
   /skills reload
   /skills info <your-new-skill-name>
   > Review src/index.js using <your-new-skill-name>'s rules.
   ```
   Confirm Copilot's response reflects your new rule. This is exactly how
   `duplicate-task-checker` and `standup-recap` were originally built — and
   the same pattern you'd use to build a *global* skill later, just
   installed in `.github/skills/` instead of `~/.copilot/skills/`.

## 🎉 Try It: Fun Checkpoint
Ask Copilot: *"Given the duplicate-task-checker rule, do you see any existing
bugs in this codebase?"* — see if it spots the Day 3 mystery early!

## 🏠 Do This At Home: Build Your Own Global Skill
Once the workshop is over and it's just you and your own laptop, come back
here and actually build a *global* one. You already did the local version
of this exercise in Part 2 above — this is the same idea, just installed
where it follows you into every project.

1. **Pick something you personally repeat across every project** — a
   commit-message style, a sign-off, a preferred debugging approach, a
   "always ask before doing X" guardrail. Global instructions are the wrong
   place for anything project-specific, so choose something genuinely
   universal to *your* workflow.
2. **Find your global config location.** Ask Copilot CLI directly:
   ```
   copilot
   > Where do you look for global instructions and global skills on this machine?
   ```
3. **Install the pre-built toolkit from this repo** rather than starting from
   a blank page. It ships a global instructions template plus two real
   global skills (`handoff` and `create-copilot-skills`):
   ```
   cat global-setup/global-instructions.template.md   # review, then merge into global instructions
   cp -r global-setup/skills/handoff ~/.copilot/skills/handoff
   cp -r global-setup/skills/create-copilot-skills ~/.copilot/skills/create-copilot-skills
   copilot
   /skills reload
   ```
   Merge in your own one or two rules alongside (or instead of) the
   template's. Keep it lean — every line is a permanent, repeating token
   cost across every future session.
4. **Verify it's picked up.** In a Copilot CLI session in any project, ask
   it to draft a commit message for a hypothetical change and check that it
   follows whatever rule you merged in. Then confirm the skills are visible:
   ```
   /skills info handoff
   /skills info create-copilot-skills
   ```
5. **Scaffold a real global skill of your own.** Use `create-copilot-skills`
   the same way you did locally in Part 2, just targeting the global folder:
   ```
   > Use the create-copilot-skills skill to help me scaffold a new global
     skill for <your idea>.
   ```
   Follow its guidance on skill locations, `SKILL.md` format, and
   frontmatter fields (`name`, `description`, `argument-hint`,
   `disable-model-invocation`) — same pattern as Part 2, just saved under
   `~/.copilot/skills/` instead of `.github/skills/`.
6. **Test it from two unrelated projects** on your machine to confirm it's
   truly global, not accidentally scoped to one repo.
7. **Prune it later.** Global skills and instructions accumulate quietly —
   revisit them every so often and delete anything that's stopped earning
   its permanent token cost.

## What's Next
Day 3: put these skills to work shipping a real, visible feature — and
fixing a real bug on the side — in a cost-saving way →
[`lab-02-cost-saving-workflow`](../lab-02-cost-saving-workflow/README.md)
