import { Technologies } from "@/data/technologies";
import { PortfolioType } from "@/types";

export type ProjectDetail = {
  slug: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  lead: string;
  insideStory?: string;
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
    imageSrc?: string;
    imageAlt?: string;
    imageFit?: "cover" | "contain";
  }[];
  externalLink?: string;
};

export const featuredProjectSlugs = [
  "royal-mint",
  "cleanstrategy",
] as const;

export const isFeaturedProject = (slug: string) =>
  featuredProjectSlugs.includes(slug as (typeof featuredProjectSlugs)[number]);

export const projectDetails: ProjectDetail[] = [
  {
    slug: "knitting-counter-pro",
    title: "Knitting Counter Pro",
    role: "Garmin Connect IQ developer / product builder",
    period: "wrz 2026 - obecnie",
    summary:
      "Aplikacja na zegarki Garmin do liczenia rzędów w robótkach ręcznych, zaprojektowana jako dopracowany licznik z projektami, rundami, daily goal i streakiem.",
    lead:
      "Knitting Counter Pro powstał jako praktyczna aplikacja na nadgarstek: szybka w obsłudze, czytelna na okrągłej tarczy i wygodna w użyciu podczas dziergania lub szydełkowania.",
    insideStory:
      "Pomysł narodził się bardzo domowo: moja dziewczyna miała ręczny licznik rzędów, który często się gubił. Zegarek ma za to zawsze przy sobie, więc naturalnym krokiem było przeniesienie licznika na Garmina.",
    categories: [PortfolioType.WATCH_APP],
    technologies: [
      Technologies.GARMIN_CONNECT_IQ,
      Technologies.MONKEY_C,
    ],
    problem:
      "Osoby pracujące z wzorami rzędowymi potrzebują licznika, który jest zawsze pod ręką, nie wymaga telefonu i nie gubi kontekstu między projektami oraz rundami.",
    solution:
      "Zbudowałem aplikację Garmin Connect IQ z lokalnym zapisem projektów, dużymi łukowymi przyciskami dopasowanymi do tarczy, obsługą rund, celem dziennym i licznikiem streak days.",
    responsibilities: [
      "Projektowanie interfejsu pod małą, okrągłą tarczę zegarka i obsługę dotykową.",
      "Implementacja logiki projektów, liczników, rund, daily goal, streak days i zabezpieczenia przed odejmowaniem poniżej zera.",
      "Testowanie w symulatorze Garmin oraz na kilku modelach zegarka.",
      "Dopracowanie publikacyjnego opisu, prywatności i zakresu funkcji pod Garmin Connect IQ Store.",
    ],
    effects: [
      "Aplikacja działa na zegarku i zapisuje postęp lokalnie bez uprawnień sieciowych.",
      "Interfejs ma vintage charakter, duży licznik i łatwe do trafienia przyciski na bokach tarczy.",
      "Menu projektu pokazuje dzisiejszy postęp względem celu oraz aktualny streak.",
    ],
    gallery: [
      {
        title: "Watch preview",
        caption:
          "Render aplikacji na zegarku Garmin pokazujący główny ekran licznika w kontekście urządzenia.",
        theme: "mobile",
        imageSrc: "/projects/knitting-counter-pro-watch.png",
        imageAlt:
          "Knitting Counter Pro pokazany na zegarku Garmin z ekranem licznika projektu.",
        imageFit: "contain",
      },
      {
        title: "Progress screen",
        caption:
          "Widok postępu z daily goal, dzisiejszymi rzędami i licznikiem streak days.",
        theme: "mobile",
        imageSrc: "/projects/knitting-counter-pro-progress.png",
        imageAlt:
          "Knitting Counter Pro pokazany na zegarku Garmin z ekranem postępu.",
        imageFit: "contain",
      },
    ],
  },
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
      Technologies.GOOGLE_ANALYTICS,
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
      "Pełny setup Google Analytics i integracji analitycznych pod mierzenie ruchu oraz zachowań użytkowników.",
      "Budowa responsywnych widoków i środowiska testowego dla dalszego rozwoju.",
    ],
    effects: [
      "Platforma jest gotowa do rozbudowy o kolejne moduły produktowe.",
      "Projekt ma spójne zaplecze techniczne zamiast jednorazowej strony.",
      "Komunikacja, dane użytkowników i analityka mogą być rozwijane w kontrolowany sposób.",
    ],
    gallery: [
      {
        title: "Strona startowa",
        caption:
          "Hero platformy z jasnym wejściem do kursów jogi online i spokojną estetyką marki.",
        theme: "platform",
        imageSrc: "/projects/juli-jogi-home.png",
        imageAlt: "Juli Jogi z widokiem strony startowej i sekcji hero.",
        imageFit: "contain",
      },
      {
        title: "Oferta kursów",
        caption:
          "Sekcja kursów online z opisem produktu, mockupem aplikacji i kartami funkcji.",
        theme: "platform",
        imageSrc: "/projects/juli-jogi-courses.png",
        imageAlt: "Juli Jogi z sekcją kursów jogi online i kartami funkcji.",
        imageFit: "contain",
      },
      {
        title: "Lekcja wideo",
        caption:
          "Widok lekcji z nawigacją kursu, progressem i odtwarzaczem materiału wideo.",
        theme: "platform",
        imageSrc: "/projects/juli-jogi-lesson-player.png",
        imageAlt: "Juli Jogi z widokiem lekcji wideo i listą lekcji kursu.",
        imageFit: "contain",
      },
      {
        title: "Dziennik praktyk",
        caption:
          "Formularz zapisu praktyki po lekcji z notatką, odczuciami i historią sesji.",
        theme: "data",
        imageSrc: "/projects/juli-jogi-practice-journal.png",
        imageAlt: "Juli Jogi z widokiem dziennika praktyki po lekcji.",
        imageFit: "contain",
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
        imageSrc: "/projects/cleanstrategy.png",
        imageAlt: "Kadr projektu CleanStrategy z widokiem aplikacji mobile i web.",
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
      "Stworzenie systemu produktów oraz obsługi stanu magazynowego.",
      "Integracja płatności przez Stripe w procesie składania zamówienia.",
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
        caption:
          "Lista produktów z ceramiką, cenami i nawigacją sklepu internetowego.",
        theme: "studio",
        imageSrc: "/projects/moment-studio-products-grid.png",
        imageAlt: "Lista produktów Moment Studio z ceramiką i cenami.",
        imageFit: "contain",
      },
      {
        title: "Stan magazynowy",
        caption:
          "Sekcja produktowa przygotowana pod obsługę oferty i dostępności produktów.",
        theme: "studio",
        imageSrc: "/projects/moment-studio-product-carousel.png",
        imageAlt: "Sekcja produktów Moment Studio z karuzelą ceramiki.",
        imageFit: "contain",
      },
      {
        title: "Proces płatności",
        caption:
          "Krok płatności z metodami płatniczymi i formularzem finalizacji zamówienia.",
        theme: "commerce",
        imageSrc: "/projects/moment-studio-payment.png",
        imageAlt: "Ekran płatności Moment Studio z metodami BLIK, Przelewy24 i karta.",
        imageFit: "contain",
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
        caption:
          "Widok sklepu z produktami, cenami i CTA w ciemnej stylistyce marki.",
        theme: "commerce",
        imageSrc: "/projects/jambo-shop.png",
        imageAlt: "Jambo Athletic z widokiem sklepu i listą produktów.",
        imageFit: "contain",
      },
      {
        title: "Mapa klientów",
        caption:
          "Sekcja klientów z mapą Europy i informacją o zespołach korzystających z produktów.",
        theme: "brand",
        imageSrc: "/projects/jambo-clients-map.png",
        imageAlt: "Jambo Athletic z sekcją Our clients i mapą Europy.",
        imageFit: "contain",
      },
    ],
    externalLink: "https://jamboathletic.com/shop",
  },
  {
    slug: "royal-mint",
    title: "Royal Mint",
    role: "Frontend developer at NoA Ignite",
    period: "lip 2024 - obecnie",
    summary:
      "Enterprise e-commerce dla rynku metali szlachetnych: złota, srebra i platyny, rozwijany w środowisku produkcyjnym o dużej skali i silnych wymaganiach stabilności.",
    lead:
      "Projekt realizowany przy NoA Ignite dla klienta z UK. To przykład pracy przy dojrzałym systemie commerce, w którym każda zmiana musi pasować do istniejącej architektury, aktualnych procesów zakupowych, analityki i wymagań jakościowych klienta enterprise.",
    insideStory:
      "Najważniejszy ciężar tej pracy nie polegał na budowaniu efektownego demo od zera, tylko na odpowiedzialnym rozwijaniu istniejącego produktu. W praktyce oznaczało to czytanie legacy codebase, szukanie źródeł regresji, porządkowanie komponentów i dowożenie zmian tak, aby nie rozbić już działających ścieżek użytkownika.",
    categories: [PortfolioType.WEB_APP],
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.BOOTSTRAP,
      Technologies.AZURE,
      Technologies.AUTH0,
      Technologies.GOOGLE_ANALYTICS,
    ],
    problem:
      "Rozwijany system e-commerce wymagał utrzymania istniejących rozwiązań, poprawy doświadczenia użytkownika i pracy w ramach legacy codebase, w którym frontend, dane produktowe, logika zakupowa i analityka są mocno ze sobą powiązane.",
    solution:
      "Wspierałem rozwój interfejsów sklepu i komponentów produktowych, pracując blisko istniejącej architektury React/TypeScript. Skupiałem się na stabilnych, punktowych zmianach: od debugowania i porządkowania UI, przez obsługę danych produktowych, po wsparcie analityki i zachowania przepływów zakupowych.",
    responsibilities: [
      "Utrzymywanie i rozwijanie frontendu w dużym, istniejącym systemie e-commerce.",
      "Praca z komponentami produktowymi, widokami zakupowymi i danymi prezentowanymi użytkownikowi.",
      "Debugowanie regresji oraz dopasowywanie zmian do legacy codebase bez naruszania istniejących przepływów.",
      "Synchronizowanie logiki UI, etykiet, tooltipów, kolorów i danych tam, gdzie komponenty zależały od kolejności lub kontraktu wejściowego.",
      "Wsparcie wdrożenia i utrzymania elementów Google Analytics w środowisku e-commerce.",
      "Współpraca z zespołem przy zmianach uruchamianych w środowisku opartym o Azure.",
    ],
    effects: [
      "Projekt był utrzymywany i rozwijany bez destabilizowania istniejących przepływów zakupowych.",
      "Komponenty frontendu były porządkowane i dopasowywane do wymagań klienta enterprise.",
      "Zmiany w warstwie prezentacji danych były sprawdzane pod kątem spójności etykiet, wartości i zachowania UI.",
      "Analityka wspierała lepsze rozumienie ruchu oraz zachowań użytkowników w sklepie.",
      "Doświadczenie użytkownika w częściach sklepowych było stopniowo ulepszane przy zachowaniu produkcyjnej ostrożności.",
    ],
    gallery: [
      {
        title: "Gold coins and bars",
        caption:
          "Desktopowy widok listy produktowej pokazujący filtry, karty produktów i prezentację oferty e-commerce.",
        theme: "commerce",
        imageSrc: "/projects/royal-mint-gold-coins-desktop.png",
        imageAlt:
          "Screenshot listy produktów Gold Coins and Bars The Royal Mint w widoku desktop.",
        imageFit: "contain",
      },
      {
        title: "Cluedo campaign",
        caption:
          "Mobilny widok kampanii produktowej pokazujący responsywną prezentację hero, nawigacji i CTA.",
        theme: "commerce",
        imageSrc: "/projects/royal-mint-cluedo-mobile.png",
        imageAlt:
          "Screenshot kampanii Cluedo The Royal Mint w widoku mobilnym.",
        imageFit: "contain",
      },
      {
        title: "Utrzymanie systemu",
        caption:
          "Praca z legacy codebase, Reactem, TypeScriptem, analityką i środowiskiem opartym o Azure.",
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
        caption:
          "Widok grafu pokazujący relacje między argumentami, źródłami i kontrargumentami.",
        theme: "data",
        imageSrc: "/projects/swarmcheck-argument-map.png",
        imageAlt:
          "Swarmcheck z widokiem mapy argumentów dla dyskusji o ataku atomowym na Hiroszimę.",
        imageFit: "contain",
      },
      {
        title: "Lista dyskusji",
        caption:
          "Ekran z katalogiem dyskusji, sortowaniem i kartami tematów do analizy.",
        theme: "platform",
        imageSrc: "/projects/swarmcheck-discussions.png",
        imageAlt: "Swarmcheck z listą dostępnych dyskusji i sortowaniem.",
        imageFit: "contain",
      },
      {
        title: "Zapraszanie użytkowników",
        caption:
          "Widok generowania linku zaproszeniowego z wyborem roli i języka.",
        theme: "platform",
        imageSrc: "/projects/swarmcheck-invite-link.png",
        imageAlt: "Swarmcheck z ekranem tworzenia linku zaproszeniowego.",
        imageFit: "contain",
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
