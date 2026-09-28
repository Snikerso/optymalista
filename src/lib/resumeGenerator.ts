import {
  getResumeProfile,
  type ResumeEvidence,
  type ResumeLanguage,
  type ResumeProfile,
} from "@/data/resumeSource";
import { getResumeTarget, type ResumeTarget } from "@/data/resumeTargets";
import { Technologies } from "@/data/technologies";

export type GeneratedResume = {
  profile: ResumeProfile;
  target: ResumeTarget;
  title: string;
  headline: string;
  summary: string;
  skillGroups: { title: string; skills: string[] }[];
  experience: ResumeEvidence[];
  projects: ResumeEvidence[];
  coverNote: string;
  matchNotes: string[];
};

const contentByLanguage: Record<
  ResumeLanguage,
  {
    headline: string;
    summary: string;
    coverNote: string;
    skillGroups: { title: string; skills: string[] }[];
  }
> = {
  en: {
    headline: "React Native / React / TypeScript Developer",
    summary:
      "React and React Native developer with fullstack product experience, strongest in TypeScript, mobile/web product flows, e-commerce frontends and backend collaboration. I bring hands-on React Native/Expo work from CleanStrategy, enterprise React/TypeScript delivery from The Royal Mint, and broader API/authorization ownership from Swarmcheck.",
    coverNote:
      "I would position this application around practical React Native delivery, TypeScript discipline and the ability to work across product, frontend and backend boundaries. The strongest proof point is CleanStrategy, supported by enterprise React/TypeScript experience at The Royal Mint.",
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
        title: "Frontend and mobile",
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
    coverNote:
      "Pozycjonowałbym tę aplikację wokół praktycznego dowożenia React Native, dyscypliny TypeScript i umiejętności pracy na styku produktu, frontendu i backendu. Najmocniejszym dowodem jest CleanStrategy, wsparte doświadczeniem enterprise React/TypeScript w The Royal Mint.",
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

const technologyWeights: Partial<Record<Technologies, number>> = {
  [Technologies.REACT_NATIVE]: 9,
  [Technologies.EXPO]: 7,
  [Technologies.TYPESCRIPT]: 8,
  [Technologies.REACT]: 6,
  [Technologies.NEXT_JS]: 3,
  [Technologies.NODE_JS]: 3,
  [Technologies.NEST_JS]: 3,
  [Technologies.MONGODB]: 2,
  [Technologies.AZURE]: 2,
  [Technologies.ECOMMERCE]: 2,
  [Technologies.REACT_QUERY]: 2,
};

const includesKeyword = (source: ResumeEvidence, keyword: string) => {
  const haystack = [
    source.title,
    source.role,
    source.company,
    source.summary,
    source.technologies.join(" "),
    source.bullets.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(keyword.toLowerCase());
};

const scoreEvidence = (source: ResumeEvidence, target: ResumeTarget) => {
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

const rankEvidence = (profile: ResumeProfile, target: ResumeTarget) =>
  [...profile.evidence]
    .map((source) => ({
      source,
      score: scoreEvidence(source, target),
    }))
    .sort((first, second) => second.score - first.score)
    .map(({ source }) => source);

const selectProjectEvidence = (
  profile: ResumeProfile,
  rankedEvidence: ResumeEvidence[],
  target: ResumeTarget
) => {
  if (!target.projectTitles) {
    return rankedEvidence.filter((item) => item.type === "project").slice(0, 3);
  }

  return target.projectTitles
    .map((title) => profile.evidence.find((item) => item.title === title))
    .filter((item): item is ResumeEvidence => Boolean(item));
};

export const generateResumeForTarget = (
  targetSlug: string,
  language: ResumeLanguage = "en"
): GeneratedResume => {
  const target = getResumeTarget(targetSlug, language);

  if (!target) {
    throw new Error(`Unknown resume target: ${targetSlug}`);
  }

  const profile = getResumeProfile(language);
  const content = contentByLanguage[language];
  const rankedEvidence = rankEvidence(profile, target);
  const experience = rankedEvidence
    .filter((item) => item.type === "experience")
    .slice(0, 4);
  const projects = selectProjectEvidence(profile, rankedEvidence, target);

  return {
    profile,
    target,
    title: `${profile.name} - ${target.role} - ${target.company}`,
    headline: target.headline ?? content.headline,
    summary: target.resumeSummary ?? content.summary,
    skillGroups: target.skillGroups ?? content.skillGroups,
    experience,
    projects,
    coverNote: target.coverNote ?? content.coverNote,
    matchNotes: target.priorities,
  };
};
