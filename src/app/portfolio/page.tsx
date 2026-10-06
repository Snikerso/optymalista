"use client";

import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import type { PortfolioItemProps } from "@/components/molecules/PortfolioItem";
import type { ProjectLanguage } from "@/data/projectDetails";
import { Technologies, getTechnologyLabel } from "@/data/technologies";
import { getLocalizedHref } from "@/lib/language";
import { useSiteLanguage } from "@/lib/useSiteLanguage";
import { PortfolioType } from "@/types";
import { TechStackTable } from "@/components/organisms/TechStackTable";
import { ProjectList } from "@/app/projekty/ProjectsPageContent";

type LocalizedPortfolioItem = PortfolioItemProps & {
  translated?: Partial<
    Pick<
      PortfolioItemProps,
      | "title"
      | "role"
      | "description"
      | "relatedProject"
      | "status"
      | "highlights"
      | "caseStudyLink"
      | "link"
    >
  >;
};

const getLocalizedPortfolioItem = (
  item: LocalizedPortfolioItem,
  language: ProjectLanguage
): PortfolioItemProps => {
  const { translated, ...baseItem } = item;
  const localizedItem = language === "en" && translated
    ? { ...baseItem, ...translated }
    : baseItem;

  return {
    ...localizedItem,
    language,
    caseStudyLink: getLocalizedHref(localizedItem.caseStudyLink, language),
    link: localizedItem.link,
    relatedProject: localizedItem.relatedProject
      ? {
          ...localizedItem.relatedProject,
          link:
            getLocalizedHref(localizedItem.relatedProject.link, language) ??
            localizedItem.relatedProject.link,
        }
      : undefined,
  };
};

