---
description: "Codex hands-on case library, including PPT, Draw.io, Playwright, Obsidian, Lark/Feishu, Figma, Notion, CI and remote troubleshooting cases."
---

# Hands-on Case library

Here we collect Codex use cases that can be reproduced, rewritten, and migrated to real workflows. The current version has included 13 cases, covering Skill, MCP, browser automation, knowledge base, design draft, team collaboration, remote troubleshooting and CI automatic repair.

## Overview of current cases

|type|Cases included|What to study|
| --- | --- | --- |
|Content production and expression| PPT Skill、Draw.io MCP、HyperFrames |Convert one-sentence requirements into presentations, architecture diagrams and animated videos|
|Knowledge base and personal workbench| Obsidian、LLM Wiki、Notion MCP |Organize materials and generate content in notes, wikis, and knowledge spaces|
|Browser and front-end automation|Playwright MCP, Chrome browser plugin|Let Codex manipulate web pages, inspect pages, and perform browser tasks|
|Design and collaboration platform|Figma MCP, Lark/Feishu CLI|Read design drafts, process Lark/Feishu data, and connect team tools|
|Release and engineering operations|DKFile, cloud server remote bug repair, GitHub Actions CI repair|Complete closed loop from local/remote environment to automated remediation process|

## List of 13 cases

|serial number|Case|core scene|Recommended entrance|Verification key points|
| --- | --- | --- | --- | --- |
| 01 | [Codex × PPT Skill: Generate presentations in one sentence](./ppt-skill-walkthrough.md) |Use Skill to generate the first draft of PPT|Desktop Apps/Skills|Structure, visual consistency, export effects|
| 02 | [Codex × Draw.io MCP: AI automatically draws architecture diagrams](./drawio-mcp.md) |Generate architecture diagram through MCP| App / MCP |Graph hierarchy, node relationships, editability|
| 03 | [Codex × Playwright MCP: Let AI control the browser](./playwright-mcp.md) |Power your browser with Playwright| App / MCP |Click path, page status, screenshot results|
| 04 | [Codex × HyperFrames: Generate animated videos with code](./hyperframes-animation.md) |Generate visual animation videos| App / CLI |Animation scripts, rendering results, material paths|
| 05 | [Codex × Obsidian: Automatically generate accompanying images in the knowledge base](./obsidian-codex.md) |Call Codex in local note library| CLI / Obsidian |File path, image generation, note reference|
| 06 | [Codex × Lark/Feishu CLI: Process Lark/Feishu data in one sentence](./feishu-cli-codex.md) |Process Lark/Feishu multi-dimensional tables or collaborative data| CLI |Application credentials, field mapping, write back pertasks|
| 07 | [Codex × LLM Wiki: Building an AI knowledge base in Obsidian](./llm-wiki-codex.md) |Build an AI topic knowledge base| Obsidian / CLI |Directory structure, citation sources, update process|
| 08 | [Codex × Figma MCP: Understand the design draft](./figma-mcp-codex.md) |Read design drafts and assist in implementation| MCP / IDE |Design token, layout restoration, component boundaries|
| 09 | [Codex × Notion MCP: Opening up the knowledge space](./notion-mcp-codex.md) |Connect Notion for knowledge management| MCP |Database pertasks, page structure, synchronization scope|
| 10 | [Codex × DKFile: Publish web pages to the public network with one click](./dkfile-deploy-codex.md) |Quickly publish static web pages| CLI / API |Build products, upload results, access addresses|
| 11 | [Codex × Cloud Server: Remotely locate and fix bugs](./remote-bug-fix.md) |Troubleshoot Python errors in remote containers| CLI / Remote |Connection method, reproduction command, repair verification|
| 12 | [Codex × Chrome: Let AI directly control the browser](./chrome-browser-plugin.md) |Perform web tasks via browser plugins| Browser Plugin |Page visibility status, action confirmation, security boundary|
| 13 | [Codex × GitHub Actions: CI failure automatic repair](./github-actions-ci-fix.md) |Automatically trigger Codex repair and open PR after CI failure| GitHub Actions |Pertask configuration, failed subtask, test passing, PR content|

## How to choose which one to watch first

If you are just starting to look at hands-on cases, it is recommended to choose according to the goal:

- Want to see the effect quickly: first look at [PPT Skill](./ppt-skill-walkthrough.md), [Draw.io MCP](./drawio-mcp.md), and [DKFile](./dkfile-deploy-codex.md).
- Want to learn MCP: first read [Playwright MCP](./playwright-mcp.md), [Figma MCP](./figma-mcp-codex.md), [Notion MCP](./notion-mcp-codex.md).
- If you want to put Codex into the knowledge workflow: first look at [Obsidian](./obsidian-codex.md), [LLM Wiki](./llm-wiki-codex.md), and [Lark/Feishu CLI](./feishu-cli-codex.md).
- If you want to do engineering automation: look at [Cloud server remote bug repair](./remote-bug-fix.md) and [GitHub Actions CI automatic repair](./github-actions-ci-fix.md) first.
- To understand browser control capabilities: first look at [Playwright MCP](./playwright-mcp.md) and [Chrome browser plugin](./chrome-browser-plugin.md).

## Case maturity

|state|Case|illustrate|
| --- | --- | --- |
|A complete process has been tableed|PPT Skill, Playwright MCP, Obsidian, Lark/Feishu CLI, remote bug repair, GitHub Actions CI repair|There are clear installation and usage steps or complete operation links|
|Partial tool access tutorial|Draw.io MCP, Figma MCP, Notion MCP, DKFile, Chrome browser plugin|Focus on access methods, typical tasks and security boundaries|
|Partial scene display| HyperFrames、LLM Wiki |Focus on how Codex is combined with authoring/knowledge base scenarios|

## What is recommended for each case?

When continuing to improve the case in the future, it is recommended to complete the following information:

- Background: Why this case is being done.
- Environment: system, tool version, account pertasks, dependencies.
- Input: original prompt, configuration file, or data source.
- Process: What key actions did Codex take?
- Results: screenshots, PR, web page address, exported files or logs.
- Validation: How to determine if a case is successful.
- Risks: Pertasks, credentials, external services, writeback operations, costs, and failure scenarios.

## Reference sources

The third-party tools, repositories and article sources involved in the case are unified and organized in [References and Acknowledgments](./credits.md).
