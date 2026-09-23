"use client";

import { Icon } from "@/components/atoms/Icon";
import { projectDetailsBySlug } from "@/data/projectDetails";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaLinkedin } from "react-icons/fa";

const featuredProjects = [
  projectDetailsBySlug["knitting-counter-pro"],
  projectDetailsBySlug["royal-mint"],
  projectDetailsBySlug.cleanstrategy,
  projectDetailsBySlug["moment-studio"],
];

export default function Home() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = featuredProjects[activeProjectIndex];
  const activeProjectImage = activeProject.gallery[0];

  const showPreviousProject = () => {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1
    );
  };

  const showNextProject = () => {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === featuredProjects.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="flex min-h-[60vh] w-full min-w-0 flex-col justify-center gap-10">
      <section className="flex min-w-0 flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold uppercase text-gray-500">
            Frontend / Fullstack / Product
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Paweł Drojecki
          </h1>
        </div>

        <div className="flex max-w-2xl min-w-0 flex-col gap-4 text-lg leading-8">
          <p>
            Projektuję i buduję aplikacje webowe, mobile oraz zaplecze
            techniczne produktów, które mają działać nie tylko w demo, ale też
            w prawdziwym użyciu.
          </p>
          <p className="text-gray-700">
            Najczęściej pracuję z React.js, Next.js, React Native, Node.js,
            Nest.js i TypeScriptem. Łączę frontend z backendem, integracjami,
            analityką, DevOpsem i myśleniem produktowym, żeby dowozić
            rozwiązania gotowe do realnego użycia.
          </p>
        </div>

        <div className="flex min-w-0 flex-wrap gap-3">
          <Link
            href="#zatrudnij-mnie"
            className="rounded-md border-2 border-black bg-accent px-4 py-2 font-bold text-black shadow-[3px_3px_0_0_#000] hover:bg-accent/80"
          >
            ZATRUDNIJ MNIE
          </Link>
          <Link
            href="/portfolio"
            className="rounded-md bg-accent px-4 py-2 font-bold text-black hover:bg-accent/80"
          >
            Zobacz portfolio
          </Link>
          <a
            href="https://www.linkedin.com/in/pawel-drojecki/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-black px-4 py-2 font-bold hover:text-accent"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </section>

      <section className="grid min-w-0 gap-3 sm:grid-cols-3">
        {["Web apps", "Mobile apps", "Backend & DevOps"].map((item) => (
          <div key={item} className="rounded-md border-2 border-black p-4">
            <p className="text-sm font-bold uppercase text-gray-600">{item}</p>
          </div>
        ))}
      </section>

      <section className="flex min-w-0 flex-col gap-4 rounded-md border-2 border-black p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold uppercase text-gray-500">
              Wyróżnione projekty
            </p>
            <h2 className="text-2xl font-bold">Case studies</h2>
            <p className="text-sm leading-6 text-gray-600">
              Najmocniejsze realizacje: enterprise e-commerce, produkt
              mobile/web i pełny sklep internetowy.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Poprzedni projekt"
              onClick={showPreviousProject}
              className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white hover:bg-accent"
            >
              <FaArrowLeft size={14} />
            </button>
            <button
              type="button"
              aria-label="Następny projekt"
              onClick={showNextProject}
              className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-accent hover:bg-accent/80"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

        <article className="grid min-w-0 gap-4 rounded-md bg-gray-50 p-3 sm:p-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-md border-2 border-black bg-gray-950">
            <div className="flex items-start justify-between gap-3">
              <div className="absolute z-10 flex flex-wrap gap-2 p-4">
                {activeProject.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-md bg-accent px-2 py-1 text-xs font-bold uppercase text-black"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <span className="absolute right-4 top-4 z-10 rounded-md bg-black/70 px-2 py-1 text-xs font-bold text-white">
                {activeProjectIndex + 1}/{featuredProjects.length}
              </span>
            </div>
            {activeProjectImage?.imageSrc ? (
              <img
                src={activeProjectImage.imageSrc}
                alt={activeProjectImage.imageAlt ?? activeProject.title}
                className="aspect-[16/10] w-full object-cover"
              />
            ) : null}
          </div>

          <div className="flex min-w-0 flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold leading-tight">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-bold text-gray-600">
                  {activeProject.role}
                </p>
              </div>
              <p className="text-sm leading-6 text-gray-800">
                {activeProject.summary}
              </p>
              <div className="grid gap-2 text-sm leading-6">
                <p>
                  <strong>Problem:</strong> {activeProject.problem}
                </p>
                <p className="text-gray-700">
                  <strong>Rozwiązanie:</strong> {activeProject.solution}
                </p>
                <p className="text-gray-700">
                  <strong>Efekt:</strong> {activeProject.effects[0]}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.slice(0, 5).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-800"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/projekty/${activeProject.slug}/`}
                className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-bold text-black hover:bg-accent/80"
              >
                <span>Zobacz case study</span>
                <Icon iconName="openTab" size={16} />
              </Link>
              <div className="flex gap-1">
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.slug}
                    type="button"
                    aria-label={`Pokaż projekt ${project.title}`}
                    onClick={() => setActiveProjectIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeProjectIndex === index
                        ? "w-8 bg-accent"
                        : "w-2.5 bg-gray-300 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section
        id="zatrudnij-mnie"
        className="min-w-0 scroll-mt-28 rounded-md border-2 border-black p-4 sm:p-6"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold uppercase text-gray-500">
            Odwrócona rekrutacja
          </p>
          <h2 className="text-3xl font-bold leading-tight">Zatrudnij mnie</h2>
          <p className="max-w-2xl text-sm leading-6 text-gray-700">
            Tym razem to nie ja składam papiery. Jeśli masz produkt, sklep,
            aplikację albo trudny frontend do ogarnięcia, zostaw sobie szybki
            brief i odezwij się do mnie na LinkedInie.
          </p>
        </div>

        <form className="mt-5 grid gap-4" aria-label="Formularz zatrudnienia">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-bold">
              Firma albo projekt
              <input
                name="company"
                type="text"
                placeholder="np. sklep, SaaS, aplikacja mobile"
                className="rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-black"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-bold">
              Tryb współpracy
              <select
                name="workMode"
                className="rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-black"
                defaultValue=""
              >
                <option value="" disabled>
                  Wybierz najlepszą opcję
                </option>
                <option>Frontend / React / Next.js</option>
                <option>Fullstack / Nest.js / MongoDB</option>
                <option>Mobile / React Native</option>
                <option>Produkt, audyt i dowożenie</option>
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-bold">
            Dlaczego właśnie ja mam wejść do gry?
            <textarea
              name="brief"
              rows={4}
              placeholder="Krótko: problem, cel, deadline, stack i co ma działać lepiej."
              className="resize-none rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-black"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-4">
            <a
              href="https://www.linkedin.com/in/pawel-drojecki/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 font-bold text-black hover:bg-accent/80"
            >
              <FaLinkedin size={18} />
              Wyślij zaproszenie
            </a>
            <Link
              href="/portfolio"
              className="rounded-md border-2 border-black px-4 py-2 font-bold hover:text-accent"
            >
              Sprawdź dowody
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
