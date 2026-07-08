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
  FaMemory,
  FaBalanceScale,
  FaLayerGroup,
  FaChartPie,
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
    ["memory", FaMemory],
    ["balance", FaBalanceScale],
    ["layers", FaLayerGroup],
    ["chart", FaChartPie],
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
    if (notes) {
      slide.addNotes(notes);
    }
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
    beat: "Everyone was getting different answers. Time to set two lean house rules that apply on every project, on any laptop - and nothing more.",
    tryIt: "Install the template, then confirm every response ends with \"by mewpilot\".",
    iconKey: "globe",
    notes: "Speaker note: keep global instructions VERY lean to optimize token usage - they are resent on every single turn, in every project, forever, so every extra line is a permanent, repeating cost. Two rules (commit convention + sign-off) is deliberately the whole file. Anything project-specific belongs in a local skill (Day 3) instead.",
  });

  // ---------------------------------------------------------------
  // Concept slide — Context Window & Tokens (cache tokens)
  // ---------------------------------------------------------------
  {
    const slide = pres.addSlide();
    slide.background = { color: CREAM };
    addIconCircle(slide, icons.memory.onCream, { x: 0.5, y: 0.5, d: 0.8, circleColor: NAVY });
    slide.addText("Context Window & Tokens", {
      x: 1.5, y: 0.5, w: 8, h: 0.7, fontSize: 26, bold: true, color: CHARCOAL, fontFace: "Georgia", valign: "middle", margin: 0,
    });
    slide.addText("Why the 2nd turn is often cheaper than the 1st", {
      x: 0.5, y: 1.3, w: 9, h: 0.4, fontSize: 14, italic: true, color: "6B6055", fontFace: "Calibri", margin: 0,
    });

    const rowY = [1.95, 3.15];
    const rows = [
      { label: "1ST LOOP", parts: ["system prompt & tools", "prompt", "file", "response"], note: "all billed as input/output tokens" },
      { label: "2ND LOOP", parts: ["cached: system prompt, prompt, file, response", "new prompt", "new file", "response"], note: "cache input tokens - not guaranteed, usually cheaper" },
    ];
    rows.forEach((row, i) => {
      const y = rowY[i];
      slide.addText(row.label, { x: 0.5, y, w: 1.4, h: 0.5, fontSize: 12, bold: true, color: NAVY, fontFace: "Consolas", valign: "middle", margin: 0 });
      let x = 2.0;
      row.parts.forEach((p, j) => {
        const w = j === 0 && i === 1 ? 2.6 : 1.5;
        const fill = i === 1 && j === 0 ? GOLD : (j % 2 === 0 ? CORAL : NAVY);
        slide.addShape("rect", { x, y, w, h: 0.55, fill: { color: fill, transparency: 10 }, line: { color: "FFFFFF", width: 1 } });
        slide.addText(p, { x, y, w, h: 0.55, fontSize: 9, color: fill === GOLD ? CHARCOAL : "FFFFFF", fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
        x += w + 0.08;
      });
      slide.addText(row.note, { x: 0.5, y: y + 0.62, w: 8.8, h: 0.35, fontSize: 11, italic: true, color: "6B6055", fontFace: "Calibri", margin: 0 });
    });

    slide.addText(
      "Small, stable global instructions & local skills (Day 2/3) are prime candidates for caching - they rarely change between turns.",
      { x: 0.5, y: 4.55, w: 9, h: 0.6, fontSize: 13, color: NAVY, fontFace: "Calibri", margin: 0 }
    );
    addFooter(slide, "copilot-cli-lab · concept", false);
  }

  // ---------------------------------------------------------------
  // Concept slide — The two biggest levers for optimizing quality & tokens
  // ---------------------------------------------------------------
  {
    const slide = pres.addSlide();
    slide.background = { color: CREAM };
    slide.addText("The Two Biggest Levers", {
      x: 0.5, y: 0.45, w: 9, h: 0.6, fontSize: 28, bold: true, color: CHARCOAL, fontFace: "Georgia", margin: 0,
    });
    slide.addText("for optimizing quality & tokens", {
      x: 0.5, y: 1.05, w: 9, h: 0.4, fontSize: 14, italic: true, color: "6B6055", fontFace: "Calibri", margin: 0,
    });

    // Left card: model choice
    slide.addShape("rect", { x: 0.5, y: 1.65, w: 4.3, h: 3.55, fill: { color: "FFFFFF" }, line: { color: "EFE3D3", width: 1 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 } });
    slide.addShape("rect", { x: 0.5, y: 1.65, w: 4.3, h: 0.12, fill: { color: CORAL } });
    addIconCircle(slide, icons.balance.onCream, { x: 0.75, y: 1.95, d: 0.6, circleColor: NAVY });
    slide.addText("Model choice & auto mode", { x: 1.55, y: 1.95, w: 3.1, h: 0.6, fontSize: 15, bold: true, color: NAVY, fontFace: "Georgia", valign: "middle", margin: 0 });
    slide.addText(
      [
        { text: "Reasoning models (Opus, GPT-5.5) - sync tasks: planning, debugging", options: { bullet: true, breakLine: true, paraSpaceAfter: 8 } },
        { text: "Mid-tier (Sonnet, GPT-5.4) - everyday async implementation", options: { bullet: true, breakLine: true, paraSpaceAfter: 8 } },
        { text: "Light-tier (Haiku, GPT-mini) - small, repetitive refactors", options: { bullet: true, breakLine: true, paraSpaceAfter: 8 } },
        { text: "Auto Mode - a fine, lazy default when unsure", options: { bullet: true } },
      ],
      { x: 0.75, y: 2.65, w: 3.85, h: 2.4, fontSize: 12.5, color: "4A4038", fontFace: "Calibri" }
    );

    // Right card: relevant context
    slide.addShape("rect", { x: 5.15, y: 1.65, w: 4.35, h: 3.55, fill: { color: "FFFFFF" }, line: { color: "EFE3D3", width: 1 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 } });
    slide.addShape("rect", { x: 5.15, y: 1.65, w: 4.35, h: 0.12, fill: { color: GOLD } });
    addIconCircle(slide, icons.folder.onCream, { x: 5.4, y: 1.95, d: 0.6, circleColor: NAVY });
    slide.addText("Provide only relevant context", { x: 6.2, y: 1.95, w: 3.15, h: 0.6, fontSize: 15, bold: true, color: NAVY, fontFace: "Georgia", valign: "middle", margin: 0 });
    slide.addText(
      [
        { text: "As much as required, as little as necessary", options: { bullet: true, breakLine: true, paraSpaceAfter: 8 } },
        { text: "Reference files by path - don't paste 50K-char blobs", options: { bullet: true, breakLine: true, paraSpaceAfter: 8 } },
        { text: "/clear or start a new session often", options: { bullet: true, breakLine: true, paraSpaceAfter: 8 } },
        { text: "Delegate heavy exploration to subagents", options: { bullet: true } },
      ],
      { x: 5.4, y: 2.65, w: 3.9, h: 2.4, fontSize: 12.5, color: "4A4038", fontFace: "Calibri" }
    );
    addFooter(slide, "copilot-cli-lab · concept", false);
  }

  await addDaySlide({
    dayLabel: "DAY 3 · LOCAL",
    title: "Project-Local Skills",
    beat: "This codebase has its own quirks global rules don't cover - and real local skills are already set up. Day 3 is about exploring them.",
    tryIt: "Ask Copilot to review the code and watch the pre-built duplicate-task-checker skill kick in.",
    iconKey: "folder",
  });

  await addDaySlide({
    dayLabel: "DAY 4 · COST-SAVING",
    title: "Working Smart, Not Expensive",
    beat: "A visible new feature, one lingering bug, six cost-saving habits, plus three tool-choice habits: grep/glob over bash, file refs not pastes, subagents for exploration.",
    tryIt: "Ship color-coded priority badges, fix the duplicate task-id bug, then watch /context and /usage prove the savings.",
    iconKey: "coins",
  });

  // ---------------------------------------------------------------
  // Concept slide — Divide and conquer: Research -> Plan -> Implement
  // ---------------------------------------------------------------
  {
    const slide = pres.addSlide();
    slide.background = { color: CREAM };
    slide.addText("Divide and Conquer Your Work", {
      x: 0.5, y: 0.45, w: 9, h: 0.6, fontSize: 28, bold: true, color: CHARCOAL, fontFace: "Georgia", margin: 0,
    });
    slide.addText("Research → Plan → Implement, in three separate terminals", {
      x: 0.5, y: 1.05, w: 9, h: 0.4, fontSize: 14, italic: true, color: "6B6055", fontFace: "Calibri", margin: 0,
    });

    const stages = [
      ["Terminal 1", "/research", "Investigate & narrow down the approach", CORAL],
      ["Terminal 2", "/plan", "Turn findings into a precise spec", NAVY],
      ["Terminal 3", "/fleet", "Implement in parallel workstreams", GOLD],
    ];
    stages.forEach((s, i) => {
      const x = 0.5 + i * 3.05;
      slide.addShape("rect", { x, y: 1.75, w: 2.8, h: 2.5, fill: { color: "FFFFFF" }, line: { color: "EFE3D3", width: 1 },
        shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 } });
      slide.addShape("rect", { x, y: 1.75, w: 2.8, h: 0.12, fill: { color: s[3] } });
      slide.addText(s[0], { x: x + 0.2, y: 2.0, w: 2.4, h: 0.3, fontSize: 11, bold: true, color: "6B6055", fontFace: "Consolas", margin: 0 });
      slide.addText(s[1], { x: x + 0.2, y: 2.3, w: 2.4, h: 0.5, fontSize: 20, bold: true, color: NAVY, fontFace: "Consolas", margin: 0 });
      slide.addText(s[2], { x: x + 0.2, y: 2.85, w: 2.4, h: 1.2, fontSize: 12.5, color: "4A4038", fontFace: "Calibri", margin: 0 });
      if (i < 2) {
        slide.addText("→", { x: x + 2.8, y: 2.6, w: 0.25, h: 0.5, fontSize: 22, bold: true, color: CORAL, align: "center", margin: 0 });
      }
    });
    slide.addText(
      "Each stage hands the next a distilled summary - not its full context. Three lean sessions beat one session paying for everything, stacked.",
      { x: 0.5, y: 4.5, w: 9, h: 0.6, fontSize: 13, color: NAVY, fontFace: "Calibri", margin: 0 }
    );
    addFooter(slide, "copilot-cli-lab · concept", false);
  }

  await addDaySlide({
    dayLabel: "DAY 5 · AUTOMATE",
    title: "Automating the Busywork",
    beat: "Start dumb-simple: one /every prompt that reports token usage daily. Then level up with a ready-made GitHub Copilot App template.",
    tryIt: "Schedule the one-line token-usage check, then browse the Copilot App's automation templates for the real morning report.",
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
  // Concept slide — Pricing & Budgeting summary
  // ---------------------------------------------------------------
  {
    const slide = pres.addSlide();
    slide.background = { color: CREAM };
    slide.addText("Pricing & Budgeting, In Brief", {
      x: 0.5, y: 0.45, w: 9, h: 0.6, fontSize: 28, bold: true, color: CHARCOAL, fontFace: "Georgia", margin: 0,
    });
    const cards = [
      ["chart", "Two billing layers", "Flat per-seat cost, plus usage-based premium requests/tokens driven by model choice & context size."],
      ["layers", "Layered budgets", "Org-wide caps, with team/project budgets underneath, so one workflow can't blow the whole spend."],
      ["balance", "Same levers, same bill", "Model tier + context size (Day 2-4 habits) are exactly what drives the usage-based portion of the bill."],
    ];
    cards.forEach((c, i) => {
      const x = 0.5 + i * 3.1;
      slide.addShape("rect", { x, y: 1.5, w: 2.85, h: 2.9, fill: { color: "FFFFFF" }, line: { color: "EFE3D3", width: 1 },
        shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 } });
      slide.addShape("rect", { x, y: 1.5, w: 2.85, h: 0.12, fill: { color: NAVY } });
      addIconCircle(slide, icons[c[0]].onCream, { x: x + 0.2, y: 1.85, d: 0.6, circleColor: CORAL });
      slide.addText(c[1], { x: x + 1.0, y: 1.85, w: 1.7, h: 0.6, fontSize: 15, bold: true, color: NAVY, fontFace: "Georgia", valign: "middle", margin: 0 });
      slide.addText(c[2], { x: x + 0.2, y: 2.65, w: 2.45, h: 1.6, fontSize: 12.5, color: "4A4038", fontFace: "Calibri", margin: 0 });
    });
    addFooter(slide, "copilot-cli-lab · concept", false);
  }

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
