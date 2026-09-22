import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Notatki Pawła Drojeckiego o programowaniu, narzędziach, nauce i praktycznym tworzeniu produktów cyfrowych.",
  path: "/blog/",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
