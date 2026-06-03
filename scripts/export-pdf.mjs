import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { spawn } from "node:child_process";
import puppeteer from "puppeteer";
import { getHtml } from "md-to-pdf/dist/lib/get-html.js";

const require = createRequire(import.meta.url);
const MARKDOWN_CSS = require.resolve("md-to-pdf/markdown.css");
const HIGHLIGHT_CSS = path.join(
  path.dirname(require.resolve("highlight.js/package.json")),
  "styles",
  "github.css",
);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DOCS = path.join(ROOT, "docs");
const EN_DOCS = path.join(ROOT, "docs-pdf", "en");
const OUT_DIR = path.join(ROOT, "dist-pdf");
const CSS = path.join(__dirname, "pdf.css");
const SITE_ORIGIN = "https://codexguide.ai";

const LANGUAGES = {
  zh: {
    sourceRoot: DOCS,
    suffix: "",
    bookCoverTitle: "CodexGuide",
    bookCoverSubtitle: "面向全球初学者、创作者、开发者与团队的 Codex 实践指南",
    sectionKicker: "CodexGuide · codexguide.ai",
    sections: {
      guide: "入门指南",
      platform: "入口地图",
      configuration: "配置与扩展",
      practice: "实践方法",
      recipes: "实战案例",
      reference: "资料索引",
      community: "社区共建",
    },
  },
  en: {
    sourceRoot: EN_DOCS,
    suffix: "-en",
    bookCoverTitle: "CodexGuide",
    bookCoverSubtitle:
      "A practical Codex guide for beginners, creators, developers, and teams",
    sectionKicker: "CodexGuide · English PDF",
    splitBook: true,
    sections: {
      guide: "Getting Started Guide",
      platform: "Entry Map",
      configuration: "Configuration and Extensions",
      practice: "Practice Methods",
      recipes: "Hands-on Recipes",
      reference: "Reference Index",
      community: "Community Roadmap",
    },
  },
};

const SECTIONS = {
  guide: {
    title: "入门指南",
    files: [
      "guide/00-overview.md",
      "guide/01-app-installation.md",
      "guide/02-subscribe-plus.md",
      "guide/03-app-overview.md",
      "guide/04-mobile-control-desktop.md",
      "guide/05-app-first-task.md",
      "guide/06-task-execution.md",
      "guide/07-permissions.md",
      "guide/08-skills-plugins.md",
      "guide/09-automation.md",
      "guide/10-desktop-pet.md",
      "guide/11-cli-installation.md",
      "guide/12-cli-first-run.md",
      "guide/13-ide-vscode.md",
      "guide/14-agents-md.md",
      "guide/15-sandbox-approvals.md",
      "guide/16-cloud-ide-app.md",
      "guide/17-troubleshooting.md",
    ],
  },
  platform: {
    title: "入口地图",
    files: [
      "platform/index.md",
      "platform/cli.md",
      "platform/app.md",
      "platform/cloud.md",
      "platform/ide.md",
      "platform/chatgpt.md",
    ],
  },
  configuration: {
    title: "配置与扩展",
    files: [
      "configuration/index.md",
      "configuration/cli-options.md",
      "configuration/config-file.md",
      "configuration/mcp-skills-subagents.md",
      "configuration/security-admin.md",
    ],
  },
  practice: {
    title: "实践方法",
    files: [
      "practice/index.md",
      "practice/task-design.md",
      "practice/non-dev-workflows.md",
      "practice/team-playbook.md",
    ],
  },
  recipes: {
    title: "实战案例",
    files: [
      "recipes/index.md",
      "recipes/ppt-skill-walkthrough.md",
      "recipes/drawio-mcp.md",
      "recipes/playwright-mcp.md",
      "recipes/hyperframes-animation.md",
      "recipes/obsidian-codex.md",
      "recipes/feishu-cli-codex.md",
      "recipes/llm-wiki-codex.md",
      "recipes/figma-mcp-codex.md",
      "recipes/notion-mcp-codex.md",
      "recipes/dkfile-deploy-codex.md",
      "recipes/remote-bug-fix.md",
      "recipes/chrome-browser-plugin.md",
      "recipes/github-actions-ci-fix.md",
      "recipes/credits.md",
    ],
  },
  reference: {
    title: "资料索引",
    files: ["reference/index.md"],
  },
  community: {
    title: "社区共建",
    files: ["community/roadmap.md"],
  },
};

