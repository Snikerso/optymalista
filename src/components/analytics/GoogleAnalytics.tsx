"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { gaMeasurementId } from "@/lib/analyticsConfig";
import { consentChangeEvent, readConsent } from "@/lib/consent";

export const GoogleAnalytics = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const accepted = window.analyticsConsentGranted ?? (readConsent() === "accepted");
      window.analyticsConsentGranted = accepted;
      (window as unknown as Record<string, unknown>)[`ga-disable-${gaMeasurementId}`] = !accepted;
      if (accepted) setEnabled(true);
    };
    syncConsent();
    window.addEventListener(consentChangeEvent, syncConsent);
    return () => window.removeEventListener(consentChangeEvent, syncConsent);
  }, []);

  if (!enabled || !gaMeasurementId) return null;

  return (
    <>
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){window.dataLayer.push(arguments);};
          window.gtag('consent', 'default', {
            ad_storage: 'denied', ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: window.analyticsConsentGranted ? 'granted' : 'denied'
          });
          window.gtag('js', new Date());
          window.gtag('config', ${JSON.stringify(gaMeasurementId)});
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
    </>
  );
};
