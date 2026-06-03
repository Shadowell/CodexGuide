---
home: true
icon: home
title: CodexGuide
description: "CodexGuide system organizes Codex Desktop App, CLI, IDE, Cloud, Skills and real cases to help Chinese users from getting started to team implementation."
pageClass: codex-home-page
heroImage: /logo.svg
heroText: CodexGuide
tagline: A practical guide to Codex for beginners, creators, developers and teams around the world. From getting started for the first time to integrating Codex into real workflows.
actions:
  - text: Start with the learning path
    link: /guide/00-overview.html
    type: primary
  - text: Choose to use the entrance
    link: /platform/
    type: default
  - text: Browse hands-on cases
    link: /recipes/
    type: default
features:
  - title: Getting Started with Desktop Apps
    icon: desktop
    details: From computer installation to the first task, it helps novices run through the complete closed loop first.
  - title: CLI Engineering Practice
    icon: terminal
    details: Covers local repository, command execution, test verification, subtask instructions and troubleshooting process.
  - title: Skills and plugins
    icon: plugin
    details: Sort out how MCP, Skills, Subagents, browsers, and automation capabilities are combined.
  - title: Security and Pertasks
    icon: lock
    details: Explains sandboxing, approvals, networking, credentials, and boundary settings when used by teams.
  - title: mobile collaboration
    icon: mobile
    details: Explain how to initiate a Codex task using the mobile app and connect the progress back to the desktop workflow.
  - title: Real case library
    icon: lightbulb
    details: Includes 13 transferable cases, covering content production, knowledge base, browser, CI and remote troubleshooting.
  - title: Team Knowledge Codification
    icon: people
    details: Provide AGENTS.md, task templates, review structure and team promotion methods.
  - title: Configuration and troubleshooting
    icon: wrench
    details: Summary of configuration files, CLI options, common errors and recovery paths to facilitate quick location when encountering problems.
---

<div class="codex-home">

<section class="home-section home-intro">

## Who is this tutorial suitable for?

CodexGuide is not a command cheat sheet, but a hands-on guide organized around real workflows. It helps people with different backgrounds answer three questions: which entrance should I start from, how to submit requirements to Codex, and how to confirm that it delivers reliable results.

<div class="home-metric-grid">
  <a class="home-metric-card" href="/guide/00-overview.html" data-tone="teal">
<strong>17-part system guide</strong>
<span>From Desktop App, CLI, IDE to Cloud, establish complete usage habits by stages. </span>
  </a>
  <a class="home-metric-card" href="/recipes/" data-tone="blue">
<strong>13 hands-on cases</strong>
<span>Put Codex into real scenarios such as PPT, Draw.io, Playwright, Obsidian, Lark/Feishu, CI, etc. </span>
  </a>
  <a class="home-metric-card" href="/configuration/" data-tone="amber">
<strong>4 configuration themes</strong>
<span>Covers CLI options, config.toml, MCP/Skills/Subagents and security management. </span>
  </a>
  <a class="home-metric-card" href="/practice/" data-tone="violet">
<strong>3 practice methods</strong>
<span>Task Design, non-development workflow, and team playbook help you accumulate experience. </span>
  </a>
</div>

</section>

<section class="home-section">

## Three recommended learning paths

There is no need to read the same path from different starting points. First choose the path closest to your current work, and then go back and complete the basic concepts.

<div class="home-path-grid">
  <a class="home-path-card" href="/guide/01-app-installation.html" data-step="01">
<strong>First time using Codex</strong>
<span>Install the computer client, understand the interface, and complete the first low-risk task. </span>
<em>Suitable for beginners, product, operations, and technical writers</em>
  </a>
  <a class="home-path-card" href="/guide/11-cli-installation.html" data-step="02">
<strong>Developer local efficiency improvement</strong>
<span>Read the project, modify the code, and run tests in the CLI to table a verifiable engineering closed loop. </span>
<em>Suitable for front-end, back-end, full stack, open source maintainers</em>
  </a>
  <a class="home-path-card" href="/practice/team-playbook.html" data-step="03">
<strong>Team Implementation and Standards</strong>
<span>Use AGENTS.md, pertask boundaries, case libraries and review templates to unify collaboration methods. </span>
<em>Suitable for technical leaders, team leads, internal tool leaders</em>
  </a>
</div>

</section>

<section class="home-section home-split">

<div>

## Choose the right entrance first

Codex capabilities will appear in App, CLI, Cloud, IDE, ChatGPT and integration ecosystem. Different entrances lead to different task rhythms: local small-step modifications are suitable for CLI, long tasks and parallel tasks are suitable for Cloud, editor-friendly explanations and local changes are suitable for IDE, and cross-tool processes are suitable for App and plugin systems.

