import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projekty",
  description:
    "Projekty Pawła Drojeckiego: case studies aplikacji React, Next.js, Nest.js, e-commerce, mobile, backend i product development.",
  path: "/projekty/",
  imagePath: "/projects/royal-mint-gold-coins-desktop.png",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
