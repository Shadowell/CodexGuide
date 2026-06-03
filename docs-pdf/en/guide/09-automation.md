---
description: "Codex Automation Guide explains scheduled tasks, reminders, monitoring, follow-up and work scenarios suitable for automated processing, and precipitates repetitive inspection processes."
---

# automation

This section introduces `Automation` in the Codex. If Skill focuses more on "how to do it", then Automation focuses more on "when to do it automatically".

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) and [Codex use cases](https://developers.openai.com/codex/use-cases/). Automation entries and options may vary under different clients, workspace packages, and pertask settings.
:::

When a workflow is stable enough and will occur repeatedly, you can consider handing it over to Automation and triggering it on a schedule in the background instead of manually initiating it every time.

Tasks suitable for automation include:

- Check document dead links regularly
- Organize issue or PR summary once a week
- Daily summary failing CI
- Reminder to review or update documents at a fixed time

## How to understand automation

An automated task usually contains at least three parts:

1. target audience
Which project, repository or thread it corresponds to.
2. Trigger time
For example, fixed time, fixed interval, or returning to the current task later to continue following up.
3. Execution content
That is to say, what exactly should Codex accomplish at that time.

## Common usage process

In an interface that supports Automations, you will usually go through a process similar to the following:

1. Select the corresponding project, repository or current thread.
2. Set execution time or execution cycle.
3. Write clearly the goals, output format and boundaries of the automation task itself.
4. After saving, observe the results of the first run and then decide whether to keep it for a long time.

The most easily overlooked point here is that the automation prompt should be written as a "self-contained" task description as much as possible. Don't assume that it will remember what you said before. It's best to write out the check range, output format, and validation requirements completely.

❌ Not self-contained enough:

```text
Please check if there is any problem with the link in the document.
```

✅ Recommended writing method:

```text
Please check whether the external links in all .md files in the docs/ directory are valid.

Check scope: Only links starting with http:// or https:// are checked, anchors and relative paths are ignored.
Output format: press "File path"|Line number|Link|"Status" lists failed links; when all are normal, output "All links are normal".
Verification method: Initiate a HEAD request for each link, and it will be considered invalid after a timeout of 5 seconds.
Limitations: No files are modified, no new files are created.
```

The difference between the two is: the first type has to rely on guesswork to fill in the missing details every time it is triggered, and the results are easily unstable; the second type clearly states the boundaries, formats, and verification methods, so that no matter which execution or context the behavior is consistent and predictable.

## Reminders when using

- The automation capabilities in different workspaces may not be exactly the same. Some support project-level tasks, while others are more focused on reminders and follow-up.
- When configuring for the first time, it is recommended to start with low-risk, read-only tasks.
- If the automation will write files, access external systems, or trigger notifications, it's best to confirm pertask boundaries and manual review methods.

![image-20260511155400455](../images/image-20260511155400455.png)
