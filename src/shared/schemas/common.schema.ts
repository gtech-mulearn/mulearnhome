/**
 * Common Zod validation schemas used across the application
 * Import these to ensure consistent validation between frontend and backend
 */
import { z } from "zod";

// ============================================================================
// Basic Field Schemas
// ============================================================================

/**
 * Email validation schema with proper format and length constraints
 */
export const emailSchema = z
  .string()
  .email("Please enter a valid email address")
  .min(5, "Email is required")
  .max(254, "Email must not exceed 254 characters");

/**
 * Indian phone number validation (10 digits with optional +91 prefix)
 */
export const phoneSchema = z
  .string()
  .regex(/^(\+91[\s]?)?[0-9]{10}$/, "Please enter a valid 10-digit phone number")
  .min(10, "Phone number must be 10 digits");

/**
 * International phone number validation.
 * Accepts E.164-style input with optional spaces, hyphens, parentheses, and dots
 * as visual separators. Requires 7-15 digits total (ITU-T E.164 max).
 */
export const internationalPhoneSchema = z
  .string()
  .transform((val) => val.trim())
  .pipe(
    z
      .string()
      .regex(
        /^\+?[0-9\s\-().]{7,20}$/,
        "Please enter a valid phone number (digits, optional + prefix)",
      )
      .refine((val) => val.replace(/\D/g, "").length >= 7 && val.replace(/\D/g, "").length <= 15, {
        message: "Phone number must have 7-15 digits",
      }),
  );

/**
 * Name validation - letters and spaces only
 */
export const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(100, "Name must not exceed 100 characters")
  .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces");

/**
 * Indian PAN card number validation
 * Auto-transforms to uppercase before validation
 */
export const panSchema = z
  .string()
  .transform((val) => val.toUpperCase())
  .pipe(
    z
      .string()
      .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format. Use format: ABCDE1234F")
      .length(10, "PAN must be exactly 10 characters"),
  );

/**
 * Address validation with length constraints
 */
export const addressSchema = z
  .string()
  .min(10, "Address must be at least 10 characters")
  .max(500, "Address must not exceed 500 characters");

/**
 * Generic message/text field validation
 */
export const messageSchema = z
  .string()
  .min(1, "Message is required")
  .max(5000, "Message must be less than 5000 characters");

/**
 * Boolean consent field that must be true
 */
export const consentSchema = z
  .boolean()
  .refine((val) => val === true, "You must agree to the terms");

// ============================================================================
// Utility Types
// ============================================================================

export type Email = z.infer<typeof emailSchema>;
export type Phone = z.infer<typeof phoneSchema>;
export type Name = z.infer<typeof nameSchema>;
export type PAN = z.infer<typeof panSchema>;
export type Address = z.infer<typeof addressSchema>;
