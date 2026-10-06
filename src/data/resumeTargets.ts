import { Technologies } from "@/data/technologies";
import type { ResumeLanguage } from "@/data/resumeSource";
import resumeData from "@/data/resumeData.json";

export type ResumeTarget = {
  slug: string;
  company: string;
  role: string;
  sourceUrl: string;
  sourceUrls?: string[];
  reviewedAt?: string;
  publishedAt: string;
  contract: string;
  location: string;
  workMode: string;
  rate: string;
  summary: string;
  requiredTechnologies: Technologies[];
  keywords: string[];
  priorities: string[];
  honestGaps: string[];
  headline?: string;
  resumeSummary?: string;
  skillGroups?: { title: string; skills: string[] }[];
  coverNote?: string;
  projectTitles?: string[];
  experienceTitles?: string[];
  includeAdditionalDetails?: boolean;
};

type ResumeTargetTranslation = Partial<
  Pick<
    ResumeTarget,
    | "role"
    | "contract"
    | "location"
    | "workMode"
    | "rate"
    | "summary"
    | "priorities"
    | "honestGaps"
    | "headline"
    | "resumeSummary"
    | "skillGroups"
    | "coverNote"
    | "projectTitles"
  >
>;

type LocalizedResumeData = {
  targets: ResumeTarget[];
  locales?: Partial<
    Record<
      Exclude<ResumeLanguage, "en">,
      {
        targets?: Record<string, ResumeTargetTranslation>;
      }
    >
  >;
};

export const resumeTargets = resumeData.targets as ResumeTarget[];

export const resumeTargetsBySlug = resumeTargets.reduce<Record<string, ResumeTarget>>(
  (targetsBySlug, target) => {
    targetsBySlug[target.slug] = target;

    return targetsBySlug;
  },
  {}
);

const localizedResumeData = resumeData as LocalizedResumeData;

export const getResumeTarget = (
  targetSlug: string,
  language: ResumeLanguage = "en"
): ResumeTarget | undefined => {
  const target = resumeTargetsBySlug[targetSlug];

  if (!target || language === "en") {
    return target;
  }

  return {
    ...target,
    ...localizedResumeData.locales?.[language]?.targets?.[targetSlug],
  };
};
