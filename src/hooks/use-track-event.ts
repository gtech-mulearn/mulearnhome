"use client";

/**
 * useTrackEvent Hook
 *
 * Simplified hook for tracking custom events.
 */

import { useCallback } from "react";
import { sendEvent } from "@/lib/analytics/events";

export interface UseTrackEventReturn {
  /** Track a custom event */
  track: (eventName: string, params?: Record<string, unknown>) => void;
}

/**
 * Simple hook for tracking custom events
 *
 * @example
 * ```tsx
 * const { track } = useTrackEvent();
 *
 * const handleClick = () => {
 *   track('button_click', { button_text: 'Sign Up', location: 'hero' });
 * };
 * ```
 */
export function useTrackEvent(): UseTrackEventReturn {
  const track = useCallback((eventName: string, params: Record<string, unknown> = {}) => {
    sendEvent(eventName, {
      ...params,
      timestamp: new Date().toISOString(),
    });
  }, []);

  return { track };
}
