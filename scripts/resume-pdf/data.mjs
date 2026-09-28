import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const root = path.resolve(__dirname, "../..");

const dataPath = path.join(root, "src", "data", "resumeData.json");
const resumeData = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const technologyWeights = {
  "React Native": 9,
  Expo: 7,
  TypeScript: 8,
  "React.js": 6,
  "Next.js": 3,
  "Node.js": 3,
  "Nest.js": 3,
  MongoDB: 2,
  "Microsoft Azure": 2,
  "E-commerce": 2,
  "React Query": 2,
};

const includesKeyword = (source, keyword) => {
  const haystack = [
    source.title,
    source.role,
    source.company,
    source.summary,
    source.technologies?.join(" "),
    source.bullets?.join(" "),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(keyword.toLowerCase());
};

const scoreEvidence = (source, target) => {
  const technologyScore = source.technologies.reduce((score, technology) => {
    const isRequired = target.requiredTechnologies.includes(technology);
    const baseScore = technologyWeights[technology] ?? 1;

    return score + (isRequired ? baseScore * 2 : baseScore);
  }, 0);

  const keywordScore = target.keywords.reduce(
    (score, keyword) => score + (includesKeyword(source, keyword) ? 3 : 0),
    0
  );

  return technologyScore + keywordScore;
};

const rankEvidence = (profile, target) =>
  [...profile.evidence]
    .map((source) => ({
      source,
      score: scoreEvidence(source, target),
    }))
    .sort((first, second) => second.score - first.score)
    .map(({ source }) => source);

const selectProjectEvidence = (profile, rankedEvidence, target) => {
  if (!target.projectTitles) {
    return rankedEvidence
      .filter((item) => item.type === "project")
      .slice(0, 3);
  }

  return target.projectTitles
    .map((title) => profile.evidence.find((item) => item.title === title))
    .filter(Boolean);
};

const contentByLanguage = {
  en: {
    headline: "React Native / React / TypeScript Developer",
    summary:
      "React and React Native developer with fullstack product experience, strongest in TypeScript, mobile/web product flows, e-commerce frontends and backend collaboration. I bring hands-on React Native/Expo work from CleanStrategy, enterprise React/TypeScript delivery from The Royal Mint, and broader API/authorization ownership from Swarmcheck.",
    sections: {
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      languages: "Languages",
    },
    techLabel: "Tech",
    skillGroups: [
      {
        title: "Best match",
        skills: [
          "React Native",
          "Expo",
          "TypeScript",
          "React.js",
          "Product development",
          "Remote collaboration",
        ],
      },
      {
        title: "Frontend",
        skills: [
          "Next.js",
          "JavaScript",
          "HTML5",
          "Tailwind CSS",
          "Bootstrap",
          "Design-to-code",
        ],
      },
      {
        title: "Backend and delivery",
        skills: [
          "Node.js",
          "Nest.js",
          "Express.js",
          "MongoDB",
          "REST APIs",
          "Azure",
        ],
      },
    ],
  },
  pl: {
    headline: "React Native / React / TypeScript Developer",
    summary:
      "Developer React i React Native z fullstackowym doświadczeniem produktowym, najmocniejszy w TypeScript, przepływach mobilnych i webowych, frontendach e-commerce oraz współpracy z backendem. Wnoszę praktyczne doświadczenie React Native/Expo z CleanStrategy, enterprise React/TypeScript z The Royal Mint oraz szerszą odpowiedzialność za API i autoryzację ze Swarmcheck.",
    sections: {
      skills: "Umiejętności",
      experience: "Doświadczenie",
      projects: "Projekty",
      languages: "Języki",
    },
    techLabel: "Tech",
    skillGroups: [
      {
        title: "Najlepsze dopasowanie",
        skills: [
          "React Native",
          "Expo",
          "TypeScript",
          "React.js",
          "Rozwój produktu",
          "Współpraca zdalna",
        ],
      },
      {
        title: "Frontend i mobile",
        skills: [
          "Next.js",
          "JavaScript",
          "HTML5",
          "Tailwind CSS",
          "Bootstrap",
          "Design-to-code",
        ],
      },
      {
        title: "Backend i delivery",
        skills: [
          "Node.js",
          "Nest.js",
          "Express.js",
          "MongoDB",
          "REST APIs",
          "Azure",
        ],
      },
    ],
  },
};

const getResumeLanguage = (language = "en") => (language === "pl" ? "pl" : "en");

const getResumeProfile = (language) => {
  if (language === "en") {
    return resumeData.profile;
  }

  const translation = resumeData.locales?.[language]?.profile;

  if (!translation) {
    return resumeData.profile;
  }

  return {
    ...resumeData.profile,
    ...translation,
    evidence: resumeData.profile.evidence.map((item) => ({
      ...item,
      ...translation.evidence?.[item.title],
    })),
  };
};

export const getResumeTarget = (targetSlug) =>
  resumeData.targets.find((target) => target.slug === targetSlug);

const getLocalizedResumeTarget = (targetSlug, language) => {
  const target = getResumeTarget(targetSlug);

  if (!target || language === "en") {
    return target;
  }

  return {
    ...target,
    ...resumeData.locales?.[language]?.targets?.[targetSlug],
  };
};

export const generateResumeForTarget = (targetSlug, requestedLanguage = "en") => {
  const language = getResumeLanguage(requestedLanguage);
  const target = getLocalizedResumeTarget(targetSlug, language);

  if (!target) {
    throw new Error(`Unknown resume target: ${targetSlug}`);
  }

  const profile = getResumeProfile(language);
  const content = contentByLanguage[language];
  const rankedEvidence = rankEvidence(profile, target);

  return {
    profile,
    target,
    language,
    title: `${profile.name} - ${target.role} - ${target.company}`,
    headline: target.headline ?? content.headline,
    summary: target.resumeSummary ?? content.summary,
    sections: content.sections,
    techLabel: content.techLabel,
    skillGroups: target.skillGroups ?? content.skillGroups,
    experience: rankedEvidence
      .filter((item) => item.type === "experience")
      .slice(0, 4),
    projects: selectProjectEvidence(profile, rankedEvidence, target),
  };
};