const experienceItems: LocalizedPortfolioItem[] = [
  {
    title: "Właściciel",
    role: "TrisztiLab · Samozatrudnienie",
    companyLink: "https://www.trisztilab.com/",
    description: "Tworzę szkołę warsztat z technologią.",
    types: [PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2026-04-01"),
    endDate: undefined,
    technologies: [
      Technologies.REACT,
      Technologies.NEXT_JS,
      Technologies.TYPESCRIPT,
      Technologies.MENTORING,
    ],
    highlights: [
      "Poznań, woj. wielkopolskie · praca hybrydowa.",
      "Rozwój własnej inicjatywy łączącej edukację, warsztaty i praktyczne wykorzystanie technologii.",
    ],
    link: "https://www.trisztilab.com/",
    translated: {
      title: "Owner",
      role: "TrisztiLab · Self-employed",
      description: "I build a workshop school that connects education with technology.",
      highlights: [
        "Poznań, Greater Poland · hybrid work.",
        "Developing my own initiative combining education, workshops and practical use of technology.",
      ],
    },
  },
  {
    title: "Frontend Web Developer",
    role: "NoA Ignite Poland · Samozatrudnienie",
    companyLink: "https://noaignite.com/",
    relatedProject: {
      name: "The Royal Mint",
      link: "/projekty/royal-mint/",
    },
    description:
      "Praca frontendowa przy utrzymaniu i rozwoju systemów dla klienta z UK.",
    types: [PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2024-07-01"),
    endDate: undefined,
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.BOOTSTRAP,
      Technologies.AZURE,
      Technologies.AUTH0,
      Technologies.GOOGLE_ANALYTICS,
    ],
    highlights: [
      "Praca zdalna.",
      "Usprawnianie i utrzymywanie legacy systems, debugowanie oraz optymalizacja codebase.",
      "Dbanie o zgodność z nowoczesnymi standardami przy użyciu React i technologii Azure.",
      "Wsparcie integracji Google Analytics i analityki dla środowiska e-commerce.",
    ],
    link: "https://www.royalmint.com/",
    translated: {
      role: "NoA Ignite Poland · Self-employed",
      description:
        "Frontend work on maintaining and developing systems for a UK client.",
      highlights: [
        "Remote work.",
        "Improving and maintaining legacy systems, debugging and optimizing the codebase.",
        "Keeping the frontend aligned with modern standards using React and Azure technologies.",
        "Supporting Google Analytics and analytics work in an e-commerce environment.",
      ],
    },
  },
  {
    title: "Instruktor",
    role: "Will Code Academy · Umowa o dzieło/kontrakt",
    companyLink: "https://willcodeacademy.com/",
    description:
      "Prowadzenie zajęć i współtworzenie materiałów edukacyjnych dla osób uczących się programowania.",
    types: [PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2025-08-01"),
    technologies: [
      Technologies.REACT,
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.MENTORING,
    ],
    highlights: [
      "Kraków, woj. małopolskie · praca zdalna.",
      "Projektowanie metodyki nauczania upraszczającej trudne koncepcje programistyczne.",
      "Prowadzenie praktycznych lekcji i mentoring dla początkujących developerów.",
    ],
    translated: {
      title: "Instructor",
      role: "Will Code Academy · Contract",
      description:
        "Teaching classes and co-creating educational materials for people learning programming.",
      highlights: [
        "Kraków, Lesser Poland · remote work.",
        "Designed a teaching methodology that simplified difficult programming concepts.",
        "Led practical lessons and mentored beginner developers.",
      ],
    },
  },
  {
    title: "Fullstack Developer (React, Node)",
    role: "Swarmcheck · Niepełny etat",
    companyLink: "https://www.swarmcheck.ai/home",
    description:
      "Rozwój systemu do szybkiego sprawdzania faktów, zarządzania danymi i pracy z argumentacją.",
    types: [PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2021-06-01"),
    endDate: new Date("2024-07-01"),
    technologies: [
      Technologies.AZURE,
      Technologies.EXPRESS,
      Technologies.NODE_JS,
      Technologies.D3_JS,
      Technologies.REACT,
    ],
    highlights: [
      "Kraków, woj. małopolskie · praca zdalna.",
      "Stworzenie od podstaw zaawansowanego systemu autoryzacji RBAC.",
      "Projektowanie systemu wizualizacji grafowej opartego o D3.js oraz bezpiecznych endpointów backendowych.",
    ],
    translated: {
      role: "Swarmcheck · Part-time",
      description:
        "Development of a system for rapid fact-checking, data management and argument analysis.",
      highlights: [
        "Kraków, Lesser Poland · remote work.",
        "Built an advanced RBAC authorization system from scratch.",
        "Designed D3.js graph visualization flows and secure backend endpoints.",
      ],
    },
  },
  {
    title: "Programista front-end",
    role: "Neurodio · Staż",
    companyLink: "https://www.neurodio.com/",
    description:
      "Prace frontendowe przy stronach i interfejsach, z naciskiem na wdrażanie projektów graficznych do działających widoków.",
    types: [PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2020-09-01"),
    endDate: new Date("2020-09-01"),
    technologies: [
      Technologies.HTML5,
      Technologies.CSHARP,
      Technologies.JAVASCRIPT,
      Technologies.REACT,
    ],
    highlights: [
      "Toruń, woj. kujawsko-pomorskie · praca zdalna.",
      "Tłumaczenie koncepcji z Figmy na zoptymalizowane i atrakcyjne wizualnie strony.",
    ],
    translated: {
      title: "Frontend Developer",
      role: "Neurodio · Internship",
      description:
        "Frontend work on websites and interfaces, focused on turning graphic designs into working views.",
      highlights: [
        "Toruń, Kuyavian-Pomeranian · remote work.",
        "Translated Figma concepts into optimized and visually polished pages.",
      ],
    },
  },
  {
    title: "Praktykant na stażu",
    role: "Uniwersytet Mikołaja Kopernika w Toruniu · Praktyka",
    companyLink: "https://icnt.umk.pl/",
    description:
      "Praktyka zawodowa realizowana na Uniwersytecie Mikołaja Kopernika w Toruniu.",
    types: [PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2020-06-01"),
    endDate: new Date("2020-06-01"),
    technologies: [Technologies.HTML5, Technologies.JAVASCRIPT],
    highlights: ["Toruń, woj. kujawsko-pomorskie."],
    link: "https://icnt.umk.pl/",
    translated: {
      title: "Intern",
      role: "Nicolaus Copernicus University in Toruń · Internship",
      description:
        "Professional internship completed at Nicolaus Copernicus University in Toruń.",
      highlights: ["Toruń, Kuyavian-Pomeranian."],
    },
  },
];

const linkedInMessageUrl = "https://www.linkedin.com/messaging/compose/";
const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  ""
);

const portfolioCopyByLanguage = {
  pl: {
    nav: [
      "Intro",
      "Wyróżnione",
      "Firmy",
      "Projekty",
      "Doświadczenie",
      "Stack",
      "Kontakt",
    ],
    title: "Portfolio",
    eyebrow: "React · Next.js · Nest.js · Product development",
    intro:
      "Jestem Paweł Drojecki. Projektuję i buduję aplikacje webowe, mobile oraz zaplecze techniczne produktów, które mają działać nie tylko w demo, ale też w prawdziwym użyciu.",
    introSecond:
      "Mam doświadczenie w projektach edukacyjnych, e-commerce, aplikacjach fact-checkingowych, stronach brandowych i systemach legacy. Lubię moment, w którym niejasny pomysł zmienia się w konkretny interfejs, sprawny backend i produkt, który użytkownik rozumie bez instrukcji.",
    companies: "Firmy",
    companiesDescription: "Miejsca, w których pracowałem i pracuję.",
    stack: "Stack",
    stackDescription: "Technologie i obszary, z którymi pracuję najczęściej.",
    hireEyebrow: "Kontakt",
    hireTitle: "Porozmawiajmy o współpracy",
    hireText:
      "Jeśli masz produkt, sklep, aplikację albo trudny frontend do ogarnięcia, odezwij się do mnie bezpośrednio.",
    whatsAppMessage:
      "Cześć Paweł, chcę pogadać o współpracy przy projekcie.",
    send: "Wyślij wiadomość",
    experience: "Doświadczenie",
    projects: "Projekty",
    featuredEyebrow: "Case studies",
    featuredTitle: "Wyróżnione projekty",
    featuredDescription:
      "Najmocniejsze realizacje pokazujące enterprise e-commerce, produkt mobile/web i pełny sklep internetowy.",
    quickNavAria: "Szybka nawigacja po portfolio",
    previousFeatured: "Poprzedni wyróżniony projekt",
    nextFeatured: "Następny wyróżniony projekt",
    showFeaturedProject: "Pokaż projekt",
    caseStudy: "Zobacz case study",
    positions: "pozycji",
  },
  en: {
    nav: [
      "Intro",
      "Featured",
      "Companies",
      "Projects",
      "Experience",
      "Stack",
      "Contact",
    ],
    title: "Portfolio",
    eyebrow: "React · Next.js · Nest.js · Product development",
    intro:
      "I am Paweł Drojecki. I design and build web applications, mobile products and technical backends that need to work beyond a demo.",
    introSecond:
      "My experience spans education, e-commerce, fact-checking tools, brand websites and legacy systems. I enjoy turning unclear product ideas into concrete interfaces, reliable backend flows and software users can understand without instructions.",
    companies: "Companies",
    companiesDescription: "Places where I have worked and where I work now.",
    stack: "Stack",
    stackDescription: "Technologies and areas I work with most often.",
    hireEyebrow: "Contact",
    hireTitle: "Talk about collaboration",
    hireText:
      "If you have a product, store, mobile app or difficult frontend that needs care, message me directly.",
    whatsAppMessage:
      "Hi Paweł, I would like to talk about working together on a project.",
    send: "Send message",
    experience: "Experience",
    projects: "Projects",
    featuredEyebrow: "Case studies",
    featuredTitle: "Featured projects",
    featuredDescription:
      "The strongest examples: enterprise e-commerce, a mobile/web product and a full online store.",
    quickNavAria: "Portfolio quick navigation",
    previousFeatured: "Previous featured project",
    nextFeatured: "Next featured project",
    showFeaturedProject: "Show project",
    caseStudy: "Read case study",
    positions: "items",
  },
} satisfies Record<ProjectLanguage, Record<string, string | string[] | { label: string; href: string }[]>>;

const getContactUrl = (language: ProjectLanguage) => {
  if (!whatsAppNumber) {
    return linkedInMessageUrl;
  }

  const message = portfolioCopyByLanguage[language].whatsAppMessage;
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
};

export default function PortfolioPage() {
  const language = useSiteLanguage();
  const copy = portfolioCopyByLanguage[language];
  const hasWhatsAppContact = Boolean(whatsAppNumber);
  const experience = experienceItems.map((item) => getLocalizedPortfolioItem(item, language));
  return (
    <div className="flex flex-col gap-16 pb-12">
      <section id="intro" className="max-w-2xl">
        <p className="text-sm text-gray-500">Fullstack Developer</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Paweł Drojecki</h1>
        <p className="mt-5 text-lg leading-8 text-gray-700">{copy.intro}</p>
        <nav aria-label={copy.quickNavAria} className="mt-6 flex flex-wrap gap-6 text-sm font-semibold">
          <a href="#projekty" className="underline underline-offset-4">{copy.projects}</a>
          <a href="#doswiadczenie" className="underline underline-offset-4">{copy.experience}</a>
          <a href="#stack" className="underline underline-offset-4">{language === "pl" ? "Technologie" : "Tech stack"}</a>
          <a href="#kontakt" className="underline underline-offset-4">{language === "pl" ? "Kontakt" : "Contact"}</a>
        </nav>
      </section>
      <section id="projekty" className="scroll-mt-24">
        <h2 className="mb-6 text-2xl font-semibold">{copy.projects}</h2>
        <ProjectList language={language} />
      </section>
      <section id="doswiadczenie" className="scroll-mt-24">
        <h2 className="mb-6 text-2xl font-semibold">{copy.experience}</h2>
        <div className="divide-y divide-gray-200">
          {experience.map((item) => (
            <article key={item.title} className="py-5 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold">{item.title}</h3>
                <span className="text-sm text-gray-500">{[item.startDate, item.endDate].filter(Boolean).map((date) => date instanceof Date ? date.toLocaleDateString(language === "pl" ? "pl-PL" : "en-GB", { month: "short", year: "numeric" }) : date).join(" – ")}{!item.endDate && (language === "pl" ? " – obecnie" : " – present")}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {item.companyLink ? <a href={item.companyLink} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-black">{(item.role ?? "").split(" · ")[0]} ↗</a> : (item.role ?? "").split(" · ")[0]}
                {(item.role ?? "").includes(" · ") && ` · ${(item.role ?? "").split(" · ").slice(1).join(" · ")}`}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-700">{item.description}</p>
              {(item.highlights?.length || item.technologies.length > 0) && <details className="mt-3 text-sm text-gray-600">
                <summary className="w-fit cursor-pointer">{language === "pl" ? "Szczegóły" : "Details"}</summary>
                <div className="mt-3 max-w-3xl space-y-3 leading-6">
                  {item.highlights?.length && <ul className="list-disc pl-5">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
                  <p>{item.technologies.map((technology) => getTechnologyLabel(technology, language)).join(" · ")}</p>
                  {item.caseStudyLink && <a href={item.caseStudyLink} className="underline underline-offset-4">{language === "pl" ? "Zobacz projekt" : "View project"}</a>}
                </div>
              </details>}
            </article>
          ))}
        </div>
      </section>
      <section id="stack" className="scroll-mt-24">
        <h2 className="mb-6 text-2xl font-semibold">{language === "pl" ? "Technologie" : "Tech stack"}</h2>
        <TechStackTable language={language} />
      </section>
      <section id="kontakt" className="scroll-mt-24 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-semibold">{copy.hireTitle}</h2>
        <p className="mt-3 max-w-xl leading-7 text-gray-600">{copy.hireText}</p>
        <TrackedAnchor href={getContactUrl(language)} target="_blank" rel="noreferrer" eventName={hasWhatsAppContact ? "whatsapp_open" : "linkedin_open"} eventParams={{ source: "portfolio_contact", language }} className="mt-5 inline-block rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800">{copy.send} ↗</TrackedAnchor>
      </section>
    </div>
  );
}
