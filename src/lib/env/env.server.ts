/**
 * Server-Side Environment Variables
 *
 * ⚠️ NEVER import or use these variables in client-side code!
 * ⚠️ These contain secrets and must only be accessed in:
 *    - API Routes
 *    - Server Components
 *    - Server Actions
 *    - Build-time scripts
 *
 * This file will crash the app at boot if any required variable is missing or invalid.
 */

import { z } from "zod";

// ============================================================================
// Schema Definition
// ============================================================================

const serverEnvSchema = z.object({
  // Node Environment
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  DISCORD_CONTACT_WEBHOOK: z.string().url("DISCORD_CONTACT_WEBHOOK must be a valid URL"),

  // Captcha secret key
  RECAPTCHA_SECRET_KEY: z.string().optional(),
});

// ============================================================================
// Type Inference
// ============================================================================

export type ServerEnv = z.infer<typeof serverEnvSchema>;

// ============================================================================
// Validation & Export
// ============================================================================

let _serverEnv: ServerEnv | null = null;

/**
 * Parse and validate server environment variables.
 *
 * @throws {Error} If validation fails, with detailed error messages
 */
function validateServerEnv(): ServerEnv {
  if (_serverEnv) return _serverEnv;

  const parsed = serverEnvSchema.safeParse(process.env);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues
      .map((err) => `  - ${err.path.join(".")}: ${err.message}`)
      .join("\n");

    throw new Error(
      `❌ Invalid server environment variables:\n\n${errorMessages}\n\n` +
        `Please check your .env.local file and ensure all required variables are set.\n` +
        `See .env.example for reference.\n`,
    );
  }

  _serverEnv = parsed.data;
  return _serverEnv;
}

/**
 * Validated server environment variables.
 *
 * ⚠️ Usage:
 *   - serverEnv.GH_TOKEN
 *   - serverEnv.TINA_TOKEN
 *   - etc.
 *
 * DO NOT use process.env directly!
 */
export const serverEnv = new Proxy({} as ServerEnv, {
  get(_target, prop) {
    const env = validateServerEnv();
    return env[prop as keyof ServerEnv];
  },
});

// ============================================================================
// Runtime Safety Check
// ============================================================================

// Ensure this module never gets bundled into client-side code
if (typeof window !== "undefined") {
  throw new Error(
    "❌ serverEnv was imported on the client side!\n\n" +
      "Server environment variables contain secrets and must NEVER be used in client code.\n" +
      "Use clientEnv from '@/lib/env' instead for NEXT_PUBLIC_* variables.\n",
  );
}
