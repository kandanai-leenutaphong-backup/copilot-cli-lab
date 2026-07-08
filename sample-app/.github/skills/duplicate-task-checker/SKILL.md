---
name: duplicate-task-checker
description: Use when reviewing or editing sample-app code that creates, assigns, or reassigns task ids in mewpilot-tasks. Flags any logic that could produce duplicate ids (e.g. deriving ids from array length or index instead of a stable counter).
license: MIT
---

# Duplicate Task Checker

`sample-app` (Team Mewpilot's task tracker) has one hard rule: **task ids
must always be unique**, even after tasks are removed and re-added.

When reviewing or writing code in this repo that touches task ids:

1. Flag any id-generation logic based on `array.length`, array index, or any
   value that changes when items are removed — these silently produce
   duplicate ids once an item has been deleted.
2. Prefer a monotonically increasing counter persisted alongside the data
   (e.g. `nextId` stored in the JSON file), or `Math.max(...existingIds) + 1`
   with a fallback for the empty-list case.
3. When proposing a fix, also propose (or update) a regression test in
   `test/` that adds → removes → adds again, then asserts all ids are
   unique.
4. This is a zero-dependency Node.js project — do not suggest adding npm
   packages to solve this; solve it with plain JavaScript.

This skill exists because of a real bug tracked in
`test/tasks.test.js` — see `lab-03-cost-saving-workflow/README.md` for the
guided walkthrough of fixing it.
