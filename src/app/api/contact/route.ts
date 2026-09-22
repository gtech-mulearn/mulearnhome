import { type NextRequest, NextResponse } from "next/server";
import { serverEnv } from "@/config/env.server";
import { contactFormSchema, type EmailData, sendContactNotification } from "@/features/contact";

const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000,
  maxRequests: 10,
  cleanupIntervalMs: 60 * 60 * 1000,
} as const;

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const cleanupExpiredEntries = () => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
};

const cleanupTimer = setInterval(cleanupExpiredEntries, RATE_LIMIT_CONFIG.cleanupIntervalMs);

process.on("SIGTERM", () => clearInterval(cleanupTimer));
process.on("SIGINT", () => clearInterval(cleanupTimer));

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfConnectingIP = request.headers.get("cf-connecting-ip");

  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(",")[0].trim();

  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    });
    return false;
  }

  if (record.count >= RATE_LIMIT_CONFIG.maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

/**
 * Validates request data using Zod schema and sanitizes strings
 */
function validateAndSanitize(data: unknown): {
  isValid: boolean;
  errors: string[];
  sanitizedData?: EmailData;
} {
  // First, parse with Zod
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    const errors = result.error.issues.map((e: { message: string }) => e.message);
    return { isValid: false, errors };
  }

  // Sanitize string fields
  const sanitizeString = (str: string) => {
    return str
      .replace(/<[^>]*>/g, "")
      .replace(/[<>"'&]/g, "")
      .trim()
      .substring(0, 5000);
  };

  const sanitizedData = { ...result.data } as unknown as EmailData;
  Object.keys(sanitizedData).forEach((key) => {
    const value = sanitizedData[key as keyof EmailData];
    if (typeof value === "string") {
      (sanitizedData as Record<string, unknown>)[key] = sanitizeString(value);
    }
  });

  return { isValid: true, errors: [], sanitizedData };
}

export async function POST(request: NextRequest) {
  const headers = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  };

  try {
    if (!serverEnv.DISCORD_CONTACT_WEBHOOK) {
      return NextResponse.json(
        { success: false, message: "Service configuration error." },
        { status: 503, headers },
      );
    }

    const ip = getClientIP(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again in 15 minutes.",
        },
        { status: 429, headers },
      );
    }

    const body = await request.json();

    const { isValid, errors, sanitizedData } = validateAndSanitize(body);

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors,
        },
        { status: 400, headers },
      );
    }

    const ticketId = "";

    if (!sanitizedData) {
      return NextResponse.json(
        { success: false, message: "Validation failed" },
        { status: 400, headers },
      );
    }

    const emailData: EmailData = {
      ...sanitizedData,
      ticketId: ticketId,
    };

    const result = await sendContactNotification(emailData);

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: "Your message has been sent successfully! We'll get back to you soon.",
          ticketId: ticketId,
        },
        { headers },
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send message at this time. Please try again later.",
        },
        { status: 500, headers },
      );
    }
  } catch (_error) {
    return NextResponse.json(
      {
        success: false,
        message: "Service temporarily unavailable. Please try again later.",
      },
      { status: 500, headers },
    );
  }
}

const methodHeaders = {
  Allow: "POST",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405, headers: methodHeaders },
  );
}

export async function PUT() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405, headers: methodHeaders },
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405, headers: methodHeaders },
  );
}
