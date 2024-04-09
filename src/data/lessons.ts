export interface Lesson {
  name: string;
  description: string;
  wordkitoLesson: string;
}

export interface Module {
  name: string;
  description: string;
  wordkitoLesson: Lesson[];
}

export const reactModules: Module[] = [
  {
    name: "Jak działa React ?",
    description:
      "React to biblioteka JavaScript, która pozwala tworzyć interaktywne UI (ang. User Interface - interfejs użytkownika). React jest utrzymywany przez Facebooka i społeczność programistów i firm. React jest biblioteką, która pozwala na tworzenie interfejsów użytkownika. React jest wykorzystywany do budowania pojedynczych stron internetowych i aplikacji mobilnych. React pozwala na tworzenie wielu komponentów, które mogą być ponownie wykorzystywane w aplikacji. React jest wykorzystywany do tworzenia interfejsów użytkownika, które są dynamiczne i interaktywne. React jest wykorzystywany do tworzenia interfejsów użytkownika, które są dynamiczne i interaktywne. React jest wykorzystywany do tworzenia interfejsów użytkownika, które są dynamiczne i interaktywne.",
    wordkitoLesson: [
      {
        name: "Czym jest React ?",
        description: "",
        wordkitoLesson: "",
      },
      {
        name: "Jak działa renderowanie w React ?",
        description: "",
        wordkitoLesson: "",
      },
      {
        name: "Jak działa JSX ?",
        description: "",
        wordkitoLesson: "",
      },
    ],
  },

  {
    name: "Propsy",
    description: "",
    wordkitoLesson: [
      {
        name: "React - Wprowadzenie do 'Propsów'",
        description: "",
        wordkitoLesson: "6578146910ebe6e85e4169e5",
      },
      {
        name: "Przekazywanie propsów",
        description: "",
        wordkitoLesson: "",
      },
      {
        name: "Wyciganie propsów",
        description: "",
        wordkitoLesson: "",
      },
      {
        name: "Przekazywanie dzieci ",
        description: "",
        wordkitoLesson: "6572f19910ebe6e85e415783",
      },
      {
        name: "Przekazywanie komponentu przez propsy",
        description: "",
        wordkitoLesson: "",
      },
    ],
  },

  // {
  //   name: "Komponenty ",
  //   description: "",
  //   wordkitoLesson: [
  //     {
  //       name: "React - Wprowadzenie do 'Propsów'",
  //       description: "",
  //       wordkitoLesson: "6572f19910ebe6e85e415783",
  //     },
  //   ],
  // },
  {
    name: "Podstawy zarządzania stanem",
    description: "",
    wordkitoLesson: [
      {
        name: "Na start z Reactem",
        description: "",
        wordkitoLesson: "",
      },
    ],
  },

  // Zarządzanie dziećmi koncepcje zaawansowane
];

export const jsModules: Module[] = [
  {
    name: "Funkcje",
    description: "",
    wordkitoLesson: [
      {
        name: "1. Budowanie funkcji",
        description:
          "Masz problem z tworzeniem funkcji ? Nie znasz różnicy między funkcją strzałkową, a deklarowaną ?",
        wordkitoLesson: "661248aa6717f41386231502",
      },
      {
        name: "2. Przekazywanie argumentów i odbieranie parametrów",
        description:
          "Nie wiesz czym się różni parametr od argumentu ? Nie widzisz sensu tworzenia funkcji ?",
        wordkitoLesson: "66124b036717f41386231618",
      },
      {
        name: "3. Zwracanie wartości z funkcji",
        description: "Chcesz coś zwrócić a nie wiesz co ?",
        wordkitoLesson: "66124f416717f413862319e1",
      },
      {
        name: "4. Eventy",
        description:
          "Nie wiesz jak działają eventy? Jak je wykorzystać do lepszej i ciekawszej interakcji",
        wordkitoLesson: "6485da0ec7eec85d3f0b9ecd",
      },
      {
        name: "5. Asynchroniczność",
        description: "",
        wordkitoLesson: "6485da0ec7eec85d3f0b9ecd",
      },
    ],
  },
  {
    name: "Obiekty jako struktura danych",
    description: "",
    wordkitoLesson: [],
  },
  {
    name: "Tablice",
    description: "Przekazywanie funkcji jako argument",
    wordkitoLesson: [],
  },
  {
    name: "Pętle",
    description: "",
    wordkitoLesson: [],
  },
];

export const reactNativeModules: Module[] = [
  {
    name: "Tworzenie projektu",
    description: "",
    wordkitoLesson: [
      {
        name: "Budowanie funkcji",
        description:
          "Masz problem z tworzeniem funkcji ? Nie znasz różnicy między funkcją strzałkową, a deklarowaną ?",
        wordkitoLesson: "661248aa6717f41386231502",
      },
      {
        name: "Przekazywanie argumentów i odbieranie parametrów",
        description:
          "Nie wiesz czym się różni parametr od argumentu ? Nie widzisz sensu tworzenia funkcji ?",
        wordkitoLesson: "66124b036717f41386231618",
      },
      {
        name: "Zwracanie wartości z funkcji",
        description: "Chcesz coś zwrócić a nie wiesz co ?",
        wordkitoLesson: "66124f416717f413862319e1",
      },
      {
        name: "Eventy",
        description:
          "Nie wiesz jak działają eventy? Jak je wykorzystać do lepszej i ciekawszej interakcji",
        wordkitoLesson: "6485da0ec7eec85d3f0b9ecd",
      },
      {
        name: "Asynchroniczność",
        description: "",
        wordkitoLesson: "6485da0ec7eec85d3f0b9ecd",
      },
    ],
  },
  {
    name: "Nawigacja",
    description: "",
    wordkitoLesson: [],
  },
  {
    name: "Tablice",
    description: "Przekazywanie funkcji jako argument",
    wordkitoLesson: [],
  },
  {
    name: "Pętle",
    description: "",
    wordkitoLesson: [
      {
        name: "Co dają pętle",
        description:
          "Co możesz zrobić za pomocą pętli i jak usprawniają ci kod",
        wordkitoLesson: "",
      },
    ],
  },
];
