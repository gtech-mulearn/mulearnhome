"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type DonationType = "one-time" | "monthly" | "yearly";

interface FormData {
  name: string;
  email: string;
  phone: string;
  panNumber: string;
  isOrganisation: boolean;
  organisationName: string;
  termsAccepted: boolean;
}

export default function DonationForm() {
  const [donationType, setDonationType] = useState<DonationType>("one-time");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    panNumber: "",
    isOrganisation: false,
    organisationName: "",
    termsAccepted: false,
  });

  const donationAmounts = [
    { id: "amount-10000", label: "₹10,000", amount: 10000 },
    { id: "amount-50000", label: "₹50,000", amount: 50000 },
    { id: "amount-100000", label: "₹1,00,000", amount: 100000 },
    { id: "amount-500000", label: "₹5,00,000", amount: 500000 },
    { id: "amount-custom", label: "Custom Amount", isCustom: true },
  ];

  const handleAmountChange = (optionId: string, amount?: number) => {
    setSelectedAmount(optionId);
    if (amount) {
      setTotalAmount(amount);
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseFloat(value) || 0;
    setTotalAmount(numValue);
  };

  const handleFormChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const renderDonationForm = (tabType: string) => (
    <TabsContent value={tabType} className="space-y-8 mt-8">
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-mulearn-blackish tracking-tight">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-mulearn-gray-600"
            >
              Full Name <span className="text-mulearn-trusty-blue">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => handleFormChange("name", e.target.value)}
              className="h-11 bg-mulearn-whitish border-mulearn-gray-600/20 focus:border-mulearn-trusty-blue focus:ring-1 focus:ring-mulearn-trusty-blue transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-mulearn-gray-600"
            >
              Email Address <span className="text-mulearn-trusty-blue">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={(e) => handleFormChange("email", e.target.value)}
              className="h-11 bg-mulearn-white border-mulearn-gray-600/20 focus:border-mulearn-trusty-blue focus:ring-1 focus:ring-mulearn-trusty-blue transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-mulearn-gray-600"
            >
              Phone Number <span className="text-mulearn-trusty-blue">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleFormChange("phone", e.target.value)}
              className="h-11 bg-mulearn-whitish border-mulearn-gray-600/20 focus:border-mulearn-trusty-blue focus:ring-1 focus:ring-mulearn-trusty-blue transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="pan"
              className="text-sm font-medium text-mulearn-gray-600"
            >
              PAN Number <span className="text-mulearn-trusty-blue">*</span>
            </Label>
            <Input
              id="pan"
              type="text"
              placeholder="ABCDE1234F"
              value={formData.panNumber}
              onChange={(e) =>
                handleFormChange("panNumber", e.target.value.toUpperCase())
              }
              className="h-11 bg-mulearn-whitish border-mulearn-gray-600/20 focus:border-mulearn-trusty-blue focus:ring-1 focus:ring-mulearn-trusty-blue transition-all"
              maxLength={10}
              required
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <input
            type="checkbox"
            id="isOrganisation"
            checked={formData.isOrganisation}
            onChange={(e) =>
              handleFormChange("isOrganisation", e.target.checked)
            }
            className="w-4 h-4 text-mulearn-trusty-blue border-mulearn-gray-600/30 rounded focus:ring-2 focus:ring-mulearn-trusty-blue focus:ring-offset-0 transition-all cursor-pointer"
          />
          <Label
            htmlFor="isOrganisation"
            className="text-sm font-medium text-mulearn-gray-600 cursor-pointer"
          >
            I&apos;m paying as an organisation
          </Label>
        </div>

        {formData.isOrganisation && (
          <div className="space-y-2 animate-in fade-in duration-200">
            <Label
              htmlFor="organisationName"
              className="text-sm font-medium text-mulearn-gray-600"
            >
              Organisation Name{" "}
              <span className="text-mulearn-trusty-blue">*</span>
            </Label>
            <Input
              id="organisationName"
              type="text"
              placeholder="Enter organisation name"
              value={formData.organisationName}
              onChange={(e) =>
                handleFormChange("organisationName", e.target.value)
              }
              className="h-11 bg-mulearn-whitish border-mulearn-gray-600/20 focus:border-mulearn-trusty-blue focus:ring-1 focus:ring-mulearn-trusty-blue transition-all"
              required
            />
          </div>
        )}
      </div>

      <div className="space-y-6 pt-4">
        <h3 className="text-lg font-medium text-mulearn-blackish tracking-tight">
          Select Amount
        </h3>

        <RadioGroup
          value={selectedAmount}
          onValueChange={(v) => {
            const option = donationAmounts.find((o) => o.id === v);
            if (option?.isCustom) {
              setSelectedAmount(v);
              if (customAmount) setTotalAmount(parseFloat(customAmount) || 0);
            } else {
              handleAmountChange(v, option?.amount);
            }
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {donationAmounts.slice(0, 4).map((option) => (
              <Label
                key={option.id}
                htmlFor={option.id}
                className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedAmount === option.id
                    ? "border-mulearn-trusty-blue bg-mulearn-trusty-blue/5 ring-2 ring-mulearn-trusty-blue/20"
                    : "border-mulearn-gray-600/20 bg-mulearn-whitish hover:border-mulearn-trusty-blue/50"
                }`}
              >
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="sr-only"
                />
                <span
                  className={`font-semibold text-base ${
                    selectedAmount === option.id
                      ? "text-mulearn-trusty-blue"
                      : "text-mulearn-blackish"
                  }`}
                >
                  {option.label}
                </span>
              </Label>
            ))}
          </div>

          <div className="mt-4">
            <Label
              htmlFor={donationAmounts[4].id}
              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                selectedAmount === donationAmounts[4].id
                  ? "border-mulearn-trusty-blue bg-mulearn-trusty-blue/5 ring-2 ring-mulearn-trusty-blue/20"
                  : "border-mulearn-gray-600/20 bg-mulearn-whitish hover:border-mulearn-trusty-blue/50"
              }`}
            >
              <RadioGroupItem
                value={donationAmounts[4].id}
                id={donationAmounts[4].id}
                className="mt-1"
              />
              <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="font-medium text-mulearn-blackish min-w-fit">
                  Custom Amount
                </span>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    handleCustomAmountChange(e.target.value);
                    setSelectedAmount(donationAmounts[4].id);
                  }}
                  onClick={() => setSelectedAmount(donationAmounts[4].id)}
                  className="flex-1 h-10 bg-mulearn-whitish border-mulearn-gray-600/20 focus:border-mulearn-trusty-blue focus:ring-1 focus:ring-mulearn-trusty-blue transition-all"
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </TabsContent>
  );

  return (
    <div className="w-full bg-mulearn-whitish rounded-lg border border-mulearn-gray-600/20 shadow-sm flex flex-col max-h-[calc(100vh-10rem)] overflow-hidden">
      <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 sm:py-10 min-h-0">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-mulearn-blackish tracking-tight">
            Make a Donation
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Support our mission to empower students through education
          </p>
        </div>

        <Tabs
          value={donationType}
          onValueChange={(v) => setDonationType(v as DonationType)}
        >
          <TabsList className="inline-flex h-11 items-center justify-center rounded-lg bg-mulearn-greyish/20 p-1 text-mulearn-gray-600 mb-2">
            <TabsTrigger
              value="one-time"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-mulearn-whitish data-[state=active]:text-mulearn-trusty-blue data-[state=active]:shadow-sm"
            >
              One Time
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-mulearn-whitish data-[state=active]:text-mulearn-trusty-blue data-[state=active]:shadow-sm"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-mulearn-whitish data-[state=active]:text-mulearn-trusty-blue data-[state=active]:shadow-sm"
            >
              Yearly
            </TabsTrigger>
          </TabsList>

          {renderDonationForm("one-time")}
          {renderDonationForm("monthly")}
          {renderDonationForm("yearly")}
        </Tabs>
      </div>

      <div className="border-t border-mulearn-gray-600/20 bg-mulearn-whitish px-6 sm:px-10 py-6">
        <div className="flex flex-col gap-5">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={(e) =>
                handleFormChange("termsAccepted", e.target.checked)
              }
              className="w-4 h-4 mt-0.5 text-mulearn-trusty-blue border-mulearn-gray-600/30 rounded focus:ring-2 focus:ring-mulearn-trusty-blue focus:ring-offset-0 transition-all cursor-pointer"
            />
            <Label
              htmlFor="termsAccepted"
              className="text-xs sm:text-sm text-mulearn-gray-600 cursor-pointer leading-relaxed"
            >
              I agree to the{" "}
              <a
                href="/termsandconditions"
                target="_blank"
                className="text-mulearn-trusty-blue hover:underline"
              >
                Terms and Conditions
              </a>
              ,{" "}
              <a
                href="/privacypolicy"
                target="_blank"
                className="text-mulearn-trusty-blue hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="#"
                target="_blank"
                className="text-mulearn-trusty-blue hover:underline"
              >
                Refund Policy
              </a>
            </Label>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Donation Amount</p>
              <p className="text-3xl sm:text-4xl font-semibold text-mulearn-blackish tracking-tight">
                ₹{totalAmount.toLocaleString("en-IN")}
              </p>
            </div>
            <Button
              variant="mulearn"
              className="sm:w-auto h-12 px-8 font-medium text-base shadow-sm hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                totalAmount === 0 ||
                !formData.termsAccepted ||
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.panNumber ||
                (formData.isOrganisation && !formData.organisationName)
              }
            >
              Continue to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
