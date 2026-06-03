---
description: "Overview of Codex configuration and expansion, sorting out AGENTS.md, config.toml, Skills, MCP, Subagents, security approval and team configuration paths."
---

# Configuration and Extensions overview

The learning curve of Codex has two stages: first, you can use it, and then you can configure it. You can use it to solve single tasks, and you can configure it to turn Codex into a stable personal workbench and team collaboration tool.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex documentation hub](https://developers.openai.com/codex/), [Codex CLI features](https://developers.openai.com/codex/cli/features), [Basic configuration](https://developers.openai.com/codex/config-basic), [AGENTS.md](https://developers.openai.com/codex/guides/agents-md), [Codex Skills](https://developers.openai.com/codex/skills) and [Codex security](https://developers.openai.com/codex/agent-approvals-security).
:::

![Codex configuration map](/images/codex-config-map.svg)

## First understand the four-layer configuration

|Hierarchy|Typical documents or entries|Problem solved|Beginner advice|
| --- | --- | --- | --- |
|Project rules| `AGENTS.md` |Let Codex understand repository conventions, test commands, and directory boundaries|Write one copy for each important repository|
|local configuration| `~/.codex/config.toml` |Set up models, sandboxes, approvals, profiles, MCP|Be conservative first, then release pertasks according to tasks|
|Expansion capabilities| Skills、MCP、Plugins、Subagents |Reuse processes, connect external tools, and split complex tasks|Precipitate the high-frequency process first|
|security boundary| Sandbox、Approvals、Admin policy |Control commands, networks, sensitive files, organizational policies|Leave high-risk operations to manual confirmation|

## How to read this topic

1. Read [CLI options and commands](./cli-options.md) first to understand interactive mode, non-interactive mode, resume sessions, and Slash Commands.
2. Read [Configuration file config.toml](./config-file.md) again to know which settings are suitable for individuals and which are suitable for team templates.
3. Then read [MCP, Skills and Subagents](./mcp-skills-subagents.md) to turn repetitive processes into reusable capabilities.
4. Finally, read [Security, Approval and Management](./security-admin.md) to establish pertask boundaries and audit awareness.

## Three principles before configuration

- Write the task rules first, and then adjust the tool switches. Task descriptions, AGENTS.md, and test commands often improve the quality of results better than complex configurations.
- Verify it on a small scale first, and then promote it to the team. Copying one person's configuration habits directly to the team repository can easily cause pertask and environment differences.
- Preserve approvals first, then automate them gradually. There should be clear reasons for deleting files, accessing the network, installing dependencies, writing to system directories, and reading sensitive data.

## Recommended minimum configuration route

### Day 1: Available to individuals

- Install CLI.
- Log in and complete a read-only repository summary.
- Create project-level `AGENTS.md`.
- Learn common commands such as `/status`, `/model`, `/approvals`, `/diff`, and `/quit`.

::: info Screenshot placeholder
Please add screenshots of CLI status commands. Suggested file: `docs/.vuepress/public/screenshots/config/01-cli-status.png`.
:::

### Week 1: Stabilizing Practice

- Write down test commands and coding styles for commonly used repositories.
- Configure the default profile that suits you in `~/.codex/config.toml`.
- Consolidate testing, code review, and document updates into task templates.
- Record each failure case and add it to the Troubleshooting Guide.

### Month 1: Team Knowledge Base

- Merge project rules into the repository.
- Consolidate team processes into Skills.
- Develop unified screenshots, demos and PR templates for Cloud / App / CLI.
- Set approval requirements for network access, credentials, publishing, and database changes.

## Common misunderstandings

|Misunderstanding|better approach|
| --- | --- |
|Only adjust the model without writing the context|Clarify the repository structure, task scope, and acceptance criteria for Codex|
|Only let it change the code, not let it verify|Each task specifies minimal verification commands|
|Directly release all pertasks|Use read-only and approval mode first, and then execute the command after confirming its intent.|
|Put all the rules into prompt words|Long-term rules are placed in `AGENTS.md` or Skill|
|Each team member has his or her own role|Key rules go into the repository, personal preferences stay local|

## Official data extension

- [Codex CLI features](https://developers.openai.com/codex/cli/features)
- [Codex config basic](https://developers.openai.com/codex/config-basic)
- [Codex config advanced](https://developers.openai.com/codex/config-advanced)
- [Codex config reference](https://developers.openai.com/codex/config-reference)
- [AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)
- [Codex skills](https://developers.openai.com/codex/skills)
- [Codex security](https://developers.openai.com/codex/agent-approvals-security)
