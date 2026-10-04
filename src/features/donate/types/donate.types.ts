import type { LucideIcon } from "lucide-react";

export interface DonationTier {
  id: string;
  label: string;
  amount: number;
  description: string;
  icon: LucideIcon | string;
}

export interface DonationCategory {
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface DonationFormPayload {
  amount: number;
  name: string;
  donationName?: string;
  email: string;
  mobile: string;
  pan: string;
  address?: string;
  donationType: "one-time" | "monthly" | "yearly";
  isOrganisation: boolean;
  organisationName?: string;
  currency?: string;
}

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

/** `POST /donate/order/` response shape — the raw Razorpay order object. */
export interface DonateOrderApiResponse {
  id: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  status: string;
  notes: Record<string, unknown>;
  created_at: number;
}

/** `POST /donate/subscription/create/` response shape. */
export interface DonateSubscriptionCreateApiResponse {
  subscription_id: string;
  plan_id: string;
  status: string;
  short_url: string;
  amount: number;
  currency: string;
  donation_type: string;
}

/** Shared shape of `/donate/verify/` and `/donate/subscription/verify/` — capitalized field names, matches the backend's `transaction_details` dict exactly. Only spread into `localStorage`, never destructured by name (see docs/api-schema-audit-2026-08-29.md). */
export interface DonateVerifyApiResponse {
  Amount: number;
  Currency: string;
  payment_id: string;
  Payment_method: string;
  Name: string;
  Email: string;
  Company?: string;
  "Phone Number"?: string;
  "PAN number"?: string;
  Address?: string;
  invoice_pdf: string;
  invoice_number: string;
  subscription_id?: string;
  Donation_Type?: string;
  Status?: string;
}
