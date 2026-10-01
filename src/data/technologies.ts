import type { Locale } from "@/lib/language";

export enum Technologies {
  REACT_NATIVE = "React Native",
  EXPO = "Expo",
  TYPESCRIPT = "TypeScript",
  TAILWIND_CSS = "Tailwind CSS",
  REACT = "React.js",
  NEXT_JS = "Next.js",
  NEST_JS = "Nest.js",
  BOOTSTRAP = "Bootstrap",
  AZURE = "Microsoft Azure",
  NODE_JS = "Node.js",
  EXPRESS = "Express.js",
  MONGODB = "MongoDB",
  POSTGRESQL = "PostgreSQL",
  D3_JS = "D3.js",
  STRIPE = "Stripe",
  CHECKOUT_DOT_COM = "Checkout.com",
  HTML5 = "HTML5",
  JAVASCRIPT = "JavaScript",
  CSS = "CSS",
  CSHARP = "C#",
  RESEND = "Resend",
  GOOGLE_ANALYTICS = "Google Analytics",
  SANITY = "Sanity",
  NOTION = "Notion",
  MENTORING = "Mentoring",
  GARMIN_CONNECT_IQ = "Garmin Connect IQ",
  MONKEY_C = "Monkey C",
  REACT_QUERY = "React Query",
  REACT_HOOK_FORM = "React Hook Form",
  REACT_FORMIK = "React Formik",
  REACT_FLOW = "React Flow",
  MUI = "MUI",
  STYLED_COMPONENTS = "Styled Components",
  RAZOR_PAGES = "Razor Pages",
  FIGMA = "Figma",
  REST = "REST",
  GRPC = "gRPC",
  MCP = "MCP",
  SWAGGER_API = "Swagger API",
  SOCKETS = "Sockets",
  INVERSIFY_CONTEXT = "Inversify context",
  DJANGO = "Django",
  DEVOPS = "DevOps",
  DOCKER = "Docker",
  AWS = "AWS S3",
  DIGITAL_OCEAN = "DigitalOcean",
  DOPPLER = "Doppler",
  DESCOPE = "Descope",
  AUTH0 = "Auth0",
  SENDGRID = "SendGrid",
  RBAC = "RBAC",
  PROGRAMMING_TEACHING = "Nauczanie programowania",
  REMOTE_TEACHING = "Nauczanie na odległość",
  INSTRUCTOR_LED_TRAINING = "Szkolenie prowadzone przez instruktora",
  LECTURING = "Prowadzenie wykładów",
  RECORDING = "Nagrywanie",
  ECOMMERCE = "E-commerce",
  SCRUM = "Scrum",
  PROJECT_MANAGEMENT = "Zarządzanie projektem",
  PROJECT_DELIVERY = "Realizowanie projektów",
  PYTHON = "Python",
  R = "R",
  DATA_ANALYSIS = "Analiza danych",
  STATISTICAL_DATA_ANALYSIS = "Analiza danych statystycznych",
  STATISTICS = "Statystyka",
  MACHINE_LEARNING = "Nauczanie maszynowe",
  UX_RESEARCH = "Badania UX",
  EYETRACKING = "Eyetracking",
  THREE_D_PRINTING = "3D printing",
  ARDUINO = "Arduino",
  RASPBERRY_PI = "Raspberry Pi",
  WEBSITE_CREATION = "Tworzenie witryn internetowych",
  WEBSITE_DESIGN = "Projektowanie witryn internetowych",
}

export type TechnologyGroup = {
  title: string;
  skills: Technologies[];
};

export type TechnologyLanguage = Locale;

const technologyLabels: Partial<Record<Technologies, Record<TechnologyLanguage, string>>> = {
  [Technologies.PROGRAMMING_TEACHING]: {
    pl: "Nauczanie programowania",
    en: "Programming teaching",
  },
  [Technologies.REMOTE_TEACHING]: {
    pl: "Nauczanie na odległość",
    en: "Remote teaching",
  },
  [Technologies.INSTRUCTOR_LED_TRAINING]: {
    pl: "Szkolenie prowadzone przez instruktora",
    en: "Instructor-led training",
  },
  [Technologies.LECTURING]: {
    pl: "Prowadzenie wykładów",
    en: "Lecturing",
  },
  [Technologies.PROJECT_MANAGEMENT]: {
    pl: "Zarządzanie projektem",
    en: "Project management",
  },
  [Technologies.PROJECT_DELIVERY]: {
    pl: "Realizowanie projektów",
    en: "Project delivery",
  },
  [Technologies.DATA_ANALYSIS]: {
    pl: "Analiza danych",
    en: "Data analysis",
  },
  [Technologies.STATISTICAL_DATA_ANALYSIS]: {
    pl: "Analiza danych statystycznych",
    en: "Statistical data analysis",
  },
  [Technologies.MACHINE_LEARNING]: {
    pl: "Nauczanie maszynowe",
    en: "Machine learning",
  },
  [Technologies.UX_RESEARCH]: {
    pl: "Badania UX",
    en: "UX research",
  },
  [Technologies.WEBSITE_CREATION]: {
    pl: "Tworzenie witryn internetowych",
    en: "Website creation",
  },
  [Technologies.WEBSITE_DESIGN]: {
    pl: "Projektowanie witryn internetowych",
    en: "Website design",
  },
};

