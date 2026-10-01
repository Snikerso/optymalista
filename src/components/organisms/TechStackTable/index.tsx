"use client";

import Link from "next/link";
import {
  getTechnologyDescription,
  getTechnologyLabel,
  technologyGroups,
  Technologies,
} from "@/data/technologies";
import type { ProjectLanguage } from "@/data/projectDetails";
import { getLocalizedHref } from "@/lib/language";
import { FaInfoCircle } from "react-icons/fa";

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

const maxSkillRows = Math.max(
  ...technologyGroups.map((group) => group.skills.length)
);

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

const TechnologyCellContent = ({
  groupIndex,
  language,
  rowIndex,
  skill,
}: {
  groupIndex: number;
  language: ProjectLanguage;
  rowIndex: number;
  skill: Technologies;
}) => {
  const label = getTechnologyLabel(skill, language);
  const description = getTechnologyDescription(skill, language);
  const opensAbove = rowIndex >= maxSkillRows - 3;
  const alignsRight = groupIndex >= technologyGroups.length - 2;
  const tooltipPositionClass = [
    opensAbove ? "bottom-6" : "top-6",
    alignsRight ? "right-0" : "left-0",
  ].join(" ");

  if (!description) {
    return label;
  }

  return (
    <span className="relative inline-flex items-center gap-2">
      <span>{label}</span>
      <span className="group relative inline-flex">
        <span
          aria-label={description}
          className="inline-flex h-4 w-4 cursor-help items-center justify-center text-gray-500 outline-none transition-colors hover:text-black focus-visible:text-black"
          role="img"
          tabIndex={0}
        >
          <FaInfoCircle aria-hidden="true" className="h-3.5 w-3.5" />
        </span>
        <span
          className={`${tooltipPositionClass} pointer-events-auto absolute z-20 w-72 max-w-[calc(100vw-2rem)] rounded-md border border-black bg-white p-3 text-xs font-medium leading-5 text-gray-900 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100`}
        >
          {renderDescriptionWithProjectLinks(description, language)}
        </span>
      </span>
    </span>
  );
};

export const TechStackTable = ({ language }: { language: ProjectLanguage }) => {
  const skillRows = Array.from({ length: maxSkillRows }, (_, rowIndex) =>
    technologyGroups.map((group) => group.skills[rowIndex])
  );

  return (
    <div className="overflow-hidden rounded-md border-2 border-black bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-[76rem] border-collapse text-left">
          <caption className="sr-only">
            {language === "en"
              ? "Technology stack grouped by category"
              : "Stack technologiczny pogrupowany według kategorii"}
          </caption>
          <thead>
            <tr>
              {technologyGroups.map((group) => (
                <th
                  key={group.title}
                  scope="col"
                  className="w-[14.285%] border-b-2 border-r-2 border-black bg-accent px-3 py-3 align-top text-xs font-bold uppercase leading-5 text-black last:border-r-0"
                >
                  <span>{getGroupTitle(group.title, language)}</span>
                  <span className="mt-1 block text-[0.68rem] font-bold uppercase leading-4 text-black/65">
                    {language === "en"
                      ? `${group.skills.length} skills`
                      : `${group.skills.length} umiejętności`}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {skillRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
                {row.map((skill, groupIndex) => (
                  <td
                    key={`${technologyGroups[groupIndex].title}-${rowIndex}`}
                    className="border-r border-t border-gray-300 px-3 py-2 align-top text-sm font-semibold leading-5 text-gray-900 last:border-r-0"
                  >
                    {skill ? (
                      <TechnologyCellContent
                        groupIndex={groupIndex}
                        language={language}
                        rowIndex={rowIndex}
                        skill={skill}
                      />
                    ) : (
                      <span aria-hidden="true" className="text-gray-300">
                        -
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