const PDF_OPTIONS = {
  format: "A4",
  printBackground: true,
  margin: {
    top: "20mm",
    bottom: "20mm",
    left: "18mm",
    right: "18mm",
  },
};

const CHROME_PATH =
  process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : undefined;

const LAUNCH_OPTIONS = {
  headless: true,
  ...(CHROME_PATH ? { executablePath: CHROME_PATH } : {}),
  args: ["--font-render-hinting=none", "--disable-dev-shm-usage"],
};

function parseArgs(argv) {
  const args = {
    mode: "book",
    section: null,
    file: null,
    lang: "zh",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--section" && argv[i + 1]) {
      args.mode = "section";
      args.section = argv[++i];
    } else if (arg === "--file" && argv[i + 1]) {
      args.mode = "file";
      args.file = argv[++i];
    } else if (arg === "--all-sections") {
      args.mode = "all-sections";
    } else if (arg === "--lang" && argv[i + 1]) {
      args.lang = argv[++i];
    }
  }

  return args;
}

function stripFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\r?\n?/, "");
}

function convertAdmonitions(content) {
  return content.replace(
    /:::\s*(\w+)(?:\s+([^\n]+))?\n([\s\S]*?):::/g,
    (_match, type, title, body) => {
      const label = title?.trim() || type;
      const quoted = body
        .trim()
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n");
      return `> **${label}**\n>\n${quoted}\n`;
    },
  );
}

const MIME_BY_EXT = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

function resolveImagePath(src, mdDir, fallbackMdDir) {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }

  if (src.startsWith("/")) {
    const publicPath = path.join(DOCS, ".vuepress/public", src);
    const docsPath = path.join(DOCS, src.replace(/^\//, ""));
    return [publicPath, docsPath];
  }

  return [
    path.resolve(mdDir, src),
    ...(fallbackMdDir ? [path.resolve(fallbackMdDir, src)] : []),
  ];
}

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function resolveExistingImagePath(src, mdDir, fallbackMdDir) {
  const candidates = resolveImagePath(src, mdDir, fallbackMdDir);
  if (typeof candidates === "string") {
    return candidates;
  }

  for (const candidate of candidates) {
    if (await pathExists(candidate)) {
      return candidate;
    }
  }

  return candidates[0];
}

async function fileToDataUrl(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME_BY_EXT[ext];
  if (!mime) {
    throw new Error(`不支持的图片格式：${ext}`);
  }

  const buffer = await fs.readFile(filePath);
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

async function embedImages(content, mdDir, fallbackMdDir) {
  const imagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const matches = [...content.matchAll(imagePattern)];
  let result = content;

  for (const [full, alt, src] of matches) {
    if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
      continue;
    }

    const resolved = await resolveExistingImagePath(src, mdDir, fallbackMdDir);
    if (!(await pathExists(resolved))) {
      const placeholder = `\n\n> 图片缺失：\`${path.basename(resolved)}\`\n\n`;
      result = result.replace(full, placeholder);
      continue;
    }

    try {
      const dataUrl = await fileToDataUrl(resolved);
      result = result.replace(full, `![${alt}](${dataUrl})`);
    } catch (error) {
      const placeholder = `\n\n> 图片无法嵌入：\`${path.basename(resolved)}\`（${error.message}）\n\n`;
      result = result.replace(full, placeholder);
    }
  }

  return result;
}

function demoteHeading(content) {
  return content.replace(/^# /m, "## ");
}

function markdownFileToHtmlUrl(url) {
  url.pathname = url.pathname.replace(/\.md$/i, ".html");
  return url.href;
}

function resolveSiteUrl(href, relPath) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("#")) {
    return href;
  }

  const currentPath = `/${relPath.replace(/\.md$/i, ".html")}`;
  const url = new URL(href, `${SITE_ORIGIN}${currentPath}`);
  return markdownFileToHtmlUrl(url);
}

