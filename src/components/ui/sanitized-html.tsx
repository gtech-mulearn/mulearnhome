"use client";

import type { ElementType } from "react";
import { formatAndSanitize } from "@/lib/sanitize";

export function SanitizedHtml({
  as: Tag = "span",
  text,
  className,
}: {
  as?: ElementType;
  text: string;
  className?: string;
}) {
  return (
    <Tag className={className} dangerouslySetInnerHTML={{ __html: formatAndSanitize(text) }} />
  );
}
