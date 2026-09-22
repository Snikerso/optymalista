import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio",
  description:
    "Portfolio Pawła Drojeckiego: doświadczenie, stack i case studies z projektów React, Next.js, Nest.js, e-commerce, mobile i backend.",
  path: "/portfolio/",
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
