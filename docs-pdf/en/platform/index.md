---
description: "Codex Entry Map, compares CLI, Desktop App, Cloud, IDE, ChatGPT and integrated ecology to help choose the appropriate work entrance."
---

# Codex Entry Map

CodexGuide regards Codex as a set of collaborative work systems. When learning, don't just stare at a certain interface; what really affects efficiency is: which tasks you put in which entrance.

![Codex use Entry Map](/images/codex-surfaces.svg)

::: tip final check
The last date of verification of official information: 2026-05-27. Reference [OpenAI Codex product page](https://openai.com/codex/), [Codex documentation hub](https://developers.openai.com/codex/), [Codex CLI official repository](https://github.com/openai/codex) and [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt).
:::

## Entry comparison table

|Entrance|more suitable|Typical tasks|learning priorities|
| --- | --- | --- | --- |
| [CLI](./cli.md) |Fast local iteration|Fix bugs, add tests, run commands, and explain the repository|Newbies first|
| [Desktop App](./app.md) |Local multitasking workbench|Multi-agent, Skills, Automations, and plugin collaboration|Advanced priority|
| [Cloud / Web](./cloud.md) |Longer tasks and parallel tasks|Repository tasks, PR, background analysis|Team first|
| [IDE](./ide.md) |Editor context|Local modifications, explanations, code reviews|Daily high frequency|
| [Codex in ChatGPT](./chatgpt.md) |Repository-oriented task assignment|Connect to GitHub, understand the repository, and collaborate to advance|Choose according to account capabilities|

## How to choose an entrance

- Tasks that require frequent viewing of command output: choose CLI.
- Tasks require multiple agents in parallel, Skills, or Automations: Select Desktop App.
- If the task takes a long time, you want to run it in the background, or PR may be generated: select Cloud / Web.
- You are editing a specific file: Select IDE.
- You want to dispatch repository-level tasks from the conversation: select Codex in ChatGPT.

## First time study advice

1. Create a minimal closed loop from the CLI.
2. Use desktop apps to experience local multitasking and skill accumulation.
3. Then enter Cloud/Web to learn long tasks, PR and team collaboration.
4. Read [Configuration and Extensions](/configuration/) and catch up on CLI options, config.toml, MCP, Skills, and security boundaries.
5. Precipitate high-frequency templates into `AGENTS.md`, case library and team specifications.

## The relationship between entry and configuration

|Configure theme|Mainly affects the entrance|Study page|
| --- | --- | --- |
| `AGENTS.md` |CLI / Desktop App / Cloud| [AGENTS.md](/guide/14-agents-md.md) |
|CLI options| CLI | [CLI options and commands](/configuration/cli-options.md) |
| `config.toml` | CLI | [Configuration file config.toml](/configuration/config-file.md) |
| Skills | App / CLI | [MCP, Skills and Subagents](/configuration/mcp-skills-subagents.md) |
| Worktrees |Desktop App| [Desktop App](./app.md) |
| Environments | Cloud / App | [Cloud / Web](./cloud.md) |
|Sandbox and Approvals|All entrances| [Security, Approval and Management](/configuration/security-admin.md) |

## Screenshot supplement list

::: info Screenshot placeholder
Please add a "puzzle of each entry point's homepage/startup interface" later. Suggested file: `docs/.vuepress/public/screenshots/platform/00-surfaces-collage.png`.
:::
