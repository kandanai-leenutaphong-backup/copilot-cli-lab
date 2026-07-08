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
      ["cat", "One story", "Every lab is a \"day\" in Team Mewpilot's sprint, told through the same characters."],
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
  }

  // ---------------------------------------------------------------
  // Helper for "Day N" lab slides (dark, icon-forward, minimal words)
  // ---------------------------------------------------------------
  async function addDaySlide({ dayLabel, title, beat, tryIt, iconKey }) {
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
  }

  await addDaySlide({
    dayLabel: "DAY 1 · SETUP",
    title: "Team Mewpilot Gets Tooled Up",
    beat: "Install, authenticate, and run GitHub Copilot CLI for the first time - against the real sample-app.",
    tryIt: "Ask Copilot what it would fix first in this codebase.",
    iconKey: "terminal",
  });

  await addDaySlide({
    dayLabel: "DAY 2 · GLOBAL",
    title: "Setting the House Rules",
    beat: "Everyone was getting different answers. Time to set house rules that apply on every project, on any laptop.",
    tryIt: "Add a global instruction, then a global skill - and prove it works outside this repo too.",
    iconKey: "globe",
  });

  await addDaySlide({
    dayLabel: "DAY 3 · LOCAL",
    title: "Project-Local Skills",
    beat: "This codebase has its own quirks global rules don't cover - and real local skills are already set up. Day 3 is about exploring them.",
    tryIt: "Ask Copilot to review the code and watch the pre-built task-id-guard skill kick in.",
    iconKey: "folder",
  });

  await addDaySlide({
    dayLabel: "DAY 4 · COST-SAVING",
    title: "Working Smart, Not Expensive",
    beat: "Nine slash commands, one real bug, five cost-saving habits - plan, research, and parallelize before you spend a single token.",
    tryIt: "Fix the duplicate task-id bug, then count how many sessions it would've taken without these habits.",
    iconKey: "coins",
  });

  await addDaySlide({
    dayLabel: "DAY 5 · AUTOMATE",
    title: "Automating the Busywork",
    beat: "A /chronicles cost-tip template plus a 9am scheduled issue triage (/every) - the team's morning report writes itself.",
    tryIt: "Schedule the 9am triage prompt, then watch a fresh chronicle appear before your first coffee.",
    iconKey: "calendar",
  });

  await addDaySlide({
    dayLabel: "DAY 6 · SHOW OFF",
    title: "Build the Deck With /pptx",
    beat: "The same pptx skill that built this deck can build yours - straight from this repo's READMEs and commit history.",
    tryIt: "Ask Copilot to build a 6-8 slide demo-day deck from this repo, then present it in under 2 minutes.",
    iconKey: "pptx",
  });

  await addDaySlide({
    dayLabel: "BONUS · BUDGET",
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
    slide.addText("Demo Day. Team Mewpilot Ships It.", {
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