function rewriteMarkdownLinks(content, relPath) {
  return content.replace(
    /(?<!!)\[([^\]]+)\]\(([^)\s]+)([^)]*)\)/g,
    (full, label, href, suffix) => {
      const nextHref = resolveSiteUrl(href, relPath);
      return `[${label}](${nextHref}${suffix})`;
    },
  );
}

async function preprocessFile(relPath, language) {
  const absPath = path.join(language.sourceRoot, relPath);
  const mdDir = path.dirname(absPath);
  const fallbackMdDir =
    language.sourceRoot === DOCS ? null : path.dirname(path.join(DOCS, relPath));
  let content = await fs.readFile(absPath, "utf8");

  content = stripFrontmatter(content);
  content = convertAdmonitions(content);
  content = await embedImages(content, mdDir, fallbackMdDir);
  content = rewriteMarkdownLinks(content, relPath);

  return content.trim();
}

async function buildMarkdown(
  files,
  language,
  { withSectionCover = false, sectionTitle = "", startWithPageBreak = false } = {},
) {
  const parts = [];

  if (withSectionCover && sectionTitle) {
    parts.push(
      `<div class="section-cover">\n\n# ${sectionTitle}\n\n<p>${language.sectionKicker}</p>\n\n</div>\n`,
    );
  }

  for (const [index, relPath] of files.entries()) {
    const content = await preprocessFile(relPath, language);
    if (startWithPageBreak || withSectionCover || index > 0) {
      parts.push(`<div class="page-break"></div>`);
    }
    parts.push(`${demoteHeading(content)}\n`);
  }

  return parts.join("\n");
}

async function writePdf(markdown, destPath) {
  await fs.mkdir(path.dirname(destPath), { recursive: true });

  const html = getHtml(markdown, {
    document_title: "CodexGuide",
    body_class: [],
    marked_options: { gfm: true },
    marked_extensions: [],
  });

  const [markdownCss, highlightCss, customCss] = await Promise.all([
    fs.readFile(MARKDOWN_CSS, "utf8"),
    fs.readFile(HIGHLIGHT_CSS, "utf8"),
    fs.readFile(CSS, "utf8"),
  ]);

  const styledHtml = html.replace(
    "</head>",
    `<style>${markdownCss}\n${highlightCss}\n${customCss}</style></head>`,
  );

  const browser = await puppeteer.launch(LAUNCH_OPTIONS);
  try {
    const page = await browser.newPage();
    page.setDefaultTimeout(180000);
    await page.setContent(styledHtml, {
      waitUntil: "domcontentloaded",
      timeout: 180000,
    });
    await page.evaluate(async () => {
      const images = Array.from(document.images);
      await Promise.all(
        images.map((image) =>
          image.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                image.addEventListener("load", resolve, { once: true });
                image.addEventListener("error", resolve, { once: true });
              }),
        ),
      );
      await document.fonts?.ready;
    });
    await page.emulateMediaType("screen");
    const pdf = await page.pdf(PDF_OPTIONS);
    await fs.writeFile(destPath, pdf);
  } finally {
    await browser.close();
  }
}

function listSectionNames() {
  return Object.keys(SECTIONS).join(", ");
}

function mergePdfs(sources, destPath) {
  const code = `
import sys

try:
    from pypdf import PdfWriter
    writer = PdfWriter()
    for source in sys.argv[2:]:
        writer.append(source)
    with open(sys.argv[1], "wb") as output:
        writer.write(output)
except ImportError:
    from PyPDF2 import PdfMerger
    merger = PdfMerger()
    for source in sys.argv[2:]:
        merger.append(source)
    merger.write(sys.argv[1])
    merger.close()
`;

  return new Promise((resolve, reject) => {
    const child = spawn("python3", ["-c", code, destPath, ...sources], {
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`PDF 合并失败：${stderr.trim() || `python3 exited ${code}`}`));
      }
    });
  });
}

