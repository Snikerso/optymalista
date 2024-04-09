import { jsModules, Module, reactModules } from "./lessons";

export interface Course {
  url: string;
  name: string;
  description: string;
  modules: Module[];
}

export const allCourses: Course[] = [
  {
    url: "javascript-do-react",
    name: "Javascript potrzebny do rozpoczęcia nauki React'a",
    description:
      "Kurs który da ci solidne podstawy do nauki Reacta. Wybrałem najważniejsze zagadnienia, które pozwolą ci zacząć naukę Reacta od podstaw.",
    modules: jsModules,
  },
  {
    url: "react-podstawy",
    name: "React podstawy",
    description: "Kurs o podstawach reacta",
    modules: reactModules,
  },
  // {
  //   url: "pytania-rekrutacyjne-frontend-developer",
  //   name: "Pytania rekrutacyjne na stanowisko Junior Frontend Developer.",
  //   description: "Sprawdź się z podstaw JavaScript oraz Reacta",
  //   modules: jsLessons,
  // },
  // {
  //   url: "pytania-rekrutacyjne-fullstack-developer",
  //   name: "Pytania rekrutacyjne na stanowisko Fullstack Developer.",
  //   description: "Sprawdź się z podstaw JavaScript oraz Reacta",
  //   modules: jsLessons,
  // },
];

// {
//   url: "authentykacja-poprzez-tokeny",
//   name: "Authentykacja poprzez tokeny",
//   description:
//     "Stwórz swoją własną funkcjonalność generowania tokenów. Wszystkie nowoczesne aplikacje jak stripe, mailerlite pozwalają na wygenerowanie tokenu uprawnia do wykonania określonych akcji",
//   modules: jsLessons,
// },
// {
//   url: "prosty-sklep-internetowy-z-integracja-stripe",
//   name: "Prosty sklep internetowy z integracją Stripe",
//   description:
//     "Dzięki prostej integracji z Stripe stwórz swój własny sklepik internetowy, który pozwala przyjmować płatności z polski i z zagranicy.",
//   modules: jsLessons,
// },

// {
//   url: "prosta-autoryzacja-w-mongodb-i-nest-js",
//   name: "Prosta autoryzacja w mongoDB i Nest JS",
//   description:
//     "Dzięki prostej integracji z Stripe stwórz swój własny sklepik internetowy, który pozwala przyjmować płatności z polski i z zagranicy.",
//   modules: jsLessons,
// },

// {
//   url: "prosty-sklep-internetowy-z-integracja-stripe",
//   name: "Prosty sklep internetowy z integracją Stripe",
//   description:
//     "Dzięki prostej integracji z Stripe stwórz swój własny sklepik internetowy, który pozwala przyjmować płatności z polski i z zagranicy.",
//   modules: jsLessons,
// },
