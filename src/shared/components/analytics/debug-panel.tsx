"use client";

/**
 * Analytics Debug Panel
 *
 * Development-only panel for monitoring analytics events and consent state.
 * Only visible when NODE_ENV is 'development'.
 */

import { AnimatePresence } from "framer-motion";
import { Activity, Bug, ChevronDown, ChevronUp, EyeOff, Trash2, User } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { MotionButton, MotionDiv } from "@/components/layouts";
import { CONSENT_CONFIG } from "@/lib/analytics/config";
import { getStoredConsent, getVisitorId, isBrowser } from "@/lib/analytics/consent";
import type { ConsentState, DebugEventEntry } from "@/lib/analytics/types";

// Only render in development
const isDev = process.env.NODE_ENV === "development";

export function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [events, setEvents] = useState<DebugEventEntry[]>([]);
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const [sessionStart] = useState(() => new Date().toISOString());

  // Initialize state
  useEffect(() => {
    if (!isBrowser() || !isDev) return;

    setConsent(getStoredConsent());
    setVisitorId(getVisitorId());

    // Listen for consent changes
    const handleStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_CONFIG.STORAGE_KEY) {
        setConsent(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Intercept gtag calls to log events
  useEffect(() => {
    if (!isBrowser() || !isDev) return;

    const originalGtag = window.gtag;

    // Create interceptor with proper typing
    const interceptor: typeof window.gtag = (command, targetOrEvent, params) => {
      // Log the event
      if (command === "event" && typeof targetOrEvent === "string") {
        const eventName = targetOrEvent;
        const eventParams = (params as Record<string, unknown>) || {};

        setEvents((prev) => {
          const newEvent: DebugEventEntry = {
            id: crypto.randomUUID(),
            eventName,
            params: eventParams,
            timestamp: new Date().toISOString(),
            sent: true,
          };

          // Keep last 50 events
          const updated = [...prev, newEvent].slice(-50);
          return updated;
        });
      }

      // Call original if it exists
      if (originalGtag) {
        originalGtag(command, targetOrEvent, params);
      }
    };

    window.gtag = interceptor;

    return () => {
      if (originalGtag) {
        window.gtag = originalGtag;
      }
    };
  }, []);

  const clearEvents = useCallback(() => {
    setEvents([]);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (!isOpen) setIsMinimized(false);
  }, [isOpen]);

  // Don't render in production
  if (!isDev) return null;

  return (
    <>
      {/* Toggle Button */}
      <MotionButton
        className="fixed bottom-20 left-4 z-[9998] rounded-full bg-gray-900 p-3 text-white shadow-lg transition-all hover:bg-gray-800"
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Toggle Analytics Debug Panel"
      >
        <Bug className="h-5 w-5" />
        {events.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-mulearn-trusty-blue text-xs font-bold">
            {events.length}
          </span>
        )}
      </MotionButton>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 left-4 z-[9999] w-80 overflow-hidden rounded-xl bg-gray-900 text-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-700 bg-gray-800 p-3">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-mulearn-trusty-blue" />
                <span className="text-sm font-semibold">Analytics Debug</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setIsMinimized((prev) => !prev)}
                  className="rounded p-1 hover:bg-gray-700"
                  title={isMinimized ? "Expand" : "Collapse"}
                >
                  {isMinimized ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={toggleOpen}
                  className="rounded p-1 hover:bg-gray-700"
                  title="Close"
                >
                  <EyeOff className="h-4 w-4" />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {!isMinimized && (
                <MotionDiv
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  {/* Consent Status */}
                  <div className="border-b border-gray-700 p-3">
                    <h3 className="mb-2 text-xs font-semibold uppercase text-gray-400">
                      Consent Status
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <StatusBadge
                        label="Analytics"
                        enabled={consent?.categories?.analytics ?? false}
                      />
                      <StatusBadge
                        label="Performance"
                        enabled={consent?.categories?.performance ?? false}
                      />
                      <StatusBadge
                        label="Marketing"
                        enabled={consent?.categories?.marketing ?? false}
                      />
                      <StatusBadge label="Interacted" enabled={consent?.hasInteracted ?? false} />
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="border-b border-gray-700 p-3">
                    <h3 className="mb-2 text-xs font-semibold uppercase text-gray-400">
                      User Info
                    </h3>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3 text-gray-500" />
                        <span className="text-gray-400">Visitor ID:</span>
                        <span className="font-mono text-gray-300">
                          {visitorId?.slice(0, 8) || "N/A"}...
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Activity className="h-3 w-3 text-gray-500" />
                        <span className="text-gray-400">Session:</span>
                        <span className="font-mono text-gray-300">
                          {new Date(sessionStart).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Events */}
                  <div className="p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-xs font-semibold uppercase text-gray-400">
                        Recent Events ({events.length})
                      </h3>
                      <button
                        type="button"
                        onClick={clearEvents}
                        className="rounded p-1 text-gray-500 hover:bg-gray-700 hover:text-white"
                        title="Clear events"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="max-h-48 overflow-y-auto">
                      {events.length === 0 ? (
                        <p className="text-xs text-gray-500">No events recorded yet</p>
                      ) : (
                        <div className="space-y-1">
                          {events
                            .slice()
                            .reverse()
                            .map((event) => (
                              <div
                                key={event.id}
                                className="rounded bg-gray-800 p-2 text-xs"
                                title={JSON.stringify(event.params, null, 2)}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-mulearn-trusty-blue">
                                    {event.eventName}
                                  </span>
                                  <span className="text-gray-500">
                                    {new Date(event.timestamp).toLocaleTimeString()}
                                  </span>
                                </div>
                                {Object.keys(event.params).length > 0 && (
                                  <div className="mt-1 truncate text-gray-400">
                                    {Object.entries(event.params)
                                      .slice(0, 3)
                                      .map(([k, v]) => `${k}: ${v}`)
                                      .join(", ")}
                                    {Object.keys(event.params).length > 3 && "..."}
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </MotionDiv>
              )}
            </AnimatePresence>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
}

// Status badge component
function StatusBadge({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className={`h-2 w-2 rounded-full ${enabled ? "bg-green-500" : "bg-red-500"}`} />
      <span className="text-gray-300">{label}</span>
    </div>
  );
}
