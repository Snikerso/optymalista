"use client";

import {
  getLocalizedHref,
  languageStorageKey,
  saveLanguagePreference,
  supportedLanguages,
  type SiteLanguage,
} from "@/lib/language";
import { useEffect, useState } from "react";

type LanguageSwitcherProps = {
  language: SiteLanguage;
  onLanguageChange?: (language: SiteLanguage) => void;
};

export const LanguageSwitcher = ({
  language,
  onLanguageChange,
}: LanguageSwitcherProps) => {
  const [hrefs, setHrefs] = useState<Record<SiteLanguage, string>>({
    pl: "#",
    en: "#",
  });

  useEffect(() => {
    const currentHref = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    setHrefs({
      pl: getLocalizedHref(currentHref, "pl") ?? "#",
      en: getLocalizedHref(currentHref, "en") ?? "#",
    });
  }, [language]);

  const handleSelect = (selectedLanguage: SiteLanguage) => {
    saveLanguagePreference(selectedLanguage);
    onLanguageChange?.(selectedLanguage);
  };

  return (
    <nav
      aria-label={language === "en" ? "Language selection" : "Wybór języka"}
      className="flex w-fit items-center gap-1 rounded-md border border-gray-300 bg-white p-1 text-xs font-bold"
      data-language-storage-key={languageStorageKey}
    >
      {supportedLanguages.map((item) => (
        <a
          key={item}
          href={hrefs[item]}
          hrefLang={item}
          aria-current={language === item ? "true" : undefined}
          onClick={() => handleSelect(item)}
          className={`rounded px-2 py-1 uppercase transition-colors ${
            language === item
              ? "bg-accent text-black"
              : "text-gray-600 hover:bg-gray-100 hover:text-black"
          }`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};
