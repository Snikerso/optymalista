import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Filamenty",
  description:
    "Notatki i ustawienia filamentów 3D używanych w projektach technicznych Pawła Drojeckiego.",
  path: "/filaments/",
});

export default function FilamentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
