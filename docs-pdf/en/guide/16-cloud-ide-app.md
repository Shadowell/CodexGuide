---
description: "Codex Cloud usage guide, explaining cloud tasks, repository connections, long tasks, PR workflow, and differences with local apps and IDEs."
---

# Codex Cloud: Using the cloud model

Codex Cloud is a usage method that does not rely on the local environment. You don’t need to open the App or CLI on your computer, you can directly connect to the GitHub repository in the browser and let Codex complete the task in the cloud.

::: tip
For the usage of CLI, see [CLI installation and login](./11-cli-installation.md), for the IDE plugin, see [Using Codex in VS Code](./13-ide-vscode.md), and for the usage of desktop app, see [Codex Desktop App Download and Installation](./01-app-installation.md).
:::

---

## Suitable for the scene

- Long tasks that don’t want to occupy local resources
- Multiple tasks proceed in parallel
- Let Codex analyze the repository and propose PRs in an independent environment
- Use temporarily when you are away from the computer and only have a browser

---

## How to use

### Step 1: Open Codex Cloud

Visit:[https://chatgpt.com/codex/cloud](https://chatgpt.com/codex/cloud)

![image-20260513124118871](../images/image-20260513124118871.png)

After the connection is successful, you will jump to the task page:

![image-20260513124234976](../images/image-20260513124234976.png)

### Step 2: Authorize and select a repository

Cloud mode runs directly in the GitHub repository and requires authorization first. You can authorize all repositories, or select only specific repositories:

![image-20260513124426627](../images/image-20260513124426627.png)

### Step 3: Issue instructions and check task progress

After issuing the command, Codex will execute the task in the cloud, and the progress is displayed in the task list at the bottom of the page:

![image-20260513124638212](../images/image-20260513124638212.png)

Click on the task to view the execution process and intermediate status of each step. After the task is completed, you can also view the final answer and output content:

![image-20260513124727322](../images/image-20260513124727322.png)

---

## Differences from Desktop App mode

| |Codex Desktop App| Codex Cloud |
|---|---|---|
|Operating environment|local computer|Cloud (GitHub environment)|
|Do you need to install|Need to download the computer client|No need, browser access directly|
|fit for task|Native code, plugins, automation|Remote repository analysis, PR generation|
|Parallel tasks|support|support|
