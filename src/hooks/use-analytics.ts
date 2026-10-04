"use client";

/**
 * useAnalytics Hook
 *
 * Main hook for analytics tracking with consent awareness.
 */

import { useCallback, useEffect, useRef } from "react";
import { CUSTOM_DIMENSIONS, GA4_CONFIG } from "@/lib/analytics/config";
import { getStoredConsent, getVisitorId, isBrowser } from "@/lib/analytics/consent";
import {
  processEventQueue,
  sendEvent,
  trackPageView as trackPageViewFn,
} from "@/lib/analytics/events";
import type { CustomDimensions } from "@/lib/analytics/types";

export interface UseAnalyticsOptions {
  /** Custom dimensions to include with every event */
  customDimensions?: Partial<CustomDimensions>;
  /** Auto-track page views on mount */
  autoTrackPageView?: boolean;
}

export interface UseAnalyticsReturn {
  /** Track a custom event */
  trackEvent: (eventName: string, params?: Record<string, unknown>) => void;
  /** Track a page view */
  trackPageView: (path?: string, title?: string) => void;
  /** Whether analytics is ready and consented */
  isReady: boolean;
  /** Get visitor ID */
  visitorId: string | null;
  /** Get consent status */
  hasConsent: boolean;
}

export function useAnalytics(options: UseAnalyticsOptions = {}): UseAnalyticsReturn {
  const { customDimensions, autoTrackPageView = false } = options;
  const hasProcessedQueue = useRef(false);

  // Get consent and visitor state
  const getConsent = useCallback(() => {
    const consent = getStoredConsent();
    return consent?.hasInteracted === true && consent?.categories?.analytics === true;
  }, []);

  const hasConsent = isBrowser() ? getConsent() : false;
  const visitorId = isBrowser() ? getVisitorId() : null;
  const isReady = hasConsent && !!GA4_CONFIG.getMeasurementId();

  // Process queued events when consent is granted
  useEffect(() => {
    if (hasConsent && !hasProcessedQueue.current) {
      hasProcessedQueue.current = true;
      processEventQueue();
    }
  }, [hasConsent]);

  // Auto-track page view on mount
  useEffect(() => {
    if (autoTrackPageView && isReady) {
      trackPageViewFn();
    }
  }, [autoTrackPageView, isReady]);

  // Get device category
  const getDeviceCategory = useCallback((): CustomDimensions["device_category"] => {
    if (!isBrowser()) return "desktop";

    const width = window.innerWidth;
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  }, []);

  // Track event with custom dimensions
  const trackEvent = useCallback(
    (eventName: string, params: Record<string, unknown> = {}) => {
      const enrichedParams = {
        ...params,
        [CUSTOM_DIMENSIONS.DEVICE_CATEGORY]: getDeviceCategory(),
        ...(customDimensions && {
          [CUSTOM_DIMENSIONS.USER_TYPE]: customDimensions.user_type,
          [CUSTOM_DIMENSIONS.PAGE_TEMPLATE]: customDimensions.page_template,
        }),
      };

      sendEvent(eventName, enrichedParams);
    },
    [customDimensions, getDeviceCategory],
  );

  // Track page view
  const trackPageView = useCallback((path?: string, title?: string) => {
    trackPageViewFn(path, title);
  }, []);

  return {
    trackEvent,
    trackPageView,
    isReady,
    visitorId,
    hasConsent,
  };
}
