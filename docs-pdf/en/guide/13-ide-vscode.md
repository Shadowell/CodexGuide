---
description: "A tutorial on using Codex in VS Code, introducing plugin entry, file context, local modifications, code interpretation, and in-editor collaboration."
---

# Using Codex in VS Code

::: tip final check
The last date of verification of official information: 2026-05-27. This chapter uses VS Code as an example to demonstrate plugin installation and basic usage. The operation interface shall be subject to the actual version.
:::

This chapter introduces how to install the Codex plugin in the VS Code code editor and complete development tasks through the plugin. Compared with the desktop app, using Codex in VS Code allows you to see the file directory structure and comparison before and after modification more directly, which is suitable for developers who are accustomed to working in the editor.

## Install the Codex plugin

Open VS Code, click the "Extension" icon in the left sidebar, enter **Codex** in the search box, select the first result, and click "Install".

::: tip
What is installed here is the ChatGPT plugin officially released by OpenAI, which integrates the conversation and code assistance capabilities of Codex.
:::

![Search and install the Codex plugin](../images/image-20260511192103991.png)

## Open the plugin dialog window

After the installation is complete, open any project file in VS Code, and the ChatGPT icon will appear in the upper right corner. Click the icon and the Codex dialog window will expand in the right sidebar.

![The plugin icon in the upper right corner of the file](../images/image-20260511192430989.png)

![Expanded conversation window](../images/image-20260511192548524.png)

## Get started

After the dialog window opens, just enter the requirements directly, and Codex will begin to assist in completing the development tasks. The usage is basically the same as that of the Codex Desktop App.

**Use `@` to specify the file:**

After entering `@` in the dialog box and selecting a specific file, Codex will directly locate the file for analysis or modification, which is faster and more accurate than letting it search globally. It is recommended to use `@` to specify related files first when the task goal is clear.

![Use @ to specify files](../images/image-20260511192700125.png)

## How to choose between App and VS Code plugins

| |Codex Desktop App|VS Code plugin|
|---|---|---|
|Suitable for the scene|Multi-task management, Skills, Automations|Call while writing code, close to the editor workflow|
|File structure visibility|Need to switch interface|View directly in the editor|
|Comparison before and after modification|View independently|Can be viewed with editor diff|
|Recommended users|Requires parallel tasks or plugin collaboration|Everyday coding developer|

Just choose according to your own usage habits, and the two can be used together.
