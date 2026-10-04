/**
 * Razorpay TypeScript definitions
 * @see https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/
 */

export interface RazorpayPrefill {
  name?: string;
  email?: string;
  contact?: string;
}

export interface RazorpayNotes {
  [key: string]: string | undefined;
}

export interface RazorpayTheme {
  color?: string;
  backdrop_color?: string;
}

export interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_subscription_id?: string;
  razorpay_signature: string;
}

export interface RazorpayErrorResponse {
  error: {
    code: string;
    description: string;
    source: string;
    step: string;
    reason: string;
    metadata?: Record<string, unknown>;
  };
}

export interface RazorpayOptions {
  key: string;
  amount?: number | string;
  currency?: string;
  name?: string;
  description?: string;
  image?: string;
  order_id?: string;
  subscription_id?: string;
  prefill?: RazorpayPrefill;
  notes?: RazorpayNotes;
  theme?: RazorpayTheme;
  // biome-ignore lint/suspicious/noExplicitAny: Handler response type varies by payment type
  handler?: (response: any) => void;
  modal?: {
    ondismiss?: () => void;
    confirm_close?: boolean;
  };
}

export interface RazorpayInstance {
  open(): void;
  close(): void;
  // biome-ignore lint/suspicious/noExplicitAny: Event callback type varies
  on(event: string, callback: (response: any) => void): void;
}

export interface RazorpayConstructor {
  new (options: RazorpayOptions): RazorpayInstance;
}

declare global {
  interface Window {
    Razorpay: RazorpayConstructor;
  }
}
