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
    title: "ConnectIQComponents: reusable UI components for Garmin",
    link: "/blog/garmin-component-library/",
    tags: ["Garmin", "Connect IQ", "Monkey C", "Open source"],
    description:
      "8 Monkey C components, a shared theme and integration through Git submodules or Monkey Barrel. Used in TeaStop and Knitting Counter Pro.",
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
