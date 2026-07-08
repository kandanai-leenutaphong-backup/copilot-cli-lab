# Day 5 — Automating the Busywork

*Demo's tomorrow. The team wants to spend today on polish, not chores. And
the lead has one more ask: "Can Copilot just... triage our issues every
morning before we sit down? And tell us if we're burning too much budget
while it's at it?"*

## Objective
Set up two lightweight daily automations:
1. A **`/chronicle cost-tips` template** that turns session wrap-ups into a
   consistent, shareable log.
2. A **9am scheduled issue-triage automation** (`/every`) that pulls real
   data from GitHub and drafts today's chronicle for you — before the team's
   first standup.

## What's Already Set Up
```
lab-04-daily-automations/
  templates/
    chronicles-cost-tip.md      # the daily chronicle output template
    daily-triage-prompt.md      # the prompt text to schedule with /every
```

## Steps

### 1. Try the real chronicle commands manually first
```
cd ../sample-app
copilot
/chronicle standup
```
Then:
```
/chronicle cost-tips
```
These are the real, built-in Copilot CLI commands — `standup` reports on
your last day of work, `cost-tips` gives personalized tips to reduce token
usage based on your actual usage patterns. Now combine both into one
consistent shape:
```
> Summarize today's work using the template at
> ../lab-04-daily-automations/templates/chronicles-cost-tip.md, folding in
> what /chronicle standup and /chronicle cost-tips just told you.
```
Notice how the template keeps every chronicle in the same shape — easy to
skim, easy to compare day over day.

### 2. Schedule the 9am issue-triage automation
Open [`templates/daily-triage-prompt.md`](./templates/daily-triage-prompt.md),
swap in your repo, and schedule it:
```
/every
> (paste the prompt from templates/daily-triage-prompt.md, at 9am on weekdays)
```
This runs `gh issue list`, triages the results, and fills out a fresh
chronicle automatically — waiting for the team when they sit down.

### 3. Keep sessions lean while you set this up
Reuse Day 4's habits here too:
- `/new` when you start setting up the schedule (don't drag in yesterday's
  bug-fix context).
- `/compact` once you've iterated on the prompt wording a few times.

## 🎉 Try It: Fun Checkpoint
Run the manual chronicle once, then imagine (or actually schedule) it
running automatically for a week. As a team, guess how many minutes per day
this saves at standup — then check back after a real week of data.

## What's Next
Bonus round: with real cost tips already flowing from your daily chronicles,
it's time to check the actual GitHub bill →
[`lab-06-billing-budgeting`](../lab-06-billing-budgeting/README.md)

*(Psst — want to show off the sprint itself? There's a bonus lab for that:
[`lab-05-slides-with-pptx`](../lab-05-slides-with-pptx/README.md).)*
