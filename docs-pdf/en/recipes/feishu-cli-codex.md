---
description: "The case of Codex and Lark/Feishu CLI illustrates how to process Lark/Feishu data, multi-dimensional tables and team collaboration information in one sentence, which is suitable for automatically organizing team data."
---

# Codex × Lark/Feishu CLI: Process Lark/Feishu data in one sentence

At the end of March 2026, Lark/Feishu officially open sourced **Lark/Feishu CLI**.

If your team or individual often uses Lark/Feishu, then after accessing Lark/Feishu CLI, you will have a new way of using it - **process all the information and data in Lark/Feishu in one sentence in Codex**.

This article introduces how to combine Codex with Lark/Feishu CLI to directly operate the data and content stored in Lark/Feishu through natural language.

---

## 1. Install Lark/Feishu CLI

Send the GitHub README link of Lark/Feishu CLI to Codex and let it complete all the installation for you:

```
Install everything for me: https://github.com/larksuite/cli/blob/main/README.zh.md
```

![image-20260513095627052](../images/image-20260513095627052.png)

---

## 2. Provide Lark/Feishu application certificate

To use Lark/Feishu CLI, you need to provide **Lark/Feishu open platform application credentials** (App ID and App Secret).

Don’t worry about how to get it – just ask Codex, it will tell you the address of the Lark/Feishu open platform and guide you to create an application in the browser.

![image-20260513095651533](../images/image-20260513095651533.png)

Open the link and create the application:

![image-20260513124054417](../images/image-20260513124054417.png)

After creating an application according to its instructions, send it the App ID and App Secret, and Codex will automatically complete the Lark/Feishu application configuration and pertask application.

![image-20260513095837118](../images/image-20260513095837118.png)

> The process will involve **manual authorization** operations. Codex will provide a jump link, just click to grant the corresponding pertasks in the browser, so that it can read and operate your Lark/Feishu data.

![image-20260513100002206](../images/image-20260513100002206.png)

---

## 3. Get started

After the configuration is completed, Codex will have very rich Lark/Feishu operation capabilities. Let it enumerate what is accessible:

![image-20260513100034664](../images/image-20260513100034664.png)

Codex will also thoughtfully tell you how to use it for the first time, and even prepare prompt words for you.

![image-20260513100141955](../images/image-20260513100141955.png)

**Practical Demonstration:** I asked it to read a folder about "Knowledge Management" in Lark/Feishu Cloud Disk (a total of 14 documents). After the reading is completed, it directly calls GPT's latest graph model to generate a Chinese information graph.

From the processing process, we can see that it can indeed read the cloud disk content completely, and the access is normal.

When executing the graph generation step, it asked me to provide OpenAI’s API Key:

![image-20260513100230490](../images/image-20260513100230490.png)

This is actually unreasonable. **After subscribing to Codex and ChatGPT Plus, you can directly call the GPT graph model in Codex without providing a separate API Key. ** At this point it would be better to just refute it.

After rebuttal, it will correctly call **GPT-Image-2** to generate the infographic without any additional API Key.

![image-20260513100349487](../images/image-20260513100349487.png)

---

## Reference sources

The operating ideas of this article refer to the following two articles on the "**Digital Life Kask**" public account. Thank you to the original author for sharing:

- 📝 **Lark/Feishu CLI open source release introduction** (main reference for this article)
Source: WeChat public account "Digital Life Kask"
Link:[https://mp.weixin.qq.com/s/fvjxT_GgbEgxgsPCUlo-RQ](https://mp.weixin.qq.com/s/fvjxT_GgbEgxgsPCUlo-RQ)

- 📝 **How ​​teams use Lark/Feishu CLI to complete collaboration tasks** (Extended reading)
Source: WeChat public account "Digital Life Kask"
Link:[https://mp.weixin.qq.com/s/6vqkEvFYNEtUu3rTQAllzw](https://mp.weixin.qq.com/s/6vqkEvFYNEtUu3rTQAllzw)

> The screenshots in this article are all obtained by the author's actual operations, and the text content has been rearranged and re-created based on reference. If there is any infringement, please contact us to delete it.
