---
name: release-notes-writer
description: Use when asked to draft release notes, a changelog entry, or a demo/standup summary for mewpilot-tasks based on recent git commits or a described change.
license: MIT
---

# Release Notes Writer

Draft short, friendly release notes for Team Mewpilot's task tracker
(`mewpilot-tasks`), written in the team's voice: upbeat, a little informal,
and honest about bugs that got fixed along the way.

When invoked:

1. Look at recent git history (`git log --oneline -n 10`) or the change
   described by the user — whichever is available.
2. Group changes into: **Fixes**, **New stuff**, and **Under the hood**
   (skip any section with nothing to report).
3. Keep each bullet to one sentence. No corporate jargon, no "leveraging
   synergies" — this is a small team's scrappy task tracker, not an
   enterprise product.
4. If a bug fix is included, briefly mention the user-visible impact (e.g.
   "task ids no longer collide after removing and re-adding a task").
5. End with a one-line "what's next" teaser if there's an obvious follow-up
   (e.g. an open TODO or a known limitation).

Output as Markdown, ready to paste into a standup message or a GitHub
release description.
