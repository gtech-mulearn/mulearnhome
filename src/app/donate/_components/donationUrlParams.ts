export type DonorType = "individual" | "org";
export type DonationMode = "one-time" | "subscription";

export interface DonationSelection {
  donorType: DonorType;
  mode: DonationMode;
  tierId: string | null;
  amount: number | null;
}

/**
 * Reads the raw donor type / mode / tier / amount out of the URL. Does not
 * validate `tierId` against an actual tier list — the caller resolves that
 * against the tier data it already has (see DonationForm, Task 8).
 */
export function parseDonationParams(searchParams: URLSearchParams): DonationSelection {
  const donorType: DonorType = searchParams.get("type") === "org" ? "org" : "individual";
  const mode: DonationMode =
    searchParams.get("mode") === "subscription" ? "subscription" : "one-time";
  const tierId = searchParams.get("tier");

  const amountParam = searchParams.get("amount");
  const parsedAmount = amountParam === null ? Number.NaN : Number(amountParam);
  const amount = Number.isFinite(parsedAmount) && parsedAmount > 0 ? parsedAmount : null;

  return { donorType, mode, tierId, amount };
}

/**
 * Builds the query params for the current selection. `tierId` and `amount`
 * are mutually exclusive — a preset tier always wins over a stale amount.
 */
export function buildDonationParams(selection: DonationSelection): URLSearchParams {
  const params = new URLSearchParams();
  params.set("type", selection.donorType);
  params.set("mode", selection.mode);

  if (selection.tierId) {
    params.set("tier", selection.tierId);
  } else if (selection.amount && selection.amount > 0) {
    params.set("amount", String(selection.amount));
  }

  return params;
}
