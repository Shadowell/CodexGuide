---
description: "Introduction to Codex Skills and Plugins, introducing the relationship between skills, plugins, and MCP capabilities, as well as the types of workflows suitable for codification."
---

# Skills and Plugins

This section introduces `Skills` and `Plugins` in the Codex. In different versions of apps or workspaces, the entrance position and display method may be adjusted, but the core differences are relatively stable: `Skill` is more like a reusable workflow description, and `Plugin` is more like a way to package a set of capabilities for distribution and installation.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex Skills](https://developers.openai.com/codex/skills) and [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan). If your interface is not exactly the same as the screenshot in this article, please give priority to the functions available in the current client and workspace.
:::

If you see entrances related to skills and plugins in the App, you can understand them by combining the following concepts:

![image-20260511153225029](../images/image-20260511153225029.png)

## What is Skill

`Skill` can be understood as an operation manual for Codex to perform repetitive tasks stably. When a certain workflow is already fixed, such as "reviewing PRs", "organizing documents", and "complementing case indexes", it can be precipitated into a Skill to reduce the cost of repeated descriptions each time.

A Skill usually contains:

1. An `SKILL.md` file
Trigger scenarios, execution steps, output formats and precautions will be written here.
2. Support scripts, templates or reference files when necessary
Used to help Codex complete tasks more stably.

![image-20260511153249467](../images/image-20260511153249467.png)

Common uses are:

- Prepare or install available Skills first.
- Be clear about which Skill you wish to use when initiating a task.
- Let Codex execute according to the process of this Skill, and then continue to question or iterate based on the results.

Some workspaces will provide more direct installation or activation methods; in some scenarios, the Skill needs to be placed in the agreed directory first, or distributed through existing plugin capabilities. To be on the safe side, it is not recommended to write a fixed conclusion that "give a GitHub link and it will be installed automatically". A better statement is: you can hand over the source of the skill to Codex to assist in identification and installation, but the specific process will be affected by the client capabilities and workspace settings.

![image-20260511153309947](../images/image-20260511153309947.png)

## What is Plugin

`Plugin` is more like a packaging and distribution mechanism, used to combine reusable workflow, application integration, MCP service configuration and other capabilities to facilitate unified installation and use in projects or teams.

Simple understanding:

- `Skill` focuses on “how this should be done.”
- `Plugin` focuses on "which capabilities should be packaged to facilitate installation and reuse".

Therefore, Skills are often the specific processes themselves, while Plugins are more like installation units that host these processes and integration capabilities.

![image-20260511153326902](../images/image-20260511153326902.png)

## How to understand their relationship

You can think of the two as:

- Skill is "job description"
- Plugin is "a toolbox containing instructions, tools and connection configurations"

Some plugins will contain one or more Skills, and may also come with application integration or MCP configuration. In this way, the team does not need to manually configure each environment when migrating the environment.

## Reminders when using

- The specific entrances to plugins and skills will change with the version. Don’t assume that the button position in a screenshot will never change.
- If the plugin involves an external system, browser, mailbox, knowledge base or project management tool, first confirm whether it is read-only or writable.
- When it comes to installing, writing back to external systems, or sharing to a team, it's best to reserve manual review.

![image-20260511153409165](../images/image-20260511153409165.png)
