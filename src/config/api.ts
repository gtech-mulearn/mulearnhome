import { clientEnv } from "./env.client";

export const apiConfig = {
  baseUrl: clientEnv.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30000,
} as const;
