import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const PDFDocument = require("pdfkit");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outputPath = path.join(
  root,
  "output",
  "pdf",
  "pawel-drojecki-netguru-react-native-resume.pdf"
);

const fonts = {
  regular: "C:/Windows/Fonts/arial.ttf",
  bold: "C:/Windows/Fonts/arialbd.ttf",
};

const colors = {
  text: "#1f2328",
  muted: "#57606a",
  rule: "#1f2328",
  link: "#1558d6",
};

const page = {
  margin: 36,
  width: 595.28,
  height: 841.89,
};

const maxY = page.height - page.margin;
const contentWidth = page.width - page.margin * 2;

const resume = {
  name: "Paweł Drojecki",
  headline: "React Native / React / TypeScript Developer",
  location: "Poznań, Poland / remote",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pawel-drojecki/",
    },
    {
      label: "Portfolio",
      href: "https://www.drojecki.pro/portfolio",
    },
  ],
  summary:
    "React and React Native developer with fullstack product experience, strongest in TypeScript, mobile/web product flows, e-commerce frontends and backend collaboration. I bring hands-on React Native/Expo work from CleanStrategy, enterprise React/TypeScript delivery from The Royal Mint, and broader API/authorization ownership from Swarmcheck.",
  skills: [
    [
      "Best match",
      "React Native / Expo / TypeScript / React.js / Product development / Remote collaboration",
    ],
    [
      "Frontend",
      "Next.js / JavaScript / HTML5 / Tailwind CSS / Bootstrap / Design-to-code",
    ],
    [
      "Backend and delivery",
      "Node.js / Nest.js / Express.js / MongoDB / REST APIs / Azure",
    ],
  ],
  experience: [
    {
      title: "Frontend Web Developer - NoA Ignite Poland",
      subtitle: "Enterprise e-commerce frontend work for The Royal Mint",
      period: "Jul 2024 - present",
      bullets: [
        "Developed and maintained React and TypeScript frontend features in a legacy enterprise e-commerce codebase.",
        "Debugged, optimized and modernized UI code while keeping existing commercial flows stable.",
        "Supported Google Analytics work and frontend improvements for product and purchase experiences.",
      ],
      tech: [
        "React",
        "TypeScript",
        "Bootstrap",
        "Azure",
        "Auth0",
        "Google Analytics",
        "E-commerce",
      ],
    },
    {
      title: "Fullstack Developer - Swarmcheck",
      subtitle: "Structured argumentation, fact-checking and data workflows",
      period: "Jun 2021 - Jul 2024",
      bullets: [
        "Implemented a custom RBAC authorization system and backend endpoints for controlled data workflows.",
        "Built React interfaces and D3.js graph visualizations for exploring relationships between arguments.",
        "Worked across frontend and backend responsibilities in a product with data, access and collaboration concerns.",
      ],
      tech: ["React", "Node.js", "Express.js", "D3.js", "Azure", "RBAC"],
    },
    {
      title: "Instructor - Will Code Academy",
      subtitle: "Programming education and mentoring",
      period: "Oct 2023 - Aug 2025",
      bullets: [
        "Led practical programming lessons and mentored beginner developers.",
        "Designed teaching methods that simplify difficult programming concepts.",
      ],
      tech: ["React", "JavaScript", "HTML5", "Mentoring"],
    },
  ],
  projects: [
    {
      title: "CleanStrategy",
      subtitle: "Mobile/web product for household task planning",
      period: "Jan 2024 - present",
      bullets: [
        "Designed and developed a React Native / Expo product with task flows, schedules and household responsibility logic.",
        "Built the supporting Nest.js and MongoDB backend so mobile and web clients can evolve in parallel.",
        "Owned product logic and key user paths, with a focus on fast iteration and practical everyday usage.",
      ],
      tech: ["React Native", "Expo", "TypeScript", "React", "Nest.js", "MongoDB"],
    },
    {
      title: "Moment Studio",
      subtitle: "Full e-commerce implementation",
      period: "Jan 2024",
      bullets: [
        "Built the frontend, Nest.js backend, MongoDB product model, Stripe payments and transactional email flow.",
        "Translated brand direction into responsive, product-focused commerce interfaces.",
      ],
      tech: ["React", "Nest.js", "MongoDB", "Stripe", "Resend", "Tailwind CSS"],
    },
    {
      title: "Jambo",
      subtitle: "E-commerce frontend from Figma designs",
      period: "Apr 2021 - Aug 2021",
      bullets: [
        "Translated Figma designs into responsive React/Next.js commerce views.",
        "Prepared project materials and requirements for visual implementation work.",
      ],
      tech: ["Next.js", "React", "JavaScript", "HTML5", "Tailwind CSS", "Figma"],
    },
  ],
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const doc = new PDFDocument({
  size: "A4",
  margins: {
    top: page.margin,
    right: page.margin,
    bottom: page.margin,
    left: page.margin,
  },
  info: {
    Title: "Pawel Drojecki - React Native Developer Resume",
    Author: "Pawel Drojecki",
    Subject: "Targeted resume for Netguru React Native Developer - Freelance",
  },
  bufferPages: true,
});

