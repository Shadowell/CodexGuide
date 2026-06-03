---
description: "Codex task sequence execution and parallel instructions help understand the mechanism of reading files, running commands, modifying files, verifying results and reporting progress, making it easy to review."
---

# Sequential execution and parallelism of tasks

This section will introduce how to manage the sequential execution of tasks and the parallel operation of tasks in the process of using codex.

We use codex to develop the obsidian novice tutorial website as an example: to illustrate the sequential execution management and parallel operations of tasks

# 1. Sequential execution

Select a local project/create a new project. This project actually corresponds to a folder in our local area and is stored in our local area.

Then click Create new conversation.

![Xnapper-2026-05-11-15.08.36](../images/Xnapper-2026-05-11-15.08.36.png)

We send a task to CodeX and ask him to help us design a website, and he will start executing it at this time.

![image-20260511151615728](../images/image-20260511151615728.png)

While this task is not being executed, if we give him a new command, we can only wait. What is shown is the following situation:

![image-20260511153100591](../images/image-20260511153100591.png)

This is equivalent to the fact that he is currently executing a task, and the other two commands we give him need to be queued and cannot be executed until the previous tasks are completed.

But if we want to modify the requirements, for example, if we want him to specify that the background style of this website is "hand-drawn style", it will be more troublesome to wait for him to complete the design before modifying it. I wanted him to know my style requirements while he was designing.

At this time, we can click on the **Boot** option. After doing this, he will perform a "queue-jumping" operation:

1. Original task order:
(a) Execute website design
(b) Introduction to technology selection
(c) Implement hand-drawn style requirements (originally the third task)

2. The effect after queue jumping:
We want the "hand-drawn style" to play a role in the design process. By clicking on the guidance prompt, the task will jump directly into the currently executing task.

This is actually a process that demonstrates how to manage sequentially executed tasks and related queue jumping operations.

# 2. How to parallelize

In fact, within a project, we perform multiple tasks at the same time.

At this time, we only need to click "New Conversation" on the left sidebar. In this case, several of its tasks will be executed in parallel without interfering with each other.

