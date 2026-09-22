export interface LearnerRoleTag {
  label: string;
  id: string;
}

export interface Learner {
  full_name: string;
  total_karma: number;
  institution: string;
}

export interface TopLearner {
  name: string;
  kp: number;
}

export interface ExtendedTopLearner extends TopLearner {
  email?: string;
  avatar?: string;
}

export interface LearnerResponse extends Learner {
  muid?: string;
  profile_pic?: string;
}

/** `GET /public/profile-pic/<muid>/` response shape. */
export interface ProfilePicApiResponse {
  image: string | null;
}
