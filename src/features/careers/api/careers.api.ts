import { publicGateway } from "@/lib/fetcher";
import type { ApiResponse, Pagination } from "@/shared";
import { endpoints } from "@/shared";
import type {
  OngoingHiring,
  OngoingHiringApiResponse,
  PreviousHiring,
  PreviousHiringApiResponse,
} from "../types/careers.types";

export interface PaginatedCareersResponse<T> {
  data: T[];
  pagination: Pagination | null;
}

export async function fetchOngoingHiringPage(
  pageIndex = 1,
  perPage = 12,
): Promise<PaginatedCareersResponse<OngoingHiring>> {
  const qs = new URLSearchParams({ pageIndex: String(pageIndex), perPage: String(perPage) });
  const envelope = await publicGateway.get<ApiResponse<OngoingHiringApiResponse>>(
    `${endpoints.careerLab.ongoing}?${qs}`,
  );
  // Backend never sends `pagination` for this endpoint — see docs/api-schema-audit-2026-08-29.md.
  return { data: envelope.response.data, pagination: null };
}

export async function fetchPreviousHiringPage(
  pageIndex = 1,
  perPage = 12,
): Promise<PaginatedCareersResponse<PreviousHiring>> {
  const qs = new URLSearchParams({ pageIndex: String(pageIndex), perPage: String(perPage) });
  const envelope = await publicGateway.get<ApiResponse<PreviousHiringApiResponse>>(
    `${endpoints.careerLab.previous}?${qs}`,
  );
  return { data: envelope.response.data, pagination: envelope.response.pagination };
}
