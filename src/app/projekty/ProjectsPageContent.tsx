"use client";

import { TrackedAnchor, TrackedLink } from "@/components/analytics/TrackedLink";
import { Icon } from "@/components/atoms/Icon";
import {
  getLocalizedProject,
  isFeaturedProject,
  orderedProjectDetails,
  type ProjectDetail,
  type ProjectLanguage,
} from "@/data/projectDetails";
import { getTechnologyLabel } from "@/data/technologies";
import { getLocalizedHref } from "@/lib/language";
import { useSiteLanguage } from "@/lib/useSiteLanguage";
import { getPortfolioTypeLabel, PortfolioType } from "@/types";
import { useState } from "react";

type ProjectFilter = {
  id: string;
  labels: Record<ProjectLanguage, string>;
  notes?: Record<ProjectLanguage, string>;
  matches: (project: ProjectDetail) => boolean;
};

const projectFilters: ProjectFilter[] = [
  {
    id: "all",
    labels: {
      pl: "Wszystkie",
      en: "All",
    },
    matches: () => true,
  },
  {
    id: "ecommerce",
    labels: {
      pl: "E-commerce",
      en: "E-commerce",
    },
    matches: (project) => project.categories.includes(PortfolioType.ECOMMERCE),
  },
  {
    id: "mobile-watch-apps",
    labels: {
      pl: "Mobile & watch apps",
      en: "Mobile & watch apps",
    },
    matches: (project) =>
      project.categories.includes(PortfolioType.MOBILE_APP) ||
      project.categories.includes(PortfolioType.WATCH_APP),
  },
  {
    id: "web-app",
    labels: {
      pl: "WebApp",
      en: "WebApp",
    },
    matches: (project) => project.categories.includes(PortfolioType.WEB_APP),
  },
  {
    id: "electronics-and-3d-print",
    labels: {
      pl: "Electronic & 3D print",
      en: "Electronics & 3D print",
    },
    notes: {
      pl: "Projekty w trakcie dodawania",
      en: "Projects are being added",
    },
    matches: () => false,
  },
];

const copyByLanguage = {
  pl: {
    eyebrow: "Projekty",
    title: "Case studies i realizacje",
    intro:
      "Same projekty: aplikacje webowe, mobile, e-commerce, backend, analityka i produkty budowane od pierwszego problemu do działającego rozwiązania.",
    categoryBanner: "Wybierz typ projektu",
    featured: "Wyróżniony",
    projectCount: "projektów",
    caseStudy: "Zobacz case study",
    externalLink: "Zewnętrzna strona",
    technologies: "Technologie",
    proof: "Dowody",
    fallbackProof: "Opis problemu, rozwiązania i efektów w case study.",
    emptyTitle: "Nie ma jeszcze projektów w tej kategorii.",
    emptyText:
      "Kategoria jest przygotowana w nawigacji, ale lista uzupełni się dopiero po dodaniu pasującego projektu.",
  },
  en: {
    eyebrow: "Projects",
    title: "Case studies and shipped work",
    intro:
      "Projects only: web apps, mobile products, e-commerce, backend, analytics and product work shaped from a real problem into working software.",
    categoryBanner: "Choose project type",
    featured: "Featured",
    projectCount: "projects",
    caseStudy: "Read case study",
    externalLink: "External site",
    technologies: "Technologies",
    proof: "Evidence",
    fallbackProof: "Problem, solution and result are covered in the case study.",
    emptyTitle: "No projects in this category yet.",
    emptyText:
      "The category is ready in the navigation, and the list will fill in once a matching project is added.",
  },
} satisfies Record<ProjectLanguage, Record<string, string>>;

