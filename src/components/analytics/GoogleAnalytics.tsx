import Script from "next/script";
import { gaMeasurementId } from "@/lib/analyticsConfig";

export const GoogleAnalytics = () => {
  if (!gaMeasurementId) {
    return null;
  }

  return (
    <>
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          var storedConsent = null;
          try {
            storedConsent = window.localStorage.getItem('pd-cookie-consent');
          } catch (error) {}

          var analyticsConsent = storedConsent === 'accepted' ? 'granted' : 'denied';

          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: analyticsConsent,
            wait_for_update: 500
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
};
