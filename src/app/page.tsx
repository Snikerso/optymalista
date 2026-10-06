"use client";

import { TrackedAnchor, TrackedLink } from "@/components/analytics/TrackedLink";
import { Icon } from "@/components/atoms/Icon";
import {
  getLocalizedHref,
  type SiteLanguage,
} from "@/lib/language";
import { useSiteLanguage } from "@/lib/useSiteLanguage";
import { getLocalizedProject, projectDetailsBySlug } from "@/data/projectDetails";
import { getTechnologyLabel } from "@/data/technologies";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const featuredProjects = [
  projectDetailsBySlug["royal-mint"],
  projectDetailsBySlug.cleanstrategy,
  projectDetailsBySlug["moment-studio"],
];

const linkedInMessageUrl = "https://www.linkedin.com/messaging/compose/";
const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  ""
);

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
    pathsTitle: "Wybierz najkrótszą ścieżkę",
    paths: [
      {
        label: "Dla rekrutera",
        title: "Zobacz CV",
        text: "Szybki przegląd doświadczenia, stacku, odpowiedzialności i dopasowanych wersji CV.",
        href: "/resume",
      },
      {
        label: "Dla klienta",
        title: "Zobacz portfolio",
        text: "Projekty pokazane przez problem, proces, zakres prac i rezultat produktu.",
        href: "/portfolio",
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
      "Jeśli masz produkt, sklep, aplikację albo trudny frontend do ogarnięcia, odezwij się do mnie bezpośrednio.",
    whatsAppMessage:
      "Cześć Paweł, chcę pogadać o współpracy przy projekcie.",
    send: "Wyślij wiadomość",
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
    pathsTitle: "Choose the shortest path",
    paths: [
      {
        label: "For recruiters",
        title: "View resume",
        text: "A quick route through experience, stack, responsibilities and targeted resume versions.",
        href: "/resume",
      },
      {
        label: "For clients",
        title: "View portfolio",
        text: "Projects framed by the problem, process, scope of work and product result.",
        href: "/portfolio",
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
      "If you have a product, store, mobile app or difficult frontend that needs care, message me directly.",
    whatsAppMessage:
      "Hi Paweł, I would like to talk about working together on a project.",
    send: "Send message",
  },
} satisfies Record<SiteLanguage, Record<string, unknown>>;

const getContactUrl = (language: SiteLanguage) => {
  if (!whatsAppNumber) {
    return linkedInMessageUrl;
  }

  const message = copyByLanguage[language].whatsAppMessage;
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
};

export default function Home() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const language = useSiteLanguage();
  const activeProject = getLocalizedProject(
    featuredProjects[activeProjectIndex],
    language
  );
  const activeProjectImage = activeProject.gallery[0];
  const copy = copyByLanguage[language];
  const hasWhatsAppContact = Boolean(whatsAppNumber);

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
    <div className="flex min-h-[60vh] w-full min-w-0 flex-col justify-center">
      <section className="relative left-1/2 -mt-5 w-screen -translate-x-1/2 overflow-hidden bg-white sm:-mt-12">
        <div className="pointer-events-none absolute inset-0 bg-[url('/hero-pattern.svg')] bg-[length:560px_auto] bg-center opacity-95" />
        <div className="relative mx-auto grid w-full max-w-[calc(var(--max-width)+6rem)] min-w-0 items-center gap-8 px-5 pb-0 pt-9 sm:px-12 sm:pt-16 md:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] md:gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)] lg:gap-12">
          <div className="relative z-20 flex min-w-0 flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-ibm text-sm font-bold uppercase text-gray-500">
                {copy.eyebrow}
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
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
                className="whitespace-nowrap rounded-md border-2 border-black bg-accent px-3 py-2 text-sm font-bold text-black shadow-[3px_3px_0_0_#000] hover:bg-accent/80 sm:px-4 sm:text-base"
              >
                {copy.primaryCta}
              </TrackedLink>
              <TrackedAnchor
                href="https://www.linkedin.com/in/pawel-drojecki/"
                target="_blank"
                rel="noreferrer"
                eventName="linkedin_open"
                eventParams={{ source: "home_hero", language }}
                className="inline-flex whitespace-nowrap items-center gap-2 rounded-md border-2 border-black px-3 py-2 text-sm font-bold hover:text-accent sm:px-4 sm:text-base"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </TrackedAnchor>
            </div>
          </div>

          <div className="relative z-0 min-h-[26rem] overflow-visible sm:min-h-[34rem] md:min-h-[38rem]">
            <div className="pointer-events-none absolute -inset-x-20 -top-10 bottom-0 z-0 font-ibm text-4xl font-medium leading-none text-accent">
              <span className="absolute left-[8%] top-[16%]">+</span>
              <span className="absolute right-[22%] top-[17%]">+</span>
              <span className="absolute left-0 top-[43%]">-</span>
              <span className="absolute right-[6%] top-[36%]">-</span>
              <span className="absolute left-[18%] bottom-[22%]">+</span>
              <span className="absolute right-[2%] bottom-[16%]">-</span>
            </div>
            <div className="pointer-events-none absolute -right-[12%] top-[26%] z-0 font-mono text-2xl font-bold leading-10 text-gray-600">
              <p>{"// build"}</p>
              <p>{"// iterate"}</p>
              <p>{"// ship"}</p>
            </div>
            <Image
              src="/pawel.png"
              alt="Paweł Drojecki"
              width={2000}
              height={3000}
              priority
              unoptimized
              className="absolute bottom-0 left-1/2 z-10 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom sm:h-[108%] md:h-[112%]"
            />
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-accent py-12 sm:py-14">
        <div className="mx-auto grid w-full max-w-[var(--max-width)] min-w-0 gap-3 px-5 sm:grid-cols-2 sm:px-12">
          {copy.paths.map((path) => (
            <TrackedLink
              key={path.label}
              href={getLocalizedHref(path.href, language) ?? path.href}
              eventName="portfolio_path_select"
              eventParams={{ path: path.label, language }}
              className="group relative overflow-hidden rounded-md border-2 border-black bg-white p-4 transition-transform hover:-translate-y-0.5 sm:p-5"
            >
              <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-[length:420px_auto] bg-center opacity-35" />
              <div className="relative flex min-h-44 flex-col justify-between gap-5">
                <div>
                  <h2 className="text-2xl font-bold leading-tight">
                    {path.title}
                  </h2>
                  <p className="mt-3 max-w-md pr-8 text-sm leading-6 text-gray-700 sm:pr-16 lg:max-w-sm">
                    {path.text}
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center self-end rounded-md border-2 border-black bg-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <FaArrowUp className="rotate-45" size={16} />
                </span>
              </div>
            </TrackedLink>
          ))}
        </div>
      </section>

      <section className="mt-12 min-w-0" aria-label="Case studies">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">{copy.featuredTitle}</h2>
          <div className="flex items-center gap-3">
            <span className="text-xs tabular-nums text-gray-500" aria-live="polite">{activeProjectIndex + 1} / {featuredProjects.length}</span>
            <button type="button" aria-label={copy.previousProject} onClick={showPreviousProject} className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100"><FaArrowLeft size={12} /></button>
            <button type="button" aria-label={copy.nextProject} onClick={showNextProject} className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100"><FaArrowRight size={12} /></button>
          </div>
        </div>
        <article className="grid items-center gap-6 md:grid-cols-[1.2fr_1fr]">
          {activeProjectImage?.imageSrc && <TrackedLink href={getLocalizedHref(`/projekty/${activeProject.slug}/`, language) ?? `/projekty/${activeProject.slug}/`} eventName="case_study_open" eventParams={{source:"home_featured_image",project:activeProject.slug,language}} className="overflow-hidden rounded-lg bg-gray-50">
            <Image src={activeProjectImage.imageSrc} alt={activeProjectImage.imageAlt ?? activeProject.title} width={800} height={500} unoptimized className={`aspect-[8/5] w-full ${activeProjectImage.imageFit === "contain" ? "object-contain" : "object-cover"}`} />
          </TrackedLink>}
          <div>
            <h3 className="text-2xl font-semibold">{activeProject.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{activeProject.role}</p>
            <p className="mt-4 text-sm leading-6 text-gray-700">{activeProject.summary}</p>
            <p className="mt-3 text-xs leading-5 text-gray-500">{activeProject.technologies.slice(0,5).map((technology) => getTechnologyLabel(technology,language)).join(" · ")}</p>
            <TrackedLink href={getLocalizedHref(`/projekty/${activeProject.slug}/`,language) ?? `/projekty/${activeProject.slug}/`} eventName="case_study_open" eventParams={{source:"home_featured",project:activeProject.slug,language}} className="mt-5 inline-block text-sm font-semibold underline underline-offset-4">{copy.caseStudyCta} ↗</TrackedLink>
          </div>
        </article>
      </section>

      <section
        id="zatrudnij-mnie"
        className="mt-10 min-w-0 scroll-mt-28 rounded-md border-2 border-black p-4 sm:p-6"
      >
        <div className="flex flex-col gap-2">
          <p className="font-ibm text-sm font-bold uppercase text-gray-500">
            {copy.hireEyebrow}
          </p>
          <h2 className="text-3xl font-bold leading-tight">{copy.hireTitle}</h2>
          <p className="max-w-2xl text-sm leading-6 text-gray-700">
            {copy.hireText}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-4">
          <TrackedAnchor
            href={getContactUrl(language)}
            target="_blank"
            rel="noreferrer"
            eventName={hasWhatsAppContact ? "whatsapp_open" : "linkedin_open"}
            eventParams={{ source: "home_contact", language }}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 font-bold text-black hover:bg-accent/80"
          >
            {hasWhatsAppContact ? (
              <FaWhatsapp size={18} />
            ) : (
              <FaLinkedin size={18} />
            )}
            {copy.send}
          </TrackedAnchor>
        </div>
      </section>
    </div>
  );
}
