import type { Locale } from "@/lib/language";

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

const portfolioTypeLabels: Record<PortfolioType, Record<Locale, string>> = {
  [PortfolioType.MOBILE_APP]: {
    pl: "Aplikacja mobilna",
    en: "Mobile App",
  },
  [PortfolioType.WATCH_APP]: {
    pl: "Aplikacja na zegarek",
    en: "Watch App",
  },
  [PortfolioType.WEB_APP]: {
    pl: "Aplikacja webowa",
    en: "Web App",
  },
  [PortfolioType.ECOMMERCE]: {
    pl: "E-commerce",
    en: "E-commerce",
  },
  [PortfolioType.BUSINESS_CARD]: {
    pl: "Wizytówka",
    en: "Business Card",
  },
  [PortfolioType.WORK_EXPERIENCE]: {
    pl: "Doświadczenie",
    en: "Work Experience",
  },
  [PortfolioType.CONTENT]: {
    pl: "Treści",
    en: "Content",
  },
};

export const getPortfolioTypeLabel = (
  type: PortfolioType,
  language: Locale
) => portfolioTypeLabels[type][language];
