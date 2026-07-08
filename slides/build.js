// Generates copilot-cli-lab.pptx - the story-driven, hands-on-lab-focused deck
// for "Team Mewpilot's Sprint" (GitHub Copilot CLI training).
const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const {
  FaTerminal,
  FaGlobe,
  FaFolderOpen,
  FaCoins,
  FaCalendarCheck,
  FaFilePowerpoint,
  FaWallet,
  FaFlagCheckered,
  FaCat,
} = require("react-icons/fa");

// ---- Palette: "Coral Energy" (playful, fits the cat/mewpilot story) ----
const CORAL = "F96167";
const GOLD = "F9E795";
const NAVY = "2F3C7E";
const CREAM = "FFF9F0";
const CHARCOAL = "2B2118";

function renderIconSvg(IconComponent, color, size = 256) {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color, size: String(size) })
  );
}

async function iconToBase64Png(IconComponent, color, size = 256) {
  const svg = renderIconSvg(IconComponent, color, size);
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + pngBuffer.toString("base64");
}

function addIconCircle(slide, iconData, { x, y, d = 0.9, circleColor = NAVY }) {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color: circleColor } });
  const pad = d * 0.22;
  slide.addImage({ data: iconData, x: x + pad / 2, y: y + pad / 2, w: d - pad, h: d - pad });
}

function addFooter(slide, label, dark, x = 0.6) {
  slide.addText(label, {
    x, y: 5.15, w: 8.8, h: 0.3,
    fontSize: 10, color: dark ? "9BA6D6" : "B5A78F",
    fontFace: "Calibri", align: "left", margin: 0,
  });
}

// Section-breaker tag: every slide gets a small pill in the top-right corner
// naming the lab it belongs to, so the deck doubles as a facilitator map.
function addSectionTag(slide, label, dark) {
  const w = 0.22 + label.length * 0.072;
  slide.addShape("roundRect", {
    x: 9.55 - w, y: 0.22, w, h: 0.34, rectRadius: 0.06,
    fill: { color: dark ? "FFFFFF" : NAVY, transparency: dark ? 88 : 0 },
    line: { type: "none" },
  });
  slide.addText(label, {
    x: 9.55 - w, y: 0.22, w, h: 0.34, fontSize: 9, bold: true,
    color: dark ? "FFFFFF" : "FFFFFF", fontFace: "Consolas", charSpacing: 1,
    align: "center", valign: "middle", margin: 0,
  });
}

