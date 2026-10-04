"use client";

/**
 * useConsentManager Hook
 *
 * Manages cookie consent state with cross-tab synchronization.
 */

import { useCallback, useEffect, useState } from "react";
import {
  createAcceptAllConsent,
  createConsentSyncListener,
  createDefaultConsent,
  createRejectAllConsent,
  getStoredConsent,
  isDNTEnabled,
  saveConsent,
  shouldShowBanner,
  updateConsentCategory,
} from "@/lib/analytics/consent";
import type { ConsentCategories, ConsentState } from "@/lib/analytics/types";

export interface UseConsentManagerReturn {
  /** Current consent state */
  consent: ConsentState | null;
  /** Whether to show the consent banner */
  showBanner: boolean;
  /** Whether the user has made a consent choice */
  hasInteracted: boolean;
  /** Whether analytics consent is granted */
  hasAnalyticsConsent: boolean;
  /** Whether performance consent is granted */
  hasPerformanceConsent: boolean;
  /** Whether marketing consent is granted */
  hasMarketingConsent: boolean;
  /** Whether Do Not Track is enabled */
  isDNT: boolean;
  /** Accept all cookies */
  acceptAll: () => void;
  /** Reject all non-essential cookies */
  rejectAll: () => void;
  /** Update a specific category */
  updateCategory: (category: keyof Omit<ConsentCategories, "essential">, value: boolean) => void;
  /** Save current preferences (for use in modal) */
  savePreferences: () => void;
  /** Open preferences modal */
  openPreferences: () => void;
  /** Close preferences modal */
  closePreferences: () => void;
  /** Whether preferences modal is open */
  isPreferencesOpen: boolean;
  /** Pending changes (before save) */
  pendingCategories: Omit<ConsentCategories, "essential"> | null;
  /** Update pending category (for modal) */
  updatePendingCategory: (
    category: keyof Omit<ConsentCategories, "essential">,
    value: boolean,
  ) => void;
}

export function useConsentManager(): UseConsentManagerReturn {
  // State
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [pendingCategories, setPendingCategories] = useState<Omit<
    ConsentCategories,
    "essential"
  > | null>(null);
  const [isDNT, setIsDNT] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize on mount (client-side only)
  useEffect(() => {
    setIsHydrated(true);
    setIsDNT(isDNTEnabled());

    const stored = getStoredConsent();
    if (stored) {
      setConsent(stored);
    } else {
      // Create default consent without saving (user hasn't interacted)
      setConsent(createDefaultConsent());
    }

    setShowBanner(shouldShowBanner());
  }, []);

  // Cross-tab sync
  useEffect(() => {
    if (!isHydrated) return;

    const unsubscribe = createConsentSyncListener((newConsent) => {
      if (newConsent) {
        setConsent(newConsent);
        setShowBanner(false);
      }
    });

    return unsubscribe;
  }, [isHydrated]);

  // Accept all
  const acceptAll = useCallback(() => {
    const newConsent = createAcceptAllConsent();
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowBanner(false);
    setIsPreferencesOpen(false);
  }, []);

  // Reject all
  const rejectAll = useCallback(() => {
    const newConsent = createRejectAllConsent();
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowBanner(false);
    setIsPreferencesOpen(false);
  }, []);

  // Update specific category
  const updateCategory = useCallback(
    (category: keyof Omit<ConsentCategories, "essential">, value: boolean) => {
      if (!consent) return;

      const newConsent = updateConsentCategory(consent, category, value);
      setConsent(newConsent);
      saveConsent(newConsent);
    },
    [consent],
  );

  // Open preferences modal
  const openPreferences = useCallback(() => {
    // Initialize pending categories from current consent
    if (consent) {
      setPendingCategories({
        analytics: consent.categories.analytics,
        performance: consent.categories.performance,
        marketing: consent.categories.marketing,
      });
    } else {
      setPendingCategories({
        analytics: false,
        performance: false,
        marketing: false,
      });
    }
    setIsPreferencesOpen(true);
  }, [consent]);

  // Close preferences modal
  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false);
    setPendingCategories(null);
  }, []);

  // Update pending category (for modal, before save)
  const updatePendingCategory = useCallback(
    (category: keyof Omit<ConsentCategories, "essential">, value: boolean) => {
      setPendingCategories((prev) => (prev ? { ...prev, [category]: value } : null));
    },
    [],
  );

  // Save preferences from modal
  const savePreferences = useCallback(() => {
    if (!pendingCategories) return;

    const newConsent: ConsentState = {
      consentId: consent?.consentId || crypto.randomUUID(),
      categories: {
        essential: true,
        ...pendingCategories,
      },
      timestamp: new Date().toISOString(),
      version: consent?.version || "1.0.0",
      hasInteracted: true,
    };

    setConsent(newConsent);
    saveConsent(newConsent);
    setShowBanner(false);
    setIsPreferencesOpen(false);
    setPendingCategories(null);
  }, [consent, pendingCategories]);

  // Derived state
  const hasInteracted = consent?.hasInteracted ?? false;
  const hasAnalyticsConsent = consent?.categories?.analytics ?? false;
  const hasPerformanceConsent = consent?.categories?.performance ?? false;
  const hasMarketingConsent = consent?.categories?.marketing ?? false;

  return {
    consent,
    showBanner: isHydrated && showBanner,
    hasInteracted,
    hasAnalyticsConsent,
    hasPerformanceConsent,
    hasMarketingConsent,
    isDNT,
    acceptAll,
    rejectAll,
    updateCategory,
    savePreferences,
    openPreferences,
    closePreferences,
    isPreferencesOpen,
    pendingCategories,
    updatePendingCategory,
  };
}
