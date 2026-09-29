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
  proofPoints?: string[];
  technicalDecisions?: string[];
  translated?: Partial<
    Pick<
      ProjectDetail,
      | "role"
      | "period"
      | "summary"
      | "lead"
      | "insideStory"
      | "problem"
      | "solution"
      | "responsibilities"
      | "effects"
      | "proofPoints"
      | "technicalDecisions"
    >
  >;
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
    proofPoints: [
      "Projekt testowany w symulatorze Garmin oraz na kilku modelach zegarków.",
      "Aplikacja nie wymaga internetu ani uprawnień sieciowych.",
      "Zakres funkcji przygotowany pod publikację w Garmin Connect IQ Store.",
    ],
    technicalDecisions: [
      "Lokalny zapis stanu zamiast zależności od telefonu lub backendu.",
      "Duże boczne strefy dotykowe dopasowane do okrągłej tarczy.",
      "Zabezpieczenie logiki licznika przed zejściem poniżej zera.",
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
    proofPoints: [
      "Działające środowisko testowe z publicznym linkiem.",
      "Realne screeny strony startowej, kursów, lekcji wideo i dziennika praktyk.",
      "Analityka przygotowana pod mierzenie zachowania użytkowników.",
    ],
    technicalDecisions: [
      "Podział na frontend Next.js i backend Nest.js zamiast statycznej wizytówki.",
      "Przygotowanie struktury pod kursy, lekcje, formularze i komunikację.",
      "Użycie streamingu HLS oraz ręcznie przygotowywanych wariantów jakości wideo.",
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
    proofPoints: [
      "Produkt działa jako aplikacja mobile/web z backendem i bazą danych.",
      "Zakres obejmuje zadania, harmonogramy i odpowiedzialność domowników.",
      "Publiczny web preview pozwala szybko zobaczyć kierunek produktu.",
    ],
    technicalDecisions: [
      "React Native i Expo dla szybkiego rozwoju aplikacji mobilnej.",
      "Nest.js i MongoDB jako zaplecze pod rozwijane przepływy produktowe.",
      "Równoległe myślenie o mobile i web zamiast traktowania weba jako dodatku.",
    ],
    translated: {
      role: "Mobile developer / product builder",
      period: "Jan 2024 - present",
      summary:
        "A mobile and web product that helps households share chores and reduce friction around cleaning responsibilities.",
      lead:
        "CleanStrategy is designed for everyday use: quick task creation, clear ownership and flows that support household coordination without adding more admin.",
      problem:
        "Household chores often get lost in chats, notes and assumptions. The product needed to turn vague agreements into a simple shared system.",
      solution:
        "I designed and developed a mobile/web application with flows for tasks, schedules and household responsibility.",
      responsibilities: [
        "Designed product logic and the most important user journeys.",
        "Built the React Native and Expo app with fast iteration in mind.",
        "Developed the Nest.js and MongoDB backend for application data.",
      ],
      effects: [
        "The product makes household responsibility clearer.",
        "The architecture supports parallel mobile and web development.",
        "Core features can be tested with a low barrier to entry.",
      ],
      proofPoints: [
        "Mobile/web product with backend and database foundations.",
        "Scope includes tasks, schedules and household responsibility.",
        "A public web preview makes the product direction easy to review.",
      ],
      technicalDecisions: [
        "React Native and Expo for fast mobile iteration.",
        "Nest.js and MongoDB as the backend foundation for product flows.",
        "Mobile and web were considered together rather than treating web as an afterthought.",
      ],
    },
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
    proofPoints: [
      "Projekt obejmuje katalog produktów, dostępność, płatność i komunikację mailową.",
      "Screeny pokazują listę produktów, karuzelę produktu i krok płatności.",
      "Zewnętrzna strona pozwala zobaczyć markę i kierunek sklepu.",
    ],
    technicalDecisions: [
      "Nest.js i MongoDB dla zaplecza sklepu oraz danych produktowych.",
      "Stripe jako bazowa integracja procesu płatności.",
      "Resend jako prosty kanał komunikacji transakcyjnej.",
    ],
    translated: {
      role: "Fullstack developer",
      period: "Jan 2024 - Jan 2024",
      summary:
        "A complete online store for Moment Studio, connecting brand presentation, product sales and backend operations.",
      lead:
        "The project connected a brand website with a real sales flow. The visual layer had to work together with products, orders and payments.",
      problem:
        "The studio needed more than a polished website: it needed a working store with products, payments and customer communication.",
      solution:
        "I built a complete e-commerce flow with a frontend, Nest.js backend, MongoDB, Stripe payments and Resend email communication.",
      responsibilities: [
        "Translated the brand direction into a responsive frontend.",
        "Built the product system and inventory-related flows.",
        "Integrated Stripe into the checkout process.",
        "Connected the purchase flow with transactional email communication.",
      ],
      effects: [
        "The project works as a store, not only as a brand website.",
        "The backend provides a base for extending the offer and order process.",
        "Sales technology is connected with a clear user experience.",
      ],
      proofPoints: [
        "The scope includes product catalogue, availability, payment and email communication.",
        "Screenshots show the product list, product carousel and payment step.",
        "The external site shows the brand and store direction.",
      ],
      technicalDecisions: [
        "Nest.js and MongoDB for store backend and product data.",
        "Stripe as the payment-flow foundation.",
        "Resend as a straightforward transactional email channel.",
      ],
    },
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
    proofPoints: [
      "Projekt zawiera działające widoki sklepu i listy produktów.",
      "Screeny pokazują układ produktowy oraz sekcję klientów.",
    ],
    technicalDecisions: [
      "Next.js jako baza pod sklep z naciskiem na frontend i SEO.",
      "Komponentowy podział widoków ułatwiający pracę z projektem z Figmy.",
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
    proofPoints: [
      "Praca przy aktywnym systemie enterprise e-commerce dla klienta z UK.",
      "Zakres obejmuje React, TypeScript, Azure, Auth0 i Google Analytics.",
      "Case study pokazuje screeny desktopowe i mobilne realnego sklepu.",
    ],
    technicalDecisions: [
      "Punktowe zmiany dopasowane do legacy codebase zamiast ryzykownego przepisywania przepływów.",
      "Zachowanie spójnej kolejności etykiet, wartości i kolorów w komponentach danych.",
      "Weryfikowanie zmian w ścieżkach zakupowych pod kątem regresji użytkownika.",
    ],
    translated: {
      role: "Frontend developer at NoA Ignite",
      period: "Jul 2024 - present",
      summary:
        "Enterprise e-commerce for precious metals, developed in a production environment with high stability requirements.",
      lead:
        "Work delivered at NoA Ignite for a UK client. This is mature commerce work where every change has to fit the existing architecture, purchase flows, analytics and enterprise quality expectations.",
      insideStory:
        "The important part of this work was not building a flashy demo from scratch. It was responsible product development inside an existing codebase: reading legacy flows, finding regressions, improving components and shipping changes without breaking already-working user paths.",
      problem:
        "The e-commerce system needed ongoing development, UX improvements and careful work inside a legacy codebase where frontend, product data, purchasing logic and analytics are tightly connected.",
      solution:
        "I supported shop interfaces and product components in the existing React/TypeScript architecture, focusing on stable targeted changes: debugging, UI cleanup, product data handling, analytics support and purchase-flow behavior.",
      responsibilities: [
        "Maintained and developed frontend features in a large existing e-commerce system.",
        "Worked on product components, shopping views and user-facing data.",
        "Debugged regressions and adapted changes to the legacy codebase without disrupting existing flows.",
        "Kept UI logic, labels, tooltips, colors and data aligned where components depended on order or input contracts.",
        "Supported Google Analytics elements in an e-commerce environment.",
        "Collaborated on changes delivered in an Azure-based environment.",
      ],
      effects: [
        "The product could keep evolving without destabilizing purchase flows.",
        "Frontend components were improved within enterprise client requirements.",
        "Data-presentation changes were checked for label, value and UI consistency.",
        "Analytics supported better understanding of shop traffic and user behavior.",
        "User experience in commerce areas was gradually improved with production caution.",
      ],
      proofPoints: [
        "Work on an active enterprise e-commerce system for a UK client.",
        "Scope includes React, TypeScript, Azure, Auth0 and Google Analytics.",
        "The case study includes desktop and mobile screenshots from the real store.",
      ],
      technicalDecisions: [
        "Targeted changes adapted to the legacy codebase instead of risky rewrites.",
        "Preserved consistent order of labels, values and colors in data components.",
        "Checked purchase-flow changes for user-facing regressions.",
      ],
    },
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
    proofPoints: [
      "Zakres obejmował frontend, backend, RBAC i wizualizacje grafowe.",
      "Screeny pokazują mapę argumentów, dyskusje i zapraszanie użytkowników.",
    ],
    technicalDecisions: [
      "Autorski RBAC dla kontroli dostępu do danych i funkcji.",
      "D3.js do wizualizacji relacji między argumentami.",
      "Endpointy backendowe projektowane wokół pracy z danymi i rolami.",
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

export type ProjectLanguage = "pl" | "en";

export const getProjectLanguage = (language?: string): ProjectLanguage =>
  language === "en" ? "en" : "pl";

export const getLocalizedProject = (
  project: ProjectDetail,
  language: ProjectLanguage
): ProjectDetail => {
  if (language === "pl" || !project.translated) {
    return project;
  }

  return {
    ...project,
    ...project.translated,
  };
};
