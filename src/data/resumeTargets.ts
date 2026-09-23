import { Technologies } from "@/data/technologies";

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

export const resumeTargets: ResumeTarget[] = [
  {
    slug: "netguru-react-native-developer-freelance",
    company: "Netguru",
    role: "React Native Developer - Freelance",
    sourceUrl:
      "https://justjoin.it/job-offer/netguru-react-native-developer---freelance-poznan-javascript",
    publishedAt: "2026-09-22",
    contract: "B2B freelance, full-time",
    location: "Poznań / remote, CET-EU hours",
    workMode: "100% remote",
    rate: "up to 31 EUR/h",
    summary:
      "Senior freelance React Native role focused on TypeScript, navigation, shared state/data fetching, design-system component libraries, mobile testing, push notifications, deep linking and device APIs.",
    requiredTechnologies: [
      Technologies.REACT_NATIVE,
      Technologies.TYPESCRIPT,
      Technologies.REACT,
      Technologies.EXPO,
      Technologies.REACT_QUERY,
      Technologies.JAVASCRIPT,
    ],
    keywords: [
      "react native",
      "typescript",
      "expo",
      "react",
      "mobile",
      "product",
      "frontend",
      "state",
      "data",
      "design",
      "testing",
      "remote",
      "e-commerce",
      "freelance",
    ],
    priorities: [
      "Lead with CleanStrategy as the closest React Native / Expo / TypeScript evidence.",
      "Use Royal Mint to show enterprise React, TypeScript, e-commerce and remote delivery.",
      "Use Swarmcheck to prove deeper product engineering, backend/API ownership and authorization work.",
      "Keep claims around Jest, React Native Testing Library, push notifications and deep linking honest unless more source material is added.",
    ],
    honestGaps: [
      "Portfolio source does not explicitly mention React Navigation.",
      "Portfolio source does not explicitly mention Jest or React Native Testing Library.",
      "Portfolio source does not explicitly mention push notifications, deep linking or native device APIs.",
    ],
  },
];

export const resumeTargetsBySlug = resumeTargets.reduce<Record<string, ResumeTarget>>(
  (targetsBySlug, target) => {
    targetsBySlug[target.slug] = target;

    return targetsBySlug;
  },
  {}
);
