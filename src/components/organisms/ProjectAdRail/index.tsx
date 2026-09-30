"use client";

import { Icon } from "@/components/atoms/Icon";
import {
  getLocalizedProject,
  isFeaturedProject,
  projectDetails,
  type ProjectLanguage,
} from "@/data/projectDetails";
import {
  getInitialLanguage,
  getLanguage,
  getLocalizedHref,
  languageChangeEventName,
  languageStorageKey,
} from "@/lib/language";
import Link from "next/link";
import { useEffect, useState } from "react";

const PROJECTS_TO_SHOW = 3;
const copyByLanguage = {
  pl: {
    ariaLabel: "Wyróżnione projekty Pawła Drojeckiego",
    eyebrow: "Nie Google Ads",
    title: "Reklama, ale moja",
    badge: "100% klik",
    description:
      "Sponsorowane przez moje własne projekty. Zero remarketingu, dużo Reacta, trochę backendu i konkretne case studies.",
    featured: "Wyróżniony",
    hire: "ZATRUDNIJ MNIE",
    footer: "AdBlock tu nic nie da",
  },
  en: {
    ariaLabel: "Featured projects by Paweł Drojecki",
    eyebrow: "Not Google Ads",
    title: "An ad, but mine",
    badge: "100% click",
    description:
      "Sponsored by my own projects. No remarketing, plenty of React, some backend and concrete case studies.",
    featured: "Featured",
    hire: "HIRE ME",
    footer: "AdBlock cannot help here",
  },
} satisfies Record<ProjectLanguage, Record<string, string>>;

const shuffleProjects = () => {
  const shuffledProjects = [...projectDetails];

  for (let index = shuffledProjects.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledProjects[index], shuffledProjects[randomIndex]] = [
      shuffledProjects[randomIndex],
      shuffledProjects[index],
    ];
  }

  return shuffledProjects.slice(0, PROJECTS_TO_SHOW);
};

export const ProjectAdRail = () => {
  const [language, setLanguage] = useState<ProjectLanguage>(getInitialLanguage);
  const [advertisedProjects, setAdvertisedProjects] = useState(
    projectDetails.slice(0, PROJECTS_TO_SHOW)
  );
  const copy = copyByLanguage[language];

  useEffect(() => {
    setAdvertisedProjects(shuffleProjects());
  }, []);

  useEffect(() => {
    const syncLanguage = () => setLanguage(getInitialLanguage());
    const syncLanguageFromStorage = (event: StorageEvent) => {
      if (event.key === languageStorageKey) {
        setLanguage(getLanguage(event.newValue));
      }
    };
    const syncLanguageFromEvent = (event: Event) => {
      setLanguage(getLanguage((event as CustomEvent<string>).detail));
    };

    window.addEventListener("popstate", syncLanguage);
    window.addEventListener("storage", syncLanguageFromStorage);
    window.addEventListener(languageChangeEventName, syncLanguageFromEvent);

    return () => {
      window.removeEventListener("popstate", syncLanguage);
      window.removeEventListener("storage", syncLanguageFromStorage);
      window.removeEventListener(languageChangeEventName, syncLanguageFromEvent);
    };
  }, []);

  return (
    <aside
      aria-label={copy.ariaLabel}
      className="fixed right-6 top-28 z-20 hidden w-72 flex-col gap-3 rounded-md border-2 border-black bg-white p-3 shadow-[5px_5px_0_0_#000] min-[1440px]:flex"
    >
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 pb-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
            {copy.eyebrow}
          </p>
          <h2 className="text-xl font-bold leading-tight">
            {copy.title}
          </h2>
        </div>
        <span className="rounded-md bg-accent px-2 py-1 text-xs font-bold">
          {copy.badge}
        </span>
      </div>

      <p className="text-sm leading-6 text-gray-700">
        {copy.description}
      </p>

      <div className="flex flex-col gap-2">
        {advertisedProjects.map((project) => {
          const localizedProject = getLocalizedProject(project, language);
          const isFeatured = isFeaturedProject(project.slug);

          return (
            <Link
              key={project.slug}
              href={
                getLocalizedHref(`/projekty/${project.slug}/`, language) ??
                `/projekty/${project.slug}/`
              }
              className={`group rounded-md border p-3 no-underline hover:border-black hover:bg-white ${
                isFeatured
                  ? "border-black bg-white"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-bold leading-tight text-black">
                      {localizedProject.title}
                    </p>
                    {isFeatured ? (
                      <span className="rounded-md bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-black">
                        {copy.featured}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-600">
                    {localizedProject.summary}
                  </p>
                </div>
                <span className="mt-1 shrink-0 text-black group-hover:text-accent">
                  <Icon iconName="openTab" size={14} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href={getLocalizedHref("/#zatrudnij-mnie", language) ?? "/#zatrudnij-mnie"}
        className="rounded-md bg-accent px-4 py-3 text-center font-bold text-black no-underline shadow-[3px_3px_0_0_#000] hover:bg-accent/80"
      >
        {copy.hire}
      </Link>

      <p className="text-center text-[11px] font-bold uppercase text-gray-500">
        {copy.footer}
      </p>
    </aside>
  );
};
