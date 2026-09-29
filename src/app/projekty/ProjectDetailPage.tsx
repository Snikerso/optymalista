"use client";

import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import { Icon } from "@/components/atoms/Icon";
import {
  getLocalizedProject,
  getProjectLanguage,
  type ProjectDetail,
  type ProjectLanguage,
} from "@/data/projectDetails";
import { siteUrl } from "@/lib/seo";
import { useEffect, useState } from "react";

const copyByLanguage = {
  pl: {
    back: "Wróć do projektów",
    photos: "Zdjęcia projektu",
    photosDescription: "Wizualne kadry pokazujące charakter i zakres pracy.",
    insideStory: "Inside story",
    context: "Kontekst",
    links: "Linki",
    portfolioLink: "Projekt w portfolio",
    externalLink: "Zewnętrzna strona",
    problem: "Problem",
    solution: "Rozwiązanie",
    responsibilities: "Zakres prac",
    effects: "Efekty",
    proof: "Dowody pracy",
    technicalDecisions: "Decyzje techniczne",
  },
  en: {
    back: "Back to projects",
    photos: "Project screenshots",
    photosDescription: "Visual frames showing the character and scope of work.",
    insideStory: "Inside story",
    context: "Context",
    links: "Links",
    portfolioLink: "Project in portfolio",
    externalLink: "External site",
    problem: "Problem",
    solution: "Solution",
    responsibilities: "Scope of work",
    effects: "Results",
    proof: "Work evidence",
    technicalDecisions: "Technical decisions",
  },
} satisfies Record<ProjectLanguage, Record<string, string>>;

