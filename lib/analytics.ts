export const GA_MEASUREMENT_ID = 'G-P07XZGT10P';

type LeadMethod = 'form' | 'scheduler' | 'email' | 'phone';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Only a fixed method is sent: never form fields, contact details or link URLs.
export function trackLead(method: LeadMethod) {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', 'generate_lead', { method });
  } catch {
    // Analytics must never interrupt a successful inquiry or navigation.
  }
}
