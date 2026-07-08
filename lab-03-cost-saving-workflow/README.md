# Day 4 — Working Smart, Not Expensive

*Demo's in two days, and the lead has an idea: "Judges love seeing priority
front and center. Can we get color-coded priority badges into Mission
Control before Friday?" Also — quietly — QA's duplicate-id ticket from
yesterday is still open. Today the team learns: the way you use Copilot CLI
changes what it costs you, in both time and usage, whether you're shipping
a feature or fixing a bug.*

## Objective
Build a real, **visible** feature — priority levels for tasks, shown as
color-coded badges in `sample-app/web-app` (and a `--priority` flag on the
CLI) — and fix the duplicate-id bug alongside it, while learning six
cost-saving habits: **research before you guess, plan before you spend,
parallelize instead of repeating yourself, sanity-check before you ship,
build reusable skills instead of reusable prompts, and manage your context
window on purpose.**

## Check Your Starting Point
```
cd ../sample-app
npm test        # or: node test/tasks.test.js
```
You should see an `AssertionError` about duplicate task ids — still open
from Day 3. Keep it in mind; it's a parallel workstream today, not the main
event.

```
copilot
/context
```
Note the token count before you start. You'll check this again later.

## Steps — six habits, each with a cost tip

### 1. `/research` — Research instead of guessing
```
/research
> Research simple ways to add a "priority" concept (e.g. low/medium/high)
> to a small JSON-file-backed Node.js task tracker, including how to
> represent it in the CLI and a plain-JS web UI, plus common strategies
> for generating unique ids in the same kind of app.
```
💰 **Cost tip:** one focused `/research` call beats five rounds of "no, try
something else" — fewer round-trips, fewer tokens, faster build. Doing this
*before* `/plan` means the plan is built on real answers, not a guess that
gets thrown away (and re-paid for) once research proves it wrong.

### 2. `/plan` — Plan before you spend
```
/plan
> Plan adding a "priority" field (low/medium/high) to tasks.json, a
> --priority flag to the CLI, and color-coded priority badges + a filter
> dropdown in web-app - plus a fix for the duplicate id bug.
```
💰 **Cost tip:** a bad plan burns tokens on a feature you'll throw away. A
good `/plan` costs a little upfront and saves a lot of wasted generation
later — review the plan *before* letting Copilot touch any code.

### 3. `/fleet` — Parallelize instead of repeating yourself
```
/fleet
> Build the priority feature (CLI + web badges/filter) AND fix the
> id-generation bug AND add regression tests for both, as parallel
> workstreams.
```
💰 **Cost tip:** three separate serial sessions each re-load context (and
re-pay for it). One `/fleet` run shares context across workstreams — the
feature build and the bug fix don't need to happen in isolation.

### 4. `/rubberduck` — Catch mistakes while they're cheap
```
/rubberduck
> Here's my plan/diff for the priority feature and the duplicate id fix -
> poke holes in it.
```
💰 **Cost tip:** a bug (or a half-finished feature) caught now costs one
review. One caught in production, the night before a demo, costs an
incident, a rollback, and a much bigger conversation with Copilot later.
Cheaper to ask now.

### 5. `/create-skill` — Turn a one-off prompt into a reusable skill
```
/create-skill
> Create a skill called "priority-guard" that flags any code adding or
> editing tasks in mewpilot-tasks that doesn't validate the priority field
> is one of low/medium/high.
```
💰 **Cost tip:** a skill you build once is context you never have to
re-explain again. Compare this to Day 3's local skills, which already ship
in this repo at `sample-app/.github/skills/` — `/create-skill` lets Team
Mewpilot grow that same toolkit for the *new* feature they just shipped.

## Manage context size as you go
Long sessions cost more (bigger context = more tokens per turn). Use these
as you work through the habits above:

- **`/compact`** — condense the conversation once the `/research` → `/plan`
  → `/fleet` → `/rubberduck` chain gets long.
- **`/new`** — start a clean session when you move to an unrelated task
  (e.g., switching from "build the feature" to "draft the demo script")
  instead of dragging unrelated context along (and paying for it).
- **`/context`** — check your current context window usage at any point:
  ```
  /context
  ```
  Run this a few times through the steps above and watch the number climb
  as `/research`, `/plan`, `/fleet`, and `/rubberduck` each add to it.

### 6. See the actual savings — cost analysis checkpoint
Habits are only convincing once you can *see* the numbers. Check your usage:
```
/usage
```
Then ask Copilot to do the math for you instead of eyeballing it:
```
> Summarize my token usage and estimated cost for this session so far.
> Compare it to what a single, un-compacted, un-handed-off session covering
> the same work would likely have cost, and explain where the savings came
> from (/compact, /new, /handoff, or the skill).
```
💰 **Cost tip:** this is the habit that makes the other five stick — a
teammate who *sees* the token/cost delta from `/compact` and `/handoff` will
keep doing it. One that only hears "it saves money, trust me" won't.

### 7. `/handoff` — end the session, then prove the savings
```
/handoff
> Summarize where we left off on the priority feature and the id-generation
> fix, so the next session can pick up immediately.
```
Now do the side-by-side comparison:
1. Note your `/context` usage right now, **before** starting a fresh
   session (this is your "before").
2. Run `/new` to start a clean session.
3. Import the handoff doc Copilot just wrote (paste its path, or
   `@`-mention it) so the new session picks up context.
4. Run `/context` again — this is your "after".

Compare the two numbers as a team: a fresh session that imported a handoff
doc should be carrying far less context than the original session that
lived through six habits' worth of `/research` → `/rubberduck`, while still
knowing exactly where things stand.

### 8. `/compact` — one more pass, one more `/context` check
Still in the new session, once you've asked a follow-up question or two:
```
/compact
```
Then:
```
/context
```
Watch the number drop right after `/compact` runs — direct, visible proof
that compacting shrinks what you're paying for on every future turn in
*this* session.

### `/chronicle cost-tips` — capture the savings once
```
/chronicle cost-tips
```
This is the real, built-in Copilot CLI command for personalized
token/cost-saving tips based on your actual usage patterns — a great gut
check right after the `/context` before/after comparison above.

### Bonus: `/delegate` — hand the rest to GitHub
Once the feature and the fix both look good locally:
```
/delegate
> Open a PR with the priority feature and the id-generation fix.
```
`/delegate` sends the session to GitHub, where Copilot finishes the work
and opens the pull request for you — no need to keep a local session open
(and paying for its context) while it wraps up.

## Verify — and see the fix live
```
npm test
```
The regression test should now pass. Now prove the *feature* beyond the
terminal:
```
node web-app/server.js &      # then open http://localhost:4173
```
Add a few tasks with different priorities and watch the color-coded badges
and filter dropdown work live in the browser — the visible payoff for
today's habits.

## 🎉 Try It: Fun Checkpoint
Before running `/rubberduck`, guess out loud what hole it'll poke in your
plan. Then estimate: how many separate sessions would this have taken
*without* `/fleet`, `/compact`, `/handoff`, and skills? Compare your guess to
the real `/context` and `/usage` numbers you captured above.

## What's Next
Day 5: automate the boring stuff — including a daily cost-tip habit —
so Team Mewpilot spends less time (and budget) on busywork →
[`lab-04-daily-automations`](../lab-04-daily-automations/README.md)
