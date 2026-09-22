import { publicGateway } from "@/lib/fetcher";
import type { ApiResponse } from "@/shared";
import type {
  ExtendedTopLearner,
  Learner,
  LearnerResponse,
  ProfilePicApiResponse,
} from "../types/profile.types";
import { endpoints } from "./endpoints";

export const fetchTopLearners = async (limit: number = 10): Promise<ExtendedTopLearner[]> => {
  try {
    const envelope = await publicGateway.get<ApiResponse<Learner[]>>(endpoints.profile.topLearners);
    const learners = envelope.response;

    return learners.slice(0, limit).map((item) => ({
      name: item.full_name,
      kp: item.total_karma,
      email:
        (item as LearnerResponse).muid ||
        `${item.full_name.toLowerCase().replace(/\s+/g, "")}@mulearn`,
      avatar: (item as LearnerResponse).profile_pic || undefined,
    }));
  } catch (error) {
    console.error("Error fetching learners:", error);
    return [];
  }
};

export const fetchPublicProfileImage = async (muid: string) => {
  try {
    const envelope = await publicGateway.get<ApiResponse<ProfilePicApiResponse>>(
      `${endpoints.profile.profilePic}${muid}/`,
    );
    return envelope.response.image ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
