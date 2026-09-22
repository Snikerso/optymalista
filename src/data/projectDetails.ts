import { PortfolioType, Technologies } from "@/types";

export type ProjectDetail = {
  slug: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  lead: string;
  categories: PortfolioType[];
  technologies: Technologies[];
  problem: string;
  solution: string;
  responsibilities: string[];
  effects: string[];
  gallery: {
    title: string;
    caption: string;
    theme: "commerce" | "mobile" | "platform" | "studio" | "data" | "brand";
  }[];
  externalLink?: string;
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "juli-jogi",
    title: "Juli Jogi",
    role: "Backend developer / DevOps",
    period: "wrz 2026 - obecnie",
    summary:
      "Kompletna platforma do jogi: strona, zaplecze aplikacyjne i backend przygotowywane pod obsługę treści, oferty oraz użytkowników.",
    lead:
      "Projekt powstaje jako pełna platforma, nie tylko strona wizytówkowa. Najważniejsze było przygotowanie fundamentu pod treści, kontakt, automatyzację komunikacji i dalszy rozwój produktu.",
    categories: [PortfolioType.WEB_APP],
    technologies: [
      Technologies.NEXT_JS,
      Technologies.REACT,
      Technologies.NEST_JS,
      Technologies.MONGODB,
      Technologies.RESEND,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
    problem:
      "Projekt jogowy potrzebował czytelnej obecności online oraz technicznego zaplecza, które pozwoli rozwijać ofertę, kontakt z użytkownikami i kolejne funkcje bez przebudowy od zera.",
    solution:
      "Przygotowałem strukturę platformy z frontendem, backendem w Nest.js, bazą MongoDB i obsługą komunikacji przez Resend.",
    responsibilities: [
      "Projektowanie architektury aplikacji i podziału na warstwę frontendową oraz backendową.",
      "Przygotowanie backendu pod treści, formularze i integracje komunikacyjne.",
      "Budowa responsywnych widoków i środowiska testowego dla dalszego rozwoju.",
    ],
    effects: [
      "Platforma jest gotowa do rozbudowy o kolejne moduły produktowe.",
      "Projekt ma spójne zaplecze techniczne zamiast jednorazowej strony.",
      "Komunikacja i dane użytkowników mogą być rozwijane w kontrolowany sposób.",
    ],
    gallery: [
      {
        title: "Platforma zajęć",
        caption: "Widok oferty i treści przygotowany pod spokojną, czytelną prezentację.",
        theme: "platform",
      },
      {
        title: "Zaplecze aplikacyjne",
        caption: "Układ backendu i integracji pod formularze, treści oraz kontakt.",
        theme: "data",
      },
    ],
    externalLink: "https://test.julijogi.com/",
  },
  {
    slug: "cleanstrategy",
    title: "CleanStrategy",
    role: "Mobile developer / product builder",
    period: "sty 2024 - obecnie",
    summary:
      "Aplikacja mobilna pomagająca domownikom dzielić obowiązki i ograniczać konflikty wokół sprzątania.",
    lead:
      "CleanStrategy to produkt nastawiony na codzienne użycie: szybkie dodawanie zadań, jasny podział odpowiedzialności i przepływy, które nie przeszkadzają użytkownikowi w zwykłym życiu.",
    categories: [PortfolioType.MOBILE_APP, PortfolioType.WEB_APP],
    technologies: [
      Technologies.REACT_NATIVE,
      Technologies.REACT,
      Technologies.NEST_JS,
      Technologies.MONGODB,
      Technologies.EXPO,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
    problem:
      "Domowe obowiązki często giną w rozmowach, notatkach i domysłach. Produkt musiał zamienić chaotyczne ustalenia w prosty system współpracy.",
    solution:
      "Zaprojektowałem i rozwijałem aplikację mobile/web z przepływami dla zadań, harmonogramów i odpowiedzialności domowników.",
    responsibilities: [
      "Projektowanie logiki produktu i najważniejszych ścieżek użytkownika.",
      "Budowa aplikacji w React Native i Expo z naciskiem na szybkie iterowanie.",
      "Rozwijanie zaplecza w Nest.js i MongoDB pod dane aplikacji.",
    ],
    effects: [
      "Produkt lepiej tłumaczy, kto za co odpowiada w domu.",
      "Architektura pozwala rozwijać aplikację mobilną i webową równolegle.",
      "Najważniejsze funkcje można testować bez dużej bariery wejścia.",
    ],
    gallery: [
      {
        title: "Aplikacja mobilna",
        caption: "Widok zadań, harmonogramów i odpowiedzialności domowników.",
        theme: "mobile",
      },
      {
        title: "Panel webowy",
        caption: "Webowa warstwa produktu pod przegląd i konfigurację danych.",
        theme: "platform",
      },
    ],
    externalLink: "https://app.clean-strategy.com/web",
  },
  {
    slug: "moment-studio",
    title: "Moment Studio",
    role: "Fullstack developer",
    period: "sty 2024 - sty 2024",
    summary:
      "Kompletny sklep internetowy dla Moment Studio, łączący warstwę prezentacyjną marki, sprzedaż produktów i zaplecze backendowe.",
    lead:
      "Projekt łączył stronę marki z pełnym procesem sprzedaży. Ważne było, żeby warstwa wizualna nie była oddzielona od realnej obsługi produktów, zamówień i płatności.",
    categories: [PortfolioType.WEB_APP, PortfolioType.ECOMMERCE],
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
    problem:
      "Studio potrzebowało nie tylko estetycznej strony, ale też działającego sklepu z produktem, płatnością i komunikacją z klientem.",
    solution:
      "Zbudowałem pełny sklep internetowy z frontendem, backendem w Nest.js, MongoDB, płatnościami Stripe i wiadomościami przez Resend.",
    responsibilities: [
      "Przełożenie identyfikacji i kierunku wizualnego na responsywny frontend.",
      "Przygotowanie logiki produktowej, zamówień i płatności.",
      "Połączenie procesu zakupowego z komunikacją mailową.",
    ],
    effects: [
      "Projekt działa jako sklep, a nie wyłącznie wizytówka marki.",
      "Backend daje bazę pod dalszą rozbudowę oferty i procesu obsługi.",
      "Technologie sprzedażowe są spięte z czytelnym doświadczeniem użytkownika.",
    ],
    gallery: [
      {
        title: "Sklep internetowy",
        caption: "Widok produktu i ścieżki zakupowej dla marki kreatywnej.",
        theme: "studio",
      },
      {
        title: "Proces płatności",
        caption: "Zaplecze zamówień, płatności Stripe i komunikacji mailowej.",
        theme: "commerce",
      },
    ],
    externalLink: "https://www.ismomentstudio.com/",
  },
  {
    slug: "jambo",
    title: "Jambo - e-commerce app",
    role: "Frontend developer",
    period: "kwi 2021 - sie 2021",
    summary:
      "Sklep internetowy zbudowany na podstawie projektu graficznego, z naciskiem na przełożenie designu z Figmy na działający kod.",
    lead:
      "Jambo było projektem e-commerce, w którym liczyło się szybkie i dokładne przeniesienie koncepcji wizualnej do działającego frontendu.",
    categories: [PortfolioType.WEB_APP, PortfolioType.ECOMMERCE],
    technologies: [
      Technologies.NEXT_JS,
      Technologies.REACT,
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.TAILWIND_CSS,
    ],
    problem:
      "Projekt sklepu wymagał przełożenia materiałów graficznych i wymagań na działający, responsywny interfejs sprzedażowy.",
    solution:
      "Przygotowałem frontend sklepu, bazując na projekcie z Figmy i wymaganiach produktowych.",
    responsibilities: [
      "Tworzenie widoków sklepu i komponentów e-commerce.",
      "Przygotowanie materiałów oraz wymagań do projektu graficznego.",
      "Tłumaczenie projektu z Figmy na responsywny kod.",
    ],
    effects: [
      "Powstał działający frontend sklepu zgodny z założeniami wizualnymi.",
      "Projekt pokazał praktyczne przejście od designu do kodu.",
      "Interfejs był przygotowany pod dalszą rozbudowę sprzedażową.",
    ],
    gallery: [
      {
        title: "Lista produktów",
        caption: "Kompozycja sklepu z naciskiem na produkt i czytelne CTA.",
        theme: "commerce",
      },
      {
        title: "Frontend z Figmy",
        caption: "Przeniesienie projektu wizualnego do działających komponentów.",
        theme: "brand",
      },
    ],
  },
  {
    slug: "royal-mint",
    title: "Royal Mint",
    role: "Frontend developer at NoA Ignite",
    period: "lip 2024 - obecnie",
    summary:
      "E-commerce dla rynku metali szlachetnych: złota, srebra i platyny.",
    lead:
      "Projekt realizowany przy NoA Ignite dla klienta z UK. To przykład pracy przy komercyjnym systemie enterprise, gdzie ważne są stabilność, utrzymanie i zgodność z istniejącą architekturą.",
    categories: [PortfolioType.WEB_APP],
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.BOOTSTRAP,
      Technologies.AZURE,
    ],
    problem:
      "Rozwijany system e-commerce wymagał utrzymania istniejących rozwiązań, poprawy doświadczenia użytkownika i pracy w ramach legacy codebase.",
    solution:
      "Wspierałem rozwój interfejsów sklepu i komponentów produktowych, dbając o jakość frontendu, zgodność ze standardami i stabilność zmian.",
    responsibilities: [
      "Usprawnianie i utrzymywanie legacy systems.",
      "Debugowanie, optymalizacja oraz dopasowanie frontendu do aktualnych standardów.",
      "Praca z komponentami produktowymi i środowiskiem opartym o Azure.",
    ],
    effects: [
      "Projekt był utrzymywany i rozwijany bez destabilizowania istniejących przepływów.",
      "Kod frontendu był porządkowany i dostosowywany do wymagań klienta enterprise.",
      "Doświadczenie użytkownika w częściach sklepowych było stopniowo ulepszane.",
    ],
    gallery: [
      {
        title: "Enterprise e-commerce",
        caption: "Komponenty produktowe i ścieżki zakupowe dla dużego systemu.",
        theme: "commerce",
      },
      {
        title: "Utrzymanie systemu",
        caption: "Praca z legacy codebase, Reactem, TypeScriptem i Azure.",
        theme: "data",
      },
    ],
    externalLink: "https://www.royalmint.com/",
  },
  {
    slug: "swarmcheck",
    title: "Swarmcheck",
    role: "Fullstack developer",
    period: "cze 2021 - lip 2024",
    summary:
      "Aplikacja webowa wspierająca uporządkowaną, argumentacyjną dyskusję i szybkie sprawdzanie faktów.",
    lead:
      "Swarmcheck łączył pracę z danymi, uprawnieniami i wizualizacją argumentów. Projekt wymagał zarówno interfejsów, jak i backendowych mechanizmów bezpieczeństwa oraz organizacji dostępu.",
    categories: [PortfolioType.WEB_APP],
    technologies: [
      Technologies.REACT,
      Technologies.NODE_JS,
      Technologies.EXPRESS,
      Technologies.D3_JS,
      Technologies.AZURE,
    ],
    problem:
      "Użytkownicy potrzebowali narzędzia do porządkowania dyskusji, pracy na argumentach i szybkiego sprawdzania informacji w kontrolowanym środowisku.",
    solution:
      "Rozwijałem aplikację webową z autorskim systemem RBAC, endpointami backendowymi i wizualizacjami grafowymi opartymi o D3.js.",
    responsibilities: [
      "Projektowanie i implementacja systemu autoryzacji RBAC.",
      "Budowa endpointów backendowych do pracy z danymi.",
      "Tworzenie interfejsów i wizualizacji grafowych wspierających analizę argumentów.",
    ],
    effects: [
      "Aplikacja lepiej porządkowała role, uprawnienia i przepływy danych.",
      "Wizualizacje pomagały użytkownikom rozumieć relacje między argumentami.",
      "System zyskał solidniejsze fundamenty dla pracy zespołowej.",
    ],
    gallery: [
      {
        title: "Mapa argumentów",
        caption: "Wizualizacja relacji i struktury dyskusji oparta o grafy.",
        theme: "data",
      },
      {
        title: "Kontrola dostępu",
        caption: "Role, uprawnienia i backendowe endpointy do pracy z danymi.",
        theme: "platform",
      },
    ],
    externalLink: "https://app.swarmcheck.ai/public",
  },
];

export const projectDetailsBySlug = projectDetails.reduce<
  Record<string, ProjectDetail>
>((projectsBySlug, project) => {
  projectsBySlug[project.slug] = project;

  return projectsBySlug;
}, {});
