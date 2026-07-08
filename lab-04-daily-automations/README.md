# Day 5 — Automating the Busywork

*Demo's tomorrow. The team wants to spend today on polish, not chores. And
the lead has one more ask: "Can Copilot just... tell us how much we're
spending, automatically, every day? Start simple."*

## Objective
Set up two lightweight daily automations, starting dumb-simple and working
up:
1. A **daily token-usage check** — the simplest possible `/every` example.
2. A **9am scheduled report** built from a real GitHub Copilot App template
   — no custom prompt files needed, just point-and-click scheduling.

## Steps

### 1. Try the chronicle commands manually first
```
cd ../sample-app
copilot
/chronicle standup
/chronicle cost-tips
```
These are the real, built-in Copilot CLI commands — `standup` reports on
your last day of work, `cost-tips` gives personalized tips to reduce token
usage based on your actual usage patterns. Run both and skim the output —
this is what today's automation will produce on a schedule instead of on
demand.

### 2. The simplest possible `/every` example
Start dumb-simple, on purpose — this is the whole point of a first
automation:
```
/every
> Every day, summarize the token usage from the last 24 hours in one short
> paragraph.
```
That's it. No files, no flags, no GitHub API calls — just a scheduled
prompt that reuses `/chronicle cost-tips` under the hood. Confirm it's
scheduled:
```
/tasks
```

### 3. Level up with a GitHub Copilot App template
Once the simple version feels natural, build the real morning report (e.g.
a 9am issue-triage summary) using a **ready-made template from the GitHub
Copilot App** instead of writing your own prompt file from scratch — open
the app, browse its automation templates, and point it at this repo. This
is the faster path for anything beyond the "one paragraph" example above:
you're customizing a template, not authoring one.

### 4. Keep sessions lean while you set this up
Reuse Day 4's habits here too:
- `/new` when you start setting up the schedule (don't drag in yesterday's
  feature-build context).
- `/compact` once you've iterated on the prompt wording a few times, then
  `/context` to confirm it actually shrank.

## 🎉 Try It: Fun Checkpoint
Run the manual `/chronicle cost-tips` once, then imagine (or actually
schedule) the daily token-usage check running automatically for a week. As
a team, guess how many minutes per day this saves at standup — then check
back after a real week of data.

## What's Next
Bonus round: with a daily cost check already flowing automatically, it's
time to check the actual GitHub bill →
[`lab-06-billing-budgeting`](../lab-06-billing-budgeting/README.md)

*(Psst — want to show off the sprint itself? There's a bonus lab for that:
[`lab-05-slides-with-pptx`](../lab-05-slides-with-pptx/README.md).)*
