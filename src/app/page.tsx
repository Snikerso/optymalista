"use client";

import { TrackedAnchor, TrackedLink } from "@/components/analytics/TrackedLink";
import { Icon } from "@/components/atoms/Icon";
import { LanguageSwitcher } from "@/components/atoms/LanguageSwitcher";
import { trackEvent } from "@/lib/analytics";
import {
  getInitialLanguage,
  getLocalizedHref,
  type SiteLanguage,
} from "@/lib/language";
import { getLocalizedProject, projectDetailsBySlug } from "@/data/projectDetails";
import { getTechnologyLabel } from "@/data/technologies";
import { getPortfolioTypeLabel } from "@/types";
import { type FormEvent, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaLinkedin } from "react-icons/fa";

const featuredProjects = [
  projectDetailsBySlug["royal-mint"],
  projectDetailsBySlug.cleanstrategy,
  projectDetailsBySlug["moment-studio"],
];

const linkedInMessageUrl = "https://www.linkedin.com/messaging/compose/";

const copyByLanguage = {
  pl: {
    eyebrow: "Frontend / Fullstack / Product",
    title: "Paweł Drojecki",
    intro:
      "Projektuję i buduję aplikacje webowe, mobile oraz zaplecze techniczne produktów, które mają działać nie tylko w demo, ale też w prawdziwym użyciu.",
    supporting:
      "Najczęściej pracuję z React.js, Next.js, React Native, Node.js, Nest.js i TypeScriptem. Łączę frontend z backendem, integracjami, analityką, DevOpsem i myśleniem produktowym, żeby dowozić rozwiązania gotowe do realnego użycia.",
    primaryCta: "Porozmawiajmy o współpracy",
    portfolioCta: "Zobacz portfolio",
    proofEyebrow: "Dowody zamiast deklaracji",
    proofItems: [
      "Enterprise e-commerce: Royal Mint",
      "Mobile + backend: CleanStrategy",
      "Checkout + Stripe: Moment Studio",
      "Platforma kursowa + analityka: Juli Jogi",
    ],
    pathsTitle: "Wybierz najkrótszą ścieżkę",
    paths: [
      {
        label: "Dla rekrutera",
        title: "Doświadczenie, stack i CV",
        text: "Szybko zobaczysz komercyjne projekty, technologie, zakres odpowiedzialności i dopasowane CV.",
        href: "/portfolio/#doswiadczenie",
      },
      {
        label: "Dla klienta",
        title: "Problem, proces i efekt",
        text: "Najpierw pokazuję, jaki problem był do rozwiązania, co zbudowałem i jaki był rezultat produktu.",
        href: "/portfolio/#wyroznione",
      },
    ],
    cvTitle: "CV dopasowane do kontekstu",
    cvLinks: [
      {
        label: "CV Frontend",
        href: "/resume/empik-frontend-developer/pl",
      },
      {
        label: "CV React Native",
        href: "/resume/netguru-react-native-developer-freelance/pl",
      },
      {
        label: "CV English",
        href: "/resume/netguru-react-native-developer-freelance/en",
      },
    ],
    featuredEyebrow: "Wyróżnione projekty",
    featuredTitle: "Case studies",
    featuredText:
      "Najmocniejsze realizacje: enterprise e-commerce, produkt mobile/web i pełny sklep internetowy.",
    caseStudyCta: "Zobacz case study",
    previousProject: "Poprzedni projekt",
    nextProject: "Następny projekt",
    showProject: "Pokaż projekt",
    hireEyebrow: "Kontakt",
    hireTitle: "Porozmawiajmy o współpracy",
    hireText:
      "Jeśli masz produkt, sklep, aplikację albo trudny frontend do ogarnięcia, zostaw sobie szybki brief i odezwij się do mnie na LinkedInie.",
    companyLabel: "Firma albo projekt",
    companyPlaceholder: "np. sklep, SaaS, aplikacja mobile",
    modeLabel: "Tryb współpracy",
    modePlaceholder: "Wybierz najlepszą opcję",
    briefLabel: "Jaki problem chcesz rozwiązać?",
    briefPlaceholder: "Krótko: problem, cel, deadline, stack i co ma działać lepiej.",
    send: "Wyślij wiadomość",
    proofCta: "Sprawdź dowody",
    copied: "Brief skopiowany",
    hireFormAria: "Formularz zatrudnienia",
    workModeOptions: [
      "Frontend / React / Next.js",
      "Fullstack / Nest.js / MongoDB",
      "Mobile / React Native",
      "Produkt, audyt i dowożenie",
    ],
  },
  en: {
    eyebrow: "Frontend / Fullstack / Product",
    title: "Paweł Drojecki",
    intro:
      "I design and build web apps, mobile products and the technical backend behind products that need to work beyond a demo.",
    supporting:
      "I usually work with React.js, Next.js, React Native, Node.js, Nest.js and TypeScript. I connect frontend, backend, integrations, analytics, DevOps and product thinking to ship useful working software.",
    primaryCta: "Talk about collaboration",
    portfolioCta: "View portfolio",
    proofEyebrow: "Evidence over claims",
    proofItems: [
      "Enterprise e-commerce: Royal Mint",
      "Mobile + backend: CleanStrategy",
      "Checkout + Stripe: Moment Studio",
      "Course platform + analytics: Juli Jogi",
    ],
    pathsTitle: "Choose the shortest path",
    paths: [
      {
        label: "For recruiters",
        title: "Experience, stack and resume",
        text: "A quick route through commercial work, technologies, responsibilities and targeted resumes.",
        href: "/portfolio/#doswiadczenie",
      },
      {
        label: "For clients",
        title: "Problem, process and result",
        text: "A product-first route through the problem, what I built and what changed for the project.",
        href: "/portfolio/#wyroznione",
      },
    ],
    cvTitle: "Resume matched to context",
    cvLinks: [
      {
        label: "Frontend resume",
        href: "/resume/empik-frontend-developer/en",
      },
      {
        label: "React Native resume",
        href: "/resume/netguru-react-native-developer-freelance/en",
      },
      {
        label: "Polish CV",
        href: "/resume/empik-frontend-developer/pl",
      },
    ],
    featuredEyebrow: "Featured projects",
    featuredTitle: "Case studies",
    featuredText:
      "The strongest examples: enterprise e-commerce, a mobile/web product and a full online store.",
    caseStudyCta: "Read case study",
    previousProject: "Previous project",
    nextProject: "Next project",
    showProject: "Show project",
    hireEyebrow: "Contact",
    hireTitle: "Talk about collaboration",
    hireText:
      "If you have a product, store, mobile app or difficult frontend that needs care, prepare a short brief and message me on LinkedIn.",
    companyLabel: "Company or project",
    companyPlaceholder: "for example store, SaaS, mobile app",
    modeLabel: "Collaboration type",
    modePlaceholder: "Choose the best option",
    briefLabel: "What problem should be solved?",
    briefPlaceholder: "Briefly: problem, goal, deadline, stack and what should work better.",
    send: "Send message",
    proofCta: "Check the evidence",
    copied: "Brief copied",
    hireFormAria: "Hiring form",
    workModeOptions: [
      "Frontend / React / Next.js",
      "Fullstack / Nest.js / MongoDB",
      "Mobile / React Native",
      "Product, audit and delivery",
    ],
  },
} satisfies Record<SiteLanguage, Record<string, unknown>>;

