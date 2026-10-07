export const consentStorageKey = "pd-cookie-consent";
export const consentChangeEvent = "pd-consent-change";
export const consentSettingsEvent = "pd-consent-settings";
export type CookieConsentValue = "accepted" | "rejected";

export const readConsent = (): CookieConsentValue | null => {
  try {
    const value = window.localStorage.getItem(consentStorageKey);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
};
