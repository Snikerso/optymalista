"use client";

import Image from "next/image";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getLocalizedProject, orderedProjectDetails, type ProjectLanguage } from "@/data/projectDetails";
import { getTechnologyLabel } from "@/data/technologies";
import { getLocalizedHref } from "@/lib/language";
import { useSiteLanguage } from "@/lib/useSiteLanguage";

export const ProjectList = ({ language }: { language: ProjectLanguage }) => (
  <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
    {orderedProjectDetails.map((project) => {
      const localized = getLocalizedProject(project, language);
      const image = localized.gallery.find((item) => item.imageSrc);
      const href = getLocalizedHref(`/projekty/${project.slug}/`, language) ?? `/projekty/${project.slug}/`;
      return (
        <article key={project.slug} className="min-w-0">
          <TrackedLink href={href} eventName="case_study_open" eventParams={{ source: "project_list", project: project.slug, language }} className="group block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            {image?.imageSrc && (
              <div className="mb-4 overflow-hidden rounded-lg bg-gray-50">
                <Image src={image.imageSrc} alt={image.imageAlt ?? localized.title} width={800} height={500} unoptimized className={`aspect-[8/5] w-full ${image.imageFit === "contain" ? "object-contain" : "object-cover"}`} />
              </div>
            )}
            <h3 className="text-xl font-semibold group-hover:underline underline-offset-4">{localized.title} <span aria-hidden="true" className="text-gray-400">↗</span></h3>
            <p className="mt-1 text-sm text-gray-500">{localized.role}</p>
            <p className="mt-3 text-sm leading-6 text-gray-700">{localized.summary}</p>
            <p className="mt-3 text-xs leading-5 text-gray-500">{localized.technologies.slice(0, 5).map((technology) => getTechnologyLabel(technology, language)).join(" · ")}</p>
          </TrackedLink>
        </article>
      );
    })}
  </div>
);

export const ProjectsPageContent = () => {
  const language = useSiteLanguage();
  return (
    <div className="flex flex-col gap-10 pb-12">
      <header>
        <h1 className="text-3xl font-semibold sm:text-4xl">{language === "pl" ? "Projekty" : "Projects"}</h1>
        <p className="mt-3 max-w-xl leading-7 text-gray-600">{language === "pl" ? "Aplikacje, które projektuję, rozwijam i utrzymuję." : "Applications I design, develop and maintain."}</p>
      </header>
      <ProjectList language={language} />
    </div>
  );
};