const technologyDescriptions: Partial<
  Record<Technologies, Record<TechnologyLanguage, string>>
> = {
  [Technologies.NEST_JS]: {
    pl: "Nest.js to mój ulubiony framework pozwala z łatwością dodawać nowe funkcjonalności, a przy tym jest porządek w kodzie, co sobie bardzo cenię w tworzeniu oprogramowania.",
    en: "Nest.js is my favorite framework. It makes it easy to add new features while keeping the code organized, which I value a lot when building software.",
  },
  [Technologies.DOPPLER]: {
    pl: "Jak odkryłem Dopplera, to się zakochałem i envy w swoich projektach serwuję przez Dopplera. Daje to łatwość zarządzania i bezpieczeństwo.",
    en: "When I discovered Doppler, I loved it. I serve envs in my projects through Doppler because it makes configuration easier to manage and more secure.",
  },
  [Technologies.MONGODB]: {
    pl: "Moja ulubiona baza danych.",
    en: "My favorite database.",
  },
  [Technologies.MCP]: {
    pl: "Myślę, że warto tworzyć MCP nawet do wewnętrznych zastosowań. Stworzyłem takie MCP do JuliJogi, co ułatwiło mi tworzenie i weryfikację Biblioteki pozycji.",
    en: "I think it is worth building MCPs even for internal use. I created one for JuliJogi, which made it easier to create and verify the position library.",
  },
  [Technologies.DIGITAL_OCEAN]: {
    pl: "UX i cena DigitalOcean po prostu mnie przekonały. Funkcjonalność App Platform pozwala mi stawiać serwery od zera bardzo szybko.",
    en: "DigitalOcean won me over with its UX and pricing. App Platform lets me spin up servers from scratch very quickly.",
  },
  [Technologies.INVERSIFY_CONTEXT]: {
    pl: "Korzystałem z Inversify context w Swarmcheck, ale wolę Nest.js.",
    en: "I used Inversify context in Swarmcheck, but I prefer Nest.js.",
  },
  [Technologies.DJANGO]: {
    pl: "Korzystałem z Django w pierwszej wersji mojego projektu Wordkito, ale ostatecznie przepisałem cały backend na Nest.js. Według mnie Nest.js jest znacznie przyjemniejszy.",
    en: "I used Django in the first version of my Wordkito project, but eventually rewrote the whole backend in Nest.js. For me, Nest.js is much more pleasant to work with.",
  },
  [Technologies.SOCKETS]: {
    pl: "Lubię i szanuję.",
    en: "I like and respect it.",
  },
  [Technologies.STRIPE]: {
    pl: "Gdybym miał samemu robić bramki płatnicze, to chyba nie chciałbym zarabiać.",
    en: "If I had to build payment gateways myself, I probably would not want to make money.",
  },
  [Technologies.REACT]: {
    pl: "Hooki to najlepsze, co się przytrafiło światu.",
    en: "Hooks are the best thing that happened to the world.",
  },
  [Technologies.NEXT_JS]: {
    pl: "Korzystam z Next.js, gdy potrzebuję SSR, na przykład w Moment Studio albo JuliJogi, gdzie SEO jest ważne.",
    en: "I use Next.js when I need SSR, for example in Moment Studio or JuliJogi, where SEO matters.",
  },
  [Technologies.DESCOPE]: {
    pl: "Korzystam z Descope w swoich projektach. Znacznie ułatwia logowanie i ma też wbudowany RBAC.",
    en: "I use Descope in my own projects. It makes authentication much easier and also has built-in RBAC.",
  },
  [Technologies.AUTH0]: {
    pl: "Wdrażałem Auth0 w Royal Mint. Też fajne narzędzie, choć momentami toporne.",
    en: "I implemented Auth0 in Royal Mint. It is also a solid tool, although clunky at times.",
  },
  [Technologies.CHECKOUT_DOT_COM]: {
    pl: "Wdrażałem Checkout.com w Royal Mint. Stripe jest znacznie lepszy i bardziej elastyczny.",
    en: "I implemented Checkout.com in Royal Mint. Stripe is much better and more flexible.",
  },
  [Technologies.RESEND]: {
    pl: "Wysyłka maili i integracja są przepiękne, a na dodatek template'y można tworzyć w React.js.",
    en: "Email delivery and integration are beautiful, and on top of that the templates can be built in React.js.",
  },
  [Technologies.RBAC]: {
    pl: "Implementowałem RBAC w Swarmcheck. Bardzo fajne wyzwanie dla początkującego.",
    en: "I implemented RBAC in Swarmcheck. It was a very nice challenge for a beginner.",
  },
  [Technologies.TYPESCRIPT]: {
    pl: "Odkąd pierwszy raz użyłem TypeScriptu, liczba błędów w kodzie spadła drastycznie.",
    en: "Since I first used TypeScript, the number of bugs in my code has dropped dramatically.",
  },
  [Technologies.MONKEY_C]: {
    pl: "Fajne, choć strasznie topornie tworzy się w tym UI.",
    en: "It is nice, although building UI with it feels very clunky.",
  },
  [Technologies.TAILWIND_CSS]: {
    pl: "Jak zacząłem używać Tailwinda, styled-components przestał być najfajniejszym wyborem.",
    en: "Once I started using Tailwind, styled-components stopped feeling like the nicest choice.",
  },
  [Technologies.AWS]: {
    pl: "Mega prosty sposób na przechowywanie dużych i małych plików. Dobra jest też funkcja signed URL.",
    en: "A very simple way to store both large and small files. The signed URL feature is also really useful.",
  },
  [Technologies.SENDGRID]: {
    pl: "Korzystałem z SendGrid w Swarmcheck, ale jest strasznie toporny.",
    en: "I used SendGrid in Swarmcheck, but it feels very clunky.",
  },
};

