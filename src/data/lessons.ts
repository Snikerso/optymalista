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

export const jsLessons: Module[] = [
  {
    name: "React",
    description: "",
    wordkitoLesson: [
      {
        name: "Pytania z Reacta",
        description: "",
        wordkitoLesson: "6485da0ec7eec85d3f0b9ecd",
      },
    ],
  },
  {
    name: "JavaScript",
    description: "",
    wordkitoLesson: [],
  },
  {
    name: "Logiczne myślenie",
    description: "",
    wordkitoLesson: [],
  },
  {
    name: "Myślenie",
    description: "",
    wordkitoLesson: [],
  },
];
