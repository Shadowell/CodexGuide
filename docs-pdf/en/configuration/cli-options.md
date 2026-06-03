---
description: "A guide to Codex CLI options and commands, covering interactive mode, non-interactive execution, resume sessions, Slash Commands, and common startup parameters."
---

# CLI options and commands

CLI is the most suitable entrance to Codex for practicing basic skills. This page follows the logic of the official tutorial and organizes interactive mode, non-interactive mode, session recovery, Slash Commands and common startup parameters into a Chinese practical version.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex CLI features](https://developers.openai.com/codex/cli/features), [Codex CLI official repository](https://github.com/openai/codex), [CLI getting started](https://github.com/openai/codex/blob/main/docs/getting-started.md), [exec documentation](https://github.com/openai/codex/blob/main/docs/exec.md) and [slash commands documentation](https://github.com/openai/codex/blob/main/docs/slash_commands.md).
:::

## Three usage postures

|model|fit for task|Typical commands|
| --- | --- | --- |
|interactive mode|Learn the repository, change the code step by step, and interrupt at any time if necessary| `codex` |
|one-time task|CI, scripting, batch analysis, generating summaries| `codex exec "task description"` |
|resume session|Continue previous context and continue unfinished tasks| `codex resume` |

## interactive mode

After entering the project root directory, run:

```bash
codex
```

It is recommended to define the boundary in the first sentence:

```text
Please read the current repository first and do not modify the files. Please tell me:
1. Project purpose
2. Entry file
3. Install, build, and test commands
4. 5 documents or testing tasks you recommend completing first
```

Interactive mode is best for learning Codex’s thought process. You can stop it before it is ready to execute the command to confirm the command intention, or you can break the task into multiple rounds.

::: info Screenshot placeholder
Please add screenshots of the first round of repository analysis after the interactive mode is started. Suggested file: `docs/.vuepress/public/screenshots/cli/03-interactive-start.png`.
:::

## Non-interactive mode: `codex exec`

`codex exec` is suitable for putting Codex into scripts, CI or repetitive tasks. For example:

```bash
codex exec "Please read README and package.json, and output the local startup command and test command of this project. Do not modify the file."
```

Suitable scenarios:

- Generate repository summaries in batches.
- Automatically collect failure reasons after CI failures.
- Generate first drafts for release notes.
- Extract troubleshooting suggestions from logs.
- Generate unitablely formatted document drafts for multiple modules.

Be more explicit when writing the `exec` task, since it has no room for interactive questioning:

```text
Please only read and analyze the current repository and do not modify the files.

Output format:
1. Project Overview: 120 words or less
2. Technology Stack: tables
3. Local startup: List commands and prerequisites
4. Test commands: classified by unit testing, integration testing, type checking
5. Risk warning: up to 5 items
```

::: info Screenshot placeholder
Please add `codex exec` read-only output screenshot. Suggested file: `docs/.vuepress/public/screenshots/cli/04-exec-readonly.png`.
:::

## resume and continue

Long tasks often need to be progressed in sections. It is recommended to have the Codex output at the end of each stage:

- Read file.
- File has been changed.
- Command has been run.
- The next step that has not yet been completed.
- Current risks.

The next time you restore, use the summary of the previous paragraph as the first message, which can significantly reduce context breaks.

Example:

```text
Continue with the previous task. The previous stage has been completed:
- Failed test located:...
- Modified file:...
- Commands run:...

Please only deal with the next step now: supplementing the boundary tests and running the relevant tests.
```

## Slash Commands

Slash Commands are used to quickly view status, adjust behavior, or perform common actions in a CLI session. The command list may change in different versions. The safest way is to enter `/` in the CLI to view the currently available commands.

Common usage:

|Command type|effect|Usage suggestions|
| --- | --- | --- |
|Status class|View model, approval, workspace status|Read it before every important modification|
|context class|View or compress context|Used when a long task enters the next stage|
|Git class|View a diff or summary of changes|Cooperate with manual review before subtask|
|Pertask class|View approval policy|Involves installation, network, and pre-deletion checks|
|Conversation class|Exit, restore, reopen|Leave a clear summary at the end of the task|

::: info Screenshot placeholder
Please add a screenshot of the command list after entering `/`. Suggested file: `docs/.vuepress/public/screenshots/cli/05-slash-commands.png`.
:::

## How to understand startup parameters

The official CLI version is updated quickly. Please refer to `codex --help` and official documents for parameter names and default values. When studying, you can understand it according to its purpose:

|Parameter category|Problem solved|example|
| --- | --- | --- |
|Model selection|The current task requires stronger reasoning or faster response|Use high reasoning for complex refactoring, and use regular settings for document organization.|
|Sandbox settings|Control file system, network, command pertasks|Read-only analysis, workspace write, restricted network|
|Approval strategy|Control which commands require manual confirmation|Deletion, installation of dependencies, external network access|
|Configuration override|Temporarily overwrite config.toml|Use a special profile for a single task|
|Output format|Adapt scripts or automation|`exec` output Markdown, JSON or fixed structure|

It is recommended to keep two pictures in the tutorial screenshots:

::: info Screenshot placeholder
Please add `codex --help` output screenshot. Suggested file: `docs/.vuepress/public/screenshots/cli/06-help.png`.
:::

::: info Screenshot placeholder
Please add `codex exec --help` output screenshot. Suggested file: `docs/.vuepress/public/screenshots/cli/07-exec-help.png`.
:::

## Task Design template

### Read-only analysis

```text
Please only read and analyze the current repository, do not modify files, and do not run commands that will write files.

Please output:
1. Project structure
2. key commands
3. Risk point
4. List of low-risk tasks suitable for Codex processing
```

### small fix

```text
Please fix [specific issue].

scope:
- Allow modification: [directory/file]
- Avoid modification: [directory/file]

Require:
1. Reproduce the problem first.
2. Modify the minimum necessary code.
3. Run [verify command].
4. Summarize reasons, changes, verifications, and risks.
```

### Automated summary

```bash
codex exec "Please read the latest test failure log and extract the name of the failed test, key error reports, possible reasons and next step troubleshooting suggestions. Do not modify the file."
```

## Learning points

- Interactive mode is suitable for exploration and calibration.
- `exec` is suitable for standardized output and automation.
- Slash Commands is a window for observing Codex status.
- Write a stage summary before resuming the session.
- For parameter changes, please refer to the current CLI help and official documentation.
