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

export const getResumeTarget = (targetSlug) =>
  resumeData.targets.find((target) => target.slug === targetSlug);

export const generateResumeForTarget = (targetSlug) => {
  const target = getResumeTarget(targetSlug);

  if (!target) {
    throw new Error(`Unknown resume target: ${targetSlug}`);
  }

  const profile = resumeData.profile;
  const rankedEvidence = rankEvidence(profile, target);

  return {
    profile,
    target,
    title: `${profile.name} - ${target.role} - ${target.company}`,
    headline: "React Native / React / TypeScript Developer",
    summary:
      "React and React Native developer with fullstack product experience, strongest in TypeScript, mobile/web product flows, e-commerce frontends and backend collaboration. I bring hands-on React Native/Expo work from CleanStrategy, enterprise React/TypeScript delivery from The Royal Mint, and broader API/authorization ownership from Swarmcheck.",
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
    experience: rankedEvidence
      .filter((item) => item.type === "experience")
      .slice(0, 4),
    projects: rankedEvidence
      .filter((item) => item.type === "project")
      .slice(0, 3),
  };
};
