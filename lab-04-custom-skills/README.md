# Day 5 — Build Your Own Teammate

*The bug is fixed, the demo is looking good. "You know what would save us
even more time?" says the lead. "A skill that's ours — built for exactly how
Team Mewpilot works. And a way to hand off work when someone logs off for
the day."*

## Objective
Build a custom skill with `/create-skill`, then practice handing work
between sessions with `/handoff`.

## Steps

### 1. `/create-skill` — Build a Team Mewpilot skill
```
cd ../sample-app
copilot
/create-skill
> Create a skill called "task-tracker-release-notes" that reads recent
> git commits in this repo and drafts a short, friendly release note in
> Team Mewpilot's voice.
```
Walk through the scaffold Copilot generates. Inspect the resulting skill
file(s) — what makes a skill "a skill" versus a one-off prompt?

### 2. Try the new skill
```
> Use the task-tracker-release-notes skill to draft notes for today's fix.
```

### 3. `/handoff` — Pass the baton
Simulate end-of-day: one teammate needs to hand off in-progress context to
whoever picks this up tomorrow.
```
/handoff
> Summarize where we left off on the id-generation fix and the new release
> notes skill, so the next session can pick up immediately.
```
Start a **new** Copilot CLI session and confirm the handoff summary gives
enough context to continue without re-explaining everything.

## 🎉 Try It: Fun Checkpoint
Have a "teammate" (another participant, or you in a second terminal) receive
your `/handoff` summary cold and try to continue the work using only that
context. Did it work?

## What's Next
Day 6: automate the boring stuff so Team Mewpilot spends less time on busywork
→ [`lab-05-daily-automations`](../lab-05-daily-automations/README.md)
