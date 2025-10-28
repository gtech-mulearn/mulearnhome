import { clsx, type ClassValue } from "clsx"
import { useCallback } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const useRedirectToApp = () => {
  return useCallback((path: string, { open = false, replace = false } = {}) => {
    if (open) {
      window.open(
        `${process.env.NEXT_PUBLIC_APP_URL}${path.replace(/^\/+/, "")}`,
        "_blank"
      );
      return;
    }
    if (replace) {
      window.location.replace(
        `${process.env.NEXT_PUBLIC_APP_URL}${path.replace(/^\/+/, "")}`
      );
      return;
    }
    window.location.href = `${process.env.NEXT_PUBLIC_APP_URL}${path.replace(
      /^\/+/,
      ""
    )}`;
  }, []);
};