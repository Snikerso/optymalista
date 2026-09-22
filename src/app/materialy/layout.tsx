import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Materiały",
  description:
    "Darmowe materiały Pawła Drojeckiego do nauki programowania i technologii webowych.",
  path: "/materialy/",
});

export default function MaterialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