export const ProjectDetailPage = ({
  project,
}: {
  project: ProjectDetail;
}) => {
  const [language, setLanguage] = useState<ProjectLanguage>("pl");
  const localizedProject = getLocalizedProject(project, language);
  const copy = copyByLanguage[language];
  const portfolioPath =
    language === "en" ? "/portfolio/?lang=en#projekty" : "/portfolio/#projekty";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setLanguage(getProjectLanguage(params.get("lang") ?? undefined));
  }, []);

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: localizedProject.title,
    description: localizedProject.summary,
    url: new URL(`/projekty/${localizedProject.slug}/`, siteUrl).toString(),
    author: {
      "@type": "Person",
      name: "Paweł Drojecki",
      url: siteUrl,
    },
    keywords: localizedProject.technologies.join(", "),
  };

  return (
    <article className="flex w-full flex-col gap-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <a
        href={portfolioPath}
        className="inline-flex w-fit items-center gap-2 text-sm font-bold hover:text-accent"
      >
        <span aria-hidden="true">←</span>
        {copy.back}
      </a>

      <header className="flex flex-col gap-5 rounded-md border-2 border-black p-4 sm:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              {localizedProject.title}
            </h1>
            <p className="text-base font-bold text-gray-600">
              {localizedProject.role}
            </p>
          </div>
          <p className="w-fit rounded-md bg-gray-100 px-3 py-2 text-sm font-bold text-gray-700">
            {localizedProject.period}
          </p>
        </div>

        <p className="text-lg leading-8 text-gray-800">
          {localizedProject.summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {localizedProject.categories.map((category) => (
            <span
              key={category}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-bold uppercase text-gray-700"
            >
              {category}
            </span>
          ))}
        </div>
      </header>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">{copy.photos}</h2>
          <p className="text-sm text-gray-600">{copy.photosDescription}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {localizedProject.gallery.map((image) => (
            <figure
              key={`${localizedProject.slug}-${image.title}`}
              className="overflow-hidden rounded-md border-2 border-black bg-white"
            >
              {image.imageSrc ? (
                <img
                  src={image.imageSrc}
                  alt={image.imageAlt ?? image.title}
                  className={`aspect-[16/10] w-full bg-gray-100 ${
                    image.imageFit === "contain"
                      ? "object-contain"
                      : "object-cover"
                  }`}
                />
              ) : (
                <ProjectVisual title={image.title} theme={image.theme} />
              )}
              <figcaption className="border-t border-gray-200 p-3 text-sm leading-6 text-gray-700">
                <strong className="text-black">{image.title}.</strong>{" "}
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {localizedProject.insideStory ? (
        <section className="flex flex-col gap-3 rounded-md border-2 border-black bg-gray-50 p-4 sm:p-5">
          <p className="text-sm font-bold uppercase text-gray-500">
            {copy.insideStory}
          </p>
          <p className="text-base leading-8 text-gray-800">
            {localizedProject.insideStory}
          </p>
        </section>
      ) : null}

      <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-4 rounded-md border-2 border-black p-4 sm:p-5">
          <h2 className="text-xl font-bold">{copy.context}</h2>
          <p className="text-sm leading-7 text-gray-800">
            {localizedProject.lead}
          </p>
          <div className="flex flex-wrap gap-2 border-t border-gray-200 pt-4">
            {localizedProject.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-800"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-md border-2 border-black p-4 sm:p-5">
          <h2 className="text-xl font-bold">{copy.links}</h2>
          <a
            className="inline-flex w-fit items-center gap-2 font-bold hover:text-accent"
            href={portfolioPath}
          >
            <span>{copy.portfolioLink}</span>
            <Icon iconName="openTab" size={16} />
          </a>
          {localizedProject.externalLink && (
            <TrackedAnchor
              href={localizedProject.externalLink}
              target="_blank"
              rel="noreferrer"
              eventName="external_project_open"
              eventParams={{ project: localizedProject.slug, language }}
              className="inline-flex w-fit items-center gap-2 font-bold hover:text-accent"
            >
              <span>{copy.externalLink}</span>
              <Icon iconName="globe" size={16} />
            </TrackedAnchor>
          )}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <ProjectTextBlock title={copy.problem} text={localizedProject.problem} />
        <ProjectTextBlock
          title={copy.solution}
          text={localizedProject.solution}
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <ProjectListBlock
          title={copy.responsibilities}
          items={localizedProject.responsibilities}
        />
        <ProjectListBlock title={copy.effects} items={localizedProject.effects} />
      </section>

      {(localizedProject.proofPoints?.length ||
        localizedProject.technicalDecisions?.length) ? (
        <section className="grid gap-4 md:grid-cols-2">
          {localizedProject.proofPoints?.length ? (
            <ProjectListBlock
              title={copy.proof}
              items={localizedProject.proofPoints}
            />
          ) : null}
          {localizedProject.technicalDecisions?.length ? (
            <ProjectListBlock
              title={copy.technicalDecisions}
              items={localizedProject.technicalDecisions}
            />
          ) : null}
        </section>
      ) : null}
    </article>
  );
};

const ProjectTextBlock = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <section className="flex flex-col gap-3 rounded-md border-2 border-black p-4 sm:p-5">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-sm leading-7 text-gray-800">{text}</p>
  </section>
);

const ProjectListBlock = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <section className="flex flex-col gap-3 rounded-md border-2 border-black p-4 sm:p-5">
    <h2 className="text-xl font-bold">{title}</h2>
    <ul className="flex flex-col gap-2 text-sm leading-6 text-gray-700">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

const themeClasses: Record<ProjectDetail["gallery"][number]["theme"], string> =
  {
    commerce: "bg-[#111827] text-white",
    mobile: "bg-[#eef2ff] text-gray-950",
    platform: "bg-[#f8fafc] text-gray-950",
    studio: "bg-[#f7efe8] text-gray-950",
    data: "bg-[#101820] text-white",
    brand: "bg-[#fefce8] text-gray-950",
  };

const ProjectVisual = ({
  title,
  theme,
}: {
  title: string;
  theme: ProjectDetail["gallery"][number]["theme"];
}) => (
  <div
    className={`relative flex aspect-[16/10] min-h-56 flex-col justify-between overflow-hidden p-4 ${themeClasses[theme]}`}
  >
    <div className="flex items-center justify-between">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
      </div>
      <span className="rounded-md bg-white/15 px-2 py-1 text-xs font-bold uppercase">
        Preview
      </span>
    </div>

    <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col justify-end gap-3 rounded-md bg-white/15 p-4">
        <span className="h-2 w-16 rounded-full bg-accent" />
        <h3 className="max-w-xs text-2xl font-bold leading-tight">{title}</h3>
        <div className="grid gap-2">
          <span className="h-2 rounded-full bg-current/25" />
          <span className="h-2 w-3/4 rounded-full bg-current/25" />
        </div>
      </div>

      <div className="grid grid-rows-3 gap-2">
        <span className="rounded-md bg-white/20" />
        <span className="rounded-md bg-accent/90" />
        <span className="rounded-md bg-white/20" />
      </div>
    </div>
  </div>
);
