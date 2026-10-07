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
    title: "Zbudowałem własną bibliotekę komponentów dla Garmina",
    link: "/blog/biblioteka-komponentow-garmin/",
    tags: ["Garmin", "Connect IQ", "Monkey C", "Open source"],
    description:
      "ConnectIQComponents: reużywalne komponenty UI, wspólny motyw i podejście inspirowane Reactem. Od interfejsów zegarkowych do biblioteki używanej w TeaStop.",
    source: "portfolio",
    date: "2026-10-07",
  },
  {
    title: "Resend — easy tool to send mail",
    link: "https://optymalista.medium.com/resend-easy-tool-to-send-mail-8c2755da54ae",
    tags: ["Resend", "Mail", "Tool"],
    source: "medium",
  },
];
