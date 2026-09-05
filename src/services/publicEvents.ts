import type { PublicEventsParams, PublicEventsResponse } from "@/lib/types";
import { publicGateway } from "./apiGateway";
import { publicEventsRoutes } from "./urls";

function buildParams(params: PublicEventsParams): URLSearchParams {
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

const EMPTY_PAGINATION: PublicEventsResponse["pagination"] = {
  count: 0,
  totalPages: 0,
  isNext: false,
  isPrev: false,
  nextPage: null,
};

export async function fetchPublicEvents(
  params?: PublicEventsParams,
): Promise<PublicEventsResponse> {
  const res = await publicGateway.get(publicEventsRoutes.getEvents, {
    params: params ? buildParams(params) : undefined,
  });
  const response = res.data.response;

  // Backend may still return a plain array (pre-pagination contract) instead
  // of the { data, pagination } wrapper — normalize so callers always get both.
  if (Array.isArray(response)) {
    return {
      data: response,
      pagination: { ...EMPTY_PAGINATION, count: response.length },
    };
  }

  return response;
}