<div class="home-link-row">
<a href="/platform/">View Entry Map</a>
<a href="/guide/03-app-overview.html">Understanding desktop apps</a>
<a href="/guide/13-ide-vscode.html">How to use VS Code</a>
</div>

</div>

<img class="home-visual" src="/images/codex-surfaces.svg" alt="Codex use Entry Map" loading="lazy" />

</section>

<section class="home-section">

## Make a task a closed loop

The key to using Codex well is not to write the prompt fancy, but to always know the target, scope, constraints, verification method and delivery format. The tutorial will repeatedly train this set of closed loops.

<div class="home-loop-grid">
  <a href="/practice/task-design.html" class="home-loop-item" data-tone="teal">
<strong>Description</strong>
<span>Write clearly the goal, scope, prohibitions, context, and expected output. </span>
  </a>
  <a href="/guide/06-task-execution.html" class="home-loop-item" data-tone="blue">
<strong>Execute</strong>
<span>Understand how Codex reads files, runs commands, makes small changes, and reports status. </span>
  </a>
  <a href="/guide/15-sandbox-approvals.html" class="home-loop-item" data-tone="rose">
<strong>Control</strong>
<span>Set sandbox, approval, network and credential boundaries to keep tasks under control. </span>
  </a>
  <a href="/recipes/github-actions-ci-fix.html" class="home-loop-item" data-tone="amber">
<strong>Verification</strong>
<span>Check that results are reliable with tests, builds, screenshots, logs, and PRs. </span>
  </a>
  <a href="/practice/team-playbook.html" class="home-loop-item" data-tone="violet">
<strong>Codification</strong>
<span>Organize successful tasks into templates, cases and team rules. </span>
  </a>
</div>

<img class="home-wide-visual" src="/images/codex-workflow-loop.svg" alt="Codex high-quality task loop" loading="lazy" />

</section>

<section class="home-section">

## Selected hands-on scenes

The case library is not a presentation checklist, but a sample of tasks that can be adapted. You can directly change it to your own projects, tools, accounts and verification methods.

<div class="home-case-grid">
  <a class="home-case-card" href="/recipes/ppt-skill-walkthrough.html">
<strong>Generate a presentation in one sentence</strong>
<span>Learn how to call skills to turn topics into structured slide decks. </span>
  </a>
  <a class="home-case-card" href="/recipes/playwright-mcp.html">
<strong>Let Codex control the browser</strong>
<span>Open pages with Playwright MCP, click, take screenshots, check status. </span>
  </a>
  <a class="home-case-card" href="/recipes/obsidian-codex.html">
<strong>Connect to the Obsidian Knowledge Base</strong>
<span>Generate content, graphics, and trackable quotes in local notes. </span>
  </a>
  <a class="home-case-card" href="/recipes/github-actions-ci-fix.html">
<strong>CI failure automatic repair</strong>
<span>Locate the problem from the failure log, let Codex fix it and generate a PR. </span>
  </a>
</div>

</section>

<section class="home-section home-split home-split-reverse">

<img class="home-visual" src="/images/codex-safety-layers.svg" alt="Codex Security Boundary Layers" loading="lazy" />

<div>

## Prepare for real projects

When Codex enters a team project, what really matters is boundaries, recurrence, and consensus. The tutorial will break each task into checkable inputs and outputs, helping you reduce the embarrassing moment of "it looks complete, but no one dares to merge it".

<ul class="home-check-list">
<li>Use <a href="/guide/14-agents-md.html">AGENTS.md</a> to write down project commands, coding style, and prohibitions. </li>
<li>Manage files, networks, credentials and high-risk commands with <a href="/guide/15-sandbox-approvals.html">Sandbox and Approvals</a>. </li>
<li>Use <a href="/practice/team-playbook.html">Team playbook</a> to unify task templates, review structures and case codification. </li>
<li>Use the <a href="/guide/17-troubleshooting.html">Troubleshooting Manual</a> to quickly locate login, pertask, dependency, and execution anomalies. </li>
</ul>

</div>

</section>

<section class="home-section home-final">

## It is recommended to start from here

If you only have twenty minutes, complete the first five sections of the Desktop App route first; if you are already writing code in the project, start directly with the CLI installation and first local task. After reading the first round, go back to the configuration, pertasks and case library to solidify the real process into a reusable working method.

<div class="home-action-row">
<a class="home-primary-link" href="/guide/00-overview.html">Enter the Learning Path</a>
<a href="/configuration/">View configuration topics</a>
<a href="/community/roadmap.html">Participate in community collaboration</a>
</div>

::: tip final check
The last verification date of basic information: 2026-05-27. When it comes to features, prices, availability, and security policies, please refer to OpenAI’s official information first.
:::

</section>

</div>
