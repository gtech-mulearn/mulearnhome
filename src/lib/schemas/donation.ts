/**
 * Donation-related Zod schemas and inferred types
 * Used by donation form, donation service, and API routes
 */
import { z } from "zod";
import { addressSchema, emailSchema, nameSchema, panSchema, phoneSchema } from "./common";

// ============================================================================
// Donation Type Schema
// ============================================================================

export const donationTypeSchema = z.enum(["one-time", "monthly", "yearly"]);
export type DonationType = z.infer<typeof donationTypeSchema>;

// ============================================================================
// Donation Form Schema (Frontend)
// ============================================================================

export const donationFormSchema = z
  .object({
    name: nameSchema,
    donationName: z.string().optional(),
    email: emailSchema,
    phone: phoneSchema,
    panNumber: panSchema,
    address: addressSchema,
    isOrganisation: z.boolean(),
    organisationName: z.string().optional(),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
    donationAmount: z
      .number()
      .min(1, "Please select or enter a donation amount")
      .positive("Donation amount must be positive"),
    donationType: donationTypeSchema,
  })
  .refine(
    (data) => {
      if (data.isOrganisation && (!data.organisationName || data.organisationName.trim() === "")) {
        return false;
      }
      return true;
    },
    {
      message: "Organisation name is required when paying as an organisation",
      path: ["organisationName"],
    },
  );

export type DonationFormData = z.infer<typeof donationFormSchema>;

// ============================================================================
// Donation API Payload Schema (Backend)
// ============================================================================

export const donationPayloadSchema = z.object({
  amount: z.number().positive("Amount must be positive"),
  currency: z.string().default("INR"),
  name: nameSchema,
  donation_name: z.string().optional(),
  email: emailSchema,
  company: z.string().optional(),
  phone_number: phoneSchema,
  pan_number: panSchema,
  address: addressSchema,
  donation_type: z.string(),
  is_organisation: z.boolean(),
});

export type DonationPayload = z.infer<typeof donationPayloadSchema>;

// ============================================================================
// Razorpay Response Types
// ============================================================================

export interface RazorpayOrderResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface RazorpaySubscriptionResponse {
  razorpay_subscription_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface RazorpayErrorResponse {
  error: {
    code: string;
    description: string;
    source: string;
    step: string;
    reason: string;
    metadata: {
      order_id: string;
      payment_id: string;
    };
  };
}

// ============================================================================
// Donation Form Payload (Frontend to Service)
// ============================================================================

export interface DonationFormPayload {
  amount: number;
  name: string;
  donationName?: string;
  email: string;
  mobile: string;
  pan: string;
  address: string;
  donationType: DonationType;
  isOrganisation: boolean;
  organisationName?: string;
  currency?: string;
}
