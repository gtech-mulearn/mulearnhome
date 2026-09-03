import type { OngoingHiring, PaginationMeta, PreviousHiring } from "@/lib/types";
import { publicGateway } from "./apiGateway";
import { careerLabRoutes } from "./urls";

export interface PaginatedCareersResponse<T> {
  data: T[];
  pagination: PaginationMeta;
}

function parsePaginatedResponse<T>(raw: unknown): PaginatedCareersResponse<T> {
  if (
    !raw ||
    typeof raw !== "object" ||
    !Array.isArray((raw as { data?: unknown }).data) ||
    !(raw as { pagination?: unknown }).pagination ||
    typeof (raw as { pagination?: unknown }).pagination !== "object"
  ) {
    throw new Error("Malformed career listing response");
  }
  const { data, pagination } = raw as { data: T[]; pagination: PaginationMeta };
  return { data, pagination };
}

export async function fetchOngoingHiringPage(
  pageIndex = 1,
  perPage = 12,
): Promise<PaginatedCareersResponse<OngoingHiring>> {
  const res = await publicGateway.get(careerLabRoutes.ongoing, {
    params: { pageIndex, perPage },
  });
  return parsePaginatedResponse<OngoingHiring>(res.data?.response);
}

export async function fetchPreviousHiringPage(
  pageIndex = 1,
  perPage = 12,
): Promise<PaginatedCareersResponse<PreviousHiring>> {
  const res = await publicGateway.get(careerLabRoutes.previous, {
    params: { pageIndex, perPage },
  });
  return parsePaginatedResponse<PreviousHiring>(res.data?.response);
}
