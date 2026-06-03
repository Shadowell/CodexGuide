---
description: "Codex MCP, Skills and Subagents guide, explaining usage scenarios of external tool access, process solidification and complex task splitting."
---

# MCP, Skills and Subagents

When you can stably complete a single task, the next step is to turn Codex into a scalable work system: use MCP to connect tools and data sources, use Skills to solidify processes, and use Subagents to split complex work.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex Skills](https://developers.openai.com/codex/skills), [Codex documentation hub](https://developers.openai.com/codex/), [openai/codex skills docs](https://github.com/openai/codex/blob/main/docs/skills.md) and official MCP, Plugins, Subagents related pages.
:::

## three concepts

|ability|Problem solved|What is suitable for codification?|
| --- | --- | --- |
| MCP |Give Codex access to external tools, systems or knowledge sources|GitHub, browser, internal documentation, database read-only query|
| Skills |Write a set of processes into reusable instructions and scripts|Code review, release inspection, document generation, case collection|
| Subagents |Split a complex task to multiple agents for parallel processing|Large-scale refactoring, multi-module analysis, separation of verification and implementation|

## When to use MCP

MCP is preferred when a task requires context "outside the current workspace."

Typical example:

- Read GitHub issues, PRs, and review comments.
- Open a browser and check the local page.
- Query the internal knowledge base.
- Read calendars, emails, documents, tables.
- Connect to design or project management systems.

Ask four questions before using:

1. Does this tool really need to be plugged into Codex?
2. Does Codex require read access, write access, or just search?
3. Will credentials, customer data, or production resources be exposed?
4. Does the output require manual review before being written back to the external system?

::: info Screenshot placeholder
Please supplement the MCP tool list or configuration screenshot, and be careful to cover the token, internal domain name and account information. Suggested file: `docs/.vuepress/public/screenshots/config/04-mcp-list.png`.
:::

## When to write Skill

When you copy the same long prompt word for the third time, it’s time to consider writing Skill.

A process suitable for writing as Skill:

- PR review: Requires the output of severity level, file line number, reproduction steps, and test suggestions.
- Documentation site update: read the directory first, then fill in the content, then run the build, and finally check the disabled sentence patterns.
- Case collection: search, filter, download materials, remove duplicates, and generate indexes.
- Release checks: version numbers, changelogs, builds, smoke tests, rollback instructions.
- Data analysis: read tables, clean fields, generate charts, and export reports.

A good Skill usually contains:

- Trigger scene.
- Work steps.
- Tool usage priority.
- Input and output formats.
- Safety reminder.
- Example tasks.

## Skill template

```markdown
---
name: codex-pr-review
description: Used when a user requests a review of a PR, diff, or commit, focusing on finding bugs, regression risks, and missing tests.
---

# Codex PR Review

## trigger scene

User requests review, review, check diff, check PR.

## Workflow

1. Read git diff and related tests first.
2. Prioritize looking for behavioral bugs, data loss, pertask issues, and missing tests.
3. Output findings, ordered by severity.
4. Make it clear when there are no questions and list the remaining risks.

## Output format

- Findings
- Open questions
- Test gaps
```

::: info Screenshot placeholder
Please add a screenshot of the Skill file structure. Suggested file: `docs/.vuepress/public/screenshots/config/05-skill-structure.png`.
:::

## When to use Subagents

Subagents are suitable for tasks with clear boundaries and that can be progressed in parallel. The key is to split responsibilities rather than simply "open a few more agents."

Suitable:

- One agent analyzes the backend interface, and the other agent analyzes the frontend calls.
- One agent implements the documentation page, the other agent checks the official source.
- One agent makes code modifications, and the other agent runs verification and organizes failure logs.
- Allocate write ranges by directory in large migrations.

Not suitable for:

- The next action depends on a certain analysis result.
- Modify the same batch of files.
- The requirements remain vague.
- High-risk operations require continuous manual judgment.

## Subagents division of labor template

```text
Please start two independent subtasks:

Agent A: Read-only analysis of `src/api`, output interface change risk, and does not modify files.
Agent B: Read-only analysis of `src/ui`, outputs the front-end call point, and does not modify the file.

The main task waits for the two results before deciding whether to implement them.
```

If the file is allowed to be written, ownership must be cleared:

```text
Agent A is only responsible for `docs/platform/cli.md`.
Agent B is only responsible for `docs/configuration/config-file.md`.

Do not modify files that the other party is responsible for. Once complete, list the altered files, verification commands, and remaining risks.
```

## Where to put Automations

Automations are suitable for periodic or delayed tasks:

- Check document dead links every week.
- Failure CIs are summarized daily.
- Return to the current thread after 30 minutes to continue following up.
- A reminder will be given the next day after release to review.

When writing the automation prompt, make it self-contained:

```text
Check the CodexGuide repository for Markdown links, VuePress build results, and disabled syntax. Output the discovered problems, involved files, recommended repair methods, and verification commands.
```

::: info Screenshot placeholder
Please add a screenshot of creating the automation. Suggested file: `docs/.vuepress/public/screenshots/automation/01-create-automation.png`.
:::

## safety checklist

- External tools have priority for read-only access.
- Keep manual confirmation before writing back to GitHub, email, documents, and databases.
- Do not write tokens, keys, and internal accounts in Skills.
- MCP services need to record the source, authority and maintainer.
- Subagents must draw boundaries when writing files.
- Automation should have clear output and do not let it silently modify key resources.

## Official data extension

- [Codex skills](https://developers.openai.com/codex/skills)
- [openai/codex skills docs](https://github.com/openai/codex/blob/main/docs/skills.md)
- [Codex documentation hub](https://developers.openai.com/codex/)
