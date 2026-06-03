---
description: "The mobile version follows the desktop Codex task tutorial, explaining the ChatGPT App entrance, cross-device connection, task viewing and collaboration boundaries."
---

# Use the mobile version of Codex to follow up on desktop tasks

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to the official OpenAI article [Work with Codex from anywhere](https://openai.com/index/work-with-codex-from-anywhere/). The specific entrance, available regions, system support and interface name will change with client updates. Please refer to the current ChatGPT mobile app and Codex Desktop App.
:::

The "mobile Codex" mentioned here is, more accurately, the Codex entrance in the **ChatGPT mobile app**. It is not a separate mobile Codex App, nor does it turn the mobile app into a remote desktop mouse and keyboard.

You can think of it as: Codex is running in the desktop app, remote development machine, or other authorized environment. The mobile app is responsible for connecting to these environments, allowing you to continue viewing, replying, approving, and adjusting tasks when you are away from the computer.

You need to update your ChatGPT APP to the latest version, and then choose to connect to the Codex in your computer.


![Codex entry in ChatGPT mobile app](../images/mobile-codex-ios-app.jpg)


Connect to desktop Codex APP:

![Connect the mobile app to the desktop Codex App](../images/mobile-codex-connect-desktop.jpg)


Open the Codex in ChatGPT and you can use it directly.

![Open Codex in ChatGPT Mobile App](../images/mobile-codex-chatgpt-entry.jpg)


## what it can do

After the mobile app is connected to the machine running Codex, you can continue to process these things:

- View ongoing thread and task status.
- Read Codex staging output, terminal output, screenshots, diffs, and test results.
- Respond to Codex's clarifying questions.
- Approval of commands, network access, or other operations that require manual confirmation.
- Change task direction, switch models, or add new context.
- Create a new task and let Codex start working from the connected development environment.

The real place to perform the task is still the desktop app or the remote environment. Your files, dependencies, credentials, pertasks and local configuration will not be moved to the mobile app due to mobile app access.

## Prerequisites for use

Confirm these conditions before use:

- Install and update the ChatGPT App on your phone.
- Install and update the Codex Desktop App on your computer.
- Log in to the same ChatGPT / OpenAI account on your mobile app and computer, and be in a region and package that supports Codex.
- The desktop app has been connected to the corresponding project, or the Codex is running on an authorized machine, devbox, or remote environment.
- If the task will write files, run commands, and access the network, you still need to understand and confirm the corresponding pertasks.

::: info Platform support
The official OpenAI article states that Codex mobile capabilities are being previewed in the ChatGPT App on iOS and Android. Connecting to the Codex App on macOS is available; support for connecting to the Codex App on Windows is still subject to the official current instructions.
:::

## Recommended usage scenarios

The mobile version is best for those moments when you’re away from the computer but don’t want the task to stop:

- Check the progress of long tasks while commuting.
- Codex quickly gives you direction when you need to choose a solution.
- When a task is stuck on pertask approval, approve or deny it from your phone.
- Have Codex summarize the latest code, issues, documentation, or customer background before the meeting.
- Suddenly I thought of a change point. First send it to Codex to start exploring, and then look at the diff carefully after returning to the computer.

## Not suitable for use

Mobile is not a suitable substitute for a full local review process. The following things are best done back on the computer:

- Final review before large-scale code merge.
- High-risk operations involving production environments, keys, billing, and release deployments.
- Tasks that require reading a large number of diffs over a long period of time.
- Tasks that require you to manually operate an IDE, debugger, or local GUI.

If you approve commands on your mobile app, it is recommended to only approve operations that you can understand. When encountering actions such as deleting, overwriting, deploying, or transmitting sensitive data, stop first and return to the computer to confirm.

## A typical process

1. Open the Codex Desktop App on your computer and enter the corresponding project.
2. Let Codex start a longer task, such as troubleshooting a failing test or organizing documentation.
3. After leaving the computer, enter the Codex in the ChatGPT mobile app.
4. Open the same running task thread.
5. View Codex output, screenshots, terminal logs, test results or diffs.
6. If the Codex requires confirmation, reply, approve, or redirect right from your phone.
7. After returning to your computer, do a full diff review, run the verification command, and submit.

## Differences from Codex Cloud

|Comparative item|Connect the mobile app to the desktop app| Codex Cloud |
| --- | --- | --- |
|Execution location|your computer, devbox or remote environment|OpenAI / ChatGPT connected cloud task environment|
|Files and Credentials|Stay on the original machine|Relying on cloud-connected repositories and authorizations|
|fit for task|Follow up on local long tasks, review and approve, and view results|Repository tasks that do not rely on local computers|
|Can I leave the computer?|Yes, but the original execution environment must be connectable|Can|

In a word: **Codex on the mobile app is more like a "portable workbench", and Codex Cloud is more like a "cloud execution environment". **

Next step: [Complete your first task with Codex](./05-app-first-task.md)
