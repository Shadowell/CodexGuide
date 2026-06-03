---
description: "Codex non-development workflow guide, explaining how to use it for documentation, learning, research, content curation, knowledge base and team operation tasks to make delivery clearer."
---

# Non-Developer Workflows

The value of Codex goes beyond writing code. As long as the task involves a set of documents, clear goals, and reviewable results, Codex can help.

## Documentation work

Suitable for tasks:

- Change the README to a novice-friendly version.
- Generate module descriptions based on code.
- Put together a migration guide.
- Generate release notes.
- Organize issues, PRs, and commits into weekly reports.

Task template:

```text
Please read the README, docs and package configuration of the current repository and help me put together a guide for newbies.

Require:
1. No code modifications.
2. The command must come from the real configuration of the repository.
3. Uncertain steps are marked "to be confirmed".
4. Outputs the directory structure, installation steps, development commands, test commands, and FAQs.
```

## study work

Suitable for tasks:

- Let Codex explain the code base in the order of learning.
- Generate a reading route "from entry to core module".
- Speak complex modules into a language that products, design, or operations can understand.
- Break down unfamiliar technology stacks into learning lists.

Task template:

```text
Please consider this repository as learning material. Please explain in the reading order for beginners:
1. Which files to look at first
2. What responsibilities does each directory have?
3. Key data flow or call chain
4. 3 exercises you can do after learning
```

## Product and operations work

Suitable for tasks:

- Translate PR changes into user impact.
- Generate a draft release announcement.
- Check whether copywriting and functional description are consistent.
- Extract user pain points from issues.

Task template:

```text
Please read the current diff and organize technical changes into product release notes. Please include:
1. Changes that users can perceive
2. Manage backend or configuration changes
3. Where old users may be affected
4. Speech skills that require customer service or operational synchronization
```

::: info Screenshot placeholder
Please add a screenshot of an example of "converting a PR into release notes". Suggested file: `docs/.vuepress/public/screenshots/chatgpt/03-release-notes.png`.
:::

## knowledge management

Codex is very suitable for precipitating scattered experience into templates:

- Troubleshooting records.
- FAQ。
- Task template.
- Team norms.
- Case review.

The ultimate goal is to turn "ask once every time" into "reuse directly next time".
