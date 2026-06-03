from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path("/Users/jie.feng/wlb/CodexGuide/sales-pack")


def font(size):
    for path in [
        "/System/Library/Fonts/STHeiti Medium.ttc",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    ]:
        try:
            return ImageFont.truetype(path, size=size, index=0)
        except Exception:
            pass
    return ImageFont.load_default()


def overlay_panel(draw, xy, radius=28):
    x1, y1, x2, y2 = xy
    draw.rounded_rectangle((x1, y1, x2, y2), radius=radius, fill=(255, 255, 255, 218))


def draw_text_block(img, title_lines, subtitle, chips, footer, palette, out_path, title_size=None):
    img = img.convert("RGBA")
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    w, h = img.size

    panel_w = int(w * 0.52)
    panel_h = int(h * 0.66)
    x = int(w * 0.07)
    y = int(h * 0.13)
    overlay_panel(d, (x, y, x + panel_w, y + panel_h))

    title_font = font(title_size or (72 if w <= 1300 else 76))
    subtitle_font = font(34 if w <= 1300 else 36)
    chip_font = font(27 if w <= 1300 else 30)
    footer_font = font(22 if w <= 1300 else 24)

    tx = x + 54
    ty = y + 58
    for line in title_lines:
        d.text((tx, ty), line, font=title_font, fill=palette["ink"])
        ty += 88

    ty += 18
    d.text((tx, ty), subtitle, font=subtitle_font, fill=palette["muted"])
    ty += 82

    chip_x = tx
    for chip in chips:
        box = d.textbbox((0, 0), chip, font=chip_font)
        chip_w = box[2] - box[0] + 44
        d.rounded_rectangle((chip_x, ty, chip_x + chip_w, ty + 58), radius=18, fill=palette["chip"])
        d.text((chip_x + 22, ty + 13), chip, font=chip_font, fill=palette["ink"])
        chip_x += chip_w + 16

    d.text((tx, y + panel_h - 64), footer, font=footer_font, fill=palette["footer"])

    shadow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle((x, y, x + panel_w, y + panel_h), radius=28, fill=(20, 35, 45, 42))
    shadow = shadow.filter(ImageFilter.GaussianBlur(22))

    composed = Image.alpha_composite(img, shadow)
    composed = Image.alpha_composite(composed, layer)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    composed.convert("RGB").save(out_path, quality=96)


def main():
    xianyu = Image.open(ROOT / "99_source/image2_backgrounds/xianyu-image2-bg.png").resize((1242, 1242))
    draw_text_block(
        xianyu,
        ["AI编程助手", "中文入门实操指南"],
        "从安装、配置到第一次项目实战",
        ["PDF资料包", "新手友好", "可选协助"],
        "学习资料｜流程清晰｜可选远程协助",
        {
            "ink": (20, 31, 42, 255),
            "muted": (82, 96, 110, 255),
            "chip": (226, 246, 242, 255),
            "footer": (135, 99, 29, 255),
        },
        ROOT / "01_xianyu/02_images/main-cover-original.png",
    )

    xianyu_v2 = Image.open(ROOT / "99_source/image2_backgrounds/xianyu-image2-bg.png").resize((1242, 1242))
    draw_text_block(
        xianyu_v2,
        ["不会用AI写代码？", "先跑通这套流程"],
        "安装、配置、第一次项目实战，一份资料讲清楚",
        ["新手友好", "少走弯路", "可选协助"],
        "PDF资料包｜流程清晰｜适合从零开始",
        {
            "ink": (20, 31, 42, 255),
            "muted": (82, 96, 110, 255),
            "chip": (226, 246, 242, 255),
            "footer": (135, 99, 29, 255),
        },
        ROOT / "01_xianyu/02_images/main-cover.png",
        title_size=62,
    )

    kofi = Image.open(ROOT / "99_source/image2_backgrounds/kofi-image2-bg.png").resize((1400, 1400))
    draw_text_block(
        kofi,
        ["CodexGuide", "Practical AI Coding", "Workflow Guide"],
        "From setup to real project tasks",
        ["PDF Guide", "Workflow Playbook", "Practical Recipes"],
        "Digital download · Educational guide only",
        {
            "ink": (17, 32, 54, 255),
            "muted": (77, 92, 114, 255),
            "chip": (232, 241, 255, 255),
            "footer": (82, 103, 133, 255),
        },
        ROOT / "02_kofi/02_images/main-cover-original.png",
    )

    kofi_v2 = Image.open(ROOT / "99_source/image2_backgrounds/kofi-image2-bg.png").resize((1400, 1400))
    draw_text_block(
        kofi_v2,
        ["Stuck after setup?", "Build a real", "AI coding workflow"],
        "A practical PDF guide for real project tasks",
        ["CLI", "Desktop", "Automation", "Troubleshooting"],
        "Digital download · Practical workflow guide",
        {
            "ink": (17, 32, 54, 255),
            "muted": (77, 92, 114, 255),
            "chip": (232, 241, 255, 255),
            "footer": (82, 103, 133, 255),
        },
        ROOT / "02_kofi/02_images/main-cover.png",
        title_size=68,
    )


if __name__ == "__main__":
    main()
