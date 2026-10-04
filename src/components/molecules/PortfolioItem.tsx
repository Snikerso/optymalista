import { getTechnologyLabel, Technologies } from "@/data/technologies";
import type { Locale } from "@/lib/language";
import { getPortfolioTypeLabel, PortfolioType } from "@/types";
import React from "react";
import Image from "next/image";
import { TrackedAnchor, TrackedLink } from "../analytics/TrackedLink";
import { Icon } from "../atoms/Icon";
import { getLocalizedProject, projectDetailsBySlug } from "@/data/projectDetails";
import { ProjectVideo } from "./ProjectVideo";

export type PortfolioItemLanguage = Locale;

export type PortfolioItemProps = {
  id?: string;
  title: string;
  role?: string;
  companyLink?: string;
  relatedProject?: {
    name: string;
    link: string;
  };
  status?: string;
  description: React.ReactNode;
  types: PortfolioType[];
  technologies: Technologies[];
  startDate: Date;
  endDate?: Date;
  link?: string;
  caseStudyLink?: string;
  highlights?: string[];
  language?: PortfolioItemLanguage;
  mediaProjectSlug?: string;
};

const copyByLanguage = {
  pl: {
    caseStudy: "Case study",
    current: "obecnie",
    externalLink: "Zobacz stronę",
    month: "mies.",
    projectPrefix: "Projekt",
  },
  en: {
    caseStudy: "Case study",
    current: "present",
    externalLink: "View website",
    month: "mo.",
    projectPrefix: "Project",
  },
} satisfies Record<
  PortfolioItemLanguage,
  {
    caseStudy: string;
    current: string;
    externalLink: string;
    month: string;
    projectPrefix: string;
  }
