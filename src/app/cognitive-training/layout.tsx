import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Trening kognitywny",
  description:
    "Eksperymentalne ćwiczenia i narzędzia Pawła Drojeckiego do treningu kognitywnego oraz szybkiego czytania.",
  path: "/cognitive-training/",
});

export default function CognitiveTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
