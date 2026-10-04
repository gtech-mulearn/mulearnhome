"use client";

/**
 * useTrackPageView Hook
 *
 * Hook for tracking page views with optional auto-tracking.
 */

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackPageView } from "@/lib/analytics/events";

export interface UseTrackPageViewOptions {
  /** Custom page title (defaults to document.title) */
  title?: string;
  /** Custom page path (defaults to current path) */
  path?: string;
  /** Whether to track on mount */
  trackOnMount?: boolean;
}

/**
 * Hook for tracking page views
 *
 * Automatically tracks page view when path changes if trackOnMount is true.
 *
 * @example
 * ```tsx
 * // Auto-track on every navigation
 * useTrackPageView({ trackOnMount: true });
 *
 * // Manual tracking only
 * const { track } = useTrackPageView();
 * track('custom-path', 'Custom Title');
 * ```
 */
export function useTrackPageView(options: UseTrackPageViewOptions = {}): {
  track: (path?: string, title?: string) => void;
} {
  const { title, path: customPath, trackOnMount = false } = options;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasTracked = useRef<string>("");

  // Track on path change
  useEffect(() => {
    if (!trackOnMount) return;

    const fullPath =
      customPath || `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;

    // Prevent duplicate tracking for same path
    if (hasTracked.current === fullPath) return;

    hasTracked.current = fullPath;
    trackPageView(fullPath, title);
  }, [pathname, searchParams, title, customPath, trackOnMount]);

  // Manual track function
  const track = (manualPath?: string, manualTitle?: string) => {
    const fullPath =
      manualPath ||
      customPath ||
      `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;
    trackPageView(fullPath, manualTitle || title);
  };

  return { track };
}
