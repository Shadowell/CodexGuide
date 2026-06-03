---
description: "Codex Guide to Sandboxing, Approval and security boundaries, explaining read-only, write, network, dangerous command and manual confirmation strategies, suitable for high-risk pre-task checks."
---

# Sandbox, Approval and security boundaries

Codex can read files, modify code, and run commands. The stronger the ability, the more clear boundaries are needed.

![Codex Security Boundary Layering](/images/codex-safety-layers.svg)

::: tip final check
The last date of verification of official information: 2026-05-27. Please refer to [Codex security](https://developers.openai.com/codex/security) and [openai/codex sandbox documentation](https://github.com/openai/codex/blob/main/docs/sandbox.md) for safety related instructions.
:::

## what do you need to care about

Let’s first break down the risk into several levels:

- File system: Which directories can be read and written.
- Network: Whether to allow access to the external network.
- Command: Whether to allow installing dependencies, starting services, and running migrations.
- Credentials: Is it possible to access keys, tokens, cookies.
- Data: Whether the database, object storage, or production resources will be modified.

## low risk tasks

It can usually be advanced faster:

- Modify the document.
- Supplementary testing.
- Fix local reproducible bugs.
- Update non-sensitive configuration.
- Run existing test commands for the project.

## high risk task

It is recommended to confirm the plan first:

- Delete files or move files in bulk.
- Database migration.
- Modify authentication, pertasks, payment, and billing logic.
- Access production services.
- Upload, download or process sensitive data.
- Introduce new dependencies or upgrade dependencies on a large scale.

## Safety tips for Codex

```text
Please describe the commands you plan to run and the files that may be affected before doing so. Do not read `.env`, keys, tokens, or any private credentials. Do not execute delete data, publish, deploy, or migrate commands unless I explicitly confirm it.
```

## Approval Process in Codex Desktop App

In the Codex desktop app, when Codex wants to perform sensitive operations such as writing files, running commands, or accessing the network, it will pause and an approval prompt will pop up to list what it intends to do. you can:

- **Release**: Confirm that the operation is reasonable and continue execution.
- **Reject**: Cancel this step, Codex will try other solutions
- **Modify prompt word**: Tell it to do it in a different way

This mechanism has appeared many times in previous hands-on cases - for example, when Playwright MCP operates the browser, each step of filling in the input box and opening the web page requires manual release.

> Develop a habit: **Look at uncertain operations before letting them go**, especially steps involving deleting files, writing configurations, or accessing external services.

## Team suggestions

- Write clearly prohibited items in `AGENTS.md`.
- Put high-risk orders into a manual approval process.
- Provide explicit commands for testing, lint, and type checking.
- Avoid putting production credentials in a normal development environment.
- Normal code reviews are still pertableed on PRs produced by Codex.
