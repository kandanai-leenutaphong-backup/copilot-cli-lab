# Day 3 — Rules Just for This Codebase

*"The global cat-pun rule is great," says one teammate, "but Copilot keeps
suggesting patterns that don't fit `mewpilot-tasks`. We need project-specific
instructions."*

## Objective
Set up a **project-local skill** (and/or local instructions) scoped only to
`sample-app/`, and see how it interacts with the global skill from Day 2.

## Steps

1. **Locate the local skill convention** for this project. Ask Copilot CLI:
   ```
   cd ../sample-app
   copilot
   > Where would a project-local skill or instructions file live for this repo?
   ```

2. **Create a local instructions file** for `sample-app/` capturing
   project-specific conventions, e.g.:
   ```
   - Task ids must always be unique - flag any code that could generate duplicates
   - This is a zero-dependency Node.js project - do not suggest adding npm packages
   - Tests live in test/ and use Node's built-in assert module
   ```

3. **Add a local skill** relevant to this codebase — for example, a "task
   tracker linter" skill that checks for the specific id-uniqueness rule
   above. Ask Copilot for the local skill scaffold if you're unsure of the
   format.

4. **Compare local vs. global.** Open a Copilot CLI session in a *different*
   scratch folder and confirm the local skill/instructions from this lab do
   **not** apply there — only the global ones from Day 2 do.

5. **Combine them.** Back in `sample-app/`, ask Copilot to review `src/index.js`
   and see both the global house rules *and* the local project rules show up
   in its reasoning/suggestions.

## 🎉 Try It: Fun Checkpoint
Ask Copilot: *"Given our local rule about unique task ids, do you see any
existing bugs in this codebase?"* — see if it spots the Day 4 mystery early!

## What's Next
Day 4: time to actually use Copilot CLI's example scenarios to plan, research,
and squash that bug → [`lab-03-example-scenarios`](../lab-03-example-scenarios/README.md)
