---
description: "Codex Security, Approval and Management Guide organizes sandboxing, network access, credential boundaries, organizational policies and team audit concerns, suitable for pre-launch review."
---

# Security, Approval and Management

Codex can read code, change files, run commands, and may have access to credentials, internal systems, and production resources. For a Codex workflow that is truly suitable for long-term use, pertask boundaries must be clearly written.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex security](https://developers.openai.com/codex/agent-approvals-security), [sandbox documentation](https://github.com/openai/codex/blob/main/docs/sandbox.md), [exec policy documentation](https://github.com/openai/codex/blob/main/docs/execpolicy.md) and [Codex documentation hub](https://developers.openai.com/codex/).
:::

![Codex security layering](/images/codex-safety-layers.svg)

## Identify risk levels first

|risk level|example|Suggested strategies|
| --- | --- | --- |
|Low|Read README, explain functions, and generate document drafts|Read-only auto-executable|
|middle|Modify code, run tests, format files|Limit writing to the workspace and retain diff review|
|high|Install dependencies, access external networks, delete files, and migrate databases|Each step requires clear approval|
|extremely high|Production releases, billing, pertasks, customer data, credential rotation|Retain manual operation or double review|

## How to understand sandbox mode

The sandbox controls what locations Codex can access, whether it can write files, and whether it can connect to the Internet. Learn according to three scenarios:

|scene|Recommended boundaries|use|
| --- | --- | --- |
|Unfamiliar repository analysis|read only|Understand the structure and generate Learning Paths|
|daily implementation|Workspace write|Fix tests, add documentation, and change part of the code|
|Automation script|Accurate delegation of authority|Allow only necessary commands and directories|

Before making configuration changes, ask the Codex:

```text
Please explain which commands you are currently planning to run, which paths these commands will read and write, and whether network access is required. Don't execute it yet.
```

::: info Screenshot placeholder
Please add a screenshot of the command approval pop-up window or pertask prompt. Suggested file: `docs/.vuepress/public/screenshots/security/01-approval-prompt.png`.
:::

## Approval strategy

Approval policies determine whether Codex requires your confirmation before executing certain commands. It is recommended to list the following behaviors as requiring confirmation:

- Delete and move large amounts of files.
- Modify the lock file or dependent version.
- Install global tools.
- Access external networks.
- Read `.env`, certificate, key files.
- Perform database migration.
- Create release, tag, deploy or push production branches.

Recommended prompt words:

```text
When it comes to deleting files, installing dependencies, accessing the network, reading sensitive files, pushing code or deploying, please explain the reason, command and scope of impact first, and wait for my confirmation before executing.
```

## Sensitive information handling

Pay special attention to occlusion in tutorial screenshots and open source knowledge bases:

- Email, user name, organization name.
- Private information in local absolute paths.
- token、API key、session、cookie。
- Intranet domain name and repository private address.
- Customer data, order number, user ID in logs.

It is recommended to write clearly "what information needs to be blocked" when taking screenshots to prevent contributors from directly uploading the original image.

::: info Screenshot placeholder
Please add a screenshot of a safe example that has been blocked. Suggested file: `docs/.vuepress/public/screenshots/security/02-redacted-example.png`.
:::

## Cloud and team management

In the Cloud/Web scenario, the security focus extends from "native commands" to "repository pertasks and environment configuration":

- Which GitHub repositories Codex is connected to.
- Can you create a branch, submit a commit, and open a PR.
- Whether the running environment contains secrets.
- Whether to allow access to the Internet.
- Whether sensitive output appears in the task log.
- Who can view tasks and results.

Team access suggestions:

1. First use the sample repository to run through the process.
2. Prepare a least privilege environment for the real repository.
3. Write the test command into `AGENTS.md`.
4. Write down clearly the rules that prohibit changes or require approval for high-risk directories.
5. Regularly review automation, MCP, Skills and organizational policies.

## Pre-launch security check template

```text
Please perform a security check on the current diff before publishing and do not modify the file.

Key points to check:
1. Whether to add or expose credentials, tokens, cookies, and internal domain names.
2. Whether to relax pertasks, CORS, authentication or network access.
3. Whether to modify database migration, billing, pertasks, and deletion logic.
4. Are there missing tests, rollback instructions, or manual confirmation steps.
5. Are there risks that need to be clearly noted in the PR description.
```

## How to keep audit records

Recommended records for each high-risk task:

- task objectives.
- Codex command to execute.
- Manually approved orders.
- Modify file list.
- Verify the command and results.
- Unverified risk.
- Rollback mode.

This information can be put into the PR description, release notes, or team review documents.

## Official data extension

- [Codex security](https://developers.openai.com/codex/agent-approvals-security)
- [openai/codex sandbox docs](https://github.com/openai/codex/blob/main/docs/sandbox.md)
- [openai/codex exec policy docs](https://github.com/openai/codex/blob/main/docs/execpolicy.md)
