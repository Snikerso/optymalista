export type Locale = "pl" | "en";
export type SiteLanguage = Locale;

export const languageStorageKey = "pd-language";

export const getLanguage = (language?: string | null): SiteLanguage =>
  language === "en" ? "en" : "pl";

export const supportedLanguages = ["pl", "en"] as const satisfies readonly Locale[];

export const getLanguageFromBrowser = (): SiteLanguage => {
  if (typeof window === "undefined") {
    return "pl";
  }

  const params = new URLSearchParams(window.location.search);
  const queryLanguage = params.get("lang");

  if (queryLanguage) {
    return getLanguage(queryLanguage);
  }

  try {
    return getLanguage(window.localStorage.getItem(languageStorageKey));
  } catch (error) {
    return "pl";
  }
};

export const getInitialLanguage = (): SiteLanguage => getLanguageFromBrowser();

export const saveLanguagePreference = (language: SiteLanguage) => {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch (error) {}
};

export const getLocalizedHref = (
  href: string | undefined,
  language: Locale
) => {
  if (!href || href.startsWith("http") || href.startsWith("mailto:")) {
    return href;
  }

  const hashIndex = href.indexOf("#");
  const hrefWithoutHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const queryIndex = hrefWithoutHash.indexOf("?");
  const pathname =
    queryIndex >= 0 ? hrefWithoutHash.slice(0, queryIndex) : hrefWithoutHash;
  const query = queryIndex >= 0 ? hrefWithoutHash.slice(queryIndex + 1) : "";
  const params = new URLSearchParams(query);

  if (language === "en") {
    params.set("lang", "en");
  } else {
    params.delete("lang");
  }

  const search = params.toString();

  return `${pathname}${search ? `?${search}` : ""}${hash}`;
};