doc.registerFont("Regular", fonts.regular);
doc.registerFont("Bold", fonts.bold);
doc.pipe(fs.createWriteStream(outputPath));

function ensureSpace(height) {
  if (doc.y + height > maxY) {
    doc.addPage();
    doc.y = page.margin;
  }
}

function line(y = doc.y) {
  doc
    .moveTo(page.margin, y)
    .lineTo(page.width - page.margin, y)
    .lineWidth(1)
    .strokeColor(colors.rule)
    .stroke();
}

function text(value, options = {}) {
  const {
    x = page.margin,
    y = doc.y,
    width = contentWidth,
    size = 9.2,
    font = "Regular",
    color = colors.text,
    lineGap = 1.3,
    ...rest
  } = options;

  doc
    .font(font)
    .fontSize(size)
    .fillColor(color)
    .text(value, x, y, { width, lineGap, ...rest });
}

function linkedText(label, href, x, y, width, options = {}) {
  doc
    .font(options.font ?? "Regular")
    .fontSize(options.size ?? 8.8)
    .fillColor(colors.link)
    .text(label, x, y, {
      width,
      align: options.align ?? "left",
      underline: true,
      link: href,
      lineGap: 1.2,
    });
}

function section(titleValue) {
  ensureSpace(28);
  doc.moveDown(0.45);
  text(titleValue.toUpperCase(), {
    size: 12,
    font: "Bold",
    lineGap: 0,
  });
  line(doc.y + 2);
  doc.moveDown(0.35);
}

function skillRows(rows) {
  const labelWidth = 112;
  const valueWidth = contentWidth - labelWidth;

  for (const [label, value] of rows) {
    ensureSpace(17);
    const y = doc.y;
    text(label, {
      y,
      width: labelWidth,
      size: 8.8,
      font: "Bold",
      lineGap: 0.7,
    });
    text(value, {
      x: page.margin + labelWidth,
      y,
      width: valueWidth,
      size: 8.8,
      lineGap: 0.7,
    });
    doc.y = Math.max(doc.y, y + 16);
  }
}

function roleBlock(item) {
  ensureSpace(82);
  const y = doc.y;
  text(item.title, {
    y,
    width: 370,
    size: 10,
    font: "Bold",
    lineGap: 0.5,
  });
  text(item.period, {
    x: page.width - page.margin - 145,
    y,
    width: 145,
    size: 8.2,
    font: "Bold",
    color: colors.muted,
    align: "right",
    lineGap: 0,
  });
  text(item.subtitle, {
    y: doc.y + 1,
    width: 390,
    size: 8.3,
    color: colors.muted,
    lineGap: 0.5,
  });
  doc.moveDown(0.25);

  for (const bullet of item.bullets) {
    ensureSpace(16);
    text(`- ${bullet}`, {
      size: 8.25,
      lineGap: 0.6,
    });
    doc.moveDown(0.05);
  }

  ensureSpace(13);
  text(`Tech: ${item.tech.join(" / ")}`, {
    size: 7.8,
    color: colors.muted,
    lineGap: 0.2,
  });
  doc.moveDown(0.45);
}

function header() {
  const leftWidth = 340;
  const rightX = page.width - page.margin - 150;
  const rightWidth = 150;
  const topY = page.margin;

  text(resume.name, {
    y: topY,
    width: leftWidth,
    size: 25,
    font: "Bold",
    lineGap: 0,
  });
  text(resume.location, {
    x: rightX,
    y: topY + 2,
    width: rightWidth,
    size: 8.8,
    color: colors.muted,
    align: "right",
    lineGap: 0.5,
  });

  linkedText(
    resume.links[0].label,
    resume.links[0].href,
    rightX,
    topY + 17,
    rightWidth,
    { align: "right" }
  );
  linkedText(
    resume.links[1].label,
    resume.links[1].href,
    rightX,
    topY + 32,
    rightWidth,
    { align: "right" }
  );

  text(resume.headline, {
    y: topY + 49,
    width: leftWidth,
    size: 11,
    font: "Bold",
    color: "#444444",
    lineGap: 0,
  });
  doc.y = topY + 73;
}

header();
text(resume.summary, { size: 8.7, lineGap: 1 });

section("Skills");
skillRows(resume.skills);

section("Experience");
resume.experience.forEach(roleBlock);

section("Selected Projects");
resume.projects.forEach(roleBlock);

section("Languages");
text("Polish: native / English: professional working proficiency", {
  size: 9.2,
});

doc.end();

doc.on("end", () => {
  console.log(outputPath);
});
