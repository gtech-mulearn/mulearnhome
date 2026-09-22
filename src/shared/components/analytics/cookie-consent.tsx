"use client";

/**
 * Cookie Consent Banner
 *
 * GDPR/CCPA/LGPD compliant cookie consent banner.
 * Premium minimal design with subtle animations.
 */

import { AnimatePresence } from "framer-motion";
import { Cookie, Settings } from "lucide-react";
import { useEffect, useRef } from "react";
import { MotionDiv } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { useConsentManager } from "@/hooks/use-consent-manager";
import { CookiePreferencesModal } from "./cookie-preferences-modal";

export function CookieConsent() {
  const {
    showBanner,
    acceptAll,
    rejectAll,
    openPreferences,
    closePreferences,
    isPreferencesOpen,
    pendingCategories,
    updatePendingCategory,
    savePreferences,
  } = useConsentManager();

  const bannerRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  // Focus first button when banner appears
  useEffect(() => {
    if (showBanner && firstButtonRef.current) {
      const timer = setTimeout(() => {
        firstButtonRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showBanner]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showBanner && !isPreferencesOpen && (
          <MotionDiv
            ref={bannerRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="fixed bottom-0 left-0 right-0 z-9999 p-4 sm:p-6"
            role="dialog"
            aria-label="Cookie consent"
            aria-describedby="cookie-consent-description"
          >
            <div className="mx-auto max-w-2xl">
              {/* Clean card design */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/95 p-5 shadow-xl shadow-black/5 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/95 dark:shadow-black/20">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  {/* Icon */}
                  <div className="hidden sm:block">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                      <Cookie
                        className="h-5 w-5 text-gray-600 dark:text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                        Cookie Preferences
                      </h2>
                      <p
                        id="cookie-consent-description"
                        className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                      >
                        We use cookies to analyze traffic and improve your experience.{" "}
                        <a
                          href="/privacy-policy"
                          className="text-gray-900 underline underline-offset-2 hover:no-underline dark:text-white"
                        >
                          Privacy Policy
                        </a>
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        ref={firstButtonRef}
                        size="sm"
                        onClick={acceptAll}
                        className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                      >
                        Accept All
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={rejectAll}
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                      >
                        Reject All
                      </Button>

                      <button
                        type="button"
                        onClick={openPreferences}
                        className="inline-flex items-center gap-1.5 px-2 py-1 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                      >
                        <Settings className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Customize</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <CookiePreferencesModal
        isOpen={isPreferencesOpen}
        onClose={closePreferences}
        pendingCategories={pendingCategories}
        onUpdateCategory={updatePendingCategory}
        onSave={savePreferences}
        onRejectAll={rejectAll}
        onAcceptAll={acceptAll}
      />
    </>
  );
}