async function build() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "Team Mewpilot";
  pres.title = "GitHub Copilot CLI Hands-On Lab";

  const icons = {};
  const iconSpecs = [
    ["terminal", FaTerminal],
    ["globe", FaGlobe],
    ["folder", FaFolderOpen],
    ["coins", FaCoins],
    ["calendar", FaCalendarCheck],
    ["pptx", FaFilePowerpoint],
    ["wallet", FaWallet],
    ["flag", FaFlagCheckered],
    ["cat", FaCat],
  ];
  for (const [key, Comp] of iconSpecs) {
    icons[key] = { onCream: await iconToBase64Png(Comp, "FFFFFF", 256) };
  }

  // ---------------------------------------------------------------
  // Slide 1 — Title (dark)
  // ---------------------------------------------------------------
  {
    const slide = pres.addSlide();
    slide.background = { color: NAVY };
    slide.addShape("rect", { x: 0, y: 0, w: 10, h: 5.625, fill: { color: NAVY } });
    slide.addShape("ellipse", { x: 7.6, y: -1.2, w: 4, h: 4, fill: { color: CORAL, transparency: 78 } });
    slide.addShape("ellipse", { x: -1.4, y: 3.6, w: 3.6, h: 3.6, fill: { color: GOLD, transparency: 82 } });

    addIconCircle(slide, icons.cat.onCream, { x: 0.7, y: 0.6, d: 1.0, circleColor: CORAL });
    slide.addText("TEAM MEWPILOT", {
      x: 1.9, y: 0.65, w: 6, h: 0.5, fontSize: 14, bold: true, color: GOLD,
      fontFace: "Consolas", charSpacing: 3, margin: 0,
    });
    slide.addText("GitHub Copilot CLI\nHands-On Lab", {
      x: 0.7, y: 1.9, w: 8.6, h: 1.9, fontSize: 40, bold: true, color: "FFFFFF",
      fontFace: "Georgia", lineSpacingMultiple: 1.05, margin: 0,
    });
    slide.addText(
      "A scrappy dev team. A demo deadline. One very capable new teammate.",
      { x: 0.7, y: 3.85, w: 8, h: 0.6, fontSize: 16, italic: true, color: CREAM, fontFace: "Calibri", margin: 0 }
    );
    slide.addText("Setup  ·  Skills  ·  Scenarios  ·  Automations  ·  Budget", {
      x: 0.7, y: 4.9, w: 8.6, h: 0.4, fontSize: 12, color: "C9CFE8", fontFace: "Calibri", margin: 0,
    });
    addSectionTag(slide, "INTRO", true);
  }

  // ---------------------------------------------------------------
  // Slide 2 — Meet Team Mewpilot (story hook, light)
  // ---------------------------------------------------------------
  {
    const slide = pres.addSlide();
    slide.background = { color: CREAM };
    slide.addShape("rect", { x: 0, y: 0, w: 3.4, h: 5.625, fill: { color: NAVY } });
    addIconCircle(slide, icons.cat.onCream, { x: 1.2, y: 0.7, d: 1.0, circleColor: CORAL });
    slide.addText("Monday, 9am.", {
      x: 0.5, y: 2.0, w: 2.4, h: 1.6, fontSize: 20, bold: true, color: "FFFFFF",
      fontFace: "Georgia", margin: 0,
    });

    slide.addText("Meet Team Mewpilot", {
      x: 3.9, y: 0.55, w: 5.6, h: 0.7, fontSize: 30, bold: true, color: CHARCOAL, fontFace: "Georgia", margin: 0,
    });
    slide.addText(
      [
        { text: "A half-finished task tracker.", options: { bullet: true, breakLine: true, paraSpaceAfter: 10 } },
        { text: "A demo on Friday.", options: { bullet: true, breakLine: true, paraSpaceAfter: 10 } },
        { text: "No idea GitHub Copilot CLI is about to become their most valuable teammate.", options: { bullet: true } },
      ],
      { x: 3.9, y: 1.5, w: 5.5, h: 2.0, fontSize: 16, color: "4A4038", fontFace: "Calibri" }
    );
    slide.addText(
      '"Let\'s go find out." — Team Mewpilot',
      { x: 3.9, y: 3.85, w: 5.5, h: 0.5, fontSize: 14, italic: true, color: NAVY, fontFace: "Georgia", margin: 0 }
    );
    addFooter(slide, "copilot-cli-lab · the story", false, 3.9);
    addSectionTag(slide, "INTRO", false);
  }

  // ---------------------------------------------------------------
  // Slide 3 — How this lab works
  // ---------------------------------------------------------------
  {
    const slide = pres.addSlide();
    slide.background = { color: CREAM };
    slide.addText("How This Lab Works", {
      x: 0.5, y: 0.45, w: 9, h: 0.7, fontSize: 30, bold: true, color: CHARCOAL, fontFace: "Georgia", margin: 0,
    });
    const cards = [
      ["folder", "One repo", "copilot-cli-lab/ - a shared codebase (sample-app/) the whole story runs on."],
      ["cat", "One story", "Every lab is a chapter in Team Mewpilot's one-day sprint, told through the same characters."],
      ["coins", "Hands-on first", "Every lab runs real Copilot CLI commands against real code - not slides about theory."],
    ];
    cards.forEach((c, i) => {
      const x = 0.5 + i * 3.1;
      slide.addShape("rect", { x, y: 1.5, w: 2.85, h: 2.75, fill: { color: "FFFFFF" }, line: { color: "EFE3D3", width: 1 },
        shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 } });
      slide.addShape("rect", { x, y: 1.5, w: 2.85, h: 0.12, fill: { color: NAVY } });
      addIconCircle(slide, icons[c[0]].onCream, { x: x + 0.2, y: 1.85, d: 0.6, circleColor: CORAL });
      slide.addText(c[1], { x: x + 1.0, y: 1.85, w: 1.7, h: 0.6, fontSize: 17, bold: true, color: NAVY, fontFace: "Georgia", valign: "middle", margin: 0 });
      slide.addText(c[2], { x: x + 0.2, y: 2.65, w: 2.45, h: 1.45, fontSize: 13, color: "4A4038", fontFace: "Calibri", margin: 0 });
    });
    addFooter(slide, "copilot-cli-lab · how it works", false);
    addSectionTag(slide, "INTRO", false);
  }

  // ---------------------------------------------------------------
  // Slide 4 — Agenda (one-day workshop, lab-by-lab)
  // ---------------------------------------------------------------
  {
    const slide = pres.addSlide();
    slide.background = { color: CREAM };
    slide.addText("Today's Agenda", {
      x: 0.5, y: 0.4, w: 9, h: 0.6, fontSize: 30, bold: true, color: CHARCOAL, fontFace: "Georgia", margin: 0,
    });
    slide.addText("One day, seven labs, one shared codebase", {
      x: 0.5, y: 0.98, w: 9, h: 0.35, fontSize: 13, italic: true, color: "6B6055", fontFace: "Calibri", margin: 0,
    });
    const agenda = [
      ["LAB 00", "Setup", "Install, auth, first prompts, confirm Auto model", "10-15 min"],
      ["LAB 01", "Global", "Global instructions & skills, cache tokens, switch model", "20-25 min"],
      ["LAB 02", "Local", "Explore & extend project-local skills", "15-20 min"],
      ["LAB 03", "Cost-Saving", "3-terminal research/plan/fleet, ship a feature, fix a bug", "60-75 min"],
      ["LAB 04", "Automate", "Minute-level /every + GitHub Copilot App template", "20-25 min"],
      ["LAB 05", "Show Off", "Build your own deck with the pptx skill", "20-30 min"],
      ["BONUS", "Budget", "Billing, layered budgets, pricing & optimization levers", "15-20 min"],
    ];
    const rowH = 0.5;
    const top = 1.55;
    agenda.forEach((row, i) => {
      const y = top + i * rowH;
      if (i % 2 === 0) {
        slide.addShape("rect", { x: 0.5, y, w: 9, h: rowH, fill: { color: "FFFFFF" }, line: { type: "none" } });
      }
      slide.addText(row[0], { x: 0.65, y, w: 1.15, h: rowH, fontSize: 11, bold: true, color: CORAL, fontFace: "Consolas", valign: "middle", margin: 0 });
      slide.addText(row[1], { x: 1.85, y, w: 2.1, h: rowH, fontSize: 13, bold: true, color: NAVY, fontFace: "Georgia", valign: "middle", margin: 0 });
      slide.addText(row[2], { x: 4.0, y, w: 4.35, h: rowH, fontSize: 11, color: "4A4038", fontFace: "Calibri", valign: "middle", margin: 0 });
      slide.addText(row[3], { x: 8.4, y, w: 1.05, h: rowH, fontSize: 11, italic: true, color: "6B6055", fontFace: "Calibri", align: "right", valign: "middle", margin: 0 });
    });
    slide.addText("Total: ~2.5-3 hrs solo · ~3.5-4 hrs facilitated", {
      x: 0.5, y: top + agenda.length * rowH + 0.15, w: 9, h: 0.35, fontSize: 12, bold: true, color: NAVY, fontFace: "Calibri", margin: 0,
    });
    addSectionTag(slide, "AGENDA", false);
  }

  // ---------------------------------------------------------------
  // Helper for lab slides (dark, icon-forward, minimal words)
  // ---------------------------------------------------------------
  async function addDaySlide({ dayLabel, title, beat, tryIt, iconKey, notes }) {
    const slide = pres.addSlide();
    slide.background = { color: NAVY };
    slide.addShape("ellipse", { x: 8.6, y: 4.3, w: 2.6, h: 2.6, fill: { color: CORAL, transparency: 84 } });

    addIconCircle(slide, icons[iconKey].onCream, { x: 0.6, y: 0.55, d: 0.95, circleColor: CORAL });
    slide.addText(dayLabel, {
      x: 1.75, y: 0.62, w: 4, h: 0.4, fontSize: 13, bold: true, color: GOLD, fontFace: "Consolas", charSpacing: 2, margin: 0,
    });
    slide.addText(title, {
      x: 0.6, y: 1.35, w: 8.8, h: 0.9, fontSize: 26, bold: true, color: "FFFFFF", fontFace: "Georgia", margin: 0,
    });
    slide.addShape("rect", { x: 0.6, y: 2.35, w: 8.8, h: 1.15, fill: { color: "FFFFFF", transparency: 92 } });
    slide.addText(beat, {
      x: 0.9, y: 2.45, w: 8.2, h: 0.95, fontSize: 15, italic: true, color: CREAM, fontFace: "Calibri", valign: "middle", margin: 0,
    });
    slide.addText([
      { text: "Try it: ", options: { bold: true, color: GOLD } },
      { text: tryIt, options: { color: "FFFFFF" } },
    ], { x: 0.6, y: 3.75, w: 8.8, h: 1.0, fontSize: 14, fontFace: "Calibri", margin: 0 });
    addFooter(slide, "copilot-cli-lab · " + dayLabel.toLowerCase(), true);
    addSectionTag(slide, dayLabel.split(" · ")[0], true);
    if (notes) {
      slide.addNotes(notes);
    }
  }

  await addDaySlide({
    dayLabel: "LAB 00 · SETUP",
    title: "Team Mewpilot Gets Tooled Up",
    beat: "Install, authenticate, and run GitHub Copilot CLI for the first time - against the real sample-app.",
    tryIt: "Ask Copilot what it would fix first in this codebase.",
    iconKey: "terminal",
  });

  await addDaySlide({
    dayLabel: "LAB 01 · GLOBAL",
    title: "Setting the House Rules",
    beat: "Everyone was getting different answers. Time to set two lean house rules that apply on every project, on any laptop - and nothing more.",
    tryIt: "Install the template, then confirm every response ends with \"by mewpilot\".",
    iconKey: "globe",
    notes: "Speaker note: keep global instructions VERY lean to optimize token usage - they are resent on every single turn, in every project, forever, so every extra line is a permanent, repeating cost. Two rules (commit convention + sign-off) is deliberately the whole file. Anything project-specific belongs in a local skill (lab-02) instead.",
  });

  await addDaySlide({
    dayLabel: "LAB 02 · LOCAL",
    title: "Project-Local Skills",
    beat: "This codebase has its own quirks global rules don't cover - and real local skills are already set up. This lab is about exploring them.",
    tryIt: "Ask Copilot to review the code and watch the pre-built duplicate-task-checker skill kick in.",
    iconKey: "folder",
  });

  await addDaySlide({
    dayLabel: "LAB 03 · COST-SAVING",
    title: "Working Smart, Not Expensive",
    beat: "A visible new feature, one lingering bug, six cost-saving habits, plus three tool-choice habits: grep/glob over bash, file refs not pastes, subagents for exploration.",
    tryIt: "Ship color-coded priority badges, fix the duplicate task-id bug, then watch /context and /usage prove the savings.",
    iconKey: "coins",
  });

  await addDaySlide({
    dayLabel: "LAB 04 · AUTOMATE",
    title: "Automating the Busywork",
    beat: "Start dumb-simple: one /every prompt that reports token usage every few minutes. Then level up with a ready-made GitHub Copilot App template.",
    tryIt: "Schedule the one-line token-usage check, then browse the Copilot App's automation templates for the real morning report.",
    iconKey: "calendar",
  });

  await addDaySlide({
    dayLabel: "LAB 05 · SHOW OFF",
    title: "Build the Deck With /pptx",
    beat: "The same pptx skill that built this deck can build yours - straight from this repo's READMEs and commit history.",
    tryIt: "Ask Copilot to build a 6-8 slide demo-day deck from this repo, then present it in under 2 minutes.",
    iconKey: "pptx",
  });

  await addDaySlide({
    dayLabel: "LAB 06 · BUDGET",
    title: "Keeping the Sprint Sustainable",
    beat: "Before rolling this out org-wide, the team checks seats, usage, and budget alerts in GitHub billing.",
    tryIt: "Find your Copilot usage in Settings → Billing, and guess your monthly spend before you look.",
    iconKey: "wallet",
  });

  // ---------------------------------------------------------------
  // Final slide — Wrap-up (dark, celebratory)
  // ---------------------------------------------------------------
  {
    const slide = pres.addSlide();
    slide.background = { color: NAVY };
    slide.addShape("ellipse", { x: -1.9, y: -1.9, w: 3.6, h: 3.6, fill: { color: CORAL, transparency: 82 } });
    addIconCircle(slide, icons.flag.onCream, { x: 4.05, y: 0.55, d: 1.1, circleColor: CORAL });
    slide.addText("Ship It. Team Mewpilot Wraps Up.", {
      x: 0.6, y: 1.9, w: 8.8, h: 0.8, fontSize: 28, bold: true, color: "FFFFFF", fontFace: "Georgia", align: "center", margin: 0,
    });
    slide.addText(
      [
        { text: "Setup → Global & Local Skills → Real Scenarios → Custom Skills → Daily Automations → Budget", options: { breakLine: true } },
        { text: "- all with GitHub Copilot CLI as the newest member of the team." },
      ],
      { x: 1.0, y: 2.8, w: 8.0, h: 1.1, fontSize: 14, italic: true, color: CREAM, fontFace: "Calibri", align: "center", margin: 0 }
    );
    slide.addText("Now go run it yourself: copilot-cli-lab/README.md", {
      x: 1.2, y: 4.05, w: 7.6, h: 0.5, fontSize: 13, color: GOLD, fontFace: "Consolas", align: "center", margin: 0,
    });
  }

  await pres.writeFile({ fileName: "copilot-cli-lab.pptx" });
  console.log("Wrote copilot-cli-lab.pptx");
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
