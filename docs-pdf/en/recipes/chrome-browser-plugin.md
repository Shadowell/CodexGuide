---
description: "Codex Chrome browser extension example shows how to let AI control browser pages, perform web tasks and maintain security boundaries."
---

# Codex × Chrome: Let AI directly control the browser

This case describes how to use Codex to complete web page operation tasks with the help of browser-related capabilities, such as opening pages, searching content, clicking on results, and returning links.

::: tip final check
The last date of verification of official information: 2026-05-27. This article refers to [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) and [Codex use cases](https://developers.openai.com/codex/explore/). The specific plugin name, installation process and entry location may change depending on the client version or workspace configuration.
:::

## Applicable scenarios

- Let Codex help you search for information on the web.
- Let Codex open a site and complete the simple click process.
- Connect browser operations to task links without leaving the current workspace.

## Understand one thing before using it

The "controlling the browser" mentioned here is, more precisely, letting Codex use the capabilities of the browser or browser plugin to complete web page interaction. In different workspaces, the entrance may be called `Chrome` or `Browser`, or it may appear as a browser plugin or built-in browsing capability.

Therefore, a more secure way of understanding is:

1. Confirm whether the relevant browser capabilities have been enabled in the current workspace.
2. If this is your first time using it, follow the interface guidance to complete the browser-side installation or authorization.
3. After the installation is complete, tell Codex exactly what you want it to do in the task.

## a common process

If your client provides Chrome-related plugins or browser capabilities, the common process is usually similar to this:

1. Find the corresponding browser capability in the Codex Desktop App and enable it.
2. Follow the guidance to complete the plugin installation or connection configuration on the browser side.
3. Go back to the task and clearly describe the target page, search terms, and expected output.

![image-20260511153510645](../images/image-20260511153510645.png)

After the first click, you will jump to the browser plugin installation page. Click to add the extension.

![image-20260511153524987](../images/image-20260511153524987.png)

## Task example

You can give an explicit task like this:

```text
Please use your browser to open Bilibili, search for "RAG Knowledge Base Tutorial", find a video suitable for beginners, and return the title and link to me.
```

After a similar task is completed, Codex may:

1. Open the target site.
2. Search for the keywords you provided.
3. Go to the relevant results page.
4. Returns the link it considers the most appropriate result to you.

![image-20260511153549207](../images/image-20260511153549207.png)

## What should you focus on checking?

- The website it opens is not the one you specified.
- Have the search terms been incorrectly rewritten?
- After clicking on the result, the page returned is not the page you really need, not the advertising page or irrelevant page.
- If it involves login status, personal data or paid background, will it exceed the scope of your authorization?

## Risk reminder

- Browser-related capabilities usually have higher pertasks than plain text tasks, and it is recommended to start with a read-only, low-risk page when using it for the first time.
- Do not directly operate Codex with high-risk pages such as payment, deletion, posting, table subtask, etc., unless you are prepared to review the entire process.
- If the tutorial relies on plugin installation, the interface name or entry location may change in the future, so the document should give priority to describing "capabilities and processes" instead of hard-coding the location of a certain button.
