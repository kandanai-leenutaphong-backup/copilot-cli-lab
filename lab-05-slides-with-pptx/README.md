# Day 6 — Show Off the Sprint

*The demo's polished, the bug's fixed, the automations are humming. One
teammate pipes up: "Can we get slides out of all this? Something to open the
Friday demo with?" Turns out Copilot CLI can build the deck too.*

## Objective
Use Copilot CLI's **pptx skill** (the same one used to build this lab's own
slide deck!) to generate a short slide deck about Team Mewpilot's sprint —
straight from the repo's READMEs and commit history.

## Steps

1. **Invoke the skill.**
   ```
   cd ..
   copilot
   /pptx
   ```
   If `/pptx` isn't available as a slash command in your CLI version, ask
   directly:
   ```
   > Use the pptx skill to build a slide deck.
   ```

2. **Give it real material.** Point it at this repo instead of starting from
   a blank page:
   ```
   > Build a short (6-8 slide), story-driven deck called "Team Mewpilot:
   > Demo Day" summarizing our sprint - pull the story beats from
   > README.md and lab-00 through lab-06, and pull real highlights from
   > `git log --oneline` in sample-app/. Keep text minimal and visual per
   > slide, like a real conference talk, not a text dump.
   ```

3. **Iterate like a real deck review.** Ask Copilot to:
   - Swap in a different color palette that fits "scrappy startup team".
   - Add a slide with a screenshot of the `web-app/` UI from Day 1
     (`node web-app/server.js`, then a screenshot of http://localhost:4173).
   - Tighten any slide that feels text-heavy.

4. **Compare with the original deck.** Open `../slides/copilot-cli-lab.pptx`
   (the deck this whole lab shipped with) side by side with your new one —
   what did Copilot do differently when given your repo's real content
   versus a fresh brief?

## 🎉 Try It: Fun Checkpoint
Present your generated deck to the rest of the group in under 2 minutes.
Award a prize for "most Team Mewpilot" slide.

## What's Next
Bonus round: keeping all of this — chronicles, automations, and now
slide decks — sustainable for the team's budget →
[`lab-06-billing-budgeting`](../lab-06-billing-budgeting/README.md)
