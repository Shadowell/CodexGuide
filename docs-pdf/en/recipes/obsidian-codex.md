---
description: "Codex and Obsidian examples of how to generate content, manage images, organize notes, and retain citations in a local knowledge base."
---

# Codex × Obsidian: Automatically generate accompanying images in the knowledge base

**Obsidian** is a local-first knowledge management tool. As the Agent's capabilities increase, the way Obsidian is used changes. This article introduces how to use Codex in Obsidian to complete the daily content creation process.

Content creators used to have a big headache: **adding pictures to articles**. But since the Codex command line can directly call ChatGPT’s latest graph model `gpt-image-2`, we can let Codex automatically generate images based on the article content in Obsidian.

**Prerequisite:**

1. Understand the basic operation of Obsidian
2. Become familiar with using the Codex command line (see Part 2 of this tutorial)

---

## 1. Install the Terminal plugin in Obsidian

First install the **Terminal** plugin, as shown in the figure:

![image-20260513093503735](../images/image-20260513093503735.png)

After the installation is complete, you need to configure it, otherwise it will not work properly:

![image-20260513093639686](../images/image-20260513093639686.png)

Select the desired terminal input method in the configuration:

![image-20260513093754143](../images/image-20260513093754143.png)

---

## 2. Open the terminal

Press `Cmd+P` to bring up the command panel, enter "terminal" and select **Integrated**:

![image-20260513094334343](../images/image-20260513094334343.png)

A command line interface will appear at the bottom of the page:

![image-20260513094410810](../images/image-20260513094410810.png)

---

## 3. Log in to Codex

If you have logged into Codex before, enter `codex` directly in this terminal to use it. If you have not logged in, refer to the second part of this tutorial (CLI using Codex) to complete the configuration:

![image-20260513094739758](../images/image-20260513094739758.png)

---

## 4. Get started

After successful login, Codex can completely read all the contents in your local Obsidian repository and perform the following operations:

1. **Write Document** — Create or modify Markdown files directly in the repository
2. **Generate pictures** — Specify the article content and let Codex automatically generate pictures based on the text and insert them into the corresponding positions.

![image-20260513105050036](../images/image-20260513105050036.png)

Successful drawing:

![image-20260513105125640](../images/image-20260513105125640.png)

The generated effect is as shown in the figure:

![image-20260513105643214](../images/image-20260513105643214.png)

**Listen for automatic upload of images** — If you use object storage (such as PicGo), you can tell Codex to listen for image storage events and automatically upload them after identification.

If he hasn't uploaded it, you can tell him and ask him to go to your local location to find the pictures you have. He will search all image bed categories. If you want him to find it quickly, just tell him directly what image bed you are using and what upload tool you are using, so that he will locate it quickly.

![image-20260513105442677](../images/image-20260513105442677.png)

Then it will automatically complete this task by itself, and finally return us a link to the corresponding image bed.

![image-20260513105541376](../images/image-20260513105541376.png)

Everyone can try it out and turn Obsidian into a truly AI-driven creative workbench.

---

## Reference sources

The operation ideas of this article refer to the following WeChat public account articles. Thank you to the original author for sharing:

- 📝 **Content creation using Codex in Obsidian**
Source: WeChat public account
Link:[https://mp.weixin.qq.com/s/f5HWooI1a8pnSObJ9rSqMw](https://mp.weixin.qq.com/s/f5HWooI1a8pnSObJ9rSqMw)

> The screenshots in this article are all obtained by the author's actual operations, and the text content has been rearranged and re-created based on reference. If there is any infringement, please contact us to delete it.
