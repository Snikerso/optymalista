"use client";

import {
  TrackedAnchor,
  TrackedLink,
} from "@/components/analytics/TrackedLink";
import {
  PortfolioItem,
  type PortfolioItemProps,
} from "@/components/molecules/PortfolioItem";
import { TechStackTable } from "@/components/organisms/TechStackTable";
import { Icon } from "@/components/atoms/Icon";
import {
  getLocalizedProject,
  type ProjectLanguage,
  projectDetailsBySlug,
} from "@/data/projectDetails";
import {
  getTechnologyLabel,
  Technologies,
} from "@/data/technologies";
import { getLocalizedHref } from "@/lib/language";
import { useSiteLanguage } from "@/lib/useSiteLanguage";
import { getPortfolioTypeLabel, PortfolioType } from "@/types";
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

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

type CompanyItem = {
  name: string;
  role: string;
  period: string;
  status: string;
  link: string;
  translated?: Partial<Pick<CompanyItem, "role" | "period" | "status">>;
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

const getLocalizedCompanyItem = (
  item: CompanyItem,
  language: ProjectLanguage
): CompanyItem => {
  if (language === "pl" || !item.translated) {
    return item;
  }

  return {
    ...item,
    ...item.translated,
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

const projectItems: LocalizedPortfolioItem[] = [
  {
    id: "projekt-knitting-counter-pro",
    mediaProjectSlug: "knitting-counter-pro",
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
    translated: {
      status: "In progress",
      description:
        "A Garmin watch app for counting knitting rows, with projects, rounds, daily goal, streak tracking and a vintage interface adapted to a round watch face.",
      highlights: [
        "Problem: the row counter needed to work quickly on the wrist, without a phone and without losing project context.",
        "Solution: a Garmin Connect IQ app with local storage, rounds, daily goal, streak tracking and large curved buttons.",
        "Result: a polished vintage-style counter tested on several watch models and prepared for Garmin Connect IQ Store publication.",
      ],
    },
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
    translated: {
      status: "Featured",
      description:
        "Enterprise e-commerce for the precious metals market, developed at NoA Ignite for a UK client.",
      highlights: [
        "Problem: maintaining and developing a large e-commerce system in a legacy environment.",
        "Solution: product component development, debugging, frontend optimization and Google Analytics support.",
        "Result: stable changes in a commercial enterprise project and better foundations for user-behavior analysis.",
      ],
    },
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
    translated: {
      status: "Featured",
      description:
        "A mobile/web product that helps households share chores and reduce friction around cleaning responsibilities.",
      highlights: [
        "Problem: household responsibilities were scattered across conversations, notes and assumptions.",
        "Solution: an app with tasks, schedules and clear household responsibility.",
        "Result: a product foundation for an iteratively developed mobile and web app.",
      ],
    },
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
    translated: {
      status: "Featured",
      description:
        "A complete online store for Moment Studio, connecting brand presentation, product sales, payments and backend operations.",
      highlights: [
        "Problem: the brand needed a working store, not only a polished visual showcase.",
        "Solution: frontend, Nest.js backend, MongoDB, Stripe payments and Resend email communication.",
        "Result: a complete sales flow connected with a clear user experience.",
      ],
    },
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
    translated: {
      status: "In progress",
      description:
        "A complete yoga platform: website, application backend and technical foundation for content, offer and user management.",
      highlights: [
        "The project is currently in progress and developed in a test environment.",
        "The scope includes frontend, Nest.js backend, MongoDB and deployment-oriented environment setup.",
        "I completed the Google Analytics and analytics integration setup for measuring traffic and user behavior.",
      ],
    },
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
    translated: {
      description:
        "An e-commerce frontend built from a visual design, focused on translating Figma layouts into working code.",
      highlights: [
        "Built the online store interface.",
        "Prepared materials and requirements for the visual design process.",
        "Translated the Figma design into responsive code.",
      ],
    },
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
    translated: {
      description:
        "A web application supporting structured argument-based discussion and fast fact-checking.",
      highlights: [
        "Custom RBAC authorization system and backend endpoints for data workflows.",
        "Interfaces and graph visualizations for working with arguments.",
      ],
    },
  },
];

const companyItems = [
  {
    name: "TrisztiLab",
    role: "Właściciel",
    period: "kwi 2026 - obecnie",
    status: "Teraz",
    link: "https://www.trisztilab.com/",
    translated: {
      role: "Owner",
      period: "Apr 2026 - present",
      status: "Now",
    },
  },
  {
    name: "NoA Ignite Poland",
    role: "Frontend Web Developer",
    period: "lip 2024 - obecnie",
    status: "Teraz",
    link: "https://noaignite.com/",
    translated: {
      period: "Jul 2024 - present",
      status: "Now",
    },
  },
  {
    name: "Will Code Academy",
    role: "Instruktor",
    period: "paz 2023 - sie 2025",
    status: "Wczesniej",
    link: "https://willcodeacademy.com/",
    translated: {
      role: "Instructor",
      period: "Oct 2023 - Aug 2025",
      status: "Previous",
    },
  },
  {
    name: "Swarmcheck",
    role: "Fullstack Developer",
    period: "cze 2021 - lip 2024",
    status: "Wczesniej",
    link: "https://www.swarmcheck.ai/home",
    translated: {
      period: "Jun 2021 - Jul 2024",
      status: "Previous",
    },
  },
  {
    name: "Neurodio",
    role: "Programista front-end",
    period: "wrz 2020",
    status: "Wczesniej",
    link: "https://www.neurodio.com/",
    translated: {
      role: "Frontend Developer",
      period: "Sep 2020",
      status: "Previous",
    },
  },
  {
    name: "Uniwersytet Mikołaja Kopernika w Toruniu",
    role: "Praktykant",
    period: "cze 2020",
    status: "Wczesniej",
    link: "https://icnt.umk.pl/",
    translated: {
      role: "Intern",
      period: "Jun 2020",
      status: "Previous",
    },
  },
];

const prioritizedProjectSlugs = [
  "royal-mint",
  "juli-jogi",
  "moment-studio",
  "swarmcheck",
] as const;

const getPortfolioProjectSlug = (project: LocalizedPortfolioItem) =>
  project.caseStudyLink?.replace(/^\/projekty\//, "").replace(/\/$/, "") ?? "";

const getPortfolioProjectOrder = (
  project: LocalizedPortfolioItem,
  currentIndex: number
) => {
  const priority = prioritizedProjectSlugs.indexOf(
    getPortfolioProjectSlug(project) as (typeof prioritizedProjectSlugs)[number]
  );

  return priority === -1
    ? prioritizedProjectSlugs.length + currentIndex
    : priority;
};

const orderedProjectItems = projectItems
  .map((project, index) => ({
    project,
    order: getPortfolioProjectOrder(project, index),
  }))
  .sort(
    (firstProject, secondProject) =>
      firstProject.order - secondProject.order
  )
  .map(({ project }) => project);

const featuredProjectItems = orderedProjectItems.filter(
  (project) => project.status === "Wyróżniony"
);

const linkedInMessageUrl = "https://www.linkedin.com/messaging/compose/";
const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  ""
);

const portfolioSectionIds = [
  "intro",
  "wyroznione",
  "firmy",
  "projekty",
  "doswiadczenie",
  "stack",
  "kontakt",
] as const;

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
  const [activeSection, setActiveSection] = useState<string>(
    portfolioSectionIds[0],
  );
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
  const language = useSiteLanguage();
  const copy = portfolioCopyByLanguage[language];
  const hasWhatsAppContact = Boolean(whatsAppNumber);
  const localizedCompanyItems = companyItems.map((item) =>
    getLocalizedCompanyItem(item, language)
  );
  const localizedExperienceItems = experienceItems.map((item) =>
    getLocalizedPortfolioItem(item, language)
  );
  const localizedProjectItems = orderedProjectItems.map((item) =>
    getLocalizedPortfolioItem(item, language)
  );
  const portfolioNavItems = portfolioSectionIds.map((id, index) => ({
    id,
    label: copy.nav[index],
  }));

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
        ariaLabel={copy.quickNavAria}
        items={portfolioNavItems}
        onSelect={setActiveSection}
      />
      <div className="flex flex-col gap-12">
        <section id="intro" className="flex scroll-mt-28 flex-col gap-2">
          <h1 className="text-2xl font-bold">{copy.title}</h1>
          <p className="font-ibm text-sm font-bold uppercase text-gray-500">
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
            {localizedCompanyItems.map((company) => (
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
                      company.status === "Teraz" || company.status === "Now"
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

        <PortfolioSection
          id="projekty"
          title={copy.projects}
          positionsLabel={copy.positions}
          items={localizedProjectItems}
        />
        <PortfolioSection
          id="doswiadczenie"
          title={copy.experience}
          positionsLabel={copy.positions}
          items={localizedExperienceItems}
        />

        <section id="stack" className="flex scroll-mt-28 flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">{copy.stack}</h2>
            <p className="text-sm text-gray-600">
              {copy.stackDescription}
            </p>
          </div>
          <TechStackTable language={language} />
        </section>

        <section
          id="kontakt"
          className="min-w-0 scroll-mt-28 rounded-md border-2 border-black p-4 sm:p-6"
        >
          <div className="flex flex-col gap-2">
            <p className="font-ibm text-sm font-bold uppercase text-gray-500">
              {copy.hireEyebrow}
            </p>
            <h2 className="text-3xl font-bold leading-tight">
              {copy.hireTitle}
            </h2>
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
              eventParams={{ source: "portfolio_contact", language }}
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
    </div>
  );
}

const PortfolioQuickNav = ({
  activeSection,
  ariaLabel,
  items,
  onSelect,
}: {
  activeSection: string;
  ariaLabel: string;
  items: { id: string; label: string }[];
  onSelect: (sectionId: string) => void;
}) => (
  <nav
    aria-label={ariaLabel}
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
  const featuredProject = featuredProjectItems[activeIndex];
  const activeProject = getLocalizedPortfolioItem(
    featuredProject,
    language
  );
  const baseProjectDetails = Object.values(projectDetailsBySlug).find(
    (project) => featuredProject.caseStudyLink === `/projekty/${project.slug}/`
  );
  const activeProjectDetails = baseProjectDetails
    ? getLocalizedProject(baseProjectDetails, language)
    : undefined;
  const activeProjectImage = activeProjectDetails?.gallery[0];

  return (
    <section
      id="wyroznione"
      className="flex scroll-mt-28 flex-col gap-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-ibm text-xs font-bold uppercase text-gray-500">
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
            aria-label={copy.previousFeatured}
            onClick={onPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-white hover:bg-accent"
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            type="button"
            aria-label={copy.nextFeatured}
            onClick={onNext}
            className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-black bg-accent hover:bg-accent/80"
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      <article className="flex flex-col gap-4 bg-gray-50 p-4">
        <div className="relative overflow-hidden rounded-md border-2 border-black bg-white">
          <div className="flex items-start justify-between gap-3">
            <div className="absolute z-10 flex flex-wrap gap-2 p-4">
              {activeProject.types.map((type) => (
                <span
                  key={type}
                  className="rounded-md bg-accent px-2 py-1 font-ibm text-xs font-bold uppercase text-black"
                >
                  {getPortfolioTypeLabel(type, language)}
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
              {baseProjectDetails && (
                <TrackedLink
                  href={
                    getLocalizedHref(
                      `/projekty/${baseProjectDetails.slug}/`,
                      language
                    ) ?? `/projekty/${baseProjectDetails.slug}/`
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
                    aria-label={`${copy.showFeaturedProject} ${
                      getLocalizedPortfolioItem(project, language).title
                    }`}
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

