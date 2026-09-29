import type { Metadata } from "next";

export const siteUrl = "https://drojecki.pro";

export const defaultDescription =
  "Portfolio Pawła Drojeckiego: React, Next.js, Nest.js, aplikacje webowe, mobile, e-commerce, backend i product development.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
};

export const createPageMetadata = ({
  title,
  description,
  path,
  imagePath,
}: PageMetadataInput): Metadata => {
  const url = new URL(path, siteUrl).toString();
  const image = imagePath ? new URL(imagePath, siteUrl).toString() : undefined;

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
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
};
