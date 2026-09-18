"use client";

import {
  PortfolioItem,
  type PortfolioItem as PortfolioItemData,
} from "@/components/molecules/PortfolioItem";
import { Icon } from "@/components/atoms/Icon";
import { PortfolioType, Technologies } from "@/types";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const experienceItems: PortfolioItemData[] = [
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
    description:
      "Praca frontendowa dla The Royal Mint Project przy utrzymaniu i rozwoju systemów dla klienta z UK.",
    types: [PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2024-07-01"),
    endDate: undefined,
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.BOOTSTRAP,
      Technologies.AZURE,
    ],
    highlights: [
      "Praca zdalna.",
      "Usprawnianie i utrzymywanie legacy systems, debugowanie oraz optymalizacja codebase.",
      "Dbanie o zgodność z nowoczesnymi standardami przy użyciu React i technologii Azure.",
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

const projectItems: PortfolioItemData[] = [
  {
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
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
    highlights: [
      "Projekt jest aktualnie w trakcie realizacji i rozwijany na środowisku testowym.",
      "Prace obejmują frontend, backend w Nest.js, bazę MongoDB oraz przygotowanie środowiska pod wdrożenie.",
    ],
    link: "https://test.julijogi.com/",
  },
  {
    title: "CleanStrategy",
    role: "Mobile developer / product builder",
    description:
      "Aplikacja mobilna pomagająca domownikom dzielić obowiązki i ograniczać konflikty wokół sprzątania.",
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
      "Projektowanie przepływów użytkownika dla zadań, harmonogramów i odpowiedzialności domowników.",
      "Budowa aplikacji w React Native i Expo z naciskiem na szybkie iterowanie produktu.",
    ],
    link: "https://app.clean-strategy.com/web",
  },
  {
    title: "Moment Studio",
    role: "Fullstack developer",
    description:
      "Kompletny sklep internetowy dla Moment Studio, łączący warstwę prezentacyjną marki, sprzedaż produktów i zaplecze backendowe.",
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
      "Budowa sklepu z obsługą produktów, zamówień i płatności Stripe.",
      "Połączenie responsywnego frontendu z backendem w Nest.js i bazą MongoDB.",
    ],
    link: "https://www.ismomentstudio.com/",
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
  },
  {
    title: "Royal Mint",
    role: "Frontend developer at NoA Ignite",
    description:
      "E-commerce dla rynku metali szlachetnych: złota, srebra i platyny.",
    types: [PortfolioType.WEB_APP],
    startDate: new Date("2024-07-01"),
    endDate: undefined,
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.BOOTSTRAP,
      Technologies.AZURE,
    ],
    highlights: [
      "Rozwój interfejsu sklepu i komponentów produktowych dla użytkowników kupujących online.",
      "Utrzymanie legacy systems oraz optymalizacja frontendu.",
    ],
    link: "https://www.royalmint.com/",
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

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
      "Styled Components",
      "Razor Pages",
    ],
  },
  {
    title: "Frontend tooling",
    skills: [
      "React Query",
      "React Hook Form",
      "React Formik",
      "D3.js",
      "Figma",
    ],
  },
  {
    title: "Backend i API",
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "MongoDB",
      "REST",
      "gRPC",
      "Swagger API",
      "Sockets",
      "Inversify context",
      "C#",
      "Django",
    ],
  },
  {
    title: "Cloud, DevOps i auth",
    skills: [
      "DevOps",
      "Docker",
      "Microsoft Azure",
      "AWS",
      "DigitalOcean",
      "Descope",
      "Stripe",
      "SendGrid",
      "Resend",
      "RBAC",
    ],
  },
  {
    title: "Edukacja i produkt",
    skills: [
      "Mentoring",
      "Nauczanie programowania",
      "Nauczanie na odległość",
      "Szkolenie prowadzone przez instruktora",
      "Prowadzenie wykładów",
      "Nagrywanie",
      "E-commerce",
      "Scrum",
      "Zarządzanie projektem",
      "Realizowanie projektów",
    ],
  },
  {
    title: "Dane, UX i inne",
    skills: [
      "Python",
      "R",
      "Analiza danych",
      "Analiza danych statystycznych",
      "Statystyka",
      "Nauczanie maszynowe",
      "Badania UX",
      "Eyetracking",
      "Tworzenie witryn internetowych",
      "Projektowanie witryn internetowych",
    ],
  },
];

const visibleSkillsCount = 4;

export default function PortfolioPage() {
  const [expandedSkillGroups, setExpandedSkillGroups] = useState<string[]>([]);

  const toggleSkillGroup = (title: string) => {
    setExpandedSkillGroups((currentGroups) =>
      currentGroups.includes(title)
        ? currentGroups.filter((groupTitle) => groupTitle !== title)
        : [...currentGroups, title]
    );
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <p className="text-md leading-7">
            Jestem Paweł Drojecki. Projektuję i buduję aplikacje webowe,
            mobile oraz zaplecze techniczne produktów, które mają działać nie
            tylko w demo, ale też w prawdziwym użyciu. Najczęściej pracuję z
            React.js, Next.js, React Native, Node.js i TypeScriptem, a obok
            kodu ogarniam też architekturę, integracje, DevOps i sensowny flow
            produktu.
          </p>
          <p className="text-md leading-7">
            Mam doświadczenie w projektach edukacyjnych, e-commerce,
            aplikacjach fact-checkingowych, stronach brandowych i systemach
            legacy. Lubię moment, w którym niejasny pomysł zmienia się w
            konkretny interfejs, sprawny backend i produkt, który użytkownik
            rozumie bez instrukcji.
          </p>
          <a
            href="https://www.linkedin.com/in/pawel-drojecki/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 font-bold hover:text-accent"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">Firmy</h2>
            <p className="text-sm text-gray-600">
              Miejsca, w ktorych pracowalem i pracuje.
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

        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">Stack</h2>
            <p className="text-sm text-gray-600">
              Technologie i obszary, z ktorymi pracuje najczęściej.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {skillGroups.map((group) => (
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

        <PortfolioSection title="Doświadczenie" items={experienceItems} />
        <PortfolioSection title="Projekty" items={projectItems} />
      </div>
    </div>
  );
}

const PortfolioSection = ({
  title,
  items,
}: {
  title: string;
  items: PortfolioItemData[];
}) => (
  <section className="flex flex-col gap-4">
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{items.length} pozycji</p>
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
  skills: string[];
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
