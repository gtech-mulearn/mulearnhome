// src/service/cdn.ts
export function cdnUrl(path: string): string {
  // Pull CDN URL from environment variables
  const base = process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") || "";
  const cleanPath = path.replace(/^\/+/, ""); // remove leading slashes
  return `${base}/${cleanPath}`;
}