export const ProjectsPageContent = () => {
  const language = useSiteLanguage();
  const [activeFilterId, setActiveFilterId] = useState(projectFilters[0].id);
  const copy = copyByLanguage[language];
  const activeFilter =
    projectFilters.find((filter) => filter.id === activeFilterId) ??
    projectFilters[0];
  const filteredProjects = orderedProjectDetails.filter(activeFilter.matches);

  return (
    <div className="flex min-h-screen w-full flex-col gap-10 pb-12">
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="font-ibm text-sm font-bold uppercase text-gray-500">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            {copy.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-gray-700">
            {copy.intro}
          </p>
        </div>
        <section
          aria-label={copy.categoryBanner}
          className="rounded-md border-2 border-black bg-gray-50 p-3 sm:p-4"
        >
          <h2 className="font-ibm text-sm font-bold uppercase text-gray-500">
            {copy.categoryBanner}
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {projectFilters.map((filter) => {
              const projectsCount = orderedProjectDetails.filter(filter.matches).length;
              const isActive = activeFilterId === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilterId(filter.id)}
                  className={`flex min-h-14 flex-col justify-center rounded-md border-2 px-3 py-2 text-left transition-colors ${
                    isActive
                      ? "border-black bg-accent text-black shadow-[3px_3px_0_0_#000]"
                      : "border-gray-300 bg-white text-gray-800 hover:border-black hover:bg-gray-100"
                  }`}
                >
                  <span className="text-sm font-bold leading-tight">
                    {filter.labels[language]}
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    {projectsCount} {copy.projectCount}
                  </span>
                  {filter.notes ? (
                    <span className="mt-1 text-xs font-semibold leading-4 text-gray-500">
                      {filter.notes[language]}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </section>
      </section>

      <section className="grid gap-5">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              language={language}
              copy={copy}
            />
          ))
        ) : (
          <div className="rounded-md border-2 border-black p-5">
            <h3 className="text-xl font-bold">{copy.emptyTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              {copy.emptyText}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

const ProjectCard = ({
  project,
  language,
  copy,
}: {
  project: ProjectDetail;
  language: ProjectLanguage;
  copy: (typeof copyByLanguage)[ProjectLanguage];
}) => {
  const localizedProject = getLocalizedProject(project, language);
  const heroImage = localizedProject.gallery.find((image) => image.imageSrc);
  const projectPath =
    getLocalizedHref(`/projekty/${project.slug}/`, language) ??
    `/projekty/${project.slug}/`;
  const proofItems =
    localizedProject.proofPoints && localizedProject.proofPoints.length > 0
      ? localizedProject.proofPoints.slice(0, 2)
      : [copy.fallbackProof];

  return (
    <article className="flex flex-col overflow-hidden rounded-md border-2 border-black bg-white">
      <div className="flex min-w-0 flex-col justify-center gap-5 p-5 sm:p-7 md:p-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-3xl font-bold leading-tight">
                {localizedProject.title}
              </h3>
              <p className="mt-1 text-lg font-bold leading-7 text-gray-600">
                {localizedProject.role}
              </p>
            </div>
            <p className="w-fit shrink-0 rounded-md bg-gray-100 px-3 py-2 text-sm font-bold leading-5 text-gray-700">
              {localizedProject.period}
            </p>
          </div>
          <p className="text-lg leading-8 text-gray-800">
            {localizedProject.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {localizedProject.categories.map((category) => (
            <span
              key={category}
              className="rounded-md bg-gray-100 px-3 py-2 font-ibm text-sm font-bold uppercase text-gray-700"
            >
              {getPortfolioTypeLabel(category, language)}
            </span>
          ))}
        </div>

        <section className="flex flex-col gap-2">
          <h4 className="font-ibm text-xs font-bold uppercase text-gray-500">
            {copy.technologies}
          </h4>
          <div className="flex flex-wrap gap-2">
            {localizedProject.technologies.slice(0, 6).map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-800"
              >
                {getTechnologyLabel(technology, language)}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h4 className="font-ibm text-xs font-bold uppercase text-gray-500">
            {copy.proof}
          </h4>
          <ul className="flex flex-col gap-3 text-base leading-7 text-gray-700">
            {proofItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap items-center gap-4 border-t border-gray-200 pt-5">
          <TrackedLink
            href={projectPath}
            eventName="case_study_open"
            eventParams={{
              source: "projects_index_card",
              project: project.slug,
              language,
            }}
            className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-4 py-3 text-base font-bold text-black hover:bg-accent/80"
          >
            <span>{copy.caseStudy}</span>
            <Icon iconName="openTab" size={20} />
          </TrackedLink>
          {localizedProject.externalLink ? (
            <TrackedAnchor
              href={localizedProject.externalLink}
              target="_blank"
              rel="noreferrer"
              eventName="external_project_open"
              eventParams={{
                source: "projects_index_card",
                project: project.slug,
                language,
              }}
              className="inline-flex w-fit items-center gap-2 text-base font-bold hover:text-accent"
            >
              <span>{copy.externalLink}</span>
              <Icon iconName="globe" size={20} />
            </TrackedAnchor>
          ) : null}
        </div>
      </div>

      <TrackedLink
        href={projectPath}
        eventName="case_study_open"
        eventParams={{
          source: "projects_index_image",
          project: project.slug,
          language,
        }}
        className="relative flex min-h-[14rem] items-center border-t border-gray-200 bg-white"
        aria-label={`${copy.caseStudy}: ${localizedProject.title}`}
      >
        {heroImage?.imageSrc ? (
          <img
            src={heroImage.imageSrc}
            alt={heroImage.imageAlt ?? localizedProject.title}
            className={`aspect-[16/9] w-full bg-white ${
              heroImage.imageFit === "contain"
                ? "object-contain"
                : "object-cover"
            }`}
          />
        ) : null}
        {isFeaturedProject(project.slug) ? (
          <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 font-ibm text-xs font-bold uppercase text-black">
            {copy.featured}
          </span>
        ) : null}
      </TrackedLink>
    </article>
  );
};