async function buildSectionMarkdown(sectionName, section, language) {
  return buildMarkdown(section.files, language, {
    withSectionCover: true,
    sectionTitle: language.sections[sectionName] || section.title,
  });
}

async function exportSplitBook(language) {
  const tempDir = path.join(OUT_DIR, `.tmp-${Date.now()}${language.suffix || "-zh"}`);
  const outputs = [];
  const dest = path.join(OUT_DIR, `CodexGuide${language.suffix}.pdf`);

  try {
    await fs.mkdir(tempDir, { recursive: true });

    const coverPath = path.join(tempDir, "00-cover.pdf");
    await writePdf(
      `<div class="section-cover">\n\n# ${language.bookCoverTitle}\n\n<p>${language.bookCoverSubtitle}</p>\n\n</div>\n`,
      coverPath,
    );
    outputs.push(coverPath);

    let index = 1;
    for (const [sectionName, section] of Object.entries(SECTIONS)) {
      const sectionPath = path.join(
        tempDir,
        `${String(index).padStart(2, "0")}-${sectionName}.pdf`,
      );
      const markdown = await buildSectionMarkdown(sectionName, section, language);
      await writePdf(markdown, sectionPath);
      outputs.push(sectionPath);
      index += 1;
    }

    await mergePdfs(outputs, dest);
    return dest;
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

async function exportBook(language) {
  if (language.splitBook) {
    return exportSplitBook(language);
  }

  const parts = [
    `<div class="section-cover">\n\n# ${language.bookCoverTitle}\n\n<p>${language.bookCoverSubtitle}</p>\n\n</div>\n`,
  ];

  for (const [sectionName, section] of Object.entries(SECTIONS)) {
    parts.push(
      `<div class="section-cover">\n\n# ${language.sections[sectionName] || section.title}\n\n<p>${language.sectionKicker}</p>\n\n</div>\n`,
    );
    parts.push(await buildMarkdown(section.files, language, { startWithPageBreak: true }));
  }

  const dest = path.join(OUT_DIR, `CodexGuide${language.suffix}.pdf`);
  await writePdf(parts.join("\n"), dest);
  return dest;
}

async function exportSection(sectionName, language) {
  const section = SECTIONS[sectionName];
  if (!section) {
    throw new Error(`未知 section：${sectionName}。可选：${listSectionNames()}`);
  }

  const markdown = await buildSectionMarkdown(sectionName, section, language);
  const dest = path.join(OUT_DIR, `CodexGuide-${sectionName}${language.suffix}.pdf`);
  await writePdf(markdown, dest);
  return dest;
}

async function exportAllSections(language) {
  const outputs = [];
  for (const sectionName of Object.keys(SECTIONS)) {
    outputs.push(await exportSection(sectionName, language));
  }
  return outputs;
}

async function exportFile(relPath, language) {
  const normalized = relPath.replace(/^\/+/, "");
  const absPath = path.join(language.sourceRoot, normalized);
  await fs.access(absPath);

  const markdown = await buildMarkdown([normalized], language, { withSectionCover: false });
  const baseName = normalized.replace(/\.md$/i, "").replace(/\//g, "-");
  const dest = path.join(OUT_DIR, `${baseName}${language.suffix}.pdf`);
  await writePdf(markdown, dest);
  return dest;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const language = LANGUAGES[args.lang];
  if (!language) {
    throw new Error(`未知语言：${args.lang}。可选：${Object.keys(LANGUAGES).join(", ")}`);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  if (args.mode === "section") {
    const dest = await exportSection(args.section, language);
    console.log(`已生成：${dest}`);
    return;
  }

  if (args.mode === "file") {
    const dest = await exportFile(args.file, language);
    console.log(`已生成：${dest}`);
    return;
  }

  if (args.mode === "all-sections") {
    const outputs = await exportAllSections(language);
    for (const dest of outputs) {
      console.log(`已生成：${dest}`);
    }
    return;
  }

  const dest = await exportBook(language);
  console.log(`已生成：${dest}`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
