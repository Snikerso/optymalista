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

export enum PortfolioType {
  MOBILE_APP = "Mobile App",
  WATCH_APP = "Watch App",
  WEB_APP = "Web App",
  ECOMMERCE = "E-commerce",
  BUSINESS_CARD = "Business Card",
  WORK_EXPERIENCE = "Work Experience",
  CONTENT = "Content",
}
