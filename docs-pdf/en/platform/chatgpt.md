---
description: "Instructions for using Codex in ChatGPT, introducing repository task assignment, mobile app follow-up, account capabilities and workflow suitable for conversation entry."
---

# Codex in ChatGPT

Codex in ChatGPT is suitable for assigning repository tasks, viewing task status, understanding the code base and promoting team collaboration from conversations. Specific features will be affected by account plans, organizational strategies, regions and product updates.

::: tip official border
Please refer to [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt) for plan availability, message limits, connection methods and specific entrances. The last verification date of this article: 2026-05-27.
:::

## Applicable scenarios

- Launch the task after connecting to the GitHub repository.
- Let Codex read the repository and summarize the schema.
- Convert issues into executable tasks.
- Generate a PR summary or change notes.
- Technical changes explained to non-developers.
- Break complex tasks into phased plans.

::: info Screenshot placeholder
Please add a screenshot of the Codex entrance in ChatGPT. Suggested file: `docs/.vuepress/public/screenshots/chatgpt/01-codex-entry.png`.
:::

## How to write the first task

Let Codex do the read-only analysis first:

```text
Please read this repository and help me understand [topic]. Please summarize the relevant directories and key files first, and then give implementation suggestions. Don't modify the code yet.
```

When advancing further:

```text
Based on the analysis just now, please complete the first step with minimal changes and create reviewable results. Please describe the reason for the change, verification methods and remaining risks.
```

::: info Screenshot placeholder
Please add a link to the repository in ChatGPT or create a task screenshot. Suggested file: `docs/.vuepress/public/screenshots/chatgpt/02-repo-task.png`.
:::

## Usage suitable for non-developers

|scene|Mission statement|
| --- | --- |
|Understand PR|“Please explain this PR change into language that product managers can understand.”|
|Write release notes|"Please generate user-facing release notes based on these changes."|
|Open issue|"Please break this issue into a list of tasks that can be assigned to engineers."|
|Read technical solutions|“Please explain what modules, risks and acceptance criteria are involved in this solution.”|
|Organize knowledge base|"Please point out what pre-explanations this tutorial lacks for beginners."|

## Relationship with Cloud

ChatGPT is more suitable for initiating, discussing, and understanding tasks; Cloud is more suitable for executing long tasks in the background and producing PR. In actual use, the labor can be divided like this:

- State your requirements clearly in ChatGPT.
- Let Codex analyze the repository read-only first.
- Leave the clear first steps to Cloud.
- Return to ChatGPT to interpret results, summarize risks, and generate documentation.

## Safety reminder

- Confirm organizational policies before connecting to the repository.
- Don't paste the real key in the conversation.
- Let Codex write out the acceptance criteria before modifying the code.
- Perform manual review on the generated PR.
- Before entering the screenshot into the open source repository, the account number, organization name, and repository private information are blocked.

## official information

- [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)
- [Codex cloud docs](https://platform.openai.com/docs/codex)
- [OpenAI Codex product page](https://openai.com/codex/)
