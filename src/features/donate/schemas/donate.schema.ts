import { z } from "zod";
import { addressSchema, emailSchema, nameSchema, panSchema, phoneSchema } from "@/shared";

export const donationTypeSchema = z.enum(["one-time", "monthly", "yearly"]);
export type DonationType = z.infer<typeof donationTypeSchema>;

export const donationFormSchema = z
  .object({
    name: nameSchema,
    donationName: z.string().optional(),
    email: emailSchema,
    phone: phoneSchema,
    panNumber: panSchema,
    address: z.string().optional(),
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
  )
  .refine(
    (data) => {
      if (data.isOrganisation) {
        return addressSchema.safeParse(data.address).success;
      }
      return true;
    },
    {
      message: "Address is required when paying as an organisation",
      path: ["address"],
    },
  );

export type DonationFormData = z.infer<typeof donationFormSchema>;

export const donationPayloadSchema = z
  .object({
    amount: z.number().positive("Amount must be positive"),
    currency: z.string().default("INR"),
    name: nameSchema,
    donation_name: z.string().optional(),
    email: emailSchema,
    company: z.string().optional(),
    phone_number: phoneSchema,
    pan_number: panSchema,
    address: z.string().optional(),
    donation_type: z.string(),
    is_organisation: z.boolean(),
  })
  .refine(
    (data) => {
      if (data.is_organisation) {
        return addressSchema.safeParse(data.address).success;
      }
      return true;
    },
    {
      message: "Address is required when paying as an organisation",
      path: ["address"],
    },
  );

export type DonationPayload = z.infer<typeof donationPayloadSchema>;
