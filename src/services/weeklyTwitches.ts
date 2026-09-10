import type {
  GrabYourSuperpowersSession,
  OfficeHoursSession,
  WeeklyTwitchEpisode,
  WeeklyTwitchPagination,
  WeeklyTwitchParams,
} from "@/lib/types";
import { publicGateway } from "./apiGateway";
import { weeklyTwitchesRoutes } from "./urls";

interface WeeklyTwitchResponse<T> {
  data: T[];
  pagination: WeeklyTwitchPagination;
}

function buildParams(params: WeeklyTwitchParams): URLSearchParams {
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

export async function fetchOfficeHours(
  params: WeeklyTwitchParams,
): Promise<WeeklyTwitchResponse<OfficeHoursSession>> {
  const res = await publicGateway.get(weeklyTwitchesRoutes.officeHours, {
    params: buildParams(params),
  });
  return res.data.response;
}

export async function fetchSaltMangoTree(
  params: WeeklyTwitchParams,
): Promise<WeeklyTwitchResponse<WeeklyTwitchEpisode>> {
  const res = await publicGateway.get(weeklyTwitchesRoutes.saltMangoTree, {
    params: buildParams(params),
  });
  return res.data.response;
}

export async function fetchInspirationStation(
  params: WeeklyTwitchParams,
): Promise<WeeklyTwitchResponse<WeeklyTwitchEpisode>> {
  const res = await publicGateway.get(weeklyTwitchesRoutes.inspirationStation, {
    params: buildParams(params),
  });
  return res.data.response;
}

export async function fetchGrabYourSuperpowers(
  params: WeeklyTwitchParams,
): Promise<WeeklyTwitchResponse<GrabYourSuperpowersSession>> {
  const res = await publicGateway.get(weeklyTwitchesRoutes.grabYourSuperpowers, {
    params: buildParams(params),
  });
  return res.data.response;
}
