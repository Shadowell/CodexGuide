---
description: "Codex task design method explains how to write clearly the goals, background, scope, constraints, verification and delivery format, so that the execution results are more stable and reduce rework."
---

# task design

Task Design determines the quality of Codex work. A good assignment will simultaneously state the goals, context, scope, constraints, verification methods, and final deliverables.

## Six elements of task

|elements|Writing method|Example|
| --- | --- | --- |
|Target|One sentence explains the result|Fixed the problem of status loss after the login page is refreshed|
|background|Give phenomenon and context|Users need to log in again after refreshing the page|
|scope|Qualify file or module|Only modify the `auth` module and related tests|
|constraint|Write down prohibited matters|No changes to the database schema or introduction of new dependencies|
|verify|Give a command or check method| `pnpm test auth` |
|deliver|Request for review format|Summarize root causes, changes, tests and risks|

## from blur to clarity

Fuzzy writing:

```text
Help me optimize the login logic.
```

Clear writing:

```text
Please fix the issue where status is lost after the login page is refreshed.

background:
- After the user logs in and refreshes the page, the user will return to the unlogged state.
- It is expected that the logged in status can still be restored after refreshing.

scope:
- Prioritize checking `src/auth` and related tests.
- The database and backend interface will not be changed.

verify:
- Run `pnpm test auth`.
- If you need to add new tests, please cover the scenario of refreshing the recovery status.

deliver:
- Describe root cause, change documentation, verification results, and residual risk.
```

::: info Screenshot placeholder
Please add a comparison screenshot of "blurred task vs. clear task". Suggested file: `docs/.vuepress/public/screenshots/cli/03-task-design-comparison.png`.
:::

## Split large tasks

It is recommended that large tasks be broken down into three steps:

1. Read-only analysis: Let Codex find the impact.
2. Solution confirmation: Let Codex provide segmentation and verification methods.
3. Step-by-step implementation: Make only one verifiable change at a time.

template:

```text
Please do not modify the code yet. Read [module/directory] and analyze which files, interfaces, and tests [goal] affects. Please output:
1. Influence area
2. Recommended implementation steps
3. Verification method at every step
4. Minimal change suggestions for the first phase
```

## Let Codex proactively expose uncertainty

You can add:

```text
If you need to speculate, please clearly mark "speculation". If there is a conflict between official documentation, code, and tests, please stop and explain the conflict first.
```

This sentence is suitable for document updates, version upgrades, dependency migrations and cross-module changes.
