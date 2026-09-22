import { type ClassValue, clsx } from "clsx";
import { useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { clientEnv } from "@/config/env.client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useRedirectToApp = () => {
  return useCallback((path: string, { open = false, replace = false } = {}) => {
    if (open) {
      window.open(`${clientEnv.NEXT_PUBLIC_APP_URL}${path.replace(/^\/+/, "")}`, "_blank");
      return;
    }
    if (replace) {
      window.location.replace(`${clientEnv.NEXT_PUBLIC_APP_URL}${path.replace(/^\/+/, "")}`);
      return;
    }
    window.location.href = `${clientEnv.NEXT_PUBLIC_APP_URL}${path.replace(/^\/+/, "")}`;
  }, []);
};
