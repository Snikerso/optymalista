import { Technologies } from "@/data/technologies";
import resumeData from "@/data/resumeData.json";

export type ResumeEvidence = {
  title: string;
  role: string;
  company?: string;
  period: string;
  location?: string;
  type: "experience" | "project" | "education";
  summary: string;
  technologies: Technologies[];
  bullets: string[];
  links?: { label: string; href: string }[];
};

export type ResumeProfile = {
  name: string;
  headline: string;
  location: string;
  email?: string;
  links: { label: string; href: string }[];
  bio: string;
  languages: string[];
  evidence: ResumeEvidence[];
};

export type ResumeLanguage = "en" | "pl";

export type ResumeProfileTranslation = Partial<
  Pick<ResumeProfile, "headline" | "location" | "bio" | "languages">
> & {
  evidence?: Record<string, Partial<Omit<ResumeEvidence, "title" | "type">>>;
};

export type LocalizedResumeData = {
  profile: ResumeProfile;
  locales?: Partial<
    Record<
      Exclude<ResumeLanguage, "en">,
      {
        profile?: ResumeProfileTranslation;
      }
    >
  >;
};

export const resumeLanguages: ResumeLanguage[] = ["en", "pl"];

export const resumeProfile = resumeData.profile as ResumeProfile;

const localizedResumeData = resumeData as LocalizedResumeData;

export const getResumeProfile = (
  language: ResumeLanguage = "en"
): ResumeProfile => {
  if (language === "en") {
    return resumeProfile;
  }

  const translation = localizedResumeData.locales?.[language]?.profile;

  if (!translation) {
    return resumeProfile;
  }

  return {
    ...resumeProfile,
    ...translation,
    evidence: resumeProfile.evidence.map((item) => ({
      ...item,
      ...translation.evidence?.[item.title],
    })),
  };
};
