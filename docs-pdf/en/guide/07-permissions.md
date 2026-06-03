---
description: "Codex Pertask Management Guide explains how to control file access, command approval, network pertasks, sensitive data and high-risk operations. It is suitable for pre-task verification."
---

# Pertask Management

This section introduces common pertasks and approval modes in Codex. The interface copywriting of different entrances may be slightly different, but the core issue is always the same: can Codex automatically change files, can it automatically execute commands, and which operations require your confirmation.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [OpenAI Codex CLI – Getting Started](https://help.openai.com/en/articles/11096431-openai-codex-cli-getting-started) and [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan). For the specific name, entrance and available options, please refer to the client interface you are currently using.
:::

![image-20260511153154873](../images/image-20260511153154873.png)

## Three common patterns

1. `Suggest`
This is the most conservative mode. Codex can read files and suggest modifications, but it usually still requires your confirmation before actually changing the file or executing the command. It is suitable for use when you are learning about an unfamiliar repository for the first time, doing code reviews, or when you want to control key operations throughout the process.

2. `Auto Edit`
This mode usually allows Codex to write files automatically, but still retains manual confirmation when executing shell commands. It is suitable for scenarios where you already know the project structure relatively well and want Codex to quickly complete refactoring, batch document changes or partial implementation, but do not want to completely give up command execution pertasks.

3. `Full Auto`
This is the most autonomous mode. Codex automatically reads, writes, and executes commands in a restricted environment, which is suitable for longer continuous tasks, such as fixing a build, running a round of verification, or completing a small feature with well-defined boundaries. Because the risk is higher, it's best to only use it when the version can be rolled back, the scope of the task is clear, and you understand the boundaries of the current sandbox.

## How to choose more safely

- When entering a new project for the first time, start with `Suggest` first.
- When you need to modify documents, styles or tests in batches, you can consider `Auto Edit`.
- Only consider `Full Auto` if the task boundaries are clear, the repository is rollable, and you accept it to execute commands continuously.

## Reminders when using

- Different clients may not write the pertask mode with exactly the same Chinese name. It is recommended to give priority to the official English mode name.
- Even with a more automated model, retain review for high-risk operations such as installing dependencies, deleting files, accessing the network, pushing code, or handling sensitive information.
- If you are not sure whether the current mode will perform a certain action, let Codex explain which commands it intends to run and which files it will change before deciding whether to continue.
