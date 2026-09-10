import { toast } from "sonner";
import { clientEnv } from "@/lib/env/env.client";
import type {
  DonationFormPayload,
  RazorpayErrorResponse,
  RazorpayOrderResponse,
  RazorpaySubscriptionResponse,
} from "@/lib/schemas/donation";
import type { RazorpayConstructor } from "@/lib/types/razorpay";
import { publicGateway } from "./apiGateway";
import { donationRoutes } from "./urls";

declare global {
  interface Window {
    Razorpay: RazorpayConstructor;
  }
}

// Re-export for backwards compatibility
export type { DonationFormPayload } from "@/lib/schemas/donation";

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Creates common Razorpay options shared between one-time and subscription payments
 */
const createBaseRazorpayOptions = (data: DonationFormPayload, razorpayKey: string) => ({
  key: razorpayKey,
  name: "µLearn Foundation",
  image: "/assets/logo.png",
  prefill: {
    name: data.name,
    email: data.email,
    contact: data.mobile,
  },
  notes: {
    donation_type: data.donationType,
    is_organisation: data.isOrganisation.toString(),
    organisation_name: data.organisationName || "N/A",
  },
  theme: {
    color: "#456ff6",
  },
});

/**
 * Handles successful payment verification and redirects to success page
 */
const handlePaymentSuccess = (
  pdfData: Record<string, unknown>,
  data: DonationFormPayload,
  paymentId: string,
  orderId?: string,
  subscriptionId?: string,
) => {
  localStorage.setItem(
    "donationData",
    JSON.stringify({
      ...pdfData,
      donationType: data.donationType,
      amount: data.amount,
      name: data.name,
      email: data.email,
      paymentId,
      orderId,
      subscriptionId,
      isSubscription: !!subscriptionId,
    }),
  );

  const storeData = localStorage.getItem("donationData");
  if (storeData) {
    window.location.href = "/donate/success";
  } else {
    console.error("Failed to store donation data.");
    toast.error("Payment successful but unable to load receipt.");
  }
};

/**
 * Handles Razorpay payment errors
 */
const handlePaymentError = (response: RazorpayErrorResponse) => {
  toast.error(response.error.description || "Payment failed. Please try again.");
  console.error("Payment failed:", response.error);
};

/**
 * Extracts and formats error message from API response
 */
const getApiErrorMessage = (error: unknown, defaultMessage: string): string => {
  return (
    (error as { response?: { data?: { message?: { general?: string[] } } } })?.response?.data
      ?.message?.general?.[0] || defaultMessage
  );
};

// Helper function to load Razorpay script
const loadRazorpayScript = async (): Promise<void> => {
  // Check if script is already loaded
  if (window.Razorpay) return;

  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  document.body.appendChild(script);

  await new Promise<void>((resolve) => {
    script.onload = () => resolve();
  });
};

// Helper function to get Razorpay key
const getRazorpayKey = (): string => {
  const razorpayKey = clientEnv.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  if (!razorpayKey) {
    toast.error("Payment configuration error. Please contact support.");
    console.error("NEXT_PUBLIC_RAZORPAY_KEY_ID is not configured");
    throw new Error("Razorpay key is missing");
  }
  return razorpayKey;
};

/**
 * Submit a one-time donation using Razorpay Orders API
 */
export const submitDonationForm = async (data: DonationFormPayload) => {
  await loadRazorpayScript();

  try {
    const response = await publicGateway.post(donationRoutes.order, {
      amount: data.amount,
      currency: data.currency || "INR",
      name: data.name,
      donation_name: data.donationName,
      company: data.isOrganisation ? data.organisationName : undefined,
      email: data.email,
      phone_number: data.mobile,
      pan_number: data.pan,
      address: data.address,
      donation_type: data.donationType,
      is_organisation: data.isOrganisation,
    });

    const paymentId: string = response.data.response.id;
    const paymentAmount: string = response.data.response.amount;
    const currency: string = response.data.response.currency;

    const razorpayKey = getRazorpayKey();

    const baseOptions = createBaseRazorpayOptions(data, razorpayKey);

    const options = {
      ...baseOptions,
      amount: paymentAmount,
      currency: currency,
      description: `Donation - ${data.donationType.charAt(0).toUpperCase() + data.donationType.slice(1)}`,
      order_id: paymentId,
      handler: (response: RazorpayOrderResponse) => {
        publicGateway
          .post(donationRoutes.verify, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          })
          .then((res) => {
            toast.success(
              res?.data?.message?.general?.[0] ||
                "Payment Successful! Thank you for your donation.",
            );
            handlePaymentSuccess(
              res?.data,
              data,
              response.razorpay_payment_id,
              response.razorpay_order_id,
            );
          })
          .catch((error) => {
            console.error("Payment verification error:", error);
            toast.error(
              getApiErrorMessage(error, "Error in validating payment. Please contact support."),
            );
          });
      },
      modal: {
        ondismiss: () => {
          toast.error("Payment cancelled");
        },
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", handlePaymentError);

    rzp1.open();
  } catch (error: unknown) {
    console.error("Donation submission error:", error);
    toast.error(getApiErrorMessage(error, "Error in processing donation. Please try again."));
    throw error;
  }
};

/**
 * Submit a recurring donation (monthly/yearly) using Razorpay Subscriptions API
 */
export const submitSubscription = async (data: DonationFormPayload) => {
  await loadRazorpayScript();

  try {
    // Create subscription on backend
    const response = await publicGateway.post(donationRoutes.subscription, {
      amount: data.amount,
      currency: data.currency || "INR",
      name: data.name,
      donation_name: data.donationName,
      company: data.isOrganisation ? data.organisationName : undefined,
      email: data.email,
      phone_number: data.mobile,
      pan_number: data.pan,
      address: data.address,
      donation_type: data.donationType,
      is_organisation: data.isOrganisation,
    });

    const subscriptionId: string = response.data.response.subscription_id;
    const amount: number = response.data.response.amount;
    const _currency: string = response.data.response.currency;

    const razorpayKey = getRazorpayKey();

    const baseOptions = createBaseRazorpayOptions(data, razorpayKey);

    const options = {
      ...baseOptions,
      subscription_id: subscriptionId,
      description: `${data.donationType.charAt(0).toUpperCase() + data.donationType.slice(1)} Recurring Donation - ₹${(amount / 100).toLocaleString("en-IN")}`,
      handler: (response: RazorpaySubscriptionResponse) => {
        publicGateway
          .post(donationRoutes.subscriptionVerify, {
            razorpay_subscription_id: response.razorpay_subscription_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          })
          .then((res) => {
            toast.success(
              res?.data?.message?.general?.[0] ||
                "Subscription Successful! Thank you for your recurring donation.",
            );
            handlePaymentSuccess(
              res?.data,
              data,
              response.razorpay_payment_id,
              undefined,
              response.razorpay_subscription_id,
            );
          })
          .catch((error) => {
            console.error("Subscription verification error:", error);
            toast.error(
              getApiErrorMessage(
                error,
                "Error in validating subscription. Please contact support.",
              ),
            );
          });
      },
      modal: {
        ondismiss: () => {
          toast.error("Subscription cancelled");
        },
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", handlePaymentError);

    rzp1.open();
  } catch (error: unknown) {
    console.error("Subscription submission error:", error);
    toast.error(getApiErrorMessage(error, "Error in processing subscription. Please try again."));
    throw error;
  }
};
