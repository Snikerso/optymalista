import { createPageMetadata, defaultDescription } from "@/lib/seo";
import HomePageContent from "./HomePageContent";

export const metadata = createPageMetadata({
  title: "React i Next.js developer — aplikacje webowe i mobile",
  description: defaultDescription,
  path: "/",
});

export default function HomePage() {
  return <HomePageContent />;
}
