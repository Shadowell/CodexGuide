---
description: "Codex config.toml configuration guide describing how models, sandboxes, approvals, profiles, MCP and personal local configuration are organized."
---

# Configuration file config.toml

`config.toml` is used to save the local default behavior of the Codex CLI. You can think of it as a "personal cockpit": preferences such as models, approvals, sandboxes, profiles, MCP services, etc. can all be managed centrally here.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex config basic](https://developers.openai.com/codex/config-basic), [Codex config advanced](https://developers.openai.com/codex/config-advanced), [Codex config reference](https://developers.openai.com/codex/config-reference) and [openai/codex config docs](https://github.com/openai/codex/blob/main/docs/config.md).
:::

## Where are the configuration files placed?

Usually located at:

```text
~/.codex/config.toml
```

It is recommended that the long-term rules of the project be written to `AGENTS.md` in the repository, and personal preference is to be written to `config.toml` on the local machine. In this way, team members can share project rules while retaining their own CLI usage habits.

::: info Screenshot placeholder
Please add a screenshot of the `~/.codex/config.toml` file location on your machine, and be careful to block sensitive paths and tokens. Suggested file: `docs/.vuepress/public/screenshots/config/02-config-location.png`.
:::

## Minimal configuration example

The following is an example for learning purposes. For actual fields, please refer to the official config reference and the current CLI version:

```toml
model = "gpt-5.1-codex-max"
approval_policy = "on-request"
sandbox_mode = "workspace-write"

[profiles.readonly]
approval_policy = "on-request"
sandbox_mode = "read-only"

[profiles.build]
approval_policy = "on-request"
sandbox_mode = "workspace-write"
```

This example expresses three things:

- By default, writing files in the current workspace is allowed.
- High-risk orders still require approval.
- An additional read-only profile is reserved, suitable for new repository analysis.

## Common configuration items are understood according to their uses

|use|what do you want to decide|suggestion|
| --- | --- | --- |
|Model|Trade-offs between speed, cost, and inference depth|Start with the default configuration and adjust it temporarily for complex tasks|
|sandbox|Which locations can Codex read and write?|Newbies should first read-only or write in the workspace|
|Approval|Which commands require your confirmation?|Approval is retained when it comes to network, deletion, installation, and publishing.|
| profiles |Use different combinations for different tasks|Prepare three types of profiles: readonly, coding, and review.|
| MCP |Access external tools and knowledge sources|Only accept trusted services and clarify the scope of authority|
|environment|Pass necessary variables or isolate sensitive variables|Use minimum pertasks for credentials to avoid writing tutorial screenshots|

## Recommended profiles

### Read-only learning

Suitable for opening unfamiliar repositories, generating project maps, and sorting out test commands.

```toml
[profiles.readonly]
sandbox_mode = "read-only"
approval_policy = "on-request"
```

Task example:

```bash
codex --profile readonly
```

```text
Please read-only analyze the current repository. Do not modify files and do not run commands that write to files.
```

### Everyday coding

Suitable for repairing tests, updating documentation, and small-scale implementation.

```toml
[profiles.coding]
sandbox_mode = "workspace-write"
approval_policy = "on-request"
```

Task example:

```text
Please fix this failing test. The modification scope is limited to `src/parser` and the corresponding test files. Run `pnpm test parser` after repair.
```

### Review and pre-publish checks

Suitable for PR review, pre-release risk scanning, and diff summary.

```toml
[profiles.review]
sandbox_mode = "read-only"
approval_policy = "on-request"
```

Task example:

```text
Please review the current diff, prioritizing bugs, regression risks, and missing tests. Do not modify the file.
```

## How to verify configuration changes

After changing the configuration every time, do not go directly to complex tasks. Verify with a short task:

```text
Please tell me about your current workspace, approval strategy, and the verification method you plan to use. Do not modify the file.
```

Check again:

- Whether Codex can correctly read the current directory.
- Whether the intent will be explained before the order is executed.
- Whether to respect read-only or workspace write boundaries.
- Whether the approval is triggered as expected.

::: info Screenshot placeholder
Please add a screenshot of the status after switching profiles. Suggested file: `docs/.vuepress/public/screenshots/config/03-profile-status.png`.
:::

## Team configuration suggestions

Content suitable for storage:

- `AGENTS.md`
- Recommended test commands
- Coding style and directory instructions
- PR template
- Document screenshot specifications

Content suitable for leaving on your personal machine:

- Default model preference
- local path
- token, key, private service address
- Personal MCP service
- Private automation configuration

## Troubleshooting checklist

|Phenomenon|examine|
| --- | --- |
|Configuration does not take effect|File path, TOML syntax, CLI version, whether to select profile at startup|
|Codex pertasks exceed expectations|Check `sandbox_mode` and `approval_policy`|
|A certain command keeps getting rejected|Check sandbox restrictions, network pertasks, and organizational policies|
|MCP cannot connect|Check service commands, environment variables, ports, and authentication methods|
|Team members behave inconsistently|Write the common rules of the project into `AGENTS.md`|

## Official data extension

- [Config basic](https://developers.openai.com/codex/config-basic)
- [Config advanced](https://developers.openai.com/codex/config-advanced)
- [Config reference](https://developers.openai.com/codex/config-reference)
- [openai/codex config docs](https://github.com/openai/codex/blob/main/docs/config.md)
