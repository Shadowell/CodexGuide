---
description: "Codex Team Practice Guide, organizing collaboration methods for AGENTS.md, PR, troubleshooting, knowledge base, task templates and team promotion."
---

# Team Playbook

The key for the team to use Codex is to write the rules clearly, run the verification, and settle the cases.

![Codex Security Boundary Layering](/images/codex-safety-layers.svg)

## Team access list

|project|suggestion|
| --- | --- |
| `AGENTS.md` |Write down the project structure, commands, style, and security boundaries|
|test command|Provide minimum relevant test and full test commands|
|PR template|Request an explanation of the scope of Codex participation, verification results and risks|
|safety rules|Clarify approval requirements for production data, keys, releases, and migrations|
|Case library|Precipitate the review of successful tasks and failures|

## Team Edition AGENTS.md Outline

```markdown
# AGENTS.md

## Project overview

## Common commands

## Directory boundaries

## Code specifications

## Testing requirements

## security boundary

## PR delivery requirements
```

## PR description template

```markdown
## background

## change

## Codex participation scope

## verify

## risk

## Screenshot or log
```

## Regular meeting review issues

- What types of tasks does Codex perform stably?
- Which types of tasks tend to get out of hand or require greater restraint?
- Which commands, rules, and screenshot instructions should be written into `AGENTS.md`?
- What successful cases can be turned into templates?
- Which failure cases should be written into a Troubleshooting Guide?

::: info Screenshot placeholder
Please add a screenshot of the Codex participation instructions in the team PR. Suggested file: `docs/.vuepress/public/screenshots/cloud/03-pr-codex-summary.png`.
:::
