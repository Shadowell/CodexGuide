---
description: "Instructions on the basic composition of the Codex Desktop App, introducing the project workspace, dialogue, setting entrance, task status and common interface areas to facilitate quick location of functions."
---

# Understand the basic components of Codex

::: tip final check
The last date of verification of official information: 2026-05-27. This chapter refers to official information such as [Codex App docs](https://developers.openai.com/codex/app), [Settings](https://developers.openai.com/codex/app/settings), and [Agent approvals and security](https://developers.openai.com/codex/agent-approvals-security). The interface description is based on the actual version of the current Codex Desktop App. The display may be slightly different under different systems, regions, client versions and account packages.
:::

## Meet the conversations and projects

Open the Codex Desktop App. The left column contains two main entrances: **Chat** and **Project**.

![Codex Desktop App main interface](../images/image-20260511150406204.png)

**Chat Conversation**

The conversation experience is basically the same as the ChatGPT web client, and is suitable for handling daily, one-time questions and answers and simple tasks. Each conversation is independent of each other and does not share a working directory.

**Project project**

Suitable for tasks that require operating local files, such as generating code, writing documents, making PPT, and completing reports. All conversations created in the project share the same local working directory, which facilitates unified management of multiple subtasks.

![Project workspace interface](../images/image-20260511150432591.png)

After issuing instructions in the project, Codex modifications will be directly applied to the files in your local folder.

## Dialog function description

The dialog box of the Codex Desktop App is similar to the ChatGPT web app, but provides the following additional features:

1. **Add context**: You can attach files, screenshots or other reference content
2. **Switch Model**: Switch between different models
3. **Control Pertasks**: Set the operating pertasks of Codex in the current task
4. **Select working directory**: Specify the local folder in which Codex executes tasks

![Dialog Ribbon](../images/image-20260511174720640.png)

## settings panel

Click the avatar or settings icon in the lower left corner to open the settings panel.

![Set up entrance](../images/image-20260511175034743.png)

![Set panel details](../images/image-20260511175220089.png)

The left side of the picture above is the settings menu of the Codex desktop app. Don't think of it as a table that must be filled out once: novices only need to confirm that "General" and "Pertasks" can support the first task, and other settings can be gradually opened after the real scene appears.

![Codex setup entry point quick chart](../images/codex-settings-map.svg)

## Novices should check these four steps first

1. **Select the work mode first**: Select "Suitable for programming" when doing code, websites, scripts, and repository tasks; select "Suitable for daily work" when writing copywriting, organizing information, and doing non-coding tasks.
2. **Don’t rush to enable maximum pertasks yet**: At first, it is recommended that Codex only read and write files in the current workspace, and then approve them separately when encountering network connections, system files, and dangerous commands.
3. **Configure the working directory first**: Try to use an empty folder or test project for the first task. Do not directly hand over important projects to the novice Codex.
4. **Observe the usage first**: If tasks are frequently interrupted, the quota is tight, or the model response slows down, return to the "Usage" and package pages to confirm the restrictions.

::: warning Screenshots are not recommended configurations
The switches in the screenshots are just interface examples and do not mean that all readers should turn them on. In particular, "full access", browser control, computer control, hooks and MCP servers should be opened step by step according to tasks when used for the first time.
:::

## Set up itemized instructions

<div class="setting-card-grid">
  <section class="setting-card">
<strong>General</strong>
<p>This determines how Codex answers and pertables tasks by default. The most important things are "working mode" and "pertasks". If you want to follow this tutorial to modify web pages, scripts, and codes, give priority to "Applicable to Programming"; it will retain more technical details, command output, and change instructions. If you are just writing an outline, organizing information, or revising copy, you can switch to "Applicable to daily work" and the reply will be lighter. </p>
<p>"Default pertasks" usually means that Codex can read and edit files in the current workspace; "Automatic review" will allow it to make partial automatic judgments on additional pertask requests; "Full access pertasks" will significantly amplify capabilities and risks. It is not recommended to open full access pertask for a long time when you are a novice. After you can understand the command it wants to run, you can use it temporarily according to the task. </p>
<em>Recommendation for newbies: Programming mode + minimum available pertasks</em>
  </section>

  <section class="setting-card">
<strong>Appearance</strong>
<p>Appearance only affects the display experience, such as light/dark mode, font look and feel, interface density, or window presentation. It does not change whether Codex can read files, change code, or connect to the Internet. </p>
<p>If you often take screenshots to write tutorials, it is recommended to use light mode and a larger window width; if you read terminal output for a long time, you can use dark mode to reduce visual fatigue. The color of the tutorial screenshot is different from your actual interface, which does not affect the functional location. </p>
<em>Recommended for newbies: choose according to your reading habits</em>
  </section>

  <section class="setting-card">
<strong>Configuration</strong>
<p>The configuration page corresponds to the agent configuration in the official documentation and is usually used to manage models, inference intensity, sandbox, approval policy, network access and local configuration files. The desktop app will make commonly used items into a clickable interface, and advanced users can also further view <a href="https://developers.openai.com/codex/config-basic">config.toml basic configuration</a> and advanced configuration.</p>
<p>Don’t pursue “full automation” when you first start learning. If you don't know the consequences of a certain option, keep the default first; come back and adjust it when you encounter "always need to approve the same security command", "a certain project needs a fixed model" or "the team needs to unify the rules". </p>
<em>Recommendation for newbies: Default is enough</em>
  </section>

  <section class="setting-card">
<strong>Personalization</strong>
<p>Personalization is used to adjust Codex's communication style and default preferences, such as being more detailed, concise, more instructional, or adhering to your long-standing habits in tasks. It is suitable for placing rules of "how do you want Codex to collaborate with you", but is not suitable for placing project-level commands. </p>
<p>Project-level rules should be written in <a href="./14-agents-md.html">AGENTS.md</a>, such as test commands, coding style, and prohibited directory changes. Personal preferences can be written as "give conclusion first", "explain in Chinese" and "list verification commands before submitting". This way personal habits and project rules don't mix. </p>
<em>Recommendation for newbies: only write no more than 3 items</em>
  </section>

  <section class="setting-card">
<strong>MCP Server</strong>
<p>MCP Server allows Codex to connect to external tools such as browsers, design tools, knowledge bases, databases, Lark/Feishu, Notion, or custom systems. Official documents regard MCP as an important way to expand Codex's capabilities, but each access to a service also means that Codex can see or operate more contexts. </p>
<p>Novices should not accept many MCPs at once. Start with a low-risk tool, such as a read-only knowledge base or browser test; when an API Key is required, try to use environment variables or system credential management instead of writing the key directly into tutorials, screenshots, or conversations. </p>
<em>Recommendation for newbies: Only open one MCP per scene</em>
  </section>

  <section class="setting-card">
<strong>Hook</strong>
<p>Hooks are a mechanism that allows Codex to automatically trigger scripts or commands at specific times, such as preparing the environment before a task starts and running formatting, testing or checking after the task ends. It is very suitable for team standardization, but it is also the most likely to cause side effects due to incorrectly written commands. </p>
<p>You can not configure the hook when using it for the first time. When you know clearly "pnpm lint must be run after every modification" or "a report must be generated before every subtask", then write these fixed actions in. The commands in the hook should be short, repeatable, and have clear failure information. High-risk actions such as deleting, publishing, and uploading keys should not be included. </p>
<em>Recommendation for newbies: leave it empty first</em>
  </section>

  <section class="setting-card">
    <strong>Git</strong>
<p>Git settings manage how Codex understands the current repository, branches, diffs, commits, and remote collaboration. For real projects, Git is your safety net for rolling back and reviewing Codex changes. </p>
<p>It is best for newbies to develop two habits: let Codex look at <code>git status</code> before starting, and list the changed files and verification results after it ends. Don’t let Codex directly push or change the main branch without looking at the diff; team projects can use branch prefixes such as <code>codex/</code> unitablely. </p>
<em>Recommendation for newbies: Check git status before and after each task</em>
  </section>

  <section class="setting-card">
<strong>Environment</strong>
<p>Environment settings are usually used to prepare the dependencies, commands, environment variables and local initialization steps required for the project to run. Local environments in the official App documentation focuses on making Codex work in a reproducible environment, rather than having to re-guess how to start the project every time. </p>
<p>You can write common preparation steps as scripts, such as installing dependencies, copying sample configurations, and starting services. Don't script real production keys; use native environment variables, team key management, or an explicit manual approval process when keys are required. </p>
<em>Recommendation for newbies: record the startup command first</em>
  </section>

  <section class="setting-card">
<strong>Working tree</strong>
<p>The work tree corresponds to Git worktree. It allows Codex to open an independent workspace next to the same repository, which is suitable for doing multiple tasks in parallel, or allowing different agents to process different branches at the same time without covering each other. </p>
<p>If you are not familiar with Git branches, don't rush to use the work tree yet. Then turn it on when you need to "let Codex fix two bugs at the same time" or "run tests on one task and modify documents on another task". After use, work trees that are no longer needed should be cleaned regularly to avoid leaving many expired copies on the disk. </p>
<em>Recommendation for newbies: know how to use branches before using them</em>
  </section>

  <section class="setting-card">
<strong>Browser</strong>
<p>Browser settings allow Codex to open web pages, click, type, take screenshots, and check page status. It is suitable for front-end acceptance, login page inspection, table process testing and data review. The official App documentation also lists the In-app browser as one of the important capabilities of the Desktop App. </p>
<p>Browser capabilities touch accounts, page content, and possible table subtasks. Do not allow Codex to submit personal information, make payments, delete content, or change pertasks on third-party websites. When doing front-end testing, give priority to using the local <code>localhost</code> page; when doing online pages, first make it clear what it is allowed to see and what it is not allowed to click on. </p>
<em>Recommendation for newbies: use it for local preview first</em>
  </section>

  <section class="setting-card">
<strong>Computer control</strong>
<p>Computer controls let Codex read the screen, click on apps and type like a user. It is suitable for desktop software without API or MCP, such as design tools, office software, system pop-ups, or processes that can only be operated through the UI. </p>
<p>The risks of this kind of ability are higher than ordinary document editing. Only give clear, low-risk, reversible actions on first use, such as "Open this window and take a screenshot." Don’t let it finalize payments, change passwords, delete cloud files, send messages or submit important tables for you. </p>
<em>Recommendation for newbies: Just make observations and screenshots</em>
  </section>

  <section class="setting-card">
<strong>Archived conversation</strong>
<p>Archive conversations to close threads that are no longer active and keep your sidebar clean. Archiving is not deletion, and you can usually retrieve historical context, conclusions, and file modification records. </p>
<p>If a task has been completed, verified, and summarized, it can be archived. Do not archive tasks that have not yet been merged, are still waiting for approval, or that you may continue to ask questions about, to avoid having to find context later. </p>
<em>Recommendation for newbies: File after completion</em>
  </section>

  <section class="setting-card">
<strong>Usage</strong>
<p>Usage is used to check the quota, usage or package-related status. The available functions, quota, and concurrency capabilities of Codex will change with the account plan. For details, please refer to the current package description of ChatGPT / OpenAI. </p>
<p>If the Codex is slow, tasks are limited, and new tasks cannot be started, read here first, and then check the <a href="./02-subscribe-plus.html">Subscribe to Plus / Pro</a> chapter. Team accounts also need to confirm whether the administrator has restricted certain abilities. </p>
<em>Recommendation for newbies: read here first when encountering restrictions</em>
  </section>
</div>

## When do you need to change settings?

|the situation you encountered|Priority check|
| --- | --- |
|Codex answers are too technical or too wordy|Routine, personalized|
|Ask the same security command every time|General pertasks, configuration, projects AGENTS.md|
|Requires connection to Figma, Notion, Lark/Feishu or database|MCP server|
|Want to run the test automatically after the task is completed|hook, environment|
|Want to run multiple repository tasks at the same time|Git, working tree|
|Need to open the web page to check the UI|Browser|
|Requires desktop software to operate|computer control|
|Old task not found|Archived conversation|
|Unable to continue starting the task or insufficient credit|Usage, subscription packages|

::: tip How to check the official information
The name in the settings page will change as the client iterates. When encountering inconsistencies with the tutorial screenshots, first read OpenAI's official [Codex App docs](https://developers.openai.com/codex/app), and then return to this tutorial to check the Chinese scene explanation.
:::

Next step: [Use the mobile version of Codex to follow up on desktop tasks](./04-mobile-control-desktop.md)
