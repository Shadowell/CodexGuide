---
description: "Codex CLI entry description, introducing local repository modification, command execution, test verification, diff inspection and daily usage scenarios for developers."
---

# CLI

CLI is the most suitable entry point for establishing basic Codex skills. It's close to the local repository, terminal commands and test output, allowing you to clearly see how Codex reads the context, modifies the file, runs the verification and interprets the results.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex CLI features](https://developers.openai.com/codex/cli/features), [openai/codex](https://github.com/openai/codex), [CLI install](https://github.com/openai/codex/blob/main/docs/install.md), [getting started](https://github.com/openai/codex/blob/main/docs/getting-started.md), [exec](https://github.com/openai/codex/blob/main/docs/exec.md) and [slash commands](https://github.com/openai/codex/blob/main/docs/slash_commands.md).
:::

## What the CLI can do

- Read-only understanding of repository structure, entry, test commands and risk points.
- Modify code, documentation, configuration, and tests.
- Run verification commands such as lint, typecheck, unit test, and build.
- View diffs, adjust approval policies, and restore sessions in the terminal.
- Perform standardized one-time tasks via `codex exec`.
- Cooperate with `AGENTS.md`, `config.toml`, Skills, and MCP to build long-term workflow.

## Recommended learning order

1. Install the CLI and complete the login.
2. Do a read-only summary in an unfamiliar repository.
3. Learn common Slash Commands in interactive mode.
4. Complete a low-risk modification and run verification.
5. Learn `codex exec` to script repeatable tasks.
6. Added `AGENTS.md` and local `config.toml`.

## interactive mode

Enter the project root directory:

```bash
cd path/to/project
codex
```

In the first round, it is recommended not to let Codex change the code directly. Let it build the map first:

```text
Please only read and analyze the current repository and do not modify the files.

Please output:
1. Project purpose
2. Main directories and entry files
3. Install, start, test, build commands
4. The current repository risks that Codex needs to pay attention to most
5. 5 Low-Risk Tasks for First-Time Codex
```

::: info Screenshot placeholder
Please add a screenshot of the CLI read-only repository summary. Suggested file: `docs/.vuepress/public/screenshots/cli/02-repo-summary.png`.
:::

## non-interactive mode

`codex exec` is more suitable for batch processing and automation:

```bash
codex exec "Please read-only analyze the current repository and output installation, test and build commands. Do not modify the file."
```

It is recommended to make the output format stable:

```text
Please read the current repository and do not modify the file.

Output format:
## Project overview
## Run locally
## test command
## CI risk
## Tasks suitable for Codex processing
```

Tasks suitable for scripting:

|Task|output|
| --- | --- |
|Read failure log|Failed test name, error summary, next step troubleshooting|
|Summary PR diff|Change scope, risks, testing recommendations|
|Generate release notes|User-readable release notes|
|Scan documents|Expired commands, broken links, missing screenshots|
|Check repository rules|Are `AGENTS.md`, test commands, and contribution instructions missing?|

::: info Screenshot placeholder
Please add a screenshot of `codex exec` executing a read-only task. Suggested file: `docs/.vuepress/public/screenshots/cli/04-exec-readonly.png`.
:::

## Slash Commands

Enter `/` in the CLI to view the commands supported by the current version. It is recommended to focus on mastering:

- View status: Confirmed models, catalogs, approvals, and sandboxes.
- View diff: Check for changes before each commit.
- Adjust models or approvals: Separate complex tasks from high-risk tasks.
- Compress or organize context: Used before a long task enters the next stage.
- Exit and resume: Leave a clear task summary for the next round.

::: info Screenshot placeholder
Please add a screenshot of the command list after entering `/`. Suggested file: `docs/.vuepress/public/screenshots/cli/05-slash-commands.png`.
:::

## CLI task template

### Fix failed tests

```text
Please fix a test failure at the smallest scope in the current repository.

Require:
1. Run the test first to confirm the failure message.
2. Read relevant code and tests, and do not do irrelevant refactoring.
3. Modify the minimum necessary files.
4. After fixing, rerun the relevant tests.
5. Finally, summarize the reasons for failure, modify files, verify commands and remaining risks.
```

### Documentation updates

```text
Please update the local development instructions in the README.

Require:
1. First read the package manager, scripts and existing README.
2. Do not change the business code.
3. Updated install, launch, test and build commands.
4. Run a documentation site build or Markdown check.
5. Output a summary of changes and the locations where manual screenshots are required.
```

### PR Review

```text
Please review the current git diff without modifying the file.

Priority output:
1. Problems that lead to erroneous behavior
2. Security and pertasks risks
3. missing test
4. Documentation or migration missing
```

## Relationship with configuration topics

After getting started with CLI, it is recommended to continue reading:

- [CLI options and commands](/configuration/cli-options.md)
- [Configuration file config.toml](/configuration/config-file.md)
- [Security, Approval and Management](/configuration/security-admin.md)

## practical judgment

- The new repository will be read-only at first, and then writing will be allowed after getting familiar with it.
- Each task clearly states "what is allowed to be changed, what is not allowed to be changed, and how to verify it."
- When the Codex verification is not successful, do not regard the result as completed.
- Divide complex tasks into stages and don’t cram all your requirements into them at once.
- Important changes must be made back to `git diff` and test results.
