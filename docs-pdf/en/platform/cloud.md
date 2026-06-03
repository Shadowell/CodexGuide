---
description: "Introduction to Codex Cloud and Web entry point, introducing background tasks, parallel processing, GitHub connection, PR generation and team collaboration scenarios."
---

# Cloud / Web

The Cloud/Web entry point is suitable for tasks that take longer, need to run in the background, or require collaboration with GitHub. It puts Codex tasks into a manageable cloud environment, suitable for team assignment, long task tracking and PR workflow.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex cloud docs](https://platform.openai.com/docs/codex), [Codex documentation hub](https://developers.openai.com/codex/), [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt) and [Introducing Codex](https://openai.com/index/introducing-codex/).
:::

## What is Cloud suitable for?

- Dispatch tasks after connecting to the GitHub repository.
- Process long-term fixes, migrations or analysis in the background.
- Generate branches and PRs based on issues or requirements.
- Team members review task progress together.
- Conduct structural analysis and risk scanning for large repositories.

::: info Screenshot placeholder
Please add a screenshot of the Cloud/Web new task interface. Suggested file: `docs/.vuepress/public/screenshots/cloud/01-new-task.png`.
:::

## Checklist before submitting a task

|Check items|Why is it important|
| --- | --- |
|Repository pertasks|Codex needs to read the code and possibly create a branch or PR|
|Environment configuration|Lack of dependencies, lack of services, and lack of environment variables will affect verification|
| Internet Access |When you need to download dependencies or check information, you must clarify the network boundaries.|
|Task scope|Long tasks require more clarity on directories, modules and exclusions|
|Verify command|Explicit test orders improve reviewability of results|
|security boundary|Credentials, production data, and release deployment require manual confirmation|

## Environments

The reliability of Cloud tasks depends largely on whether the environment is reproducible. It is recommended to prepare for the repository:

- Package managers and version requirements.
- Install dependency commands.
- Unit testing, type checking, build commands.
- Required services, such as databases, caches, browsers.
- Environment variable placeholder description.
- secret pertask description.

You can write directly in the task description:

```text
Operating environment description:
- Use pnpm to install dependencies.
- Test command: pnpm test
- Build command: pnpm build
- No access to the production database is required.
- If an environment variable is missing, please list the variable name and purpose first, and do not guess the real value.
```

::: info Screenshot placeholder
Please add a screenshot of the Cloud environment configuration. Suggested file: `docs/.vuepress/public/screenshots/cloud/03-environment.png`.
:::

## Internet Access

Some tasks require the Internet, such as installing dependencies, reading official documents, and accessing the package registry. The purpose and scope of networking tasks must be clearly stated:

```text
If you need to access the internet, please use it only for:
1. Install project dependencies.
2. Check the official documentation.
3. Download the public resources needed for testing.

Do not access production services, internal systems, or non-task-related sites.
```

For open source knowledge bases, it is recommended to write all citation sources at the bottom of the page, especially OpenAI official documents, Help Center, and official GitHub repositories.

## Recommended task statement

```text
Please analyze the implementation of [module/issue] in this repository and complete a minimal verifiable fix.

Require:
1. First locate relevant files and test.
2. Describe the plan before submitting it for implementation.
3. Modification scope is limited to [directory/module].
4. Run [test command].
5. Outputs PR summary, validation results, and residual risk.
```

## A case for Cloud

|Case|task objectives|Acceptance criteria|
| --- | --- | --- |
|Fix CI failed|Locate the cause of the failure based on the logs and submit for repair|PR contains verification commands|
|Large repository tour|Generate module maps and Learning Paths|Output directories, entry points and risk points|
|Dependency upgrade|Small-scale upgrades and handling compatibility issues|Complete lock files, testing and migration instructions|
|Completion of document site|Supplementary tutorial, screenshot placeholder, link index|The construction is passed and the source can be traced|
|PR Summary|Convert diff into review notes|Risks, testing, and rollbacks are clearly explained|

::: info Screenshot placeholder
Please add Cloud/Web task results or PR page screenshots. Suggested file: `docs/.vuepress/public/screenshots/cloud/02-task-result.png`.
:::

## Team Playbook suggestions

- Prepare templates for common tasks, such as "Fix CI", "Add tests", and "Update documentation".
- Write the repository rules to `AGENTS.md`.
- Connect to the repository with minimal privileges.
- Important PRs are still merged by human reviewers.
- After the long task is completed, the reasons for failure and experience will be added to the knowledge base.

## official information

- [Codex cloud docs](https://platform.openai.com/docs/codex)
- [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)
- [Introducing Codex](https://openai.com/index/introducing-codex/)
