import { ApiError } from "@/lib/fetcher";

/** The one function every feature's `hooks/<feature>.hooks.ts` calls in `onError` to turn a caught error into a display string. */
export function getApiResponseError(error: unknown, options: { fallback?: string } = {}): string {
  const { fallback = "Something went wrong. Please try again." } = options;
  if (error instanceof ApiError) return error.message || fallback;
  if (error instanceof Error) return error.message || fallback;
  return fallback;
}
