# Day 4 — The Bug That Stumped the Team

*QA just filed a ticket: "removing a task and adding a new one sometimes
creates duplicate ids." The team groans — nobody wants to hunt this down
manually with the demo two days away. Time to bring in reinforcements.*

## Objective
Use Copilot CLI's example scenario commands to plan, research, debug, and
document a fix for the real bug in `sample-app/test/tasks.test.js`.

## The Bug
```
cd ../sample-app
npm test        # or: node test/tasks.test.js
```
You should see an `AssertionError` about duplicate task ids. That's today's
mission.

## Steps — one scenario per command

### 1. `/plan` — Plan the fix
```
copilot
/plan
> Our task tracker generates duplicate ids after a remove+add sequence.
> Plan a fix for src/index.js and store.js.
```
Review the proposed plan before letting Copilot touch any code.

### 2. `/research` — Understand the "why"
```
/research
> Research common strategies for generating unique ids in a small
> JSON-file-backed Node.js app like this one.
```
Compare a couple of approaches (incrementing counter stored in the file,
UUIDs, max-id+1, etc.) before picking one.

### 3. `/fleet` — Parallelize the work
```
/fleet
> Fix the id-generation bug AND add a regression test AND update the README
> known-issue note, as parallel workstreams.
```
Use `/fleet` to fan out the fix, the test, and the docs update as separate
tracked workstreams, then review each result.

### 4. `/rubberduck` — Sanity-check the fix
```
/rubberduck
> Here's my plan/diff for fixing the duplicate id bug - poke holes in it.
```
Let Copilot play skeptical teammate before you commit.

### 5. `/chronicles` — Capture the story
```
/chronicles
> Summarize today's debugging session for the team standup notes.
```
Use this to generate a shareable summary of what broke, why, and how it was
fixed — perfect for the Friday demo retro.

## Verify
```
npm test
```
The regression test from Day 4 should now pass.

## 🎉 Try It: Fun Checkpoint
Before running `/rubberduck`, guess out loud what hole it'll poke in your fix.
Were you right?

## What's Next
Day 5: the team wants Copilot to be more than a one-off helper — they want a
custom skill of their own → [`lab-04-custom-skills`](../lab-04-custom-skills/README.md)
