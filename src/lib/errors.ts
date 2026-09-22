/**
 * Extracts a human-readable message from Django's standard error envelope.
 *
 * Handles:
 *  - `{ message: { general: ["..."] } }`               (most common)
 *  - `{ message: { field: ["...", ...], ... } }`        (DRF field-level validation errors)
 *  - `{ detail: "..." }`                                (DRF style)
 *  - a plain string or `Error` payload
 */
export function extractDjangoMessage(data: unknown): string | null {
  if (!data) return null;
  if (typeof data === "string") return data;
  if (data instanceof Error) return data.message;
  if (typeof data !== "object") return null;

  const d = data as Record<string, unknown>;
  const msg = d.message;

  if (msg && typeof msg === "object") {
    const msgObj = msg as Record<string, unknown>;

    if (Array.isArray(msgObj.general) && typeof msgObj.general[0] === "string") {
      return msgObj.general[0];
    }
    for (const key of Object.keys(msgObj)) {
      const val = msgObj[key];
      if (Array.isArray(val) && typeof val[0] === "string") return val[0];
      if (typeof val === "string") return val;
    }

    // Field-level validation errors: { field_name: ["..."], other_field: ["..."] }
    const parts: string[] = [];
    for (const [field, fieldErrors] of Object.entries(msgObj)) {
      if (Array.isArray(fieldErrors)) {
        const joined = fieldErrors.filter((e): e is string => typeof e === "string").join(", ");
        if (joined) parts.push(`${field}: ${joined}`);
      } else if (typeof fieldErrors === "string" && fieldErrors) {
        parts.push(`${field}: ${fieldErrors}`);
      }
    }
    if (parts.length > 0) return parts.join(" | ");
  }

  if (typeof msg === "string") return msg;
  if (typeof d.detail === "string") return d.detail;
  return null;
}
