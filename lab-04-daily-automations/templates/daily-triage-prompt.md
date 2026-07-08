# 9am Issue Triage — Scheduled Prompt Template

Use this as the prompt text when setting up a recurring `/every` schedule
(see the main [`README.md`](../README.md) steps). Replace `<owner/repo>`
with your actual repository.

```
Pull open issues from <owner/repo> with `gh issue list --state open --limit 30
--json number,title,labels,createdAt`. Triage them into High/Medium/Low
priority based on labels and age (anything unlabeled and >7 days old is at
least Medium). Then fill out today's chronicle using the template at
lab-04-daily-automations/templates/chronicles-cost-tip.md - include a real
issue-triage table, a genuinely useful cost tip (not a repeat of yesterday's),
and 1-2 concrete action items. Save the result to
lab-04-daily-automations/chronicles/{{today's date}}.md and print a short
Slack-friendly summary.
```

## Why This Prompt Shape
- **Pulls real data** (`gh issue list`) instead of asking Copilot to
  guess — keeps the triage grounded and useful, not generic.
- **Reuses the template** instead of re-describing the desired format every
  run — cheaper (in tokens) and more consistent (in output).
- **Asks for a fresh cost tip** so the daily chronicle doubles as a running
  "how we saved money this week" log for the team retro.
