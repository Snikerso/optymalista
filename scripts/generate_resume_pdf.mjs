import path from "node:path";
import { fileURLToPath } from "node:url";
import { createPdfContext } from "./resume-pdf/pdfContext.mjs";
import { generateResumeForTarget } from "./resume-pdf/data.mjs";
import {
  renderHeader,
  renderRoleBlock,
  renderSection,
  renderSkillRows,
} from "./resume-pdf/components.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const targetSlug =
  process.argv[2] ?? "netguru-react-native-developer-freelance";
const language = process.argv[3] === "pl" ? "pl" : "en";
const outputPath = path.join(
  root,
  "output",
  "pdf",
  `pawel-drojecki-${targetSlug.replace(/[^a-z0-9-]/gi, "-")}-${language}-resume.pdf`
);
const siteUrl = "https://www.drojecki.pro";

const toAbsoluteUrl = (href) => {
  if (/^https?:\/\//i.test(href)) {
    return href;
  }

  return new URL(href, siteUrl).toString();
};

const toDisplayUrl = (href) =>
  toAbsoluteUrl(href)
    .replace(/^https?:\/\//i, "")
    .replace(/\/$/i, "");

const formatLink = (link) => {
  const href = toAbsoluteUrl(link.href);

  return {
    label: link.label,
    href,
    display: `${link.label}: ${toDisplayUrl(href)}`,
  };
};

const normalizeResumeLinks = (resume) => ({
  ...resume,
  profile: {
    ...resume.profile,
    links: resume.profile.links.map(formatLink),
  },
});

const formatResumeItem = (item, resume, options = {}) => ({
  title:
    options.preferEvidenceTitle || !item.company
      ? item.title
      : `${item.role} - ${item.company}`,
  roleLine:
    options.preferEvidenceTitle && item.company
      ? `${item.role} - ${item.company}`
      : item.company
        ? item.summary
        : item.role,
  period: item.period,
  location: item.location,
  bullets: options.maxBullets ? item.bullets.slice(0, options.maxBullets) : item.bullets,
  tech: item.technologies,
  techLabel: resume.techLabel,
  links: item.links?.map(formatLink),
});

const main = async () => {
  const resume = normalizeResumeLinks(generateResumeForTarget(targetSlug, language));
  const ctx = createPdfContext(outputPath, {
    Title: resume.title,
    Author: resume.profile.name,
    Subject: `${resume.sections.experience} - ${resume.target.company} ${resume.target.role}`,
    Keywords: [
      ...resume.target.requiredTechnologies,
      ...resume.target.keywords,
      resume.target.role,
      resume.target.company,
      "portfolio",
      "remote",
      "freelance",
    ].join(", "),
  });

  renderHeader(ctx, resume);
  ctx.drawText(resume.summary, { size: 8.7, lineGap: 1 });

  renderSection(ctx, resume.sections.skills, () => {
    renderSkillRows(ctx, resume.skillGroups);
  });

  renderSection(ctx, resume.sections.experience, () => {
    resume.experience.map((item) => formatResumeItem(item, resume)).forEach((item) => {
      renderRoleBlock(ctx, item);
    });
  });

  renderSection(ctx, resume.sections.projects, () => {
    resume.projects.map((item) => formatResumeItem(item, resume, { preferEvidenceTitle: true, maxBullets: 2 })).forEach((item) => {
      renderRoleBlock(ctx, item);
    });
  });

  renderSection(ctx, resume.sections.languages, () => {
    ctx.drawText(resume.profile.languages.join(" / "), { size: 9.2 });
  });

  await ctx.finish();
  console.log(outputPath);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
