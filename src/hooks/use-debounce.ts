"use client";

import { useEffect, useState } from "react";

/**
 * Reusable debounce hook for standardizing delay logic.
 *
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default 500)
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