const getFormValue = (formData: FormData, name: string) =>
  String(formData.get(name) ?? "").trim();

const buildLinkedInBrief = ({
  brief,
  company,
  workMode,
}: {
  brief: string;
  company: string;
  workMode: string;
}) =>
  [
    "Cześć Paweł, chcę pogadać o współpracy.",
    company ? `Firma/projekt: ${company}` : "",
    workMode ? `Tryb współpracy: ${workMode}` : "",
    brief ? `Brief: ${brief}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

export default function Home() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isBriefCopied, setIsBriefCopied] = useState(false);
  const [language, setLanguage] = useState<SiteLanguage>(getInitialLanguage);
  const activeProject = getLocalizedProject(
    featuredProjects[activeProjectIndex],
    language
  );
  const activeProjectImage = activeProject.gallery[0];
  const copy = copyByLanguage[language];

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

  const openLinkedInMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = buildLinkedInBrief({
      company: getFormValue(formData, "company"),
      workMode: getFormValue(formData, "workMode"),
      brief: getFormValue(formData, "brief"),
    });

    const linkedInWindow = window.open(
      linkedInMessageUrl,
      "_blank",
      "noopener,noreferrer"
    );

    trackEvent("linkedin_open", {
      source: "home_contact_form",
      language,
      work_mode: getFormValue(formData, "workMode"),
    });

    if (!linkedInWindow) {
      window.location.href = linkedInMessageUrl;
    }

    void navigator.clipboard
      .writeText(message)
      .then(() => setIsBriefCopied(true))
      .catch(() => setIsBriefCopied(false));
  };

  return (
    <div className="flex min-h-[60vh] w-full min-w-0 flex-col justify-center gap-10">
      <section className="flex min-w-0 flex-col gap-6">
        <LanguageSwitcher
          language={language}
          onLanguageChange={setLanguage}
        />
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold uppercase text-gray-500">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            {copy.title}
          </h1>
        </div>

        <div className="flex max-w-2xl min-w-0 flex-col gap-4 text-lg leading-8">
          <p>{copy.intro}</p>
          <p className="text-gray-700">{copy.supporting}</p>
        </div>

        <div className="flex min-w-0 flex-wrap gap-3">
          <TrackedLink
            href="#zatrudnij-mnie"
            eventName="cta_click"
            eventParams={{ source: "home_hero", label: "contact", language }}
            className="rounded-md border-2 border-black bg-accent px-4 py-2 font-bold text-black shadow-[3px_3px_0_0_#000] hover:bg-accent/80"
          >
            {copy.primaryCta}
          </TrackedLink>
          <TrackedLink
            href={getLocalizedHref("/portfolio", language) ?? "/portfolio"}
            eventName="cta_click"
            eventParams={{ source: "home_hero", label: "portfolio", language }}
            className="rounded-md bg-accent px-4 py-2 font-bold text-black hover:bg-accent/80"
          >
            {copy.portfolioCta}
          </TrackedLink>
          <TrackedAnchor
            href="https://www.linkedin.com/in/pawel-drojecki/"
            target="_blank"
            rel="noreferrer"
            eventName="linkedin_open"
            eventParams={{ source: "home_hero", language }}
            className="inline-flex items-center gap-2 rounded-md border-2 border-black px-4 py-2 font-bold hover:text-accent"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </TrackedAnchor>
        </div>
      </section>

      <section className="grid min-w-0 gap-3 sm:grid-cols-2">
        {copy.paths.map((path) => (
          <TrackedLink
            key={path.label}
            href={getLocalizedHref(path.href, language) ?? path.href}
            eventName="portfolio_path_select"
            eventParams={{ path: path.label, language }}
            className="rounded-md border-2 border-black p-4 transition-colors hover:bg-gray-50"
          >
            <p className="text-xs font-bold uppercase text-gray-500">
              {path.label}
            </p>
            <h2 className="mt-1 text-lg font-bold">{path.title}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">{path.text}</p>
          </TrackedLink>
        ))}
      </section>

      <section className="flex min-w-0 flex-col gap-3 rounded-md border-2 border-black p-4">
        <p className="text-sm font-bold uppercase text-gray-500">
          {copy.proofEyebrow}
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {copy.proofItems.map((item) => (
            <div key={item} className="rounded-md bg-gray-100 px-3 py-2">
              <p className="text-sm font-bold text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex min-w-0 flex-col gap-3 rounded-md border-2 border-black p-4">
        <h2 className="text-xl font-bold">{copy.cvTitle}</h2>
        <div className="flex flex-wrap gap-2">
          {copy.cvLinks.map((link) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              eventName="cv_open"
              eventParams={{ source: "home", label: link.label, language }}
              className="rounded-md bg-accent px-3 py-2 text-sm font-bold text-black hover:bg-accent/80"
            >
              {link.label}
            </TrackedLink>
          ))}
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
              {copy.featuredEyebrow}
            </p>
            <h2 className="text-2xl font-bold">{copy.featuredTitle}</h2>
            <p className="text-sm leading-6 text-gray-600">
              {copy.featuredText}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label={copy.previousProject}
              onClick={showPreviousProject}
              className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white hover:bg-accent"
            >
              <FaArrowLeft size={14} />
            </button>
            <button
              type="button"
              aria-label={copy.nextProject}
              onClick={showNextProject}
              className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-accent hover:bg-accent/80"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

        <article className="flex min-w-0 flex-col gap-4 rounded-md bg-gray-50 p-3 sm:p-4">
          <div className="relative overflow-hidden rounded-md border-2 border-black bg-white">
            <div className="flex items-start justify-between gap-3">
              <div className="absolute z-10 flex flex-wrap gap-2 p-4">
                {activeProject.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-md bg-accent px-2 py-1 text-xs font-bold uppercase text-black"
                  >
                    {getPortfolioTypeLabel(category, language)}
                  </span>
                ))}
              </div>
            </div>
            {activeProjectImage?.imageSrc ? (
              <img
                src={activeProjectImage.imageSrc}
                alt={activeProjectImage.imageAlt ?? activeProject.title}
                className={
                  activeProjectImage.imageFit === "contain"
                    ? "mx-auto block h-auto max-h-[22rem] max-w-full bg-white object-contain"
                    : "block aspect-[16/10] w-full bg-white object-cover"
                }
              />
            ) : null}
          </div>

          <div className="grid min-w-0 gap-4 md:grid-cols-[1fr_1.1fr] md:items-start">
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
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {activeProject.technologies.slice(0, 5).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-800"
                  >
                    {getTechnologyLabel(technology, language)}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
              <TrackedLink
                href={
                  getLocalizedHref(
                    `/projekty/${activeProject.slug}/`,
                    language
                  ) ?? `/projekty/${activeProject.slug}/`
                }
                eventName="case_study_open"
                eventParams={{
                  source: "home_featured",
                  project: activeProject.slug,
                  language,
                }}
                className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-bold text-black hover:bg-accent/80"
              >
                <span>{copy.caseStudyCta}</span>
                <Icon iconName="openTab" size={16} />
              </TrackedLink>
              <div className="flex gap-1">
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.slug}
                    type="button"
                    aria-label={`${copy.showProject} ${
                      getLocalizedProject(project, language).title
                    }`}
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
          </div>
        </article>
      </section>

      <section
        id="zatrudnij-mnie"
        className="min-w-0 scroll-mt-28 rounded-md border-2 border-black p-4 sm:p-6"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold uppercase text-gray-500">
            {copy.hireEyebrow}
          </p>
          <h2 className="text-3xl font-bold leading-tight">{copy.hireTitle}</h2>
          <p className="max-w-2xl text-sm leading-6 text-gray-700">
            {copy.hireText}
          </p>
        </div>

        <form
          className="mt-5 grid gap-4"
          aria-label={copy.hireFormAria}
          onSubmit={openLinkedInMessage}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-bold">
              {copy.companyLabel}
              <input
                name="company"
                type="text"
                placeholder={copy.companyPlaceholder}
                className="rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-black"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-bold">
              {copy.modeLabel}
              <select
                name="workMode"
                className="rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-black"
                defaultValue=""
              >
                <option value="" disabled>
                  {copy.modePlaceholder}
                </option>
                {copy.workModeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-bold">
            {copy.briefLabel}
            <textarea
              name="brief"
              rows={4}
              placeholder={copy.briefPlaceholder}
              className="resize-none rounded-md border border-gray-300 px-3 py-2 font-normal outline-none focus:border-black"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 font-bold text-black hover:bg-accent/80"
            >
              <FaLinkedin size={18} />
              {copy.send}
            </button>
            <TrackedLink
              href={getLocalizedHref("/portfolio", language) ?? "/portfolio"}
              eventName="cta_click"
              eventParams={{ source: "home_contact_form", label: "portfolio", language }}
              className="rounded-md border-2 border-black px-4 py-2 font-bold hover:text-accent"
            >
              {copy.proofCta}
            </TrackedLink>
            {isBriefCopied ? (
              <p className="text-sm font-bold text-gray-600">
                {copy.copied}
              </p>
            ) : null}
          </div>
        </form>
      </section>
    </div>
  );
}
