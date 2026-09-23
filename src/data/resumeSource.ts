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

export const resumeProfile = resumeData.profile as ResumeProfile;
