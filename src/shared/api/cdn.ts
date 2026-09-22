import { clientEnv } from "@/config/env.client";

export function cdnUrl(path: string): string {
  const base = clientEnv.NEXT_PUBLIC_CDN_URL;
  const cleanPath = path.replace(/^\/+/, "");
  return `${base}/${cleanPath}`;
}
