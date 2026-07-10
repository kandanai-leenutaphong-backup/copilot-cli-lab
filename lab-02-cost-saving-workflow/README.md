# Day 3 - Working Smart, Not Expensive

*The sports-class app works. For Friday's demo, Team Mewpilot wants a useful
next step: when a class is full, let people join a waitlist instead of seeing a
dead end.*

## Objective

Add a visible waitlist feature to the sports-class search and booking app while
practising research, planning, parallel work, reusable skills, and deliberate
context management.

## Check Your Starting Point

```sh
cd ../sample-app
npm test
```

The app built in Lab 01 should already be tested and `npm test` should pass.
If it does not, finish that work before starting the waitlist feature. There
is no intentional failing test or parallel bug-fix exercise in this lab.

```text
copilot
/context
```

Note the token count before you start.

## Steps - six cost-saving habits

### 0. Divide work across three terminals

Use three short-lived sessions instead of one long conversation:

```text
Terminal 1: copilot, then /research
Terminal 2: copilot, then /plan
Terminal 3: copilot, then /fleet
```

Pass only the research summary to the plan session, then only the plan to the
implementation session. This keeps the context each session needs small.

### 1. `/research` - research instead of guessing

```text
/research
Research the smallest way to add a waitlist to a dependency-free Node.js
sports-class booking app. Cover a JSON data shape, capacity rules, API and UI
behaviour, and tests for booking and waitlist transitions. Return a concise
implementation summary.
```

### 2. `/plan` - plan before editing

```text
/plan
Here is the research summary: <paste the summary only>

Plan a waitlist feature for the sports-class app. A full class should let a
user join the waitlist. The UI should show available places or waitlist status.
Include validation, tests, and the exact files to change. Keep the plan small.
```

Review the plan before asking Copilot to edit code.

### 3. `/fleet` - parallelize independent work

```text
/fleet
Here is the approved plan: <paste the plan only>

Implement the waitlist feature in parallel workstreams: server/data changes,
browser UI changes, and Node built-in regression tests. Keep the app
dependency-free and preserve existing search and booking behaviour.
```

### 4. Reuse generic skills

Update the architecture document created in Lab 01 so it includes the
waitlist:

```text
/architecture-sketch Update Architecture.md to include the waitlist feature.
```

Then use the included review skill for the finished change:

```text
/code-review-checklist Review the waitlist implementation for correctness and
missing regression tests.
```

### 5. `/rubberduck` - catch mistakes while they are cheap

```text
/rubberduck
Here is my waitlist plan and diff. Look for overbooking, duplicate waitlist
entries, unclear user feedback, and missing test cases.
```

### 6. Manage context deliberately

Use these commands as the work grows:

```text
/context
/compact
/new
```

Use `/compact` after a long research or review discussion. Use `/new` when you
switch to an unrelated task, then carry over only a concise handoff or plan.

### 7. Finish with a handoff

```text
/handoff
Summarize the waitlist feature, tests run, remaining limitations, and the next
small improvement for the sports-class app.
```

Start a fresh session with `/new`, provide the handoff document, and compare
`/context` before and after. The new session should have the relevant outcome
without the full exploration trail.

## Verify the feature

```sh
npm test
npm run web
```

Open the local URL, fill a class to capacity, then join its waitlist. Confirm
that search still works and that the UI clearly distinguishes an available
place from a waitlist entry.

## What's Next

Day 4 automates a lightweight daily usage check:
[`lab-03-daily-automations`](../lab-03-daily-automations/README.md)
