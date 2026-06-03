---
description: "Codex CLI installation and login tutorial, covering Node environment, installation commands, version checking, login process and first run preparation."
---

# Installation and login

This page first covers the installation and login of Codex CLI. Desktop, ChatGPT, Cloud and IDE entry points will be expanded separately in [Entry Map](/platform/).

::: tip final check
The last date of verification of official information: 2026-05-27. For CLI system requirements and installation methods, refer to [openai/codex official repository](https://github.com/openai/codex), [CLI install documentation](https://github.com/openai/codex/blob/main/docs/install.md) and [Codex CLI Help Center](https://help.openai.com/en/articles/11096431-openai-codex-cli-getting-started).
:::

## Check before installation

The current CLI operating environment recommendations given by the official repository are:

|project|suggestion|
| --- | --- |
|operating system|macOS 12+, Ubuntu 20.04+/Debian 10+, Windows 11 via WSL2|
| Git |Recommend 2.23+ for easy PR auxiliary capabilities|
|Memory|4GB starts, 8GB is more stable|

Confirm locally first:

```bash
node -v
npm -v
git --version
```

![image-20260511165250308](../images/image-20260511165250308.png)

## Install CLI

Common installation methods:

```bash
npm install -g @openai/codex
```

Update to the latest version:

```bash
npm install -g @openai/codex@latest
```

Check version:

```bash
codex --version
```

![image-20260511165422384](../images/image-20260511165422384.png)

## Login method

run:

```bash
codex
```

Complete the login according to the terminal prompts. Official Sources states that Codex can be used in multiple entry points through ChatGPT accounts. The specific available plans, limits and organizational strategies are subject to [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt).

![image-20260511165455390](../images/image-20260511165455390.png)

## First read-only task

Enter a local project root directory:

```bash
cd path/to/your/project
codex
```

First make the Codex read-only repository:

```text
Please read the directory structure, README, package manager configuration and test configuration of this repository first. Do not modify the file. Please summarize:
1. Project purpose
2. Main technology stack
3. How to install dependencies and run tests
4. 3 low-risk tasks you suggest I give you next
```

![image-20260511165723872](../images/image-20260511165723872.png)

## How to judge when installation fails

|Phenomenon|Possible reasons|Processing method|
| --- | --- | --- |
|`codex` command not found|npm global bin is not in PATH|View `npm bin -g` and add the directory to shell PATH|
|After logging in, it still prompts that there is no pertask.|Account plan, organizational policy, or session state issues|Sign back in and review the program instructions in the Help Center|
|Windows is running abnormally|WSL2 is not used or the shell environment is incomplete|Use Windows 11 + WSL2 according to official recommendations|
|Repository command cannot run|Project dependencies are not installed or the local environment is missing|Install the project dependencies first, and then let Codex read the test configuration|

Continue when finished: [Let Codex change the code for the first time](./12-cli-first-run.md).
