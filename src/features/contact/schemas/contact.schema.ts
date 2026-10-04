/**
 * Contact-related Zod schemas and inferred types
 * Used by contact form, mail service, and API routes
 */
import { z } from "zod";
import { emailSchema, internationalPhoneSchema, messageSchema, nameSchema } from "@/shared";

// ============================================================================
// Contact Intent Schema
// ============================================================================

export const contactIntentSchema = z.enum([
  "student",
  "partner",
  "program",
  "hiring",
  "events",
  "media",
  "support",
  "other",
]);

export type ContactIntent = z.infer<typeof contactIntentSchema>;

// ============================================================================
// Contact Form Schema
// ============================================================================

export const contactFormSchema = z.object({
  intent: contactIntentSchema,
  name: nameSchema,
  email: emailSchema,
  phone: internationalPhoneSchema.optional().or(z.literal("")),
  region: z.string().optional(),
  message: messageSchema,
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),

  // Student-specific fields
  institution: z.string().optional(),
  courseYear: z.string().optional(),
  campusChapter: z.string().optional(),
  interestGroups: z.string().optional(),

  // Partner-specific fields
  organization: z.string().optional(),
  organizationType: z.string().optional(),
  focusArea: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),

  // Program-specific fields
  programType: z.string().optional(),
  targetCohort: z.string().optional(),

  // Hiring-specific fields
  role: z.string().optional(),
  skills: z.string().optional(),
  numberOfHires: z.string().optional(),

  // Events-specific fields
  eventName: z.string().optional(),
  eventDate: z.string().optional(),

  // Media-specific fields
  outlet: z.string().optional(),
  deadline: z.string().optional(),

  // Support-specific fields
  issueCategory: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ============================================================================
// Email Data Schema (for mail service)
// ============================================================================

export const emailDataSchema = z.object({
  intent: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string().optional(),
  region: z.string().optional(),
  message: z.string(),
  institution: z.string().optional(),
  courseYear: z.string().optional(),
  campusChapter: z.string().optional(),
  interestGroups: z.string().optional(),
  organization: z.string().optional(),
  organizationType: z.string().optional(),
  focusArea: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  programType: z.string().optional(),
  targetCohort: z.string().optional(),
  role: z.string().optional(),
  skills: z.string().optional(),
  numberOfHires: z.string().optional(),
  eventName: z.string().optional(),
  eventDate: z.string().optional(),
  outlet: z.string().optional(),
  deadline: z.string().optional(),
  issueCategory: z.string().optional(),
  ticketId: z.string().optional(),
});

export type EmailData = z.infer<typeof emailDataSchema>;

// ============================================================================
// API Request Schema (for backend validation)
// ============================================================================

export const contactApiRequestSchema = contactFormSchema.extend({
  // Backend may receive string "true"/"false" for consent
  consent: z
    .union([z.boolean(), z.literal("true"), z.literal("false")])
    .transform((val) => val === true || val === "true"),
});

export type ContactApiRequest = z.infer<typeof contactApiRequestSchema>;
