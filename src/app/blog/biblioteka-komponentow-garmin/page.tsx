import Link from "next/link";
import type { Metadata } from "next";

const destination = "/blog/garmin-component-library/";

export const metadata: Metadata = {
  title: "Article moved",
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function LegacyGarminArticle() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <p>This article has moved. <Link href={destination}>Read the Garmin component library article.</Link></p>
    </>
  );
}
