# Day 2 - Build Once, Teach Copilot the Rules

*Team Mewpilot has an empty folder and a focused idea: help people find and
book sports classes. Before they build, they want a few small rules that make
Copilot's help predictable.*

## Objective

Build a small sports-class search and booking app in `sample-app/`, then learn
how short, reusable project-local skills guide future work without repeating
the same prompt.

## Part 1 - The concept: global and local skills

- **Global** instructions and skills live in `~/.copilot/...` and apply to
  every project on a machine. Keep them small because they add recurring
  context to every session.
- **Project-local** instructions and skills live in `.github/` and apply only
  to this repository. Use them for rules that belong to this app.

Today's hands-on work is entirely project-local. Nothing is installed into
your personal Copilot configuration.

## Part 2 - Hands-on: build the app

### 1. Inspect the local skills with slash commands

```sh
cd ../sample-app
copilot
/skills list
/skills info code-review-checklist
/skills info status-update
```

The two included skills are deliberately generic:

- `code-review-checklist` reviews correctness, validation, error handling, and
  test gaps in any small Node.js app.
- `status-update` turns any project progress into a short, plain-language
  update.

Try one with a slash command:

```text
/code-review-checklist Review package.json and the empty starter. What must be
created before this can be a working app?
```

### 2. Generate a focused first version

Ask Copilot to build the app, not a large production platform:

```text
Build a dependency-free Node.js sports-class search and booking app in this
empty starter. Create src/index.js as the server entry point, a small browser
UI, a local JSON data file created on demand, and Node built-in tests.

Seed a few classes with name, sport, time, instructor, capacity, and booked
places. Users must be able to search by sport and book an available place.
Validate all client input and prevent bookings beyond capacity. Update
package.json with start, web, and test scripts. Keep the implementation small.
```

After reviewing the generated plan and code, run:

```sh
npm test
npm run web
```

Open the local URL printed by the server. Search for a sport and make a booking
to confirm the app has a visible, understandable result.

### 3. Create one simple, reusable skill

Use the meta-skill as a slash command:

```text
/create-copilot-skills
```

Then give it this request:

```text
Create a project-local skill named architecture-sketch in .github/skills/.
Keep it generic so it works for any small web or Node.js app. When invoked, it
should inspect the requested code and write or update Architecture.md at the
repository root. The document should briefly cover the app's purpose, main
parts, data flow, storage, and how to run and test it. Use the normal SKILL.md
frontmatter and keep the instructions short.
```

Reload and inspect the new skill:

```text
/skills reload
/skills info architecture-sketch
```

Use the skill directly at the end of the exercise:

```text
/architecture-sketch Sketch the architecture of this app.
```

Review the generated `Architecture.md`. It should help a teammate understand
the app without reading every source file.

### 4. Confirm scoping

Open Copilot CLI in a scratch folder outside this repository and run
`/skills list`. The project-local skills should not appear there. That is the
point: this app's rules travel with the repository, not with every project on
your machine.

## What makes a good skill?

Keep a skill simple enough to understand in one read:

1. Name the situation that should trigger it.
2. Give a short checklist of the rules.
3. State the expected result.

`architecture-sketch` works because it creates a useful project document
without being tied to sports classes. Avoid skills that encode a one-off ticket
or repeat a long prompt word for word.

## What's Next

Day 3 adds a small booking feature using a research, plan, and implementation
workflow that keeps the session focused and cost-aware:
[`lab-02-cost-saving-workflow`](../lab-02-cost-saving-workflow/README.md)
