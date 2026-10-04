import { type NextRequest, NextResponse } from "next/server";
import { serverEnv } from "@/config/env.server";
import type { Captcha } from "@/shared";

export async function POST(req: NextRequest) {
  const secretKey = serverEnv.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json<Captcha>(
      {
        success: false,
        statusCode: "500",
        score: 0,
        error: "Server configuration error",
      },
      { status: 500 },
    );
  }

  let body: { gReCaptchaToken?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json<Captcha>(
      {
        success: false,
        statusCode: "400",
        score: 0,
        error: "Invalid JSON body",
      },
      { status: 400 },
    );
  }

  const gRecaptchaToken = body.gReCaptchaToken;

  if (!gRecaptchaToken) {
    return NextResponse.json<Captcha>(
      {
        success: false,
        statusCode: "400",
        score: 0,
        error: "Missing gReCaptchaToken",
      },
      { status: 400 },
    );
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: gRecaptchaToken,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      return NextResponse.json<Captcha>(
        {
          success: false,
          statusCode: "403",
          score: data.score ?? 0,
          error: data["error-codes"]?.join(", ") || "Captcha verification failed",
        },
        { status: 403 },
      );
    }

    if (data.score < 0.5) {
      return NextResponse.json<Captcha>(
        {
          success: false,
          statusCode: "403",
          score: data.score,
          error: "Low reCAPTCHA score",
        },
        { status: 403 },
      );
    }

    return NextResponse.json<Captcha>(
      {
        success: true,
        statusCode: "200",
        score: data.score,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("ReCaptcha verification error:", error);
    return NextResponse.json<Captcha>(
      {
        success: false,
        statusCode: "500",
        score: 0,
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
