---
description: "Codex and PPT Skill case shows how to generate a presentation in one sentence, checking the structure, visual consistency and export effect."
---

# Codex × PPT Skill: Generate presentations in one sentence

This case demonstrates a process that is helpful for novices: how to let Codex assist in installing an open source Skill and call it to complete the task immediately after the installation is completed.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Codex Skills](https://developers.openai.com/codex/skills) for the Skill mechanism. The PPT Skill used in the case comes from the community repository: [guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill). Please refer to the original repository instructions for the installation method, dependency requirements and output format of third-party Skills.
:::

## Applicable scenarios

- You've found a community skill you'd like to use.
- You want Codex to complete the installation for you, rather than manually organizing directories and files.
- You want to verify that it works with a real task immediately after installation.

## Prepare a Skill source

First, you must have the source address of this Skill. Many developers will put their skills in GitHub repositories for others to install and reuse.

This case uses a community PPT Skill:

[guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill)

## Step 1: Installation

You can give the Skill repository address to Codex and ask it to help identify and complete the installation process.

For example:

```text
Please help me install this Skill: https://github.com/op7418/guizang-ppt-skill
After the installation is complete, tell me its purpose, dependency requirements, and how it should be called.
```

![image-20260511153613881](../images/image-20260511153613881.png)

In different workspaces, the installation methods may not be exactly the same. Some will directly support installation, while others will analyze the repository structure first and then prompt you to confirm the placement location or dependency requirements.

## Step 2: Call and use

After the installation is complete, you can directly ask Codex to call this Skill to complete a real task.

If the Skill has been installed in advance, you can usually call it through the slash command, the skill selector, or by explicitly naming it in the task.

![image-20260511153638841](../images/image-20260511153638841.png)

For example:

```text
Please use the PPT Skill you just installed to generate a presentation suitable for sharing based on the topic "Getting Started with AI Programming Tools". First tell me what key information is missing.
```

If you don't give enough context, Codex will often go back to the Skill's manual to see what input it requires, and then ask you for the necessary information.

![image-20260511153659028](../images/image-20260511153659028.png)

After you complete the background, theme, audience or style requirements, it will read the README, templates and related documents according to the process of the skill, and then generate the results.

![image-20260511153714343](../images/image-20260511153714343.png)

If the default product of this Skill is an HTML presentation, you can usually open the preview directly in the Codex built-in browser.

![image-20260511153735583](../images/image-20260511153735583.png)

## What should you focus on checking?

- Codex installs the Skill you specified, not other repositories with similar names.
- After installation, are there any instructions on dependency requirements, output format and calling method?
- Whether the generated results contable to the capability boundaries described in the original repository of this Skill.
- If the results are not ideal, it is either a limitation of the Skill itself or the input information you provided is not enough.

## Risk reminder

- Community Skills are not official skills, and their quality and maintenance status vary greatly. It is best to read the repository README before using them.
- Don't default to "give a GitHub link and you will be able to install it successfully in one step". Some Skills will also rely on additional scripts, templates or local environments.
- During the first verification, give priority to a small task and confirm that the skill can run normally before using it to make a tableal product.
