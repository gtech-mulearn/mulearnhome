import { publicGateway } from "@/lib/fetcher";
import type { ApiResponse } from "@/shared";
import { endpoints } from "@/shared";
import type { ApiPublicInterestGroup, PublicIgApiResponse } from "../types/interest-groups.types";

export async function fetchPublicInterestGroups(): Promise<ApiPublicInterestGroup[]> {
  try {
    const envelope = await publicGateway.get<ApiResponse<PublicIgApiResponse>>(
      endpoints.interestGroups.list,
    );
    const groups = envelope.response?.interestGroups;
    return Array.isArray(groups) ? groups : [];
  } catch (error) {
    console.error("Error fetching public interest groups:", error);
    return [];
  }
}
