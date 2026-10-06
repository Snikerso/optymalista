"use client";

import Link from "next/link";
import {
  getTechnologyDescription,
  getTechnologyLabel,
  technologyGroups,
} from "@/data/technologies";
import type { ProjectLanguage } from "@/data/projectDetails";
import { getLocalizedHref } from "@/lib/language";

const groupTitleByLanguage: Record<string, Record<ProjectLanguage, string>> = {
  Frontend: {
    pl: "Frontend",
    en: "Frontend",
  },
  "Frontend tooling": {
    pl: "Narzędzia frontendowe",
    en: "Frontend tooling",
  },
  "Mobile i wearables": {
    pl: "Mobile i wearables",
    en: "Mobile and wearables",
  },
  "Backend i API": {
    pl: "Backend i API",
    en: "Backend and API",
  },
  "Cloud, DevOps i auth": {
    pl: "Cloud, DevOps i auth",
    en: "Cloud, DevOps and auth",
  },
  "Edukacja i produkt": {
    pl: "Edukacja i produkt",
    en: "Education and product",
  },
  "Dane, UX i inne": {
    pl: "Dane, UX i inne",
    en: "Data, UX and other",
  },
};

const getGroupTitle = (title: string, language: ProjectLanguage) =>
  groupTitleByLanguage[title]?.[language] ?? title;

const projectTooltipLinks = [
  { label: "Knitting Counter Pro", slug: "knitting-counter-pro" },
  { label: "Moment Studio", slug: "moment-studio" },
  { label: "CleanStrategy", slug: "cleanstrategy" },
  { label: "Royal Mint", slug: "royal-mint" },
  { label: "JuliJogi", slug: "juli-jogi" },
  { label: "Juli Jogi", slug: "juli-jogi" },
  { label: "Swarmcheck", slug: "swarmcheck" },
  { label: "Jambo", slug: "jambo" },
].sort((a, b) => b.label.length - a.label.length);

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const projectTooltipPattern = new RegExp(
  `(${projectTooltipLinks.map((project) => escapeRegExp(project.label)).join("|")})`,
  "g"
);

const renderDescriptionWithProjectLinks = (
  description: string,
  language: ProjectLanguage
) => {
  const projectByLabel = new Map(
    projectTooltipLinks.map((project) => [project.label, project])
  );

  return description.split(projectTooltipPattern).map((part, index) => {
    const project = projectByLabel.get(part);

    if (!project) {
      return part;
    }

    return (
      <Link
        className="font-bold underline decoration-accent decoration-2 underline-offset-2 hover:text-black"
        href={
          getLocalizedHref(`/projekty/${project.slug}/`, language) ??
          `/projekty/${project.slug}/`
        }
        key={`${project.slug}-${index}`}
      >
        {part}
      </Link>
    );
  });
};

export const TechStackTable = ({ language }: { language: ProjectLanguage }) => (
  <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
    {technologyGroups.map((group) => (
      <section key={group.title} className="border-t border-gray-200 pt-4">
        <h3 className="mb-3 text-sm font-semibold">{getGroupTitle(group.title, language)}</h3>
        <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-gray-600">
          {group.skills.map((skill) => {
            const description = getTechnologyDescription(skill, language);
            return <li key={skill}>
              {description ? <details className="group">
                <summary className="cursor-pointer list-none underline decoration-gray-300 underline-offset-4 hover:text-black">{getTechnologyLabel(skill, language)}</summary>
                <p className="mt-2 max-w-sm rounded-md bg-gray-50 p-3 text-xs leading-6">{renderDescriptionWithProjectLinks(description, language)}</p>
              </details> : getTechnologyLabel(skill, language)}
            </li>;
          })}
        </ul>
      </section>
    ))}
  </div>
);
