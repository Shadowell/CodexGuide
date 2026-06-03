---
description: "A tutorial for using the Codex CLI to change code for the first time, explaining how to select low-risk tasks, let Codex read the repository, modify files, and run verification."
---

# Let Codex change the code for the first time

Don’t choose “refactor the entire project” for the first time. Choose a task that is small, verifiable, and easy to roll back if it fails, and first establish a collaboration rhythm between you and Codex.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex CLI features](https://developers.openai.com/codex/cli/features), [openai/codex getting started](https://github.com/openai/codex/blob/main/docs/getting-started.md), [AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md) and [Codex security](https://developers.openai.com/codex/agent-approvals-security).
:::

## Select first task

Suitable for newbies:

- Fix a copywriting typo.
- Supplementary testing for a pure function.
- Update outdated commands in README.
- Explain a small module and add necessary comments.
- Fix a bug that is already covered by a failing test.
- Add a screenshot placeholder description for the documentation site.

Avoid for now:

- Large-scale architectural refactoring.
- Migration across multiple services.
- No changes to core business logic tested.
- Actions involving production credentials, billing, pertasks, and deletion of data.
- Need to modify more than a dozen files at the same time.

## Step 1: Read-only mapping

Let Codex understand the repository first:

```text
Please only read and analyze the current repository and do not modify the files.

Please output:
1. Project purpose
2. key directory
3. Install, test, build commands
4. Where to start with the current task
5. The low-risk task you suggested I give you for the first time
```

![image-20260511170254461](../images/image-20260511170254461.png)

## Step 2: Give small tasks

It is recommended to copy this template:

```text
Please fix a test failure at the smallest scope in the current repository.

Require:
1. Run the test first to confirm the failure message.
2. Read relevant code and tests, and do not do irrelevant refactoring.
3. Modify the minimum necessary files.
4. After fixing, rerun the relevant tests.
5. Final summary: reasons for failure, which files were changed, verification commands and remaining risks.
```

If the task is a document:

```text
Please update the description of [topic] in [documentation file].

Require:
1. First read the relevant official information and existing document structure.
2. Maintain the Chinese tutorial style and avoid translating the entire paragraph from the official original text.
3. Add screenshot placeholders when it comes to operation steps.
4. Run the document station build after modification.
5. Finally, list the source link and the location where manual supplementation is required.
```

![image-20260511170405298](../images/image-20260511170405298.png)

## Step 3: Observe the process

Five things to focus on:

|observation point|illustrate|
| --- | --- |
|Whether to read context first|Good results usually come from fully reading the relevant documents|
|Whether to control the scope|The first task is not to pursue smooth reconstruction.|
|Whether to interpret the command|The purpose should be stated before executing the command|
|Whether to run verification|After the modification is completed, you need to run relevant tests or builds|
|Whether to explain the risks|The parts that cannot be verified must be recorded truthfully|

## Step 4: Check the diff

Read it again yourself when you’re done:

```bash
git diff
```

You can let Codex check itself:

```text
Please review the changes you just made and do not continue to modify the file.

Please focus on checking:
1. Are there any irrelevant changes?
2. Are tests missed?
3. Does it introduce security or compatibility risks?
4. Are there any unverified places?
```

![image-20260511170740040](../images/image-20260511170740040.png)

## Step 5: Record before subtask

Let Codex give you a summary before submitting:

```text
Please output in pre-subtask summary format:
- Change target
- Modify files
- Verify command
- Verification results
- residual risk
- Suggested commit message
```

If the result is satisfactory, submit again:

```bash
git add .
git commit -m "fix: resolve failing test"
```

## What to do if you fail for the first time

|failure phenomenon|Processing method|
| --- | --- |
|Changes are too big|Stop Codex and keep only minimal fix ideas|
|The test cannot run|Let it first explain the environment gap and the source of the command|
|Wrong direction|Go back to read-only analysis and let it list files based on|
|The output is too general|Requires segmented output by file, command, and risk|
|Correcting irrelevant files by mistake|Confirm with git diff and then manually decide to keep or discard|

## Completion standards

After completing the first practical battle, you should get:

- A very small diff.
- A reproducible verification command.
- A clear summary of the changes.
- A reusable task template.
- Initial understanding of Codex pertasks and approvals.

Read next: [Understand the basic components of Codex](./03-app-overview.md).
