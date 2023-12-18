import { jsLessons, Module, reactModules } from "./lessons";

export interface Course {
  url: string;
  name: string;
  description: string;
  modules: Module[];
}

export const allCourses: Course[] = [
  {
    url: "react-podstawy",
    name: "React - podstawy",
    description: "Kurs o podstawach reacta",
    modules: reactModules,
  },
  // {
  //   url: "javascript-podstawy",
  //   name: "Javascript - podstawy",
  //   description: "Kurs ",
  //   modules: jsLessons,
  // },
  // {
  //   url: "authentykacja-poprzez-tokeny",
  //   name: "Authentykacja poprzez tokeny",
  //   description:
  //     "Stwórz swoją własną funkcjonalność generowania tokenów. Wszystkie nowoczesne aplikacje jak stripe, mailerlite pozwalają na wygenerowanie tokenu uprawnia do wykonania określonych akcji",
  //   modules: jsLessons,
  // },
  {
    url: "junior-pytania-rekrutacyjne",
    name: "Pytania rekrutacyjne na stanowisko Junior Frontend Developer.",
    description: "Sprawdź się z podstaw JavaScript oraz Reacta",
    modules: jsLessons,
  },
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
];
