# Day 4 — Working Smart, Not Expensive

*QA just filed a ticket: "removing a task and adding a new one sometimes
creates duplicate ids." The team groans — nobody wants to burn hours (or
premium requests) hunting this down. Today the team learns: the way you use
Copilot CLI changes what it costs you, in both time and usage.*

## Objective
Fix the real bug in `sample-app` (or `sample-app/web-app` — see Day 1) while
learning five cost-saving habits: **research before you guess, plan before
you spend, parallelize instead of repeating yourself, sanity-check before
you ship, and build reusable skills instead of reusable prompts.**

## The Bug
```
cd ../sample-app
npm test        # or: node test/tasks.test.js
```
You should see an `AssertionError` about duplicate task ids. That's today's
mission.

## Steps — five habits, each with a cost tip

### 1. `/research` — Research instead of guessing
```
copilot
/research
> Research common strategies for generating unique ids in a small
> JSON-file-backed Node.js app like this one.
```
💰 **Cost tip:** one focused `/research` call beats five rounds of "no, try
something else" — fewer round-trips, fewer tokens, faster fix. Doing this
*before* `/plan` means the plan is built on real answers, not a guess that
gets thrown away (and re-paid for) once research proves it wrong.

### 2. `/plan` — Plan before you spend
```
/plan
> Using what we just learned, plan a fix for the duplicate id bug in
> src/index.js and store.js.
```
💰 **Cost tip:** a bad plan burns tokens on a fix you'll throw away. A good
`/plan` costs a little upfront and saves a lot of wasted generation later —
review the plan *before* letting Copilot touch any code.

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
> Create a skill called "standup-recap" that reads tasks.json and drafts a
> short, friendly standup update in Team Mewpilot's voice — what got
> finished, what's in progress, what's blocked.
```
💰 **Cost tip:** a skill you build once is context you never have to
re-explain again. Compare this to Day 3's local skills, which already ship
in this repo at `sample-app/.github/skills/` — try `/create-skill` for a
*new* one Team Mewpilot doesn't have yet.

## Manage context size as you go
Long sessions cost more (bigger context = more tokens per turn). Use these
as you work through the five habits above:

- **`/compact`** — condense the conversation once the `/research` → `/plan`
  → `/fleet` → `/rubberduck` chain gets long, right before you check your
  `/chronicle cost-tips` or hand off.
- **`/new`** — start a clean session when you move to an unrelated task
  (e.g., switching from "fix the bug" to "draft the demo script") instead of
  dragging unrelated context along (and paying for it).
- **`/handoff`** — end of day, summarize where you left off so the next
  session (yours tomorrow, or a teammate's) doesn't need a full re-explain:
  ```
  /handoff
  > Summarize where we left off on the id-generation fix and the new
  > standup-recap skill, so the next session can pick up immediately.
  ```

### 6. See the actual savings — cost analysis checkpoint
Habits are only convincing once you can *see* the numbers. Before and after
you use `/compact`, `/new`, and `/handoff` above, check your usage:
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

### `/chronicle cost-tips` — capture the savings once
```
/chronicle cost-tips
```
This is the real, built-in Copilot CLI command for personalized
token/cost-saving tips based on your actual usage patterns — a great gut
check right after the cost analysis checkpoint above. Day 5 shows you how to
turn this into a daily habit with a reusable template:
[`templates/chronicles-cost-tip.md`](../lab-04-daily-automations/templates/chronicles-cost-tip.md).

## Verify — and see the fix live
```
npm test
```
The regression test should now pass. Now prove it beyond the terminal:
```
node web-app/server.js &      # then open http://localhost:4173
```
Add a task, remove it, add another — watch the ids stay unique in the
browser, live. Same fix, two interfaces, zero duplicate ids.

## 🎉 Try It: Fun Checkpoint
Before running `/rubberduck`, guess out loud what hole it'll poke in your
fix. Then estimate: how many separate sessions would this have taken
*without* `/fleet`, `/compact`, and skills? Compare your guess to the real
numbers from your `/usage` cost analysis checkpoint.

## What's Next
Day 5: automate the boring stuff — including a daily cost-tip habit —
so Team Mewpilot spends less time (and budget) on busywork →
[`lab-04-daily-automations`](../lab-04-daily-automations/README.md)
