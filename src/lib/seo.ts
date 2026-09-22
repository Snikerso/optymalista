import type { Metadata } from "next";

export const siteUrl = "https://drojecki.pro";

export const defaultDescription =
  "Portfolio Pawła Drojeckiego: React, Next.js, Nest.js, aplikacje webowe, mobile, e-commerce, backend i product development.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export const createPageMetadata = ({
  title,
  description,
  path,
}: PageMetadataInput): Metadata => {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Paweł Drojecki",
      locale: "pl_PL",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
};
