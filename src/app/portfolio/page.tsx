"use client";

import {
  TrackedAnchor,
  TrackedLink,
} from "@/components/analytics/TrackedLink";
import {
  PortfolioItem,
  type PortfolioItemProps,
} from "@/components/molecules/PortfolioItem";
import { Icon } from "@/components/atoms/Icon";
import {
  getLocalizedProject,
  getProjectLanguage,
  type ProjectLanguage,
  projectDetailsBySlug,
} from "@/data/projectDetails";
import { Technologies, technologyGroups } from "@/data/technologies";
import { PortfolioType } from "@/types";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaLinkedin } from "react-icons/fa";

const experienceItems: PortfolioItemProps[] = [
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
  },
  {
    title: "Business Card Projects",
    role: "Samozatrudnienie",
    description:
      "Realizacja prostych, estetycznych stron wizytówkowych tłumaczących projekty z Figmy na działające strony.",
    types: [PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2019-01-01"),
    endDate: new Date("2021-04-01"),
    technologies: [
      Technologies.REACT,
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.TAILWIND_CSS,
    ],
    highlights: [
      "Praca zdalna.",
      "Tworzenie zoptymalizowanych i wizualnie dopracowanych web pages dla małych projektów.",
    ],
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
  },
];

const projectItems: PortfolioItemProps[] = [
  {
    id: "projekt-knitting-counter-pro",
    title: "Knitting Counter Pro",
    role: "Garmin Connect IQ developer / product builder",
    status: "In progress",
    description:
      "Aplikacja na zegarki Garmin do liczenia rzędów w robótkach ręcznych, z projektami, rundami, daily goal, streakiem i vintage interfejsem dopasowanym do okrągłej tarczy.",
    types: [PortfolioType.WATCH_APP],
    startDate: new Date("2026-09-01"),
    endDate: undefined,
    technologies: [
      Technologies.GARMIN_CONNECT_IQ,
      Technologies.MONKEY_C,
    ],
    highlights: [
      "Problem: licznik rzędów musiał działać szybko na nadgarstku, bez telefonu i bez gubienia kontekstu projektów.",
      "Rozwiązanie: aplikacja Garmin Connect IQ z lokalnym zapisem, rundami, daily goal, streakiem i dużymi łukowymi przyciskami.",
      "Efekt: dopracowany licznik w stylu vintage, testowany na kilku modelach zegarka i przygotowany pod publikację w Garmin Connect IQ Store.",
    ],
    caseStudyLink: "/projekty/knitting-counter-pro/",
  },
  {
    id: "projekt-royal-mint",
    title: "Royal Mint",
    role: "Frontend developer at NoA Ignite",
    status: "Wyróżniony",
    description:
      "Enterprise e-commerce dla rynku metali szlachetnych: złota, srebra i platyny, rozwijany przy NoA Ignite dla klienta z UK.",
    types: [PortfolioType.WEB_APP],
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
      "Problem: utrzymanie i rozwój dużego systemu e-commerce w środowisku legacy.",
      "Rozwiązanie: rozwój komponentów produktowych, debugowanie, optymalizacja frontendu i wsparcie Google Analytics.",
      "Efekt: stabilne zmiany w komercyjnym projekcie enterprise oraz lepsze podstawy pod analizę zachowań użytkowników.",
    ],
    link: "https://www.royalmint.com/",
    caseStudyLink: "/projekty/royal-mint/",
  },
  {
    id: "projekt-cleanstrategy",
    title: "CleanStrategy",
    role: "Mobile developer / product builder",
    status: "Wyróżniony",
    description:
      "Produkt mobile/web pomagający domownikom dzielić obowiązki i ograniczać konflikty wokół sprzątania.",
    types: [PortfolioType.MOBILE_APP, PortfolioType.WEB_APP],
    startDate: new Date("2024-01-01"),
    endDate: undefined,
    technologies: [
      Technologies.REACT_NATIVE,
      Technologies.REACT,
      Technologies.NEST_JS,
      Technologies.MONGODB,
      Technologies.EXPO,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
    highlights: [
      "Problem: domowe obowiązki były rozproszone między rozmowami, notatkami i domysłami.",
      "Rozwiązanie: aplikacja z zadaniami, harmonogramami i odpowiedzialnością domowników.",
      "Efekt: produktowy fundament pod aplikację mobilną i webową rozwijaną iteracyjnie.",
    ],
    link: "https://app.clean-strategy.com/web",
    caseStudyLink: "/projekty/cleanstrategy/",
  },
  {
    id: "projekt-moment-studio",
    title: "Moment Studio",
    role: "Fullstack developer",
    status: "Wyróżniony",
    description:
      "Kompletny sklep internetowy dla Moment Studio, łączący markę, sprzedaż produktów, płatności i zaplecze backendowe.",
    types: [PortfolioType.WEB_APP, PortfolioType.ECOMMERCE],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-01"),
    technologies: [
      Technologies.REACT,
      Technologies.NEST_JS,
      Technologies.MONGODB,
      Technologies.STRIPE,
      Technologies.RESEND,
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.TAILWIND_CSS,
    ],
    highlights: [
      "Problem: marka potrzebowała sklepu, a nie tylko estetycznej wizytówki.",
      "Rozwiązanie: frontend, backend w Nest.js, MongoDB, płatności Stripe i wiadomości przez Resend.",
      "Efekt: pełny proces sprzedażowy spięty z czytelnym doświadczeniem użytkownika.",
    ],
    link: "https://www.ismomentstudio.com/",
    caseStudyLink: "/projekty/moment-studio/",
  },
  {
    id: "projekt-juli-jogi",
    title: "Juli Jogi",
    role: "Backend developer / DevOps",
    status: "In progress",
    description:
      "Kompletna platforma do jogi: strona, zaplecze aplikacyjne i backend przygotowywane pod obsługę treści, oferty oraz użytkowników.",
    types: [PortfolioType.WEB_APP],
    startDate: new Date("2026-09-18"),
    endDate: undefined,
    technologies: [
      Technologies.NEXT_JS,
      Technologies.REACT,
      Technologies.NEST_JS,
      Technologies.MONGODB,
      Technologies.RESEND,
      Technologies.GOOGLE_ANALYTICS,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
    highlights: [
      "Projekt jest aktualnie w trakcie realizacji i rozwijany na środowisku testowym.",
      "Prace obejmują frontend, backend w Nest.js, bazę MongoDB oraz przygotowanie środowiska pod wdrożenie.",
      "Wykonałem pełny setup Google Analytics i integracji analitycznych pod mierzenie ruchu oraz zachowań użytkowników.",
    ],
    link: "https://test.julijogi.com/",
    caseStudyLink: "/projekty/juli-jogi/",
  },
  {
    title: "Jambo - e-commerce app",
    role: "Frontend developer",
    description:
      "Sklep internetowy zbudowany na podstawie projektu graficznego, z naciskiem na przełożenie designu z Figmy na działający kod.",
    types: [PortfolioType.WEB_APP, PortfolioType.ECOMMERCE],
    startDate: new Date("2021-04-01"),
    endDate: new Date("2021-08-01"),
    technologies: [
      Technologies.NEXT_JS,
      Technologies.REACT,
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.TAILWIND_CSS,
    ],
    highlights: [
      "Tworzenie systemu sklepu internetowego.",
      "Przygotowanie materiałów i wymagań do projektu graficznego.",
      "Przeniesienie projektu graficznego z Figmy do kodu.",
    ],
    link: "https://jamboathletic.com/shop",
    caseStudyLink: "/projekty/jambo/",
  },
  {
    title: "Swarmcheck",
    role: "Fullstack developer",
    description:
      "Aplikacja webowa wspierająca uporządkowaną, argumentacyjną dyskusję i szybkie sprawdzanie faktów.",
    types: [PortfolioType.WEB_APP],
    startDate: new Date("2021-06-01"),
    endDate: new Date("2024-07-01"),
    technologies: [
      Technologies.REACT,
      Technologies.NODE_JS,
      Technologies.EXPRESS,
      Technologies.D3_JS,
      Technologies.AZURE,
    ],
    highlights: [
      "Autorski system RBAC i backendowe endpointy do pracy z danymi.",
      "Interfejsy oraz wizualizacje grafowe dla pracy z argumentami.",
    ],
    link: "https://app.swarmcheck.ai/public",
    caseStudyLink: "/projekty/swarmcheck/",
  },
];

const companyItems = [
  {
    name: "TrisztiLab",
    role: "Właściciel",
    period: "kwi 2026 - obecnie",
    status: "Teraz",
    link: "https://www.trisztilab.com/",
  },
  {
    name: "NoA Ignite Poland",
    role: "Frontend Web Developer",
    period: "lip 2024 - obecnie",
    status: "Teraz",
    link: "https://noaignite.com/",
  },
  {
    name: "Will Code Academy",
    role: "Instruktor",
    period: "paz 2023 - sie 2025",
    status: "Wczesniej",
    link: "https://willcodeacademy.com/",
  },
  {
    name: "Swarmcheck",
    role: "Fullstack Developer",
    period: "cze 2021 - lip 2024",
    status: "Wczesniej",
    link: "https://www.swarmcheck.ai/home",
  },
  {
    name: "Neurodio",
    role: "Programista front-end",
    period: "wrz 2020",
    status: "Wczesniej",
    link: "https://www.neurodio.com/",
  },
  {
    name: "Uniwersytet Mikolaja Kopernika w Toruniu",
    role: "Praktykant",
    period: "cze 2020",
    status: "Wczesniej",
    link: "https://icnt.umk.pl/",
  },
];

const visibleSkillsCount = 4;
const featuredProjectItems = projectItems.filter(
  (project) => project.status === "Wyróżniony"
);

const portfolioSectionIds = [
  "intro",
  "wyroznione",
  "firmy",
  "stack",
  "doswiadczenie",
  "projekty",
] as const;

const portfolioCopyByLanguage = {
  pl: {
    nav: ["Intro", "Wyróżnione", "Firmy", "Stack", "Doświadczenie", "Projekty"],
    title: "Portfolio",
    eyebrow: "React · Next.js · Nest.js · Product development",
    intro:
      "Jestem Paweł Drojecki. Projektuję i buduję aplikacje webowe, mobile oraz zaplecze techniczne produktów, które mają działać nie tylko w demo, ale też w prawdziwym użyciu.",
    introSecond:
      "Mam doświadczenie w projektach edukacyjnych, e-commerce, aplikacjach fact-checkingowych, stronach brandowych i systemach legacy. Lubię moment, w którym niejasny pomysł zmienia się w konkretny interfejs, sprawny backend i produkt, który użytkownik rozumie bez instrukcji.",
    pathsTitle: "Najkrótsza ścieżka",
    recruiterPath: "Dla rekrutera: doświadczenie, stack i CV",
    clientPath: "Dla klienta: problem, proces i efekt",
    cvTitle: "CV dopasowane do rozmowy",
    cvLinks: [
      { label: "CV Frontend", href: "/resume/empik-frontend-developer/pl" },
      {
        label: "CV React Native",
        href: "/resume/netguru-react-native-developer-freelance/pl",
      },
      {
        label: "Resume EN",
        href: "/resume/netguru-react-native-developer-freelance/en",
      },
    ],
    bioPl: "Bio PL",
    bioEn: "Bio EN",
    bioPlText:
      "Buduję aplikacje webowe i produktowe od interfejsu po backend. Łączę React, Next.js, Nest.js i myślenie produktowe, żeby szybko dowozić działające rozwiązania.",
    bioEnText:
      "I build web and product applications from interface to backend, combining React, Next.js, Nest.js and product thinking to ship useful, working software.",
    companies: "Firmy",
    companiesDescription: "Miejsca, w których pracowałem i pracuję.",
    stack: "Stack",
    stackDescription: "Technologie i obszary, z którymi pracuję najczęściej.",
    experience: "Doświadczenie",
    projects: "Projekty",
    featuredEyebrow: "Case studies",
    featuredTitle: "Wyróżnione projekty",
    featuredDescription:
      "Najmocniejsze realizacje pokazujące enterprise e-commerce, produkt mobile/web i pełny sklep internetowy.",
    caseStudy: "Zobacz case study",
    evidence: "Dowody",
    decisions: "Decyzje",
    positions: "pozycji",
  },
  en: {
    nav: ["Intro", "Featured", "Companies", "Stack", "Experience", "Projects"],
    title: "Portfolio",
    eyebrow: "React · Next.js · Nest.js · Product development",
    intro:
      "I am Paweł Drojecki. I design and build web applications, mobile products and technical backends that need to work beyond a demo.",
    introSecond:
      "My experience spans education, e-commerce, fact-checking tools, brand websites and legacy systems. I enjoy turning unclear product ideas into concrete interfaces, reliable backend flows and software users can understand without instructions.",
    pathsTitle: "Shortest path",
    recruiterPath: "For recruiters: experience, stack and resume",
    clientPath: "For clients: problem, process and result",
    cvTitle: "Resume matched to the conversation",
    cvLinks: [
      { label: "Frontend resume", href: "/resume/empik-frontend-developer/en" },
      {
        label: "React Native resume",
        href: "/resume/netguru-react-native-developer-freelance/en",
      },
      { label: "Polish CV", href: "/resume/empik-frontend-developer/pl" },
    ],
    bioPl: "Bio PL",
    bioEn: "Bio EN",
    bioPlText:
      "Buduję aplikacje webowe i produktowe od interfejsu po backend. Łączę React, Next.js, Nest.js i myślenie produktowe, żeby szybko dowozić działające rozwiązania.",
    bioEnText:
      "I build web and product applications from interface to backend, combining React, Next.js, Nest.js and product thinking to ship useful, working software.",
    companies: "Companies",
    companiesDescription: "Places where I have worked and where I work now.",
    stack: "Stack",
    stackDescription: "Technologies and areas I work with most often.",
    experience: "Experience",
    projects: "Projects",
    featuredEyebrow: "Case studies",
    featuredTitle: "Featured projects",
    featuredDescription:
      "The strongest examples: enterprise e-commerce, a mobile/web product and a full online store.",
    caseStudy: "Read case study",
    evidence: "Evidence",
    decisions: "Decisions",
    positions: "items",
  },
} satisfies Record<ProjectLanguage, Record<string, string | string[] | { label: string; href: string }[]>>;

export default function PortfolioPage() {
  const [expandedSkillGroups, setExpandedSkillGroups] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>(
    portfolioSectionIds[0],
  );
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
  const [language, setLanguage] = useState<ProjectLanguage>("pl");
  const copy = portfolioCopyByLanguage[language];
  const portfolioNavItems = portfolioSectionIds.map((id, index) => ({
    id,
    label: copy.nav[index],
  }));

  const toggleSkillGroup = (title: string) => {
    setExpandedSkillGroups((currentGroups) =>
      currentGroups.includes(title)
        ? currentGroups.filter((groupTitle) => groupTitle !== title)
        : [...currentGroups, title]
    );
  };

  const showPreviousFeaturedProject = () => {
    setActiveFeaturedIndex((currentIndex) =>
      currentIndex === 0 ? featuredProjectItems.length - 1 : currentIndex - 1
    );
  };

  const showNextFeaturedProject = () => {
    setActiveFeaturedIndex((currentIndex) =>
      currentIndex === featuredProjectItems.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    setLanguage(getProjectLanguage(new URLSearchParams(window.location.search).get("lang") ?? undefined));
  }, []);

  useEffect(() => {
    const sectionIds = [...portfolioSectionIds];

    const setSectionFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (sectionIds.includes(hash as (typeof portfolioSectionIds)[number])) {
        setActiveSection(hash);
      }
    };

    setSectionFromHash();
    window.addEventListener("hashchange", setSectionFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((firstEntry, secondEntry) => {
            return (
              firstEntry.boundingClientRect.top -
              secondEntry.boundingClientRect.top
            );
          })[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("hashchange", setSectionFromHash);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col pb-20 md:pb-0">
      <PortfolioQuickNav
        activeSection={activeSection}
        items={portfolioNavItems}
        onSelect={setActiveSection}
      />
      <div className="flex flex-col gap-12">
        <section id="intro" className="flex scroll-mt-28 flex-col gap-2">
          <div className="flex w-fit items-center gap-1 rounded-md border border-gray-300 p-1 text-xs font-bold">
            {(["pl", "en"] as ProjectLanguage[]).map((item) => (
              <a
                key={item}
                href={item === "pl" ? "/portfolio" : "/portfolio/?lang=en"}
                className={`rounded px-2 py-1 uppercase ${
                  language === item ? "bg-accent text-black" : "text-gray-600"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <h1 className="text-2xl font-bold">{copy.title}</h1>
          <p className="text-sm font-bold uppercase text-gray-500">
            {copy.eyebrow}
          </p>
          <p className="text-md leading-7">{copy.intro}</p>
          <p className="text-md leading-7">{copy.introSecond}</p>
          <TrackedAnchor
            href="https://www.linkedin.com/in/pawel-drojecki/"
            target="_blank"
            rel="noreferrer"
            eventName="linkedin_open"
            eventParams={{ source: "portfolio_intro", language }}
            className="inline-flex w-fit items-center gap-2 font-bold hover:text-accent"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </TrackedAnchor>
          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            <TrackedLink
              href={
                language === "en"
                  ? "/portfolio/?lang=en#doswiadczenie"
                  : "/portfolio/#doswiadczenie"
              }
              eventName="portfolio_path_select"
              eventParams={{ path: "recruiter", language }}
              className="rounded-md border-2 border-black p-3 font-bold hover:bg-gray-50"
            >
              {copy.recruiterPath}
            </TrackedLink>
            <TrackedLink
              href={
                language === "en"
                  ? "/portfolio/?lang=en#wyroznione"
                  : "/portfolio/#wyroznione"
              }
              eventName="portfolio_path_select"
              eventParams={{ path: "client", language }}
              className="rounded-md border-2 border-black p-3 font-bold hover:bg-gray-50"
            >
              {copy.clientPath}
            </TrackedLink>
          </div>
          <div className="rounded-md border-2 border-black p-3">
            <h2 className="text-sm font-bold uppercase text-gray-500">
              {copy.cvTitle}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {copy.cvLinks.map((link) => (
                <TrackedLink
                  key={link.href}
                  href={link.href}
                  eventName="cv_open"
                  eventParams={{ source: "portfolio_intro", label: link.label, language }}
                  className="rounded-md bg-accent px-3 py-2 text-sm font-bold text-black hover:bg-accent/80"
                >
                  {link.label}
                </TrackedLink>
              ))}
            </div>
          </div>
          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs font-bold uppercase text-gray-500">
                {copy.bioPl}
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-800">
                {copy.bioPlText}
              </p>
            </div>
            <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs font-bold uppercase text-gray-500">
                {copy.bioEn}
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-800">
                {copy.bioEnText}
              </p>
            </div>
          </div>
        </section>

        <FeaturedProjectsCarousel
          language={language}
          copy={copy}
          activeIndex={activeFeaturedIndex}
          onPrevious={showPreviousFeaturedProject}
          onNext={showNextFeaturedProject}
          onSelect={setActiveFeaturedIndex}
        />

        <section id="firmy" className="flex scroll-mt-28 flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">{copy.companies}</h2>
            <p className="text-sm text-gray-600">
              {copy.companiesDescription}
            </p>
          </div>
          <div className="divide-y-2 divide-gray-200 border-y-2 border-gray-200">
            {companyItems.map((company) => (
              <div
                key={`${company.name}-${company.role}`}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {company.link ? (
                      <a
                        href={company.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-bold hover:text-accent"
                      >
                        <span>{company.name}</span>
                        <Icon iconName="globe" size={16} />
                      </a>
                    ) : (
                      <h3 className="font-bold">{company.name}</h3>
                    )}
                    <span className="text-sm text-gray-500">
                      {company.period}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-700">
                    {company.role}
                  </p>
                </div>
                <div>
                  <span
                    className={`rounded-md px-2 py-1 text-xs font-bold ${
                      company.status === "Teraz"
                        ? "bg-accent text-black"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {company.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="flex scroll-mt-28 flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">{copy.stack}</h2>
            <p className="text-sm text-gray-600">
              {copy.stackDescription}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {technologyGroups.map((group) => (
              <SkillGroup
                key={group.title}
                title={group.title}
                skills={group.skills}
                isExpanded={expandedSkillGroups.includes(group.title)}
                onToggle={() => toggleSkillGroup(group.title)}
              />
            ))}
          </div>
        </section>

        <PortfolioSection
          id="doswiadczenie"
          title={copy.experience}
          positionsLabel={copy.positions}
          items={experienceItems}
        />
        <PortfolioSection
          id="projekty"
          title={copy.projects}
          positionsLabel={copy.positions}
          items={projectItems}
        />
      </div>
    </div>
  );
}

const PortfolioQuickNav = ({
  activeSection,
  items,
  onSelect,
}: {
  activeSection: string;
  items: { id: string; label: string }[];
  onSelect: (sectionId: string) => void;
}) => (
  <nav
    aria-label="Szybka nawigacja po portfolio"
    className="fixed bottom-4 left-1/2 z-20 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 overflow-x-auto rounded-md border-2 border-black bg-white/95 p-2 shadow-[4px_4px_0_0_#000] backdrop-blur"
  >
    <ul className="flex min-w-max justify-center gap-2">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            aria-current={activeSection === item.id ? "true" : undefined}
            onClick={() => onSelect(item.id)}
            className={`block rounded-md px-3 py-2 text-xs font-bold transition-colors sm:text-sm ${
              activeSection === item.id
                ? "bg-accent text-black"
                : "text-gray-700 hover:bg-accent hover:text-black"
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const FeaturedProjectsCarousel = ({
  language,
  copy,
  activeIndex,
  onPrevious,
  onNext,
  onSelect,
}: {
  language: ProjectLanguage;
  copy: (typeof portfolioCopyByLanguage)[ProjectLanguage];
  activeIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) => {
  const activeProject = featuredProjectItems[activeIndex];
  const baseProjectDetails = Object.values(projectDetailsBySlug).find(
    (project) => activeProject.caseStudyLink === `/projekty/${project.slug}/`,
  );
  const activeProjectDetails = baseProjectDetails
    ? getLocalizedProject(baseProjectDetails, language)
    : undefined;
  const activeProjectImage = activeProjectDetails?.gallery[0];

  return (
    <section
      id="wyroznione"
      className="flex scroll-mt-28 flex-col gap-4 rounded-md border-2 border-black bg-white p-4 sm:p-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold uppercase text-gray-500">
            {copy.featuredEyebrow}
          </p>
          <h2 className="text-xl font-bold">{copy.featuredTitle}</h2>
          <p className="text-sm leading-6 text-gray-600">
            {copy.featuredDescription}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Poprzedni wyróżniony projekt"
            onClick={onPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white hover:bg-accent"
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            type="button"
            aria-label="Następny wyróżniony projekt"
            onClick={onNext}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-accent hover:bg-accent/80"
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      <article className="flex flex-col gap-4 rounded-md bg-gray-50 p-4">
        <div className="relative overflow-hidden rounded-md border-2 border-black bg-white">
          <div className="flex items-start justify-between gap-3">
            <div className="absolute z-10 flex flex-wrap gap-2 p-4">
              {activeProject.types.map((type) => (
                <span
                  key={type}
                  className="rounded-md bg-accent px-2 py-1 text-xs font-bold uppercase text-black"
                >
                  {type}
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

        <div className="grid gap-4 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold leading-tight">
                {activeProjectDetails?.title ?? activeProject.title}
              </h3>
              <p className="text-sm font-bold text-gray-600">
                {activeProjectDetails?.role ?? activeProject.role}
              </p>
            </div>
            <p className="text-sm leading-6 text-gray-800">
              {activeProjectDetails?.summary ?? activeProject.description}
            </p>
            {activeProjectDetails?.proofPoints?.[0] ? (
              <p className="rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-800">
                {copy.evidence}: {activeProjectDetails.proofPoints[0]}
              </p>
            ) : null}
            {activeProjectDetails?.technicalDecisions?.[0] ? (
              <p className="rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-800">
                {copy.decisions}: {activeProjectDetails.technicalDecisions[0]}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-4">
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

            <div className="flex flex-wrap items-center gap-3">
            {baseProjectDetails && (
              <TrackedLink
                href={
                  language === "en"
                    ? `/projekty/${baseProjectDetails.slug}/?lang=en`
                    : `/projekty/${baseProjectDetails.slug}/`
                }
                eventName="case_study_open"
                eventParams={{
                  source: "portfolio_featured",
                  project: baseProjectDetails.slug,
                  language,
                }}
                className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-bold text-black hover:bg-accent/80"
              >
                <span>{copy.caseStudy}</span>
                <Icon iconName="openTab" size={16} />
              </TrackedLink>
            )}
            <div className="flex gap-1">
              {featuredProjectItems.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  aria-label={`Pokaż projekt ${project.title}`}
                  onClick={() => onSelect(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
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
  );
};

const PortfolioSection = ({
  id,
  title,
  positionsLabel,
  items,
}: {
  id: string;
  title: string;
  positionsLabel: string;
  items: PortfolioItemProps[];
}) => (
  <section id={id} className="flex scroll-mt-28 flex-col gap-4">
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-600">
        {items.length} {positionsLabel}
      </p>
    </div>
    <div className="grid gap-4">
      {items.map((item) => (
        <PortfolioItem key={`${title}-${item.title}`} {...item} />
      ))}
    </div>
  </section>
);

const SkillGroup = ({
  title,
  skills,
  isExpanded,
  onToggle,
}: {
  title: string;
  skills: Technologies[];
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const hiddenSkillsCount = skills.length - visibleSkillsCount;
  const visibleSkills = isExpanded
    ? skills
    : skills.slice(0, visibleSkillsCount);

  return (
    <div className="flex flex-col gap-3 rounded-md border-2 border-black p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold uppercase text-gray-500">{title}</h3>
        {hiddenSkillsCount > 0 && (
          <button
            type="button"
            onClick={onToggle}
            className="rounded-md bg-accent px-2 py-1 text-xs font-bold text-black hover:bg-accent/80"
          >
            {isExpanded ? "Pokaż mniej" : `+${hiddenSkillsCount} więcej`}
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {visibleSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
