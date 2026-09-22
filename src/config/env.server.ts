/**
 * Server-Side Environment Variables
 *
 * ⚠️ NEVER import or use these variables in client-side code!
 * ⚠️ These contain secrets and must only be accessed in API Routes, Server
 *    Components, Server Actions, or build-time scripts.
 */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    DISCORD_CONTACT_WEBHOOK: z.string().url("DISCORD_CONTACT_WEBHOOK must be a valid URL"),
    RECAPTCHA_SECRET_KEY: z.string().optional(),
  },
  runtimeEnv: {
    DISCORD_CONTACT_WEBHOOK: process.env.DISCORD_CONTACT_WEBHOOK,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
  },
});
