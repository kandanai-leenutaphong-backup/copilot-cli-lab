# Day 3 - Working Smart, Not Expensive

*Team Mewpilot is ready to build its sports-class app. For Friday's demo, the
first version must let people search classes, book an available place, and join
a waitlist when a class is full.*

## Objective

Build a visible sports-class search and booking app with a waitlist feature
while practising research, planning, reusable skills, and deliberate context
management.

## Check Your Starting Point

```sh
cd ../sample-app
```

The starter is intentionally empty. You will build the app in this lab.

```text
copilot
/context
```

Note the token count before you start.

## Steps - six cost-saving habits

### 0. Divide work across three terminals

Use three short-lived sessions instead of one long conversation. Choose the
model for each session in the CLI model picker. These are recommendations, not
requirements: choose a different model if it better fits your needs.

```text
Terminal 1: copilot, select Sonnet 4.6, then /research
Terminal 2: copilot, select Opus 4.6, then /plan
Terminal 3: copilot, select Sonnet 4.6, then /implement
```

Pass only the research summary to the plan session, then only the plan to the
implementation session. This keeps the context each session needs small.

### 1. `/research` - research instead of guessing

```text
/research
Research the smallest way to build a dependency-free Node.js sports-class
booking app with a waitlist. Cover a JSON data shape, capacity rules, API and
UI behaviour, and tests for booking and waitlist transitions. Return a concise
implementation summary.
```

### 2. `/plan` - plan before editing

```text
/plan
Here is the research summary: <paste the summary only>

Plan the sports-class app and its waitlist feature. A full class should let a
user join the waitlist. The UI should show available places or waitlist status.
Include validation, tests, and the exact files to create or change. Keep the
plan small.
```

Review the plan before asking Copilot to edit code.

### 3. `/implement` - implement the approved plan

```text
Here is the approved plan: <paste the plan only>

Implement it now
```

### 4. Reuse generic skills

Update the architecture document so it includes the waitlist:

```text
/architecture-sketch Update Architecture.md with the latest changes in sample_app/
```

Then use the included review skill for the finished change:

```text
/code-review-checklist Review the waitlist implementation for correctness and
missing regression tests.
```

### 5. `/rubber-duck` - catch mistakes while they are cheap

```text
/rubber-duck
Can a full class accidentally receive another booking? Explain the simplest
check the app needs before it changes any booking data.
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
