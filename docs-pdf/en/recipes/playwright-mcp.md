---
description: "Codex and Playwright MCP case shows how to let AI operate the browser, click on the page, take screenshots to check and verify the status of the web page."
---

# Codex × Playwright MCP: Let AI control the browser like a human

This chapter introduces **Playwright MCP**. This is an MCP server based on Playwright. It encapsulates browser operations such as opening a browser, visiting web pages, clicking buttons, filling in input boxes, reading page content, taking screenshots, and verifying results, into tools that can be called by AI.

Programming Agents like Codex can not only write and modify code, but also open web pages and check whether the page is running properly like a human.

This chapter uses the **command line** method to learn the installation and use of MCP.

---

## 1. Installation

Run the following command to complete the installation:

```bash
codex mcp add playwright npx @playwright/mcp@latest
```

![image-20260512213655811](../images/image-20260512213655811.png)

**Verify whether the installation is successful:** Enter Codex and use the `/mcp` command to list the currently installed MCP service list.

![image-20260512213808094](../images/image-20260512213808094.png)

![image-20260512203344081](../images/image-20260512203344081.png)

---

## 2. How to use

After confirming the successful installation through the `/mcp` command, we use Playwright MCP to complete a test task:

1. Ask it to open a browser and search for "what is MCP"
2. Find some related tutorials
3. Save search results to a local Markdown file

Prompt words:

```
Please open your browser, search "What is MCP" on Baidu, select two high-quality content to read, and organize them into a markdown file and save it in the current directory.
```

![image-20260512214110692](../images/image-20260512214110692.png)

During the execution process, we need to release some pertasks and let it call related tools. for example:

- Fill in the search box
- fill in text
- Open web page

> These operations require **manual release** if they are not authorized.

![image-20260512203431233](../images/image-20260512203431233.png)

During execution, you will indeed find that it opens the browser, searches for related content, and opens two articles, which are all visible.

![image-20260512214220568](../images/image-20260512214220568.png)

Finally, it will output a summary of the results to us, and then write it into a local Markdown file.

![image-20260512214325242](../images/image-20260512214325242.png)

Codex summarizes the contents of the two searched articles and gives us relevant explanations.

![image-20260512214406959](../images/image-20260512214406959.png)

---

## Reference sources

The operation ideas and demonstration scenarios of this article refer to the following video content of the creators of Station B. Thanks to the original author for sharing:

- 📺 **Nanny-level Claude Code quick learning, must learn! Simple! [With complete documentation]**
Source: Bilibili
Link:[https://b23.tv/xDKx6jX](https://b23.tv/xDKx6jX)

> The screenshots in this article are all obtained by the author's actual operations, and the text content has been rearranged and re-created based on reference. If there is any infringement, please contact us to delete it.
