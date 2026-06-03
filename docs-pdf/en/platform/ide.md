---
description: "Introduction to Codex IDE entry, introducing editor context, local code modification, code explanation, review and high-frequency development collaboration scenarios to improve daily efficiency."
---

# IDE

The IDE entrance is suitable for high-frequency small tasks close to the editor context. Its advantage is that files, selections, symbol jumps, error messages and the developer's current attention are all in the same environment.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex documentation hub](https://developers.openai.com/codex/) and official IDE related pages. The specific plugins, entrances and available functions will change with product updates. Please refer to the official page and the current IDE plugin description.
:::

## What is IDE suitable for?

- Interpret the current file or selected code.
- Supplementary testing for a function.
- Local reconstruction.
- Generate comments, documentation, or type descriptions.
- Review the current diff.
- Quickly understand error messages and call chains.

::: info Screenshot placeholder
Please add a screenshot of the selected code in the IDE and request an explanation. Suggested file: `docs/.vuepress/public/screenshots/ide/01-explain-selection.png`.
:::

## How to write constituency tasks

The more accurate the selection, the more stable the results. Recommended templates:

```text
Please explain based on the currently selected code only:
1. its responsibility in the module
2. Input, output and side effects
3. Possible edge cases
4. If additional testing is required, what scenarios are recommended to be covered?
```

If modifications are allowed:

```text
Please only modify the current file and the corresponding test file.

Goal: Supplement boundary testing for current functions.
Require:
1. Let’s first explain the test scenario.
2. Run relevant tests after modification.
3. No extraneous refactoring.
```

## High-frequency tasks in the IDE

|Task|Recommended input|Result check|
| --- | --- | --- |
|explain code|Select function or class|See if responsibilities and boundaries are clearly stated|
|Supplementary test|Select function and existing tests|See if the test can pass after failing|
|fix type error|Paste error message and files|See if it affects runtime behavior|
|local reconstruction|Specify file and target|Check whether the diff is readable and whether the test passes|
|write documentation|Select API or configuration|See if the example is executable|
| Review diff |Provides the current diff|See if behavioral risks are identified as a priority|

::: info Screenshot placeholder
Please add a screenshot of the diff or apply modifications in the IDE. Suggested file: `docs/.vuepress/public/screenshots/ide/02-apply-diff.png`.
:::

## Cooperation with CLI

IDE is good for local context, CLI is good for full verification. Suggested process:

1. Interpret or modify the current file in the IDE.
2. Go back to the CLI and run the relevant tests.
3. Use `git diff` to check for final changes.
4. Let the CLI read repository rules and test configurations when greater context is needed.

## Things to note

- Do not start a task with a selection that is too large.
- For partial tasks, write clearly "Only change the current file" or "Only change the corresponding test".
- Important changes still need to be tested.
- When generating comments, avoid duplicating code meaning and prioritize explaining boundaries, reasons, and constraints.
- Do not paste token or `.env` directly into the conversation when sensitive configuration is involved.

## official information

- [Codex documentation hub](https://developers.openai.com/codex/)
- [OpenAI Codex product page](https://openai.com/codex/)
