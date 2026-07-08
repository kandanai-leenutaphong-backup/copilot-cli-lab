---
name: standup-recap
description: Use when asked to draft a standup update, demo summary, or "what changed" recap for mewpilot-tasks, based on the current contents of tasks.json or a described change.
license: MIT
---

# Standup Recap

Draft a short, friendly standup update for Team Mewpilot's task tracker
(`mewpilot-tasks`), written in the team's voice: upbeat, a little informal,
and honest about bugs that got fixed along the way.

When invoked:

1. Look at the current `tasks.json` (which tasks are done, in progress, or
   still open) or the change described by the user — whichever is available.
   No git history needed; this is a beginner-friendly skill that only reads
   the app's own data file.
2. Group the update into: **Finished**, **In progress**, and **Blocked /
   Known issues** (skip any section with nothing to report).
3. Keep each bullet to one sentence. No corporate jargon, no "leveraging
   synergies" — this is a small team's scrappy task tracker, not an
   enterprise product.
4. If a bug fix is included, briefly mention the user-visible impact (e.g.
   "task ids no longer collide after removing and re-adding a task").
5. End with a one-line "what's next" teaser if there's an obvious follow-up
   (e.g. an open task or a known limitation).

Output as Markdown, ready to paste into a standup message or a chat channel.
