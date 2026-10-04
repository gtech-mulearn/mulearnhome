// Client-side API gateway. Native `fetch()` — no axios (axios was the only consumer in the
// bundle; its browser build dragged in a dead ~22.5KB Buffer polyfill on top of axios itself,
// see docs/js-floor-investigation-2026-08-29.md). Request/error pipeline cloned from
// mulearn-dashboard's src/api/client.ts (same backend, same CustomResponse envelope), minus
// the authStore/token-refresh machinery — mulearnhome has no login, so there's only ever one
// gateway, no `authenticated` flag to thread through.

import type { z } from "zod";
import { apiConfig } from "@/config/api";
import { extractDjangoMessage } from "./errors";

/** Thrown by `publicGateway` on any network failure, HTTP error, or Django business error (`hasError: true`). */
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function logSchemaMismatch(endpoint: string, issues: unknown): void {
  if (process.env.NODE_ENV === "development") {
    console.error(`⚠️ API schema mismatch [${endpoint}]`, issues);
  }
}

/** True for Django's `{ hasError: true, ... }` business-error envelope, which can ride on an HTTP 200. */
function isBusinessError(data: unknown): boolean {
  return (
    !!data &&
    typeof data === "object" &&
    "hasError" in data &&
    (data as { hasError: unknown }).hasError === true
  );
}

/**
 * Mirrors axios's `baseURL` + `url` behavior: plain string concatenation, not WHATWG `URL`
 * resolution — `new URL("/donate/order/", "https://mulearn.org/api/v1")` would resolve to
 * `https://mulearn.org/donate/order/`, silently dropping the `/api/v1` path segment.
 */
function buildUrl(endpoint: string): string {
  return apiConfig.baseUrl.replace(/\/$/, "") + endpoint;
}

interface RequestOptions<T> {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  schema?: z.ZodSchema<T>;
  headers?: HeadersInit;
  responseType?: "json" | "blob";
  /** When true, sends body as FormData (no JSON.stringify, no Content-Type). */
  isFormData?: boolean;
  /** When true, a Zod parse failure throws instead of returning the raw body. */
  strictSchema?: boolean;
}

type ClientOptions = {
  headers?: HeadersInit;
  responseType?: "json" | "blob";
  isFormData?: boolean;
  strictSchema?: boolean;
};

async function request<T>(endpoint: string, options: RequestOptions<T>): Promise<T> {
  const isFormData = options.isFormData === true;
  const requestHeaders: Record<string, string> = isFormData
    ? {}
    : { "Content-Type": "application/json" };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), apiConfig.timeout);

  let res: Response;
  try {
    res = await fetch(buildUrl(endpoint), {
      method: options.method,
      headers: { ...requestHeaders, ...options.headers },
      body: isFormData
        ? (options.body as FormData)
        : options.body !== undefined
          ? JSON.stringify(options.body)
          : undefined,
      cache: "no-store",
      signal: controller.signal,
    });
  } catch (error) {
    // No backend message exists for a network failure — leave ApiError.message empty so
    // `error.message || fallback` at the call site (getApiResponseError) shows the caller's
    // own friendly fallback text instead of a raw browser error string. The raw error is
    // still logged for debugging.
    if (process.env.NODE_ENV === "development") {
      console.error(`[Fetcher] Network error: ${endpoint}`, error);
    }
    throw new ApiError(0, "");
  } finally {
    clearTimeout(timeoutId);
  }

  // ── Blob branch ───────────────────────────────────────────
  if (options.responseType === "blob") {
    if (res.ok) return (await res.blob()) as T;
    const errData = await res.json().catch(() => null);
    // Empty string (not a generic fallback) when the backend gave no parseable message —
    // matches production's pattern of letting the call site supply its own fallback text
    // via `error.message || fallback`, rather than baking one in here.
    throw new ApiError(res.status, extractDjangoMessage(errData) ?? "", errData);
  }

  // ── JSON branch ───────────────────────────────────────────
  const rawData = await res.json().catch(() => null);

  if (isBusinessError(rawData)) {
    const backendMsg = extractDjangoMessage(rawData);
    if (process.env.NODE_ENV === "development") {
      console.error(
        `[Fetcher] Business error: [Status ${res.status}] ${endpoint}\nMessage: ${backendMsg}`,
        rawData,
      );
    }
    throw new ApiError(res.status, backendMsg ?? "", rawData);
  }

  if (!res.ok) {
    const backendMsg = extractDjangoMessage(rawData);
    if (process.env.NODE_ENV === "development") {
      console.error(
        `[Fetcher] HTTP error: [Status ${res.status}] ${endpoint}\nMessage: ${backendMsg}`,
        rawData,
      );
    }
    throw new ApiError(res.status, backendMsg ?? "", rawData);
  }

  if (options.schema) {
    const parsed = options.schema.safeParse(rawData);
    if (!parsed.success) {
      logSchemaMismatch(endpoint, parsed.error.issues);
      if (options.strictSchema) {
        throw new ApiError(res.status, `Schema validation failed: ${endpoint}`, rawData);
      }
      return rawData as T;
    }
    return parsed.data;
  }

  return rawData as T;
}

/** No Authorization header — mulearnhome has no login, so this is the only gateway. */
export const publicGateway = {
  get: <T>(endpoint: string, schema?: z.ZodSchema<T>, options?: ClientOptions) =>
    request<T>(endpoint, { method: "GET", schema, ...options }),
  post: <T>(endpoint: string, body?: unknown, schema?: z.ZodSchema<T>, options?: ClientOptions) =>
    request<T>(endpoint, { method: "POST", body, schema, ...options }),
  put: <T>(endpoint: string, body?: unknown, schema?: z.ZodSchema<T>, options?: ClientOptions) =>
    request<T>(endpoint, { method: "PUT", body, schema, ...options }),
  patch: <T>(endpoint: string, body?: unknown, schema?: z.ZodSchema<T>, options?: ClientOptions) =>
    request<T>(endpoint, { method: "PATCH", body, schema, ...options }),
  delete: <T>(endpoint: string, body?: unknown, schema?: z.ZodSchema<T>, options?: ClientOptions) =>
    request<T>(endpoint, { method: "DELETE", body, schema, ...options }),
};
