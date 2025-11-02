"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Mail, ArrowLeft } from "lucide-react";

interface DonationData {
  donationType: string;
  amount: number;
  name: string;
  email: string;
  [key: string]: unknown;
}

export default function DonateSuccessPage() {
  const router = useRouter();
  const [donationData, setDonationData] = useState<DonationData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("donationData");
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setDonationData(data);
      } catch (error) {
        console.error("Failed to parse donation data:", error);

        setTimeout(() => router.push("/donate"), 3000);
      }
    } else {
      setTimeout(() => router.push("/donate"), 3000);
    }
  }, [router]);

  const handleDownloadReceipt = () => {
    console.log("Download receipt clicked", donationData);
  };

  const formatDonationType = (type: string) => {
    return type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (!donationData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-mulearn-whitish to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mulearn-trusty-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-mulearn-whitish to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {}
        <div className="bg-mulearn-whitish rounded-2xl shadow-xl overflow-hidden">
          {}
          <div className="bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple px-8 py-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-mulearn-whitish rounded-full p-3">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-mulearn-whitish mb-2">
              Thank You!
            </h1>
            <p className="text-mulearn-trusty-blue text-lg">
              Your donation has been received successfully
            </p>
          </div>

          {}
          <div className="px-8 py-10">
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Donation Amount</p>
                  <p className="text-3xl font-bold text-mulearn-trusty-blue">
                    ₹{donationData.amount.toLocaleString("en-IN")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Donation Type</p>
                  <p className="text-xl font-semibold text-mulearn-blackish">
                    {formatDonationType(donationData.donationType)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Donor Name</p>
                  <p className="text-lg font-medium text-mulearn-blackish">
                    {donationData.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-lg font-medium text-mulearn-blackish break-all">
                    {donationData.email}
                  </p>
                </div>
              </div>
            </div>

            {}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-mulearn-trusty-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-mulearn-blackish leading-relaxed">
                    A confirmation email with your donation receipt has been
                    sent to{" "}
                    <span className="font-semibold">{donationData.email}</span>.
                    You can also download your receipt below.
                  </p>
                </div>
              </div>
            </div>

            {}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadReceipt}
                className="flex-1 h-12 bg-mulearn-trusty-blue hover:bg-mulearn-duke-purple text-mulearn-whitish"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Receipt
              </Button>
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="flex-1 h-12 border-2 border-gray-300 hover:bg-gray-50"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </div>

            {}
            <div className="mt-10 text-center">
              <p className="text-gray-600 leading-relaxed">
                Your generous contribution helps us empower thousands of
                learners across India. Together, we&apos;re building a vibrant
                learning community that breaks barriers and creates
                opportunities.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                If you have any questions, please contact us at{" "}
                <a
                  href="mailto:donate@mulearn.org"
                  className="text-mulearn-trusty-blue hover:underline"
                >
                  donate@mulearn.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
