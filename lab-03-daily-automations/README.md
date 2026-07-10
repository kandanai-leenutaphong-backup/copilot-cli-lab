# Day 4 — Automating the Busywork

*Demo's tomorrow. The team wants to spend today on polish, not chores. And
the lead has one more ask: "Can Copilot just... tell us how much we're
spending, automatically, every day? Start simple."*

## Objective
Set up two lightweight daily automations, starting dumb-simple and working
up:
1. A **minute-level `/every` token-usage check** — the simplest possible
   automation, sped up so you can watch it fire live in the workshop.
2. A **GitHub Copilot App template** — install the app and use its
   point-and-click automation templates for the real morning report.

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
automation. In real usage you'd schedule this daily (e.g. "every day at
9am"), but for this workshop, use a **minute-level interval** so you can
actually see it fire while we're still in the room:
```
/every
> Every 5 minutes, summarize the token usage from the last hour in one
> short paragraph.
```
That's it. No files, no flags, no GitHub API calls — just a scheduled
prompt that reuses `/chronicle cost-tips` under the hood. Confirm it's
scheduled:
```
/every
```
Watch it actually fire once or twice during the lab, then switch the
interval to something daily (`every day at 9am`) before you leave — a
5-minute cadence is great for a live demo, terrible for your actual token
budget.

### 3. Install the GitHub Copilot App
The next level of automation lives outside the terminal, in the
**GitHub Copilot app** — a native desktop app for agent-driven development
(macOS, Windows, Linux) that gives you a centralized inbox for agent
sessions, issues, and PRs, plus point-and-click automation templates.

**Install:**
```
# Download from:
# https://github.com/features/ai/github-app
```
Sign in with the same GitHub account you authenticated Copilot CLI with.

**Quickstart:**
1. Open the app and sign in.
2. Point it at this repo (or any repo you have access to).
3. Start a session directly from an issue, a PR, or a free-form prompt —
   each session is isolated, so you can run several in parallel.
4. Browse its built-in **automation templates** instead of writing prompt
   files from scratch.

### 4. Level up with a GitHub Copilot App template
Once the simple `/every` version feels natural, build the real morning
report (e.g. a 9am issue-triage summary) using a **ready-made template from
the GitHub Copilot App** instead of writing your own prompt file from
scratch — open the app, browse its automation templates, and point it at
this repo. This is the faster path for anything beyond the "one paragraph"
example above: you're customizing a template, not authoring one.

### 5. Keep sessions lean while you set this up
Reuse Day 3's habits here too:
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
[`lab-05-billing-budgeting`](../lab-05-billing-budgeting/README.md)

*(Psst — want to show off the sprint itself? There's a bonus lab for that:
[`lab-04-slides-with-pptx`](../lab-04-slides-with-pptx/README.md).)*
