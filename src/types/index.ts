export interface Hero {
  id: number;
  name: string;
  image: string;
}

export interface DeckCard {
  id: number;
  cardDialogId?: number;
  cardDecisionId?: number;
  sourceDeckCardId?: number;
}

export interface CardDialog {
  id: number;
}

export interface DialogElement {
  id: number;
  text: string;
  sourceDialogElementId?: number;
  heroId: number;
  cardDialogId: number;
}

export interface CardDecision {
  id: number;
  text?: string;
}

export interface Decision {
  id: number;
  text: string;
  deckCardDecisionId: number | undefined;
  targetDeckCardId: number | undefined;
}

export interface GameRound {
  id: number;
  order: number;
  deckCardId: number;
}

export interface GameRoundMove {
  id: number;
  order: number;
  deckCardId: number;
}

export enum Technologies {
  REACT_NATIVE = "React Native",
  EXPO = "Expo",
  TYPESCRIPT = "TypeScript",
  TAILWIND_CSS = "Tailwind CSS",
  REACT = "React.js",
  NEXT_JS = "Next.js",
  NEST_JS = "Nest.js",
  BOOTSTRAP = "Bootstrap",
  AZURE = "Azure",
  NODE_JS = "Node.js",
  EXPRESS = "Express.js",
  MONGODB = "MongoDB",
  D3_JS = "D3.js",
  STRIPE = "Stripe",
  HTML5 = "HTML5",
  JAVASCRIPT = "JavaScript",
  CSHARP = "C#",
  RESEND = "Resend",
  GOOGLE_ANALYTICS = "Google Analytics",
  SANITY = "Sanity",
  NOTION = "Notion",
  MENTORING = "Mentoring",
}

export enum PortfolioType {
  MOBILE_APP = "Mobile App",
  WEB_APP = "Web App",
  ECOMMERCE = "E-commerce",
  BUSINESS_CARD = "Business Card",
  WORK_EXPERIENCE = "Work Experience",
  CONTENT = "Content",
}
