---
description: "AGENTS.md project rules guide, explains how to write project commands, coding style, prohibited items, verification methods and team conventions, so that Codex can understand the repository better."
---

# AGENTS.md Project Rules

For Codex, every time we open a new conversation window, it will enter a new context. It has no memory of what happened before, and its memory of the entire project is blank.

So Codex provides a memory system to solve such problems

`AGENTS.md` is a project description file for coding agents such as Codex. It can describe the project structure, development orders, testing requirements, coding style, and collaboration boundaries.

::: tip final check
For the `AGENTS.md` mechanism, please refer to [Codex AGENTS.md official documentation](https://developers.openai.com/codex/guides/agents-md) and [openai/codex GitHub repository](https://github.com/openai/codex). Last verification date: 2026-05-27.
:::

## Why you need AGENTS.md

Without project rules, Codex needs to infer a lot of things from the repository:

- Which package manager to use.
- How to run tests.
- Which directories are generated.
- Which files cannot be changed.
- What checks should be run before subtask.

`AGENTS.md` can explicitly write down these rules to reduce repeated explanations.

## Where do you recommend placing it in the repository?

For the project we open, we can create an agents.md file in the project root directory.

It is the memory file of Codex. Codex will read the contents of agents.md before starting to work. We can test this:
1. Write some content in the agents.md file.

![image-20260513125413867](../images/image-20260513125413867.png)

1. Go back to the Codex dialog window and ask it: "What kind of system is this?"

![image-20260513125430444](../images/image-20260513125430444.png)

As can be seen from here, Codex will read the agents.md file and automatically bring the contents into new conversations as their context.

Of course, creating agents.md in the root directory of the current directory only takes effect on the current folder, not globally.

If you want it to take effect globally, there are two ways:
1. Find agents.md in the system's global Codex folder.
2. Open the settings in the Codex Desktop App, find "Personalization" and fill in the "Custom Instructions". What is set here is the global agents.md file.

After setting the global file, it will take effect for all projects. Therefore, their scope and scope are different, which everyone needs to understand.

![image-20260513125644728](../images/image-20260513125644728.png)

## Recommended template

```markdown
# AGENTS.md

## Project overview

- Project type:
- Main language:
- Key directory:

## Common commands

- Installation dependencies: `...`
- Local development: `...`
- Run the test: `...`
- Type check: `...`
- Format: `...`

## Code specifications

- Follow existing coding style.
- No extraneous refactoring.
- New features must supplement or update the tests.

## security boundary

- `.env`, keys, and private credentials are not read or submitted.
- The command to delete production data is not executed.
- Explain the impact before modifying the database migration.

## Delivery requirements

- Description of changed files.
- Describes the verification command and results.
- Account for unverified items and remaining risks.
```

## writing advice

- The more specific the better. `Run tests: pnpm test` is more useful than "remember to test".
- Clearly write down the strategy for generating directories, building products, and locking files.
- If this is a monorepo, please indicate the boundaries of each package.
- If there are special lint, formatting or code generation processes, write them in the command area.
- For safety-sensitive projects, write "prohibited matters" separately.

## Minimum available version

```markdown
# AGENTS.md

## Project command

- Installation dependencies: `pnpm install`
- Local development: `pnpm dev`
- Build: `pnpm build`

## Change the rules

- Read the relevant documentation before modifying.
- Maintain existing code style.
- Do not submit build product and environment variable files.

## Verification requirements

- Document change run: `pnpm build`
- Run relevant tests for code changes.

## security boundary

- Does not read `.env` or any private credentials.
- Release, deployment, database migration and data deletion commands are not executed.
```
