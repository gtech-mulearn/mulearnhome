"use client";

/**
 * Analytics Provider
 *
 * Wraps the application with analytics context and conditionally loads GA4.
 * Only loads Google Analytics when user has granted consent.
 */

import { GoogleAnalytics } from "@next/third-parties/google";
import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { useConsentManager } from "@/hooks/use-consent-manager";
import { GA4_CONFIG } from "@/lib/analytics/config";
import { getStoredConsent, getVisitorId, isBrowser } from "@/lib/analytics/consent";
import { processEventQueue, sendEvent, trackPageView } from "@/lib/analytics/events";
import type { AnalyticsContextValue, ConsentState } from "@/lib/analytics/types";

// =============================================================================
// Context
// =============================================================================

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

/**
 * Hook to access analytics context
 */
export function useAnalyticsContext(): AnalyticsContextValue {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalyticsContext must be used within AnalyticsProvider");
  }
  return context;
}

// =============================================================================
// Provider Component
// =============================================================================

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const { hasAnalyticsConsent, consent } = useConsentManager();
  const [isReady, setIsReady] = useState(false);
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const [hasProcessedQueue, setHasProcessedQueue] = useState(false);

  const measurementId = GA4_CONFIG.getMeasurementId();
  const shouldLoadGA = hasAnalyticsConsent && !!measurementId;

  // Initialize visitor ID
  useEffect(() => {
    if (isBrowser()) {
      setVisitorId(getVisitorId());
    }
  }, []);

  // Track when GA is ready
  useEffect(() => {
    if (shouldLoadGA) {
      // GA4 is loaded - give it a moment to initialize
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 100);
      return () => clearTimeout(timer);
    }
    setIsReady(false);
  }, [shouldLoadGA]);

  // Process event queue when consent is granted
  useEffect(() => {
    if (hasAnalyticsConsent && isReady && !hasProcessedQueue) {
      setHasProcessedQueue(true);
      processEventQueue();
    }
  }, [hasAnalyticsConsent, isReady, hasProcessedQueue]);

  // Context value
  const contextValue = useMemo<AnalyticsContextValue>(
    () => ({
      isReady,
      hasConsent: hasAnalyticsConsent,
      visitorId,
      trackEvent: (eventName: string, params?: Record<string, unknown>) => {
        sendEvent(eventName, params || {});
      },
      trackPageView: (path?: string, title?: string) => {
        trackPageView(path, title);
      },
      getConsentState: (): ConsentState | null => {
        return getStoredConsent();
      },
    }),
    [isReady, hasAnalyticsConsent, visitorId],
  );

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}

      {/* Conditionally load GA4 */}
      {shouldLoadGA && <GoogleAnalytics gaId={measurementId} />}
    </AnalyticsContext.Provider>
  );
}
