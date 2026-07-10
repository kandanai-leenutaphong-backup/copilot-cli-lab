# Day 2 - Teach Copilot the Rules

*Team Mewpilot has an empty starter folder and a focused idea: help people
find and book sports classes. Before they build anything, they explore how
small, reusable rules make Copilot's help predictable.*

## Objective

Learn how short, reusable project-local skills guide future work without
repeating the same prompt. This lab uses generic questions only. The
sports-class app is implemented in Lab 02.

## Part 1 - The concept: global and local skills

- **Global** instructions and skills live in `~/.copilot/...` and apply to
  every project on a machine. Keep them small because they add recurring
  context to every session.
- **Project-local** instructions and skills live in `.github/` and apply only
  to this repository. Use them for rules that belong to this app.

Today's hands-on work is entirely project-local. Nothing is installed into
your personal Copilot configuration.

## Part 2 - Hands-on: practise generic skill questions

### 1. Inspect the local skills with generic questions

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
/code-review-checklist What correctness, validation, and regression-test
questions should I ask before merging a small Node.js change?
```

Try the status-update skill with a fictional project update:

```text
/status-update Turn this fictional update into a concise status note: "The
team chose a feature, documented the constraints, and is ready to plan."
```

### 2. Create one simple, reusable skill

Use the meta-skill as a slash command:

```text
/create-copilot-skills
```

Then give it this request:

```text
Create a project-local skill named architecture-sketch at
`./.github/skills/architecture-sketch/` in the current `sample-app` project.
Keep it generic so it works for any small web or Node.js app. When invoked, it
should inspect the requested code and write or update Architecture.md at the
project root. The document should briefly cover the app's purpose, main parts,
data flow, storage, and how to run and test it. It must also include a Mermaid
diagram that sketches the architecture. Use the normal SKILL.md frontmatter and
keep the instructions short.
```

Reload and inspect the new skill:

```text
/skills reload
/skills info architecture-sketch
```

Use the skill with a generic hypothetical example:

```text
/architecture-sketch Sketch the architecture of a small Node.js web app with a
browser client, a server, and local JSON storage.
```

Review the generated `Architecture.md`. It should help a teammate understand
the hypothetical app without reading every source file.

### 3. Confirm scoping

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

Day 3 builds the sports-class app using a research, plan, and implementation
workflow that keeps the session focused and cost-aware:
[`lab-02-cost-saving-workflow`](../lab-02-cost-saving-workflow/README.md)
