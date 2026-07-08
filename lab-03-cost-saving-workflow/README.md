# Day 4 — Working Smart, Not Expensive

*QA just filed a ticket: "removing a task and adding a new one sometimes
creates duplicate ids." The team groans — nobody wants to burn hours (or
premium requests) hunting this down. Today the team learns: the way you use
Copilot CLI changes what it costs you, in both time and usage.*

## Objective
Fix the real bug in `sample-app` (or `sample-app/web-app` — see Day 1) while
learning five cost-saving habits: **plan before you spend, research before
you guess, parallelize instead of repeating yourself, sanity-check before
you ship, and build reusable skills instead of reusable prompts.**

## The Bug
```
cd ../sample-app
npm test        # or: node test/tasks.test.js
```
You should see an `AssertionError` about duplicate task ids. That's today's
mission.

## Steps — five habits, each with a cost tip

### 1. `/plan` — Plan before you spend
```
copilot
/plan
> Our task tracker generates duplicate ids after a remove+add sequence.
> Plan a fix for src/index.js and store.js.
```
💰 **Cost tip:** a bad plan burns tokens on a fix you'll throw away. A good
`/plan` costs a little upfront and saves a lot of wasted generation later —
review the plan *before* letting Copilot touch any code.

### 2. `/research` — Research instead of guessing
```
/research
> Research common strategies for generating unique ids in a small
> JSON-file-backed Node.js app like this one.
```
💰 **Cost tip:** one focused `/research` call beats five rounds of "no, try
something else" — fewer round-trips, fewer tokens, faster fix.

### 3. `/fleet` — Parallelize instead of repeating yourself
```
/fleet
> Fix the id-generation bug AND add a regression test AND update the README
> known-issue note, as parallel workstreams.
```
💰 **Cost tip:** three separate serial sessions each re-load context (and
re-pay for it). One `/fleet` run shares context across workstreams.

### 4. `/rubberduck` — Catch mistakes while they're cheap
```
/rubberduck
> Here's my plan/diff for fixing the duplicate id bug - poke holes in it.
```
💰 **Cost tip:** a bug caught now costs one review. A bug caught in
production costs a incident, a rollback, and a much bigger conversation with
Copilot later. Cheaper to ask now.

### 5. `/create-skill` — Turn a one-off prompt into a reusable skill
```
/create-skill
> Create a skill called "task-tracker-release-notes" that reads recent
> git commits in this repo and drafts a short, friendly release note in
> Team Mewpilot's voice.
```
💰 **Cost tip:** a skill you build once is context you never have to
re-explain again. Compare this to Day 3's local skill, which already ships
in this repo at `sample-app/.github/skills/` — try `/create-skill` for a
*new* one Team Mewpilot doesn't have yet.

## Manage context size as you go
Long sessions cost more (bigger context = more tokens per turn). Use these
as you work through the five habits above:

- **`/compact`** — condense the conversation once the `/plan` → `/research`
  → `/fleet` → `/rubberduck` chain gets long, right before you `/chronicles`
  or hand off.
- **`/new`** — start a clean session when you move to an unrelated task
  (e.g., switching from "fix the bug" to "draft the demo script") instead of
  dragging unrelated context along (and paying for it).
- **`/handoff`** — end of day, summarize where you left off so the next
  session (yours tomorrow, or a teammate's) doesn't need a full re-explain:
  ```
  /handoff
  > Summarize where we left off on the id-generation fix and the new
  > release notes skill, so the next session can pick up immediately.
  ```

### `/chronicles` — capture the story (and the cost tips) once
```
/chronicles
> Summarize today's debugging session for the team standup notes, and
> include the cost-saving habits we used.
```
See [`templates/chronicles-cost-tip.md`](../lab-04-daily-automations/templates/chronicles-cost-tip.md)
for the reusable template Day 5 builds on.

## Verify
```
npm test
```
The regression test should now pass.

## 🎉 Try It: Fun Checkpoint
Before running `/rubberduck`, guess out loud what hole it'll poke in your
fix. Then estimate: how many separate sessions would this have taken
*without* `/fleet`, `/compact`, and skills? Compare notes as a team.

## What's Next
Day 5: automate the boring stuff — including a daily cost-tip habit —
so Team Mewpilot spends less time (and budget) on busywork →
[`lab-04-daily-automations`](../lab-04-daily-automations/README.md)
