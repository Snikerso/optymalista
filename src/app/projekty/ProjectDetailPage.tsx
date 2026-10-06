"use client";

import Image from "next/image";
import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import { ProjectVideo } from "@/components/molecules/ProjectVideo";
import { getLocalizedProject, type ProjectDetail } from "@/data/projectDetails";
import { getTechnologyLabel } from "@/data/technologies";
import { getLocalizedHref } from "@/lib/language";
import { useSiteLanguage } from "@/lib/useSiteLanguage";
import { siteUrl } from "@/lib/seo";

export const ProjectDetailPage = ({ project }: { project: ProjectDetail }) => {
  const language = useSiteLanguage();
  const content = getLocalizedProject(project, language);
  const pl = language === "pl";
  const back = getLocalizedHref("/portfolio/#projekty", language) ?? "/portfolio/#projekty";
  const images = content.gallery.filter((image) => image.imageSrc);
  const jsonLd = {
    "@context": "https://schema.org", "@type": "CreativeWork",
    name: content.title, description: content.summary,
    url: new URL(`/projekty/${content.slug}/`, siteUrl).toString(),
    author: { "@type": "Person", name: "Paweł Drojecki", url: siteUrl },
    keywords: content.technologies.map((technology) => getTechnologyLabel(technology, language)).join(", "),
  };
  return (
    <article className="mx-auto flex max-w-4xl flex-col gap-10 pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href={back} className="w-fit text-sm text-gray-600 hover:underline">← {pl ? "Wszystkie projekty" : "All projects"}</a>
      <header>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{content.title}</h1>
        <p className="mt-3 text-sm text-gray-500">{content.role} · {content.period}</p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">{content.summary}</p>
        <p className="mt-4 text-sm leading-6 text-gray-500">{content.technologies.map((technology) => getTechnologyLabel(technology, language)).join(" · ")}</p>
        {content.externalLink && <TrackedAnchor href={content.externalLink} target="_blank" rel="noreferrer" eventName="external_project_open" eventParams={{ project: content.slug, language }} className="mt-5 inline-block font-semibold underline underline-offset-4">{pl ? "Otwórz projekt" : "Open project"} ↗</TrackedAnchor>}
      </header>
      {content.video && <ProjectVideo video={content.video} language={language} />}
      <div className="grid gap-8 border-t border-gray-200 pt-8 md:grid-cols-2">
        <ProjectList title={pl ? "Mój zakres prac" : "My contribution"} items={content.responsibilities} />
        <ProjectList title={pl ? "Efekty" : "Results"} items={content.effects} />
      </div>
      {images.length > 0 && <section aria-label={pl ? "Zdjęcia projektu" : "Project screenshots"} className="grid gap-6 sm:grid-cols-2">
        {images.map((image) => (
          <figure key={image.imageSrc}>
            <a href={image.imageSrc} target="_blank" rel="noreferrer" aria-label={`${image.imageAlt ?? image.title} — ${pl ? "otwórz w pełnym rozmiarze" : "open full size"}`} className="block overflow-hidden rounded-lg bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
              <Image src={image.imageSrc!} alt={image.imageAlt ?? image.title} width={1000} height={625} unoptimized className={`aspect-[8/5] w-full ${image.imageFit === "contain" ? "object-contain" : "object-cover"}`} />
            </a>
            <figcaption className="mt-2 text-xs leading-5 text-gray-500">{image.title}</figcaption>
          </figure>
        ))}
      </section>}
      <details className="border-t border-gray-200 pt-5">
        <summary className="cursor-pointer font-semibold">{pl ? "Więcej o projekcie" : "More about the project"}</summary>
        <div className="mt-5 flex max-w-3xl flex-col gap-6 text-sm leading-7 text-gray-700">
          <p>{content.lead}</p>
          <div><h2 className="mb-2 font-semibold text-black">{pl ? "Problem" : "Problem"}</h2><p>{content.problem}</p></div>
          <div><h2 className="mb-2 font-semibold text-black">{pl ? "Rozwiązanie" : "Solution"}</h2><p>{content.solution}</p></div>
          {content.insideStory && <p>{content.insideStory}</p>}
          {content.technicalDecisions?.length && <ProjectList title={pl ? "Decyzje techniczne" : "Technical decisions"} items={content.technicalDecisions} />}
          {images.map((image) => <p key={image.imageSrc}><strong>{image.title}.</strong> {image.caption}</p>)}
        </div>
      </details>
    </article>
  );
};

const ProjectList = ({ title, items }: { title: string; items: string[] }) => (
  <section>
    <h2 className="text-lg font-semibold">{title}</h2>
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </section>
);
