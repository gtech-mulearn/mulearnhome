import { publicGateway } from "@/lib/fetcher";
import type { ApiResponse } from "@/shared";
import { endpoints } from "@/shared";
import type {
  GrabYourSuperpowersSession,
  OfficeHoursSession,
  PublicEventsListResponse,
  PublicEventsParams,
  WeeklyTwitchEpisode,
  WeeklyTwitchPagination,
  WeeklyTwitchParams,
} from "../types/events.types";

function buildPublicEventsParams(params: PublicEventsParams): URLSearchParams {
  const out = new URLSearchParams();

  if (params.status) {
    for (const s of Array.isArray(params.status) ? params.status : [params.status]) {
      out.append("status", s);
    }
  }
  if (params.start_date) out.append("start_date", params.start_date);
  if (params.end_date) out.append("end_date", params.end_date);
  if (params.event_type) out.append("event_type", params.event_type);
  if (params.scope) out.append("scope", params.scope);
  if (params.ig_id) out.append("ig_id", params.ig_id);
  if (params.campus_id) out.append("campus_id", params.campus_id);
  if (params.cluster) out.append("cluster", params.cluster);
  if (params.is_featured !== undefined) out.append("is_featured", String(params.is_featured));
  if (params.tags) out.append("tags", params.tags);
  if (params.search) out.append("search", params.search);
  if (params.sortBy) out.append("sortBy", params.sortBy);
  if (params.pageIndex !== undefined) out.append("pageIndex", String(params.pageIndex));
  if (params.perPage) out.append("perPage", String(params.perPage));

  return out;
}

/** Backend response is `{ data: PublicEvent[], pagination }`, not a plain array. */
export async function fetchPublicEvents(
  params?: PublicEventsParams,
): Promise<PublicEventsListResponse> {
  const qs = params ? buildPublicEventsParams(params).toString() : "";
  const envelope = await publicGateway.get<ApiResponse<PublicEventsListResponse>>(
    qs ? `${endpoints.publicEvents.getEvents}?${qs}` : endpoints.publicEvents.getEvents,
  );
  return envelope.response;
}

/** Backend response is `{ data: PublicEvent[], pagination }`, not a plain array. */
export async function fetchFeaturedEvents(
  params?: PublicEventsParams,
): Promise<PublicEventsListResponse> {
  const qs = params ? buildPublicEventsParams(params).toString() : "";
  const envelope = await publicGateway.get<ApiResponse<PublicEventsListResponse>>(
    qs
      ? `${endpoints.publicEvents.getFeaturedEvents}?${qs}`
      : endpoints.publicEvents.getFeaturedEvents,
  );
  return envelope.response;
}

interface WeeklyTwitchResponse<T> {
  data: T[];
  pagination: WeeklyTwitchPagination;
}

function buildWeeklyTwitchParams(params: WeeklyTwitchParams): URLSearchParams {
  const out = new URLSearchParams();
  if (params.status) {
    for (const status of Array.isArray(params.status) ? params.status : [params.status]) {
      out.append("status", status);
    }
  }
  if (params.search) out.append("search", params.search);
  if (params.pageIndex !== undefined) out.append("pageIndex", String(params.pageIndex));
  if (params.perPage) out.append("perPage", String(params.perPage));
  return out;
}

async function fetchWeeklyTwitch<T>(
  endpoint: string,
  params: WeeklyTwitchParams,
): Promise<WeeklyTwitchResponse<T>> {
  const qs = buildWeeklyTwitchParams(params).toString();
  const envelope = await publicGateway.get<ApiResponse<WeeklyTwitchResponse<T>>>(
    qs ? `${endpoint}?${qs}` : endpoint,
  );
  return envelope.response;
}

export function fetchOfficeHours(
  params: WeeklyTwitchParams,
): Promise<WeeklyTwitchResponse<OfficeHoursSession>> {
  return fetchWeeklyTwitch(endpoints.weeklyTwitches.officeHours, params);
}

export function fetchSaltMangoTree(
  params: WeeklyTwitchParams,
): Promise<WeeklyTwitchResponse<WeeklyTwitchEpisode>> {
  return fetchWeeklyTwitch(endpoints.weeklyTwitches.saltMangoTree, params);
}

export function fetchInspirationStation(
  params: WeeklyTwitchParams,
): Promise<WeeklyTwitchResponse<WeeklyTwitchEpisode>> {
  return fetchWeeklyTwitch(endpoints.weeklyTwitches.inspirationStation, params);
}

export function fetchGrabYourSuperpowers(
  params: WeeklyTwitchParams,
): Promise<WeeklyTwitchResponse<GrabYourSuperpowersSession>> {
  return fetchWeeklyTwitch(endpoints.weeklyTwitches.grabYourSuperpowers, params);
}
