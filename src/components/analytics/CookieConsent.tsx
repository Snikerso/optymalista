"use client";

import { gaMeasurementId } from "@/lib/analyticsConfig";
import { trackEvent } from "@/lib/analytics";
import { useEffect, useState } from "react";

const storageKey = "pd-cookie-consent";

type CookieConsentValue = "accepted" | "rejected";

const updateGoogleConsent = (value: CookieConsentValue) => {
  if (typeof window.gtag !== "function") {
    return;
  }

  const analyticsStorage = value === "accepted" ? "granted" : "denied";

  window.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: analyticsStorage,
  });

  if (value === "accepted") {
    window.gtag("config", gaMeasurementId, {
      anonymize_ip: true,
    });
  }
};

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = window.localStorage.getItem(storageKey);

      if (storedConsent !== "accepted" && storedConsent !== "rejected") {
        setIsVisible(true);
      }
    } catch (error) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (value: CookieConsentValue) => {
    try {
      window.localStorage.setItem(storageKey, value);
    } catch (error) {}

    updateGoogleConsent(value);
    trackEvent("cookie_consent_update", {
      value,
    });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section
      aria-label="Zgoda na pliki cookies"
      className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 flex-col gap-3 rounded-md border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_#000] sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-bold uppercase text-gray-500">
          Pliki cookies
        </h2>
        <p className="text-sm leading-6 text-gray-700">
          Używam Google Analytics 4, żeby mierzyć skuteczność portfolio. Cookies
          analityczne włączą się dopiero po Twojej zgodzie.
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        <button
          type="button"
          onClick={() => saveConsent("rejected")}
          className="rounded-md border-2 border-black px-3 py-2 text-sm font-bold hover:text-accent"
        >
          Odrzuć
        </button>
        <button
          type="button"
          onClick={() => saveConsent("accepted")}
          className="rounded-md border-2 border-black bg-accent px-3 py-2 text-sm font-bold text-black hover:bg-accent/80"
        >
          Akceptuję
        </button>
      </div>
    </section>
  );
};
