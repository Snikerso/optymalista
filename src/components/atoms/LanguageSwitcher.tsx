"use client";

import {
  languageStorageKey,
  saveLanguagePreference,
  type SiteLanguage,
} from "@/lib/language";
import { useEffect, useState } from "react";

type LanguageSwitcherProps = {
  language: SiteLanguage;
  onLanguageChange?: (language: SiteLanguage) => void;
};

const getLanguageHref = (language: SiteLanguage) => {
  const url = new URL(window.location.href);

  if (language === "en") {
    url.searchParams.set("lang", "en");
  } else {
    url.searchParams.delete("lang");
  }

  return `${url.pathname}${url.search}${url.hash}`;
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
    setHrefs({
      pl: getLanguageHref("pl"),
      en: getLanguageHref("en"),
    });
  }, [language]);

  const handleSelect = (selectedLanguage: SiteLanguage) => {
    saveLanguagePreference(selectedLanguage);
    onLanguageChange?.(selectedLanguage);
  };

  return (
    <nav
      aria-label="Wybór języka"
      className="flex w-fit items-center gap-1 rounded-md border border-gray-300 bg-white p-1 text-xs font-bold"
      data-language-storage-key={languageStorageKey}
    >
      {(["pl", "en"] as SiteLanguage[]).map((item) => (
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
