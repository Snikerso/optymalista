export type BlogPostEntry = {
  title: string;
  link: string;
  tags: string[];
  description?: string;
  source: "portfolio" | "medium";
  date?: string;
};

export const blogPosts: BlogPostEntry[] = [
  {
    title: "ConnectIQComponents: własne komponenty UI dla Garmina",
    link: "/blog/biblioteka-komponentow-garmin/",
    tags: ["Garmin", "Connect IQ", "Monkey C", "Open source"],
    description:
      "8 komponentów w Monkey C, wspólny motyw i integracja przez Git submodule lub Monkey Barrel. Bibliotekę wykorzystałem w TeaStop.",
    source: "portfolio",
    date: "2026-10-07",
  },
  {
    title: "Resend — easy tool to send mail",
    link: "https://optymalista.medium.com/resend-easy-tool-to-send-mail-8c2755da54ae",
    tags: ["Resend", "Mail", "Tool"],
    description: "Wysyłanie wiadomości e-mail przez Resend — narzędzie, które wykorzystuję przy budowaniu aplikacji.",
    source: "medium",
  },
];
