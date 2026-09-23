import { Technologies } from "@/data/technologies";
import resumeData from "@/data/resumeData.json";

export type ResumeTarget = {
  slug: string;
  company: string;
  role: string;
  sourceUrl: string;
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
};

export const resumeTargets = resumeData.targets as ResumeTarget[];

export const resumeTargetsBySlug = resumeTargets.reduce<Record<string, ResumeTarget>>(
  (targetsBySlug, target) => {
    targetsBySlug[target.slug] = target;

    return targetsBySlug;
  },
  {}
);
