# Day 6 — Automating the Busywork

*Demo's tomorrow. The team wants to spend today on polish, not chores. Enter
the GitHub Copilot App — for the quick, everyday automations that don't need
a full terminal session.*

## Objective
Use the GitHub Copilot App's `/new` and `/compact` commands to handle two
common daily chores: starting fresh work and tidying up a long conversation.

## Steps

### 1. `/new` — Start a clean session for a new task
In the GitHub Copilot App, start a fresh conversation with `/new` when
switching context — e.g., moving from "fix the id bug" to "prep the demo
script".
```
/new
> Help me draft a 3-minute demo script for mewpilot-tasks, covering the
> add/list/complete/remove flow and today's bug fix story.
```
Notice how starting clean avoids dragging in unrelated context from earlier
debugging conversations.

### 2. `/compact` — Tidy up a long-running conversation
After a long back-and-forth (e.g., yesterday's `/plan` → `/research` →
`/fleet` → `/rubberduck` → `/chronicles` session from Day 4), run:
```
/compact
```
to condense the conversation history while keeping the important decisions
and context — handy right before a `/handoff` or before the context window
fills up.

### 3. Put it together
Practice the daily rhythm Team Mewpilot now uses:
1. `/new` for each distinct task
2. Work the task
3. `/compact` before wrapping up or handing off
4. `/handoff` (from Day 5) if someone else picks it up next

## 🎉 Try It: Fun Checkpoint
Run `/compact` on today's session, then ask "what did we just condense?" —
see how well the summary captures the demo-prep story.

## What's Next
Bonus round: keeping all this Copilot usage sustainable for the team's budget
→ [`lab-06-billing-budgeting`](../lab-06-billing-budgeting/README.md)
