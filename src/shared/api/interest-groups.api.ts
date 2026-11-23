import { apiConfig } from "@/config/api";
import { clientEnv } from "@/config/env.client";
import type { ApiResponse } from "../types/api.types";
import type {
  ApiInterestGroup,
  IgListApiResponse,
  InterestGroupDisplayItem,
} from "../types/interest-groups.types";
import { localDisplayItems, toDisplayItem } from "../utils/interest-groups.utils";
import { endpoints } from "./endpoints";

const APP_BASE_URL = clientEnv.NEXT_PUBLIC_APP_URL.replace(/\/+$/, "");

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

/**
 * Interest groups ready for display, most members first. Falls back to the local list when the
 * API is unavailable. Shared by every page that renders the IG directory.
 */
export async function getInterestGroupDisplayItems(): Promise<InterestGroupDisplayItem[]> {
  const apiGroups = await fetchInterestGroups();
  if (apiGroups.length === 0) return localDisplayItems(APP_BASE_URL);
  return apiGroups
    .map((group) => toDisplayItem(group, APP_BASE_URL))
    .sort((a, b) => (b.members ?? 0) - (a.members ?? 0));
}
