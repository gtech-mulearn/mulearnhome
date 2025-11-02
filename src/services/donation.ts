import { toast } from "sonner";
import { publicGateway } from "./apiGateway";
import { donationRoutes } from "./urls";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

export interface DonationFormPayload {
  amount: number;
  name: string;
  email: string;
  mobile: string;
  pan: string;
  donationType: "one-time" | "monthly" | "yearly";
  isOrganisation: boolean;
  organisationName?: string;
}

export const submitDonationForm = async (data: DonationFormPayload) => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  document.body.appendChild(script);

  await new Promise<void>((resolve) => {
    script.onload = () => resolve();
  });

  try {
    const response = await publicGateway.post(donationRoutes.order, {
      amount: data.amount,
      name: data.name,
      company: data.isOrganisation ? data.organisationName : undefined,
      email: data.email,
      mobile: data.mobile,
      pan: data.pan,
      donation_type: data.donationType,
      is_organisation: data.isOrganisation,
    });

    const paymentId: string = response.data.response.id;
    const paymentAmount: string = response.data.response.amount;
    const currency: string = response.data.response.currency;

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    if (!razorpayKey) {
      toast.error("Payment configuration error. Please contact support.");
      console.error("NEXT_PUBLIC_RAZORPAY_KEY_ID is not configured");
      throw new Error("Razorpay key is missing");
    }

    const options = {
      key: razorpayKey, // Use 'key' not 'key_id'
      amount: paymentAmount,
      currency: currency,
      name: "µLearn Foundation",
      description: `Donation - ${
        data.donationType.charAt(0).toUpperCase() + data.donationType.slice(1)
      }`,
      image: "/assets/logo.png",
      order_id: paymentId,
      handler: function (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) {
        publicGateway
          .post(donationRoutes.verify, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          })
          .then((res) => {
            toast.success(
              res?.data?.message?.general?.[0] ||
                "Payment Successful! Thank you for your donation."
            );

            const pdfData = res?.data;
            localStorage.setItem(
              "donationData",
              JSON.stringify({
                ...pdfData,
                donationType: data.donationType,
                amount: data.amount,
                name: data.name,
                email: data.email,
              })
            );

            const storeData = localStorage.getItem("donationData");
            if (storeData) {
              window.location.href = "/donate/success";
            } else {
              console.error("Failed to store donation data.");
              toast.error("Payment successful but unable to load receipt.");
            }
          })
          .catch((error) => {
            console.error("Payment verification error:", error);
            toast.error(
              error?.response?.data?.message?.general?.[0] ||
                "Error in validating payment. Please contact support."
            );
          });
      },
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
      modal: {
        ondismiss: function () {
          toast.error("Payment cancelled");
        },
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on(
      "payment.failed",
      function (response: {
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
      }) {
        toast.error(
          response.error.description || "Payment failed. Please try again."
        );
        console.error("Payment failed:", response.error);
      }
    );

    rzp1.open();
  } catch (error: unknown) {
    console.error("Donation submission error:", error);
    const errorMessage =
      (error as { response?: { data?: { message?: { general?: string[] } } } })
        ?.response?.data?.message?.general?.[0] ||
      "Error in processing donation. Please try again.";
    toast.error(errorMessage);
    throw error;
  }
};
