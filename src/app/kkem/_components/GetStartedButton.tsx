"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRedirectToApp } from "@/lib/utils";

/**
 * Small client leaf for the Learning Circles CTA. Kept isolated so the
 * surrounding section can remain server-rendered.
 */
export default function GetStartedButton() {
  const redirect = useRedirectToApp();
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    setRefreshToken(localStorage.getItem("refreshToken"));
  }, []);

  return (
    <Button
      variant="inverted"
      size="lg"
      className="mt-8"
      onClick={() => redirect?.(refreshToken ? "/dashboard/home" : "/register")}
    >
      Get Started
    </Button>
  );
}
