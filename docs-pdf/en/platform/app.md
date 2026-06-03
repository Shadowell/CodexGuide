---
description: "Introduction to Codex Desktop App, introducing local projects, multitasking, Skills, Automations, plugins and desktop workbench scenarios."
---

# Desktop App (PC version)

The Desktop App here refers to the computer client, not the mobile App. It is more like a local Codex workbench, suitable for managing multiple task lines in a project: you can let different agents explore, implement, and verify in parallel, or you can use Skills, Automations, Worktrees, and plugin capabilities to precipitate long-term processes.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex Desktop App Documentation](https://developers.openai.com/codex/app), [Codex documentation hub](https://developers.openai.com/codex/), [Codex Skills](https://developers.openai.com/codex/skills) and [Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/).
:::

## What are desktop apps suitable for?

- Long tasks and multi-stage tasks in local repositories.
- Advance multiple tasks simultaneously that do not block each other.
- Use Worktrees to isolate different implementation branches.
- Write repetitive processes as Skills.
- Use Automations for reminders, periodic check-ins, or follow-ups.
- Work with browsers, documents, tables, presentations and other plugins to do cross-tool work.

![Codex Desktop App Project Workspace](/screenshots/app/01-workspace.png)

## Core competency map

|ability|use|Learning points|
| --- | --- | --- |
| Projects |Organize local workspace and task history|Check the Git status of each project first|
| Agents |Assign exploration, implementation, and verification tasks|Parallel tasks must have clear boundaries|
| Worktrees |Isolate file changes from different branches|Suitable for comparison of multiple solutions and long tasks|
| Local Environments |Prepare dependencies, commands, and environments for tasks|Write down the installation, build, and testing steps|
| Review |Check diff and results|Look at risk first, then look at style|
| Skills |Solidify complex processes|Turn high-frequency prompt words into reusable capabilities|
| Automations |Delayed or periodic tasks|Output should be self-contained to avoid silent changes|
| In-app Browser / Computer Use |Check page, click operation, screenshot verification|Suitable for front-end and data verification tasks|

## A recommended local task flow

1. Open the project and confirm the branch and uncommitted changes.
2. Let Codex read-only summarize the repository structure.
3. Break the task into exploration, implementation, and verification.
4. When parallelism is required, specify file ranges for each agent.
5. Run the verification command after modification.
6. Review the diff and ask Codex to output risks and remaining issues.
7. Precipitate successful processes into skills or cases.

::: info Screenshot placeholder
Please add a screenshot of the division of labor among multiple agents. Suggested file: `docs/.vuepress/public/screenshots/app/02-agents-skills.png`.
:::

## Worktrees usage scenarios

Worktrees are suitable for tasks that are worth trying in many directions:

- Comparison of two implementation solutions.
- Different ideas for fixing the same bug.
- Promote documentation and code changes simultaneously.
- Keep a clean branch for long tasks.

Practical suggestions:

- Each worktree handles only one target.
- The branch name reflects the task, such as `codex/fix-login-test`.
- Let Codex summarize the differences between the two solutions before merging.
- Do not allow multiple tasks to modify the same batch of core files at the same time.

::: info Screenshot placeholder
Please supplement the Worktrees list or create a screenshot. Suggested file: `docs/.vuepress/public/screenshots/app/03-worktrees.png`.
:::

## Local Environments

Local Environments focuses on "where Codex runs, what dependencies it has, and what commands it can run." For knowledge base tutorials, you can think of it as the basis for task reproducibility.

It is recommended to organize the project:

- Depends on the installation command.
- Test command.
- Build command.
- Required system services.
- Placeholder declarations for required environment variables.
- List of secrets that are prohibited from being exposed.

::: info Screenshot placeholder
Please add a screenshot of the Local Environments settings. Suggested file: `docs/.vuepress/public/screenshots/app/04-local-environments.png`.
:::

## Skills and Automations

Desktop apps are great for solidifying experiences.

Suitable for writing Skills:

- PR review。
- Documentation site build check.
- Front-end screenshot verification.
- Case collection.
- Pre-launch checklist.

Suitable for Automation:

- Check for broken links to documents every week.
- Failure CIs are aggregated daily.
- After the task is completed, you will be reminded to make a review the next day.
- Check official documentation regularly for updates.

::: info Screenshot placeholder
Please add a screenshot of the Skills or Automations page. Suggested file: `docs/.vuepress/public/screenshots/app/05-skills-automations.png`.
:::

## Tasks for non-developers

- Rewrite technical PRs into product release notes.
- Sort out project documentation gaps.
- Generate pre-meeting technical background material.
- Extract action items from the issue.
- Check whether the knowledge base structure is suitable for novice readers.

## risk boundary

- The parallel agent must delineate the file range before writing the file.
- Manual confirmation is retained when deletion, installation of dependencies, network access, and release deployment are involved.
- Screenshots and logs must cover sensitive information before entering the open source repository.
- Automation should have clear output and not write back to external systems by default.

## official information

- [Codex Desktop App Documentation](https://developers.openai.com/codex/app)
- [Codex Skills](https://developers.openai.com/codex/skills)
- [Codex security](https://developers.openai.com/codex/agent-approvals-security)