export const getTechnologyLabel = (
  technology: Technologies,
  language: TechnologyLanguage
) => technologyLabels[technology]?.[language] ?? technology;

export const getTechnologyDescription = (
  technology: Technologies,
  language: TechnologyLanguage
) => technologyDescriptions[technology]?.[language];

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Backend i API",
    skills: [
      Technologies.NODE_JS,
      Technologies.NEST_JS,
      Technologies.EXPRESS,
      Technologies.MONGODB,
      Technologies.POSTGRESQL,
      Technologies.REST,
      Technologies.GRPC,
      Technologies.MCP,
      Technologies.SWAGGER_API,
      Technologies.SOCKETS,
      Technologies.INVERSIFY_CONTEXT,
      Technologies.CSHARP,
      Technologies.DJANGO,
    ],
  },
  {
    title: "Cloud, DevOps i auth",
    skills: [
      Technologies.DOCKER,
      Technologies.DOPPLER,
      Technologies.AZURE,
      Technologies.AWS,
      Technologies.DIGITAL_OCEAN,
      Technologies.DESCOPE,
      Technologies.AUTH0,
      Technologies.STRIPE,
      Technologies.CHECKOUT_DOT_COM,
      Technologies.SENDGRID,
      Technologies.RESEND,
      Technologies.GOOGLE_ANALYTICS,
      Technologies.RBAC,
    ],
  },
  {
    title: "Frontend",
    skills: [
      Technologies.REACT,
      Technologies.NEXT_JS,
      Technologies.TYPESCRIPT,
      Technologies.JAVASCRIPT,
      Technologies.HTML5,
      Technologies.CSS,
      Technologies.TAILWIND_CSS,
      Technologies.BOOTSTRAP,
      Technologies.MUI,
      Technologies.STYLED_COMPONENTS,
      Technologies.RAZOR_PAGES,
    ],
  },
  {
    title: "Frontend tooling",
    skills: [
      Technologies.REACT_QUERY,
      Technologies.REACT_HOOK_FORM,
      Technologies.REACT_FORMIK,
      Technologies.REACT_FLOW,
      Technologies.D3_JS,
      Technologies.FIGMA,
    ],
  },
  {
    title: "Mobile i wearables",
    skills: [
      Technologies.REACT_NATIVE,
      Technologies.EXPO,
      Technologies.GARMIN_CONNECT_IQ,
      Technologies.MONKEY_C,
    ],
  },
  {
    title: "Edukacja i produkt",
    skills: [
      Technologies.MENTORING,
      Technologies.PROGRAMMING_TEACHING,
      Technologies.REMOTE_TEACHING,
      Technologies.INSTRUCTOR_LED_TRAINING,
      Technologies.ECOMMERCE,
      Technologies.SCRUM,
      Technologies.PROJECT_MANAGEMENT,
      Technologies.PROJECT_DELIVERY,
    ],
  },
  {
    title: "Dane, UX i inne",
    skills: [
      Technologies.PYTHON,
      Technologies.R,
      Technologies.DATA_ANALYSIS,
      Technologies.MACHINE_LEARNING,
      Technologies.UX_RESEARCH,
      Technologies.EYETRACKING,
      Technologies.THREE_D_PRINTING,
      Technologies.ARDUINO,
      Technologies.RASPBERRY_PI,
    ],
  },
];
