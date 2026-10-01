"use client";

import {
  getInitialLanguage,
  getLanguage,
  languageChangeEventName,
  languageStorageKey,
  type SiteLanguage,
} from "@/lib/language";
import { useEffect, useState } from "react";

export const useSiteLanguage = () => {
  const [language, setLanguage] = useState<SiteLanguage>("pl");

  useEffect(() => {
    const syncLanguage = () => setLanguage(getInitialLanguage());
    const syncLanguageFromStorage = (event: StorageEvent) => {
      if (event.key === languageStorageKey) {
        setLanguage(getLanguage(event.newValue));
      }
    };
    const syncLanguageFromEvent = (event: Event) => {
      setLanguage(getLanguage((event as CustomEvent<string>).detail));
    };

    window.addEventListener("popstate", syncLanguage);
    window.addEventListener("storage", syncLanguageFromStorage);
    window.addEventListener(languageChangeEventName, syncLanguageFromEvent);
    syncLanguage();

    return () => {
      window.removeEventListener("popstate", syncLanguage);
      window.removeEventListener("storage", syncLanguageFromStorage);
      window.removeEventListener(languageChangeEventName, syncLanguageFromEvent);
    };
  }, []);

  return language;
};
