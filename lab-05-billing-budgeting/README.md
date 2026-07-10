# Bonus — Keeping the Sprint Sustainable

*Demo went great! Before the retro, the team lead pulls up the GitHub billing
dashboard: "Let's make sure this stays sustainable before we roll it out to
the whole org."*

## Objective
Get comfortable checking and optimizing Copilot-related billing/usage so
this doesn't become a surprise later. (Lighter, concept-focused — no deep
hands-on required.)

## Steps

1. **Understand usage-based billing (UBB).** Copilot billing has two
   layers:
   - **Seats** — a flat per-user cost for platform access (IDE, CLI, chat).
   - **Premium requests / tokens** — usage-based cost on top, driven by
     *which model* you call and *how much* context you send it. Pricier
     reasoning models (Opus-tier, GPT-5.5-tier) cost more per request than
     mid-tier (Sonnet-tier) or light models (Haiku/mini-tier) — the same
     model-tier choice from Day 2 directly drives this bill.

2. **Check current usage.** In GitHub, go to
   **Settings → Billing and licensing → Copilot** (org or personal, depending
   on your access) and review active seats / usage, including a breakdown
   by model if available.

3. **Understand layered budgets.** Larger orgs typically set budgets at
   more than one level — e.g. an org-wide monthly cap, with team- or
   project-level budgets underneath it, so one runaway workflow can't blow
   the whole org's spend. Ask: does your org set budgets at just one layer,
   or several?

4. **Identify optimization levers**, and discuss as a team which apply here
   — several of these are the exact same habits practiced earlier today:
   - Right-sizing seat assignments (remove inactive seats)
   - Choosing appropriate plans/tiers for different roles
   - **Model choice** — default to Auto or a mid-tier model; reserve
     premium reasoning models for planning/debugging, not routine
     implementation (Day 2 / Day 3)
   - **Provide only relevant context** — smaller prompts, `/compact`,
     `/handoff`, and starting new sessions instead of letting one session's
     context grow unbounded (Day 3)
   - **Divide and conquer** — `/research` → `/plan` → `/fleet` handoffs
     keep each stage's context small instead of one giant session paying
     for everything at once (Day 3)
   - Setting budgets/alerts where available

5. **Checklist — run through with your team:**
   - [ ] Do we know how many Copilot seats are active vs. assigned?
   - [ ] Do we know which features/models drive the most usage?
   - [ ] Is there a budget or alert threshold set, and at what layer(s)?
   - [ ] Is there an owner responsible for reviewing this monthly?

## 🎉 Try It: Fun Checkpoint
As a team, guess your org's Copilot spend for the month before looking it up.
Closest guess wins bragging rights.

## Wrap-Up
That's the full sprint! Team Mewpilot went from a rough task tracker (and a
small web app) to a demo-ready product, powered by GitHub Copilot CLI's
setup, global & local skills, cost-saving workflows, daily automations, and
even its own slide deck — all while keeping an eye on cost. 🎉
