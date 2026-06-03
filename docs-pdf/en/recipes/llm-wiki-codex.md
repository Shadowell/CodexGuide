---
description: "The case of Codex and LLM Wiki explains how to build an AI knowledge base, catalog, citation and update process in Obsidian."
---

# Codex × LLM Wiki: Building an AI knowledge base in Obsidian

Most people stay in **RAG mode** (Retrieval-Augmented Generation) when using large models to process documents. This is the most mainstream knowledge management paradigm in the current AI industry: upload files, the system retrieves relevant fragments when asking questions, and let the large model generate answers based on these fragments. NotebookLM, ChatGPT file upload, and almost all enterprise-level knowledge bases follow this path.

Some time ago, Andrej Karpathy, a well-known researcher in the field of AI, proposed a new idea. He believes that the main problem with RAG is that every time a question is asked, the model must rediscover knowledge from scratch. If you ask a question that requires the synthesis of five documents, RAG will retrieve, splice, and generate it; if you ask the same question again tomorrow, it will repeat the entire process without any accumulation or memory. The knowledge that could have been associated was wasted in repeated queries again and again.

The solution given by Karpathy is **LLM Wiki**. The system he describes has three layers:

1. **Original data layer** — Responsible for collecting papers, articles, podcasts, web pages and other materials. Large models only read this layer and do not change it.
2. **Wiki Layer** — Large models have complete ownership of this layer. It is responsible for writing Markdown files, tables of contents, abstracts, entity concepts, comparative analysis and reviews, creating pages, updating pages, and maintaining cross-references. We just have to be responsible for reading.
3. **Schema Layer** — A configuration file, such as `AGENTS.md` for Codex or `.cursorrules` for Cursor. Tell the big model about the wiki's structural specifications, naming conventions, and workflows, and work together to iterate on this document as you use it.

![image-20260513105652501](../images/image-20260513105652501.png)

This article introduces how to refer to Karpathy's concept and use Codex to build an LLM Wiki knowledge base in Obsidian.

---

## 1. Refer to Karpathy’s GitHub repository

First find the original design document of LLM Wiki shared by Karpathy to understand his design concept:

[https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

---

## 2. Create a Wiki repository in Obsidian

Create a new Obsidian repository locally, and then send the following prompt words to Codex:

```
You are now my LLM Wiki Agent.
Put the following idea document into practice as it is, and use it as my complete second brain to execute it step by step.
Create a system with complete rules. The implementation process strictly refers to the contents of the following GitHub repository:
https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
```

Codex will help you create a local knowledge base structure that contables to the LLM Wiki concept based on the content:

![image-20260513110337415](../images/image-20260513110337415.png)

After creation, the following files and folders will be generated in the repository:

- `concept/`
- `raw/`
- `logs/`
- `wiki/`
- `AGENTS.md`
- `log`

These are consistent with the LLM Wiki architecture described by Karpathy.

---

## 3. How to use

### Install Obsidian Web Clipper

First install the browser plugin **Obsidian Web Clipper**. Its function is to automatically extract and download articles, videos, and web page content in the browser to a local repository for easy processing and splitting by Codex.

![image-20260513110803492](../images/image-20260513110803492.png)

### Fetch articles to raw folder

Find an article you want to include in the knowledge base, and use the plugin to save it to the `raw/` folder in the repository (in Karpathy's concept, `raw/` is dedicated to storing original materials). Just click "Add to Obsidian".

![image-20260513110925529](../images/image-20260513110925529.png)

### Let Codex complete the warehousing

Open Obsidian and let Codex read this article:

![image-20260513111125300](../images/image-20260513111125300.png)

Codex will automatically read the content, split it according to the concept of LLM Wiki, and add abstract, entity, associated reference and other pages. After it is completed, it will tell you what specific new content has been added, and this article will be officially included in the database.

![image-20260513111503863](../images/image-20260513111503863.png)

### Continuous iteration

If you want to study more content on the same topic later, just repeat the following process:

1. Use **Obsidian Web Clipper** to save new articles to `raw/`
2. Have Codex split it into multiple wiki pages and update cross-references to related files
3. As content accumulates, the connections between knowledge will become clearer and clearer, tableing a truly structured second brain.

---

## Reference sources

The operation ideas of this article refer to the following video content of the creators of Station B. Thanks to the original author for sharing:

- 📺 **Codex Practice LLM Wiki Knowledge Base Construction Tutorial**
Source: Bilibili
Link:[https://www.bilibili.com/video/BV1y19hBhEMT/](https://www.bilibili.com/video/BV1y19hBhEMT/)

> The screenshots in this article are all obtained by the author's actual operations, and the text content has been rearranged and re-created based on reference. If there is any infringement, please contact us to delete it.
