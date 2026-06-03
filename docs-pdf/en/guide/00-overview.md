---
description: "The Codex Learning Path, from entry-point awareness, task loop, engineering verification to team knowledge codification, helps novices establish a complete usage path and choose the next chapter."
---

# Learning Path

CodexGuide is organized into four layers: "understanding the entrance, running through the tasks, establishing methods, and team knowledge codification". You can get started with the CLI, or you can start with desktop, ChatGPT, or cloud tasks; the key is to first understand the task rhythm that each entry point is suitable for hosting.

::: tip final check
The last date of verification of official information: 2026-05-27. Core sources include [OpenAI Codex product page](https://openai.com/codex/), [Codex documentation hub](https://developers.openai.com/codex/), [Codex CLI official repository](https://github.com/openai/codex) and [Codex Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt).
:::

![Codex use Entry Map](/images/codex-surfaces.svg)

## You need to establish a global understanding first

Codex is OpenAI’s agent-based workflow for software engineering and knowledge work scenarios. It can appear in multiple entries:

- CLI: Close to the terminal and local repository, suitable for quick modification, running commands, troubleshooting and verification.
- Desktop App: Ideal for local multitasking, Skills, Automations, subagents, and plugin workflows.
- Web / Cloud / ChatGPT: Suitable for connecting to repositories, dispatching long tasks, parallel processing, generating PRs or answering code questions.
- IDE: Suitable for interpretation, modification, review and local tasks close to the editor context.
- Integrated ecosystem: GitHub, Slack, Linear, MCP and other entry points allow Codex to connect to team collaboration links.

## four-stage path

|stage|Target|Recommended page|Acceptance criteria|
| --- | --- | --- | --- |
|Getting Started|Complete a low-risk task| [Desktop App Download and Installation](./01-app-installation.md)、[Mobile collaboration](./04-mobile-control-desktop.md)、[Complete your first task with Codex](./05-app-first-task.md) |Can use the Codex desktop app to complete a complete task workflow|
|Advanced|Develop a stable task approach| [Understand the basic components of Codex](./03-app-overview.md)、[Practice Methods](/practice/) |Able to clearly write goals, scope, constraints, verification and delivery|
|Engineering|Enter the real project process| [Task Execution Mechanism](./06-task-execution.md)、[Configuration and Extensions](/configuration/) |Each change has diff, test results and risk description|
|Teamwork|Codification rules and cases| [AGENTS.md](./14-agents-md.md)、[Team Playbook](/practice/team-playbook.md) |The project has rule files, case library, Troubleshooting Guide and contribution path|

## Recommended path for newbies

**Start with the App (recommended):**

1. [Download and install Codex Desktop App](./01-app-installation.md), complete login.
2. [Subscribe to ChatGPT Plus](./02-subscribe-plus.md) on demand to unlock full functionality.
3. Read [Understand the basic components of Codex](./03-app-overview.md) to understand the interface structure.
4. Understand [How to follow up on desktop tasks on mobile](./04-mobile-control-desktop.md) and avoid mistaking it for remote desktop.
5. Follow [Complete your first task with Codex](./05-app-first-task.md) to complete a complete workflow loop.

**Start with the CLI (for developers):**

1. Read [Entry Map](/platform/).
2. [Install CLI](./11-cli-installation.md), complete a login and version check.
3. Use the "read-only repository summary" task to confirm that Codex understands the project.
4. Perform a low-risk change, such as fixing documentation, patching tests, or fixing a single failing test case.
5. Create the first `AGENTS.md` and write project commands and prohibitions.
6. Read [Configuration and Extensions](/configuration/) and prepare for `config.toml`, Skills, and security boundaries.
7. Organize successful tasks into cases and put them into the team knowledge base.

## How can non-developers use it?

Codex's core capability is to "understand a set of files, perform bounded tasks, and produce verifiable results." This makes it also suitable for:

- Read unfamiliar code bases and output Learning Paths.
- Organize project documentation, README, migration instructions, and release notes.
- Review configuration, dependencies, scripts, and CI failure reasons.
- Consolidate repetitive processes into templates, skills, or automated reminders.
- Support products, operations, technical writing and team knowledge management.

The next step is to read: [Entry Map](/platform/).
