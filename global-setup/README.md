# Global Setup Toolkit

Ready-to-install global Copilot CLI skills and instructions, extracted for
this lab so you don't have to build them from zero. These apply across
**every** project on your machine, not just `copilot-cli-lab/`.

## What's Here
```
global-setup/
  global-instructions.template.md   # copy into your global instructions file
  skills/
    handoff/SKILL.md                 # /handoff - compact a session into a handoff doc
    create-copilot-skills/SKILL.md   # guide Copilot uses to scaffold new skills for you
```

## Install

1. **Global instructions.** Ask Copilot CLI where your global instructions
   file lives (`> Where do you look for global instructions on this
   machine?`), then copy the contents of `global-instructions.template.md`
   into it (merge with anything already there).

2. **Global skills.** Copy each skill folder into `~/.copilot/skills/`:
   ```
   cp -r global-setup/skills/handoff ~/.copilot/skills/handoff
   cp -r global-setup/skills/create-copilot-skills ~/.copilot/skills/create-copilot-skills
   copilot
   /skills reload
   ```

3. **Verify.**
   ```
   /skills list
   /skills info handoff
   /skills info create-copilot-skills
   ```
   Both should show up as available globally, in any project.

## Why These Two Skills

- **`handoff`** — teaches Copilot to compact a long conversation into a
  clean handoff document (with a "suggested skills" section) so the next
  session — yours tomorrow, or a teammate's — doesn't need a full
  re-explain. Directly reused in `lab-02-cost-saving-workflow`.
- **`create-copilot-skills`** — the meta-skill: a reference guide Copilot
  uses to scaffold *new* skills correctly (skill locations, `SKILL.md`
  format, frontmatter fields). It supports the simple, reusable project-local
  skills created in Lab 01.

## Keep Global Instructions Lean

`global-instructions.template.md` is intentionally tiny: one commit-message
rule and one sign-off rule. Global instructions are resent on **every turn
of every session in every project**, so every extra line is a permanent,
repeating token cost — unlike a project-local skill, which only loads when
that project is open. When you extend this file, ask "does this need to
apply everywhere, forever?" before adding a line. If not, it belongs in a
project-local skill (see `lab-01-skills-and-instructions`) instead.

See [`lab-01-skills-and-instructions/README.md`](../lab-01-skills-and-instructions/README.md)
for the guided walkthrough that uses these files.
