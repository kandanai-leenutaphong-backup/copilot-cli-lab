---
name: create-copilot-skills
description: Guide for creating GitHub Copilot agent skills. Use when asked to create, scaffold, or explain how to build a new Copilot skill — global or project-level.
---

# Creating GitHub Copilot Agent Skills

## Skill Locations

| Scope | Directories | When to use |
|-------|-------------|-------------|
| **Global (personal)** | `~/.copilot/skills/<skill-name>/` | Applies to all projects on this machine |
| **Global (agents cross-tool)** | `~/.agents/skills/<skill-name>/` | Cross-tool global skills |
| **Project-level** | `.github/skills/<skill-name>/` | Repo-specific, checked into git |
| **Project-level (Claude)** | `.claude/skills/<skill-name>/` | Repo-specific, Claude-compatible |
| **Project-level (agents)** | `.agents/skills/<skill-name>/` | Repo-specific, cross-tool |

> Project-level skills take priority. Global skills are always available across all sessions.

## Skill Structure

```
<skill-name>/           # lowercase, hyphens only
├── SKILL.md            # required — instructions + frontmatter
├── scripts/            # optional — scripts Copilot can run
└── references/         # optional — extra context files
```

## SKILL.md Format

```markdown
---
name: my-skill                          # required: lowercase, hyphens only
description: What it does and when      # required: used by Copilot to decide when to load it
license: MIT                            # optional
allowed-tools: shell                    # optional: pre-approve tools (use with caution)
---

# Skill Title

Instructions for Copilot go here in plain Markdown.
Reference scripts or files from this directory as needed.
```

### Frontmatter fields

| Field | Required | Notes |
|-------|----------|-------|
| `name` | Yes | Must match directory name; lowercase + hyphens |
| `description` | Yes | Used to decide when to auto-load the skill — be specific |
| `license` | No | License text or SPDX identifier |
| `allowed-tools` | No | Pre-approves tools (e.g. `shell`). Only use if you fully trust the skill |

## Including Scripts

Place scripts in the skill directory. Reference them in `SKILL.md`:

```
my-skill/
├── SKILL.md
└── scripts/
    └── run.sh
```

In `SKILL.md` body:
```
Run `scripts/run.sh` from this skill's base directory with the file path as the first argument.
```

## Managing Skills

```bash
# List available skills
/skills list

# Toggle skills on/off
/skills

# Get info about a skill (shows location, description)
/skills info <skill-name>

# Reload after adding/editing a skill
/skills reload

# Install a skill from awesome-copilot
gh skill install <skill-name>
```

## Tips

- Keep `description` precise — Copilot uses it to decide when to load the skill automatically
- You can also invoke a skill explicitly: `Use the /my-skill skill to...`
- Skill content is injected into context at invocation time — keep SKILL.md lean
- Browse community skills at https://awesome-copilot.github.com/skills/
