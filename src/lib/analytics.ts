export type AnalyticsEventName =
  | "case_study_open"
  | "cookie_consent_update"
  | "cta_click"
  | "cv_open"
  | "external_project_open"
  | "linkedin_open"
  | "whatsapp_open"
  | "portfolio_path_select";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    analyticsConsentGranted?: boolean;
    gtag?: (
      command: "event" | "consent" | "config",
      eventName: AnalyticsEventName | "update" | string,
      params?: AnalyticsParams
    ) => void;
  }
}

export const trackEvent = (
  eventName: AnalyticsEventName,
  params: AnalyticsParams = {}
) => {
  if (typeof window === "undefined" || window.analyticsConsentGranted !== true || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
};