>;

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  id,
  title,
  role,
  companyLink,
  relatedProject,
  status,
  description,
  types,
  technologies,
  startDate,
  endDate,
  link,
  caseStudyLink,
  highlights,
  language = "pl",
  mediaProjectSlug,
}) => {
  const copy = copyByLanguage[language];
  const mediaProject = mediaProjectSlug && projectDetailsBySlug[mediaProjectSlug]
    ? getLocalizedProject(projectDetailsBySlug[mediaProjectSlug], language)
    : undefined;
  const visibleTypes = types.filter(
    (type) => type !== PortfolioType.WORK_EXPERIENCE
  );

  return (
    <article
      id={id}
      className="group flex scroll-mt-28 flex-col gap-4 rounded-md border-2 border-black bg-white p-4 transition-colors hover:bg-gray-50 sm:gap-5 sm:p-5"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-bold leading-tight sm:text-2xl">
              {title}
            </h2>
            {status && (
              <span className="rounded-md bg-accent px-2 py-1 font-ibm text-xs font-bold uppercase text-black">
                {status}
              </span>
            )}
          </div>
          <p className="w-fit rounded-md bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700 sm:text-sm md:shrink-0">
            {formatDateRange(startDate, endDate, language)}
          </p>
        </div>
        {role &&
          (companyLink ? (
            <TrackedAnchor
              href={companyLink}
              target="_blank"
              rel="noreferrer"
              eventName="external_project_open"
              eventParams={{ source: "portfolio_company", label: role }}
              className="inline-flex w-fit items-center gap-1 text-sm font-bold text-gray-600 hover:text-accent"
            >
              <span>{role}</span>
              <Icon iconName="globe" size={14} />
            </TrackedAnchor>
          ) : (
            <p className="text-sm font-bold text-gray-600">{role}</p>
          ))}
        {relatedProject && (
          <TrackedLink
            href={relatedProject.link}
            eventName="case_study_open"
            eventParams={{
              source: "portfolio_related_project",
              project: relatedProject.name,
            }}
            className="inline-flex w-fit items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-sm font-bold text-gray-700 hover:text-accent"
          >
            <span>
              {copy.projectPrefix}: {relatedProject.name}
            </span>
            <Icon iconName="globe" size={14} />
          </TrackedLink>
        )}
      </div>
      <p className="text-sm leading-6 text-gray-800">{description}</p>
      {mediaProject && (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {mediaProject.gallery.filter((image) => image.imageSrc).map((image) => (
              <figure
                key={image.imageSrc}
                className="overflow-hidden rounded-md border border-gray-300"
              >
                <a
                  href={image.imageSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="block focus-visible:outline focus-visible:outline-4 focus-visible:outline-accent"
                  aria-label={`${image.title} — ${language === "pl" ? "otwórz w pełnym rozmiarze" : "open full size"}`}
                >
                  <Image
                    src={image.imageSrc!}
                    alt={image.imageAlt ?? image.title}
                    unoptimized
                    width={390}
                    height={390}
                    className="aspect-square w-full bg-black object-contain"
                  />
                </a>
                <figcaption className="p-2 text-center text-sm font-bold">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
          {mediaProject.video && (
            <ProjectVideo video={mediaProject.video} language={language} />
          )}
        </div>
      )}
      {highlights && highlights.length > 0 && (
        <ul className="flex flex-col gap-2 text-sm leading-6 text-gray-700">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col gap-3 border-t border-gray-200 pt-4">
        {visibleTypes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {visibleTypes.map((type) => (
              <span
                key={type}
                className="rounded-md bg-gray-100 px-2 py-1 font-ibm text-xs font-bold uppercase text-gray-700"
              >
                {getPortfolioTypeLabel(type, language)}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-800"
            >
              {getTechnologyLabel(technology, language)}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <span className="h-px w-full bg-gray-200 sm:flex-1" />
        {caseStudyLink && (
          <TrackedLink
            href={caseStudyLink}
            eventName="case_study_open"
            eventParams={{ source: "portfolio_item", project: title }}
            className="inline-flex w-fit items-center gap-1 text-sm font-bold hover:text-accent"
          >
            <span>{copy.caseStudy}</span>
            <Icon iconName="openTab" size={16} />
          </TrackedLink>
        )}
        {link && (
          <TrackedAnchor
            href={link}
            target="_blank"
            rel="noreferrer"
            eventName="external_project_open"
            eventParams={{ source: "portfolio_item", project: title }}
            className="inline-flex w-fit items-center gap-1 text-sm font-bold hover:text-accent"
          >
            <span>{copy.externalLink}</span>
            <Icon iconName="globe" size={16} />
          </TrackedAnchor>
        )}
      </div>
    </article>
  );
};

const formatDateRange = (
  startDate: Date,
  endDate: Date | undefined,
  language: PortfolioItemLanguage
) => {
  const copy = copyByLanguage[language];
  const formatter = new Intl.DateTimeFormat(language === "en" ? "en-US" : "pl-PL", {
    month: "short",
    year: "numeric",
  });
  const currentEndDate = endDate ?? new Date();
  const months = Math.max(
    1,
    Math.ceil(
      (currentEndDate.getTime() - startDate.getTime()) /
        (1000 * 60 * 60 * 24 * 30)
    )
  );
  const endLabel = endDate ? formatter.format(endDate) : copy.current;

  return `${formatter.format(startDate)} - ${endLabel} (${formatDuration(
    months,
    language
  )})`;
};

const formatDuration = (months: number, language: PortfolioItemLanguage) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${months} ${copyByLanguage[language].month}`;
  }

  if (language === "en") {
    const yearLabel = years === 1 ? "yr" : "yrs";

    if (remainingMonths === 0) {
      return `${years} ${yearLabel}`;
    }

    return `${years} ${yearLabel} ${remainingMonths} mo.`;
  }

  if (remainingMonths === 0) {
    return `${years} ${getYearLabel(years)}`;
  }

  return `${years} ${getYearLabel(years)} ${remainingMonths} mies.`;
};

const getYearLabel = (years: number) => {
  if (years === 1) {
    return "rok";
  }

  if (years >= 2 && years <= 4) {
    return "lata";
  }

  return "lat";
};
