import { apiConfig } from "@/config/api";
import type { ApiResponse } from "@/shared";
import { endpoints } from "@/shared";
import type { ApiInterestGroup, IgListApiResponse } from "../types/interest-groups.types";

/** IG data changes rarely, so the page is statically rendered and refreshed hourly. */
const REVALIDATE_SECONDS = 3600;

/**
 * Server-side fetch of `GET /dashboard/ig/list/` (public, no auth). Uses native `fetch` instead of
 * `publicGateway`, which hard-codes `cache: "no-store"` and would make the page render per request.
 * Returns `[]` on any failure so the caller can fall back to the local list.
 */
export async function fetchInterestGroups(): Promise<ApiInterestGroup[]> {
  try {
    // String concatenation, not `new URL()`: the base URL carries an `/api/v1` path segment.
    const url = apiConfig.baseUrl.replace(/\/$/, "") + endpoints.interestGroups.list;
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const envelope = (await res.json()) as ApiResponse<IgListApiResponse>;
    const groups = envelope.response?.interestGroup;
    return Array.isArray(groups) ? groups : [];
  } catch (error) {
    console.error("Error fetching interest groups:", error);
    return [];
  }
}
