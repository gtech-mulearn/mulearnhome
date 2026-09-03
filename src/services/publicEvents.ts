import type { PublicEvent, PublicEventsParams } from "@/lib/types";
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

  return out;
}

// 5c: response is a plain array — no data/pagination wrapper
export async function fetchPublicEvents(params?: PublicEventsParams): Promise<PublicEvent[]> {
  const res = await publicGateway.get(publicEventsRoutes.getEvents, {
    params: params ? buildParams(params) : undefined,
  });
  return res.data.response;
}
