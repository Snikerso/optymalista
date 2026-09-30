export type SiteLanguage = "pl" | "en";

export const languageStorageKey = "pd-language";

export const getLanguage = (language?: string | null): SiteLanguage =>
  language === "en" ? "en" : "pl";

export const getLanguageFromBrowser = (): SiteLanguage => {
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

export const saveLanguagePreference = (language: SiteLanguage) => {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch (error) {}
};
